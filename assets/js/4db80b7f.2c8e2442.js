"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[481],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1319:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],c={title:"Calling Other Contract",version:"0.8.10",description:"In Solidity, contract can call other contracts in several ways"},i=void 0,u={unversionedId:"example/CallingContract",id:"example/CallingContract",isDocsHomePage:!1,title:"Calling Other Contract",description:"In Solidity, contract can call other contracts in several ways",source:"@site/docs/example/CallingContract.md",sourceDirName:"example",slug:"/example/CallingContract",permalink:"/rooctblog/docs/example/CallingContract",tags:[],version:"current",frontMatter:{title:"Calling Other Contract",version:"0.8.10",description:"In Solidity, contract can call other contracts in several ways"},sidebar:"docs",previous:{title:"Call",permalink:"/rooctblog/docs/example/Call"},next:{title:"Constants",permalink:"/rooctblog/docs/example/Constants"}},s=[],p={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Contract can call other contracts in 2 ways."),(0,l.kt)("p",null,"The easiest way to is to just call it, like ",(0,l.kt)("inlineCode",{parentName:"p"},"A.foo(x, y, z)"),"."),(0,l.kt)("p",null,"Another way to call other contracts is to use the low-level ",(0,l.kt)("inlineCode",{parentName:"p"},"call"),"."),(0,l.kt)("p",null,"This method is not recommended."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Callee {\n    uint public x;\n    uint public value;\n\n    function setX(uint _x) public returns (uint) {\n        x = _x;\n        return x;\n    }\n\n    function setXandSendEther(uint _x) public payable returns (uint, uint) {\n        x = _x;\n        value = msg.value;\n\n        return (x, value);\n    }\n}\n\ncontract Caller {\n    function setX(Callee _callee, uint _x) public {\n        uint x = _callee.setX(_x);\n    }\n\n    function setXFromAddress(address _addr, uint _x) public {\n        Callee callee = Callee(_addr);\n        callee.setX(_x);\n    }\n\n    function setXandSendEther(Callee _callee, uint _x) public payable {\n        (uint x, uint value) = _callee.setXandSendEther{value: msg.value}(_x);\n    }\n}\n\n")))}f.isMDXComponent=!0}}]);