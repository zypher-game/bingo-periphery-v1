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

export declare namespace IBingoRoom {
  export type ParticipantStruct = {
    user: PromiseOrValue<string>;
    cardId: PromiseOrValue<BigNumberish>;
    isAbandoned: PromiseOrValue<boolean>;
  };

  export type ParticipantStructOutput = [string, BigNumber, boolean] & {
    user: string;
    cardId: BigNumber;
    isAbandoned: boolean;
  };

  export type GameRoundStruct = {
    round: PromiseOrValue<BigNumberish>;
    number: PromiseOrValue<BigNumberish>;
    timestamp: PromiseOrValue<BigNumberish>;
    player: PromiseOrValue<string>;
  };

  export type GameRoundStructOutput = [number, number, number, string] & {
    round: number;
    number: number;
    timestamp: number;
    player: string;
  };

  export type GameSettingsStruct = {
    betSize: PromiseOrValue<BigNumberish>;
    expectedLines: PromiseOrValue<BigNumberish>;
    minNumber: PromiseOrValue<BigNumberish>;
    maxNumber: PromiseOrValue<BigNumberish>;
  };

  export type GameSettingsStructOutput = [BigNumber, number, number, number] & {
    betSize: BigNumber;
    expectedLines: number;
    minNumber: number;
    maxNumber: number;
  };
}

export declare namespace BingoGameRoom {
  export type GameTimeoutStruct = {
    startTimeout: PromiseOrValue<BigNumberish>;
    boostRounds: PromiseOrValue<BigNumberish>;
    roundGap: PromiseOrValue<BigNumberish>;
    roundTimeout: PromiseOrValue<BigNumberish>;
    maxDuration: PromiseOrValue<BigNumberish>;
  };

  export type GameTimeoutStructOutput = [
    number,
    number,
    number,
    number,
    number
  ] & {
    startTimeout: number;
    boostRounds: number;
    roundGap: number;
    roundTimeout: number;
    maxDuration: number;
  };
}

export interface BingoGameRoomInterface extends utils.Interface {
  functions: {
    "RECENT_GAME_COUNTS()": FunctionFragment;
    "abandon(uint256)": FunctionFragment;
    "bingo(uint256,uint8[][],bytes)": FunctionFragment;
    "bingoFee()": FunctionFragment;
    "donationAddr()": FunctionFragment;
    "donationFee()": FunctionFragment;
    "gameCard()": FunctionFragment;
    "gamePlayerCounts(uint256)": FunctionFragment;
    "getCurrentRound(uint256)": FunctionFragment;
    "getGameInfo(uint256)": FunctionFragment;
    "getSelectedNumbers(uint256)": FunctionFragment;
    "restoreGame(address,uint8[][],bytes)": FunctionFragment;
    "selectAndBingo(uint256,uint8,uint8[][],bytes)": FunctionFragment;
    "selectNumber(uint256,uint8)": FunctionFragment;
    "summary()": FunctionFragment;
    "thirdParty()": FunctionFragment;
    "timer()": FunctionFragment;
    "tokenVIP()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "RECENT_GAME_COUNTS"
      | "abandon"
      | "bingo"
      | "bingoFee"
      | "donationAddr"
      | "donationFee"
      | "gameCard"
      | "gamePlayerCounts"
      | "getCurrentRound"
      | "getGameInfo"
      | "getSelectedNumbers"
      | "restoreGame"
      | "selectAndBingo"
      | "selectNumber"
      | "summary"
      | "thirdParty"
      | "timer"
      | "tokenVIP"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "RECENT_GAME_COUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "abandon",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "bingo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "bingoFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "donationAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "donationFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gameCard", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gamePlayerCounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentRound",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGameInfo",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelectedNumbers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "restoreGame",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selectAndBingo",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[][],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selectNumber",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "summary", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "thirdParty",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "timer", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokenVIP", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "RECENT_GAME_COUNTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "abandon", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bingo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bingoFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "donationAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "donationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gameCard", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gamePlayerCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGameInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restoreGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectAndBingo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "summary", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "thirdParty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenVIP", data: BytesLike): Result;

  events: {
    "Bingo(uint256,address)": EventFragment;
    "GameHalted(uint256,address,bool,uint256)": EventFragment;
    "GameParticipated(uint256,address,uint256,uint256,uint8)": EventFragment;
    "GameStarted(uint256,address,address[])": EventFragment;
    "NumberSelected(uint256,uint32,address,uint8)": EventFragment;
    "RewardChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bingo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameHalted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameParticipated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NumberSelected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardChanged"): EventFragment;
}

export interface BingoEventObject {
  gameId: BigNumber;
  player: string;
}
export type BingoEvent = TypedEvent<[BigNumber, string], BingoEventObject>;

export type BingoEventFilter = TypedEventFilter<BingoEvent>;

export interface GameHaltedEventObject {
  gameId: BigNumber;
  user: string;
  isOvertime: boolean;
  confiscate: BigNumber;
}
export type GameHaltedEvent = TypedEvent<
  [BigNumber, string, boolean, BigNumber],
  GameHaltedEventObject
>;

export type GameHaltedEventFilter = TypedEventFilter<GameHaltedEvent>;

export interface GameParticipatedEventObject {
  gameId: BigNumber;
  player: string;
  cardId: BigNumber;
  betSize: BigNumber;
  position: number;
}
export type GameParticipatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, number],
  GameParticipatedEventObject
>;

export type GameParticipatedEventFilter =
  TypedEventFilter<GameParticipatedEvent>;

export interface GameStartedEventObject {
  gameId: BigNumber;
  cardContract: string;
  players: string[];
}
export type GameStartedEvent = TypedEvent<
  [BigNumber, string, string[]],
  GameStartedEventObject
>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface NumberSelectedEventObject {
  gameId: BigNumber;
  round: number;
  player: string;
  number: number;
}
export type NumberSelectedEvent = TypedEvent<
  [BigNumber, number, string, number],
  NumberSelectedEventObject
>;

export type NumberSelectedEventFilter = TypedEventFilter<NumberSelectedEvent>;

export interface RewardChangedEventObject {
  newReward: string;
  oldReward: string;
}
export type RewardChangedEvent = TypedEvent<
  [string, string],
  RewardChangedEventObject
>;

export type RewardChangedEventFilter = TypedEventFilter<RewardChangedEvent>;

export interface BingoGameRoom extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BingoGameRoomInterface;

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
    RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<[number]>;

    abandon(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bingoFee(overrides?: CallOverrides): Promise<[string]>;

    donationAddr(overrides?: CallOverrides): Promise<[string]>;

    donationFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    gameCard(overrides?: CallOverrides): Promise<[string]>;

    gamePlayerCounts(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, number, string] & {
        round: number;
        player: string;
        remain: number;
        status: string;
      }
    >;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        string,
        BigNumber,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        IBingoRoom.GameSettingsStructOutput,
        string
      ] & {
        startedAt: number;
        endedAt: number;
        winner: string;
        winAmount: BigNumber;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        settings: IBingoRoom.GameSettingsStructOutput;
        status: string;
      }
    >;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]] & { numbers: number[] }>;

    restoreGame(
      player: PromiseOrValue<string>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedGameLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    summary(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalGameStarted: BigNumber;
        totalPlayersJoined: BigNumber;
        totalRewardDistributed: BigNumber;
      }
    >;

    thirdParty(overrides?: CallOverrides): Promise<[string]>;

    timer(
      overrides?: CallOverrides
    ): Promise<[BingoGameRoom.GameTimeoutStructOutput]>;

    tokenVIP(overrides?: CallOverrides): Promise<[string]>;
  };

  RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<number>;

  abandon(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bingo(
    gameId: PromiseOrValue<BigNumberish>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bingoFee(overrides?: CallOverrides): Promise<string>;

  donationAddr(overrides?: CallOverrides): Promise<string>;

  donationFee(overrides?: CallOverrides): Promise<BigNumber>;

  gameCard(overrides?: CallOverrides): Promise<string>;

  gamePlayerCounts(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getCurrentRound(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, string, number, string] & {
      round: number;
      player: string;
      remain: number;
      status: string;
    }
  >;

  getGameInfo(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      number,
      string,
      BigNumber,
      IBingoRoom.ParticipantStructOutput[],
      IBingoRoom.GameRoundStructOutput[],
      IBingoRoom.GameSettingsStructOutput,
      string
    ] & {
      startedAt: number;
      endedAt: number;
      winner: string;
      winAmount: BigNumber;
      players: IBingoRoom.ParticipantStructOutput[];
      rounds: IBingoRoom.GameRoundStructOutput[];
      settings: IBingoRoom.GameSettingsStructOutput;
      status: string;
    }
  >;

  getSelectedNumbers(
    gameId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  restoreGame(
    player: PromiseOrValue<string>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedGameLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selectAndBingo(
    gameId: PromiseOrValue<BigNumberish>,
    number: PromiseOrValue<BigNumberish>,
    cardNumbers: PromiseOrValue<BigNumberish>[][],
    signedLabel: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selectNumber(
    gameId: PromiseOrValue<BigNumberish>,
    number: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  summary(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      totalGameStarted: BigNumber;
      totalPlayersJoined: BigNumber;
      totalRewardDistributed: BigNumber;
    }
  >;

  thirdParty(overrides?: CallOverrides): Promise<string>;

  timer(
    overrides?: CallOverrides
  ): Promise<BingoGameRoom.GameTimeoutStructOutput>;

  tokenVIP(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<number>;

    abandon(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    bingoFee(overrides?: CallOverrides): Promise<string>;

    donationAddr(overrides?: CallOverrides): Promise<string>;

    donationFee(overrides?: CallOverrides): Promise<BigNumber>;

    gameCard(overrides?: CallOverrides): Promise<string>;

    gamePlayerCounts(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, number, string] & {
        round: number;
        player: string;
        remain: number;
        status: string;
      }
    >;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        number,
        string,
        BigNumber,
        IBingoRoom.ParticipantStructOutput[],
        IBingoRoom.GameRoundStructOutput[],
        IBingoRoom.GameSettingsStructOutput,
        string
      ] & {
        startedAt: number;
        endedAt: number;
        winner: string;
        winAmount: BigNumber;
        players: IBingoRoom.ParticipantStructOutput[];
        rounds: IBingoRoom.GameRoundStructOutput[];
        settings: IBingoRoom.GameSettingsStructOutput;
        status: string;
      }
    >;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;

    restoreGame(
      player: PromiseOrValue<string>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedGameLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, boolean] & {
        playingGameId: BigNumber;
        autoEndTime: number;
        isCardContentMatched: boolean;
      }
    >;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    summary(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        totalGameStarted: BigNumber;
        totalPlayersJoined: BigNumber;
        totalRewardDistributed: BigNumber;
      }
    >;

    thirdParty(overrides?: CallOverrides): Promise<string>;

    timer(
      overrides?: CallOverrides
    ): Promise<BingoGameRoom.GameTimeoutStructOutput>;

    tokenVIP(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Bingo(uint256,address)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): BingoEventFilter;
    Bingo(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): BingoEventFilter;

    "GameHalted(uint256,address,bool,uint256)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      isOvertime?: null,
      confiscate?: null
    ): GameHaltedEventFilter;
    GameHalted(
      gameId?: PromiseOrValue<BigNumberish> | null,
      user?: PromiseOrValue<string> | null,
      isOvertime?: null,
      confiscate?: null
    ): GameHaltedEventFilter;

    "GameParticipated(uint256,address,uint256,uint256,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      cardId?: PromiseOrValue<BigNumberish> | null,
      betSize?: null,
      position?: null
    ): GameParticipatedEventFilter;
    GameParticipated(
      gameId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      cardId?: PromiseOrValue<BigNumberish> | null,
      betSize?: null,
      position?: null
    ): GameParticipatedEventFilter;

    "GameStarted(uint256,address,address[])"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      cardContract?: null,
      players?: null
    ): GameStartedEventFilter;
    GameStarted(
      gameId?: PromiseOrValue<BigNumberish> | null,
      cardContract?: null,
      players?: null
    ): GameStartedEventFilter;

    "NumberSelected(uint256,uint32,address,uint8)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      round?: null,
      player?: PromiseOrValue<string> | null,
      number?: null
    ): NumberSelectedEventFilter;
    NumberSelected(
      gameId?: PromiseOrValue<BigNumberish> | null,
      round?: null,
      player?: PromiseOrValue<string> | null,
      number?: null
    ): NumberSelectedEventFilter;

    "RewardChanged(address,address)"(
      newReward?: PromiseOrValue<string> | null,
      oldReward?: PromiseOrValue<string> | null
    ): RewardChangedEventFilter;
    RewardChanged(
      newReward?: PromiseOrValue<string> | null,
      oldReward?: PromiseOrValue<string> | null
    ): RewardChangedEventFilter;
  };

  estimateGas: {
    RECENT_GAME_COUNTS(overrides?: CallOverrides): Promise<BigNumber>;

    abandon(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bingoFee(overrides?: CallOverrides): Promise<BigNumber>;

    donationAddr(overrides?: CallOverrides): Promise<BigNumber>;

    donationFee(overrides?: CallOverrides): Promise<BigNumber>;

    gameCard(overrides?: CallOverrides): Promise<BigNumber>;

    gamePlayerCounts(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    restoreGame(
      player: PromiseOrValue<string>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedGameLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    summary(overrides?: CallOverrides): Promise<BigNumber>;

    thirdParty(overrides?: CallOverrides): Promise<BigNumber>;

    timer(overrides?: CallOverrides): Promise<BigNumber>;

    tokenVIP(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    RECENT_GAME_COUNTS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    abandon(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bingo(
      gameId: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bingoFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    donationAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    donationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gameCard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gamePlayerCounts(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentRound(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGameInfo(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSelectedNumbers(
      gameId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    restoreGame(
      player: PromiseOrValue<string>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedGameLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selectAndBingo(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      cardNumbers: PromiseOrValue<BigNumberish>[][],
      signedLabel: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selectNumber(
      gameId: PromiseOrValue<BigNumberish>,
      number: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    summary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    thirdParty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenVIP(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
