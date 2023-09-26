/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IZyBeacon, IZyBeaconInterface } from "../IZyBeacon";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
];

export class IZyBeacon__factory {
  static readonly abi = _abi;
  static createInterface(): IZyBeaconInterface {
    return new utils.Interface(_abi) as IZyBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IZyBeacon {
    return new Contract(address, _abi, signerOrProvider) as IZyBeacon;
  }
}
