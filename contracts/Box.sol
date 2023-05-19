// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Box {
    uint private value;
    event ValueChanged(uint newValue);

    // stoes a new value in the smart contract state var
    function store(uint newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // reads the last sotred value
    function retrieve() public view returns(uint){
        return value;
    }
}