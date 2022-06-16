"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6617],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,f=p["".concat(c,".").concat(b)]||p[b]||s[b]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7863:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Immutable",version:"0.8.10",description:"Immutable variables"},c=void 0,u={unversionedId:"example/Immutable",id:"example/Immutable",isDocsHomePage:!1,title:"Immutable",description:"Immutable variables",source:"@site/docs/example/Immutable.md",sourceDirName:"example",slug:"/example/Immutable",permalink:"/rooctblog/docs/example/Immutable",tags:[],version:"current",frontMatter:{title:"Immutable",version:"0.8.10",description:"Immutable variables"},sidebar:"docs",previous:{title:"If / Else",permalink:"/rooctblog/docs/example/IfElse"},next:{title:"Import",permalink:"/rooctblog/docs/example/Import"}},m=[],s={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Immutable \u5173\u952e\u8bcd \u7c7b\u4f3c\u4e8econstant, "),(0,o.kt)("li",{parentName:"ul"},"constant\u63d0\u524d\u77e5\u9053\u53d8\u91cf\u7684\u503c\uff0c\u800c\u4e14\u5fc5\u987b\u90e8\u7f72\u524d\u521d\u59cb\u5316"),(0,o.kt)("li",{parentName:"ul"},"Immutable \u53ef\u4ee5\u90e8\u7f72\u7684\u65f6\u5019\u8d4b\u503c\uff0c\u8282\u7701gas")),(0,o.kt)("p",null,"Immutable variables are like constants. Values of immutable variables can be set inside the constructor but cannot be modified afterwards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Immutable {\n    // coding convention to uppercase constant variables\n    address public immutable MY_ADDRESS;\n    uint public immutable MY_UINT;\n\n    constructor(uint _myUint) {\n        MY_ADDRESS = msg.sender;\n        MY_UINT = _myUint;\n    }\n}\n\n")))}p.isMDXComponent=!0}}]);