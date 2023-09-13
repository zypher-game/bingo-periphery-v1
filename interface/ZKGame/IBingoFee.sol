// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IBingoFee {

    function getGameFee(uint256 gameId) external view returns(uint256, uint256, uint256);

    function beforeJoin(address from) external;

    function leave(address to) external;

    function afterGameTimeOut(uint256 gameId) external returns(uint256);

    function afterGameWon(uint256 gameId, address to) external;
}