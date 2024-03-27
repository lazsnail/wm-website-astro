import{r as p}from"./index.NEDEFKed.js";var y={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=p,d=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,b=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function _(i,r,u){var e,t={},s=null,f=null;u!==void 0&&(s=""+u),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)x.call(r,e)&&!k.hasOwnProperty(e)&&(t[e]=r[e]);if(i&&i.defaultProps)for(e in r=i.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:d,type:i,key:s,ref:f,props:t,_owner:b.current}}o.Fragment=m;o.jsx=_;o.jsxs=_;y.exports=o;var E=y.exports;let n=[],h=(i,r)=>{let u=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},l:r||0,lc:0,listen(t,s){return e.lc=u.push(t,s||e.l)/2,()=>{let f=u.indexOf(t);~f&&(u.splice(f,2),--e.lc||e.off())}},notify(t,s){let f=!n.length;for(let l=0;l<u.length;l+=2)n.push(u[l],u[l+1],e.value,t,s);if(f){for(let l=0;l<n.length;l+=5){let a;for(let c=l+1;!a&&(c+=5)<n.length;)n[c]<n[l+1]&&(a=n.push(n[l],n[l+1],n[l+2],n[l+3],n[l+4]));a||n[l](n[l+2],n[l+3],n[l+4])}n.length=0}},off(){},set(t){let s=e.value;s!==t&&(e.value=t,e.notify(s))},subscribe(t,s){let f=e.listen(t,s);return t(e.value),f},value:i};return e};function O(i,r,u){let e=new Set([...r,void 0]);return i.listen((t,s,f)=>{e.has(f)&&u(t,s,f)})}const R=h(!1);function g(i,r={}){let u=p.useCallback(t=>r.keys?O(i,r.keys,t):i.listen(t),[r.keys,i]),e=i.get.bind(i);return p.useSyncExternalStore(u,e,e)}export{R as i,E as j,g as u};
