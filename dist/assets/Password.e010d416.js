import{d as i,u,f as e,bh as c,I as g,_ as p,J as d,bS as m,a0 as o,bi as h,aP as a,B as s,W as f}from"./index.fe88f280.js";import{a as $}from"./Layout.3c6572ee.js";import{L as b}from"./index.671eab34.js";import"./index.8e6aaf98.js";import"./Markdown.c1ac9bae.js";import"./api.4e1f3ee5.js";import"./useUtil.ccabd0b1.js";import"./index.b3f4846e.js";import"./FolderTree.2bf3aa28.js";const x=()=>{const t=i(),{refresh:n}=$(),{back:l}=u();return e(f,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{x as default};