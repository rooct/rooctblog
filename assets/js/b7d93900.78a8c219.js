"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6479],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7776:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Gas",version:"0.8.10",description:"Example of gas and gas limit in Solidity"},u=void 0,c={unversionedId:"Example/Gas",id:"Example/Gas",isDocsHomePage:!1,title:"Gas",description:"Example of gas and gas limit in Solidity",source:"@site/docs/Example/Gas.md",sourceDirName:"Example",slug:"/Example/Gas",permalink:"/rooctblog/docs/Example/Gas",tags:[],version:"current",frontMatter:{title:"Gas",version:"0.8.10",description:"Example of gas and gas limit in Solidity"},sidebar:"tutorialSidebar",previous:{title:"Function Selector",permalink:"/rooctblog/docs/Example/FunctionSelector"},next:{title:"Hello World",permalink:"/rooctblog/docs/Example/Helloworld"}},s=[{value:"How much <code>ether</code> do you need to pay for a transaction?",id:"how-much-ether-do-you-need-to-pay-for-a-transaction",children:[]},{value:"Gas Limit",id:"gas-limit",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-much-ether-do-you-need-to-pay-for-a-transaction"},"How much ",(0,o.kt)("inlineCode",{parentName:"h3"},"ether")," do you need to pay for a transaction?"),(0,o.kt)("p",null,"You pay ",(0,o.kt)("inlineCode",{parentName:"p"},"gas spent * gas price")," amount of ",(0,o.kt)("inlineCode",{parentName:"p"},"ether"),", where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas")," is a unit of computation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas spent")," is the total amount of ",(0,o.kt)("inlineCode",{parentName:"li"},"gas")," used in a transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas price")," is how much ",(0,o.kt)("inlineCode",{parentName:"li"},"ether")," you are willing to pay per ",(0,o.kt)("inlineCode",{parentName:"li"},"gas"))),(0,o.kt)("p",null,"Transactions with higher gas price have higher priority to be included in a block."),(0,o.kt)("p",null,"Unspent gas will be refunded."),(0,o.kt)("h3",{id:"gas-limit"},"Gas Limit"),(0,o.kt)("p",null,"There are 2 upper bounds to the amount of gas you can spend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"gas limit")," (max amount of gas you're willing to use for your transaction, set by you)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"block gas limit")," (max amount of gas allowed in a block, set by the network)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract Gas {\n    uint public i = 0;\n\n    // Using up all of the gas that you send causes your transaction to fail.\n    // State changes are undone.\n    // Gas spent are not refunded.\n    function forever() public {\n        // Here we run a loop until all of the gas are spent\n        // and the transaction fails\n        while (true) {\n            i += 1;\n        }\n    }\n}\n\n")))}m.isMDXComponent=!0}}]);