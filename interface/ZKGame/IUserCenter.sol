// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IUserCenter {
    struct GameSeason {
        string title;
        uint256 startedAt;
    }

    struct PlayerStatistics {
        uint256 joined;
        uint256 joinAmount;
        uint256 wins;
        uint256 winAmount;
    }

    /**
     * @return current - current season statistics
     * @return overall - overall statistics
     */
    function userRecords(
        address user
    ) external view returns (PlayerStatistics memory current, PlayerStatistics memory overall);
}