"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9750],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,k=s["".concat(c,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1830:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={},c="\u5feb\u901f\u4e86\u89e3 Compound",u={unversionedId:"dapps/Loan/Compound/quick_understand",id:"dapps/Loan/Compound/quick_understand",isDocsHomePage:!1,title:"\u5feb\u901f\u4e86\u89e3 Compound",description:"\u8d85\u989d\u62b5\u62bc\u8d37\u6b3e(over-collateralized loan)",source:"@site/docs/dapps/Loan/Compound/quick_understand.md",sourceDirName:"dapps/Loan/Compound",slug:"/dapps/Loan/Compound/quick_understand",permalink:"/rooctblog/docs/dapps/Loan/Compound/quick_understand",tags:[],version:"current",frontMatter:{},sidebar:"dapp",previous:{title:"Compound Comptroller\u5408\u7ea6\u89e3\u6790",permalink:"/rooctblog/docs/dapps/Loan/Compound/comptroller_understand"},next:{title:"Compound RateModel\u5408\u7ea6\u89e3\u6790",permalink:"/rooctblog/docs/dapps/Loan/Compound/rateModel_understand"}},d=[{value:"\u8d85\u989d\u62b5\u62bc\u8d37\u6b3e(over-collateralized loan)",id:"\u8d85\u989d\u62b5\u62bc\u8d37\u6b3eover-collateralized-loan",children:[]},{value:"\u805a\u5408\u501f\u8d37",id:"\u805a\u5408\u501f\u8d37",children:[]},{value:"\u6807\u7684\u8d44\u4ea7(Underlying Token)",id:"\u6807\u7684\u8d44\u4ea7underlying-token",children:[]},{value:"cToken",id:"ctoken",children:[]},{value:"\u5151\u6362\u7387(Exchange Rate)",id:"\u5151\u6362\u7387exchange-rate",children:[]},{value:"\u62b5\u62bc\u56e0\u5b50(Collateral Factor)",id:"\u62b5\u62bc\u56e0\u5b50collateral-factor",children:[]},{value:"\u5229\u7387\u6a21\u578b(Interest Rate Model)",id:"\u5229\u7387\u6a21\u578binterest-rate-model",children:[]},{value:"\u50a8\u5907\u91d1\u7387(Reserve Factor)",id:"\u50a8\u5907\u91d1\u7387reserve-factor",children:[]},{value:"\u8d44\u91d1\u4f7f\u7528\u7387(Utilization Rate)",id:"\u8d44\u91d1\u4f7f\u7528\u7387utilization-rate",children:[]},{value:"\u6e05\u7b97(Liquidation)",id:"\u6e05\u7b97liquidation",children:[]},{value:"\u4ef7\u683c\u9884\u8a00\u673a(Price Oracle)",id:"\u4ef7\u683c\u9884\u8a00\u673aprice-oracle",children:[]}],p={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u4e86\u89e3-compound"},"\u5feb\u901f\u4e86\u89e3 Compound"),(0,a.kt)("h2",{id:"\u8d85\u989d\u62b5\u62bc\u8d37\u6b3eover-collateralized-loan"},"\u8d85\u989d\u62b5\u62bc\u8d37\u6b3e(over-collateralized loan)"),(0,a.kt)("p",null,"\u76ee\u524d\u533a\u5757\u94fe\u4e0a\u7684\u53bb\u4e2d\u5fc3\u5316\u501f\u8d37\u4e3a\u4e86\u4fdd\u8bc1\u507f\u8fd8\u8d44\u91d1\uff0c\u5927\u591a\u4e3a\u8d85\u989d\u62b5\u62bc\u8d37\u6b3e\u3002\u7528\u6237\u9700\u8981\u62b5\u62bc\u6bd4\u501f\u51fa\u8d44\u4ea7\u4ef7\u503c\u66f4\u9ad8\u7684\u8d44\u4ea7\uff0c\u624d\u80fd\u83b7\u5f97\u501f\u8d37\u670d\u52a1\u3002\u4ece\u8fd9\u4e2a\u89d2\u5ea6\u6765\u8bf4\uff0c\u76ee\u524d\u7684\u53bb\u4e2d\u5fc3\u5316\u501f\u8d37\u7684\u5e73\u53f0\uff0c\u4e0e\u5176\u8bf4\u662f\u63d0\u4f9b\u501f\u8d37\u670d\u52a1\uff0c\u66f4\u50cf\u662f\u5728\u63d0\u4f9b\u91d1\u878d\u6760\u6746\u670d\u52a1\u3002\u76ee\u524d\u9664\u4e86\u95ea\u7535\u8d37\uff0c\u6ca1\u6709\u5176\u4ed6\u6210\u719f\u7684\u65e0\u62b5\u62bc\u8d37\u6b3e\u6a21\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u805a\u5408\u501f\u8d37"},"\u805a\u5408\u501f\u8d37"),(0,a.kt)("p",null,"\u4e0d\u540c\u4e8e\u4e00\u5bf9\u4e00\u7684\u62b5\u62bc\u501f\u8d37\uff0c\u76ee\u524d\u7edd\u5927\u591a\u6570\u7684\u53bb\u4e2d\u5fc3\u5316\u501f\u8d37\u5e73\u53f0\u90fd\u63d0\u4f9b\u805a\u5408\u501f\u8d37\u670d\u52a1\u3002\u53ea\u8981\u662f\u5e73\u53f0\u652f\u6301\u7684\u8d44\u4ea7\uff0c\u90fd\u53ef\u4ee5\u62b5\u62bc\u591a\u79cd\u8d44\u4ea7\u4ece\u800c\u501f\u8d37\u53e6\u5916\u7684\u591a\u79cd\u8d44\u4ea7\uff0c\u65b9\u4fbf\u4e86\u7528\u6237\u7684\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u6807\u7684\u8d44\u4ea7underlying-token"},"\u6807\u7684\u8d44\u4ea7(Underlying Token)"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u6709\u4eba\u5229\u7528\u4f4e\u6d41\u52a8\u6027\u7684\u8d44\u4ea7\u5957\u53d6\u9ad8\u6d41\u52a8\u6027\u7684\u8d44\u4ea7\uff0c\u53bb\u4e2d\u5fc3\u5316\u501f\u8d37\u5e73\u53f0\u90fd\u53ea\u5141\u8bb8\u7ecf\u8fc7\u5ba1\u6838\u7684\u9ad8\u6d41\u52a8\u6027\u8d44\u4ea7\u4f5c\u4e3a\u6807\u7684\u8d44\u4ea7\u8fdb\u884c\u501f\u8d37\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"ctoken"},"cToken"),(0,a.kt)("p",null,"cToken \u662f\u7528\u6237\u5728 Compound \u4e0a\u5b58\u5165\u8d44\u4ea7\u7684\u51ed\u8bc1\uff0c\u6bcf\u4e00\u79cd\u6807\u7684\u8d44\u4ea7\u90fd\u6709\u5bf9\u5e94\u7684\u4e00\u79cd cToken\uff0c\u51ed\u6b64\u53ef\u4ee5\u6362\u56de\u8d28\u62bc\u8d44\u4ea7\u7684\u672c\u91d1\u548c\u6536\u76ca\u3002"),(0,a.kt)("h2",{id:"\u5151\u6362\u7387exchange-rate"},"\u5151\u6362\u7387(Exchange Rate)"),(0,a.kt)("p",null,"\u5151\u6362\u7387\u662f cToken \u4e0e\u6807\u7684\u8d44\u4ea7\u7684\u5151\u6362\u6bd4\u4f8b\uff0c\u5151\u6362\u7387\u4f1a\u968f\u7740\u65f6\u95f4\u548c\u5229\u7387\u7684\u53d8\u5316\u800c\u4e0d\u65ad\u4e0a\u6da8\uff0c\u6301\u6709 cToken \u5c31\u7b49\u4e8e\u4e0d\u65ad\u751f\u606f\uff0c\u6240\u4ee5\u4e5f\u53eb\u751f\u606f\u4ee3\u5e01\u3002"),(0,a.kt)("h2",{id:"\u62b5\u62bc\u56e0\u5b50collateral-factor"},"\u62b5\u62bc\u56e0\u5b50(Collateral Factor)"),(0,a.kt)("p",null,"\u6bcf\u79cd\u6807\u7684\u8d44\u4ea7\u90fd\u6709\u4e00\u4e2a\u62b5\u62bc\u56e0\u5b50\uff0c\u4ee3\u8868\u7528\u6237\u62b5\u62bc\u7684\u8d44\u4ea7\u4ef7\u503c\u5bf9\u5e94\u53ef\u5f97\u5230\u7684\u501f\u6b3e\u7684\u6bd4\u7387\u3002\u5047\u5982\u7528\u6237\u5b58\u5165\u4e86 1 \u4e2a ETH \u5e76\u5f00\u542f\u4f5c\u4e3a\u62b5\u62bc\u54c1\uff0c\u5f53\u65f6\u7684 ETH \u4ef7\u503c\u4e3a 2000 USD\uff0c\u62b5\u62bc\u56e0\u5b50\u4e3a 0.75\u3002\u5219\u53ef\u501f\u989d\u5ea6\u4e3a1 ",(0,a.kt)("em",{parentName:"p"}," 2000 ")," 0.75 = 1500 USD\uff0c\u53ef\u6700\u591a\u501f\u51fa\u4ef7\u503c 1500 USD \u7684\u5176\u4ed6\u8d44\u4ea7\u3002"),(0,a.kt)("h2",{id:"\u5229\u7387\u6a21\u578binterest-rate-model"},"\u5229\u7387\u6a21\u578b(Interest Rate Model)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u51c6\u5e74\u5229\u7387(baseRatePerYear)")),(0,a.kt)("p",null,"\u5f53\u8d28\u62bc\u8d44\u4ea7\u7684\u8d44\u91d1\u4f7f\u7528\u7387\u4e3a 0 \u65f6\uff0c\u6700\u4f4e\u7684\u5e74\u5316\u5229\u7387\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f4\u7ebf\u578b")),(0,a.kt)("p",null,"\u5728\u8be5\u6a21\u578b\u4e0b\uff0c\u8d44\u4ea7\u7684\u5229\u7387\u4f1a\u968f\u7740\u8d44\u91d1\u4f7f\u7528\u7387\u5347\u9ad8\u800c\u7ebf\u6027\u589e\u957f\uff08\u5229\u7387 = \u57fa\u51c6\u5e74\u5229\u7387 + \u8d44\u91d1\u4f7f\u7528\u7387 * \u589e\u957f\u7387\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62d0\u70b9\u578b")),(0,a.kt)("p",null,"\u5728\u8be5\u6a21\u578b\u4e0b\uff0c\u8d44\u4ea7\u5229\u7387\u7684\u589e\u957f\u4f1a\u5206\u4e3a\u4e24\u6bb5\uff0c\u524d\u9762\u4e00\u6bb5\u589e\u957f\u7387\u8f83\u4f4e\uff0c\u540e\u9762\u4e00\u6bb5\u589e\u957f\u7387\u8f83\u9ad8\u3002\u76ee\u524dCompound \u4f7f\u7528\u8fd9\u4e00\u79cd\u5229\u7387\u6a21\u578b\uff0c\u4ee5\u8d44\u91d1\u4f7f\u7528\u7387 80% \u4e3a\u62d0\u70b9\u3002"),(0,a.kt)("h2",{id:"\u50a8\u5907\u91d1\u7387reserve-factor"},"\u50a8\u5907\u91d1\u7387(Reserve Factor)"),(0,a.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62\u6324\u5151\uff0c\u9700\u8981\u6709\u4e00\u5b9a\u6bd4\u7387\u7684\u50a8\u5907\u91d1\u652f\u6301\u5e73\u65f6\u7528\u6237\u7684\u5b58\u53d6\u6b3e\u4e1a\u52a1\u3002\u8fd9\u90e8\u5206\u8d44\u4ea7\u4e0d\u8ba1\u5165\u8d44\u91d1\u4f7f\u7528\u7387\u4e4b\u5185\uff0c\u56e0\u6b64\u4e0d\u4f1a\u88ab\u501f\u51fa\u3002"),(0,a.kt)("h2",{id:"\u8d44\u91d1\u4f7f\u7528\u7387utilization-rate"},"\u8d44\u91d1\u4f7f\u7528\u7387(Utilization Rate)"),(0,a.kt)("p",null,"\u8d44\u91d1\u4f7f\u7528\u7387\u662f\u6307\u9664\u4e86\u8d44\u4ea7\u50a8\u5907\u91d1\u5916\uff0c\u5176\u4ed6\u6240\u6709\u8d44\u4ea7\u7684\u8d44\u91d1\u4f7f\u7528\u7387\u3002\u8fd9\u4e00\u90e8\u5206\u8d44\u91d1\u7684\u5b58\u5728\u51b3\u5b9a\u4e86\u5b58\u6b3e\u5229\u7387\u4f1a\u6bd4\u501f\u6b3e\u5229\u7387\u4f4e\u3002"),(0,a.kt)("h2",{id:"\u6e05\u7b97liquidation"},"\u6e05\u7b97(Liquidation)"),(0,a.kt)("p",null,"\u5982\u679c\u8d44\u4ea7\u4ef7\u683c\u6ce2\u52a8\u5bfc\u81f4\u62b5\u62bc ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5404\u8d44\u4ea7\u7684\u4ef7\u503c * \u5404\u8d28\u62bc\u56e0\u5b50")," \u4e4b\u548c\u4f4e\u4e8e\u501f\u6b3e\u4ef7\u503c\uff0c\u90a3\u4e48\u501f\u8d37\u5e73\u53f0\u5c31\u4f1a\u5141\u8bb8\u6e05\u7b97\u8005\u5bf9\u8fd9\u90e8\u5206\u8d44\u4ea7\u8fdb\u884c\u6e05\u7b97\u3002\u4e3a\u4e86\u6fc0\u52b1\u6e05\u7b97\u8005\uff0c\u501f\u8d37\u5e73\u53f0\u4f1a\u5141\u8bb8\u652f\u4ed8\u4e00\u90e8\u5206\u7684\u8d39\u7528\u7ed9\u6e05\u7b97\u8005\uff0c\u800c\u8fd9\u5f53\u7136\u662f\u7531\u88ab\u6e05\u7b97\u7684\u7528\u6237\u6765\u627f\u62c5\u7684\u3002\u56e0\u6b64\u4fdd\u6301\u501f\u8d37\u5e73\u8861\u4e0d\u89e6\u53ca\u5e73\u53f0\u7684\u6e05\u7b97\u7ebf\uff0c\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"),(0,a.kt)("h2",{id:"\u4ef7\u683c\u9884\u8a00\u673aprice-oracle"},"\u4ef7\u683c\u9884\u8a00\u673a(Price Oracle)"),(0,a.kt)("p",null,"\u4e3a\u4e86\u83b7\u53d6\u6807\u7684\u8d44\u4ea7\u7684\u5b9e\u65f6\u4ef7\u683c\uff0c\u9700\u8981\u4ef7\u683c\u9884\u8a00\u673a\u5bf9\u5404\u5927\u4ea4\u6613\u5e73\u53f0\u7684\u8d44\u4ea7\u4ef7\u683c\u8fdb\u884c\u8bb0\u5f55\u3002\u5982\u679c\u4ef7\u683c\u9884\u8a00\u673a\u8bb0\u5f55\u4e86\u9519\u8bef\u7684\u4ef7\u683c\uff0c\u5c06\u4f1a\u5bfc\u81f4\u5de8\u5927\u7684\u8d44\u4ea7\u98ce\u9669\u3002"))}s.isMDXComponent=!0}}]);