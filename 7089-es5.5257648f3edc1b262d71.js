!function(){"use strict";(self.webpackChunklasa_schedules=self.webpackChunklasa_schedules||[]).push([[7089],{7089:function(n,t,e){e.r(t),e.d(t,{startFocusVisible:function(){return c}});var s="ion-focused",o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=function(){var n=[],t=!0,e=document,c=function(t){n.forEach(function(n){return n.classList.remove(s)}),t.forEach(function(n){return n.classList.add(s)}),n=t},i=function(){t=!1,c([])};e.addEventListener("keydown",function(n){(t=o.includes(n.key))||c([])}),e.addEventListener("focusin",function(n){if(t&&n.composedPath){var e=n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains("ion-focusable")});c(e)}}),e.addEventListener("focusout",function(){e.activeElement===e.body&&c([])}),e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}}}])}();