var y=Object.defineProperty;var p=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,r,n)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,f=(e,r)=>{for(var n in r||(r={}))b.call(r,n)&&u(e,n,r[n]);if(p)for(var n of p(r))v.call(r,n)&&u(e,n,r[n]);return e};import{j as t,H as O,E as I,D as w,s as i,a as m,r as l,M as L,P as C,G as E,C as g,b as M,m as h,R as P,c as x,d as S,e as W,f as j}from"./vendor.6b2c12f4.js";const k=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};k();const D={color:"#f00"},R=[t(O,{style:D},"like"),t(I,{},"edit"),t(w,{},"delete")],A=i.div`
  display: flex;
  align-items: center;

  .anticon {
    margin-right: 10px;
  }
`,d=({label:e,prefix:r})=>m(A,{children:[r," ",e]}),F=({email:e,phone:r,website:n})=>m(l.exports.Fragment,{children:[t(d,{label:e,prefix:t(L,{})}),t(d,{label:r,prefix:t(C,{})}),t(d,{label:n,prefix:t(E,{})})]}),N=i.img`
  max-height: 200px;
`,$=({username:e})=>t(N,{alt:e,src:`https://avatars.dicebear.com/api/adventurer/${e}.svg`}),{Meta:B}=g,G=i(g)`
  border: 1px solid #e5e5e5;

  .ant-card-cover {
    background: #e5e5e5;
  }

  .ant-card-actions {
    background: #f7f7f7;
    border-top: 1px solid #e5e5e5;

    li {
      border-color: #e5e5e5;
    }
  }
`,H=({name:e,email:r,phone:n,website:a,username:s})=>t(G,{cover:t($,{username:s}),actions:R,children:t(B,{title:e,description:t(F,{email:r,phone:n,website:`http://${a}`})})}),U=async()=>{try{const e=await M.get("https://jsonplaceholder.typicode.com/users");return+e.status==200?e.data:(h.error("Something went wrong, Please try again."),[])}catch{return h.error("Something went wrong, Please try again."),[]}},q=i.div`
  padding: 15px 20px;
`,K=()=>{const[e,r]=l.exports.useState([]);return l.exports.useEffect(()=>{U().then(n=>r(n))},[]),t(q,{children:t(P,{gutter:[15,20],children:e.length?e.map(n=>t(x,{span:6,xl:6,md:8,sm:12,xs:24,children:t(H,f({},n))},n.username)):t(x,{span:6,xs:24,children:t(S,{})})})})};const z=()=>t(K,{});W.render(t(j.StrictMode,{children:t(z,{})}),document.getElementById("root"));
