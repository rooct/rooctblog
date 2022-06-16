"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1359],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2416:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={title:"PiggyBank"},l=void 0,p={unversionedId:"example/practice/PiggyBank",id:"example/practice/PiggyBank",isDocsHomePage:!1,title:"PiggyBank",description:"\u5c0f\u732a\u4e2a\u4eba\u5b58\u94b1\u7f50",source:"@site/docs/example/practice/PiggyBank.md",sourceDirName:"example/practice",slug:"/example/practice/PiggyBank",permalink:"/rooctblog/docs/example/practice/PiggyBank",tags:[],version:"current",frontMatter:{title:"PiggyBank"},sidebar:"docs",previous:{title:"Uniswap V2 Swap",permalink:"/rooctblog/docs/example/defi/Swap"},next:{title:"ABI Decode",permalink:"/rooctblog/docs/example/AbiDecode"}},u=[],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5c0f\u732a\u4e2a\u4eba\u5b58\u94b1\u7f50")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e2a\u4eba\u63d0\u53d6\u5e76\u9500\u6bc1\u5408\u7ea6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'contract PiggyBank {\n    event Deposit(address,uint);\n    event Withdraw(address,uint);\n\n    receive() external payable{\n        emit Deposit(msg.sender,msg.value);\n    }\n\n    address public owner;\n\n    constructor() external {\n        owner = msg.sender;\n    }\n\n    function withdraw() external {\n        require(msg.sender==owner,"owner not allowed");\n        emit Withdraw(msg.sender,address(this).balance);\n        selfdestruct(payable(msg.sender));\n    }\n\n}\n')))}m.isMDXComponent=!0}}]);