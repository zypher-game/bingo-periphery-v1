/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IGameLineup {
  export type WaitingInfoStruct = {
    level: PromiseOrValue<BigNumberish>;
    users: PromiseOrValue<string>[];
    minWinCounts: PromiseOrValue<BigNumberish>;
    minWinRate: PromiseOrValue<BigNumberish>;
    maxWinCounts: PromiseOrValue<BigNumberish>;
    maxWinRate: PromiseOrValue<BigNumberish>;
    startedAt: PromiseOrValue<BigNumberish>;
    endedAt: PromiseOrValue<BigNumberish>;
    betSize: PromiseOrValue<BigNumberish>;
    expectedLines: PromiseOrValue<BigNumberish>;
    minNumber: PromiseOrValue<BigNumberish>;
    maxNumber: PromiseOrValue<BigNumberish>;
  };

  export type WaitingInfoStructOutput = [
    number,
    string[],
    number,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    number,
    number,
    number
  ] & {
    level: number;
    users: string[];
    minWinCounts: number;
    minWinRate: number;
    maxWinCounts: number;
    maxWinRate: number;
    startedAt: number;
    endedAt: number;
    betSize: BigNumber;
    expectedLines: number;
    minNumber: number;
    maxNumber: number;
  };
}

export interface GameLineupInterface extends utils.Interface {
  functions: {
    "join(uint8,bytes)": FunctionFragment;
    "leave()": FunctionFragment;
    "lineupUsers()": FunctionFragment;
    "start()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "join" | "leave" | "lineupUsers" | "start"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "join",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
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

  events: {
    "LineupJoined(address)": EventFragment;
    "LineupLeft(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LineupJoined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LineupLeft"): EventFragment;
}

export interface LineupJoinedEventObject {
  player: string;
}
export type LineupJoinedEvent = TypedEvent<[string], LineupJoinedEventObject>;

export type LineupJoinedEventFilter = TypedEventFilter<LineupJoinedEvent>;

export interface LineupLeftEventObject {
  player: string;
}
export type LineupLeftEvent = TypedEvent<[string], LineupLeftEventObject>;

export type LineupLeftEventFilter = TypedEventFilter<LineupLeftEvent>;

export interface GameLineup extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GameLineupInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    join(
      level: PromiseOrValue<BigNumberish>,
      zkCard: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leave(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lineupUsers(
      overrides?: CallOverrides
    ): Promise<[BigNumber, IGameLineup.WaitingInfoStructOutput[]]>;

    start(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  join(
    level: PromiseOrValue<BigNumberish>,
    zkCard: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leave(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lineupUsers(
    overrides?: CallOverrides
  ): Promise<[BigNumber, IGameLineup.WaitingInfoStructOutput[]]>;

  start(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    join(
      level: PromiseOrValue<BigNumberish>,
      zkCard: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    leave(overrides?: CallOverrides): Promise<void>;

    lineupUsers(
      overrides?: CallOverrides
    ): Promise<[BigNumber, IGameLineup.WaitingInfoStructOutput[]]>;

    start(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "LineupJoined(address)"(
      player?: PromiseOrValue<string> | null
    ): LineupJoinedEventFilter;
    LineupJoined(
      player?: PromiseOrValue<string> | null
    ): LineupJoinedEventFilter;

    "LineupLeft(address)"(
      player?: PromiseOrValue<string> | null
    ): LineupLeftEventFilter;
    LineupLeft(player?: PromiseOrValue<string> | null): LineupLeftEventFilter;
  };

  estimateGas: {
    join(
      level: PromiseOrValue<BigNumberish>,
      zkCard: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leave(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lineupUsers(overrides?: CallOverrides): Promise<BigNumber>;

    start(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    join(
      level: PromiseOrValue<BigNumberish>,
      zkCard: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leave(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lineupUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    start(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
