(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[1296],{1296:function(e,t,n){"use strict";n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return D},keyboardDidClose:function(){return b},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return l},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return f},setKeyboardOpen:function(){return c},startKeyboardAssist:function(){return u},trackViewportChanges:function(){return y}});const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},s={},a=!1;const d=()=>{r={},s={},a=!1},u=e=>{h(e),e.visualViewport&&(s=D(e.visualViewport),e.visualViewport.onresize=()=>{y(e),p()||l(e)?c(e):b(e)&&f(e)})},h=e=>{e.addEventListener("keyboardDidShow",t=>c(e,t)),e.addEventListener("keyboardDidHide",()=>f(e))},c=(e,t)=>{g(e,t),a=!0},f=e=>{w(e),a=!1},p=()=>!a&&r.width===s.width&&(r.height-s.height)*s.scale>150,l=e=>a&&!b(e),b=e=>a&&s.height===e.innerHeight,g=(e,t)=>{const n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-s.height}});e.dispatchEvent(n)},w=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},y=e=>{r=Object.assign({},s),s=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);