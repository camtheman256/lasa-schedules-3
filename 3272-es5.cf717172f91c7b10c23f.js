!function(){"use strict";(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[3272],{3272:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return u}});var r=n(2377),a=n(9461);n(960);var u=function(e,t,n,u,i){var c=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){u(e.deltaX/c.innerWidth)},onEnd:function(e){var t=c.innerWidth,n=e.deltaX/t,a=e.velocityX,u=a>=0&&(a>.2||e.deltaX>t/2),s=(u?1-n:n)*t,o=0;if(s>5){var l=s/Math.abs(a);o=Math.min(l,540)}i(u,n<=0?.01:(0,r.j)(0,n,.9999),o)}})}}}])}();