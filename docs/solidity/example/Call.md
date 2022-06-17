---
title: Call
version: 0.8.10
description: In Solidity call is a low level function to interact with other contracts
---

*Call调用方法*
- (bool success, bytes memory data) = _addr.call{value: 1}(abi.encodeWithSignature("foo(string)", "abc"))
- 判断success是否true，否则调用失败
- 通过call方法调用不存在的函数，会促发fallback函数

`call` is a low level function to interact with other contracts.

This is the recommended method to use when you're just sending Ether via calling the `fallback` function.

However it is not the recommend way to call existing functions.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // Let's imagine that contract B does not have the source code for
    // contract A, but we do know the address of A and the function to call.
    function testCallFoo(address payable _addr) public payable {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );
        require(success,"Call Fail");
        emit Response(success, data);
    }

    // Calling a function that does not exist triggers the fallback function.
    function testCallDoesNotExist(address _addr) public {
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("doesNotExist()")
        );
        require(success,"Call Fail");
        emit Response(success, data);
    }
}

```
