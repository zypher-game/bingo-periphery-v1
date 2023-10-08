// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/** @dev Deal with line-ups */
interface IGameLineup {
    error InvalidWaitingStatus();
    error InvalidLevel();
    error TooFewPlayers(uint8 current, uint8 min);

    event LineupJoined(address indexed player);

    event LineupLeft(address indexed player);

    function join(uint8 level, bytes calldata zkCard) external;

    function leave() external;

    function start() external;

    struct WaitingInfo {
        uint8 level;
        
        uint32 minWinCounts;
        uint32 minWinRate; // scaled by 1e6 (10000 = 1%)
        uint32 maxWinCounts;
        uint32 maxWinRate; // scaled by 1e6 (10000 = 1%)
        uint32 startedAt;
        uint32 endedAt;

        uint256 betSize;
        uint8 expectedLines;
        uint8 minNumber;
        uint8 maxNumber;
    }
    function lineupUsers() external view returns (uint8, address[] memory);

    function activeLevels() external view returns (uint256 wins, WaitingInfo[] memory list);
}
