/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IBingoFeeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "afterGameTimeOut"
      | "afterGameWon"
      | "beforeJoin"
      | "leave"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterGameTimeOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "afterGameWon",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeJoin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "leave", values: [AddressLike]): string;

  decodeFunctionResult(
    functionFragment: "afterGameTimeOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterGameWon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "beforeJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leave", data: BytesLike): Result;
}

export interface IBingoFee extends BaseContract {
  connect(runner?: ContractRunner | null): IBingoFee;
  waitForDeployment(): Promise<this>;

  interface: IBingoFeeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  afterGameTimeOut: TypedContractMethod<
    [gameId: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  afterGameWon: TypedContractMethod<
    [gameId: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  beforeJoin: TypedContractMethod<[from: AddressLike], [void], "nonpayable">;

  leave: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "afterGameTimeOut"
  ): TypedContractMethod<[gameId: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "afterGameWon"
  ): TypedContractMethod<
    [gameId: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeJoin"
  ): TypedContractMethod<[from: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "leave"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;

  filters: {};
}