// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IBingoToken {
    function mintTo(address to_, uint256 amount_) external;

    function transferFrom(address from_, address to_, uint256 amount_) external returns (bool);

    function transfer(address to_, uint256 amount_) external returns (bool);
}
