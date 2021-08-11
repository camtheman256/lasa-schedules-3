"use strict";(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[8810],{8810:function(e,t,s){s.r(t),s.d(t,{scopeCss:function(){return R}});const r="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+r+n,"gim"),a=new RegExp("("+o+n,"gim"),i=new RegExp("("+c+n,"gim"),p=r+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,f=/:host-context/gim,x=/\/\*\s*[\s\S]*?\*\//g,$=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,b="%BLOCK%",S=(e,t)=>{const s=W(e);let r=0;return s.escapedString.replace(_,(...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+b)&&(o=s.blocks[r++],n=n.substring(b.length+1),l="{");const a=t({selector:c,content:o});return`${e[1]}${a.selector}${e[3]}${l}${a.content}${n}`})},W=e=>{const t=e.split(w),s=[],r=[];let c=0,o=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(b),o=[]),s.push(e)),"{"===e&&c++}return o.length>0&&(r.push(o.join("")),s.push(b)),{escapedString:s.join(""),blocks:r}},k=(e,t,s)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(p,o,e[3]))}return r.join(",")}return p+e[3]}),O=(e,t,s)=>e+t.replace(r,"")+s,j=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,E=(e,t,s,r,c)=>S(e,e=>{let c=e.selector,o=e.content;return"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map(e=>r&&e.indexOf("."+r)>-1?e.trim():((e,t)=>!(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t).test(e))(e,t)?((e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(e,...t)=>t[0])),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(p)>-1)c=((e,t,s)=>{if(g.lastIndex=0,g.test(e)){const t=`.${s}`;return e.replace(h,(e,s)=>s.replace(/([^:]*)(:*)(.*)/,(e,s,r,c)=>s+t+r+c)).replace(g,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(g,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(c=e[1]+r+e[2]+e[3])}}return c},o=(e=>{const t=[];let s,r=0;return s=(e=e.replace(/(\[[^\]]*\])/g,(e,s)=>{const c=`__ph-${r}__`;return t.push(s),r++,c})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,s,c)=>{const o=`__ph-${r}__`;return t.push(c),r++,s+o}),{content:s,placeholders:t}})(e);let n,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((e=o.content).indexOf(p)>-1);for(;null!==(n=i.exec(e));){const t=n[1],s=e.slice(a,n.index).trim();u=u||s.indexOf(p)>-1,l+=`${u?c(s):s} ${t} `,a=i.lastIndex}const d=e.substring(a);return u=u||d.indexOf(p)>-1,l+=u?c(d):d,((e,t)=>t.replace(/__ph-(\d+)__/g,(t,s)=>e[+s]))(o.placeholders,l)})(e,t,s).trim():e.trim()).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=E(e.content,t,s,r)),{selector:c.replace(/\s{2,}/g," ").trim(),content:o}}),R=(e,t,s)=>{const n=t+"-h",h=t+"-s",g=(e=>e.match($)||[])(e);e=(e=>e.replace(x,""))(e);const _=[];if(s){const t=e=>{const t=`/*!@___${_.length}___*/`;return _.push({placeholder:t,comment:`/*!@${e.selector}*/`}),e.selector=t+e.selector,e};e=S(e,e=>"@"!==e.selector[0]?t(e):((e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(e.content=S(e.content,t)),e))}const w=((e,t,s,n,h)=>{const g=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(i,(...e)=>{if(e[2]){const t=e[2].trim(),c=s+t+e[3];let o="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;o=t+o}const n=o+c,l=`${o.trimRight()}${c.trim()}`;return n.trim()!==l.trim()&&r.push({orgSelector:n,updatedSelector:`${l}, ${n}`}),c}return p+e[3]}),{selectors:r,cssText:e}})(e=(e=>k(e,a,j))(e=(e=>k(e,l,O))(e=(e=>e.replace(f,o).replace(d,r).replace(m,c))(e))),n);return e=(e=>u.reduce((e,t)=>e.replace(t," "),e))(e=g.cssText),t&&(e=E(e,t,s,n)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors}})(e,t,n,h);return e=[w.cssText,...g].join("\n"),s&&_.forEach(({placeholder:t,comment:s})=>{e=e.replace(t,s)}),w.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);