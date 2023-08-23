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
  PayableOverrides,
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

export declare namespace ZkBingoPoints {
  export type ClaimConfStruct = {
    ordinary: PromiseOrValue<BigNumberish>;
    princely: PromiseOrValue<BigNumberish>;
  };

  export type ClaimConfStructOutput = [BigNumber, BigNumber] & {
    ordinary: BigNumber;
    princely: BigNumber;
  };

  export type SwapInfoStruct = {
    amount: PromiseOrValue<BigNumberish>;
    discount: PromiseOrValue<BigNumberish>;
  };

  export type SwapInfoStructOutput = [BigNumber, BigNumber] & {
    amount: BigNumber;
    discount: BigNumber;
  };
}

export interface ZkBingoPointsInterface extends utils.Interface {
  functions: {
    "CONSECUTIVE_TIMES()": FunctionFragment;
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "FREE_DURATION()": FunctionFragment;
    "blindBoxAddress()": FunctionFragment;
    "claim()": FunctionFragment;
    "claimEnable()": FunctionFragment;
    "claimStartTime()": FunctionFragment;
    "dayClaimed(string,address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "nativeSwap(address,uint256)": FunctionFragment;
    "nativeWithdrawTo(address,uint256)": FunctionFragment;
    "pointsToken()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setBlindBoxAddress(address)": FunctionFragment;
    "setClaimConf(uint8,(uint256,uint256)[])": FunctionFragment;
    "setClaimEnable(bool)": FunctionFragment;
    "setClaimStartTime(uint256)": FunctionFragment;
    "setPointsToken(address)": FunctionFragment;
    "setSwapInfo(uint256,(uint256,uint256)[])": FunctionFragment;
    "setSwapRatio(address,uint8,uint256)": FunctionFragment;
    "signInInfos(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "swapInfos(uint256)": FunctionFragment;
    "swapRatios(address)": FunctionFragment;
    "swaps(address,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONSECUTIVE_TIMES"
      | "DEFAULT_ADMIN_ROLE"
      | "FREE_DURATION"
      | "blindBoxAddress"
      | "claim"
      | "claimEnable"
      | "claimStartTime"
      | "dayClaimed"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "nativeSwap"
      | "nativeWithdrawTo"
      | "pointsToken"
      | "renounceRole"
      | "revokeRole"
      | "setBlindBoxAddress"
      | "setClaimConf"
      | "setClaimEnable"
      | "setClaimStartTime"
      | "setPointsToken"
      | "setSwapInfo"
      | "setSwapRatio"
      | "signInInfos"
      | "supportsInterface"
      | "swapInfos"
      | "swapRatios"
      | "swaps"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CONSECUTIVE_TIMES",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FREE_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blindBoxAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimEnable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dayClaimed",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeSwap",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "nativeWithdrawTo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pointsToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBlindBoxAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimConf",
    values: [PromiseOrValue<BigNumberish>, ZkBingoPoints.ClaimConfStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimEnable",
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setClaimStartTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPointsToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapInfo",
    values: [PromiseOrValue<BigNumberish>, ZkBingoPoints.SwapInfoStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setSwapRatio",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "signInInfos",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapInfos",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "swapRatios",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "swaps",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "CONSECUTIVE_TIMES",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FREE_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blindBoxAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dayClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nativeSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nativeWithdrawTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pointsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBlindBoxAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimConf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimEnable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setClaimStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPointsToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSwapRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signInInfos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapInfos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapRatios", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swaps", data: BytesLike): Result;

  events: {
    "Claim(address,uint8,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "Swap(address,address,uint256,uint256)": EventFragment;
    "WithdrawTo(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawTo"): EventFragment;
}

export interface ClaimEventObject {
  operator: string;
  claimType: number;
  amount: BigNumber;
}
export type ClaimEvent = TypedEvent<
  [string, number, BigNumber],
  ClaimEventObject
>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface SwapEventObject {
  operator: string;
  token: string;
  nativeAmount: BigNumber;
  pointsAmount: BigNumber;
}
export type SwapEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface WithdrawToEventObject {
  operator: string;
  to: string;
  amount: BigNumber;
}
export type WithdrawToEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawToEventObject
>;

export type WithdrawToEventFilter = TypedEventFilter<WithdrawToEvent>;

export interface ZkBingoPoints extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZkBingoPointsInterface;

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
    CONSECUTIVE_TIMES(overrides?: CallOverrides): Promise<[BigNumber]>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    FREE_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    blindBoxAddress(overrides?: CallOverrides): Promise<[string]>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimEnable(overrides?: CallOverrides): Promise<[boolean]>;

    claimStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    dayClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      pointsToken_: PromiseOrValue<string>,
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nativeSwap(
      lobby_: PromiseOrValue<string>,
      infoIndex_: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nativeWithdrawTo(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pointsToken(overrides?: CallOverrides): Promise<[string]>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBlindBoxAddress(
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setClaimConf(
      claimType: PromiseOrValue<BigNumberish>,
      claimConf_: ZkBingoPoints.ClaimConfStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setClaimEnable(
      claimEnable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setClaimStartTime(
      claimStartTime_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPointsToken(
      pointsToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapInfo(
      lastLength: PromiseOrValue<BigNumberish>,
      swapInfos_: ZkBingoPoints.SwapInfoStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSwapRatio(
      token_: PromiseOrValue<string>,
      decimals_: PromiseOrValue<BigNumberish>,
      ratio_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signInInfos(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number, string] & { signCount: number; lastSignIn: string }>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    swapInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; discount: BigNumber }
    >;

    swapRatios(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { decimals: number; ratio: BigNumber }>;

    swaps(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  CONSECUTIVE_TIMES(overrides?: CallOverrides): Promise<BigNumber>;

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  FREE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  blindBoxAddress(overrides?: CallOverrides): Promise<string>;

  claim(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimEnable(overrides?: CallOverrides): Promise<boolean>;

  claimStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  dayClaimed(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    pointsToken_: PromiseOrValue<string>,
    blindBoxAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nativeSwap(
    lobby_: PromiseOrValue<string>,
    infoIndex_: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nativeWithdrawTo(
    to_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pointsToken(overrides?: CallOverrides): Promise<string>;

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBlindBoxAddress(
    blindBoxAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setClaimConf(
    claimType: PromiseOrValue<BigNumberish>,
    claimConf_: ZkBingoPoints.ClaimConfStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setClaimEnable(
    claimEnable_: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setClaimStartTime(
    claimStartTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPointsToken(
    pointsToken_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapInfo(
    lastLength: PromiseOrValue<BigNumberish>,
    swapInfos_: ZkBingoPoints.SwapInfoStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSwapRatio(
    token_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    ratio_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signInInfos(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[number, string] & { signCount: number; lastSignIn: string }>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  swapInfos(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; discount: BigNumber }
  >;

  swapRatios(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { decimals: number; ratio: BigNumber }>;

  swaps(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    CONSECUTIVE_TIMES(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    FREE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    blindBoxAddress(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    claimEnable(overrides?: CallOverrides): Promise<boolean>;

    claimStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    dayClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      pointsToken_: PromiseOrValue<string>,
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nativeSwap(
      lobby_: PromiseOrValue<string>,
      infoIndex_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    nativeWithdrawTo(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    pointsToken(overrides?: CallOverrides): Promise<string>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setBlindBoxAddress(
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimConf(
      claimType: PromiseOrValue<BigNumberish>,
      claimConf_: ZkBingoPoints.ClaimConfStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimEnable(
      claimEnable_: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setClaimStartTime(
      claimStartTime_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPointsToken(
      pointsToken_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapInfo(
      lastLength: PromiseOrValue<BigNumberish>,
      swapInfos_: ZkBingoPoints.SwapInfoStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    setSwapRatio(
      token_: PromiseOrValue<string>,
      decimals_: PromiseOrValue<BigNumberish>,
      ratio_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    signInInfos(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number, string] & { signCount: number; lastSignIn: string }>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    swapInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; discount: BigNumber }
    >;

    swapRatios(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { decimals: number; ratio: BigNumber }>;

    swaps(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "Claim(address,uint8,uint256)"(
      operator?: PromiseOrValue<string> | null,
      claimType?: null,
      amount?: null
    ): ClaimEventFilter;
    Claim(
      operator?: PromiseOrValue<string> | null,
      claimType?: null,
      amount?: null
    ): ClaimEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;

    "Swap(address,address,uint256,uint256)"(
      operator?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      nativeAmount?: null,
      pointsAmount?: null
    ): SwapEventFilter;
    Swap(
      operator?: PromiseOrValue<string> | null,
      token?: PromiseOrValue<string> | null,
      nativeAmount?: null,
      pointsAmount?: null
    ): SwapEventFilter;

    "WithdrawTo(address,address,uint256)"(
      operator?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawToEventFilter;
    WithdrawTo(
      operator?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      amount?: null
    ): WithdrawToEventFilter;
  };

  estimateGas: {
    CONSECUTIVE_TIMES(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    FREE_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    blindBoxAddress(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimEnable(overrides?: CallOverrides): Promise<BigNumber>;

    claimStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    dayClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      pointsToken_: PromiseOrValue<string>,
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nativeSwap(
      lobby_: PromiseOrValue<string>,
      infoIndex_: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nativeWithdrawTo(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pointsToken(overrides?: CallOverrides): Promise<BigNumber>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBlindBoxAddress(
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setClaimConf(
      claimType: PromiseOrValue<BigNumberish>,
      claimConf_: ZkBingoPoints.ClaimConfStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setClaimEnable(
      claimEnable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setClaimStartTime(
      claimStartTime_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPointsToken(
      pointsToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapInfo(
      lastLength: PromiseOrValue<BigNumberish>,
      swapInfos_: ZkBingoPoints.SwapInfoStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSwapRatio(
      token_: PromiseOrValue<string>,
      decimals_: PromiseOrValue<BigNumberish>,
      ratio_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signInInfos(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapRatios(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swaps(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONSECUTIVE_TIMES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FREE_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blindBoxAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimEnable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dayClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      pointsToken_: PromiseOrValue<string>,
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nativeSwap(
      lobby_: PromiseOrValue<string>,
      infoIndex_: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nativeWithdrawTo(
      to_: PromiseOrValue<string>,
      amount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pointsToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBlindBoxAddress(
      blindBoxAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setClaimConf(
      claimType: PromiseOrValue<BigNumberish>,
      claimConf_: ZkBingoPoints.ClaimConfStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setClaimEnable(
      claimEnable_: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setClaimStartTime(
      claimStartTime_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPointsToken(
      pointsToken_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapInfo(
      lastLength: PromiseOrValue<BigNumberish>,
      swapInfos_: ZkBingoPoints.SwapInfoStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSwapRatio(
      token_: PromiseOrValue<string>,
      decimals_: PromiseOrValue<BigNumberish>,
      ratio_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signInInfos(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapInfos(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapRatios(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swaps(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
