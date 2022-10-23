"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1897],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8666:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={},l="\u7ed3\u6784\u5316\u6570\u636e",u={unversionedId:"rusty/encoding/structured",id:"rusty/encoding/structured",isDocsHomePage:!1,title:"\u7ed3\u6784\u5316\u6570\u636e",description:"\u5e8f\u5217\u548c\u53cd\u5e8f\u5217\u975e\u7ed3\u6784\u5316\u7684JSON",source:"@site/docs/rusty/encoding/structured.md",sourceDirName:"rusty/encoding",slug:"/rusty/encoding/structured",permalink:"/rooctblog/docs/rusty/encoding/structured",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u5b57\u7b26\u7f16\u7801",permalink:"/rooctblog/docs/rusty/encoding/strings"},next:{title:"\u76ee\u5f55\u8bbf\u95ee",permalink:"/rooctblog/docs/rusty/files/dir"}},c=[{value:"\u5e8f\u5217\u548c\u53cd\u5e8f\u5217\u975e\u7ed3\u6784\u5316\u7684JSON",id:"\u5e8f\u5217\u548c\u53cd\u5e8f\u5217\u975e\u7ed3\u6784\u5316\u7684json",children:[]},{value:"\u89e3\u6790 TOML \u6587\u4ef6",id:"\u89e3\u6790-toml-\u6587\u4ef6",children:[]},{value:"\u4f7f\u7528\u5c0f\u7aef\u5b57\u8282\u5e8f\u6765\u8bfb\u5199\u6574\u6570",id:"\u4f7f\u7528\u5c0f\u7aef\u5b57\u8282\u5e8f\u6765\u8bfb\u5199\u6574\u6570",children:[]}],d={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ed3\u6784\u5316\u6570\u636e"},"\u7ed3\u6784\u5316\u6570\u636e"),(0,o.kt)("h3",{id:"\u5e8f\u5217\u548c\u53cd\u5e8f\u5217\u975e\u7ed3\u6784\u5316\u7684json"},"\u5e8f\u5217\u548c\u53cd\u5e8f\u5217\u975e\u7ed3\u6784\u5316\u7684JSON"),(0,o.kt)("p",null,"[serde_json]"," \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684 JSON \u5305\uff0c\u5b83\u652f\u6301\u6211\u4eec\u5728\u4e0d\u58f0\u660e\u7ed3\u6784\u4f53\u7684\u60c5\u51b5\u4e0b\uff0c\u53bb\u89e3\u6790 JSON\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use serde_json::json;\nuse serde_json::{Value, Error};\n\nfn main -> Result<, Error> {\n    let j = r#"{\n                 "userid": 103609,\n                 "verified": true,\n                 "access_privileges": [\n                   "user",\n                   "admin"\n                 ]\n               }"#;\n\n    let parsed: Value = serde_json::from_str(j)?;\n\n    let expected = json!({\n        "userid": 103609,\n        "verified": true,\n        "access_privileges": [\n            "user",\n            "admin"\n        ]\n    });\n\n    assert_eq!(parsed, expected);\n\n    Ok()\n}\n')),(0,o.kt)("h3",{id:"\u89e3\u6790-toml-\u6587\u4ef6"},"\u89e3\u6790 TOML \u6587\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/toml/latest/toml/"},"toml")," \u5305\u53ef\u4ee5\u5c06 TOML \u6587\u4ef6\u7684\u5185\u5bb9\u89e3\u6790\u4e3a\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"toml::Value")," \u503c\uff0c\u8be5\u503c\u80fd\u4ee3\u8868\u4efb\u4f55\u5408\u6cd5\u7684 TOML \u6570\u636e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use toml::{Value, de::Error};\n\nfn main -> Result<, Error> {\n    let toml_content = r#"\n          [package]\n          name = "your_package"\n          version = "0.1.0"\n          authors = ["You! <you@example.org>"]\n\n          [dependencies]\n          serde = "1.0"\n          "#;\n\n    let package_info: Value = toml::from_str(toml_content)?;\n\n    assert_eq!(package_info["dependencies"]["serde"].as_str, Some("1.0"));\n    assert_eq!(package_info["package"]["name"].as_str,\n               Some("your_package"));\n\n    Ok()\n}\n')),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u914d\u5408 ","[serde]"," \u5c06 TOML \u89e3\u6790\u5230\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u7ed3\u6784\u4f53\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,editable"},'use serde::Deserialize;\n\nuse toml::de::Error;\nuse std::collections::HashMap;\n\n#[derive(Deserialize)]\nstruct Config {\n    package: Package,\n    dependencies: HashMap<String, String>,\n}\n\n#[derive(Deserialize)]\nstruct Package {\n    name: String,\n    version: String,\n    authors: Vec<String>,\n}\n\nfn main -> Result<, Error> {\n    let toml_content = r#"\n          [package]\n          name = "your_package"\n          version = "0.1.0"\n          authors = ["You! <you@example.org>"]\n\n          [dependencies]\n          serde = "1.0"\n          "#;\n\n    let package_info: Config = toml::from_str(toml_content)?;\n\n    assert_eq!(package_info.package.name, "your_package");\n    assert_eq!(package_info.package.version, "0.1.0");\n    assert_eq!(package_info.package.authors, vec!["You! <you@example.org>"]);\n    assert_eq!(package_info.dependencies["serde"], "1.0");\n\n    Ok()\n}\n')),(0,o.kt)("h3",{id:"\u4f7f\u7528\u5c0f\u7aef\u5b57\u8282\u5e8f\u6765\u8bfb\u5199\u6574\u6570"},"\u4f7f\u7528\u5c0f\u7aef\u5b57\u8282\u5e8f\u6765\u8bfb\u5199\u6574\u6570"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/byteorder/latest/byteorder/"},"byteorder")," \u5728\u81ea\u884c\u63a5\u6536\u6216\u53d1\u9001\u7f51\u7edc\u5b57\u8282\u6d41\u65f6\u4f1a\u975e\u5e38\u6709\u7528( \u9664\u975e\u6027\u80fd\u8981\u6c42\u9ad8\uff0c\u5426\u5219\u8fd8\u662f\u5efa\u8bae\u4f7f\u7528 JSON \u7b49\u6570\u636e\u534f\u8bae\uff0c\u4e0d\u8981\u81ea\u5df1\u505a\u5b57\u8282\u6d41\u89e3\u6790 )\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust,editable"},"\nuse byteorder::{LittleEndian, ReadBytesExt, WriteBytesExt};\nuse std::io::Error;\n\n#[derive(Default, PartialEq, Debug)]\nstruct Payload {\n    kind: u8,\n    value: u16,\n}\n\nfn main -> Result<, Error> {\n    let original_payload = Payload::default;\n    let encoded_bytes = encode(&original_payload)?;\n    let decoded_payload = decode(&encoded_bytes)?;\n    assert_eq!(original_payload, decoded_payload);\n    Ok()\n}\n\nfn encode(payload: &Payload) -> Result<Vec<u8>, Error> {\n    let mut bytes = vec![];\n    bytes.write_u8(payload.kind)?;\n    bytes.write_u16::<LittleEndian>(payload.value)?;\n    Ok(bytes)\n}\n\nfn decode(mut bytes: &[u8]) -> Result<Payload, Error> {\n    let payload = Payload {\n        kind: bytes.read_u8?,\n        value: bytes.read_u16::<LittleEndian>?,\n    };\n    Ok(payload)\n}\n")))}p.isMDXComponent=!0}}]);