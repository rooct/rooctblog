---
title: View and Pure Functions
version: 0.8.10
description: An example of view and pure functions in Solidity
---

Getter functions can be declared `view` or `pure`.

`View` function declares that no state will be changed.

`Pure` function declares that no state variable will be changed or read.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract ViewAndPure {
    uint public x = 1;

    // Promise not to modify the state.
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // Promise not to modify or read from the state.
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}

```
