!function(){var t={757:function(t,e,n){t.exports=n(666)},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new T(r||[]);return a._invoke=function(t,e,n){var r=f;return function(o,a){if(r===l)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var u=p(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",l="executing",d="completed",m={};function v(){}function y(){}function g(){}var w={};w[a]=function(){return this};var x=Object.getPrototypeOf,L=x&&x(x(_([])));L&&L!==n&&r.call(L,a)&&(w=L);var E=g.prototype=v.prototype=Object.create(w);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,i,c){var u=p(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=p(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return y.prototype=E.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},b(S.prototype),S.prototype[i]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new S(s(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(E),u(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:_(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=e.apply(n,r);function c(e){t(i,o,a,c,u,"next",e)}function u(e){t(i,o,a,c,u,"throw",e)}c(void 0)}))}}var r=n(757),o=n.n(r);const a=function(){var t=e(o().mark((function t(){var e,n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ipapi.co/json/");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,r=n.city,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=e(o().mark((function t(){var e,n,r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="20a60a7e129c650ce2044325518adef8",t.next=3,a();case 3:return n=t.sent,r="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat(e,"&units=metric"),t.next=7,fetch(r);case 7:return i=t.sent,t.abrupt("return",i.json());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function c(){return(c=e(o().mark((function t(){var e,n,r,a,c,u,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:e=t.sent,n=e.main,r=e.name,a=e.weather,document.querySelector(".map").innerHTML="",document.querySelector(".weather-form").innerHTML="",c=document.createElement("div"),u=document.createElement("div"),c.innerHTML="<img \n    src=https://open.mapquestapi.com/staticmap/v5/map?key=".concat("unGTODaBI2fnVlu7XPcaeSj5ndG28d5k","&center=").concat(r,'&size=200,200@2x\n        width="200" height="200">'),s="https://openweathermap.org/img/wn/".concat(a[0].icon,"@2x.png"),u.innerHTML='\n         <h2 class="city-name" data-name="'.concat(r,'">\n         <span>').concat(r,'</span>\n         </h2>\n          <div class="city-temp">').concat(Math.round(n.temp),'<sup>°C</sup></div>\n          <img class="city-icon" src=').concat(s," alt=").concat(a[0].main,">\n          <figcaption>").concat(a[0].description,"</figcaption>\n        </div>\n        "),document.querySelector(".map").appendChild(c),document.querySelector(".weather-form").appendChild(u);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}const u=function(){return c.apply(this,arguments)};function s(){return(s=e(o().mark((function t(){var e,n,r,a,c,u,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:(e=t.sent).main,n=e.name,e.weather,null==localStorage.getItem("Cities")?(r=[],a=JSON.stringify(n),c=a.split('"').join(""),r.push(c),localStorage.setItem("Cities",JSON.stringify(r))):(u="",s=localStorage.getItem("Cities"),JSON.parse(s).forEach((function(t){u+='<option value="'.concat(t,'" />')})),document.getElementById("data-list").innerHTML=u);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=e(o().mark((function t(){var e,n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.querySelector("form"),n=document.querySelector("input"),r=n.value,a="https://api.openweathermap.org/data/2.5/weather?q=".concat(r,"&appid=").concat("20a60a7e129c650ce2044325518adef8","&units=metric"),document.querySelector(".map").innerHTML="",document.querySelector(".weather-form").innerHTML="",fetch(a).then((function(t){return t.json()})).then((function(t){var e=t.main,n=t.name,r=t.weather,o=document.createElement("div"),a=document.createElement("div");document.createElement("li").classList.add("city");var i="https://openweathermap.org/img/wn/".concat(r[0].icon,"@2x.png");o.innerHTML="<img \n        src=https://open.mapquestapi.com/staticmap/v5/map?key=".concat("unGTODaBI2fnVlu7XPcaeSj5ndG28d5k","&center=").concat(n,'&size400,400px=@2x\n        width="200" height="200">'),a.innerHTML='\n         <h2 class="city-name" data-name="'.concat(n,'">\n         <span>').concat(n,'</span>\n         </h2>\n          <div class="city-temp">').concat(Math.round(e.temp),'<sup>°C</sup></div>\n          <img class="city-icon" src=').concat(i," alt=").concat(r[0].main,">\n          <figcaption>").concat(r[0].description,"</figcaption>\n        </div>\n        "),document.querySelector(".map").appendChild(o),document.querySelector(".weather-form").appendChild(a);var c=localStorage.getItem("Cities"),u=JSON.parse(c);u.length>9&&u.splice(0,1);var s=JSON.stringify(n).split('"').join(""),p=u.includes(s);!0===p?console.error("Ok"):!1===p&&(u.push(s),localStorage.setItem("Cities",JSON.stringify(u))),console.log(u);var f="";u.forEach((function(t){f+='<option value="'.concat(t,'" />')})),document.getElementById("data-list").innerHTML=f})),e.reset(),n.focus();case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}const f=function(){return p.apply(this,arguments)};document.addEventListener("DOMContentLoaded",e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),document.addEventListener("submit",function(){var t=e(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,f();case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),function(){s.apply(this,arguments)}()}()}();