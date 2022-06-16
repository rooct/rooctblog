"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9015],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5615:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={title:"Uni-Directional Payment Channel",version:"0.8.10",description:"An example of uni-directional payment channels in Solidity"},c=void 0,s={unversionedId:"Example/app/UniDirectionalPaymentChannel",id:"Example/app/UniDirectionalPaymentChannel",isDocsHomePage:!1,title:"Uni-Directional Payment Channel",description:"An example of uni-directional payment channels in Solidity",source:"@site/docs/Example/app/UniDirectionalPaymentChannel.md",sourceDirName:"Example/app",slug:"/Example/app/UniDirectionalPaymentChannel",permalink:"/rooctblog/docs/Example/app/UniDirectionalPaymentChannel",tags:[],version:"current",frontMatter:{title:"Uni-Directional Payment Channel",version:"0.8.10",description:"An example of uni-directional payment channels in Solidity"},sidebar:"tutorialSidebar",previous:{title:"Slot",permalink:"/rooctblog/docs/Example/app/Slot"},next:{title:"Upgradeable Proxy",permalink:"/rooctblog/docs/Example/app/UpgradeableProxy"}},p=[],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Payment channels allow participants to repeatedly transfer Ether off chain."),(0,a.kt)("p",null,"Here is how this contract is used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alice")," deploys the contract, funding it with some Ether."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alice")," authorizes a payment by signing a message (off chain) and sends the signature to ",(0,a.kt)("inlineCode",{parentName:"li"},"Bob"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bob")," claims his payment by presenting the signed message to the smart contract."),(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"Bob")," does not claim his payment, ",(0,a.kt)("inlineCode",{parentName:"li"},"Alice")," get her Ether back after the contract expires")),(0,a.kt)("p",null,"This is called a uni-directional payment channel since the payment can go only in a single direction from ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Bob"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\nimport "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";\nimport "github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/security/ReentrancyGuard.sol";\n\ncontract UniDirectionalPaymentChannel is ReentrancyGuard {\n    using ECDSA for bytes32;\n\n    address payable public sender;\n    address payable public receiver;\n\n    uint private constant DURATION = 7 * 24 * 60 * 60;\n    uint public expiresAt;\n\n    constructor(address payable _receiver) payable {\n        require(_receiver != address(0), "receiver = zero address");\n        sender = payable(msg.sender);\n        receiver = _receiver;\n        expiresAt = block.timestamp + DURATION;\n    }\n\n    function _getHash(uint _amount) private view returns (bytes32) {\n        // NOTE: sign with address of this contract to protect agains\n        // replay attack on other contracts\n        return keccak256(abi.encodePacked(address(this), _amount));\n    }\n\n    function getHash(uint _amount) external view returns (bytes32) {\n        return _getHash(_amount);\n    }\n\n    function _getEthSignedHash(uint _amount) private view returns (bytes32) {\n        return _getHash(_amount).toEthSignedMessageHash();\n    }\n\n    function getEthSignedHash(uint _amount) external view returns (bytes32) {\n        return _getEthSignedHash(_amount);\n    }\n\n    function _verify(uint _amount, bytes memory _sig) private view returns (bool) {\n        return _getEthSignedHash(_amount).recover(_sig) == sender;\n    }\n\n    function verify(uint _amount, bytes memory _sig) external view returns (bool) {\n        return _verify(_amount, _sig);\n    }\n\n    function close(uint _amount, bytes memory _sig) external nonReentrant {\n        require(msg.sender == receiver, "!receiver");\n        require(_verify(_amount, _sig), "invalid sig");\n\n        (bool sent, ) = receiver.call{value: _amount}("");\n        require(sent, "Failed to send Ether");\n        selfdestruct(sender);\n    }\n\n    function cancel() external {\n        require(msg.sender == sender, "!sender");\n        require(block.timestamp >= expiresAt, "!expired");\n        selfdestruct(sender);\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);