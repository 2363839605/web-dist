import{am as p,a as z,a$ as F,be as b,m as f,h as t,aj as G,b1 as E,bQ as ne,S as w,aH as Y,co as je,cp as He,a6 as B,bR as ye,df as xe,C as y,bf as A,n as ee,aE as te,a7 as W,d7 as Ue,dh as S,H as ve,di as Ve,cm as pe,k as D,e as Qe,x as Ke,I as Xe,G as T,t as qe,cS as Je,aQ as j,cb as _e,dj as ke,cc as Ce,an as ae}from"./index.db1687cc.js";import{P as Ye}from"./Paginator.4baa38b0.js";var N;(function(e){e[e.Pending=0]="Pending",e[e.Running=1]="Running",e[e.Succeeded=2]="Succeeded",e[e.Canceling=3]="Canceling",e[e.Canceled=4]="Canceled",e[e.Errored=5]="Errored",e[e.Failing=6]="Failing",e[e.Failed=7]="Failed",e[e.WaitingRetry=8]="WaitingRetry",e[e.BeforeRetry=9]="BeforeRetry"})(N||(N={}));const Ze={[N.Failed]:"danger",[N.Succeeded]:"success",[N.Canceled]:"neutral"},Ee=e=>{if(e.role<0)return null;const n=["info","neutral","accent"];return t(pe,{get colorScheme(){return n[e.role]},css:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},get children(){return e.name}})},et=e=>{const n=z();return t(pe,{get colorScheme(){var s;return(s=Ze[e.state])!=null?s:"info"},get children(){return n(`tasks.state.${e.state}`)}})},l=[{name:"name",textAlign:"left",w:p().role===2?"calc(100% - 660px)":"calc(100% - 560px)"},{name:"creator",textAlign:"center",w:p().role===2?"100px":"0"},{name:"state",textAlign:"center",w:"100px"},{name:"progress",textAlign:"left",w:"140px"},{name:"speed",textAlign:"center",w:"100px"},{name:"operation",textAlign:"right",w:"220px"}],Z=e=>Math.floor(e).toString().padStart(2,"0"),tt=e=>{const n=e/1e3%60,s=e/1e3/60%60,o=e/1e3/3600;return`${Z(o)}:${Z(s)}:${Z(n)}`},rt=e=>{const n=z(),s=e.done==="undone"?"cancel":"delete",o=e.done==="done"&&e.state===N.Failed,[d,g]=F(()=>b.post(`/task/${e.type}/${s}?tid=${e.id}`)),[_,x]=F(()=>b.post(`/task/${e.type}/retry?tid=${e.id}`)),[u,m]=f(!1),k=e.name.match(e.nameAnalyzer.regex),L=k===null?e.name:e.nameAnalyzer.title(k),h=e.start_time===null?-1:new Date(e.start_time).getTime(),H=e.end_time===null?new Date().getTime():new Date(e.end_time).getTime();let O="-";const U=(i,P)=>{let v=P/i,R="bytes/s";return v>1024&&(v/=1024,R="KB/s"),v>1024&&(v/=1024,R="MB/s"),v>1024&&(v/=1024,R="GB/s"),`${v.toFixed(2)} ${R}`};if(e.done){if(e.start_time!==e.end_time&&e.progress>0&&h!==-1){const i=(H-h)/1e3,P=e.total_bytes*e.progress/100;O=U(i,P)}}else if(e.prevProgress!==void 0&&e.prevFetchTime!==void 0){const i=(e.curFetchTime-e.prevFetchTime)/1e3,P=(e.progress-e.prevProgress)*e.total_bytes/100;O=U(i,P)}return t(w,{get when(){return!u()},get children(){return[t(G,{w:"$full",p:"$2",get children(){return[t(G,{get w(){return l[0].w},spacing:"$1",get children(){return[t(E,{"on:click":i=>{i.stopPropagation()},get checked(){return e.local.selected},onChange:i=>{e.setLocal({selected:i.target.checked,expanded:e.local.expanded})}}),t(ne,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:L})]}}),t(w,{get when(){return p().role===2},get children(){return t(Y,{get w(){return l[1].w},get children(){return t(Ee,{get name(){return e.creator},get role(){return e.creator_role}})}})}}),t(Y,{get w(){return l[2].w},get children(){return t(et,{get state(){return e.state}})}}),t(je,{get w(){return l[3].w},trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},mr:"$1",get children(){return t(He,{color:"$info8",rounded:"$md"})}}),t(Y,{get w(){return l[1].w},get children(){return t(B,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:O})}}),t(ye,{get w(){return l[5].w},gap:"$1",get children(){return[t(xe,{}),t(w,{get when(){return e.canRetry},get children(){return t(y,{size:"sm",disabled:!o,display:o?"block":"none",get loading(){return _()},onClick:async()=>{const i=await x();A(i,()=>{ee.info(n("tasks.retry")),m(!0)})},get children(){return n("tasks.retry")}})}}),t(y,{size:"sm",colorScheme:"danger",get loading(){return d()},onClick:async()=>{const i=await g();A(i,()=>{ee.success(n("global.delete_success")),m(!0)})},get children(){return n(`global.${s}`)}}),t(y,{size:"sm",colorScheme:"neutral",onClick:()=>{e.setLocal({selected:e.local.selected,expanded:!e.local.expanded})},get children(){return te(()=>!!e.local.expanded,!0)()?n("tasks.fold"):n("tasks.expand")}})]}})]}}),t(w,{get when(){return e.local.expanded},get children(){return t(W,{css:{wordBreak:"break-all",fontSize:"0.8em"},w:"$full",pl:"$2",pr:"$2",get children(){return[t(Ue,{templateColumns:"min-content 1fr",w:"$full",columnGap:"$4",mb:"$2",get children(){return[t(w,{when:h!==-1,get children(){return[t(S,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return n("tasks.attr.time_elapsed")}}),t(S,{color:"$neutral9",get children(){return tt(H-h)}})]}}),t(w,{when:k!==null,get children(){return t(ve,{get each(){return Object.entries(e.nameAnalyzer.attrs)},children:i=>[t(S,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return i[0]}}),t(S,{color:"$neutral9",get children(){return i[1](k)}})]})}}),t(S,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return n("tasks.attr.status")}}),t(S,{color:"$neutral9",get children(){return e.status}}),t(w,{get when(){return e.error},get children(){return[t(S,{color:"$danger9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return n("tasks.attr.err")}}),t(S,{color:"$danger9",get children(){return e.error}})]}})]}}),t(Ve,{})]}})}})]}})},nt=e=>{const n=z(),[s,o]=F(()=>b.get(`/task/${e.type}/${e.done}`)),[d,g]=f([]),[_,x]=f("name"),[u,m]=f(!1),k={name:(r,a)=>r.name>a.name?1:-1,creator:(r,a)=>r.creator===a.creator?r.id>a.id?1:-1:r.creator>a.creator?1:-1,state:(r,a)=>r.state===a.state?r.id>a.id?1:-1:r.state>a.state?1:-1,progress:(r,a)=>r.progress===a.progress?r.id>a.id?1:-1:r.progress<a.progress?1:-1},L=D(()=>(r,a)=>(u()?-1:1)*k[_()](r,a)),h=async()=>{const r=await o();A(r,a=>{var we;const $=new Date().getTime(),ue={},he={},X={},me={},fe={};for(const c of d())ue[c.id]=c.curFetchTime,he[c.id]=c.prevFetchTime,X[c.id]=c.progress,me[c.id]=c.prevProgress,fe[c.id]=c.local;g((we=a==null?void 0:a.map(c=>{var $e;let q,J;c.progress===X[c.id]?(q=he[c.id],J=me[c.id]):(q=ue[c.id],J=X[c.id]);const We=($e=fe[c.id])!=null?$e:{selected:!1,expanded:!1};return{...c,curFetchTime:$,prevFetchTime:q,prevProgress:J,local:We}}).sort(L()))!=null?we:[])})};if(h(),e.done==="undone"){const r=setInterval(h,2e3);Qe(()=>clearInterval(r))}const[H,O]=F(()=>b.post(`/task/${e.type}/clear_done`)),[U,i]=F(()=>b.post(`/task/${e.type}/clear_succeeded`)),[P,v]=F(()=>b.post(`/task/${e.type}/retry_failed`)),[R,Se]=f(""),[Fe,be]=f(new RegExp("")),[Ae,le]=f(!1);Ke(()=>{try{be(new RegExp(R())),le(!1)}catch{le(!0)}});const[se,ze]=f(p().role!==2),Q=D(()=>{const r=Fe(),a=se();return $=>r.test($.name)&&(!a||$.creator===p().username)}),C=D(()=>d().filter(Q())),ce=D(()=>C().map(r=>r.local.selected).every(Boolean)),Pe=D(()=>C().map(r=>r.local.selected).some(Boolean)&&!ce()),Re=r=>g(d().map(a=>(Q()(a)&&(a.local.selected=r),a))),oe=D(()=>C().map(r=>r.local.expanded).every(Boolean)),De=r=>g(d().map(a=>(Q()(a)&&(a.local.expanded=r),a))),ie=()=>C().filter(r=>r.local.selected).map(r=>r.id),[Te,Be]=F(()=>b.post(`/task/${e.type}/retry_some`,ie())),[Le,Ie]=F(()=>b.post(`/task/${e.type}/${ge}_some`,ie())),de=r=>{Object.entries(r).forEach(([a,$])=>{ee.error(`${a}: ${$}`)})},[Ne,Me]=f(1),K=20,ge=e.done==="undone"?"cancel":"delete",Oe=D(()=>{const r=(Ne()-1)*K,a=r+K;return C().slice(r,a)}),I=r=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:r.textAlign}),V=r=>({cursor:"pointer",onClick:()=>{_()===r.name?m(!u()):qe(()=>{x(r.name),m(!1)}),h()}}),Ge=r=>a=>g(d().map($=>($.id===r&&($.local=a),$)));return t(W,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(ne,{size:"lg",get children(){return n(`tasks.${e.done}`)}}),t(G,{gap:"$2",flexWrap:"wrap",get children(){return[t(w,{get when(){return e.done==="done"},get children(){return[t(y,{colorScheme:"accent",get loading(){return s()},onClick:h,get children(){return n("global.refresh")}}),t(y,{get loading(){return P()},onClick:async()=>{const r=await v();A(r,()=>h())},get children(){return n("tasks.retry_failed")}}),t(y,{colorScheme:"danger",get loading(){return H()},onClick:async()=>{const r=await O();A(r,()=>h())},get children(){return n("global.clear")}}),t(y,{colorScheme:"success",get loading(){return U()},onClick:async()=>{const r=await i();A(r,()=>h())},get children(){return n("tasks.clear_succeeded")}})]}}),t(w,{get when(){return e.canRetry},get children(){return t(y,{colorScheme:"primary",get loading(){return Te()},onClick:async()=>{const r=await Be();A(r,a=>{de(a),h()})},get children(){return n("tasks.retry_selected")}})}}),t(y,{colorScheme:"warning",get loading(){return Le()},onClick:async()=>{const r=await Ie();A(r,a=>{de(a),h()})},get children(){return n(`tasks.${ge}_selected`)}}),t(Xe,{width:"auto",get placeholder(){return n("tasks.filter")},get value(){return R()},onInput:r=>Se(r.target.value),get invalid(){return Ae()}}),t(w,{get when(){return p().role===2},get children(){return t(E,{get checked(){return se()},onChange:r=>ze(r.target.checked),get children(){return n("tasks.show_only_mine")}})}})]}}),t(W,{w:{"@initial":"1024px","@lg":"$full"},overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[t(G,{class:"title",w:"$full",p:"$2",get children(){return[t(G,{get w(){return l[0].w},spacing:"$1",get children(){return[t(E,{get disabled(){return C().length===0},get checked(){return ce()},get indeterminate(){return Pe()},onChange:r=>Re(r.target.checked)}),t(B,T(()=>I(l[0]),()=>V(l[0]),{get children(){return n(`tasks.attr.${l[0].name}`)}}))]}}),t(w,{get when(){return p().role===2},get children(){return t(B,T({get w(){return l[1].w}},()=>I(l[1]),()=>V(l[1]),{get children(){return n(`tasks.attr.${l[1].name}`)}}))}}),t(B,T({get w(){return l[2].w}},()=>I(l[2]),()=>V(l[2]),{get children(){return n(`tasks.attr.${l[2].name}`)}})),t(B,T({get w(){return l[3].w}},()=>I(l[3]),()=>V(l[3]),{get children(){return n(`tasks.attr.${l[3].name}`)}})),t(B,T({get w(){return l[4].w}},()=>I(l[4]),{get children(){return n(`tasks.attr.${l[4].name}`)}})),t(ye,{get w(){return l[5].w},gap:"$2",get children(){return[t(xe,{}),t(B,T(()=>I(l[5]),{get children(){return n(`tasks.attr.${l[5].name}`)}})),t(y,{size:"xs",colorScheme:"neutral",onClick:()=>De(!oe()),get disabled(){return C().length===0},get children(){return te(()=>!!oe(),!0)()?n("tasks.fold_all"):n("tasks.expand_all")}})]}})]}}),te(()=>Oe().map(r=>t(rt,T(r,e,{get setLocal(){return Ge(r.id)}}))))]}}),t(Ye,{get total(){return C().length},defaultPageSize:K,onChange:r=>{Me(r)}})]}})},ot=e=>{const n=z();return t(W,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[t(ne,{size:"xl",get children(){return n(`tasks.${e.type}`)}}),t(W,{w:"$full",spacing:"$2",get children(){return t(ve,{each:["undone","done"],children:s=>t(nt,{get type(){return e.type},done:s,get canRetry(){return e.canRetry},get nameAnalyzer(){return e.nameAnalyzer}})})}})]}})},at=ae("<a></a>"),re=ae("<p></p>"),lt=ae('<a target="_blank"></a>'),M=(e,n,s=!0)=>{const o=(e==="/"?"":e)+n,d=p().base_path==="/"?"":p().base_path,g=o.startsWith(d),[_,x]=f(!1);return g&&s?(()=>{const u=at.cloneNode(!0);return u.$$mouseout=()=>x(!1),u.$$mouseover=()=>x(!0),j(u,o),_e(m=>{const k=_()?"text-decoration: underline":"",L=o.slice(d.length);return m._v$=ke(u,k,m._v$),L!==m._v$2&&Ce(u,"href",m._v$2=L),m},{_v$:void 0,_v$2:void 0}),u})():(()=>{const u=re.cloneNode(!0);return j(u,o),u})()},it=()=>{const e=z(),[n,s]=f(!1);return{regex:/^download (.+) to \((.+)\)$/,title:o=>o[1],attrs:{[e("tasks.attr.offline_download.url")]:o=>(()=>{const d=lt.cloneNode(!0);return d.$$mouseout=()=>s(!1),d.$$mouseover=()=>s(!0),j(d,()=>o[1]),_e(g=>{const _=n()?"text-decoration: underline":"",x=o[1];return g._v$3=ke(d,_,g._v$3),x!==g._v$4&&Ce(d,"href",g._v$4=x),g},{_v$3:void 0,_v$4:void 0}),d})(),[e("tasks.attr.offline_download.path")]:o=>M("",o[2])}}},dt=()=>{const e=z();return{regex:/^transfer \[(.*)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,title:n=>n[3],attrs:{[e("tasks.attr.offline_download.transfer_src")]:n=>M(n[1],n[2],!1),[e("tasks.attr.offline_download.transfer_dst")]:n=>M(n[4],n[5])}}},gt=()=>{const e=z();return{regex:/^decompress \[(.+)]\((.*\/([^\/]+))\)\[(.+)] to \[(.+)]\((.+)\) with password <(.*)>$/,title:n=>n[3],attrs:{[e("tasks.attr.decompress.src")]:n=>M(n[1],n[2]),[e("tasks.attr.decompress.dst")]:n=>M(n[5],n[6]),[e("tasks.attr.decompress.inner")]:n=>(()=>{const s=re.cloneNode(!0);return j(s,()=>n[4]),s})(),[e("tasks.attr.decompress.password")]:n=>(()=>{const s=re.cloneNode(!0);return j(s,()=>n[7]),s})()}}},ut=()=>{const e=z();return{regex:/^upload (.+) to \[(.+)]\((.+)\)$/,title:n=>n[1],attrs:{[e("tasks.attr.decompress.dst")]:n=>M(n[2],n[3])}}};Je(["mouseover","mouseout"]);export{ot as T,dt as a,M as b,gt as c,ut as d,it as g};