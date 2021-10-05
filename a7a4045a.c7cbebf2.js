(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<i;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(103)),s={id:"statistics",title:"Statistics"},c={unversionedId:"features/statistics",id:"features/statistics",isDocsHomePage:!1,title:"Statistics",description:"Statistics are fun. Whether they track total money gained or times defeated, it is always interesting to view everything you've done in a game.",source:"@site/docs/features/statistics.md",slug:"/features/statistics",permalink:"/igt-docs/docs/features/statistics",version:"current",sidebar:"docs",previous:{title:"Settings",permalink:"/igt-docs/docs/features/settings"},next:{title:"Special Events",permalink:"/igt-docs/docs/features/special-events"}},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"See also",id:"see-also",children:[]}],u={rightToc:o};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Statistics are fun. Whether they track total money gained or times defeated, it is always interesting to view everything you've done in a game.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"Statistics")," feature makes it easy to track any sort of statistic!"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Statistics")," can also be used for ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/igt-docs/docs/tools/requirements"}),"Requirements"),".\nThey will also form the basis for most ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/igt-docs/docs/features/achievements"}),"Achievements")),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Track numbers and arrays of numbers."),Object(i.b)("li",{parentName:"ul"},"Subscribe to other ",Object(i.b)("inlineCode",{parentName:"li"},"Feature"),"s so nothing depends on ",Object(i.b)("inlineCode",{parentName:"li"},"Statistics"),"."),Object(i.b)("li",{parentName:"ul"},"Newly added statistics are saved automatically.")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export class IgtStatistics extends Feature {\n    public totalMoneyGained: NumberStatistic;\n\n    initialize(features: Features): void {\n\n        // You can register statistics as attributes for easy access, but you don't have to.\n        this.totalMoneyGained = this.registerStatistic(new NumberStatistic(StatisticId.TotalMoneyGained, 'Total money'));\n\n        // Then add an event listener to update the statistic\n        features.wallet.onCurrencyGain.subscribe((currency: Currency) => {\n            if (currency.type === CurrencyType.Money) {\n                this.totalMoneyGained.increment(currency.amount);\n            }\n        });\n        // Done!\n    }\n}\n")),Object(i.b)("h2",{id:"see-also"},"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/statistics"}),"src/ig-template/features/statistics"))))}l.isMDXComponent=!0}}]);