"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2898],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),y=o,m=d["".concat(l,".").concat(y)]||d[y]||s[y]||a;return t?r.createElement(m,c(c({ref:n},u),{},{components:t})):r.createElement(m,c({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8061:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={title:"Proxy",version:"0.8.10",description:"Deploy Any Contract"},l=void 0,p={unversionedId:"example/app/Proxy",id:"example/app/Proxy",isDocsHomePage:!1,title:"Proxy",description:"Deploy Any Contract",source:"@site/docs/example/app/Proxy.md",sourceDirName:"example/app",slug:"/example/app/Proxy",permalink:"/rooctblog/docs/example/app/Proxy",tags:[],version:"current",frontMatter:{title:"Proxy",version:"0.8.10",description:"Deploy Any Contract"},sidebar:"docs",previous:{title:"Multi-Sig Wallet",permalink:"/rooctblog/docs/example/app/MutiSignWallet"},next:{title:"Slot",permalink:"/rooctblog/docs/example/app/Slot"}},u=[],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Deploy any contract by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Proxy.deploy(bytes memory _code)")),(0,a.kt)("p",null,"For this example, you can get the contract bytecodes by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"Helper.getBytecode1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Helper.getBytecode2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Proxy {\n    event Deploy(address);\n\n    fallback() external payable {}\n\n    function deploy(bytes memory _code) external payable returns (address addr) {\n        assembly {\n            // create(v, p, n)\n            // v = amount of ETH to send\n            // p = pointer in memory to start of code\n            // n = size of code\n            addr := create(callvalue(), add(_code, 0x20), mload(_code))\n        }\n        // return address 0 on error\n        require(addr != address(0), "deploy failed");\n\n        emit Deploy(addr);\n    }\n\n    function execute(address _target, bytes memory _data) external payable {\n        (bool success, ) = _target.call{value: msg.value}(_data);\n        require(success, "failed");\n    }\n}\n\ncontract TestContract1 {\n    address public owner = msg.sender;\n\n    function setOwner(address _owner) public {\n        require(msg.sender == owner, "not owner");\n        owner = _owner;\n    }\n}\n\ncontract TestContract2 {\n    address public owner = msg.sender;\n    uint public value = msg.value;\n    uint public x;\n    uint public y;\n\n    constructor(uint _x, uint _y) payable {\n        x = _x;\n        y = _y;\n    }\n}\n\ncontract Helper {\n    function getBytecode1() external pure returns (bytes memory) {\n        bytes memory bytecode = type(TestContract1).creationCode;\n        return bytecode;\n    }\n\n    function getBytecode2(uint _x, uint _y) external pure returns (bytes memory) {\n        bytes memory bytecode = type(TestContract2).creationCode;\n        return abi.encodePacked(bytecode, abi.encode(_x, _y));\n    }\n\n    function getCalldata(address _owner) external pure returns (bytes memory) {\n        return abi.encodeWithSignature("setOwner(address)", _owner);\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);