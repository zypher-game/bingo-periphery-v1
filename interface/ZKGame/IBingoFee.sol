// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IBingoFee {

    function getGameFee(uint256 gameId) external view returns(uint256, uint256, uint256);

    function beforeJoin(address from, uint256 betSize) external;

    function leave(address to, uint256 betSize) external;

    function afterGameTimeOut(uint256 gameId, uint256 betSize) external returns(uint256);

    function afterGameWon(uint256 gameId, uint256 betSize, address to) external;
}