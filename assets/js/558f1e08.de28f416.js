"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1593],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7508:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Address"},c=void 0,s={unversionedId:"solidity/api/Address",id:"solidity/api/Address",isDocsHomePage:!1,title:"Address",description:"Address",source:"@site/docs/solidity/api/Address.md",sourceDirName:"solidity/api",slug:"/solidity/api/Address",permalink:"/rooctblog/docs/solidity/api/Address",tags:[],version:"current",frontMatter:{title:"Address"},sidebar:"docs",previous:{title:"Intruduction",permalink:"/rooctblog/docs/intro"},next:{title:"Block & Transaction",permalink:"/rooctblog/docs/solidity/api/BlockTx"}},u=[{value:"Address",id:"address",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("p",null,".balance (uint256):",(0,a.kt)("br",{parentName:"p"}),"\n","Address\u7684\u4f59\u989d\uff0c\u4ee5wei\u4e3a\u5355\u4f4d\u3002"),(0,a.kt)("p",null,".transfer(uint256 amount):",(0,a.kt)("br",{parentName:"p"}),"\n","\u53d1\u9001\u7ed9\u5b9a\u6570\u91cf\u7684ether\u5230\u67d0\u4e2a\u5730\u5740\uff0c\u4ee5wei\u4e3a\u5355\u4f4d\u3002\u5931\u8d25\u65f6\u629b\u51fa\u5f02\u5e38\u3002(\u63a8\u8350\u4f7f\u7528)"),(0,a.kt)("p",null,".send(uint256 amount) returns (bool):",(0,a.kt)("br",{parentName:"p"}),"\n","\u53d1\u9001\u7ed9\u5b9a\u6570\u91cf\u7684ether\u5230\u67d0\u4e2a\u5730\u5740\uff0c\u4ee5wei\u4e3a\u5355\u4f4d, \u5931\u8d25\u65f6\u8fd4\u56defalse\u3002\uff08\u9700\u8981\u5224\u65ad\u7ed3\u679c\uff09"),(0,a.kt)("p",null,".call(\u2026) returns (bool):",(0,a.kt)("br",{parentName:"p"}),"\n","\u53d1\u8d77\u5e95\u5c42\u7684call\u8c03\u7528\u3002\u5931\u8d25\u65f6\u8fd4\u56defalse\u3002\uff08\u9700\u8981\u5224\u65ad\u7ed3\u679c\uff09"),(0,a.kt)("p",null,".callcode(\u2026) returns (bool):",(0,a.kt)("br",{parentName:"p"}),"\n","\u53d1\u8d77\u5e95\u5c42\u7684callcode\u8c03\u7528\uff0c\u5931\u8d25\u65f6\u8fd4\u56defalse\u3002\u4e0d\u9f13\u52b1\u4f7f\u7528\uff0c\u672a\u6765\u53ef\u80fd\u4f1a\u79fb\u9664\u3002\uff08\u9700\u8981\u5224\u65ad\u7ed3\u679c\uff09"),(0,a.kt)("p",null,".delegatecall(\u2026) returns (bool):",(0,a.kt)("br",{parentName:"p"}),"\n","\u53d1\u8d77\u5e95\u5c42\u7684delegatecall\u8c03\u7528\uff0c\u5931\u8d25\u65f6\u8fd4\u56defalse \u5c5e\u4e8e\u59d4\u6258\u8c03\u7528\uff0c\u4fdd\u8bc1\u5408\u7ea6\u4e4b\u95f4\u7684\u53c2\u6570\u5e03\u5c40\u4e00\u81f4"))}d.isMDXComponent=!0}}]);