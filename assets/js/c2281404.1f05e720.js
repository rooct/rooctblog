"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9343],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,l=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,c(c({ref:e},s),{},{components:t})):r.createElement(f,c({ref:e},s))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,c=new Array(a);c[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:i,c[1]=o;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),c=["components"],o={title:"Visibility",version:"0.8.10",description:"An example of external, internal, private and public functions in Solidity"},l=void 0,u={unversionedId:"solidity/example/Visibility",id:"solidity/example/Visibility",isDocsHomePage:!1,title:"Visibility",description:"An example of external, internal, private and public functions in Solidity",source:"@site/docs/solidity/example/Visibility.md",sourceDirName:"solidity/example",slug:"/solidity/example/Visibility",permalink:"/rooctblog/docs/solidity/example/Visibility",tags:[],version:"current",frontMatter:{title:"Visibility",version:"0.8.10",description:"An example of external, internal, private and public functions in Solidity"},sidebar:"docs",previous:{title:"View and Pure Functions",permalink:"/rooctblog/docs/solidity/example/ViewAndPureFunctions"},next:{title:"BabyToken",permalink:"/rooctblog/docs/solidity/projects/BabyToken"}},s=[],p={toc:s};function d(n){var e=n.components,t=(0,i.Z)(n,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Functions and state variables have to declare whether they are accessible by other contracts."),(0,a.kt)("p",null,"Functions can be declared as"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public")," - any contract and account can call"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"private")," - only inside the contract that defines the function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"internal"),"- only inside contract that inherits an ",(0,a.kt)("inlineCode",{parentName:"li"},"internal")," function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"external")," - only other contracts and accounts can call")),(0,a.kt)("p",null,"State variables can be declared as ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"private"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"internal")," but not ",(0,a.kt)("inlineCode",{parentName:"p"},"external"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Base {\n    // Private function can only be called\n    // - inside this contract\n    // Contracts that inherit this contract cannot call this function.\n    function privateFunc() private pure returns (string memory) {\n        return "private function called";\n    }\n\n    function testPrivateFunc() public pure returns (string memory) {\n        return privateFunc();\n    }\n\n    // Internal function can be called\n    // - inside this contract\n    // - inside contracts that inherit this contract\n    function internalFunc() internal pure returns (string memory) {\n        return "internal function called";\n    }\n\n    function testInternalFunc() public pure virtual returns (string memory) {\n        return internalFunc();\n    }\n\n    // Public functions can be called\n    // - inside this contract\n    // - inside contracts that inherit this contract\n    // - by other contracts and accounts\n    function publicFunc() public pure returns (string memory) {\n        return "public function called";\n    }\n\n    // External functions can only be called\n    // - by other contracts and accounts\n    function externalFunc() external pure returns (string memory) {\n        return "external function called";\n    }\n\n    // This function will not compile since we\'re trying to call\n    // an external function here.\n    // function testExternalFunc() public pure returns (string memory) {\n    //     return externalFunc();\n    // }\n\n    // State variables\n    string private privateVar = "my private variable";\n    string internal internalVar = "my internal variable";\n    string public publicVar = "my public variable";\n    // State variables cannot be external so this code won\'t compile.\n    // string external externalVar = "my external variable";\n}\n\ncontract Child is Base {\n    // Inherited contracts do not have access to private functions\n    // and state variables.\n    // function testPrivateFunc() public pure returns (string memory) {\n    //     return privateFunc();\n    // }\n\n    // Internal function call be called inside child contracts.\n    function testInternalFunc() public pure override returns (string memory) {\n        return internalFunc();\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);