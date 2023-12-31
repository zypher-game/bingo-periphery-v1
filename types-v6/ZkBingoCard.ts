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

export interface ZkBingoCardInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_decodeMarkedSpacesBySettings"
      | "addMinter"
      | "approve"
      | "balanceOf"
      | "bindCardGame"
      | "bindGame"
      | "calculateMatchedLineCounts"
      | "cardSignaturePrefix"
      | "columns"
      | "decodeCardNumbers"
      | "decodeMarkedSpaces"
      | "decodeSelectedNumbers"
      | "editUnplayedCard"
      | "encodeCardNumbers"
      | "encodeMarkedSpaces"
      | "encodeSelectedNumbers"
      | "estimateMatchedLines"
      | "freeSpaces"
      | "getApproved"
      | "getCardGame"
      | "getCardNumbers"
      | "isApprovedForAll"
      | "isValidCardNumbers"
      | "lines"
      | "matchedLines"
      | "mint"
      | "minters"
      | "name"
      | "owner"
      | "ownerOf"
      | "removeMinter"
      | "renounceOwnership"
      | "restrictions"
      | "reveal"
      | "rows"
      | "safeTransferFrom(address,address,uint256)"
      | "safeTransferFrom(address,address,uint256,bytes)"
      | "setApprovalForAll"
      | "setBindingGame"
      | "setFreeSpaces"
      | "setLines"
      | "setRestrictions"
      | "supportsInterface"
      | "symbol"
      | "tokenByIndex"
      | "tokenOfOwnerByIndex"
      | "tokenURI"
      | "totalSupply"
      | "transferFrom"
      | "transferOwnership"
      | "verifySigner"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "ApprovalForAll"
      | "OwnershipTransferred"
      | "Revealed"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_decodeMarkedSpacesBySettings",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addMinter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bindCardGame",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "bindGame", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateMatchedLineCounts",
    values: [BigNumberish[][], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cardSignaturePrefix",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "columns", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decodeCardNumbers",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeMarkedSpaces",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decodeSelectedNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "editUnplayedCard",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeCardNumbers",
    values: [BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeMarkedSpaces",
    values: [[BigNumberish, BigNumberish][]]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSelectedNumbers",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateMatchedLines",
    values: [BigNumberish[][], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "freeSpaces",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCardGame",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCardNumbers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidCardNumbers",
    values: [BigNumberish[][]]
  ): string;
  encodeFunctionData(functionFragment: "lines", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "matchedLines",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minters",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeMinter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restrictions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [BigNumberish, BytesLike, BytesLike, BigNumberish[][]]
  ): string;
  encodeFunctionData(functionFragment: "rows", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setBindingGame",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFreeSpaces",
    values: [[BigNumberish, BigNumberish][]]
  ): string;
  encodeFunctionData(
    functionFragment: "setLines",
    values: [[BigNumberish, BigNumberish][][]]
  ): string;
  encodeFunctionData(
    functionFragment: "setRestrictions",
    values: [[BigNumberish, BigNumberish][][]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifySigner",
    values: [BigNumberish, BytesLike, BigNumberish[][], AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "_decodeMarkedSpacesBySettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bindCardGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bindGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateMatchedLineCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cardSignaturePrefix",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "columns", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decodeCardNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeMarkedSpaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decodeSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "editUnplayedCard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeCardNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeMarkedSpaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeSelectedNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateMatchedLines",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "freeSpaces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCardGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCardNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidCardNumbers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lines", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "matchedLines",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rows", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom(address,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBindingGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFreeSpaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLines", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRestrictions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifySigner",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    approved: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [owner: string, approved: string, tokenId: bigint];
  export interface OutputObject {
    owner: string;
    approved: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ApprovalForAllEvent {
  export type InputTuple = [
    owner: AddressLike,
    operator: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    owner: string,
    operator: string,
    approved: boolean
  ];
  export interface OutputObject {
    owner: string;
    operator: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevealedEvent {
  export type InputTuple = [
    cardId: BigNumberish,
    revealer: AddressLike,
    signer: AddressLike,
    numbers: BigNumberish[][]
  ];
  export type OutputTuple = [
    cardId: bigint,
    revealer: string,
    signer: string,
    numbers: bigint[][]
  ];
  export interface OutputObject {
    cardId: bigint;
    revealer: string;
    signer: string;
    numbers: bigint[][];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    tokenId: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, tokenId: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZkBingoCard extends BaseContract {
  connect(runner?: ContractRunner | null): ZkBingoCard;
  waitForDeployment(): Promise<this>;

  interface: ZkBingoCardInterface;

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

  _decodeMarkedSpacesBySettings: TypedContractMethod<
    [
      encodedMarkedSpaces: BigNumberish,
      gridRows: BigNumberish,
      gridColumns: BigNumberish
    ],
    [[bigint, bigint][]],
    "view"
  >;

  addMinter: TypedContractMethod<[minter: AddressLike], [void], "nonpayable">;

  approve: TypedContractMethod<
    [to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  bindCardGame: TypedContractMethod<
    [tokenId: BigNumberish, arg1: AddressLike, gameId: BigNumberish],
    [void],
    "nonpayable"
  >;

  bindGame: TypedContractMethod<[], [string], "view">;

  calculateMatchedLineCounts: TypedContractMethod<
    [cardNumbers: BigNumberish[][], selectedNumbers: BigNumberish],
    [bigint],
    "view"
  >;

  cardSignaturePrefix: TypedContractMethod<[], [string], "view">;

  columns: TypedContractMethod<[], [bigint], "view">;

  decodeCardNumbers: TypedContractMethod<
    [encodedCardNumbers: BytesLike],
    [bigint[][]],
    "view"
  >;

  decodeMarkedSpaces: TypedContractMethod<
    [encodedMarkedSpaces: BigNumberish],
    [[bigint, bigint][]],
    "view"
  >;

  decodeSelectedNumbers: TypedContractMethod<
    [encoded: BigNumberish],
    [bigint[]],
    "view"
  >;

  editUnplayedCard: TypedContractMethod<
    [tokenId: BigNumberish, encryptedContent: BytesLike],
    [void],
    "nonpayable"
  >;

  encodeCardNumbers: TypedContractMethod<
    [cardNumbers: BigNumberish[][]],
    [string],
    "view"
  >;

  encodeMarkedSpaces: TypedContractMethod<
    [markedSpaces: [BigNumberish, BigNumberish][]],
    [bigint],
    "view"
  >;

  encodeSelectedNumbers: TypedContractMethod<
    [selectedNumbers: BigNumberish[]],
    [bigint],
    "view"
  >;

  estimateMatchedLines: TypedContractMethod<
    [cardNumbers: BigNumberish[][], selectedNumbers: BigNumberish[]],
    [bigint],
    "view"
  >;

  freeSpaces: TypedContractMethod<[], [[bigint, bigint][]], "view">;

  getApproved: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  getCardGame: TypedContractMethod<
    [cardId: BigNumberish],
    [[string, bigint] & { gameContract: string; gameId: bigint }],
    "view"
  >;

  getCardNumbers: TypedContractMethod<
    [cardId: BigNumberish],
    [bigint[][]],
    "view"
  >;

  isApprovedForAll: TypedContractMethod<
    [owner: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;

  isValidCardNumbers: TypedContractMethod<
    [nums: BigNumberish[][]],
    [boolean],
    "view"
  >;

  lines: TypedContractMethod<[], [[bigint, bigint][][]], "view">;

  matchedLines: TypedContractMethod<[cardId: BigNumberish], [bigint], "view">;

  mint: TypedContractMethod<
    [to: AddressLike, gameId: BigNumberish, encryptedContent: BytesLike],
    [bigint],
    "nonpayable"
  >;

  minters: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  ownerOf: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  removeMinter: TypedContractMethod<
    [minter: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  restrictions: TypedContractMethod<[], [[bigint, bigint][][]], "view">;

  reveal: TypedContractMethod<
    [
      tokenId: BigNumberish,
      gameLabel: BytesLike,
      signedGameLabel: BytesLike,
      cardNumbers: BigNumberish[][]
    ],
    [void],
    "nonpayable"
  >;

  rows: TypedContractMethod<[], [bigint], "view">;

  "safeTransferFrom(address,address,uint256)": TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  "safeTransferFrom(address,address,uint256,bytes)": TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setApprovalForAll: TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  setBindingGame: TypedContractMethod<
    [_game: AddressLike],
    [void],
    "nonpayable"
  >;

  setFreeSpaces: TypedContractMethod<
    [freeSpaces_: [BigNumberish, BigNumberish][]],
    [void],
    "nonpayable"
  >;

  setLines: TypedContractMethod<
    [lines_: [BigNumberish, BigNumberish][][]],
    [void],
    "nonpayable"
  >;

  setRestrictions: TypedContractMethod<
    [restrictions_: [BigNumberish, BigNumberish][][]],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  tokenByIndex: TypedContractMethod<[index: BigNumberish], [bigint], "view">;

  tokenOfOwnerByIndex: TypedContractMethod<
    [owner: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;

  tokenURI: TypedContractMethod<[tokenId: BigNumberish], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  verifySigner: TypedContractMethod<
    [
      cardId: BigNumberish,
      salt: BytesLike,
      cardNumbers: BigNumberish[][],
      signer: AddressLike
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_decodeMarkedSpacesBySettings"
  ): TypedContractMethod<
    [
      encodedMarkedSpaces: BigNumberish,
      gridRows: BigNumberish,
      gridColumns: BigNumberish
    ],
    [[bigint, bigint][]],
    "view"
  >;
  getFunction(
    nameOrSignature: "addMinter"
  ): TypedContractMethod<[minter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "bindCardGame"
  ): TypedContractMethod<
    [tokenId: BigNumberish, arg1: AddressLike, gameId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "bindGame"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "calculateMatchedLineCounts"
  ): TypedContractMethod<
    [cardNumbers: BigNumberish[][], selectedNumbers: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "cardSignaturePrefix"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "columns"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decodeCardNumbers"
  ): TypedContractMethod<[encodedCardNumbers: BytesLike], [bigint[][]], "view">;
  getFunction(
    nameOrSignature: "decodeMarkedSpaces"
  ): TypedContractMethod<
    [encodedMarkedSpaces: BigNumberish],
    [[bigint, bigint][]],
    "view"
  >;
  getFunction(
    nameOrSignature: "decodeSelectedNumbers"
  ): TypedContractMethod<[encoded: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "editUnplayedCard"
  ): TypedContractMethod<
    [tokenId: BigNumberish, encryptedContent: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "encodeCardNumbers"
  ): TypedContractMethod<[cardNumbers: BigNumberish[][]], [string], "view">;
  getFunction(
    nameOrSignature: "encodeMarkedSpaces"
  ): TypedContractMethod<
    [markedSpaces: [BigNumberish, BigNumberish][]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeSelectedNumbers"
  ): TypedContractMethod<[selectedNumbers: BigNumberish[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimateMatchedLines"
  ): TypedContractMethod<
    [cardNumbers: BigNumberish[][], selectedNumbers: BigNumberish[]],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "freeSpaces"
  ): TypedContractMethod<[], [[bigint, bigint][]], "view">;
  getFunction(
    nameOrSignature: "getApproved"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getCardGame"
  ): TypedContractMethod<
    [cardId: BigNumberish],
    [[string, bigint] & { gameContract: string; gameId: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCardNumbers"
  ): TypedContractMethod<[cardId: BigNumberish], [bigint[][]], "view">;
  getFunction(
    nameOrSignature: "isApprovedForAll"
  ): TypedContractMethod<
    [owner: AddressLike, operator: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isValidCardNumbers"
  ): TypedContractMethod<[nums: BigNumberish[][]], [boolean], "view">;
  getFunction(
    nameOrSignature: "lines"
  ): TypedContractMethod<[], [[bigint, bigint][][]], "view">;
  getFunction(
    nameOrSignature: "matchedLines"
  ): TypedContractMethod<[cardId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [to: AddressLike, gameId: BigNumberish, encryptedContent: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "minters"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ownerOf"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "removeMinter"
  ): TypedContractMethod<[minter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "restrictions"
  ): TypedContractMethod<[], [[bigint, bigint][][]], "view">;
  getFunction(
    nameOrSignature: "reveal"
  ): TypedContractMethod<
    [
      tokenId: BigNumberish,
      gameLabel: BytesLike,
      signedGameLabel: BytesLike,
      cardNumbers: BigNumberish[][]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rows"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "safeTransferFrom(address,address,uint256)"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom(address,address,uint256,bytes)"
  ): TypedContractMethod<
    [
      from: AddressLike,
      to: AddressLike,
      tokenId: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setApprovalForAll"
  ): TypedContractMethod<
    [operator: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBindingGame"
  ): TypedContractMethod<[_game: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setFreeSpaces"
  ): TypedContractMethod<
    [freeSpaces_: [BigNumberish, BigNumberish][]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setLines"
  ): TypedContractMethod<
    [lines_: [BigNumberish, BigNumberish][][]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRestrictions"
  ): TypedContractMethod<
    [restrictions_: [BigNumberish, BigNumberish][][]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenByIndex"
  ): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "tokenOfOwnerByIndex"
  ): TypedContractMethod<
    [owner: AddressLike, index: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenURI"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "verifySigner"
  ): TypedContractMethod<
    [
      cardId: BigNumberish,
      salt: BytesLike,
      cardNumbers: BigNumberish[][],
      signer: AddressLike
    ],
    [boolean],
    "view"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "ApprovalForAll"
  ): TypedContractEvent<
    ApprovalForAllEvent.InputTuple,
    ApprovalForAllEvent.OutputTuple,
    ApprovalForAllEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Revealed"
  ): TypedContractEvent<
    RevealedEvent.InputTuple,
    RevealedEvent.OutputTuple,
    RevealedEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "ApprovalForAll(address,address,bool)": TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;
    ApprovalForAll: TypedContractEvent<
      ApprovalForAllEvent.InputTuple,
      ApprovalForAllEvent.OutputTuple,
      ApprovalForAllEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Revealed(uint256,address,address,uint8[][])": TypedContractEvent<
      RevealedEvent.InputTuple,
      RevealedEvent.OutputTuple,
      RevealedEvent.OutputObject
    >;
    Revealed: TypedContractEvent<
      RevealedEvent.InputTuple,
      RevealedEvent.OutputTuple,
      RevealedEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
