import{u as vt,a as $,b as F,s as M,n as z,c as it,p as yt,d as te,g as Ct,f as xt,_ as Ve,l as ae,o as Ue,e as C,h as e,P as St,i as Ot,j as Mt,k as N,m as _,q as Ft,r as $e,t as He,v as Rt,w as It,x as ke,M as J,y as Q,z as Y,A as Z,S as v,I as ve,T as Lt,F as Tt,B as le,C as I,D as ee,E,G as de,H as fe,J as Et,K as Pt,L as Bt,N as We,O as ct,Q as At,R as Dt,U as zt,V as ge,W as ye,X as Ce,Y as Te,Z as qe,$ as Oe,a0 as Ee,a1 as A,a2 as y,a3 as Nt,a4 as R,a5 as jt,a6 as se,a7 as U,a8 as Ht,a9 as Vt,aa as Ut,ab as Wt,ac as ie,ad as qt,ae as ut,af as Gt,ag as Kt,ah as Xt,ai as Pe,aj as P,ak as Jt,al as Me,am as Fe,an as ce,ao as Ge,ap as Qt,aq as X,ar as De,as as dt,at as gt,au as Ke,av as K,aw as Yt,ax as Zt,ay as Xe,az as en,aA as tn,aB as h,aC as Je,aD as nn,aE as Re,aF as rn,aG as ze,aH as ht,aI as Qe,aJ as on,aK as an,aL as ln,aM as mt,aN as sn,aO as ft,aP as S,aQ as he,aR as cn,aS as un,aT as pt,aU as et,aV as dn,aW as gn,aX as hn,aY as mn,aZ as fn,a_ as pn,a$ as B,b0 as bn,b1 as me,b2 as D,b3 as wn,b4 as bt,b5 as _n,b6 as $n,b7 as kn,b8 as vn,b9 as yn,ba as Cn,bb as xn,bc as Sn,bd as tt,be as On,bf as Mn,bg as Fn,bh as nt,bi as Rn,bj as In,bk as Ln,bl as Tn,bm as En,bn as Pn,bo as Bn,bp as An,bq as Dn,br as zn,bs as Nn,bt as Ne,bu as jn,bv as Hn,bw as Vn,bx as Un,by as Wn,bz as qn,bA as Gn,bB as Kn,bC as Xn,bD as Jn,bE as Qn,bF as Yn,bG as Zn,bH as er,bI as tr}from"./index.db1687cc.js";import{u as nr,a as rr}from"./useTitle.047ec8a5.js";import{L as or,A as ar,F as wt,C as lr,T as sr,a as ir,b as cr,c as ur,d as dr,B as gr,e as hr,f as mr,g as rt,h as fr,i as pr}from"./index.00d2bcfc.js";import{F as br,M as Be}from"./FolderTree.ae00257a.js";import{R as wr}from"./index.ab01de00.js";function Se(t){return t==null||t===""}function _r(t){return t==null}async function $r(t,n){let r="/downloads/alist";const o=await it.post(t,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.getGlobalOption",params:["token:"+n]});return console.log(o),o.status===200&&(Se(o.data.result.dir)||(r=o.data.result.dir),r=r.endsWith("/")?r.slice(0,-1):r),r}const kr=()=>{const{rawLinks:t}=vt(),n=$(),{pathname:r}=F();return{batchDownloadSelected:()=>{t(!0).forEach(i=>{window.open(i,"_blank")})},sendToAria2:async()=>{const o=M(),i=async(c,a)=>{var g;if(a.is_dir){const d=await xt(te(r(),c,a.name),Ve());if(d.code!==200)return d.message;const l=[];for(const m of(g=d.data.content)!=null?g:[]){const p=await i(te(c,a.name),m);if(typeof p=="string")return p;l.push(...p)}return l}else return[{path:te(c,a.name),dir:c,url:Ct(te(r(),c),a,"direct",!0),name:a.name}]},{aria2_rpc_url:s,aria2_rpc_secret:u}=ae;if(!s){z.warning(n("home.toolbar.aria2_not_set"));return}try{let c="/downloads/alist";c=await $r(s,u);let a=!1;z.info(`${n("home.package_download.fetching_struct")}`);for(const g of o){const d=await i("",g);if(typeof d!="object"||d.length===void 0)return z.error(`${n("home.package_download.fetching_struct_failed")}: ${d}`),d;for(let l=0;l<d.length;l++){if(Se(d[l].path)||_r(d[l].dir)||Se(d[l].url)||Se(d[l].name)){z.error(`${n("home.package_download.fetching_struct_failed")}: ${JSON.stringify(d[l])}`);continue}a||(a=!0,z.info(`${n("home.package_download.downloading")}`));const m=await it.post(s,{id:Math.random().toString(),jsonrpc:"2.0",method:"aria2.addUri",params:["token:"+u,[d[l].url],{out:d[l].name,dir:c+d[l].dir,"check-certificate":"false"}]});console.log(m)}}z.success(n("home.toolbar.send_aria2_success"))}catch(c){console.error(c),z.error(`failed to send to aria2: ${c}`)}},playlistDownloadSelected:()=>{const o=M().filter(a=>!a.is_dir);let i=yt(r());o.length===1&&(i=o[0].name),i||(i=n("manage.sidemenu.home"));const s=o.reduce((a,g,d)=>`${a}#EXTINF:-1,${g.name}
${t(!0)[d]}
`,`#EXTM3U
`),u=new Blob([s],{type:"application/x-mpegURL"}),c=document.createElement("a");c.href=URL.createObjectURL(u),c.download=`${i}.m3u8`,c.click(),URL.revokeObjectURL(c.href)}}},vr=t=>(t=Array.isArray(t)?t[0]:t,t instanceof Element?t:void 0),yr=(t,n)=>{const r={once:!0};t.addEventListener("motioncomplete",n,r),C(t.removeEventListener.bind(t,"motioncomplete",n,r))},Cr=t=>{let{initial:n=!0}=t;Ue(()=>n=!0);let r=!1,o=[],i=[],s=[];return C(()=>{s.concat(i).forEach(u=>u()),i=s=o=[]}),e(It.Provider,{value:{addCleanup:u=>i.push(u),addMount:u=>o.push(u),initial:()=>n},get children(){return e(St.Provider,{value:void 0,get children(){return Ot(()=>{const u=Mt(()=>t.children),c=N(()=>vr(u())),[a,g]=_(),[d,l]=_();return Ft($e(c,k=>{s.push(...i),i=[],He(()=>{t.exitBeforeEnter?(g(),p(()=>!r&&m(k))):(m(k),p())})})),[a,d];function m(k){g(k),o.forEach(O=>O()),o=[]}function p(k){var W;const O=()=>{l(),s.forEach(q=>q()),s=[],k==null||k()},b=l((W=a())!=null?W:d());if(!b)return O();const x=Rt.get(b);if(!x||!x.getOptions().exit)return O();x.setActive("exit",r=!0),yr(b,()=>{r=!1,O()})}})}})}})},Ae=t=>{var c;const[n,r]=_((c=t.defaultValue)!=null?c:""),o=$();let i;const s=()=>{const a=n().lastIndexOf(".");setTimeout(()=>{a>0&&t.isRenamingFile?i.setSelectionRange(0,a):i.select()},10)};ke(()=>{i&&(i.focus(),s()),C(()=>{i&&i.setSelectionRange(0,0)})}),ke(()=>{t.opened||r("")});const u=()=>{var a;if(!n()){z.warning(o("global.empty_input"));return}(a=t.onSubmit)==null||a.call(t,n())};return e(ee,{blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},initialFocus:"#modal-input",get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return o(t.title)}}),e(Z,{get children(){return[e(v,{get when(){return t.topSlot},get children(){return t.topSlot}}),e(v,{get when(){return t.type==="text"},get fallback(){return e(ve,{id:"modal-input",get type(){return t.type},get value(){return n()},ref:a=>i=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s,onKeyDown:a=>{a.key==="Enter"&&u()}})},get children(){return e(Lt,{id:"modal-input",get value(){return n()},ref:a=>i=a,onInput:a=>{r(a.currentTarget.value)},onFocus:s})}}),e(v,{get when(){return t.tips},get children(){return e(Tt,{get children(){return t.tips}})}}),e(v,{get when(){return t.bottomSlot},get children(){return t.bottomSlot}})]}}),e(le,{display:"flex",gap:"$2",get children(){return[e(v,{get when(){return t.footerSlot},get children(){return t.footerSlot}}),e(I,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return o("global.cancel")}}),e(I,{get loading(){return t.loading},onClick:()=>u(),get children(){return o("global.ok")}})]}})]}})]}})},xr=()=>{const{pathname:t}=F(),n=N(()=>["",...t().split("/").filter(Boolean)]),r=$(),{setPathAs:o}=E(),i=N(()=>{const s={_after:{content:"",bgColor:"$background",position:"absolute",height:"100%",width:"99vw",zIndex:-1,transform:"translateX(-50%)",left:"50%",top:0}};switch(ae.position_of_header_navbar){case"only_navbar_sticky":return{...s,position:"sticky",zIndex:"$sticky",top:0};case"sticky":return{...s,position:"sticky",zIndex:"$sticky",top:60};default:return{_after:void 0,position:void 0,zIndex:void 0,top:void 0}}});return e(zt,de(i,{background:"$background",class:"nav",w:"$full",get children(){return e(fe,{get each(){return n()},children:(s,u)=>{const c=N(()=>u()===n().length-1),a=n().slice(0,u()+1).join("/"),g=Et(a);let d=()=>s;return d()===""&&(d=()=>ge("home_icon")+r("manage.sidemenu.home")),e(Pt,{class:"nav-item",get children(){return[e(Bt,{class:"nav-link",css:{wordBreak:"break-all"},color:"unset",get _hover(){return{bgColor:We(),color:"unset"}},_active:{transform:"scale(.95)",transition:"0.1s"},cursor:"pointer",p:"$1",rounded:"$lg",get currentPage(){return c()},get as(){return c()?void 0:ct},get href(){return At(g)},onMouseEnter:()=>o(a),children:d}),e(v,{get when(){return!c()},get children(){return e(Dt,{class:"nav-separator"})}})]}})}})}}))},Sr=ye(()=>Ce(()=>import("./Folder.303a0642.js"),["assets/Folder.303a0642.js","assets/Folder.b511ba9e.css","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/solid-contextmenu.fb4997b9.js","assets/icon.4b56a9a8.js","assets/index.00d2bcfc.js","assets/index.3355aa6f.js","assets/video_box.1e2e5b35.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/Paginator.4baa38b0.js","assets/useTitle.047ec8a5.js","assets/FolderTree.ae00257a.js","assets/index.ab01de00.js"])),Or=ye(()=>Ce(()=>import("./File.e697dba2.js").then(t=>t.a),["assets/File.e697dba2.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/icon.4b56a9a8.js","assets/index.00d2bcfc.js","assets/index.3355aa6f.js"])),Mr=ye(()=>Ce(()=>import("./Password.ee58c174.js"),["assets/Password.ee58c174.js","assets/index.db1687cc.js","assets/index.c4c82a28.css"])),[Fr,Rr]=_();let ot=!0;const Ir=()=>{const t=$(),n=Te("white","$neutral3"),{pathname:r}=F(),{handlePathChange:o,refresh:i}=E();let s=r();return ke($e(r,u=>{nr(),ot||(Ht(s),Vt()),ot=!1,o(u),s=u})),e(U,{ref:u=>Rr(u),class:"obj-box",w:"$full",rounded:"$xl",get bgColor(){return n()},p:"$2",shadow:"$lg",spacing:"$2",get children(){return e(qe,{get fallback(){return e(Oe,{})},get children(){return e(Ee,{get children(){return[e(A,{get when(){return y.err},get children(){return e(Nt,{get msg(){return y.err},disableColor:!0})}}),e(A,{get when(){return[R.FetchingObj,R.FetchingObjs].includes(y.state)},get children(){return e(Oe,{})}}),e(A,{get when(){return y.state===R.NeedPassword},get children(){return e(Mr,{get title(){return t("home.input_password")},password:Ve,setPassword:jt,enterCallback:()=>i(!0),get children(){return[e(se,{get children(){return t("global.have_account")}}),e(se,{color:"$info9",as:or,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}})}}),e(A,{get when(){return[R.Folder,R.FetchingMore].includes(y.state)},get children(){return e(Sr,{})}}),e(A,{get when(){return y.state===R.File},get children(){return e(Or,{})}})]}})}})}})};function at(t){const n=Te("white","$neutral3"),{proxyLink:r}=Ut();F();const o=N($e(()=>y.state,()=>{if(![R.FetchingMore,R.Folder,R.File].includes(y.state))return"";if([R.FetchingMore,R.Folder].includes(y.state)){const u=y.objs.find(c=>t.files.find(a=>a.toLowerCase()===c.name.toLowerCase()));if(u)return r(u,!0)}return y[t.fromMeta]&&typeof y[t.fromMeta]=="string"?y[t.fromMeta]:""})),i=async u=>{let c={content:u};return/^https?:\/\//g.test(u)&&(c=await Gt(u)),c},[s]=Wt(o,i);return e(v,{get when(){return o()},get children(){return e(ie,{w:"$full",rounded:"$xl",p:"$4",get bgColor(){return n()},shadow:"$lg",get children(){return e(qt,{get loading(){return s.loading},get children(){return e(ut,{get children(){var u;return(u=s())==null?void 0:u.content},readme:!0,get toc(){return t.fromMeta==="readme"}})}})}})}})}const _t=t=>{const n=ge("home_container");return e(Ee,{get fallback(){return e(ie,{w:"min(99%, 980px)",get children(){return t.children}})},get children(){return e(A,{when:n==="hope_container",get children(){return e(Kt,{get children(){return t.children}})}})}})};function Lr(){const{to:t}=F(),n=Xt(),[r,o]=_(),[i,s]=_(),[u,c]=_(-999),a=()=>c(0),g=()=>{const l=Fr(),m=i();if(!l||!m)return;const p=l.offsetLeft>50?16:0;m.clientWidth<l.offsetLeft-p?c(0):c(`calc(-100% + ${l.offsetLeft}px - ${p}px)`)};let d;return Ue(()=>{const l=r();l==null||l.setPath(n.pathname),d=requestAnimationFrame(g),window.addEventListener("resize",g),C(()=>window.removeEventListener("resize",g))}),ke($e(()=>y.state,()=>{cancelAnimationFrame(d),d=requestAnimationFrame(g)})),ke($e(()=>n.pathname,()=>{const l=r();l==null||l.setPath(n.pathname)})),e(ie,{get as(){return Pe.div},initial:{x:-999},get animate(){return{x:u()}},zIndex:"$overlay",pos:"fixed",left:3,top:3,h:"calc(100vh - 6px)",minW:180,p:"$2",overflow:"auto",shadow:"$lg",rounded:"$lg",bgColor:"white",_dark:{bgColor:"$neutral3"},onMouseEnter:a,onMouseLeave:g,ref:l=>s(l),get children(){return e(br,{autoOpen:!0,showEmptyIcon:!0,showHiddenFolder:!1,onChange:l=>t(l),handle:l=>o(l)})}})}function Tr(){const t=N(()=>ae.show_sidebar!=="none");return e(v,{get when(){return t()},get children(){return e(Lr,{})}})}const Er=()=>e(_t,{get children(){return e(U,{class:"body",mt:"$1",py:"$2",px:"2%",minH:"80vh",w:"$full",gap:"$4",get children(){return[e(at,{files:["header.md","top.md"],fromMeta:"header"}),e(xr,{}),e(Ir,{}),e(at,{files:["readme.md","footer.md","bottom.md"],fromMeta:"readme"}),e(Tr,{})]}})}}),Pr=ce("<span>|</span>"),Br=()=>{const t=$();return e(U,{class:"footer",w:"$full",py:"$4",get children(){return e(P,{spacing:"$1",get children(){return[e(Jt,{href:"https://github.com/alist-org/alist",external:!0,get children(){return t("home.footer.powered_by")}}),Pr.cloneNode(!0),e(ar,{as:ct,get href(){return Me.is_guest(Fe())?"/@login":"/@manage"},get children(){return t(Me.is_guest(Fe())?"login.login":"home.footer.manage")}})]}})}})},lt={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"},pe="^\\s*",be="\\s*$",ne="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",re="([0-9A-Fa-f])",oe="([0-9A-Fa-f]{2})",Ar=new RegExp(`${pe}rgb\\s*\\(${ne},${ne},${ne}\\)${be}`),Dr=new RegExp(`${pe}rgba\\s*\\(${ne},${ne},${ne},${ne}\\)${be}`),zr=new RegExp(`${pe}#${re}${re}${re}${be}`),Nr=new RegExp(`${pe}#${oe}${oe}${oe}${be}`),jr=new RegExp(`${pe}#${re}${re}${re}${re}${be}`),Hr=new RegExp(`${pe}#${oe}${oe}${oe}${oe}${be}`);function L(t){return parseInt(t,16)}function $t(t){try{let n;if(n=Nr.exec(t))return[L(n[1]),L(n[2]),L(n[3]),1];if(n=Ar.exec(t))return[V(n[1]),V(n[5]),V(n[9]),1];if(n=Dr.exec(t))return[V(n[1]),V(n[5]),V(n[9]),je(n[13])];if(n=zr.exec(t))return[L(n[1]+n[1]),L(n[2]+n[2]),L(n[3]+n[3]),1];if(n=Hr.exec(t))return[L(n[1]),L(n[2]),L(n[3]),je(L(n[4])/255)];if(n=jr.exec(t))return[L(n[1]+n[1]),L(n[2]+n[2]),L(n[3]+n[3]),je(L(n[4]+n[4])/255)];if(t in lt)return $t(lt[t]);throw new Error(`[seemly/rgba]: Invalid color value ${t}.`)}catch(n){throw n}}function Vr(t){return t>1?1:t<0?0:t}function st(t,n,r,o){return`rgba(${V(t)}, ${V(n)}, ${V(r)}, ${Vr(o)})`}function Ie(t,n){const[r,o,i,s=1]=Array.isArray(t)?t:$t(t);return n.alpha?st(r,o,i,n.alpha):st(r,o,i,s)}function je(t){const n=Math.round(Number(t)*100)/100;return n>1?1:n<0?0:n}function V(t){const n=Math.round(Number(t));return n>255?255:n<0?0:n}const Ur={list:wt,grid:dt,image:gt},Wr=()=>{const t=$();return e(Xe,{get children(){return[e(Ge,{as:Qt,get color(){return X()},get bgColor(){return Ie(X(),{alpha:.15})},get _hover(){return{bgColor:Ie(X(),{alpha:.2})}},"aria-label":"switch layout",compact:!0,size:"lg",get icon(){return e(Ee,{get children(){return[e(A,{get when(){return De()==="list"},get children(){return e(wt,{})}}),e(A,{get when(){return De()==="grid"},get children(){return e(dt,{})}}),e(A,{get when(){return De()==="image"},get children(){return e(gt,{})}})]}})}}),e(Ke,{get children(){return e(fe,{get each(){return Object.entries(Ur)},children:n=>e(K,{get icon(){return e(Yt,{get component(){return n[1]}})},onSelect:()=>{Zt(n[0])},get children(){return t(`home.layouts.${n[0]}`)}})})}})]}})},qr=()=>{const t=ge("logo").split(`
`),n=Te(t[0],t.pop()),r=N(()=>{switch(ae.position_of_header_navbar){case"sticky":return{position:"sticky",zIndex:"$sticky",top:0};default:return{position:void 0,zIndex:void 0,top:void 0}}});return e(ht,de(r,{bgColor:"$background",class:"header",w:"$full",get children(){return e(_t,{get children(){return e(P,{px:"calc(2% + 0.5rem)",py:"$2",w:"$full",justifyContent:"space-between",get children(){return[e(P,{class:"header-left",h:"44px",get children(){return e(en,{get src(){return n()},h:"$full",w:"auto",get fallback(){return e(tn,{})}})}}),e(P,{class:"header-right",spacing:"$2",get children(){return e(v,{get when(){return y.state===R.Folder},get children(){return[e(v,{get when(){return ge("search_index")!=="none"},get children(){return e(P,{bg:"$neutral4",w:"$32",p:"$1",rounded:"$md",justifyContent:"space-between",border:"2px solid transparent",cursor:"pointer",get color(){return X()},get bgColor(){return Ie(X(),{alpha:.15})},get _hover(){return{bgColor:Ie(X(),{alpha:.2})}},onClick:()=>{h.emit("tool","search")},get children(){return[e(Je,{as:nn}),e(P,{get children(){return[Re(()=>rn?e(ze,{children:"Cmd"}):e(ze,{children:"Ctrl"})),e(ze,{children:"K"})]}})]}})}}),e(Wr,{})]}})}})]}})}})}}))};function Gr(t){return Qe({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M11 8v6h1V8h2.5l-3-3-3 3zM1 3h1.5v1H1V3zM3 3h1.5v1H3V3zM5 3h1v1.5H5V3zM1 6.5h1V8H1V6.5zM2.5 7H4v1H2.5V7zM4.5 7H6v1H4.5V7zM1 4.5h1V6H1V4.5zM5 5h1v1.5H5V5zM5 11v3H2v-3h3zm1-1H1v5h5v-5z"/>'},t)}function To(t){return Qe({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},t)}function Kr(t){return Qe({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'},t)}const G={rename:{icon:lr,color:"$accent9"},copy:{icon:sr,color:"$success9"},move:{icon:ir,color:"$warning9"},delete:{icon:on,color:"$danger9"},decompress:{icon:cr,color:"$primary9"},copy_link:{icon:ur,color:"$info9"},mkdir:{icon:dr,p:!0},recursive_move:{icon:Gr,p:!0},remove_empty_directory:{icon:Kr,p:!0},batch_rename:{icon:gr,p:!0},new_file:{icon:hr,p:!0},cancel_select:{icon:mr},download:{icon:an,color:"$primary9"}},Le=t=>{const n=ln.findIndex(o=>o===t.name);if(n!==-1&&!Me.can(Fe(),n))return null;const r=$();return e(mt,{placement:"top",withArrow:!0,get label(){return r(`home.toolbar.${t.name}`)},get children(){return e(Je,de({get class(){return`toolbar-${t.name}`},get _hover(){return{bgColor:We()}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$7",rounded:"$md",get p(){var o;return(o=G[t.name])!=null&&o.p?"$1_5":"$1"},_active:{transform:"scale(.94)",transition:"0.2s"},get as(){var o;return(o=G[t.name])==null?void 0:o.icon},get color(){var o;return(o=G[t.name])==null?void 0:o.color}},t))}})},T=t=>{const n=$();return e(mt,{get disabled(){return!t.tips},placement:"left",withArrow:!0,get label(){return n(`home.toolbar.${t.tips}`)},get children(){return e(Je,de({get color(){return X()},get _hover(){return{bgColor:X(),color:"white"}},_focus:{outline:"none"},cursor:"pointer",boxSize:"$8",rounded:"$lg",p:"$1",_active:{transform:"scale(.94)",transition:"0.2s"},get as(){return t.icon}},t))}})},Xr=()=>{const t=$(),{copySelectedPreviewPage:n,copySelectedRawLink:r}=sn(),o="neutral";return e(Xe,{placement:"top",offset:10,get children(){return[e(Ge,{as:Le,name:"copy_link"}),e(Ke,{get children(){return[e(K,{colorScheme:o,onSelect:()=>{n()},get children(){return t("home.toolbar.preview_page")}}),e(K,{colorScheme:o,onSelect:()=>{r()},get children(){return t("home.toolbar.down_link")}}),e(K,{colorScheme:o,onSelect:()=>{r(!0)},get children(){return t("home.toolbar.encode_down_link")}})]}})]}})},Jr=ce("<p></p>"),Qr=()=>{const t=$(),n="neutral",{batchDownloadSelected:r,sendToAria2:o,playlistDownloadSelected:i}=kr();return e(Xe,{placement:"top",offset:10,get children(){return[e(Ge,{as:Le,name:"download"}),e(Ke,{get children(){return[e(K,{colorScheme:n,onSelect:r,get children(){return t("home.toolbar.batch_download")}}),e(v,{get when(){return Me.is_admin(Fe())||ft("package_download")},get children(){return[e(K,{colorScheme:n,onSelect:()=>{h.emit("tool","package_download")},get children(){return t("home.toolbar.package_download")}}),e(K,{colorScheme:n,onSelect:i,get children(){return t("home.toolbar.playlist_download")}})]}}),e(K,{colorScheme:n,onSelect:o,get children(){return t("home.toolbar.send_aria2")}})]}})]}})},Yr=ye(()=>Ce(()=>import("./PackageDownload.6ae74d1d.js"),["assets/PackageDownload.6ae74d1d.js","assets/index.db1687cc.js","assets/index.c4c82a28.css"])),Zr=()=>{const t=$(),n=c=>{if(c==="package_download"){if(!ft("package_download"))return;o()}};h.on("tool",n),C(()=>{h.off("tool",n)});const{isOpen:r,onOpen:o,onClose:i}=S(),[s,u]=_("pre_tips");return e(ee,{blockScrollOnMount:!1,get opened(){return r()},onClose:i,closeOnOverlayClick:!1,closeOnEsc:!1,get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return t("home.toolbar.package_download")}}),e(qe,{get fallback(){return e(Oe,{})},get children(){return e(v,{get when(){return s()==="pre_tips"},get fallback(){return e(Yr,{onClose:i})},get children(){return[e(Z,{get children(){const c=Jr.cloneNode(!0);return he(c,()=>t("home.toolbar.pre_package_download-tips")),c}}),e(le,{display:"flex",gap:"$2",get children(){return[e(I,{onClick:i,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(I,{colorScheme:"info",onClick:()=>{u("package_download")},get children(){return t("global.confirm")}})]}})]}})}})]}})]}})},eo=()=>{const t=N(()=>[R.Folder,R.FetchingMore].includes(y.state)&&cn()&&un());return e(Cr,{exitBeforeEnter:!0,get children(){return e(v,{get when(){return t()},get children(){return e(ie,{class:"center-toolbar",pos:"fixed",bottom:"$4",right:"50%",w:"max-content",color:"$neutral11",get as(){return Pe.div},initial:{opacity:0,scale:.9,x:"50% ",y:10},animate:{opacity:1,scale:1,x:"50%",y:0},exit:{opacity:0,scale:.9},transition:{duration:.2},get children(){return e(P,{p:"$2",get bgColor(){return Te("white","#000000d0")()},spacing:"$1",shadow:"0px 10px 30px -5px rgba(0, 0, 0, 0.3)",rounded:"$lg",css:{backdropFilter:"blur(8px)"},get children(){return[e(fe,{each:["rename","move","copy","delete"],children:n=>e(Le,{name:n,onClick:()=>{h.emit("tool",n)}})}),e(Xr,{}),e(Qr,{}),e(Le,{name:"cancel_select",onClick:()=>{pt(!1)}})]}})}})}})}})},to=()=>{const{isOpen:t,onToggle:n}=S({defaultIsOpen:localStorage.getItem("more-open")==="true",onClose:()=>localStorage.setItem("more-open","false"),onOpen:()=>localStorage.setItem("more-open","true")}),r=N(()=>t()?"$4":"$5"),o=N(()=>y.state===R.Folder),{refresh:i}=E();return e(ie,{class:"left-toolbar-box",pos:"fixed",get right(){return r()},get bottom(){return r()},get children(){return e(v,{get when(){return t()},get fallback(){return e(T,{class:"toolbar-toggle",as:rt,onClick:()=>{n()}})},get children(){return e(U,{class:"left-toolbar",p:"$1",rounded:"$lg",spacing:"$1",bgColor:"$neutral1",get as(){return Pe.div},initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},transition:{duration:.2},get children(){return[e(U,{spacing:"$1",class:"left-toolbar-in",get children(){return[e(v,{get when(){return Re(()=>!!o(),!0)()&&(et("write")||y.write)},get children(){return[e(T,{as:wr,tips:"refresh",onClick:()=>{i(void 0,!0)}}),e(T,{get as(){return G.new_file.icon},tips:"new_file",onClick:()=>{h.emit("tool","new_file")}}),e(T,{get as(){return G.mkdir.icon},p:"$1_5",tips:"mkdir",onClick:()=>{h.emit("tool","mkdir")}}),e(T,{get as(){return G.recursive_move.icon},tips:"recursive_move",onClick:()=>{h.emit("tool","recursiveMove")}}),e(T,{get as(){return G.remove_empty_directory.icon},tips:"remove_empty_directory",onClick:()=>{h.emit("tool","removeEmptyDirectory")}}),e(T,{get as(){return G.batch_rename.icon},tips:"batch_rename",onClick:()=>{pt(!0),h.emit("tool","batchRename")}}),e(T,{as:dn,tips:"upload",onClick:()=>{h.emit("tool","upload")}})]}}),e(v,{get when(){return Re(()=>!!o(),!0)()&&et("offline_download")},get children(){return e(T,{as:gn,pl:"0",tips:"offline_download",onClick:()=>{h.emit("tool","offline_download")}})}}),e(v,{get when(){return hn()},get children(){return e(T,{as:fr,tips:"toggle_markdown_toc",onClick:()=>{mn(s=>!s)}})}}),e(T,{tips:"toggle_checkbox",as:pr,onClick:fn}),e(T,{as:pn,tips:"local_settings",onClick:()=>{h.emit("tool","local_settings")}})]}}),e(T,{tips:"more",as:rt,onClick:n})]}})}})}})},no=()=>{const t=$(),{isOpen:n,onOpen:r,onClose:o}=S(),[i,s]=B(bn),{pathname:u}=F(),{refresh:c}=E(),[a,g]=_(!1),d=l=>{l==="copy"&&(r(),g(!1))};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(Be,{get header(){return t("home.toolbar.choose_dst_folder")},get opened(){return n()},onClose:o,get loading(){return i()},get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.overwrite_existing")}})},onSubmit:async l=>{const m=await s(u(),l,M().map(p=>p.name),a());D(m,()=>{c(),o()})}})},ro=()=>{const t=$(),{isOpen:n,onOpen:r,onClose:o}=S(),[i,s]=B(wn),{pathname:u}=F(),{refresh:c}=E(),[a,g]=_(!1),d=l=>{l==="move"&&(r(),g(!1))};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(Be,{get header(){return t("home.toolbar.choose_dst_folder")},get opened(){return n()},onClose:o,get loading(){return i()},get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.overwrite_existing")}})},onSubmit:async l=>{const m=await s(u(),l,M().map(p=>p.name),a());if(M().map(p=>p.name).toString().endsWith(".mp4"))for(let p of[".gif",".webp"]){const k=await s(u()+"/.thumbnails",l+"/.thumbnails",[M().map(O=>O.name).toString()+p]);k.code==500&&k.message.includes("dst dir")&&(await bt(l+"/.thumbnails")).code==200&&await s(u()+"/.thumbnails",l+"/.thumbnails",[M().map(b=>b.name).toString()+p])}D(m,()=>{c(),o()})}})},oo=ce("<p></p>"),ao=()=>{const t=$(),{isOpen:n,onOpen:r,onClose:o}=S(),[i,s]=B(_n),{refresh:u}=E(),{pathname:c}=F(),a=g=>{g==="delete"&&r()};return h.on("tool",a),C(()=>{h.off("tool",a)}),e(ee,{blockScrollOnMount:!1,get opened(){return n()},onClose:o,size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return t("home.toolbar.delete")}}),e(Z,{get children(){const g=oo.cloneNode(!0);return he(g,()=>t("home.toolbar.delete-tips")),g}}),e(le,{display:"flex",gap:"$2",get children(){return[e(I,{onClick:o,colorScheme:"neutral",get children(){return t("global.cancel")}}),e(I,{colorScheme:"danger",get loading(){return i()},onClick:async()=>{const g=await s(c(),M().map(d=>d.name));D(g,()=>{M().map(d=>d.name).toString().endsWith(".mp4")&&s(c()+"/.thumbnails",M().map(d=>d.name+".webp")),u(),o()})},get children(){return t("global.confirm")}})]}})]}})]}})},lo=()=>{const t=$(),{isOpen:n,onOpen:r,onClose:o}=S(),[i,s]=B($n),{pathname:u}=F(),{refresh:c}=E(),[a,g]=_(!1),d=l=>{if(l==="rename"){if(!kn()){h.emit("tool","batchRename");return}r(),g(!1)}};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(v,{get when(){return n()},get children(){return e(Ae,{title:"home.toolbar.input_new_name",get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.overwrite_existing")}})},get isRenamingFile(){return!M()[0].is_dir},get opened(){return n()},onClose:o,get defaultValue(){var l,m;return(m=(l=M()[0])==null?void 0:l.name)!=null?m:""},get loading(){return i()},onSubmit:async l=>{const m=await s(te(u(),M()[0].name),l,a());D(m,()=>{c(),o()})}})}})},so=()=>{const t=$(),{isOpen:n,onOpen:r,onClose:o}=S(),[i,s]=B(vn),{refresh:u}=E(),{pathname:c}=F(),[a,g]=_(!1),d=l=>{l==="new_file"&&(r(),g(!1))};return h.on("tool",d),C(()=>{h.off("tool",d)}),e(Ae,{title:"home.toolbar.input_filename",get footerSlot(){return e(me,{mr:"auto",get checked(){return a()},onChange:()=>{g(!a())},get children(){return t("home.overwrite_existing")}})},get opened(){return n()},onClose:o,get loading(){return i()},onSubmit:async l=>{const m=await s(te(c(),l),Ve(),a());D(m,()=>{u(),o()})}})},io=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),[o,i]=B(bt),{pathname:s}=F(),{refresh:u}=E(),c=a=>{a==="mkdir"&&n()};return h.on("tool",c),C(()=>{h.off("tool",c)}),e(Ae,{title:"home.toolbar.input_dir_name",get opened(){return t()},onClose:r,get loading(){return o()},onSubmit:async a=>{const g=await i(te(s(),a));D(g,()=>{u(),r()})}})},co=ce("<p></p>"),uo=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),{isOpen:o,onOpen:i,onClose:s}=S(),[u,c]=B(yn),{pathname:a}=F(),{refresh:g}=E(),d=m=>{m==="recursiveMove"&&n()};h.on("tool",d),C(()=>{h.off("tool",d)});const l=$();return[e(ee,{blockScrollOnMount:!1,get opened(){return t()},onClose:()=>r(),size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return l("home.toolbar.recursive_move")}}),e(Z,{get children(){const m=co.cloneNode(!0);return he(m,()=>l("home.toolbar.recursive_move_directory-tips")),m}}),e(le,{display:"flex",gap:"$2",get children(){return[e(I,{onClick:()=>r(),colorScheme:"neutral",get children(){return l("global.cancel")}}),e(I,{onClick:()=>{r(),i()},colorScheme:"danger",get children(){return l("global.confirm")}})]}})]}})]}}),e(Be,{get header(){return l("home.toolbar.choose_dst_folder")},get opened(){return o()},onClose:s,get loading(){return u()},onSubmit:async m=>{const p=await c(a(),m);D(p,()=>{g(),s()})}})]},go=ce("<p></p>"),ho=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),{pathname:o}=F(),[i,s]=B(Cn),{refresh:u}=E(),c=g=>{g==="removeEmptyDirectory"&&n()};h.on("tool",c),C(()=>{h.off("tool",c)});const a=$();return e(ee,{blockScrollOnMount:!1,get opened(){return t()},onClose:r,size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return a("home.toolbar.remove_empty_directory")}}),e(Z,{get children(){const g=go.cloneNode(!0);return he(g,()=>a("home.toolbar.remove_empty_directory-tips")),g}}),e(le,{display:"flex",gap:"$2",get children(){return[e(I,{onClick:r,colorScheme:"neutral",get children(){return a("global.cancel")}}),e(I,{colorScheme:"danger",get loading(){return i()},onClick:async()=>{const g=await s(o());D(g,()=>{u(),r()})},get children(){return a("global.confirm")}})]}})]}})]}})},mo=t=>e(Pe.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return e(P,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:We()}},get children(){return[e(se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.src_name},get children(){return t.obj.src_name}}),e(se,{w:{"@initial":"50%","@md":"50%"},class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return t.obj.new_name},get children(){return t.obj.new_name}})]}})}}),fo=ce("<p></p>"),po=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),{isOpen:o,onOpen:i,onClose:s}=S(),[u,c]=B(xn),{pathname:a}=F(),{refresh:g}=E(),[d,l]=_("1"),[m,p]=_(""),[k,O]=_(""),[b,x]=_("string"),[W,q]=_([]),f=$(),j=()=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:"left",cursor:"pointer"}),ue=w=>{w==="batchRename"&&i()};h.on("tool",ue),C(()=>{h.off("tool",ue)});const we=()=>{if(!m()||!k()){z.warning(f("global.empty_input"));return}const w=new RegExp(m(),"g");let _e;if(d()==="1")_e=M().filter(H=>H.name.match(m())).map(H=>({src_name:H.name,new_name:H.name.replace(w,k())}));else{let H=k();_e=M().map(xe=>{let Ye="";const Ze=xe.name.lastIndexOf(".");Ze!==-1&&(Ye=xe.name.substring(Ze+1));const kt={src_name:xe.name,new_name:m()+H+"."+Ye};return H=(parseInt(H)+1).toString().padStart(H.length,"0"),kt})}q(_e),n(),s()};return[e(ee,{blockScrollOnMount:!1,get opened(){return o()},onClose:s,initialFocus:"#modal-input1",size:{"@initial":"xs","@md":"md"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return f("home.toolbar.batch_rename")}}),e(Z,{get children(){return[e(Sn,{defaultValue:"1",onChange:w=>{l(w),w==="1"?x("string"):w==="2"&&x("number")},get children(){return e(P,{spacing:"$4",get children(){return[e(tt,{value:"1",get children(){return f("home.toolbar.regex_rename")}}),e(tt,{value:"2",get children(){return f("home.toolbar.sequential_renaming")}})]}})}}),e(U,{spacing:"$2",get children(){return[(()=>{const w=fo.cloneNode(!0);return w.style.setProperty("margin","10px 0"),he(w,e(v,{get when(){return d()==="1"},get children(){return f("home.toolbar.regular_rename")}}),null),he(w,e(v,{get when(){return d()==="2"},get children(){return f("home.toolbar.sequential_renaming_desc")}}),null),w})(),e(ve,{id:"modal-input1",type:"string",get value(){return m()},onInput:w=>{p(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&we()}}),e(ve,{id:"modal-input2",get type(){return b()},get value(){return k()},onInput:w=>{O(w.currentTarget.value)},onKeyDown:w=>{w.key==="Enter"&&we()}})]}})]}}),e(le,{display:"flex",gap:"$2",get children(){return[e(I,{onClick:()=>{l("1"),x("string"),s()},colorScheme:"neutral",get children(){return f("global.cancel")}}),e(I,{onClick:()=>we(),get disabled(){return!m()||!k()},get children(){return f("global.ok")}})]}})]}})]}}),e(ee,{size:"xl",get opened(){return t()},onClose:r,get children(){return[e(J,{}),e(Q,{get children(){return[e(Y,{get children(){return f("home.toolbar.regex_rename_preview")}}),e(Z,{get children(){return e(U,{class:"list",w:"$full",spacing:"$1",get children(){return[e(P,{class:"title",w:"$full",p:"$2",get children(){return[e(se,de({w:{"@initial":"50%","@md":"50%"}},j,{get children(){return f("home.toolbar.regex_rename_preview_old_name")}})),e(se,de({w:{"@initial":"50%","@md":"50%"}},j,{get children(){return f("home.toolbar.regex_rename_preview_new_name")}}))]}}),e(fe,{get each(){return W()},children:(w,_e)=>e(mo,{obj:w,get index(){return _e()}})})]}})}}),e(le,{display:"flex",gap:"$2",get children(){return[e(I,{onClick:()=>{q([]),l("1"),x("string"),r(),s()},colorScheme:"neutral",get children(){return f("global.cancel")}}),e(I,{onClick:()=>{q([]),r(),i()},colorScheme:"neutral",get children(){return f("global.back")}}),e(I,{get loading(){return u()},onClick:async()=>{const w=await c(a(),W());D(w,()=>{q([]),p(""),O(""),l("1"),x("string"),g(),s(),r()})},get disabled(){return W().length==0},get children(){return f("global.ok")}})]}})]}})]}})]},bo=["delete_on_upload_succeed","delete_on_upload_failed","delete_never","delete_always"],wo=()=>{const t=$(),[n,r]=_([]),[o,i]=B(()=>On.get("/public/offline_download_tools")),[s,u]=_(""),[c,a]=_("delete_on_upload_succeed");Ue(async()=>{const b=await i();Mn(b,x=>{r(x),u(x[0])})});const{isOpen:g,onOpen:d,onClose:l}=S(),[m,p]=B(Fn),{pathname:k}=F(),O=b=>{b==="offline_download"&&d()};return h.on("tool",O),C(()=>{h.off("tool",O)}),e(Ae,{title:"home.toolbar.offline_download",type:"text",get opened(){return g()},onClose:l,get loading(){return o()||m()},get tips(){return t("home.toolbar.offline_download-tips")},get topSlot(){return e(ie,{mb:"$2",get children(){return e(nt,{get value(){return s()},onChange:b=>u(b),get options(){return n().map(b=>({value:b,label:b}))}})}})},get bottomSlot(){return e(ie,{mb:"$2",get children(){return e(nt,{get value(){return c()},onChange:b=>a(b),get options(){return bo.map(b=>({value:b,label:t(`home.toolbar.delete_policy.${b}`)}))}})}})},onSubmit:async b=>{const x=await p(k(),b.split(`
`),s(),c());D(x,()=>{l()})}})},_o=t=>{const n=$(),r=u=>{u===t.name&&i()};h.on("tool",r),C(()=>{h.off("tool",r)});const{isOpen:o,onOpen:i,onClose:s}=S();return e(ee,{get blockScrollOnMount(){return t.blockScrollOnMount},get opened(){return o()},onClose:s,closeOnOverlayClick:!1,closeOnEsc:!1,size:{"@initial":"xs","@md":"md","@lg":"lg","@xl":"xl","@2xl":"2xl"},get children(){return[e(J,{}),e(Q,{get children(){return[e(Rn,{}),e(Y,{get children(){return n(t.title)}}),e(Z,{get children(){return e(v,{get when(){return o()},get children(){return e(qe,{get fallback(){return e(Oe,{})},get children(){return t.children}})}})}})]}})]}})};function $o(t){const n=$();return e(Yn,{get children(){return[e(Nn,{get children(){return n(`home.local_settings.${t.key}`)}}),e(Ee,{get fallback(){return e(ve,{get value(){return ae[t.key]},onInput:r=>{Ne(t.key,r.currentTarget.value)}})},get children(){return[e(A,{get when(){return t.type==="select"},get children(){return e(jn,{get id(){return t.key},get defaultValue(){return ae[t.key]},onChange:r=>Ne(t.key,r),get children(){return[e(Hn,{get children(){return[e(Vn,{get children(){return n("global.choose")}}),e(Un,{}),e(Wn,{})]}}),e(qn,{get children(){return e(Gn,{get children(){return e(fe,{get each(){return Re(()=>typeof t.options=="function",!0)()?t.options():t.options},children:r=>e(Kn,{value:r,get children(){return[e(Xn,{get children(){return n(`home.local_settings.${t.key}_options.${r}`)}}),e(Jn,{})]}})})}})}})]}})}}),e(A,{get when(){return t.type==="boolean"},get children(){return e(Qn,{get defaultChecked(){return ae[t.key]==="true"},onChange:r=>{Ne(t.key,r.currentTarget.checked.toString())}})}})]}})]}})}const ko=()=>{const{isOpen:t,onOpen:n,onClose:r}=S(),o=$(),i=s=>{s==="local_settings"&&n()};return h.on("tool",i),C(()=>{h.off("tool",i)}),e(zn,{get opened(){return t()},placement:"right",onClose:r,get children(){return[e(In,{}),e(Ln,{get children(){return[e(Tn,{}),e(En,{color:"$info9",get children(){return o("home.toolbar.local_settings")}}),e(Pn,{get children(){return[e(U,{spacing:"$2",get children(){return e(fe,{get each(){return Bn.filter(s=>!s.hidden)},children:s=>e($o,s)})}}),e(ht,{mt:"$4",get children(){return e(P,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[e(An,{}),e(Dn,{})]}})}})]}})]}})]}})},vo=ce("<div></div>"),yo=()=>{const t=$(),{isOpen:n,onOpen:r,onClose:o}=S(),[i,s]=B(Zn),{pathname:u}=F(),{refresh:c}=E(),[a,g]=_(""),[d,l]=_(""),[m,p]=_(!0),[k,O]=_(!1),b=f=>{f==="decompress"&&(He(()=>{p(!0),g("/"),l("")}),r())},x=f=>{const{inner:j,pass:ue}=JSON.parse(f);He(()=>{p(!1),g(j),l(ue)}),r()};h.on("tool",b),h.on("extract",x),C(()=>{h.off("tool",b),h.off("extract",x)});const W=()=>a()==="/"?t("home.toolbar.choose_dst_folder"):t("home.toolbar.archive.extract_header",{path:a()}),q=()=>{let f=u();if(a()==="/")return{path:f,name:M()[0].name};{let j=f.lastIndexOf("/");return{path:f.slice(0,j),name:f.slice(j+1)}}};return e(Be,{get header(){return W()},get opened(){return n()},onClose:o,get loading(){return i()},onSubmit:async f=>{const{path:j,name:ue}=q(),we=await s(j,f,ue,d(),a(),m(),k());D(we,()=>{c(),o()})},get children(){return e(U,{spacing:"$1",alignItems:"flex-start",get children(){return[e(P,{width:"100%",spacing:"$1",get children(){return[e(se,{size:"sm",css:{whiteSpace:"nowrap"},get children(){return t("home.toolbar.decompress-pass")}}),e(ve,{get value(){return d()},onInput:f=>l(f.target.value),size:"sm",flexGrow:"1"})]}}),e(me,{get checked(){return m()},onChange:f=>p(f.target.checked),get children(){return t("home.toolbar.decompress-cache-full")}}),e(me,{get checked(){return k()},onChange:f=>O(f.target.checked),get children(){return t("home.toolbar.decompress-put-into-new")}}),vo.cloneNode(!0)]}})}})},Co=ye(()=>Ce(()=>import("./Upload.35626f65.js"),["assets/Upload.35626f65.js","assets/index.db1687cc.js","assets/index.c4c82a28.css","assets/index.ab01de00.js"])),xo=()=>[e(no,{}),e(ro,{}),e(lo,{}),e(ao,{}),e(yo,{}),e(so,{}),e(io,{}),e(uo,{}),e(ho,{}),e(po,{}),e(wo,{}),e(Zr,{}),e(_o,{name:"upload",title:"home.toolbar.upload",get children(){return e(Co,{})}}),e(ko,{})],So=()=>e(tr,{get children(){return[e(to,{}),e(eo,{}),e(xo,{}),e(er,{})]}}),Oo=()=>{rr(ge("site_title"));const t=ge("announcement");return t&&z.render(()=>e(ut,{children:t})),[e(qr,{}),e(So,{}),e(Er,{}),e(Br,{})]},Eo=Object.freeze(Object.defineProperty({__proto__:null,default:Oo},Symbol.toStringTag,{value:"Module"}));export{To as I,Eo as L,G as o,kr as u};