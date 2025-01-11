import{a as b,m as _,aW as h,b9 as w,h as e,ae as A,bP as M,b5 as i,bQ as C,d9 as v,C as y,ba as $,n as B,S as z,ck as H,aK as K,D as O,M as L,y as R,bd as q,z as E,A as W,bA as x,bn as S,I as Q,T as V,B as X,a4 as f,E as c,az as Y}from"./index.739d1244.js";const j=t=>{const r=t.getFullYear().toString(),d=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0"),g=t.getHours().toString().padStart(2,"0"),u=t.getMinutes().toString().padStart(2,"0"),a=t.getSeconds().toString().padStart(2,"0");return`${r}/${d}/${o} ${g}:${u}:${a}`},n=[{name:"title",textAlign:"left",w:"calc(35% - 110px)"},{name:"fingerprint",textAlign:"left",w:"calc(65% - 110px)"},{name:"last_used",textAlign:"right",w:"140px"},{name:"operation",textAlign:"right",w:"80px"}],G=t=>{const r=b(),[d,o]=_(!1),[g,u]=t.isMine?h(()=>w.post(`/me/sshkey/delete?id=${t.id}`)):h(()=>w.post(`/admin/user/sshkey/delete?uid=${t.userId}&id=${t.id}`)),a={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};return e(z,{get when(){return!d()},get children(){return e(A,{w:"$full",p:"$2",get children(){return[e(M,{get w(){return n[0].w},size:"sm",get textAlign(){return n[0].textAlign},css:a,get children(){return t.title}}),e(i,{get w(){return n[1].w},size:"sm",get textAlign(){return n[1].textAlign},css:a,get children(){return t.fingerprint}}),e(i,{get w(){return n[2].w},size:"sm",get textAlign(){return n[2].textAlign},css:a,get children(){return j(new Date(t.last_used_time))}}),e(C,{get w(){return n[3].w},gap:"$1",get children(){return[e(v,{}),e(y,{size:"sm",colorScheme:"danger",get loading(){return g()},onClick:async()=>{const l=await u();$(l,()=>{B.success(r("global.delete_success")),o(!0)})},get children(){return r("global.delete")}})]}})]}})}})},N=t=>{const r=b(),[d,o]=_([]),[g,u]=t.isMine?h(()=>w.get("/me/sshkey/list")):h(()=>w.get(`/admin/user/sshkey/list?uid=${t.userId}`)),[a,l]=H({title:"",key:""}),[I,D]=h(()=>w.post("/me/sshkey/add",a)),{isOpen:F,onOpen:P,onClose:k}=K(),p=async()=>{const s=await u();$(s,T=>{o(T.content)})};p();const m=s=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:s.textAlign});return e(f,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(C,{w:"$full",get children(){return[e(M,{get children(){return r("users.ssh_keys.heading")}}),e(z,{get when(){return t.isMine},get children(){return[e(v,{}),e(y,{get loading(){return g()},onClick:P,get children(){return r("global.add")}}),e(O,{get opened(){return F()},onClose:k,scrollBehavior:"inside",get children(){return[e(L,{}),e(R,{get children(){return[e(q,{}),e(E,{get children(){return r("users.ssh_keys.add_heading")}}),e(W,{get children(){return[e(x,{mb:"$4",get children(){return[e(S,{for:"add_title",get children(){return r("users.ssh_keys.title")}}),e(Q,{id:"add_title",get value(){return a.title},onInput:s=>l("title",s.currentTarget.value)})]}}),e(x,{get children(){return[e(S,{for:"add_key",get children(){return r("users.ssh_keys.key")}}),e(V,{id:"add_key",get value(){return a.key},onInput:s=>l("key",s.currentTarget.value)})]}})]}}),e(X,{get children(){return e(y,{get loading(){return I()},onClick:async()=>{const s=await D();$(s,()=>{l("title",""),l("key",""),p(),k()})},get children(){return r("global.add")}})}})]}})]}})]}})]}}),e(f,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[e(A,{class:"title",w:"$full",p:"$2",get children(){return[e(i,c({get w(){return n[0].w}},()=>m(n[0]),{get children(){return r(`users.ssh_keys.${n[0].name}`)}})),e(i,c({get w(){return n[1].w}},()=>m(n[1]),{get children(){return r(`users.ssh_keys.${n[1].name}`)}})),e(i,c({get w(){return n[2].w}},()=>m(n[2]),{get children(){return r(`users.ssh_keys.${n[2].name}`)}})),e(i,c({get w(){return n[3].w}},()=>m(n[3]),{get children(){return r(`users.ssh_keys.${n[3].name}`)}}))]}}),Y(()=>d().map(s=>e(G,c(t,s))))]}})]}})};export{N as P};
