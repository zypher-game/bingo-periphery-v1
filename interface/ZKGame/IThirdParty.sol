// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IThirdParty {
    function notifyPlayerWon(
        uint256 gameId, 
        address winner
    ) external;
}