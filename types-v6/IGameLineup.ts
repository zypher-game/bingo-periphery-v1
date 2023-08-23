/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IGameLineupInterface extends Interface {
  getFunction(
    nameOrSignature: "join" | "leave" | "lineupUsers" | "start"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "LineupJoined" | "LineupLeft"
  ): EventFragment;

  encodeFunctionData(functionFragment: "join", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "leave", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lineupUsers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;

  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leave", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lineupUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
}

export namespace LineupJoinedEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LineupLeftEvent {
  export type InputTuple = [player: AddressLike];
  export type OutputTuple = [player: string];
  export interface OutputObject {
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IGameLineup extends BaseContract {
  connect(runner?: ContractRunner | null): IGameLineup;
  waitForDeployment(): Promise<this>;

  interface: IGameLineupInterface;

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

  join: TypedContractMethod<[zkCard: BytesLike], [void], "nonpayable">;

  leave: TypedContractMethod<[], [void], "nonpayable">;

  lineupUsers: TypedContractMethod<[], [string[]], "view">;

  start: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "join"
  ): TypedContractMethod<[zkCard: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "leave"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lineupUsers"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "start"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "LineupJoined"
  ): TypedContractEvent<
    LineupJoinedEvent.InputTuple,
    LineupJoinedEvent.OutputTuple,
    LineupJoinedEvent.OutputObject
  >;
  getEvent(
    key: "LineupLeft"
  ): TypedContractEvent<
    LineupLeftEvent.InputTuple,
    LineupLeftEvent.OutputTuple,
    LineupLeftEvent.OutputObject
  >;

  filters: {
    "LineupJoined(address)": TypedContractEvent<
      LineupJoinedEvent.InputTuple,
      LineupJoinedEvent.OutputTuple,
      LineupJoinedEvent.OutputObject
    >;
    LineupJoined: TypedContractEvent<
      LineupJoinedEvent.InputTuple,
      LineupJoinedEvent.OutputTuple,
      LineupJoinedEvent.OutputObject
    >;

    "LineupLeft(address)": TypedContractEvent<
      LineupLeftEvent.InputTuple,
      LineupLeftEvent.OutputTuple,
      LineupLeftEvent.OutputObject
    >;
    LineupLeft: TypedContractEvent<
      LineupLeftEvent.InputTuple,
      LineupLeftEvent.OutputTuple,
      LineupLeftEvent.OutputObject
    >;
  };
}
