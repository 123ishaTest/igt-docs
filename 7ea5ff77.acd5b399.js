(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(103)),s={id:"redeemable-codes",title:"Redeemable Codes"},c={unversionedId:"features/redeemable-codes",id:"features/redeemable-codes",isDocsHomePage:!1,title:"Redeemable Codes",description:"Redeemable codes are a great way to reward a specific set of players.",source:"@site/docs/features/redeemable-codes.md",slug:"/features/redeemable-codes",permalink:"/igt-docs/docs/features/redeemable-codes",version:"current",sidebar:"docs",previous:{title:"Achievements",permalink:"/igt-docs/docs/features/achievements"},next:{title:"Key Items",permalink:"/igt-docs/docs/features/key-items"}},i=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"See also",id:"see-also",children:[]}],l={rightToc:i};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Redeemable codes are a great way to reward a specific set of players.\nYou can distribute a code in your Discord that gives the user 100 money once.\nIt is also useful for an early beta, where you can let the testers skip the early game with a code."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Codes can be stored in the source, hashed so snoops can't find them"),Object(o.b)("li",{parentName:"ul"},"Codes cannot be redeemed multiple times"),Object(o.b)("li",{parentName:"ul"},"Codes should be able to give anything from any other Feature")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'// Entering a code on a users behalf\nconst code = App.game.features.codes.enterCode("DUMMY");\nif (!code) {\n    console.log("Code incorrect or already redeemed")\n} else {\n    console.log(code.description)\n}\n\n// Calculating the hash for a new code\nconst hash = App.game.features.codes.hash("DUMMY")\nconsole.log(hash); // 65408136\n\n// Then you can create a new code in RedeemableCodes.ts\nthis.list.push(\n    new RedeemableCode(RedeemableCodeId.exampleCode, \'Example code that gives 100 money, the key is "DUMMY"\', 65408136, () => {\n        features.wallet.gainCurrency(new Currency(100, CurrencyType.Money));\n    })\n)\n')),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"People with access to the source code, will inspect it to see the codes.\nTo avoid them spoiling the codes for everybody, we hash the codes, and only store the hash in the source code."),Object(o.b)("p",null,"Each code has an ",Object(o.b)("inlineCode",{parentName:"p"},"Id"),", which is used as a save key.\nRedeemed codes are saved as a list of keys, so people can't claim them twice after a refresh."),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/codes"}),"src/ig-template/features/codes")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/codes/IgtRedeemableCodes.ts"}),"src/ig-template/features/codes/IgtRedeemableCodes.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/codes/RedeemableCode.ts"}),"src/ig-template/features/codes/RedeemableCode.ts"))))}d.isMDXComponent=!0}}]);