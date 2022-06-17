"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6875],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=i.createContext({}),s=function(n){var e=i.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=s(n.components);return i.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,u=n.parentName,c=d(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||o;return t?i.createElement(f,a(a({ref:e},c),{},{components:t})):i.createElement(f,a({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=p;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=n,d.mdxType="string"==typeof n?n:r,a[1]=d;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6904:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],d={title:"Uniswap V2 Add Remove Liquidity",version:"0.8.10",description:"Uniswap V2 add remove liquidity"},u=void 0,s={unversionedId:"solidity/example/defi/Liquidity",id:"solidity/example/defi/Liquidity",isDocsHomePage:!1,title:"Uniswap V2 Add Remove Liquidity",description:"Uniswap V2 add remove liquidity",source:"@site/docs/solidity/example/defi/Liquidity.md",sourceDirName:"solidity/example/defi",slug:"/solidity/example/defi/Liquidity",permalink:"/rooctblog/docs/solidity/example/defi/Liquidity",tags:[],version:"current",frontMatter:{title:"Uniswap V2 Add Remove Liquidity",version:"0.8.10",description:"Uniswap V2 add remove liquidity"},sidebar:"docs",previous:{title:"Constant Sum AMM",permalink:"/rooctblog/docs/solidity/example/defi/CSamm"},next:{title:"Uniswap V2 Optimal One Sided Supply",permalink:"/rooctblog/docs/solidity/example/defi/Optimal"}},c=[{value:"Add / Remove Liquidity",id:"add--remove-liquidity",children:[]}],l={toc:c};function p(n){var e=n.components,t=(0,r.Z)(n,a);return(0,o.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"add--remove-liquidity"},"Add / Remove Liquidity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract TestUniswapLiquidity {\n    address private constant FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;\n    address private constant ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;\n    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n\n    function addLiquidity(\n        address _tokenA,\n        address _tokenB,\n        uint _amountA,\n        uint _amountB\n    ) external {\n        IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);\n        IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountB);\n\n        IERC20(_tokenA).approve(ROUTER, _amountA);\n        IERC20(_tokenB).approve(ROUTER, _amountB);\n\n        (uint amountA, uint amountB, uint liquidity) = IUniswapV2Router(ROUTER)\n            .addLiquidity(\n                _tokenA,\n                _tokenB,\n                _amountA,\n                _amountB,\n                1,\n                1,\n                address(this),\n                block.timestamp\n            );\n    }\n\n    function removeLiquidity(address _tokenA, address _tokenB) external {\n        address pair = IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);\n\n        uint liquidity = IERC20(pair).balanceOf(address(this));\n        IERC20(pair).approve(ROUTER, liquidity);\n\n        (uint amountA, uint amountB) = IUniswapV2Router(ROUTER).removeLiquidity(\n            _tokenA,\n            _tokenB,\n            liquidity,\n            1,\n            1,\n            address(this),\n            block.timestamp\n        );\n    }\n}\n\ninterface IUniswapV2Router {\n    function addLiquidity(\n        address tokenA,\n        address tokenB,\n        uint amountADesired,\n        uint amountBDesired,\n        uint amountAMin,\n        uint amountBMin,\n        address to,\n        uint deadline\n    )\n        external\n        returns (\n            uint amountA,\n            uint amountB,\n            uint liquidity\n        );\n\n    function removeLiquidity(\n        address tokenA,\n        address tokenB,\n        uint liquidity,\n        uint amountAMin,\n        uint amountBMin,\n        address to,\n        uint deadline\n    ) external returns (uint amountA, uint amountB);\n}\n\ninterface IUniswapV2Factory {\n    function getPair(address token0, address token1) external view returns (address);\n}\n\ninterface IERC20 {\n    function totalSupply() external view returns (uint);\n\n    function balanceOf(address account) external view returns (uint);\n\n    function transfer(address recipient, uint amount) external returns (bool);\n\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint amount) external returns (bool);\n\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint amount\n    ) external returns (bool);\n}\n\n")))}p.isMDXComponent=!0}}]);