"use strict";(self.webpackChunkbrinyiczki_github_io=self.webpackChunkbrinyiczki_github_io||[]).push([[3608],{3169:(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});t(7294);var i=t(9960),s=t(5999),a=t(1944),n=t(7961),c=t(2503),l=t(5893);function h(e){let{year:r,posts:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{as:"h3",id:r,children:r}),(0,l.jsx)("ul",{children:t.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(i.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function d(e){let{years:r}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:r.map(((e,r)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(h,{...e})},r)))})})})}function o(e){let{archive:r}=e;const t=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),i=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),h=function(e){const r=e.reduce(((e,r)=>{const t=r.metadata.date.split("-")[0],i=e.get(t)??[];return e.set(t,[r,...i])}),new Map);return Array.from(r,(e=>{let[r,t]=e;return{year:r,posts:t}}))}(r.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.d,{title:t,description:i}),(0,l.jsxs)(n.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(c.Z,{as:"h1",className:"hero__title",children:t}),(0,l.jsx)("p",{className:"hero__subtitle",children:i})]})}),(0,l.jsx)("main",{children:h.length>0&&(0,l.jsx)(d,{years:h})})]})]})}}}]);