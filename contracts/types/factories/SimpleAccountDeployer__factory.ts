/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  SimpleAccountDeployer,
  SimpleAccountDeployerInterface,
} from "../SimpleAccountDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "deployAccount",
    outputs: [
      {
        internalType: "contract SimpleAccount",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061178d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806308a6354e1461003b5780633bf2c3e714610077575b600080fd5b61004e6100493660046102c2565b61008a565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004e6100853660046102c2565b6101f9565b60006101ef8260001b604051806020016100a390610290565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081815273ffffffffffffffffffffffffffffffffffffffff8981166020840152881690820152606001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610138929160200161033e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207fff00000000000000000000000000000000000000000000000000000000000000848301523060601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602185015260358401859052605580850182905283518086039091018152607590940190925282519201919091206000906101f2565b90505b9392505050565b60008061020785858561008a565b905073ffffffffffffffffffffffffffffffffffffffff81163b801561022f575090506101f2565b8360001b868660405161024190610290565b73ffffffffffffffffffffffffffffffffffffffff9283168152911660208201526040018190604051809103906000f5905080158015610285573d6000803e3d6000fd5b509695505050505050565b6114048061035483390190565b73ffffffffffffffffffffffffffffffffffffffff811681146102bf57600080fd5b50565b6000806000606084860312156102d757600080fd5b83356102e28161029d565b925060208401356102f28161029d565b929592945050506040919091013590565b6000815160005b81811015610324576020818501810151868301520161030a565b81811115610333576000828601525b509290920192915050565b60006101ef61034d8386610303565b8461030356fe608060405234801561001057600080fd5b5060405161140438038061140483398101604081905261002f9161008f565b600180546001600160a01b039384166001600160a01b031990911617905560008054919092166c01000000000000000000000000026001600160601b039091161790556100c9565b6001600160a01b038116811461008c57600080fd5b50565b600080604083850312156100a257600080fd5b82516100ad81610077565b60208401519092506100be81610077565b809150509250929050565b61132c806100d86000396000f3fe6080604052600436106100cb5760003560e01c80638da5cb5b11610074578063b0d691fe1161004e578063b0d691fe14610239578063c399ec8814610264578063d0cb75fa1461027957600080fd5b80638da5cb5b14610194578063a9059cbb146101f6578063affed0e01461021657600080fd5b80634a58db19116100a55780634a58db191461014c5780634d44560d1461015457806380c5c7d01461017457600080fd5b80630565bb67146100d75780630825d1fc146100f95780631b71bb6e1461012c57600080fd5b366100d257005b600080fd5b3480156100e357600080fd5b506100f76100f2366004610f5c565b610299565b005b34801561010557600080fd5b50610119610114366004610fe5565b6102e8565b6040519081526020015b60405180910390f35b34801561013857600080fd5b506100f761014736600461104c565b61032f565b6100f7610343565b34801561016057600080fd5b506100f761016f366004611070565b6103ce565b34801561018057600080fd5b506100f761018f366004610f5c565b61047d565b3480156101a057600080fd5b506000546101d1906c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610123565b34801561020257600080fd5b506100f7610211366004611070565b610485565b34801561022257600080fd5b506000546bffffffffffffffffffffffff16610119565b34801561024557600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff166101d1565b34801561027057600080fd5b506101196104d5565b34801561028557600080fd5b506100f76102943660046110e1565b61058b565b6102a16106af565b6102e2848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061074c92505050565b50505050565b60006102f26107c9565b6102fd85858561084a565b905061030c604086018661114d565b905060000361031e5761031e8561099c565b61032782610a64565b949350505050565b610337610acf565b61034081610ad7565b50565b600061036460015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d80600081146103bb576040519150601f19603f3d011682016040523d82523d6000602084013e6103c0565b606091505b505090508061034057600080fd5b6103d66106af565b60015473ffffffffffffffffffffffffffffffffffffffff166040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b15801561046157600080fd5b505af1158015610475573d6000803e3d6000fd5b505050505050565b6102a16107c9565b61048d6106af565b60405173ffffffffffffffffffffffffffffffffffffffff83169082156108fc029083906000818181858888f193505050501580156104d0573d6000803e3d6000fd5b505050565b60006104f660015473ffffffffffffffffffffffffffffffffffffffff1690565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610562573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058691906111b2565b905090565b6105936106af565b828114610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064015b60405180910390fd5b60005b838110156106a857610696858583818110610621576106216111cb565b9050602002016020810190610636919061104c565b600085858581811061064a5761064a6111cb565b905060200281019061065c919061114d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061074c92505050565b806106a081611229565b915050610604565b5050505050565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff163314806106e457503330145b61074a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016105f8565b565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516107759190611261565b60006040518083038185875af1925050503d80600081146107b2576040519150601f19603f3d011682016040523d82523d6000602084013e6107b7565b606091505b5091509150816106a857805160208201fd5b60015473ffffffffffffffffffffffffffffffffffffffff16331461074a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016105f8565b6000806108a4846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90506108f46108b761014087018761114d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508593925050610b659050565b6000546c01000000000000000000000000900473ffffffffffffffffffffffffffffffffffffffff9081169116148061092b575032155b610991576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6163636f756e743a2077726f6e67207369676e6174757265000000000000000060448201526064016105f8565b506000949350505050565b600080546020830135916bffffffffffffffffffffffff90911690806109c18361129c565b91906101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506bffffffffffffffffffffffff1614610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f6163636f756e743a20696e76616c6964206e6f6e63650000000000000000000060448201526064016105f8565b80156103405760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d80600081146106a8576040519150601f19603f3d011682016040523d82523d6000602084013e6106a8565b61074a6106af565b60015460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806000610b748585610b89565b91509150610b8181610bce565b509392505050565b6000808251604103610bbf5760208301516040840151606085015160001a610bb387828585610e22565b94509450505050610bc7565b506000905060025b9250929050565b6000816004811115610be257610be26112c7565b03610bea5750565b6001816004811115610bfe57610bfe6112c7565b03610c65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105f8565b6002816004811115610c7957610c796112c7565b03610ce0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105f8565b6003816004811115610cf457610cf46112c7565b03610d81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105f8565b6004816004811115610d9557610d956112c7565b03610340576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105f8565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610e595750600090506003610f31565b8460ff16601b14158015610e7157508460ff16601c14155b15610e825750600090506004610f31565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610ed6573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116610f2a57600060019250925050610f31565b9150600090505b94509492505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461034057600080fd5b60008060008060608587031215610f7257600080fd5b8435610f7d81610f3a565b935060208501359250604085013567ffffffffffffffff80821115610fa157600080fd5b818701915087601f830112610fb557600080fd5b813581811115610fc457600080fd5b886020828501011115610fd657600080fd5b95989497505060200194505050565b60008060008060808587031215610ffb57600080fd5b843567ffffffffffffffff81111561101257600080fd5b8501610160818803121561102557600080fd5b935060208501359250604085013561103c81610f3a565b9396929550929360600135925050565b60006020828403121561105e57600080fd5b813561106981610f3a565b9392505050565b6000806040838503121561108357600080fd5b823561108e81610f3a565b946020939093013593505050565b60008083601f8401126110ae57600080fd5b50813567ffffffffffffffff8111156110c657600080fd5b6020830191508360208260051b8501011115610bc757600080fd5b600080600080604085870312156110f757600080fd5b843567ffffffffffffffff8082111561110f57600080fd5b61111b8883890161109c565b9096509450602087013591508082111561113457600080fd5b506111418782880161109c565b95989497509550505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261118257600080fd5b83018035915067ffffffffffffffff82111561119d57600080fd5b602001915036819003821315610bc757600080fd5b6000602082840312156111c457600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361125a5761125a6111fa565b5060010190565b6000825160005b818110156112825760208186018101518583015201611268565b81811115611291576000828501525b509190910192915050565b60006bffffffffffffffffffffffff8083168181036112bd576112bd6111fa565b6001019392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220340451f9cd278f52a5b69846845d8bbb1e0cc8a21c3fb0e89e15359f80acd40e64736f6c634300080f0033a26469706673582212205eee82d4fa784d04d9fe803f7beb6ccc87c02b10041c2fb5e744b3ec5682f6dd64736f6c634300080f0033";

type SimpleAccountDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccountDeployer__factory extends ContractFactory {
  constructor(...args: SimpleAccountDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccountDeployer> {
    return super.deploy(overrides || {}) as Promise<SimpleAccountDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SimpleAccountDeployer {
    return super.attach(address) as SimpleAccountDeployer;
  }
  override connect(signer: Signer): SimpleAccountDeployer__factory {
    return super.connect(signer) as SimpleAccountDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountDeployerInterface {
    return new utils.Interface(_abi) as SimpleAccountDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccountDeployer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SimpleAccountDeployer;
  }
}
