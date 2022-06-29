"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=l,y=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5019:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),i=["components"],a={title:"Kill"},c=void 0,u={unversionedId:"solidity/example/Kill",id:"solidity/example/Kill",isDocsHomePage:!1,title:"Kill",description:"\u81ea\u6bc1\u5408\u7ea6 selfdestruct()",source:"@site/docs/solidity/example/Kill.md",sourceDirName:"solidity/example",slug:"/solidity/example/Kill",permalink:"/rooctblog/docs/solidity/example/Kill",tags:[],version:"current",frontMatter:{title:"Kill"},sidebar:"docs",previous:{title:"Hashing with Keccak256",permalink:"/rooctblog/docs/solidity/example/Keccak256"},next:{title:"Library",permalink:"/rooctblog/docs/solidity/example/Library"}},p=[],s={toc:p};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u81ea\u6bc1\u5408\u7ea6 selfdestruct()")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5220\u9664\u5408\u7ea6"),(0,o.kt)("li",{parentName:"ul"},"\u5f3a\u5236\u53d1\u9001\u4e3b\u5e01\u5230\u6307\u5b9a\u5730\u5740\u4e2d\uff0c\u5982\u679c\u63a5\u6536\u65b9\u4e3a\u5408\u7ea6\u5e76\u4e14\u6ca1\u6709\u8bbe\u7f6ereceive\u56de\u8c03\u51fd\u6570\uff0c\u4e5f\u4f1a\u5f3a\u5236\u63a5\u6536\u4e3b\u5e01")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"contract Kill {\n    constructor() payable {}\n\n    function kill() external {\n        selfdestruct(payable(msg.sender));\n    }\n\n    function testCall() external pure returns(uint){\n        return 1;\n    }\n}\n\ncontract Helper {\n    function getBalance() external view returns(uint){\n        returnn address(this).balance;\n    }\n\n    function kill(Kill _kill) external {\n        _kill.kill();\n    }\n}\n")))}f.isMDXComponent=!0}}]);