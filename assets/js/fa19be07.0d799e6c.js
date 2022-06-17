"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7635],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),d=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=d(n.components);return r.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),c=d(t),m=a,f=c["".concat(u,".").concat(m)]||c[m]||l[m]||i;return t?r.createElement(f,o(o({ref:e},p),{},{components:t})):r.createElement(f,o({ref:e},p))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=n,s.mdxType="string"==typeof n?n:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5972:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"Uniswap V2 Optimal One Sided Supply",version:"0.8.10",description:"Uniswap V2 Optimal One Sided Supply"},u=void 0,d={unversionedId:"solidity/example/defi/Optimal",id:"solidity/example/defi/Optimal",isDocsHomePage:!1,title:"Uniswap V2 Optimal One Sided Supply",description:"Uniswap V2 Optimal One Sided Supply",source:"@site/docs/solidity/example/defi/Optimal.md",sourceDirName:"solidity/example/defi",slug:"/solidity/example/defi/Optimal",permalink:"/rooctblog/docs/solidity/example/defi/Optimal",tags:[],version:"current",frontMatter:{title:"Uniswap V2 Optimal One Sided Supply",version:"0.8.10",description:"Uniswap V2 Optimal One Sided Supply"},sidebar:"docs",previous:{title:"Uniswap V2 Add Remove Liquidity",permalink:"/rooctblog/docs/solidity/example/defi/Liquidity"},next:{title:"Staking Rewards",permalink:"/rooctblog/docs/solidity/example/defi/StakingRewards"}},p=[{value:"Optimal One Sided Supply",id:"optimal-one-sided-supply",children:[]}],l={toc:p};function c(n){var e=n.components,t=(0,a.Z)(n,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"optimal-one-sided-supply"},"Optimal One Sided Supply"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ncontract TestUniswapOptimalOneSidedSupply {\n    address private constant FACTORY = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;\n    address private constant ROUTER = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;\n    address private constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;\n\n    function sqrt(uint y) private pure returns (uint z) {\n        if (y > 3) {\n            z = y;\n            uint x = y / 2 + 1;\n            while (x < z) {\n                z = x;\n                x = (y / x + x) / 2;\n            }\n        } else if (y != 0) {\n            z = 1;\n        }\n    }\n\n    /*\n    s = optimal swap amount\n    r = amount of reserve for token a\n    a = amount of token a the user currently has (not added to reserve yet)\n    f = swap fee percent\n    s = (sqrt(((2 - f)r)^2 + 4(1 - f)ar) - (2 - f)r) / (2(1 - f))\n    */\n    function getSwapAmount(uint r, uint a) public pure returns (uint) {\n        return (sqrt(r * (r * 3988009 + a * 3988000)) - r * 1997) / 1994;\n    }\n\n    /* Optimal one-sided supply\n    1. Swap optimal amount from token A to token B\n    2. Add liquidity\n    */\n    function zap(\n        address _tokenA,\n        address _tokenB,\n        uint _amountA\n    ) external {\n        require(_tokenA == WETH || _tokenB == WETH, "!weth");\n\n        IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountA);\n\n        address pair = IUniswapV2Factory(FACTORY).getPair(_tokenA, _tokenB);\n        (uint reserve0, uint reserve1, ) = IUniswapV2Pair(pair).getReserves();\n\n        uint swapAmount;\n        if (IUniswapV2Pair(pair).token0() == _tokenA) {\n            // swap from token0 to token1\n            swapAmount = getSwapAmount(reserve0, _amountA);\n        } else {\n            // swap from token1 to token0\n            swapAmount = getSwapAmount(reserve1, _amountA);\n        }\n\n        _swap(_tokenA, _tokenB, swapAmount);\n        _addLiquidity(_tokenA, _tokenB);\n    }\n\n    function _swap(\n        address _from,\n        address _to,\n        uint _amount\n    ) internal {\n        IERC20(_from).approve(ROUTER, _amount);\n\n        address[] memory path = new address[](2);\n        path = new address[](2);\n        path[0] = _from;\n        path[1] = _to;\n\n        IUniswapV2Router(ROUTER).swapExactTokensForTokens(\n            _amount,\n            1,\n            path,\n            address(this),\n            block.timestamp\n        );\n    }\n\n    function _addLiquidity(address _tokenA, address _tokenB) internal {\n        uint balA = IERC20(_tokenA).balanceOf(address(this));\n        uint balB = IERC20(_tokenB).balanceOf(address(this));\n        IERC20(_tokenA).approve(ROUTER, balA);\n        IERC20(_tokenB).approve(ROUTER, balB);\n\n        IUniswapV2Router(ROUTER).addLiquidity(\n            _tokenA,\n            _tokenB,\n            balA,\n            balB,\n            0,\n            0,\n            address(this),\n            block.timestamp\n        );\n    }\n}\n\ninterface IUniswapV2Router {\n    function addLiquidity(\n        address tokenA,\n        address tokenB,\n        uint amountADesired,\n        uint amountBDesired,\n        uint amountAMin,\n        uint amountBMin,\n        address to,\n        uint deadline\n    )\n        external\n        returns (\n            uint amountA,\n            uint amountB,\n            uint liquidity\n        );\n\n    function swapExactTokensForTokens(\n        uint amountIn,\n        uint amountOutMin,\n        address[] calldata path,\n        address to,\n        uint deadline\n    ) external returns (uint[] memory amounts);\n}\n\ninterface IUniswapV2Factory {\n    function getPair(address token0, address token1) external view returns (address);\n}\n\ninterface IUniswapV2Pair {\n    function token0() external view returns (address);\n\n    function token1() external view returns (address);\n\n    function getReserves()\n        external\n        view\n        returns (\n            uint112 reserve0,\n            uint112 reserve1,\n            uint32 blockTimestampLast\n        );\n}\n\ninterface IERC20 {\n    function totalSupply() external view returns (uint);\n\n    function balanceOf(address account) external view returns (uint);\n\n    function transfer(address recipient, uint amount) external returns (bool);\n\n    function allowance(address owner, address spender) external view returns (uint);\n\n    function approve(address spender, uint amount) external returns (bool);\n\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint amount\n    ) external returns (bool);\n}\n\n')))}c.isMDXComponent=!0}}]);