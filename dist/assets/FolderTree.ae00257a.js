import{aP as y,a as M,h as t,I as q,S as i,C as g,aj as O,M as v,y as x,bi as K,z as I,A as B,B as H,D as _,m as f,ac as R,bJ as U,bK as W,a$ as X,bL as G,_ as Q,bM as Y,x as T,r as Z,bN as p,aq as w,aC as $,a6 as ee,N as te,aE as z,p as ne,a7 as re,H as oe,d as ae,bO as le,bf as ce}from"./index.db1687cc.js";import{j as de,k as ue}from"./index.00d2bcfc.js";const E=le(),P=e=>{var a;const[l,n]=f("/");return(a=e.handle)==null||a.call(e,{setPath:n}),t(R,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return t(E.Provider,{get value(){var r,c,u,o;return{value:l,onChange:h=>{n(h),e.onChange(h)},autoOpen:(r=e.autoOpen)!=null?r:!1,forceRoot:(c=e.forceRoot)!=null?c:!1,showEmptyIcon:(u=e.showEmptyIcon)!=null?u:!1,showHiddenFolder:(o=e.showHiddenFolder)!=null?o:!0}},get children(){return t(D,{path:"/"})}})}})},D=e=>{const{isHidePath:l}=U(),[n,a]=f(),{value:r,onChange:c,forceRoot:u,autoOpen:o,showEmptyIcon:h,showHiddenFolder:V}=W(E),N=()=>{var d;return Boolean(h&&n()!==void 0&&!((d=n())!=null&&d.length))},[j,A]=X(()=>G(e.path,Q(),u));let b=!1;const m=async()=>{var S;if((S=n())!=null&&S.length)return;const d=await A();ce(d,L=>{b=!0,a(L)},()=>{s()&&C()})},{isOpen:s,onToggle:C}=y(),F=()=>r()===e.path,k=Y(e.path);T(Z(r,async d=>{!o||k(d)&&(s()||C(),b||m())}));const J=()=>l(e.path)&&!k(r());return t(i,{get when(){return V||!J()},get children(){return t(R,{get children(){return[t(O,{spacing:"$2",get children(){return[t(i,{get when(){return!j()},get fallback(){return t(p,{size:"sm",get color(){return w()}})},get children(){return t(i,{get when(){return!N()},get fallback(){return t($,{get color(){return w()},as:de})},get children(){return t($,{get color(){return w()},as:ue,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{C(),s()&&m()}})}})}}),t(ee,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return F()?"$info8":"transparent"},get _hover(){return{bgColor:F()?"$info8":te()}},onClick:()=>{c(e.path)},get children(){return z(()=>e.path==="/",!0)()?"root":ne(e.path)}})]}}),t(i,{get when(){return s()},get children(){return t(re,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return t(oe,{get each(){return n()},children:d=>t(D,{get path(){return ae(e.path,d.name)}})})}})}})]}})}})},ge=e=>{var u;const l=M(),[n,a]=f((u=e.defaultValue)!=null?u:"/"),[r,c]=f();return T(()=>{var o;!e.opened||(o=r())==null||o.setPath(n())}),t(_,{size:"xl",blockScrollOnMount:!1,get opened(){return e.opened},get onClose(){return e.onClose},get children(){return[t(v,{}),t(x,{get children(){return[t(I,{w:"$full",css:{overflowWrap:"break-word"},get children(){return e.header}}),t(B,{get children(){return[z(()=>e.children),t(P,{onChange:a,handle:o=>c(o),autoOpen:!0})]}}),t(H,{display:"flex",gap:"$2",get children(){return[t(i,{get when(){return e.footerSlot},get children(){return e.footerSlot}}),t(g,{get onClick(){return e.onClose},colorScheme:"neutral",get children(){return l("global.cancel")}}),t(g,{get loading(){return e.loading},onClick:()=>{var o;return(o=e.onSubmit)==null?void 0:o.call(e,n())},get children(){return l("global.ok")}})]}})]}})]}})},fe=e=>{const{isOpen:l,onOpen:n,onClose:a}=y(),r=M();return[t(O,{w:"$full",spacing:"$2",get children(){return[t(q,{get id(){return e.id},get value(){return e.value},onInput:c=>e.onChange(c.currentTarget.value),get readOnly(){return e.onlyFolder},get onClick(){return e.onlyFolder?n:()=>{}},get placeholder(){return r(`global.${e.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),t(i,{get when(){return!e.onlyFolder},get children(){return t(g,{onClick:n,get children(){return r("global.choose")}})}})]}}),t(_,{size:"xl",get opened(){return l()},onClose:a,get children(){return[t(v,{}),t(x,{get children(){return[t(K,{}),t(I,{get children(){return r("global.choose_folder")}}),t(B,{get children(){return t(P,{forceRoot:!0,get onChange(){return e.onChange}})}}),t(H,{get children(){return t(g,{onClick:a,get children(){return r("global.confirm")}})}})]}})]}})]};export{P as F,ge as M,fe as a};