"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[751],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2593:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Hash"},l=void 0,u={unversionedId:"solidity/example/Hash",id:"solidity/example/Hash",isDocsHomePage:!1,title:"Hash",description:"\u54c8\u5e0c\u8fd0\u7b97",source:"@site/docs/solidity/example/Hash.md",sourceDirName:"solidity/example",slug:"/solidity/example/Hash",permalink:"/rooctblog/docs/solidity/example/Hash",tags:[],version:"current",frontMatter:{title:"Hash"},sidebar:"docs",previous:{title:"Gas",permalink:"/rooctblog/docs/solidity/example/Gas"},next:{title:"Hello World",permalink:"/rooctblog/docs/solidity/example/Helloworld"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u54c8\u5e0c\u8fd0\u7b97")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"encode \u6253\u5305\u6210abi\u7684\u7f16\u7801\u683c\u5f0f\u4f1a\u88650"),(0,a.kt)("li",{parentName:"ul"},"encodePacked \u53ea\u662f\u6253\u5305\u6210\u4e86\u5341\u516d\u8fdb\u5236\uff0c\u4e0d\u4f1a\u88650\uff0c\u5b58\u5728\u4e0d\u540c\u7684\u53c2\u6570 \u76f8\u540c\u7684\u503c\uff0c\u907f\u514d\u53d1\u751f\uff0c\u4e2d\u95f4\u52a0\u5165uint\u503c"),(0,a.kt)("li",{parentName:"ul"},"keccak256 \u51fd\u6570\u8fdb\u884c\u52a0\u5bc6\u538b\u7f29\u6253\u5305")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"contract HashFunc{\n    function hash(string memory text0,string memory text1) external pure returns(bytes32){\n        return keccak256(abi.encodePacked(text0,text1));\n    }\n    function encode(string memory text0,string memory text1) external pure returns(bytes){\n        return abi.encode(text0,text1);\n    }\n    function encodePacked(string memory text0,string memory text1) external pure returns(bytes){\n        return abi.encodePacked(text0,text1);\n    }\n}\n")))}m.isMDXComponent=!0}}]);