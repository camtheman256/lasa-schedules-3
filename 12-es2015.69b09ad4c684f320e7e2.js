(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{hO9l:function(e,t,n){"use strict";n.r(t),n.d(t,"TabsPageModule",(function(){return u}));var l=n("TEn/"),o=n("ofXK"),r=n("3Pt+"),a=n("tyNb"),c=n("fXoL");const s=[{path:"app",component:(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Bb({type:e,selectors:[["app-tabs"]],decls:10,vars:0,consts:[["slot","bottom","color","lasa"],["tab","current-schedule"],["name","time"],["tab","all-schedules"],["name","calendar"]],template:function(e,t){1&e&&(c.Kb(0,"ion-tabs"),c.Kb(1,"ion-tab-bar",0),c.Kb(2,"ion-tab-button",1),c.Ib(3,"ion-icon",2),c.Kb(4,"ion-label"),c.ic(5,"Current Schedule"),c.Jb(),c.Jb(),c.Kb(6,"ion-tab-button",3),c.Ib(7,"ion-icon",4),c.Kb(8,"ion-label"),c.ic(9,"All Schedules"),c.Jb(),c.Jb(),c.Jb(),c.Jb())},directives:[l.s,l.q,l.r,l.i,l.k],styles:[""]}),e})(),children:[{path:"current-schedule",loadChildren:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"T0So")).then(e=>e.CurrentSchedulePageModule)},{path:"all-schedules",loadChildren:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"34/x")).then(e=>e.AllSchedulesPageModule)},{path:"",redirectTo:"/app/current-schedule",pathMatch:"full"}]},{path:"",redirectTo:"/app/current-schedule",pathMatch:"full"}];let i=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[a.i.forChild(s)],a.i]}),e})(),u=(()=>{class e{}return e.\u0275mod=c.Fb({type:e}),e.\u0275inj=c.Eb({factory:function(t){return new(t||e)},imports:[[l.v,o.b,r.a,i]]}),e})()}}]);