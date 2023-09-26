/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGameLineup, IGameLineupInterface } from "../IGameLineup";

const _abi = [
  {
    inputs: [],
    name: "InvalidLevel",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidWaitingStatus",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "current",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "min",
        type: "uint8",
      },
    ],
    name: "TooFewPlayers",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "LineupJoined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "LineupLeft",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "zkCard",
        type: "bytes",
      },
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "leave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lineupUsers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "level",
            type: "uint8",
          },
          {
            internalType: "address[]",
            name: "users",
            type: "address[]",
          },
          {
            internalType: "uint32",
            name: "minWinCounts",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "minWinRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxWinCounts",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxWinRate",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "startedAt",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endedAt",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "betSize",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "expectedLines",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "minNumber",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "maxNumber",
            type: "uint8",
          },
        ],
        internalType: "struct IGameLineup.WaitingInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGameLineup__factory {
  static readonly abi = _abi;
  static createInterface(): IGameLineupInterface {
    return new utils.Interface(_abi) as IGameLineupInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGameLineup {
    return new Contract(address, _abi, signerOrProvider) as IGameLineup;
  }
}
