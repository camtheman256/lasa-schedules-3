!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{T0So:function(t,r,i){"use strict";i.r(r),i.d(r,"CurrentSchedulePageModule",(function(){return S}));var c=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),b=i("tyNb"),u=i("fXoL"),s=i("ekzQ"),f=i("Ebwu"),d=i("bNmx");function l(e,n){if(1&e&&(u.Kb(0,"h2"),u.ic(1),u.Jb()),2&e){var t=u.Ub(2);u.xb(1),u.kc(" Ends at ",t.currentStatus.periodEndTime," ")}}function h(e,n){if(1&e&&(u.Kb(0,"p"),u.ic(1),u.Jb()),2&e){var t=u.Ub(2);u.xb(1),u.kc(" Time remaining: ",t.currentStatus.timeRemaining," ")}}function p(e,n){if(1&e&&(u.Kb(0,"div"),u.Kb(1,"ion-card-header"),u.Kb(2,"ion-card-subtitle"),u.ic(3,"Current Period"),u.Jb(),u.Kb(4,"ion-card-title"),u.ic(5),u.Jb(),u.Jb(),u.Kb(6,"ion-card-content"),u.gc(7,l,2,1,"h2",5),u.gc(8,h,2,1,"p",5),u.Jb(),u.Jb()),2&e){var t=u.Ub();u.xb(5),u.jc(t.currentStatus.currentPeriod),u.xb(2),u.Zb("ngIf",t.currentStatus.periodEndTime),u.xb(1),u.Zb("ngIf",t.currentStatus.timeRemaining)}}function m(e,n){1&e&&(u.Kb(0,"ion-card-content"),u.Kb(1,"ion-card-title"),u.ic(2,"Loading..."),u.Jb(),u.Jb())}var g,J,K,v=[{path:"",component:(g=function(){function t(n,r){e(this,t),this.sched=n,this.state=r}var r,i,c;return r=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.sched.getSchedules().subscribe((function(n){return e.schedules=n})),this.sched.getSchoolYear().subscribe((function(n){return e.schoolYear=n})),this.state.getPreferences().subscribe((function(n){return e.preferences=n})),setInterval((function(){var n=new Date;e.currentTime=n.toLocaleTimeString([],{hour12:!1}),e.schedules&&e.schoolYear&&(e.currentStatus=e.sched.periodCheck(n,e.schoolYear,e.schedules))}),500)}},{key:"toggleTimeFormat",value:function(e){this.preferences&&this.state.setPreference("twentyfour",!this.preferences.twentyfour)}}])&&n(r.prototype,i),c&&n(r,c),t}(),g.\u0275fac=function(e){return new(e||g)(u.Hb(s.a),u.Hb(f.a))},g.\u0275cmp=u.Bb({type:g,selectors:[["app-current-schedule"]],decls:22,vars:6,consts:[["color","lasa"],[3,"click"],[4,"ngIf","ngIfElse"],["loading",""],["name","information-circle"],[4,"ngIf"]],template:function(e,n){if(1&e&&(u.Kb(0,"ion-header"),u.Kb(1,"ion-toolbar",0),u.Kb(2,"ion-title"),u.ic(3,"Current Schedule"),u.Jb(),u.Jb(),u.Jb(),u.Kb(4,"ion-content"),u.Kb(5,"ion-card",1),u.Sb("click",(function(e){return n.toggleTimeFormat(e)})),u.Kb(6,"ion-card-header"),u.Kb(7,"ion-card-subtitle"),u.ic(8,"Current Time"),u.Jb(),u.Kb(9,"ion-card-title"),u.ic(10),u.Vb(11,"timeFormat"),u.Jb(),u.Jb(),u.Jb(),u.Kb(12,"ion-card",0),u.gc(13,p,9,3,"div",2),u.gc(14,m,3,0,"ng-template",null,3,u.hc),u.Jb(),u.Kb(16,"ion-card"),u.Kb(17,"ion-card-header"),u.Ib(18,"ion-icon",4),u.ic(19,"\u2002LASA Schedules Web App "),u.Jb(),u.Kb(20,"ion-card-content"),u.ic(21," You can add this website to your home screen to use it as a standalone app. Also, tap the time to toggle between 12 and 24 hours. "),u.Jb(),u.Jb(),u.Jb()),2&e){var t=u.cc(15);u.xb(10),u.jc(u.Wb(11,3,n.currentTime,!n.preferences||n.preferences.twentyfour)),u.xb(3),u.Zb("ngIf",n.currentStatus)("ngIfElse",t)}},directives:[a.h,a.u,a.t,a.g,a.b,a.d,a.e,a.f,c.i,a.i,a.c],pipes:[d.a],styles:[""]}),g)}],w=((J=function n(){e(this,n)}).\u0275mod=u.Fb({type:J}),J.\u0275inj=u.Eb({factory:function(e){return new(e||J)},imports:[[b.i.forChild(v)],b.i]}),J),y=i("iTUp"),S=((K=function n(){e(this,n)}).\u0275mod=u.Fb({type:K}),K.\u0275inj=u.Eb({factory:function(e){return new(e||K)},imports:[[c.b,o.a,a.v,w,y.a]]}),K)}}])}();