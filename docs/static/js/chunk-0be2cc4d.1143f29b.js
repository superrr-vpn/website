(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0be2cc4d"],{1127:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=function(e){return Object(r["E"])("data-v-e5b75ace"),e=e(),Object(r["C"])(),e},c=Object(r["n"])("Set password"),i=a((function(){return Object(r["m"])("div",{class:"code-tip-title"},"Account",-1)})),o={class:"mail-text mb15"},u=Object(r["n"])("Continue"),l=a((function(){return Object(r["m"])("div",{class:"text-box"},[Object(r["m"])("div",{class:"newer-box"},[Object(r["m"])("span",null,"Already have an account?"),Object(r["m"])("a",{href:"/signin.html",class:"turbo-link ml5"},"Sign in")])],-1)})),s=a((function(){return Object(r["m"])("div",{class:"tip-text"},[Object(r["n"])(" By signing up, you accept our "),Object(r["m"])("a",{href:"/terms_of_service.html",class:"turbo-link"},"Terms of service"),Object(r["n"])(" and "),Object(r["m"])("a",{href:"/policy.html",class:"turbo-link"},"policy")],-1)}));function d(e,t,n,a,d,b){var f=Object(r["K"])("layout-header"),p=Object(r["K"])("a-input-password"),h=Object(r["K"])("a-form-item"),v=Object(r["K"])("a-button"),m=Object(r["K"])("a-form"),O=Object(r["K"])("account"),j=Object(r["K"])("a-layout-content");return Object(r["B"])(),Object(r["l"])(r["b"],null,[Object(r["o"])(f),Object(r["o"])(j,{class:"content"},{default:Object(r["S"])((function(){return[Object(r["o"])(O,null,{title:Object(r["S"])((function(){return[c]})),main:Object(r["S"])((function(){return[Object(r["o"])(m,{layout:"vertical",model:a.formState,class:"form",onFinish:a.onFinished,onFinishFailed:a.onFinishFailed},{default:Object(r["S"])((function(){return[i,Object(r["m"])("div",o,Object(r["M"])(a.email),1),Object(r["o"])(h,{label:"Password",name:"credential",rules:[{required:!0,message:"Please input password"},{validator:a.passwordValidator}]},{default:Object(r["S"])((function(){return[Object(r["o"])(p,{value:a.formState.credential,"onUpdate:value":t[0]||(t[0]=function(e){return a.formState.credential=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["rules"]),Object(r["o"])(h,{label:"Confirm password",name:"credential_repeated",rules:[{required:!0,message:"Please input confirm password"},{validator:a.repeatValidator}]},{default:Object(r["S"])((function(){return[Object(r["o"])(p,{value:a.formState.credential_repeated,"onUpdate:value":t[1]||(t[1]=function(e){return a.formState.credential_repeated=e}),class:"turbo-input"},null,8,["value"])]})),_:1},8,["rules"]),Object(r["o"])(h,{class:"mb30"},{default:Object(r["S"])((function(){return[Object(r["o"])(v,{type:"primary","html-type":"submit",class:"turbo-btn turbo-btn-big",block:""},{default:Object(r["S"])((function(){return[u]})),_:1})]})),_:1})]})),_:1},8,["model","onFinish","onFinishFailed"]),l,s]})),_:1})]})),_:1})],64)}var b=n("5530"),f=n("1da1"),p=(n("96cf"),n("ac1f"),n("1276"),n("d9e2"),n("5d2d")),h=n("b17e"),v=n("fa7d"),m=n("6c02"),O=n("7dfd"),j=n("96c7"),g=n("4c16"),w={name:"Code",components:{LayoutHeader:j["a"],Account:g["a"]},setup:function(){var e=Object(m["c"])(),t=e.query,n=t.email,a=t.code,c=Object(r["F"])({credential:"",credential_repeated:""});function i(e){for(var t=e.split(""),n=!0,r=1;r<t.length-1;r++){var a=t[r-1].charCodeAt(),c=t[r].charCodeAt(),i=t[r+1].charCodeAt();i-c==1&&c-a==1&&(n=!1)}return!n}function o(e,t,n){return t?h["h"](/(\w)*(\w)\2{2}(\w)*/,t)?n(new Error("Password cannot be 3 or more consecutive same characters")):i(t)?n(new Error("Password cannot be 3 or more consecutive characters in sequence")):h["h"](/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,20})/,t)?void n():n(new Error("Password must be 8-20 characters and contain upper and lower case characters and numbers")):n()}function u(e,t,n){return Object(v["a"])(c.credential)?n():h["c"](t,c.credential)?void n():n(new Error("Confirm password is not equal to password"))}function l(e){return s.apply(this,arguments)}function s(){return s=Object(f["a"])(regeneratorRuntime.mark((function e(t){var r,c,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(O["d"])(n,t.credential,t.credential_repeated,a);case 2:r=e.sent,c=r.token,i=Object(b["a"])({},r),delete i.token,o=2592e6,p["a"].set("TOKEN",c,o),p["a"].set("USERINFO",i,o),location.href="/user.html";case 10:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function d(){}return{formState:c,onFinished:l,onFinishFailed:d,email:n,passwordValidator:o,repeatValidator:u}}},x=(n("6ead"),n("6b0d")),y=n.n(x);const S=y()(w,[["render",d],["__scopeId","data-v-e5b75ace"]]);t["default"]=S},1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),i=n("d784"),o=n("44e7"),u=n("825a"),l=n("1d80"),s=n("4840"),d=n("8aa5"),b=n("50c4"),f=n("577e"),p=n("dc4a"),h=n("4dae"),v=n("14c3"),m=n("9263"),O=n("9f7f"),j=n("d039"),g=O.UNSUPPORTED_Y,w=4294967295,x=Math.min,y=[].push,S=c(/./.exec),_=c(y),E=c("".slice),F=!j((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));i("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=f(l(this)),i=void 0===n?w:n>>>0;if(0===i)return[];if(void 0===e)return[c];if(!o(e))return a(t,c,e,i);var u,s,d,b=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,O=new RegExp(e.source,p+"g");while(u=a(m,O,c)){if(s=O.lastIndex,s>v&&(_(b,E(c,v,u.index)),u.length>1&&u.index<c.length&&r(y,b,h(u,1)),d=u[0].length,v=s,b.length>=i))break;O.lastIndex===u.index&&O.lastIndex++}return v===c.length?!d&&S(O,"")||_(b,""):_(b,E(c,v)),b.length>i?h(b,0,i):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=l(this),i=void 0==t?void 0:p(t,e);return i?a(i,t,r,n):a(c,f(r),t,n)},function(e,r){var a=u(this),i=f(e),o=n(c,a,i,r,c!==t);if(o.done)return o.value;var l=s(a,RegExp),p=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),m=new l(g?"^(?:"+a.source+")":a,h),O=void 0===r?w:r>>>0;if(0===O)return[];if(0===i.length)return null===v(m,i)?[i]:[];var j=0,y=0,S=[];while(y<i.length){m.lastIndex=g?0:y;var F,k=v(m,g?E(i,y):i);if(null===k||(F=x(b(m.lastIndex+(g?y:0)),i.length))===j)y=d(i,y,p);else{if(_(S,E(i,j,y)),S.length===O)return S;for(var C=1;C<=k.length-1;C++)if(_(S,k[C]),S.length===O)return S;y=j=F}}return _(S,E(i,j)),S}]}),!F,g)},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),i=n("1626"),o=n("c6b6"),u=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(i(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===o(e))return a(u,e,t);throw l("RegExp#exec called on incompatible receiver")}},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),i=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"6ead":function(e,t,n){"use strict";n("cca2")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},cca2:function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),c=n("9263"),i=n("d039"),o=n("b622"),u=n("9112"),l=o("species"),s=RegExp.prototype;e.exports=function(e,t,n,d){var b=o(e),f=!i((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),p=f&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!p||n){var h=r(/./[b]),v=t(b,""[e],(function(e,t,n,a,i){var o=r(e),u=t.exec;return u===c||u===s.exec?f&&!i?{done:!0,value:h(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(s,b,v[1])}d&&u(s[b],"sham",!0)}}}]);