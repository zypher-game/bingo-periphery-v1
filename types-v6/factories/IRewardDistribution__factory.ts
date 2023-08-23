/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRewardDistribution,
  IRewardDistributionInterface,
} from "../IRewardDistribution";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newReward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRewardStartId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldReward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRewardDistributed",
        type: "uint256",
      },
    ],
    name: "NewReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reward",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "RewardDistributed",
    type: "event",
  },
] as const;

export class IRewardDistribution__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardDistributionInterface {
    return new Interface(_abi) as IRewardDistributionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRewardDistribution {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IRewardDistribution;
  }
}
