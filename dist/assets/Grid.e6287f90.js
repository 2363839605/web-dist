import{e as t,bb as b,ae as g,d,t as h,aC as f,W as j,z as x,aB as $,aE as w,ck as i,aa as k,am as C,k as l,bq as p,a6 as v,bc as I,v as y,o as M,b_ as S}from"./index.d7784eaf.js";import{I as z}from"./Folder.9dfdbb38.js";import{b as E,M as O}from"./Layout.c75b132a.js";import{c as P}from"./useUtil.ef9475d8.js";import{I as A}from"./index.472518fa.js";import{I as G}from"./ImageWithError.700302d4.js";import{O as L}from"./obj.fca5b341.js";import{g as W}from"./icon.374c8451.js";import"./useT.763fd639.js";import"./useTitle.be7005c2.js";import"./Markdown.f3e25bbf.js";import"./api.b6e19324.js";import"./index.1dde6a3b.js";import"./FolderTree.60b9de0c.js";const H=e=>{const{isHide:a}=P();if(a(e.obj))return null;const{setPathAs:s}=E(),o=t(g,{get color(){return b()},boxSize:"$12",get as(){return W(e.obj)}}),[c,n]=d(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:m}=z({id:1});return t(O.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===L.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(p,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(v,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(I,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},Y=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(y,{get each(){return M.objs},children:(e,a)=>t(H,{obj:e,get index(){return a()}})})}});export{Y as default};