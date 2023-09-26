/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MinReentrancyGuard,
  MinReentrancyGuardInterface,
} from "../MinReentrancyGuard";

const _abi = [
  {
    inputs: [],
    name: "ReentrantCall",
    type: "error",
  },
];

export class MinReentrancyGuard__factory {
  static readonly abi = _abi;
  static createInterface(): MinReentrancyGuardInterface {
    return new utils.Interface(_abi) as MinReentrancyGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinReentrancyGuard {
    return new Contract(address, _abi, signerOrProvider) as MinReentrancyGuard;
  }
}