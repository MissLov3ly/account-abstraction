import './aa.init'
import { ethers } from 'hardhat'
import { Contract, Signer } from 'ethers'
import {
  EntryPoint,
  EntryPoint__factory,
  ZeroDevPluginSafe,
  ZeroDevPluginSafe__factory,
  ZeroDevGnosisSafeAccountFactory,
  ZeroDevGnosisSafeAccountFactory__factory,
  GnosisSafeProxy,
  GnosisSafeProxyFactory__factory,
  TestCounter,
  TestCounter__factory,
  ZeroDevSessionKeyPlugin,
  ZeroDevSessionKeyPlugin__factory,
  FunctionSignaturePolicy,
  FunctionSignaturePolicy__factory,
  ZeroDevPolicyPlugin,
  ZeroDevPolicyPlugin__factory
} from '../typechain'
import {
  AddressZero,
  createAddress,
  createAccountOwner,
  deployEntryPoint,
  getBalance,
  HashZero,
  isDeployed
} from './testutils'
import { fillAndSign, fillUserOp, getUserOpHash } from './UserOp'
import { defaultAbiCoder, hexConcat, hexZeroPad, parseEther } from 'ethers/lib/utils'
import { expect } from 'chai'
import { UserOperation } from './UserOperation'


describe.only('ZeroDev Gnosis Proxy', function () {
  this.timeout(30000)

  let ethersSigner: Signer
  let safeSingleton: ZeroDevPluginSafe
  let sessionKeyPlugin : ZeroDevSessionKeyPlugin
  let owner: Signer
  let ownerAddress: string
  let proxy: GnosisSafeProxy
  let entryPoint: EntryPoint
  let counter: TestCounter
  let proxySafe: ZeroDevPluginSafe
  let safe_execTxCallData: string

  let accountFactory: ZeroDevGnosisSafeAccountFactory

  before('before', async function () {
    // EIP4337Manager fails to compile with solc-coverage
    if (process.env.COVERAGE != null) {
      return this.skip()
    }

    const provider = ethers.provider
    ethersSigner = provider.getSigner()

    entryPoint = await deployEntryPoint()

    // standard safe singleton contract (implementation)
    safeSingleton = await new ZeroDevPluginSafe__factory(ethersSigner).deploy(entryPoint.address)
    // standard safe proxy factory
    const proxyFactory = await new GnosisSafeProxyFactory__factory(ethersSigner).deploy()
    owner = createAccountOwner()
    ownerAddress = await owner.getAddress()
    counter = await new TestCounter__factory(ethersSigner).deploy()

    sessionKeyPlugin = await new ZeroDevSessionKeyPlugin__factory(ethersSigner).deploy(entryPoint.address);

    accountFactory = await new ZeroDevGnosisSafeAccountFactory__factory(ethersSigner)
      .deploy(proxyFactory.address, safeSingleton.address)

    await accountFactory.createAccount(ownerAddress, 0)
    // we use our accountFactory to create and configure the proxy.
    // but the actual deployment is done internally by the gnosis factory
    const ev = await proxyFactory.queryFilter(proxyFactory.filters.ProxyCreation())
    const addr = ev[0].args.proxy

    proxy =
      proxySafe = ZeroDevPluginSafe__factory.connect(addr, owner)

    await ethersSigner.sendTransaction({
      to: proxy.address,
      value: parseEther('0.1')
    })

    const counter_countCallData = counter.interface.encodeFunctionData('count')
    safe_execTxCallData = safeSingleton.interface.encodeFunctionData('executeAndRevert', [counter.address, 0, counter_countCallData, 0])
  })
  let beneficiary: string
  beforeEach(() => {
    beneficiary = createAddress()
  })


  it.skip('should fail from wrong entrypoint', async function () { // i don't know how to handle this properly i'll leave it a TODO
    const op = await fillAndSign({
      sender: proxy.address
    }, owner, entryPoint)

    const anotherEntryPoint = await new EntryPoint__factory(ethersSigner).deploy()

    await expect(anotherEntryPoint.handleOps([op], beneficiary)).to.revertedWith('account: not from entrypoint')
  })

  it('should fail on invalid userop', async function () {
    let op = await fillAndSign({
      sender: proxy.address,
      nonce: 1234,
      callGasLimit: 1e6,
      callData: safe_execTxCallData
    }, owner, entryPoint)
    await expect(entryPoint.handleOps([op], beneficiary)).to.revertedWith('account: invalid nonce')

    op = await fillAndSign({
      sender: proxy.address,
      callGasLimit: 1e6,
      callData: safe_execTxCallData
    }, owner, entryPoint)
    // invalidate the signature
    op.callGasLimit = 1
    await expect(entryPoint.handleOps([op], beneficiary)).to.revertedWith('FailedOp(0, "0x0000000000000000000000000000000000000000", "AA24 signature error")')
  })

  it('should exec', async function () {
    const op = await fillAndSign({
      sender: proxy.address,
      callGasLimit: 1e6,
      callData: safe_execTxCallData
    }, owner, entryPoint)
    const rcpt = await entryPoint.handleOps([op], beneficiary).then(async r => r.wait())
    console.log('gasUsed=', rcpt.gasUsed, rcpt.transactionHash)

    const ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
    expect(ev.args!.success).to.eq(true)
    expect(await getBalance(beneficiary)).to.eq(ev.args!.actualGasCost)
  })

  it('should revert with reason', async function () {
    const counter_countFailCallData = counter.interface.encodeFunctionData('countFail')
    const safe_execFailTxCallData = safeSingleton.interface.encodeFunctionData('executeAndRevert', [counter.address, 0, counter_countFailCallData, 0])

    const op = await fillAndSign({
      sender: proxy.address,
      callGasLimit: 1e6,
      callData: safe_execFailTxCallData
    }, owner, entryPoint)
    const rcpt = await entryPoint.handleOps([op], beneficiary).then(async r => r.wait())
    console.log('gasUsed=', rcpt.gasUsed, rcpt.transactionHash)

    // decode the revertReason
    const ev = rcpt.events!.find(ev => ev.event === 'UserOperationRevertReason')!
    let message: string = ev.args!.revertReason
    if (message.startsWith('0x08c379a0')) {
      // Error(string)
      message = defaultAbiCoder.decode(['string'], '0x' + message.substring(10)).toString()
    }
    expect(message).to.eq('count failed')
  })

  let counterfactualAddress: string
  it('should create account', async function () {
    const initCode = hexConcat([
      accountFactory.address,
      accountFactory.interface.encodeFunctionData('createAccount', [ownerAddress, 123])
    ])

    counterfactualAddress = await accountFactory.callStatic.getAddress(ownerAddress, 123)
    expect(!await isDeployed(counterfactualAddress))

    await ethersSigner.sendTransaction({
      to: counterfactualAddress,
      value: parseEther('0.1')
    })
    const op = await fillAndSign({
      sender: counterfactualAddress,
      initCode,
      verificationGasLimit: 400000
    }, owner, entryPoint)

    const rcpt = await entryPoint.handleOps([op], beneficiary).then(async r => r.wait())
    console.log('gasUsed=', rcpt.gasUsed, rcpt.transactionHash)
    expect(await isDeployed(counterfactualAddress))

    const newCode = await ethers.provider.getCode(counterfactualAddress)
    expect(newCode.length).eq(324)
  })

  it('another op after creation', async function () {
    if (counterfactualAddress == null) this.skip()
    expect(await isDeployed(counterfactualAddress))

    const op = await fillAndSign({
      sender: counterfactualAddress,
      callData: safe_execTxCallData
    }, owner, entryPoint)

    const rcpt = await entryPoint.handleOps([op], beneficiary).then(async r => r.wait())
    console.log('gasUsed=', rcpt.gasUsed, rcpt.transactionHash)
  })

  describe('session key', async function(){
    let sessionKey : Signer;
    let userSignedUserOp : UserOperation;
    beforeEach(async function() {
        sessionKey = createAccountOwner(); // use random session key
        let userOp = {
          sender: proxy.address,
          callGasLimit: 1e6,
          callData: safe_execTxCallData,
          verificationGasLimit: 1e6,
        }
        userSignedUserOp = await approvePlugin(
          owner,
          userOp,
          1777068462,
          0,
          sessionKeyPlugin.address,
          hexZeroPad(await sessionKey.getAddress(),20),
          entryPoint
        );
        // fund wallet some eth for gas
        await ethersSigner.sendTransaction({
          to: proxy.address,
          value: parseEther('10')
        });
    });

    it("should exec", async function() {
      const signedUserOp = await signUserOpWithSessionKey(
        userSignedUserOp,
        sessionKey,
        sessionKeyPlugin,
        entryPoint
      );

      const count_before = await counter.counters(proxy.address);
      const nonce_before = await getSessionNonce(sessionKeyPlugin, proxy.address, sessionKey);
      const rcpt = await entryPoint.handleOps([signedUserOp], beneficiary).then(async r => r.wait())
      const ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
      expect(ev.args!.success).to.eq(true)
      expect(await counter.counters(proxy.address)).to.eq(count_before.add(1));
      const nonce_after = await getSessionNonce(sessionKeyPlugin, proxy.address, sessionKey);
      expect(nonce_after).to.be.eq(ethers.BigNumber.from(nonce_before).add(1));
    });
    it("should be able to exec multiple times with same user signature", async function() {
      let signedUserOp = await signUserOpWithSessionKey(
        userSignedUserOp,
        sessionKey,
        sessionKeyPlugin,
        entryPoint
      );

      let count_before = await counter.counters(proxy.address);
      let nonce_before = await getSessionNonce(sessionKeyPlugin, proxy.address, sessionKey);
      let rcpt = await entryPoint.handleOps([signedUserOp], beneficiary).then(async r => r.wait())
      let ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
      expect(ev.args!.success).to.eq(true)
      expect(await counter.counters(proxy.address)).to.eq(count_before.add(1));
      let nonce_after = await getSessionNonce(sessionKeyPlugin, proxy.address, sessionKey);
      expect(nonce_after).to.be.eq(ethers.BigNumber.from(nonce_before).add(1));

      signedUserOp = await signUserOpWithSessionKey(
        userSignedUserOp,
        sessionKey,
        sessionKeyPlugin,
        entryPoint
      );

      count_before = await counter.counters(proxy.address);
      nonce_before = await getSessionNonce(sessionKeyPlugin, proxy.address, sessionKey);
      rcpt = await entryPoint.handleOps([signedUserOp], beneficiary).then(async r => r.wait())
      ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
      expect(ev.args!.success).to.eq(true)
      expect(await counter.counters(proxy.address)).to.eq(count_before.add(1));
      nonce_after = await getSessionNonce(sessionKeyPlugin, proxy.address, sessionKey);
      expect(nonce_after).to.be.eq(ethers.BigNumber.from(nonce_before).add(1));
    });
  })

  describe('policy session key', async function(){
    let sessionKey : Signer;
    let userSignedUserOp : UserOperation;
    let policy : FunctionSignaturePolicy;
    let policyPlugin : ZeroDevPolicyPlugin;
    beforeEach(async function() {
        policy = await new FunctionSignaturePolicy__factory(ethersSigner).deploy(
          [{
            to : counter.address,
            sig : counter.interface.getSighash('count') 
          }]
        );

        policyPlugin = await new ZeroDevPolicyPlugin__factory(ethersSigner).deploy(
          entryPoint.address
        );
        sessionKey = createAccountOwner(); // use random session key
        let userOp = {
          sender: proxy.address,
          callGasLimit: 1e6,
          callData: safe_execTxCallData,
          verificationGasLimit: 1e6,
        }
        userSignedUserOp = await approvePlugin(
          owner,
          userOp,
          1777068462,
          0,
          policyPlugin.address,
          hexConcat([
            hexZeroPad(await sessionKey.getAddress(),20),
            hexZeroPad(policy.address,20)
          ]),
          entryPoint
        );
        // fund wallet some eth for gas
        await ethersSigner.sendTransaction({
          to: proxy.address,
          value: parseEther('10')
        });
    });

    it("should exec", async function() {
      const signedUserOp = await signUserOpWithPolicy(
        userSignedUserOp,
        sessionKey,
        policyPlugin,
        policy,
        entryPoint
      );

      const count_before = await counter.counters(proxy.address);
      const nonce_before = await getPolicySessionNonce(policyPlugin, proxy.address, sessionKey);
      const rcpt = await entryPoint.handleOps([signedUserOp], beneficiary).then(async r => r.wait())
      const ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
      expect(ev.args!.success).to.eq(true)
      expect(await counter.counters(proxy.address)).to.eq(count_before.add(1));
      const nonce_after = await getPolicySessionNonce(policyPlugin, proxy.address, sessionKey);
      expect(nonce_after).to.be.eq(ethers.BigNumber.from(nonce_before).add(1));
    });
    it("should be able to exec multiple times with same user signature", async function() {
      let signedUserOp = await signUserOpWithPolicy(
        userSignedUserOp,
        sessionKey,
        policyPlugin,
        policy,
        entryPoint
      );

      let count_before = await counter.counters(proxy.address);
      let nonce_before = await getPolicySessionNonce(policyPlugin, proxy.address, sessionKey);
      let rcpt = await entryPoint.handleOps([signedUserOp], beneficiary).then(async r => r.wait())
      let ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
      expect(ev.args!.success).to.eq(true)
      expect(await counter.counters(proxy.address)).to.eq(count_before.add(1));
      let nonce_after = await getPolicySessionNonce(policyPlugin, proxy.address, sessionKey);
      expect(nonce_after).to.be.eq(ethers.BigNumber.from(nonce_before).add(1));

      signedUserOp = await signUserOpWithPolicy(
        userSignedUserOp,
        sessionKey,
        policyPlugin,
        policy,
        entryPoint
      );

      count_before = await counter.counters(proxy.address);
      nonce_before = await getPolicySessionNonce(policyPlugin, proxy.address, sessionKey);
      rcpt = await entryPoint.handleOps([signedUserOp], beneficiary).then(async r => r.wait())
      ev = rcpt.events!.find(ev => ev.event === 'UserOperationEvent')!
      expect(ev.args!.success).to.eq(true)
      expect(await counter.counters(proxy.address)).to.eq(count_before.add(1));
      nonce_after = await getPolicySessionNonce(policyPlugin, proxy.address, sessionKey);
      expect(nonce_after).to.be.eq(ethers.BigNumber.from(nonce_before).add(1));
    });
  })
})

async function getSessionNonce(
  plugin : ZeroDevSessionKeyPlugin,
  sender : string,
  sessionKey : Signer
) : Promise<number> {
  return await ZeroDevPluginSafe__factory.connect(sender, plugin.provider).callStatic
  .queryPlugin(plugin.address, plugin.interface.encodeFunctionData('sessionNonce', [await sessionKey.getAddress()])).catch(e => {
    if(e.errorName !== "QueryResult") {
      throw e;
    }
    return e.errorArgs.result;
  });
}

async function getPolicySessionNonce(
  plugin : ZeroDevPolicyPlugin,
  sender : string,
  sessionKey : Signer
) : Promise<number> {
  return await ZeroDevPluginSafe__factory.connect(sender, plugin.provider).callStatic
  .queryPlugin(plugin.address, plugin.interface.encodeFunctionData('sessionNonce', [await sessionKey.getAddress()])).catch(e => {
    if(e.errorName !== "QueryResult") {
      throw e;
    }
    return e.errorArgs.result;
  });
}

async function approvePlugin(
  owner : Signer,
  userOp : Partial<UserOperation>,
  validUntil: number,
  validAfter:number,
  pluginAddress : string,
  data : string,
  entryPoint?: EntryPoint
) : Promise<UserOperation> {
  const op = await fillAndSign(userOp, owner, entryPoint)
  const provider = entryPoint?.provider
  const domain = {
    name : "ZeroDevPluginSafe",
    version: "1.0.0",
    verifyingContract: userOp.sender,
    chainId: (await provider!.getNetwork()).chainId
  }
  const value = {
    sender : userOp.sender,
    validUntil : validUntil,
    validAfter : validAfter,
    plugin : pluginAddress,
    data : data
  }
  const userSig = await owner._signTypedData(
      domain,
      {
        "ValidateUserOpPlugin" : [
          {name: "sender", type: "address"},
          {name: "validUntil", type: "uint48"},
          {name: "validAfter", type: "uint48"},
          {name: "plugin", type: "address"},
          {name: "data", type: "bytes"}
        ]
      },
      value
  );

  const signature = hexConcat([
    hexZeroPad(pluginAddress, 20),
    hexZeroPad(validUntil, 6),
    hexZeroPad(validAfter, 6),
    userSig,
  ]);
  return {
    ...op,
    nonce : 0,
    signature : signature
  };
}

async function signUserOpWithSessionKey(
  userOp : UserOperation,
  sessionKey : Signer,
  plugin : ZeroDevSessionKeyPlugin,
  entryPoint?: EntryPoint
): Promise<UserOperation> {
  let op = await fillUserOp(userOp, entryPoint);
  const provider = entryPoint?.provider;
  const chainId = await provider!.getNetwork().then(net => net.chainId);
  const opHash = await getUserOpHash(op, entryPoint!.address, chainId);
  const sessionDomain = {
    name : "ZeroDevSessionKeyPlugin",
    version: "1.0.0",
    verifyingContract: userOp.sender,
    chainId: chainId
  };

  const nonce = await getSessionNonce(plugin, userOp.sender!, sessionKey);
  const sessionKeySig = await sessionKey._signTypedData(
    sessionDomain,
    {
      "Session" : [
        {name: "userOpHash", type: "bytes32"},
        {name: "nonce", type: "uint256"},
      ]
    },
    {
      userOpHash : opHash,
      nonce : nonce 
    }
  );

  return {
    ...op,
    signature : hexConcat([
      op.signature,
      ethers.utils.defaultAbiCoder.encode(["bytes","bytes"], [await sessionKey.getAddress(), sessionKeySig])
    ])
  };
}

async function signUserOpWithPolicy(
  userOp : UserOperation,
  sessionKey : Signer,
  plugin : ZeroDevPolicyPlugin,
  policy : FunctionSignaturePolicy,
  entryPoint?: EntryPoint
): Promise<UserOperation> {
  let op = await fillUserOp(userOp, entryPoint);
  const provider = entryPoint?.provider;
  const chainId = await provider!.getNetwork().then(net => net.chainId);
  const opHash = await getUserOpHash(op, entryPoint!.address, chainId);
  const sessionDomain = {
    name : "ZeroDevPolicyPlugin",
    version: "1.0.0",
    verifyingContract: userOp.sender,
    chainId: chainId
  };

  const nonce = await getPolicySessionNonce(plugin, userOp.sender!, sessionKey);
  const sessionKeySig = await sessionKey._signTypedData(
    sessionDomain,
    {
      "Session" : [
        {name: "userOpHash", type: "bytes32"},
        {name: "nonce", type: "uint256"},
      ]
    },
    {
      userOpHash : opHash,
      nonce : nonce //await plugin.sessionNonce(await sessionKey.getAddress())
    }
  );

  return {
    ...op,
    signature : hexConcat([
      op.signature,
      ethers.utils.defaultAbiCoder.encode(["bytes","bytes"], [
        hexConcat([hexZeroPad(await sessionKey.getAddress(), 20),hexZeroPad(policy.address, 20)]),
        sessionKeySig
      ])
    ])
  };
}
