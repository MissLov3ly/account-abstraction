"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DepositPaymaster__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "COST_OF_POST",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "addDepositFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint32",
                name: "unstakeDelaySec",
                type: "uint32"
            },
        ],
        name: "addStake",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "contract IOracle",
                name: "tokenPriceOracle",
                type: "address"
            },
        ],
        name: "addToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "balances",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "depositInfo",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_unlockBlock",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            {
                internalType: "contract IEntryPoint",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "getDeposit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "lockTokenDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            },
        ],
        name: "oracles",
        outputs: [
            {
                internalType: "contract IOracle",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum IPaymaster.PostOpMode",
                name: "mode",
                type: "uint8"
            },
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "actualGasCost",
                type: "uint256"
            },
        ],
        name: "postOp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entryPoint",
                type: "address"
            },
        ],
        name: "setEntryPoint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "unlockBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "unlockTokenDeposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "initCode",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes"
                    },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes"
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes"
                    },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple"
            },
            {
                internalType: "bytes32",
                name: "userOpHash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "maxCost",
                type: "uint256"
            },
        ],
        name: "validatePaymasterUserOp",
        outputs: [
            {
                internalType: "bytes",
                name: "context",
                type: "bytes"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
        ],
        name: "withdrawStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            },
            {
                internalType: "address",
                name: "target",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "withdrawTokensTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60806040523480156200001157600080fd5b5060405162001e4038038062001e40833981016040819052620000349162000148565b8062000040336200006b565b6200004b81620000bb565b5062000064336000908152600460205260409020439055565b506200017a565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000c5620000e7565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314620001465760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6000602082840312156200015b57600080fd5b81516001600160a01b03811681146200017357600080fd5b9392505050565b611cb6806200018a6000396000f3fe6080604052600436106101805760003560e01c8063a9a23409116100d6578063c399ec881161007f578063d0e30db011610059578063d0e30db0146104bd578063f2fde38b146104c5578063f465c77e146104e557600080fd5b8063c399ec8814610466578063cc9c837c1461047b578063cd8f80c21461049b57600080fd5b8063bb9fe6bf116100b0578063bb9fe6bf146103f9578063c23a5cea1461040e578063c23f001f1461042e57600080fd5b8063a9a2340914610369578063addd509914610389578063b0d691fe146103cc57600080fd5b80635476bd7211610138578063796d437111610112578063796d4371146102e35780638da5cb5b146102f95780639ed0fb681461034557600080fd5b80635476bd721461028e578063584465f2146102ae578063715018a6146102ce57600080fd5b8063382edd9e11610169578063382edd9e146101ba578063493b0170146101da5780634a6f84cf1461025357600080fd5b80630396cb6014610185578063205c28781461019a575b600080fd5b61019861019336600461175c565b610513565b005b3480156101a657600080fd5b506101986101b53660046117a4565b6105a9565b3480156101c657600080fd5b506101986101d53660046117d0565b610625565b3480156101e657600080fd5b506102396101f5366004611811565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260036020908152604080832093909416825291825282812054600490925291909120549091565b604080519283526020830191909152015b60405180910390f35b34801561025f57600080fd5b5061028061026e36600461184a565b60046020526000908152604090205481565b60405190815260200161024a565b34801561029a57600080fd5b506101986102a9366004611811565b61075a565b3480156102ba57600080fd5b506101986102c936600461184a565b6107e7565b3480156102da57600080fd5b50610198610836565b3480156102ef57600080fd5b506102806188b881565b34801561030557600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161024a565b34801561035157600080fd5b50610198336000908152600460205260409020439055565b34801561037557600080fd5b50610198610384366004611867565b61084a565b34801561039557600080fd5b506103206103a436600461184a565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103d857600080fd5b506001546103209073ffffffffffffffffffffffffffffffffffffffff1681565b34801561040557600080fd5b50610198610864565b34801561041a57600080fd5b5061019861042936600461184a565b6108ea565b34801561043a57600080fd5b50610280610449366004611811565b600360209081526000928352604080842090915290825290205481565b34801561047257600080fd5b5061028061097a565b34801561048757600080fd5b506101986104963660046117d0565b610a12565b3480156104a757600080fd5b5061019833600090815260046020526040812055565b610198610b31565b3480156104d157600080fd5b506101986104e036600461184a565b610b9d565b3480156104f157600080fd5b506105056105003660046118f6565b610c54565b60405161024a9291906119c0565b61051b610f9d565b6001546040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff8316600482015273ffffffffffffffffffffffffffffffffffffffff90911690630396cb609034906024016000604051808303818588803b15801561058d57600080fd5b505af11580156105a1573d6000803e3d6000fd5b505050505050565b6105b1610f9d565b6001546040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490529091169063205c287890604401600060405180830381600087803b15801561058d57600080fd5b61064773ffffffffffffffffffffffffffffffffffffffff841633308461101e565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260026020526040902054166106da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f756e737570706f7274656420746f6b656e00000000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff80841660009081526003602090815260408083209386168352929052908120805483929061071e908490611a11565b909155505073ffffffffffffffffffffffffffffffffffffffff821633036107555761075533600090815260046020526040812055565b505050565b610762610f9d565b73ffffffffffffffffffffffffffffffffffffffff828116600090815260026020526040902054161561079457600080fd5b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b6107ef610f9d565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b61083e610f9d565b61084860006110fa565b565b61085261116f565b61085e84848484611193565b50505050565b61086c610f9d565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156108d657600080fd5b505af115801561085e573d6000803e3d6000fd5b6108f2610f9d565b6001546040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301529091169063c23a5cea90602401600060405180830381600087803b15801561095f57600080fd5b505af1158015610973573d6000803e3d6000fd5b5050505050565b6001546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa1580156109e9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0d9190611a29565b905090565b3360009081526004602052604090205415801590610a3e57503360009081526004602052604090205443115b610aca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4465706f7369745061796d61737465723a206d75737420756e6c6f636b546f6b60448201527f656e4465706f736974000000000000000000000000000000000000000000000060648201526084016106d1565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260036020908152604080832033845290915281208054839290610b0a908490611a42565b90915550610755905073ffffffffffffffffffffffffffffffffffffffff8416838361130b565b6001546040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9091169063b760faf99034906024016000604051808303818588803b15801561095f57600080fd5b610ba5610f9d565b73ffffffffffffffffffffffffffffffffffffffff8116610c48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016106d1565b610c51816110fa565b50565b606060006188b88560a0013511610ced576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f4465706f7369745061796d61737465723a2067617320746f6f206c6f7720666f60448201527f7220706f73744f7000000000000000000000000000000000000000000000000060648201526084016106d1565b366000610cfe610120880188611a59565b909250905060288114610d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4465706f7369745061796d61737465723a207061796d6173746572416e64446160448201527f7461206d757374207370656369667920746f6b656e000000000000000000000060648201526084016106d1565b6000610da28260148186611ac5565b610dab91611aef565b60601c905087356000610dbe8389611361565b90506000610dcb8b6114af565b73ffffffffffffffffffffffffffffffffffffffff841660009081526004602052604090205490915015610e80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4465706f7369745061796d61737465723a206465706f736974206e6f74206c6f60448201527f636b65640000000000000000000000000000000000000000000000000000000060648201526084016106d1565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260036020908152604080832093871683529290522054821115610f42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4465706f7369745061796d61737465723a206465706f73697420746f6f206c6f60448201527f770000000000000000000000000000000000000000000000000000000000000060648201526084016106d1565b6040805173ffffffffffffffffffffffffffffffffffffffff948516602082015294909316848401526060840152608083015260a0808301979097528051808303909701875260c09091019052509295600095509350505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106d1565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261085e9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526114d6565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461084857600080fd5b6000808080806111a587890189611b37565b9450945094509450945060008183856188b86111c19190611b88565b6111cb908a611a11565b6111d59190611b88565b6111df9190611bc5565b905060028a60028111156111f5576111f5611c00565b146112215761121c73ffffffffffffffffffffffffffffffffffffffff861687308461101e565b61126b565b73ffffffffffffffffffffffffffffffffffffffff8086166000908152600360209081526040808320938a1683529290529081208054839290611265908490611a42565b90915550505b73ffffffffffffffffffffffffffffffffffffffff8516600090815260036020526040812082916112b160005473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112fa9190611a11565b909155505050505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107559084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611078565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526002602052604081205490911680611418576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4465706f7369745061796d61737465723a20756e737570706f7274656420746f60448201527f6b656e000000000000000000000000000000000000000000000000000000000060648201526084016106d1565b6040517fd1eca9cf0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff82169063d1eca9cf90602401602060405180830381865afa158015611483573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a79190611a29565b949350505050565b600060e08201356101008301358082036114ca575092915050565b6114a7824883016115e2565b6000611538826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115fa9092919063ffffffff16565b80519091501561075557808060200190518101906115569190611c2f565b610755576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106d1565b60008183106115f157816115f3565b825b9392505050565b60606114a784846000858573ffffffffffffffffffffffffffffffffffffffff85163b611683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106d1565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116ac9190611c51565b60006040518083038185875af1925050503d80600081146116e9576040519150601f19603f3d011682016040523d82523d6000602084013e6116ee565b606091505b50915091506116fe828286611709565b979650505050505050565b606083156117185750816115f3565b8251156117285782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d19190611c6d565b60006020828403121561176e57600080fd5b813563ffffffff811681146115f357600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610c5157600080fd5b600080604083850312156117b757600080fd5b82356117c281611782565b946020939093013593505050565b6000806000606084860312156117e557600080fd5b83356117f081611782565b9250602084013561180081611782565b929592945050506040919091013590565b6000806040838503121561182457600080fd5b823561182f81611782565b9150602083013561183f81611782565b809150509250929050565b60006020828403121561185c57600080fd5b81356115f381611782565b6000806000806060858703121561187d57600080fd5b84356003811061188c57600080fd5b9350602085013567ffffffffffffffff808211156118a957600080fd5b818701915087601f8301126118bd57600080fd5b8135818111156118cc57600080fd5b8860208285010111156118de57600080fd5b95986020929092019750949560400135945092505050565b60008060006060848603121561190b57600080fd5b833567ffffffffffffffff81111561192257600080fd5b8401610160818703121561193557600080fd5b95602085013595506040909401359392505050565b60005b8381101561196557818101518382015260200161194d565b8381111561085e5750506000910152565b6000815180845261198e81602086016020860161194a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6040815260006119d36040830185611976565b90508260208301529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115611a2457611a246119e2565b500190565b600060208284031215611a3b57600080fd5b5051919050565b600082821015611a5457611a546119e2565b500390565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a8e57600080fd5b83018035915067ffffffffffffffff821115611aa957600080fd5b602001915036819003821315611abe57600080fd5b9250929050565b60008085851115611ad557600080fd5b83861115611ae257600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015611b2f5780818660140360031b1b83161692505b505092915050565b600080600080600060a08688031215611b4f57600080fd5b8535611b5a81611782565b94506020860135611b6a81611782565b94979496505050506040830135926060810135926080909101359150565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611bc057611bc06119e2565b500290565b600082611bfb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215611c4157600080fd5b815180151581146115f357600080fd5b60008251611c6381846020870161194a565b9190910192915050565b6020815260006115f3602083018461197656fea2646970667358221220a2327351c7db0864f4f4dabd9932364346445e0e89008b1e8cedd04f9debce8a64736f6c634300080f0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DepositPaymaster__factory = /** @class */ (function (_super) {
    __extends(DepositPaymaster__factory, _super);
    function DepositPaymaster__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    DepositPaymaster__factory.prototype.deploy = function (_entryPoint, overrides) {
        return _super.prototype.deploy.call(this, _entryPoint, overrides || {});
    };
    DepositPaymaster__factory.prototype.getDeployTransaction = function (_entryPoint, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _entryPoint, overrides || {});
    };
    DepositPaymaster__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DepositPaymaster__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DepositPaymaster__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DepositPaymaster__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DepositPaymaster__factory.bytecode = _bytecode;
    DepositPaymaster__factory.abi = _abi;
    return DepositPaymaster__factory;
}(ethers_1.ContractFactory));
exports.DepositPaymaster__factory = DepositPaymaster__factory;
