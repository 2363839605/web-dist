import{h as t,H as D,a7 as y,k as x,al as T,am as $,bP as i,a1 as R,a0 as M,b as f,a as _,O as N,Q as W,N as w,S as E,aC as p,bQ as h,m as U,bR as b,aj as g,ac as c,aI as H,W as n,X as o,bS as z,bT as F,bU as Y,bV as j,bW as X,bX as q,bY as P,bZ as Q,b_ as J,b$ as Z,aW as K,c0 as G,c1 as ee,c2 as te,aD as ne,c3 as oe,c4 as re,aP as ae,a$ as ie,be as se,Y as O,ap as S,c5 as le,br as ce,bj as ue,bk as me,bl as ge,bm as de,bn as _e,aH as I,bp as C,bq as k,bf as he,c6 as Ee,n as pe,c7 as fe,c8 as be,c9 as Ie}from"./index.db1687cc.js";import{b as Ae,a as Le}from"./useTitle.047ec8a5.js";import{A as ve,k as Te,b as $e,l as Re,m as Pe,n as Se,o as De}from"./index.00d2bcfc.js";import{S as we}from"./index.3355aa6f.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e))(s||{}),Oe=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Oe||{});const Ce=e=>{const r=x(()=>{if(!T.is_admin($())){if(e.role===void 0)return!1;if(e.role===i.GENERAL&&!T.is_general($()))return!1}return!0});return t(M,{get fallback(){return t(ke,e)},get children(){return[t(R,{get when(){return!r()},children:null}),t(R,{get when(){return e.children},get children(){return t(Ve,e)}})]}})},ke=e=>{const{pathname:r}=f(),a=_(),u=()=>r()===e.to;return t(ve,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:N,get href(){return e.to},onClick:m=>{var v;if(V(),e.refresh){(v=m.stopPropagation)==null||v.call(m);let d=e.to;d.startsWith("http")||(d=W(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Ve=e=>{const{pathname:r}=f(),[a,u]=U(r().includes(e.to)),m=_();return t(c,{w:"$full",get children(){return[t(b,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return m(e.title)}})]}}),t(p,{as:Te,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(c,{pl:"$2",get children(){return t(A,{get items(){return e.children}})}})}})]}})},A=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(D,{get each(){return e.items},children:r=>t(Ce,r)})}});function Be(e){return H({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>o(()=>import("./Common.e3673160.js"),["assets/Common.e3673160.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/SettingItem.57a38bd4.js","assets/item_type.ee87ae79.js","assets/index.00d2bcfc.js","assets/ResponsiveGrid.fd553848.js","assets/index.3355aa6f.js"])),L=[{title:"manage.sidemenu.profile",icon:z,to:"/@manage",role:i.GUEST,component:n(()=>o(()=>import("./Profile.4967d1f1.js"),["assets/Profile.4967d1f1.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/index.00d2bcfc.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.83b9e3b1.js"]))},{title:"manage.sidemenu.settings",icon:F,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/@manage/settings/site",component:()=>t(l,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:j,to:"/@manage/settings/style",component:()=>t(l,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(l,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:P,to:"/@manage/settings/sso",component:()=>t(l,{get group(){return s.SSO}})},{title:"manage.sidemenu.ldap",icon:P,to:"/@manage/settings/ldap",component:()=>t(l,{get group(){return s.LDAP}})},{title:"manage.sidemenu.s3",icon:Q,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.1d99afeb.js"),["assets/S3.1d99afeb.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/SettingItem.57a38bd4.js","assets/item_type.ee87ae79.js","assets/index.00d2bcfc.js","assets/ResponsiveGrid.fd553848.js","assets/FolderTree.ae00257a.js","assets/index.fc69893e.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.3355aa6f.js"]))},{title:"manage.sidemenu.ftp",icon:J,to:"/@manage/settings/ftp",component:()=>t(l,{get group(){return s.FTP}})},{title:"manage.sidemenu.other",icon:Z,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.3b6a1d68.js"),["assets/Other.3b6a1d68.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/FolderTree.ae00257a.js","assets/index.00d2bcfc.js","assets/useTitle.047ec8a5.js","assets/SettingItem.57a38bd4.js","assets/item_type.ee87ae79.js","assets/index.3355aa6f.js"]))}]},{title:"manage.sidemenu.tasks",icon:Be,to:"/@manage/tasks",role:i.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:K,to:"/@manage/tasks/offline_download",role:i.GENERAL,component:n(()=>o(()=>import("./offline_download.f4ae7101.js"),["assets/offline_download.f4ae7101.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/helper.22a4de5c.js","assets/Paginator.4baa38b0.js","assets/index.00d2bcfc.js"]))},{title:"manage.sidemenu.upload",icon:G,to:"/@manage/tasks/upload",role:i.GENERAL,component:n(()=>o(()=>import("./Upload.9dc56463.js"),["assets/Upload.9dc56463.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/helper.22a4de5c.js","assets/Paginator.4baa38b0.js","assets/index.00d2bcfc.js"]))},{title:"manage.sidemenu.copy",icon:ee,to:"/@manage/tasks/copy",role:i.GENERAL,component:n(()=>o(()=>import("./Copy.8a83c328.js"),["assets/Copy.8a83c328.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/helper.22a4de5c.js","assets/Paginator.4baa38b0.js","assets/index.00d2bcfc.js"]))},{title:"manage.sidemenu.decompress",icon:$e,to:"/@manage/tasks/decompress",role:i.GENERAL,component:n(()=>o(()=>import("./Decompress.0a5eb84d.js"),["assets/Decompress.0a5eb84d.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/helper.22a4de5c.js","assets/Paginator.4baa38b0.js","assets/index.00d2bcfc.js"]))}]},{title:"manage.sidemenu.users",icon:te,to:"/@manage/users",component:n(()=>o(()=>import("./Users.ee8d82ae.js"),["assets/Users.ee8d82ae.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/DeletePopover.7f6cab92.js","assets/Wether.935da5e1.js"]))},{title:"manage.sidemenu.storages",icon:Re,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.316bc757.js"),["assets/Storages.316bc757.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/DeletePopover.7f6cab92.js"]))},{title:"manage.sidemenu.metas",icon:we,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.07f85bc1.js"),["assets/Metas.07f85bc1.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/DeletePopover.7f6cab92.js","assets/Wether.935da5e1.js"]))},{title:"manage.sidemenu.indexes",icon:ne,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.ea453af7.js"),["assets/indexes.ea453af7.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/Common.e3673160.js","assets/useTitle.047ec8a5.js","assets/SettingItem.57a38bd4.js","assets/item_type.ee87ae79.js","assets/index.00d2bcfc.js","assets/ResponsiveGrid.fd553848.js","assets/index.3355aa6f.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Pe,component:n(()=>o(()=>import("./backup-restore.55498ee6.js"),["assets/backup-restore.55498ee6.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js","assets/index.fc69893e.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:oe,to:"/@manage/about",role:i.GUEST,component:n(()=>o(()=>import("./About.6effd156.js"),["assets/About.6effd156.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/useTitle.047ec8a5.js"]))},{title:"manage.sidemenu.docs",icon:Se,to:"https://alist.nn.ci",role:i.GUEST,external:!0},{title:"manage.sidemenu.home",icon:re,to:"/",role:i.GUEST,refresh:!0}],{isOpen:ye,onOpen:xe,onClose:V}=ae(),[Me,Ne]=ie(()=>se.get("/auth/logout")),We=()=>{const e=_(),{to:r}=f(),a=async()=>{he(await Ne(),()=>{Ee(),pe.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(c,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[t(b,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(S,{"aria-label":"menu",get icon(){return t(De,{})},display:{"@sm":"none"},onClick:xe,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(S,{"aria-label":"logout",get icon(){return t(le,{})},get loading(){return Me()},onClick:a,size:"sm"})}})]}}),t(ce,{get opened(){return ye()},placement:"left",onClose:V,get children(){return[t(ue,{}),t(me,{get children(){return[t(ge,{}),t(de,{color:"$info9",get children(){return e("manage.title")}}),t(_e,{get children(){return[t(A,{items:L}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},Ue=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.b9dbb12e.js"),["assets/AddOrEdit.b9dbb12e.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.fd553848.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.b9dbb12e.js"),["assets/AddOrEdit.b9dbb12e.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.fd553848.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.6ba8a2f9.js"),["assets/AddOrEdit.6ba8a2f9.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/FolderTree.ae00257a.js","assets/index.00d2bcfc.js","assets/PublicKeys.83b9e3b1.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.6ba8a2f9.js"),["assets/AddOrEdit.6ba8a2f9.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/FolderTree.ae00257a.js","assets/index.00d2bcfc.js","assets/PublicKeys.83b9e3b1.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.eeee6270.js"),["assets/AddOrEdit.eeee6270.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/FolderTree.ae00257a.js","assets/index.00d2bcfc.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.eeee6270.js"),["assets/AddOrEdit.eeee6270.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/FolderTree.ae00257a.js","assets/index.00d2bcfc.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.6fcca08c.js"),["assets/2fa.6fcca08c.js","assets/index.db1687cc.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.3857546f.js"),["assets/Messenger.3857546f.js","assets/index.db1687cc.js","assets/index.c4c82a28.css"]))}],He=e=>(Ae(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:fe(a.to,"/@manage"),component:a.component||(()=>t(He,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),ze=B(L).concat(Ue),Fe=()=>{const e=_();return Le(()=>e("manage.title")),t(c,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(We,{}),t(b,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(c,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return[t(A,{items:L}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(c,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(be,{get children(){return t(D,{each:ze,children:r=>t(Ie,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));export{Oe as F,s as G,Qe as i};