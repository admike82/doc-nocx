"use strict";(self.webpackChunkdoc_nocx=self.webpackChunkdoc_nocx||[]).push([[5414],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const o={sidebar_position:2},i="Vue tuteur",l={unversionedId:"Accueil/vue-tuteur",id:"Accueil/vue-tuteur",title:"Vue tuteur",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/Accueil/vue-tuteur.md",sourceDirName:"Accueil",slug:"/Accueil/vue-tuteur",permalink:"/docs/Accueil/vue-tuteur",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Vue \xe9tudiant",permalink:"/docs/Accueil/vue-etudiant"},next:{title:"Vue formateur",permalink:"/docs/Accueil/vue-formateur"}},c={},p=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vue-tuteur"},"Vue tuteur"),(0,n.kt)("p",null,"Add ",(0,n.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}m.isMDXComponent=!0}}]);