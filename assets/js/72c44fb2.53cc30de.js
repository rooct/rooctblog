"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1566],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5619:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Dutch Auction",version:"0.8.10",description:"An example of Dutch auction in Solidity"},u=void 0,l={unversionedId:"Example/app/DutchAuction",id:"Example/app/DutchAuction",isDocsHomePage:!1,title:"Dutch Auction",description:"An example of Dutch auction in Solidity",source:"@site/docs/Example/app/DutchAuction.md",sourceDirName:"Example/app",slug:"/Example/app/DutchAuction",permalink:"/rooctblog/docs/Example/app/DutchAuction",tags:[],version:"current",frontMatter:{title:"Dutch Auction",version:"0.8.10",description:"An example of Dutch auction in Solidity"},sidebar:"tutorialSidebar",previous:{title:"Crowd Fund",permalink:"/rooctblog/docs/Example/app/CrowdFund"},next:{title:"English Auction",permalink:"/rooctblog/docs/Example/app/EnglishAuction"}},p=[{value:"Auction",id:"auction",children:[]}],s={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dutch auction for NFT."),(0,o.kt)("h3",{id:"auction"},"Auction"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Seller of NFT deploys this contract setting a starting price for the NFT."),(0,o.kt)("li",{parentName:"ol"},"Auction lasts for 7 days."),(0,o.kt)("li",{parentName:"ol"},"Price of NFT decreases over time."),(0,o.kt)("li",{parentName:"ol"},"Participants can buy by depositing ETH greater than the current price computed by the smart contract."),(0,o.kt)("li",{parentName:"ol"},"Auction ends when a buyer buys the NFT.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ninterface IERC721 {\n    function transferFrom(\n        address _from,\n        address _to,\n        uint _nftId\n    ) external;\n}\n\ncontract DutchAuction {\n    uint private constant DURATION = 7 days;\n\n    IERC721 public immutable nft;\n    uint public immutable nftId;\n\n    address payable public immutable seller;\n    uint public immutable startingPrice;\n    uint public immutable startAt;\n    uint public immutable expiresAt;\n    uint public immutable discountRate;\n\n    constructor(\n        uint _startingPrice,\n        uint _discountRate,\n        address _nft,\n        uint _nftId\n    ) {\n        seller = payable(msg.sender);\n        startingPrice = _startingPrice;\n        startAt = block.timestamp;\n        expiresAt = block.timestamp + DURATION;\n        discountRate = _discountRate;\n\n        require(_startingPrice >= _discountRate * DURATION, "starting price < min");\n\n        nft = IERC721(_nft);\n        nftId = _nftId;\n    }\n\n    function getPrice() public view returns (uint) {\n        uint timeElapsed = block.timestamp - startAt;\n        uint discount = discountRate * timeElapsed;\n        return startingPrice - discount;\n    }\n\n    function buy() external payable {\n        require(block.timestamp < expiresAt, "auction expired");\n\n        uint price = getPrice();\n        require(msg.value >= price, "ETH < price");\n\n        nft.transferFrom(seller, msg.sender, nftId);\n        uint refund = msg.value - price;\n        if (refund > 0) {\n            payable(msg.sender).transfer(refund);\n        }\n        selfdestruct(seller);\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);