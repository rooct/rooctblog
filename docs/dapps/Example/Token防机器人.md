---
title: Token防机器人solidity
---

### solidity防机器人有两种方式一种是根据判断在几区块，另外一种是根据时间来检测  
### 先用第一种判断时间来检测机器人，照例用以前的代码再新加判断机器人的逻辑

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;
import "./ERC20.sol";
contract Token is ERC20{
 
   string private _name;    //币名字
    string private _symbol;      //币符号
    address public deadwallet = 0x0000000000000000000000000000000000000000;    //销毁地址
    address public LiquityWallet;            //铸币钱包
    mapping(address => bool) public _isBlacklisted;    //是否是黑名单,true表示这个地址是黑名单
     uint256 public tradingEnabledTimestamp = 1627779600; //10:00pm       //2021-08-1 9:00:00的时间戳，这里设置开盘时间，开盘时间逻辑后面再提，这里先注重防机器人
    /*
     * @dev 返回代币的名字
     */
    function name() public view virtual returns (string memory) {
        return _name;
    }
    /**
     * @dev 返回代币的符号
     */
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }
    /**
     * 返回代币精度
     */
    function decimals() public pure virtual returns (uint8) {
        return 18;
    }
    constructor() public{
        _name='Token';
        _symbol='Tk';
        _mint(msg.sender, 10000000000000 * (10 ** 18));            //铸币给连接此合约的账号于10000000000000个币;
        LiquityWallet=msg.sender;
    }
     //交易函数
     function _transfer(address recipient, uint256 amount) public returns (bool) {
        require(!_isBlacklisted[msg.sender], 'Blacklisted address');      //如果发送方是黑名单则禁止交易
        if(LiquityWallet!=msg.sender) return super.transfer(recipient, amount); //如果铸币方是发送方则不需要销毁
         if(block.timestamp <= tradingEnabledTimestamp + 9 seconds) {  //当前块的时间戳小于等于 可交易时间戳+9秒。
            addBot(msg.sender);                                   //把当前地址添加黑名单
         }                                 
        uint256 BurnWallet = amount.mul(5).div(100);       //销毁百分之5
        uint256 trueAmount = amount.sub(BurnWallet);   //剩下的95%就是要发送的
        super.transfer(deadwallet, BurnWallet);          //销毁这百分之5
        return super.transfer(recipient, trueAmount);     //发送那95%的代币
    }
    
    function _transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(!_isBlacklisted[msg.sender], 'Blacklisted address');      //如果发送方是黑名单则禁止交易
        if(LiquityWallet!=msg.sender) return super.transfer(recipient, amount); //如果铸币方是发送方则不需要销毁
         if(block.timestamp <= tradingEnabledTimestamp + 9 seconds) {  //当前块的时间戳小于等于 可交易时间戳+9秒。
            addBot(msg.sender);                                   //把当前地址添加黑名单
         } 
        uint256 BurnWallet = amount.mul(5).div(100);       //销毁百分之5
        uint256 trueAmount = amount.sub(BurnWallet);       //剩下的95就是要发送的
        super.transferFrom(sender, deadwallet, BurnWallet);   //销毁这百分之5
        return super.transferFrom(sender, recipient, trueAmount);  //发送那95%的代币
    }
        //设置黑名单地址
    function blacklistAddress(address account, bool value) public {
        _isBlacklisted[account] = value;   //如果是true就是黑名单
    }
    //添加黑名单的函数
    function addBot(address recipient) private {
        if (!_isBlacklisted[recipient]) _isBlacklisted[recipient] = true;
    }
}
```

### 在上面的代码中防机器人逻辑主要是如果机器人在开盘9秒内买的就拉进黑名单，不给交易。  

第二种方式代码：

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.2;
import "./ERC20.sol";
contract Token is ERC20{
 
   string private _name;    //币名字
    string private _symbol;      //币符号
    address public deadwallet = 0x0000000000000000000000000000000000000000;    //销毁地址
    address public LiquityWallet;            //铸币钱包
    mapping(address => bool) public _isBlacklisted;    //是否是黑名单,true表示这个地址是黑名单
     uint256 public tradingEnabledTimestamp = 1627779600;       //2021-08-1 9:00:00的时间戳，这里设置开盘时间，开盘时间逻辑后面再提，这里先注重防机器人
     uint256 public launchedAt=0;                                   
    /*
     * @dev 返回代币的名字
     */
    function name() public view virtual returns (string memory) {
        return _name;
    }
    /**
     * @dev 返回代币的符号
     */
    function symbol() public view virtual returns (string memory) {
        return _symbol;
    }
    /**
     * 返回代币精度
     */
    function decimals() public pure virtual returns (uint8) {
        return 18;
    }
    constructor() public{
        _name='Token';
        _symbol='Tk';
        _mint(msg.sender, 10000000000000 * (10 ** 18));            //铸币给连接此合约的账号于10000000000000个币;
        LiquityWallet=msg.sender;
    }
     //交易函数
     function _transfer(address recipient, uint256 amount) public returns (bool) {
        require(!_isBlacklisted[msg.sender], 'Blacklisted address');      //如果发送方是黑名单则禁止交易
        if(LiquityWallet!=msg.sender) return super.transfer(recipient, amount); //如果铸币方是发送方则不需要销毁
        if (launchedAt == 0) {   
            launchedAt = block.number;                       //初始化lauchAt赋值当前块的数量
        }
        if (block.number < launchedAt + 3) {                     //如果在3个区间内抢到
                 addBot(msg.sender);                                    //则添加黑名单
        }                                 
        uint256 BurnWallet = amount.mul(5).div(100);       //销毁百分之5
        uint256 trueAmount = amount.sub(BurnWallet);   //剩下的95%就是要发送的
        super.transfer(deadwallet, BurnWallet);          //销毁这百分之5
        return super.transfer(recipient, trueAmount);     //发送那95%的代币
    }
    
    function _transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(!_isBlacklisted[msg.sender], 'Blacklisted address');      //如果发送方是黑名单则禁止交易
        if(LiquityWallet!=msg.sender) return super.transfer(recipient, amount); //如果铸币方是发送方则不需要销毁
         if (launchedAt == 0) {   
            launchedAt = block.number;                       //初始化lauchAt赋值当前块的数量
        }
        if (block.number < launchedAt + 3) {                     //如果在3个区间内抢到
                 addBot(msg.sender);                                    //则添加黑名单
        }
        uint256 BurnWallet = amount.mul(5).div(100);       //销毁百分之5
        uint256 trueAmount = amount.sub(BurnWallet);       //剩下的95就是要发送的
        super.transferFrom(sender, deadwallet, BurnWallet);   //销毁这百分之5
        return super.transferFrom(sender, recipient, trueAmount);  //发送那95%的代币
    }
        //设置黑名单地址
    function blacklistAddress(address account, bool value) public {
        _isBlacklisted[account] = value;   //如果是true就是黑名单
    }
    //添加黑名单的函数
    function addBot(address recipient) private {
        if (!_isBlacklisted[recipient]) _isBlacklisted[recipient] = true;
    }
}
```