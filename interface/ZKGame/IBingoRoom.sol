// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IBingoRoom {
    error InvalidGameId();
    error InvalidGameStatus();
    error InvalidNumber();
    error BadSettings();
    error WrongTurn();
    error NotBingo();

    struct Participant {
        address user;
        uint256 cardId;
        bool isAbandoned;
    }

    struct GameSettings {
        uint256 betSize;
        uint8 expectedLines;
        uint8 minNumber; // number smaller than this will not be selected
        uint8 maxNumber; // number larger than this will not be selected
    }

    struct Abandon {
        uint32 diffRound;
        uint32 abandonCounts;
        uint32 lastRoundTime;
    }

    struct GameRound {
        uint32 round;
        uint8 number;
        uint32 timestamp;
        address player;
    }

    enum RecentGameFilter {
        // 0
        ALL,
        // 1
        LIVE,
        // 2
        FINISHED
    }

    event GameStarted(uint256 indexed gameId, address cardContract, address[] players);

    event GameParticipated(
        uint256 indexed gameId,
        address indexed player,
        uint256 indexed cardId,
        uint256 betSize,
        uint8 position
    );

    event NumberSelected(
        uint256 indexed gameId,
        uint32 round,
        address indexed player,
        uint8 number
    );

    event Bingo(uint256 indexed gameId, address indexed player);

    event RewardChanged(address indexed newReward, address indexed oldReward);

    event GameHalted(
        uint256 indexed gameId,
        address indexed user,
        bool isOvertime,
        uint256 confiscate
    );

    function abandon(uint256 gameId) external;

    function gameCard() external view returns (address);

    function getGameInfo(
        uint256 gameId
    )
        external
        view
        returns (
            uint32 startedAt,
            uint32 endedAt,
            address winner,
            uint256 winAmount,
            Participant[] memory players,
            GameRound[] memory rounds,
            GameSettings memory settings,
            string memory status
        );

    function getCurrentRound(
        uint256 gameId
    ) external view returns (uint32 round, address player, uint32 remain, string memory status);

    function getSelectedNumbers(uint256 gameId) external view returns (uint8[] memory);

    function selectNumber(uint256 gameId, uint8 number) external;

    function bingo(
        uint256 gameId,
        uint8[][] calldata cardNumbers,
        bytes calldata signedLabel
    ) external;

    function selectAndBingo(
        uint256 gameId,
        uint8 number,
        uint8[][] calldata cardNumbers,
        bytes calldata signedLabel
    ) external;

    /**
     * @dev Call this function by callStatic to check if a game is ongoing and
     *      check if cached card content is available
     */
    function restoreGame(
        address player,
        uint8[][] memory cardNumbers,
        bytes memory signedGameLabel
    ) external returns (uint256 playingGameId, uint32 autoEndTime, bool isCardContentMatched);

    function gamePlayerCounts(uint256 gameId) external view returns (uint8);
}
