import{cS as V,cT as D,m as P,G as N,e as F,k as A,h as E,bI as Q,S as T,cU as j,cb as S,cV as k,aQ as H,j as U,q as X,i as Y,bO as Z,bK as ee,an as q,t as te}from"./index.db1687cc.js";var b=(e=>(e.menu="solid-contextmenu",e.submenu="solid-contextmenu solid-contextmenu__submenu",e.submenuArrow="solid-contextmenu__submenu-arrow",e.submenuOpen="solid-contextmenu__submenu--is-open",e.separator="solid-contextmenu__separator",e.item="solid-contextmenu__item",e.itemDisabled="solid-contextmenu__item--disabled",e.itemContent="solid-contextmenu__item__content",e.theme="solid-contextmenu__theme--",e.animationWillEnter="solid-contextmenu__will-enter--",e.animationWillLeave="solid-contextmenu__will-leave--",e))(b||{});function K(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}const ne=e=>{let t,i=!0;const[o,c]=P(),[y,x]=P(),w=U(()=>e.children),m=e.name||"s";e=N({name:m,enterActiveClass:m+"-enter-active",enterClass:m+"-enter",enterToClass:m+"-enter-to",exitActiveClass:m+"-exit-active",exitClass:m+"-exit",exitToClass:m+"-exit-to"},e);const{onBeforeEnter:C,onEnter:d,onAfterEnter:u,onBeforeExit:f,onExit:$,onAfterExit:r}=e;function p(n,s){if(!i||e.appear){let l=function(v){n&&(!v||v.target===n)&&(n.removeEventListener("transitionend",l),n.removeEventListener("animationend",l),n.classList.remove(...a),n.classList.remove(...h),te(()=>{o()!==n&&c(n),y()===n&&x(void 0)}),u&&u(n),e.mode==="inout"&&_(n,s))};const g=e.enterClass.split(" "),a=e.enterActiveClass.split(" "),h=e.enterToClass.split(" ");C&&C(n),n.classList.add(...g),n.classList.add(...a),K(()=>{n.classList.remove(...g),n.classList.add(...h),d&&d(n,()=>l()),(!d||d.length<2)&&(n.addEventListener("transitionend",l),n.addEventListener("animationend",l))})}s&&!e.mode?x(n):c(n)}function _(n,s){const l=e.exitClass.split(" "),g=e.exitActiveClass.split(" "),a=e.exitToClass.split(" ");if(!s.parentNode)return h();f&&f(s),s.classList.add(...l),s.classList.add(...g),K(()=>{s.classList.remove(...l),s.classList.add(...a)}),$&&$(s,()=>h()),(!$||$.length<2)&&(s.addEventListener("transitionend",h),s.addEventListener("animationend",h));function h(v){(!v||v.target===s)&&(s.removeEventListener("transitionend",h),s.removeEventListener("animationend",h),s.classList.remove(...g),s.classList.remove(...a),o()===s&&c(void 0),r&&r(s),e.mode==="outin"&&p(n,s))}}return X(n=>{for(t=w();typeof t=="function";)t=t();return Y(()=>(t&&t!==n&&(e.mode!=="outin"?p(t,n):i&&c(t)),n&&n!==t&&e.mode!=="inout"&&_(t,n),i=!1,t))}),[o,y]};function ie(e){return{all:e=e||new Map,on:function(t,i){var o=e.get(t);o?o.push(i):e.set(t,[i])},off:function(t,i){var o=e.get(t);o&&(i?o.splice(o.indexOf(i)>>>0,1):e.set(t,[]))},emit:function(t,i){var o=e.get(t);o&&o.slice().map(function(c){c(i)}),(o=e.get("*"))&&o.slice().map(function(c){c(t,i)})}}}const L=ie(),z=Z(),I=()=>ee(z);function J(e){var t,i,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=J(e[t]))&&(o&&(o+=" "),o+=i);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function O(){for(var e,t,i=0,o="";i<arguments.length;)(e=arguments[i++])&&(t=J(e))&&(o&&(o+=" "),o+=t);return o}const oe=q("<div></div>"),M=(e,t,i)=>e+t<=i?e:e<t?i-t:e-t,se=(e,t)=>{const i={width:window.innerWidth,height:window.innerHeight};return{x:M(e.x,t.width,i.width),y:M(e.y,t.height,i.height)}},he=e=>{const[t,i]=D(e,["id","theme","animation","onShown","onHidden"]),[o,c]=P(!1),[y,x]=P({x:0,y:0});let w;const[m,C]=P();L.on("show",r=>{var p;r.id===t.id&&(r.event.preventDefault(),C(r.props),c(!0),x((p=r.position)!=null?p:se({x:r.event.clientX,y:r.event.clientY},{width:w.offsetWidth,height:w.offsetHeight})))});const d=()=>{L.emit("hide",t.id),c(!1)},u=N({shown:o,animation:"scale",hide:d,props:m},t);L.on("hideAll",()=>{d()}),F(()=>{L.off("show"),L.off("hideAll")});const f=A(()=>{let r="";return t.animation&&(r=`solid-contextmenu-${t.animation}`),console.log(r),r}),$=A(()=>({enterActiveClass:f()+"-enter-active",exitActiveClass:f()+"-exit-active"}));return E(z.Provider,{value:u,get children(){return E(Q,{get children(){return E(ne,N($,{get children(){return E(T,{get when(){return o()},get children(){const r=oe.cloneNode(!0),p=w;return typeof p=="function"?p(r):w=r,re(r,()=>d()),j(r,i,!1,!1),S(_=>{const n=O(b.menu,i.class,{[`${b.theme}${t.theme}`]:t.theme}),s=y().x+"px",l=y().y+"px";return n!==_._v$&&k(r,_._v$=n),s!==_._v$2&&r.style.setProperty("left",_._v$2=s),l!==_._v$3&&r.style.setProperty("top",_._v$3=l),_},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r}})}}))}})}})};function re(e,t){const i=o=>{var c;return!e.contains(o.target)&&((c=t())==null?void 0:c())};document.body.addEventListener("click",i),F(()=>document.body.removeEventListener("click",i))}function ae(e){return typeof e=="function"}function W(e,t){return ae(e)?e(t):e}const de=q("<div><div></div></div>"),ue=e=>{const[t,i]=D(e,["hidden","disabled","onClick","data","children"]),o=N({hidden:!1,disabled:!1},t),{props:c,hide:y}=I(),x=A(()=>({props:c(),data:e.data})),w=A(()=>W(o.disabled,x())),m=A(()=>W(o.hidden,x())),C=d=>{var u;w()||((u=e.onClick)==null||u.call(e,{event:d,...x()}),y())};return E(T,{get when(){return!m()},get children(){const d=de.cloneNode(!0),u=d.firstChild;return d.$$click=C,j(d,i,!1,!0),H(u,()=>t.children),S(f=>{const $=O(b.item,{[b.itemDisabled]:w()}),r=b.itemContent;return $!==f._v$&&k(d,f._v$=$),r!==f._v$2&&k(u,f._v$2=r),f},{_v$:void 0,_v$2:void 0}),d}})};V(["click"]);const le=q("<div></div>"),ce=q("<div><div><span></span></div></div>"),me=e=>{const[t,i]=D(e,["arrow","children","disabled","hidden","label","class"]),o=N({arrow:"\u25B6\uFE0F",disabled:!1,hidden:!1},t),{props:c,id:y}=I(),x=A(()=>({props:c()})),w=A(()=>W(o.disabled,x())),m=A(()=>W(o.hidden,x()));let C,d;const[u,f]=P({x:0,y:0}),$=()=>{const n=C.getBoundingClientRect(),s=d.getBoundingClientRect(),l={width:window.innerWidth,height:window.innerHeight};let g=n.right;g+s.width>l.width&&(n.left-s.width>0?g=n.left-s.width:g=l.width-s.width);let a=n.top;a+s.height>l.height&&(n.bottom-s.height>0?a=n.bottom-s.height:a=l.height-s.height),f({x:g,y:a}),console.log(u())},[r,p]=P(!1),_=()=>{p(!0),$()};return L.on("hide",n=>{n===y&&p(!1)}),F(()=>{L.off("hide")}),E(T,{get when(){return!m()},get children(){const n=ce.cloneNode(!0),s=n.firstChild,l=s.firstChild;n.$$click=()=>r()?p(!1):_(),n.addEventListener("mouseleave",()=>p(!1)),n.addEventListener("mouseenter",()=>_()),j(n,i,!1,!0);const g=C;return typeof g=="function"?g(s):C=s,H(s,()=>o.label,l),H(l,()=>o.arrow),H(n,E(T,{get when(){return r()},get children(){const a=le.cloneNode(!0),h=d;return typeof h=="function"?h(a):d=a,H(a,()=>o.children),S(v=>{const B=b.submenu,R=u().x+"px",G=u().y+"px";return B!==v._v$&&k(a,v._v$=B),R!==v._v$2&&a.style.setProperty("left",v._v$2=R),G!==v._v$3&&a.style.setProperty("top",v._v$3=G),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),a}}),null),S(a=>{const h=O(b.item,t.class,{[b.itemDisabled]:w()}),v=b.itemContent,B=b.submenuArrow;return h!==a._v$4&&k(n,a._v$4=h),v!==a._v$5&&k(s,a._v$5=v),B!==a._v$6&&k(l,a._v$6=B),a},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n}})};V(["click"]);const fe=e=>({show:(t,i)=>{L.emit("show",{id:(i==null?void 0:i.id)||(e==null?void 0:e.id),props:(i==null?void 0:i.props)||(e==null?void 0:e.props),event:t,position:i==null?void 0:i.position})},hideAll:()=>{L.emit("hideAll")}});export{me as C,fe as b,he as w,ue as x};