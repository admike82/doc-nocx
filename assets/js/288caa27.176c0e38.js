"use strict";(self.webpackChunkdoc_nocx=self.webpackChunkdoc_nocx||[]).push([[656],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(7462),n=(r(7294),r(4137));const o={sidebar_position:1},i="Suivi comportement",p={unversionedId:"Suivis/suivi-comportement",id:"Suivis/suivi-comportement",title:"Suivi comportement",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/Suivis/suivi-comportement.md",sourceDirName:"Suivis",slug:"/Suivis/suivi-comportement",permalink:"/doc-nocx/docs/Suivis/suivi-comportement",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Suivis",permalink:"/doc-nocx/docs/category/suivis"},next:{title:"Suivi des comp\xe9tences",permalink:"/doc-nocx/docs/Suivis/suivi-comp\xe9tences"}},c={},l=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"suivi-comportement"},"Suivi comportement"),(0,n.kt)("p",null,"Add ",(0,n.kt)("strong",{parentName:"p"},"Markdown or React")," files to ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages")," to create a ",(0,n.kt)("strong",{parentName:"p"},"standalone page"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/index.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo.md")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," \u2192 ",(0,n.kt)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),(0,n.kt)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-react-page"},"http://localhost:3000/my-react-page"),"."),(0,n.kt)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),(0,n.kt)("p",null,"A new page is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/my-markdown-page"},"http://localhost:3000/my-markdown-page"),"."))}m.isMDXComponent=!0}}]);