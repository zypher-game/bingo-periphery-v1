/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { MinOwnable, MinOwnableInterface } from "../MinOwnable";

const _abi = [
  {
    inputs: [],
    name: "OwnableInvalid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class MinOwnable__factory {
  static readonly abi = _abi;
  static createInterface(): MinOwnableInterface {
    return new utils.Interface(_abi) as MinOwnableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinOwnable {
    return new Contract(address, _abi, signerOrProvider) as MinOwnable;
  }
}
