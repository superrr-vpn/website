(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f448e70"],{1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),i=n("d784"),o=n("44e7"),u=n("825a"),l=n("1d80"),s=n("4840"),d=n("8aa5"),f=n("50c4"),b=n("577e"),p=n("dc4a"),h=n("4dae"),v=n("14c3"),m=n("9263"),O=n("9f7f"),j=n("d039"),g=O.UNSUPPORTED_Y,w=4294967295,x=Math.min,y=[].push,S=c(/./.exec),_=c(y),E=c("".slice),F=!j((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=b(l(this)),i=void 0===n?w:n>>>0;if(0===i)return[];if(void 0===e)return[c];if(!o(e))return a(t,c,e,i);var u,s,d,f=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,O=new RegExp(e.source,p+"g");while(u=a(m,O,c)){if(s=O.lastIndex,s>v&&(_(f,E(c,v,u.index)),u.length>1&&u.index<c.length&&r(y,f,h(u,1)),d=u[0].length,v=s,f.length>=i))break;O.lastIndex===u.index&&O.lastIndex++}return v===c.length?!d&&S(O,"")||_(f,""):_(f,E(c,v)),f.length>i?h(f,0,i):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=l(this),i=void 0==t?void 0:p(t,e);return i?a(i,t,r,n):a(c,b(r),t,n)},function(e,r){var a=u(this),i=b(e),o=n(c,a,i,r,c!==t);if(o.done)return o.value;var l=s(a,RegExp),p=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),m=new l(g?"^(?:"+a.source+")":a,h),O=void 0===r?w:r>>>0;if(0===O)return[];if(0===i.length)return null===v(m,i)?[i]:[];var j=0,y=0,S=[];while(y<i.length){m.lastIndex=g?0:y;var F,R=v(m,g?E(i,y):i);if(null===R||(F=x(f(m.lastIndex+(g?y:0)),i.length))===j)y=d(i,y,p);else{if(_(S,E(i,j,y)),S.length===O)return S;for(var C=1;C<=R.length-1;C++)if(_(S,R[C]),S.length===O)return S;y=j=F}}return _(S,E(i,j)),S}]}),!F,g)},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),i=n("1626"),o=n("c6b6"),u=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===o(e))return a(u,e,t);throw l("RegExp#exec called on incompatible receiver")}},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),i=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"516a":function(e,t,n){},6567:function(e,t,n){"use strict";n("516a")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),c=n("9263"),i=n("d039"),o=n("b622"),u=n("9112"),l=o("species"),s=RegExp.prototype;e.exports=function(e,t,n,d){var f=o(e),b=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=b&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!b||!p||n){var h=r(/./[f]),v=t(f,""[e],(function(e,t,n,a,i){var o=r(e),u=t.exec;return u===c||u===s.exec?b&&!i?{done:!0,value:h(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(s,f,v[1])}d&&u(s[f],"sham",!0)}},d925:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["E"])("data-v-05a9615d"),e=e(),Object(r["C"])(),e},c=Object(r["n"])("Reset password"),i=a((function(){return Object(r["m"])("div",{class:"code-tip-title"},"Account",-1)})),o={class:"mail-text mb15"},u=Object(r["n"])("Continue"),l=a((function(){return Object(r["m"])("div",{class:"text-box"},[Object(r["m"])("div",{class:"newer-box"},[Object(r["m"])("span",null,"Return to"),Object(r["m"])("a",{href:"/signin.html",class:"turbo-link ml5"},"Sign in")])],-1)}));function s(e,t,n,a,s,d){var f=Object(r["K"])("layout-header"),b=Object(r["K"])("a-input-password"),p=Object(r["K"])("a-form-item"),h=Object(r["K"])("a-button"),v=Object(r["K"])("a-form"),m=Object(r["K"])("account"),O=Object(r["K"])("a-layout-content");return Object(r["B"])(),Object(r["l"])(r["b"],null,[Object(r["o"])(f),Object(r["o"])(O,{class:"content"},{default:Object(r["S"])((function(){return[Object(r["o"])(m,null,{title:Object(r["S"])((function(){return[c]})),main:Object(r["S"])((function(){return[Object(r["o"])(v,{layout:"vertical",model:a.formState,class:"form",onFinish:a.onFinished,onFinishFailed:a.onFinishFailed},{default:Object(r["S"])((function(){return[i,Object(r["m"])("div",o,Object(r["M"])(a.email),1),Object(r["o"])(p,{label:"Password",name:"credential",rules:[{required:!0,message:"Please input password"},{validator:a.passwordValidator}]},{default:Object(r["S"])((function(){return[Object(r["o"])(b,{value:a.formState.credential,"onUpdate:value":t[0]||(t[0]=function(e){return a.formState.credential=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["rules"]),Object(r["o"])(p,{label:"Confirm password",name:"credential_repeated",rules:[{required:!0,message:"Please input confirm password"},{validator:a.repeatValidator}]},{default:Object(r["S"])((function(){return[Object(r["o"])(b,{value:a.formState.credential_repeated,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.credential_repeated=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["rules"]),Object(r["o"])(p,{class:"mb30"},{default:Object(r["S"])((function(){return[Object(r["o"])(h,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:""},{default:Object(r["S"])((function(){return[u]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),l]})),_:1})]})),_:1})],64)}var d=n("1da1"),f=(n("96cf"),n("ac1f"),n("1276"),n("d9e2"),n("b17e")),b=n("fa7d"),p=n("6c02"),h=n("7dfd"),v=n("96c7"),m=n("4c16"),O={name:"Code",components:{LayoutHeader:v["a"],Account:m["a"]},setup:function(){var e=Object(p["c"])(),t=e.query,n=t.email,a=t.code,c=Object(r["F"])({credential:"",credential_repeated:""});function i(e){for(var t=e.split(""),n=!0,r=1;r<t.length-1;r++){var a=t[r-1].charCodeAt(),c=t[r].charCodeAt(),i=t[r+1].charCodeAt();i-c==1&&c-a==1&&(n=!1)}return!n}function o(e,t,n){return t?f["h"](/(\w)*(\w)\2{2}(\w)*/,t)?n(new Error("Password cannot be 3 or more consecutive same characters")):i(t)?n(new Error("Password cannot be 3 or more consecutive characters in sequence")):f["h"](/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,20})/,t)?void n():n(new Error("Password must be 8-20 characters and contain upper and lower case characters and numbers")):n()}function u(e,t,n){return Object(b["a"])(c.credential)?n():f["c"](t,c.credential)?void n():n(new Error("Confirm password is not equal to password"))}function l(e){return s.apply(this,arguments)}function s(){return s=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["e"])(n,t.credential,t.credential_repeated,a);case 2:e.sent,location.href="/signin.html";case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function v(){}return{formState:c,onFinished:l,onFinishFailed:v,email:n,passwordValidator:o,repeatValidator:u}}},j=(n("6567"),n("6b0d")),g=n.n(j);const w=g()(O,[["render",s],["__scopeId","data-v-05a9615d"]]);t["default"]=w}}]);