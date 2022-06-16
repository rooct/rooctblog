"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4333],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),l=u(t),d=a,p=l["".concat(c,".").concat(d)]||l[d]||f[d]||s;return t?r.createElement(p,i(i({ref:n},g),{},{components:t})):r.createElement(p,i({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=l;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8419:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return g}});var r=t(7462),a=t(3366),s=(t(7294),t(3905)),i=["components"],o={title:"Verifying Signature",version:"0.8.10",description:"An example of how to verify signatures in Solidity"},c=void 0,u={unversionedId:"example/Signature",id:"example/Signature",isDocsHomePage:!1,title:"Verifying Signature",description:"An example of how to verify signatures in Solidity",source:"@site/docs/example/Signature.md",sourceDirName:"example",slug:"/example/Signature",permalink:"/rooctblog/docs/example/Signature",tags:[],version:"current",frontMatter:{title:"Verifying Signature",version:"0.8.10",description:"An example of how to verify signatures in Solidity"},sidebar:"docs",previous:{title:"Shadowing Inherited State Variables",permalink:"/rooctblog/docs/example/Shadow"},next:{title:"Signature Replay",permalink:"/rooctblog/docs/example/SignatureReplay"}},g=[],f={toc:g};function l(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Messages can be signed off chain and then verified on chain using a smart contract."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.10;\n\n/* Signature Verification\n\nHow to Sign and Verify\n# Signing\n1. Create message to sign\n2. Hash the message\n3. Sign the hash (off chain, keep your private key secret)\n\n# Verify\n1. Recreate hash from the original message\n2. Recover signer from signature and hash\n3. Compare recovered signer to claimed signer\n*/\n\ncontract VerifySignature {\n    /* 1. Unlock MetaMask account\n    ethereum.enable()\n    */\n\n    /* 2. Get message hash to sign\n    getMessageHash(\n        0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C,\n        123,\n        "coffee and donuts",\n        1\n    )\n\n    hash = "0xcf36ac4f97dc10d91fc2cbb20d718e94a8cbfe0f82eaedc6a4aa38946fb797cd"\n    */\n    function getMessageHash(\n        address _to,\n        uint _amount,\n        string memory _message,\n        uint _nonce\n    ) public pure returns (bytes32) {\n        return keccak256(abi.encodePacked(_to, _amount, _message, _nonce));\n    }\n\n    /* 3. Sign message hash\n    # using browser\n    account = "copy paste account of signer here"\n    ethereum.request({ method: "personal_sign", params: [account, hash]}).then(console.log)\n\n    # using web3\n    web3.personal.sign(hash, web3.eth.defaultAccount, console.log)\n\n    Signature will be different for different accounts\n    0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b\n    */\n    function getEthSignedMessageHash(bytes32 _messageHash)\n        public\n        pure\n        returns (bytes32)\n    {\n        /*\n        Signature is produced by signing a keccak256 hash with the following format:\n        "\\x19Ethereum Signed Message\\n" + len(msg) + msg\n        */\n        return\n            keccak256(\n                abi.encodePacked("\\x19Ethereum Signed Message:\\n32", _messageHash)\n            );\n    }\n\n    /* 4. Verify signature\n    signer = 0xB273216C05A8c0D4F0a4Dd0d7Bae1D2EfFE636dd\n    to = 0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C\n    amount = 123\n    message = "coffee and donuts"\n    nonce = 1\n    signature =\n        0x993dab3dd91f5c6dc28e17439be475478f5635c92a56e17e82349d3fb2f166196f466c0b4e0c146f285204f0dcb13e5ae67bc33f4b888ec32dfe0a063e8f3f781b\n    */\n    function verify(\n        address _signer,\n        address _to,\n        uint _amount,\n        string memory _message,\n        uint _nonce,\n        bytes memory signature\n    ) public pure returns (bool) {\n        bytes32 messageHash = getMessageHash(_to, _amount, _message, _nonce);\n        bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);\n\n        return recoverSigner(ethSignedMessageHash, signature) == _signer;\n    }\n\n    function recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature)\n        public\n        pure\n        returns (address)\n    {\n        (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);\n\n        return ecrecover(_ethSignedMessageHash, v, r, s);\n    }\n\n    function splitSignature(bytes memory sig)\n        public\n        pure\n        returns (\n            bytes32 r,\n            bytes32 s,\n            uint8 v\n        )\n    {\n        require(sig.length == 65, "invalid signature length");\n\n        assembly {\n            /*\n            First 32 bytes stores the length of the signature\n\n            add(sig, 32) = pointer of sig + 32\n            effectively, skips first 32 bytes of signature\n\n            mload(p) loads next 32 bytes starting at the memory address p into memory\n            */\n\n            // first 32 bytes, after the length prefix\n            r := mload(add(sig, 32))\n            // second 32 bytes\n            s := mload(add(sig, 64))\n            // final byte (first byte of the next 32 bytes)\n            v := byte(0, mload(add(sig, 96)))\n        }\n\n        // implicitly return (r, s, v)\n    }\n}\n\n')))}l.isMDXComponent=!0}}]);