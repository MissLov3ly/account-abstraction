import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare type UserOperationStruct = {
    sender: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    initCode: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    callGasLimit: PromiseOrValue<BigNumberish>;
    verificationGasLimit: PromiseOrValue<BigNumberish>;
    preVerificationGas: PromiseOrValue<BigNumberish>;
    maxFeePerGas: PromiseOrValue<BigNumberish>;
    maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    paymasterAndData: PromiseOrValue<BytesLike>;
    signature: PromiseOrValue<BytesLike>;
};
export declare type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface VerifyingPaymasterInterface extends utils.Interface {
    functions: {
        "addStake(uint32)": FunctionFragment;
        "deposit()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "getHash((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "owner()": FunctionFragment;
        "postOp(uint8,bytes,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setEntryPoint(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "validatePaymasterUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "verifyingSigner()": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "deposit" | "entryPoint" | "getDeposit" | "getHash" | "owner" | "postOp" | "renounceOwnership" | "setEntryPoint" | "transferOwnership" | "unlockStake" | "validatePaymasterUserOp" | "verifyingSigner" | "withdrawStake" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getHash", values: [UserOperationStruct]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "postOp", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setEntryPoint", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatePaymasterUserOp", values: [
        UserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "verifyingSigner", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "postOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEntryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatePaymasterUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyingSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface VerifyingPaymaster extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VerifyingPaymasterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setEntryPoint(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validatePaymasterUserOp(userOp: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, requiredPreFund: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            context: string;
            deadline: BigNumber;
        }>;
        verifyingSigner(overrides?: CallOverrides): Promise<[string]>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    getHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setEntryPoint(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unlockStake(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validatePaymasterUserOp(userOp: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, requiredPreFund: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
        context: string;
        deadline: BigNumber;
    }>;
    verifyingSigner(overrides?: CallOverrides): Promise<string>;
    withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        deposit(overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setEntryPoint(_entryPoint: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        validatePaymasterUserOp(userOp: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, requiredPreFund: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            context: string;
            deadline: BigNumber;
        }>;
        verifyingSigner(overrides?: CallOverrides): Promise<string>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setEntryPoint(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validatePaymasterUserOp(userOp: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, requiredPreFund: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        verifyingSigner(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(unstakeDelaySec: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getHash(userOp: UserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        postOp(mode: PromiseOrValue<BigNumberish>, context: PromiseOrValue<BytesLike>, actualGasCost: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setEntryPoint(_entryPoint: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validatePaymasterUserOp(userOp: UserOperationStruct, arg1: PromiseOrValue<BytesLike>, requiredPreFund: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyingSigner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
