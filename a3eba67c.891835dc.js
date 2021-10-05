(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,d=u["".concat(a,".").concat(p)]||u[p]||m[p]||i;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),i=(n(0),n(103)),a={id:"probability",title:"Probability"},s={unversionedId:"tools/probability",id:"tools/probability",isDocsHomePage:!1,title:"Probability",description:"Randomness is a tricky thing to get right. Ideally you have all your randomness from the same source. This makes it much",source:"@site/docs/tools/probability.md",slug:"/tools/probability",permalink:"/igt-docs/docs/tools/probability",version:"current",sidebar:"docs",previous:{title:"Hotkeys",permalink:"/igt-docs/docs/tools/hotkeys"},next:{title:"Actions",permalink:"/igt-docs/docs/tools/actions"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"TODO",id:"todo",children:[]},{value:"See also",id:"see-also",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Randomness is a tricky thing to get right. Ideally you have all your randomness from the same source. This makes it much\neasier to validate, and dismiss players complaining about RNG with confidence. The only way for the droprate on item X\nto be broken, is if it were broken everywhere in your game."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It should be complete, the developer should never have to use ",Object(i.b)("inlineCode",{parentName:"li"},"Math.random()")," in their own scripts"),Object(i.b)("li",{parentName:"ul"},"Support all basic operations"),Object(i.b)("li",{parentName:"ul"},"Support custom types. Any type should be able to be drawn from a distribution")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// integer between min (inclusive) and max (exclusive)\nconst number = Random.intBetween(10, 20);\n\n// 1 in 1000 chance to be true\nconst isLegendary = Random.booleanWithOneInChance(1000);\n\n// 50% chance to be true\nconst fiftyFifty = Random.booleanWithProbability(0.5)\n\n// Random element from array\nconst element = Random.fromArray([1, 4]);\n\n// Weighted distribution (weights don't have to be normalized)\nconst distribution = new WeightedDistribution([\n    new Outcome<number>(1, 0.01),\n    new Outcome<number>(2, 0.99),\n]);\n\ndistribution.draw() // 1 or 2, but probably 2\n\n\n// Add requirements to Outcomes!\nconst distributionWithRequirements = new WeightedDistribution([\n    new Outcome<number>(1, 0.01),\n    new Outcome<number>(2, 0.99, new BooleanRequirement('always false', () => false)),\n]);\n\ndistribution.draw() // 1\n\n// Draw custom objects\nclass MyObject {\n    itemId: string;\n    description: string;\n}\n\nconst weapon = new MyObject('weapon', 'to attack with');\nconst shield = new MyObject('shield', 'to block with');\n\nconst distributionWithCustomObjects = new WeightedDistribution([\n    new Outcome<MyObject>(weapon, 1),\n    new Outcome<MyObject>(shield, 1),\n]);\n\ndistributionWithCustomObjects.draw() // The 'weapon' or 'shield' object\n")),Object(i.b)("h2",{id:"todo"},"TODO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add more distributions (gaussian, uniform)")),Object(i.b)("h2",{id:"see-also"},"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/probability/Random.ts"}),"src/ig-template/tools/probability/Random.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/probability/Outcome.ts"}),"src/ig-template/tools/probability/Outcome.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/probability/WeightedDistribution.ts"}),"src/ig-template/tools/probability/WeightedDistribution.ts"))))}b.isMDXComponent=!0}}]);