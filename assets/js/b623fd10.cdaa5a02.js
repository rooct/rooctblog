"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2616],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return s}});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),p=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},m=function(n){var e=p(n.components);return a.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},l=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,m=d(n,["components","mdxType","originalType","parentName"]),l=p(t),s=r,g=l["".concat(c,".").concat(s)]||l[s]||u[s]||i;return t?a.createElement(g,o(o({ref:e},m),{},{components:t})):a.createElement(g,o({ref:e},m))}));function s(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=l;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=n,d.mdxType="string"==typeof n?n:r,o[1]=d;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8365:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],d={title:"Crowd Fund",version:"0.8.10",description:"An example of crowd funding contract"},c=void 0,p={unversionedId:"example/app/CrowdFund",id:"example/app/CrowdFund",isDocsHomePage:!1,title:"Crowd Fund",description:"An example of crowd funding contract",source:"@site/docs/example/app/CrowdFund.md",sourceDirName:"example/app",slug:"/example/app/CrowdFund",permalink:"/rooctblog/docs/example/app/CrowdFund",tags:[],version:"current",frontMatter:{title:"Crowd Fund",version:"0.8.10",description:"An example of crowd funding contract"},sidebar:"docs",previous:{title:"Create2",permalink:"/rooctblog/docs/example/app/Create2"},next:{title:"Dutch Auction",permalink:"/rooctblog/docs/example/app/DutchAuction"}},m=[],u={toc:m};function l(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Crowd fund ERC20 token"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User creates a campaign."),(0,i.kt)("li",{parentName:"ol"},"Users can pledge, transferring their token to a campaign."),(0,i.kt)("li",{parentName:"ol"},"After the campaign ends, campaign creator can claim the funds if total amount pledged is more than the campaign goal."),(0,i.kt)("li",{parentName:"ol"},"Otherwise, campaign did not reach it's goal, users can withdraw their pledge.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\ninterface IERC20 {\n    function transfer(address, uint) external returns (bool);\n\n    function transferFrom(\n        address,\n        address,\n        uint\n    ) external returns (bool);\n}\n\ncontract CrowdFund {\n    event Launch(\n        uint id,\n        address indexed creator,\n        uint goal,\n        uint32 startAt,\n        uint32 endAt\n    );\n    event Cancel(uint id);\n    event Pledge(uint indexed id, address indexed caller, uint amount);\n    event Unpledge(uint indexed id, address indexed caller, uint amount);\n    event Claim(uint id);\n    event Refund(uint id, address indexed caller, uint amount);\n\n    struct Campaign {\n        // Creator of campaign\n        address creator;\n        // Amount of tokens to raise\n        uint goal;\n        // Total amount pledged\n        uint pledged;\n        // Timestamp of start of campaign\n        uint32 startAt;\n        // Timestamp of end of campaign\n        uint32 endAt;\n        // True if goal was reached and creator has claimed the tokens.\n        bool claimed;\n    }\n\n    IERC20 public immutable token;\n    // Total count of campaigns created.\n    // It is also used to generate id for new campaigns.\n    uint public count;\n    // Mapping from id to Campaign\n    mapping(uint => Campaign) public campaigns;\n    // Mapping from campaign id => pledger => amount pledged\n    mapping(uint => mapping(address => uint)) public pledgedAmount;\n\n    constructor(address _token) {\n        token = IERC20(_token);\n    }\n\n    function launch(\n        uint _goal,\n        uint32 _startAt,\n        uint32 _endAt\n    ) external {\n        require(_startAt >= block.timestamp, "start at < now");\n        require(_endAt >= _startAt, "end at < start at");\n        require(_endAt <= block.timestamp + 90 days, "end at > max duration");\n\n        count += 1;\n        campaigns[count] = Campaign({\n            creator: msg.sender,\n            goal: _goal,\n            pledged: 0,\n            startAt: _startAt,\n            endAt: _endAt,\n            claimed: false\n        });\n\n        emit Launch(count, msg.sender, _goal, _startAt, _endAt);\n    }\n\n    function cancel(uint _id) external {\n        Campaign memory campaign = campaigns[_id];\n        require(campaign.creator == msg.sender, "not creator");\n        require(block.timestamp < campaign.startAt, "started");\n\n        delete campaigns[_id];\n        emit Cancel(_id);\n    }\n\n    function pledge(uint _id, uint _amount) external {\n        Campaign storage campaign = campaigns[_id];\n        require(block.timestamp >= campaign.startAt, "not started");\n        require(block.timestamp <= campaign.endAt, "ended");\n\n        campaign.pledged += _amount;\n        pledgedAmount[_id][msg.sender] += _amount;\n        token.transferFrom(msg.sender, address(this), _amount);\n\n        emit Pledge(_id, msg.sender, _amount);\n    }\n\n    function unpledge(uint _id, uint _amount) external {\n        Campaign storage campaign = campaigns[_id];\n        require(block.timestamp <= campaign.endAt, "ended");\n\n        campaign.pledged -= _amount;\n        pledgedAmount[_id][msg.sender] -= _amount;\n        token.transfer(msg.sender, _amount);\n\n        emit Unpledge(_id, msg.sender, _amount);\n    }\n\n    function claim(uint _id) external {\n        Campaign storage campaign = campaigns[_id];\n        require(campaign.creator == msg.sender, "not creator");\n        require(block.timestamp > campaign.endAt, "not ended");\n        require(campaign.pledged >= campaign.goal, "pledged < goal");\n        require(!campaign.claimed, "claimed");\n\n        campaign.claimed = true;\n        token.transfer(campaign.creator, campaign.pledged);\n\n        emit Claim(_id);\n    }\n\n    function refund(uint _id) external {\n        Campaign memory campaign = campaigns[_id];\n        require(block.timestamp > campaign.endAt, "not ended");\n        require(campaign.pledged < campaign.goal, "pledged >= goal");\n\n        uint bal = pledgedAmount[_id][msg.sender];\n        pledgedAmount[_id][msg.sender] = 0;\n        token.transfer(msg.sender, bal);\n\n        emit Refund(_id, msg.sender, bal);\n    }\n}\n\n')))}l.isMDXComponent=!0}}]);