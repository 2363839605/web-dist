import{h as t,G as P,a4 as y,k as x,ag as v,ah as R,bO as i,a0 as T,$ as M,b as f,a as _,N as W,O as N,L as O,S as E,ax as p,bP as h,m as U,bQ as b,ae as m,a7 as c,aD as z,V as n,W as o,bR as F,bS as H,bT as Y,bU as j,bV as X,bW as q,bX as S,bY as J,bZ as K,b_ as Q,aR as Z,b$ as G,c0 as ee,c1 as te,ay as ne,c2 as oe,c3 as re,aK as ae,aW as ie,b9 as se,X as w,ak as D,c4 as le,bm as ce,be as ue,bf as ge,bg as me,bh as de,bi as _e,aC as I,bk as C,bl as k,ba as he,c5 as Ee,n as pe,c6 as fe,c7 as be,c8 as Ie}from"./index.0d2838ba.js";import{b as Ae,a as Le}from"./useTitle.e59a434b.js";import{A as $e,f as ve,g as Re,h as Te,i as Se,j as De}from"./index.17db7dfc.js";import{S as Pe}from"./index.41251028.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e))(s||{}),Oe=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Oe||{});const we=e=>{const r=x(()=>{if(!v.is_admin(R())){if(e.role===void 0)return!1;if(e.role===i.GENERAL&&!v.is_general(R()))return!1}return!0});return t(M,{get fallback(){return t(Ce,e)},get children(){return[t(T,{get when(){return!r()},children:null}),t(T,{get when(){return e.children},get children(){return t(ke,e)}})]}})},Ce=e=>{const{pathname:r}=f(),a=_(),u=()=>r()===e.to;return t($e,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:W,get href(){return e.to},onClick:g=>{var $;if(V(),e.refresh){($=g.stopPropagation)==null||$.call(g);let d=e.to;d.startsWith("http")||(d=N(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":O(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},ke=e=>{const{pathname:r}=f(),[a,u]=U(r().includes(e.to)),g=_();return t(c,{w:"$full",get children(){return[t(b,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:O()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return g(e.title)}})]}}),t(p,{as:ve,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(c,{pl:"$2",get children(){return t(A,{get items(){return e.children}})}})}})]}})},A=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(P,{get each(){return e.items},children:r=>t(we,r)})}});function Ve(e){return z({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>o(()=>import("./Common.caf46236.js"),["assets/Common.caf46236.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/SettingItem.718198af.js","assets/item_type.be442da4.js","assets/index.17db7dfc.js","assets/ResponsiveGrid.7b907ec2.js","assets/index.41251028.js"])),L=[{title:"manage.sidemenu.profile",icon:F,to:"/@manage",role:i.GUEST,component:n(()=>o(()=>import("./Profile.904fd006.js"),["assets/Profile.904fd006.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/index.17db7dfc.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:H,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/@manage/settings/site",component:()=>t(l,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:j,to:"/@manage/settings/style",component:()=>t(l,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(l,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:S,to:"/@manage/settings/sso",component:()=>t(l,{get group(){return s.SSO}})},{title:"manage.sidemenu.ldap",icon:S,to:"/@manage/settings/ldap",component:()=>t(l,{get group(){return s.LDAP}})},{title:"manage.sidemenu.s3",icon:J,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.d2005765.js"),["assets/S3.d2005765.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/SettingItem.718198af.js","assets/item_type.be442da4.js","assets/index.17db7dfc.js","assets/ResponsiveGrid.7b907ec2.js","assets/FolderTree.174f4509.js","assets/index.c86a38ef.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.41251028.js"]))},{title:"manage.sidemenu.ftp",icon:K,to:"/@manage/settings/ftp",component:()=>t(l,{get group(){return s.FTP}})},{title:"manage.sidemenu.other",icon:Q,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.825d9776.js"),["assets/Other.825d9776.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/SettingItem.718198af.js","assets/item_type.be442da4.js","assets/index.17db7dfc.js","assets/index.41251028.js"]))}]},{title:"manage.sidemenu.tasks",icon:Ve,to:"/@manage/tasks",role:i.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:Z,to:"/@manage/tasks/aria2",role:i.GENERAL,component:n(()=>o(()=>import("./offline_download.976cd350.js"),["assets/offline_download.976cd350.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/helper.8fcc7b38.js","assets/Paginator.34ac19f7.js","assets/index.17db7dfc.js"]))},{title:"manage.sidemenu.upload",icon:G,to:"/@manage/tasks/upload",role:i.GENERAL,component:n(()=>o(()=>import("./Upload.cd686355.js"),["assets/Upload.cd686355.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/helper.8fcc7b38.js","assets/Paginator.34ac19f7.js","assets/index.17db7dfc.js"]))},{title:"manage.sidemenu.copy",icon:ee,to:"/@manage/tasks/copy",role:i.GENERAL,component:n(()=>o(()=>import("./Copy.d82ce608.js"),["assets/Copy.d82ce608.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/helper.8fcc7b38.js","assets/Paginator.34ac19f7.js","assets/index.17db7dfc.js"]))}]},{title:"manage.sidemenu.users",icon:te,to:"/@manage/users",component:n(()=>o(()=>import("./Users.110b3c34.js"),["assets/Users.110b3c34.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/DeletePopover.2a3ab187.js","assets/Wether.cd90bbe6.js"]))},{title:"manage.sidemenu.storages",icon:Re,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.3c1e250d.js"),["assets/Storages.3c1e250d.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/DeletePopover.2a3ab187.js"]))},{title:"manage.sidemenu.metas",icon:Pe,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.2da232db.js"),["assets/Metas.2da232db.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/DeletePopover.2a3ab187.js","assets/Wether.cd90bbe6.js"]))},{title:"manage.sidemenu.indexes",icon:ne,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.ca139c67.js"),["assets/indexes.ca139c67.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/Common.caf46236.js","assets/useTitle.e59a434b.js","assets/SettingItem.718198af.js","assets/item_type.be442da4.js","assets/index.17db7dfc.js","assets/ResponsiveGrid.7b907ec2.js","assets/index.41251028.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Te,component:n(()=>o(()=>import("./backup-restore.9fd773dd.js"),["assets/backup-restore.9fd773dd.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js","assets/index.c86a38ef.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:oe,to:"/@manage/about",role:i.GUEST,component:n(()=>o(()=>import("./About.ac67922e.js"),["assets/About.ac67922e.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/useTitle.e59a434b.js"]))},{title:"manage.sidemenu.docs",icon:Se,to:"https://alist.nn.ci",role:i.GUEST,external:!0},{title:"manage.sidemenu.home",icon:re,to:"/",role:i.GUEST,refresh:!0}],{isOpen:Be,onOpen:ye,onClose:V}=ae(),[xe,Me]=ie(()=>se.get("/auth/logout")),We=()=>{const e=_(),{to:r}=f(),a=async()=>{he(await Me(),()=>{Ee(),pe.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(c,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return w("$background","$neutral2")()},get children(){return[t(b,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(D,{"aria-label":"menu",get icon(){return t(De,{})},display:{"@sm":"none"},onClick:ye,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(D,{"aria-label":"logout",get icon(){return t(le,{})},get loading(){return xe()},onClick:a,size:"sm"})}})]}}),t(ce,{get opened(){return Be()},placement:"left",onClose:V,get children(){return[t(ue,{}),t(ge,{get children(){return[t(me,{}),t(de,{color:"$info9",get children(){return e("manage.title")}}),t(_e,{get children(){return[t(A,{items:L}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},Ne=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.2f23a14a.js"),["assets/AddOrEdit.2f23a14a.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.7b907ec2.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.2f23a14a.js"),["assets/AddOrEdit.2f23a14a.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.7b907ec2.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.14fe3be1.js"),["assets/AddOrEdit.14fe3be1.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/FolderTree.174f4509.js","assets/index.17db7dfc.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.14fe3be1.js"),["assets/AddOrEdit.14fe3be1.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/FolderTree.174f4509.js","assets/index.17db7dfc.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.f7891e8f.js"),["assets/AddOrEdit.f7891e8f.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/FolderTree.174f4509.js","assets/index.17db7dfc.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.f7891e8f.js"),["assets/AddOrEdit.f7891e8f.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css","assets/FolderTree.174f4509.js","assets/index.17db7dfc.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.a94a899a.js"),["assets/2fa.a94a899a.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.4bee4bf6.js"),["assets/Messenger.4bee4bf6.js","assets/index.0d2838ba.js","assets/index.c4c82a28.css"]))}],Ue=e=>(Ae(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:fe(a.to,"/@manage"),component:a.component||(()=>t(Ue,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),ze=B(L).concat(Ne),Fe=()=>{const e=_();return Le(()=>e("manage.title")),t(c,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(We,{}),t(b,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(c,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return w("$background","$neutral2")()},overflowY:"auto",get children(){return[t(A,{items:L}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(c,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(be,{get children(){return t(P,{each:ze,children:r=>t(Ie,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},qe=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));export{Oe as F,s as G,qe as i};
