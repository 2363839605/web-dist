import{a as l,b as d,a2 as t,o as p,e as u,h as n,$ as f,a3 as g}from"./index.db1687cc.js";import{I as w}from"./ImageWithError.46732023.js";import{O as c}from"./icon.4b56a9a8.js";import"./index.00d2bcfc.js";import"./Layout.f0eb39ee.js";import"./useTitle.047ec8a5.js";import"./FolderTree.ae00257a.js";import"./index.ab01de00.js";import"./index.3355aa6f.js";const L=()=>{const s=l(),{replace:a}=d();let e=t.objs.filter(r=>r.type===c.IMAGE);e.length===0&&(e=[t.obj]);const i=r=>{const o=e.findIndex(m=>m.name===t.obj.name);r.key==="ArrowLeft"&&o>0?a(e[o-1].name):r.key==="ArrowRight"&&o<e.length-1&&a(e[o+1].name)};return p(()=>{window.addEventListener("keydown",i)}),u(()=>{window.removeEventListener("keydown",i)}),n(w,{maxH:"75vh",rounded:"$lg",get src(){return t.raw_url},get fallback(){return n(f,{})},get fallbackErr(){return n(g,{get msg(){return s("home.preview.failed_load_img")}})}})};export{L as default};