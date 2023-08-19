// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Storage {
    uint amount;

    function set(uint _num) public {
        amount = _num;
        console.log("received %s", _num);
    }

    function get() public view returns (uint) {
        return amount;
    }


    function produce() public {
        amount++;
    }

    function comsume() public {
        amount--;
    }
}
