import{bK as O,E as I,b as M,h as t,ai as h,N as w,aQ as m,aD as j,dy as b,t as k,aS as y,S,aB as _,ap as L,aA as v,a7 as d,cp as p,cY as z,ah as D,l as P,a as B,m as x,x as T,dz as E,dA as H,G as f,dB as K,H as W,a3 as F,a8 as G}from"./index.6a82a039.js";import{b as R}from"./style.eb349a51.js";import{x as N}from"./index.cdd196a1.js";import{g as Q,O as U}from"./icon.523591b2.js";import{u as V,I as C,a as $}from"./helper.3ef8fcb1.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],Y=e=>{const{isHide:l}=O();if(l(e.obj))return null;const{setPathAs:c}=I(),{show:g}=R({id:1}),{pushHref:i,to:s}=M(),{isMouseSupported:o}=$(),a=V(),u=()=>P.list_item_filename_overflow;return t(D.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(h,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:N,get href(){return e.obj.name},get cursor(){return!o()&&(!m()||a())?"pointer":"default"},get bgColor(){return j(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":n=>{!o()||n.ctrlKey||n.metaKey||n.shiftKey||s(i(e.obj.name))},"on:click":n=>{if(o())return n.preventDefault();if(!!m()){if(n.preventDefault(),a()){s(i(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:n=>{k(()=>{y(!1),b(e.index,!0,!0)}),g(n,{props:e.obj})},get children(){return[t(h,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[t(S,{get when(){return m()},get children(){return t(C,{"on:click":n=>{n.stopPropagation()},get checked(){return e.obj.selected},onChange:n=>{b(e.index,n.target.checked)}})}}),t(_,{class:"icon",boxSize:"$6",get color(){return L()},get as(){return Q(e.obj)},mr:"$1","on:click":n=>{e.obj.type===U.IMAGE&&(n.stopPropagation(),n.preventDefault(),v.emit("gallery",e.obj.name))}}),t(d,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:u()==="multi_line"?"unset":"nowrap","overflow-x":u()==="scrollable"?"auto":"hidden",textOverflow:u()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(d,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return p(e.obj.size)}}),t(d,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return z(e.obj.modified)}})]}})}})},A=e=>{const l=B(),[c,g]=x(),[i,s]=x(!1);T(()=>{c()&&e.sortCallback(c(),i())});const o=a=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:a.textAlign,cursor:"pointer",onClick:()=>{a.name===c()?s(!i()):k(()=>{g(a.name),s(!1)})}});return t(h,{class:"title",w:"$full",p:"$2",get children(){return[t(h,{get w(){return r[0].w},spacing:"$1",get children(){return[t(S,{get when(){return j(()=>!e.disableCheckbox,!0)()&&m()},get children(){return t(C,{get checked(){return E()},get indeterminate(){return H()},onChange:a=>{y(a.target.checked)}})}}),t(d,f(()=>o(r[0]),{get children(){return l(`home.obj.${r[0].name}`)}}))]}}),t(d,f({get w(){return r[1].w}},()=>o(r[1]),{get children(){return l(`home.obj.${r[1].name}`)}})),t(d,f({get w(){return r[2].w}},()=>o(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return l(`home.obj.${r[2].name}`)}}))]}})},q=()=>{const e=i=>{var o,a;const s=Array.from((a=(o=i.dataTransfer)==null?void 0:o.items)!=null?a:[]);for(let u=0;u<s.length;u++)if(s[u].kind==="file"){v.emit("tool","upload"),i.preventDefault();break}},{isMouseSupported:l,registerSelectContainer:c,captureContentMenu:g}=$();return c(),t(G,{onDragOver:e,"oncapture:contextmenu":g,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[t(A,{sortCallback:K}),t(W,{get each(){return F.objs},children:(i,s)=>t(Y,{obj:i,get index(){return s()}})})]}})},ne=Object.freeze(Object.defineProperty({__proto__:null,ListTitle:A,default:q},Symbol.toStringTag,{value:"Module"}));export{A as L,ne as a,r as c};
