import{a as _,m as b,a$ as h,be as w,h as e,aj as A,bQ as M,a6 as i,bR as C,df as v,C as y,bf as $,n as B,S as F,cl as H,aP as O,D as R,M as K,y as L,bi as q,z as E,A as j,bF as f,bs as x,I as G,T as Q,B as V,a7 as S,G as c,aE as W}from"./index.db1687cc.js";const X=t=>{const r=t.getFullYear().toString(),d=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),g=t.getHours().toString().padStart(2,"0"),u=t.getMinutes().toString().padStart(2,"0"),a=t.getSeconds().toString().padStart(2,"0");return`${r}/${d}/${o} ${g}:${u}:${a}`},n=[{name:"title",textAlign:"left",w:"calc(35% - 110px)"},{name:"fingerprint",textAlign:"left",w:"calc(65% - 110px)"},{name:"last_used",textAlign:"right",w:"140px"},{name:"operation",textAlign:"right",w:"80px"}],Y=t=>{const r=_(),[d,o]=b(!1),[g,u]=t.isMine?h(()=>w.post(`/me/sshkey/delete?id=${t.id}`)):h(()=>w.post(`/admin/user/sshkey/delete?uid=${t.userId}&id=${t.id}`)),a={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};return e(F,{get when(){return!d()},get children(){return e(A,{w:"$full",p:"$2",get children(){return[e(M,{get w(){return n[0].w},size:"sm",get textAlign(){return n[0].textAlign},css:a,get children(){return t.title}}),e(i,{get w(){return n[1].w},size:"sm",get textAlign(){return n[1].textAlign},css:a,get children(){return t.fingerprint}}),e(i,{get w(){return n[2].w},size:"sm",get textAlign(){return n[2].textAlign},css:a,get children(){return X(new Date(t.last_used_time))}}),e(C,{get w(){return n[3].w},gap:"$1",get children(){return[e(v,{}),e(y,{size:"sm",colorScheme:"danger",get loading(){return g()},onClick:async()=>{const l=await u();$(l,()=>{B.success(r("global.delete_success")),o(!0)})},get children(){return r("global.delete")}})]}})]}})}})},N=t=>{const r=_(),[d,o]=b([]),[g,u]=t.isMine?h(()=>w.get("/me/sshkey/list")):h(()=>w.get(`/admin/user/sshkey/list?uid=${t.userId}`)),[a,l]=H({title:"",key:""}),[I,z]=h(()=>w.post("/me/sshkey/add",a)),{isOpen:D,onOpen:P,onClose:k}=O(),p=async()=>{const s=await u();$(s,T=>{o(T.content)})};p();const m=s=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:s.textAlign});return e(S,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(C,{w:"$full",get children(){return[e(M,{get children(){return r("users.ssh_keys.heading")}}),e(F,{get when(){return t.isMine},get children(){return[e(v,{}),e(y,{get loading(){return g()},onClick:P,get children(){return r("global.add")}}),e(R,{get opened(){return D()},onClose:k,scrollBehavior:"inside",get children(){return[e(K,{}),e(L,{get children(){return[e(q,{}),e(E,{get children(){return r("users.ssh_keys.add_heading")}}),e(j,{get children(){return[e(f,{mb:"$4",get children(){return[e(x,{for:"add_title",get children(){return r("users.ssh_keys.title")}}),e(G,{id:"add_title",get value(){return a.title},onInput:s=>l("title",s.currentTarget.value)})]}}),e(f,{get children(){return[e(x,{for:"add_key",get children(){return r("users.ssh_keys.key")}}),e(Q,{id:"add_key",get value(){return a.key},onInput:s=>l("key",s.currentTarget.value)})]}})]}}),e(V,{get children(){return e(y,{get loading(){return I()},onClick:async()=>{const s=await z();$(s,()=>{l("title",""),l("key",""),p(),k()})},get children(){return r("global.add")}})}})]}})]}})]}})]}}),e(S,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[e(A,{class:"title",w:"$full",p:"$2",get children(){return[e(i,c({get w(){return n[0].w}},()=>m(n[0]),{get children(){return r(`users.ssh_keys.${n[0].name}`)}})),e(i,c({get w(){return n[1].w}},()=>m(n[1]),{get children(){return r(`users.ssh_keys.${n[1].name}`)}})),e(i,c({get w(){return n[2].w}},()=>m(n[2]),{get children(){return r(`users.ssh_keys.${n[2].name}`)}})),e(i,c({get w(){return n[3].w}},()=>m(n[3]),{get children(){return r(`users.ssh_keys.${n[3].name}`)}}))]}}),W(()=>d().map(s=>e(Y,c(t,s))))]}})]}})};export{N as P};