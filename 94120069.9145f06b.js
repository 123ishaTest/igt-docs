(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(103)),i={id:"inventory",title:"Inventory"},c={unversionedId:"features/inventory",id:"features/inventory",isDocsHomePage:!1,title:"Inventory",description:"The Inventory is a known concept. It can keep track of Items, and display them to the player.",source:"@site/docs/features/inventory.md",slug:"/features/inventory",permalink:"/igt-docs/docs/features/inventory",version:"current",sidebar:"docs",previous:{title:"Key Items",permalink:"/igt-docs/docs/features/key-items"},next:{title:"Item List",permalink:"/igt-docs/docs/features/item-list"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"See also",id:"see-also",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Inventory")," is a known concept. It can keep track of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/igt-docs/docs/tools/items"}),"Items"),", and display them to the player.\nIt should also be able to check if you have enough items to perform certain actions."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Keep track of ",Object(o.b)("inlineCode",{parentName:"li"},"AbstractItem"),"s"),Object(o.b)("li",{parentName:"ul"},"Make it easy to gain and lose items of a specific ",Object(o.b)("inlineCode",{parentName:"li"},"ItemId")),Object(o.b)("li",{parentName:"ul"},"Items can contain optional data"),Object(o.b)("li",{parentName:"ul"},"Drag and drop support"),Object(o.b)("li",{parentName:"ul"},"Allow merging and swapping items")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"Internally the Inventory uses the ",Object(o.b)("inlineCode",{parentName:"p"},"InventorySlot")," class.\nIt is a simple data class with a few helper methods."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"export class InventorySlot {\n    item: AbstractItem;\n    amount: number;\n\n    isEmpty(): boolean {\n    };\n\n    isFull(): boolean {\n    };\n\n    gainItems(amount: number) {\n    };\n}\n")),Object(o.b)("p",null,"Note how it contains the actual ",Object(o.b)("inlineCode",{parentName:"p"},"AbstractItem"),", not just a reference to its id.\nThis allows us to store additional data in items, like durability of a weapon."),Object(o.b)("h4",{id:"events"},"Events"),Object(o.b)("h4",{id:"onitemgain"},"onItemGain"),Object(o.b)("p",null,"Emitted whenever an item is gained."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'App.game.features.inventory.onItemGain.subscribe((item, amount) => {\n    console.log("Something happened", data);\n});\n')),Object(o.b)("h2",{id:"see-also"},"See also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/inventory/IgtInventory.ts"}),"src/ig-template/features/inventory/IgtInventory.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/inventory/InventorySlot.ts"}),"src/ig-template/features/inventory/InventorySlot.ts"))))}p.isMDXComponent=!0}}]);