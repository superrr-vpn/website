(function(e){function t(t){for(var c,i,o=t[0],s=t[1],l=t[2],A=0,d=[];A<o.length;A++)i=o[A],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={subscriptions:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;r.push([5,"chunk-common"]),n()})({"0413":function(e,t){e.exports="data:image/png;base64,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"},5:function(e,t,n){e.exports=n("7ad4")},"6e51":function(e,t,n){},"7ad4":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=n("ade3"),r=n("8cf8"),i=n.n(r),o=function(e){return Object(c["G"])("data-v-a09e66de"),e=e(),Object(c["E"])(),e},s={class:"main"},l={class:"general-info"},u=o((function(){return Object(c["m"])("div",{class:"general-title"},"Choose your Turbo Max plan",-1)})),A={class:"general-content"},d=o((function(){return Object(c["m"])("img",{src:i.a,class:"general-check"},null,-1)})),b=["innerHTML"],p={class:"step"},m=o((function(){return Object(c["m"])("div",{class:"step-title"},[Object(c["m"])("div",{class:"step-title__num"},"Step 1"),Object(c["m"])("div",{class:"step-title__text"},"Choose your plan:")],-1)})),f={class:"plans"},O=["onClick"],v={class:"plan"},j={class:"plan-hd"},M=["src"],y={class:"plan-title"},z={class:"plan-title__main"},h={class:"plan-delete"},g={class:"plan-money"},N=o((function(){return Object(c["m"])("span",{class:"plan-money__month"},"/month",-1)})),w={class:"plan-info"},x=o((function(){return Object(c["m"])("div",{class:"plan-info mt10"},"7-day money-back guarantee.",-1)})),T={class:"step"},k=o((function(){return Object(c["m"])("div",{class:"step-title"},[Object(c["m"])("div",{class:"step-title__num"},"Step 2"),Object(c["m"])("div",{class:"step-title__text"},"Continue to Paypal:")],-1)})),U=o((function(){return Object(c["m"])("div",{class:"step-sub-title"},"Your payment information is fully protected.",-1)})),D={class:"pay"},I={class:"pay-info"},H={class:"pay-info__hd"},R=o((function(){return Object(c["m"])("div",{class:"pay-info__hd-title"},"PayPal",-1)})),C=["src"],E={class:"pay-info__body"},P=o((function(){return Object(c["m"])("div",{class:"pay-info__inner-tip"},"CONTINUE BELOW TO BUY A VPN SUBSCRIPTION WITH PAYPAL.",-1)})),_={class:"pay-info__inner-order"},K={class:"pay-info__inner-pay"},Q=Object(c["n"])(" Continue to Paypal "),V=o((function(){return Object(c["m"])("div",{class:"pay-info__ft"},[Object(c["m"])("div",{class:"pay-info__ft-terms mb10"},[Object(c["n"])(" By submitting this forms, you agree to our "),Object(c["m"])("a",{href:"/terms_of_services.html",class:"turbo-link"},"Terms of Service"),Object(c["n"])(" and "),Object(c["m"])("a",{href:"/pocily.html",class:"turbo-link"},"Privacy Policy"),Object(c["n"])(". ")]),Object(c["m"])("div",{class:"pay-info__ft-text"}," To ensure uninterrupted access, your subscription will automatically renew at the end of your subscription period using the payment method provided until you cancel it by turning off auto-renewal. Some products in your subscription are provided by third parties and your access to them is subject to their terms. ")],-1)})),F={class:"feture hide-sm"},W=o((function(){return Object(c["m"])("div",{class:"feture-title"},"Turbo Max includes:",-1)})),L={class:"feture-info"},X=["innerHTML"];function Y(e,t,r,i,o,Y){var S=Object(c["M"])("layout-header"),B=Object(c["M"])("a-button"),J=Object(c["M"])("a-layout-content"),G=Object(c["M"])("layout-footer");return Object(c["D"])(),Object(c["l"])(c["b"],null,[Object(c["o"])(S),Object(c["o"])(J,null,{default:Object(c["U"])((function(){return[Object(c["m"])("section",s,[Object(c["m"])("div",l,[u,Object(c["m"])("div",A,[(Object(c["D"])(!0),Object(c["l"])(c["b"],null,Object(c["K"])(i.contents,(function(e){return Object(c["D"])(),Object(c["l"])("div",{class:"general-item",key:e},[d,Object(c["m"])("span",{innerHTML:e},null,8,b)])})),128))])]),Object(c["m"])("section",p,[m,Object(c["m"])("div",f,[(Object(c["D"])(!0),Object(c["l"])(c["b"],null,Object(c["K"])(i.plans,(function(e,t){var n,r,o;return Object(c["D"])(),Object(c["l"])("div",{class:Object(c["v"])((n={"plans-box":!0},Object(a["a"])(n,"plans-box__index-".concat(t+1),!0),Object(a["a"])(n,"active",e.id===i.selectedId),n)),key:e.id,onClick:function(){return i.onSelectHandler(e)}},[Object(c["m"])("div",v,[Object(c["m"])("div",j,[Object(c["m"])("img",{src:e.icon,alt:"",class:"plan-icon"},null,8,M),Object(c["m"])("div",y,[Object(c["m"])("div",z,Object(c["O"])(e.title),1),Object(c["m"])("span",h,Object(c["O"])(e.origin_price),1)])]),Object(c["m"])("div",g,[Object(c["m"])("span",{class:Object(c["v"])((r={"plan-money__cny":!0},Object(a["a"])(r,"plan-money__cny-".concat(t+1),!0),Object(a["a"])(r,"active",e.id===i.selectedId),r))}," ＄"+Object(c["O"])(e.money),3),N]),Object(c["m"])("div",{class:Object(c["v"])({"plan-discount":!0,"plan-discount-hidden":!e.discount,"plan-discount__green":2===t})},Object(c["O"])(e.discount),3),Object(c["m"])("div",w,Object(c["O"])(e.desc),1),x,Object(c["m"])("div",{class:Object(c["v"])((o={"plan-check":!0},Object(a["a"])(o,"plan-check-".concat(t+1),!0),Object(a["a"])(o,"active",e.id===i.selectedId),o))},null,2)])],10,O)})),128))])]),Object(c["m"])("section",T,[k,U,Object(c["m"])("div",D,[Object(c["m"])("div",I,[Object(c["m"])("div",H,[R,Object(c["m"])("img",{src:n("9d33"),alt:"",srcset:"",class:"pay-info__hd-img"},null,8,C)]),Object(c["m"])("div",E,[P,Object(c["m"])("div",_,"Order total: $"+Object(c["O"])(i.orderTotal),1),Object(c["m"])("div",K,[Object(c["o"])(B,{type:"primary",class:"turbo-btn turbo-btn-big pay-info-btn",block:"",loading:i.loading,disabled:i.loading,onClick:i.payHandler},{default:Object(c["U"])((function(){return[Q]})),_:1},8,["loading","disabled","onClick"])])]),V]),Object(c["m"])("div",F,[W,Object(c["m"])("div",L,[(Object(c["D"])(!0),Object(c["l"])(c["b"],null,Object(c["K"])(i.fetures,(function(e){return Object(c["D"])(),Object(c["l"])("div",{class:"feture-text",key:e,innerHTML:e},null,8,X)})),128))])])])])])]})),_:1}),Object(c["o"])(G)],64)}n("368b");var S=n("56cd");n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("06c5");var B=n("1da1"),J=(n("96cf"),n("b17e")),G=n("3e45"),Z=n("5d2d"),q=n("fa7d"),$=n("96c7"),ee=n("9ef1"),te={name:"Index",components:{LayoutFooter:ee["a"],LayoutHeader:$["a"]},setup:function(){var e=Object(c["I"])(1),t=Object(c["I"])(["Access <strong>300+ servers</strong>  worldwide","<strong>No logs</strong> policy","Connect <strong>5 devices</strong> at the same time","<strong>24/7</strong> customer support"]),a=Object(c["I"])(["24/7 customer support","300+ ultra-fast servers worldwide",'Apps for <img src="'.concat(n("0413"),'" style="width: 108px;"/>'),"Bank-class security & encryption","No logs policy","7 days money-back guarantee"]),r=Object(c["I"])([{id:"P-0KM79635VW248884NMOEOA4A",money:6.67,total:39.99,times:6,title:"6 Months",desc:"Billed every 6 months.",most_popular:!1,icon:n("28b4")},{id:"P-5BN334406J1777352MOEOBPA",money:4.75,times:12,total:56.99,title:"12 Months",desc:"Billed every 12 months.",most_popular:!0,origin_price:"$169.99/year",discount:"You will save 67%",icon:n("9f87")},{id:"P-45566831J4478370MMOEN7KY",money:8.99,total:8.99,times:1,title:"1 Month",desc:"Billed every month.",most_popular:!1,origin_price:"$12.99/month",discount:"You will save 31%",plain_discount:!0,icon:n("f069c")}]),i=Object(c["I"])("P-5BN334406J1777352MOEOBPA"),o=Object(c["I"])(56.99),s=Object(c["I"])(!1);function l(){var e=Z["a"].get("subscription_id");Object(q["d"])(e)&&(i.value=e,Z["a"].remove("subscription_id"),A())}function u(e){i.value=e.id,o.value=e.total}function A(){return d.apply(this,arguments)}function d(){return d=Object(B["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object(q["c"])()){e.next=4;break}return Z["a"].set("subscription_id",i.value),window.location.href="signin.html?redirect_url=".concat(encodeURIComponent(location.href)),e.abrupt("return");case 4:if(t=Z["a"].get("USERINFO")||{},!t.is_vip){e.next=7;break}return e.abrupt("return",S["a"].warn({message:"TIP",description:"Your account is already premium."}));case 7:return s.value=!0,e.next=10,Object(G["b"])(i.value,t.id);case 10:n=e.sent,s.value=!1,J["n"](q["d"],"approve_url",n)&&(Z["a"].set("".concat(t.id,"_SUBSCRIPT_ORDER"),n,864e5),location.href=n.approve_url);case 13:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}return Object(c["A"])((function(){setTimeout((function(){l()}),100)})),{contents:t,plans:r,selectedId:i,onSelectHandler:u,activeKey:e,orderTotal:o,payHandler:A,fetures:a,loading:s}}},ne=(n("f5d0"),n("6b0d")),ce=n.n(ne);const ae=ce()(te,[["render",Y],["__scopeId","data-v-a09e66de"]]);var re=ae,ie=n("495e"),oe=(n("62fc"),Object(c["i"])(re));oe.use(ie["a"]).mount("#app")},"8cf8":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAilBMVEUAAABul0Nrlz5ul0Nul0Nul0Nznktul0NynUhul0NvmUVvl0NwmEVul0Nul0NvmURvmkVvmUZxm0dul0NvmERwmERumEVvl0Nvl0RvmENul0Nul0RvmENvmURumENumENvmENwmUVym0NumENul0Nvl0Nul0NwmERvmERvm0VvmERumENvmkZul0N/rfTIAAAALXRSTlMA/AX43OgK0RThRz0w89dMIh0Q7KtULLynm5eRcUHIwWs2GaGIgnpnXSe2rlm8wGzBAAABvklEQVRIx+WX2XaCMBBAswBhd2FToFrXatv5/9+rWsQ5mqgT39r7yJl7JgmZGWD/DvGCWnx4tu5okgVDO9ULUwBordy4TuBAZeMWDj+6QURX/TWcCAZ0N/rkJ9cJyapoXfh1F/QXVHOwzRtVnZu+kd3vAADsztl7Tzo3+6a6wynvXPkuqO787HKyGztwdhuPWn69C6slo7Fze7caE4+5hR41JLrrpHddajE0Enr0B23cyXh6UXmjDQlXkaF4p/Lifvm6N/HhQlDoXJGjNTulbmXbU8TGv807gQuJ7rDKLkLm+5v9orxyq7t4qr+0zlWVrpALuW7DOUcrw0PAq5FqaDvLL2w3y97d4LxyZ+hLcxTEZ3H3uE0AsRGmezDneH3hMU7sAFP55p74ie1se4gsXOxmg3ttYgYIOfFLBzCNuDtCZhwQKgWM8h60qIqDCfdhk94rk8vX4vEkUYbcasQeU861tnyueZSpTq6fbewaOx093dpnN4tuBW0wYBSlxV9dLV4wCguF5Zw6/QN0t2JGZNHbvPYYlUidE0eMzltXzBPBrG25Z1acPmqnzJLQhSxmtgyyfMysCQev/X/8VX4A6795KZwH6IYAAAAASUVORK5CYII="},"9d33":function(e,t,n){e.exports=n.p+"static/img/ic_paypal.7bffdd61.png"},f5d0:function(e,t,n){"use strict";n("6e51")}});