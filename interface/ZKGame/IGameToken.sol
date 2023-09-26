// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IGameToken {
    function mintTo(address to_, uint256 amount_, uint256 debt_) external;

    function repayment(uint256 amount_) external;

    function transferFrom(address from_, address to_, uint256 amount_) external returns (bool);

    function transfer(address to_, uint256 amount_) external returns (bool);

    function getResidue() external view returns (uint256);

    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);
}
