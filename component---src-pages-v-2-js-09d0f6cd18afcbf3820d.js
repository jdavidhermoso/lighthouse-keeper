webpackJsonp([94872523753872],{225:function(e,t){"use strict";function r(e,t,s){if("string"!=typeof t){if(l){var d=f(t);d&&d!==l&&r(e,d,s)}var p=o(t);c&&(p=p.concat(c(t)));for(var b=0;b<p.length;++b){var y=p[b];if(!(n[y]||a[y]||s&&s[y])){var g=i(t,y);try{u(e,y,g)}catch(e){}}}return e}return e}var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u=Object.defineProperty,o=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,l=f&&f(Object);e.exports=r},325:function(e,t){"use strict";!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=34)}([function(e,t,r){function n(e){return function t(r,n){switch(arguments.length){case 0:return t;case 1:return Object(u.a)(r)?t:Object(a.a)(function(t){return e(r,t)});default:return Object(u.a)(r)&&Object(u.a)(n)?t:Object(u.a)(r)?Object(a.a)(function(t){return e(t,n)}):Object(u.a)(n)?Object(a.a)(function(t){return e(r,t)}):e(r,n)}}}t.a=n;var a=r(1),u=r(6)},function(e,t,r){function n(e){return function t(r){return 0===arguments.length||Object(a.a)(r)?t:e.apply(this,arguments)}}t.a=n;var a=r(6)},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,u){try{var o=t[a](u),c=o.value}catch(e){return void r(e)}return o.done?void e(c):Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.readFiles=t.hide=t.show=t.scriptAsync=t.resizeChart=t.idleCallback=t.addDownloadImage=t.domainTransducer=t.getLegendNodes=t.maxList=t.off=t.minList=void 0;var u=r(46),o=n(u),c=r(26),i=n(c),f=r(11),l=n(f),s=r(47),d=n(s),p=r(17),b=n(p),y=r(4),g=n(y),v=r(3),O=n(v),j=r(54),h=n(j),m=r(72),w=n(m),_=r(74),S=n(_);t.minList=(0,l.default)(o.default,1/0),t.off=(0,d.default)(.8),t.maxList=(0,l.default)(i.default,-1/0),t.getLegendNodes=function(e){return Array.from(document.querySelectorAll(e+' text[text-anchor="start"]'))},t.domainTransducer=(0,w.default)((0,b.default)("url"),(0,g.default)((0,O.default)((0,h.default)("/"),(0,S.default)(2)))),t.addDownloadImage=function(e,t){google.visualization.events.addListener(e,"ready",function(){document.getElementById(t).href=e.getImageURI()})},t.idleCallback=function(e){window.requestIdleCallback?requestIdleCallback(e):requestAnimationFrame(e)},t.resizeChart=function(e,t,r){window.resize=function(){e.draw(t,r)}},t.scriptAsync=function(e,t){var r=document,n="script",a=r.createElement(n),u=r.getElementsByTagName(n)[0];a.src="//"+e,t&&a.addEventListener("load",function(e){t(null,e)},!1),u.parentNode.insertBefore(a,u)},t.show=function(e){return document.querySelectorAll(e)[0].classList.remove("hidden")},t.hide=function(e){return document.querySelectorAll(e)[0].classList.add("hidden")},t.readFiles=function(){var e=a(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(Array.from(t).map(function(e){return new Promise(function(t,r){var n=new FileReader;n.onload=function(){try{var e=JSON.parse(n.result);t(e)}catch(e){r(e)}},n.readAsText(e)})})));case 1:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}()},function(e,t,r){function n(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return Object(a.a)(arguments[0].length,Object(o.default)(u.a,arguments[0],Object(c.a)(arguments)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(9),u=r(51),o=r(11),c=r(52)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(18),u=r(19),o=r(8),c=r(48),i=r(21),f=r(12),l=Object(n.a)(Object(a.a)(["fantasy-land/map","map"],c.a,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return Object(i.a)(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return Object(o.a)(function(r,n){return r[n]=e(t[n]),r},{},Object(f.a)(t));default:return Object(u.a)(e,t)}}));t.default=l},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(22),u=Object(n.a)(function(e,t){return Object(a.default)([e],t)});t.default=u},function(e,t,r){function n(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}t.a=n},function(e,t,r){function n(e){return function t(r,n,c){switch(arguments.length){case 0:return t;case 1:return Object(o.a)(r)?t:Object(u.a)(function(t,n){return e(r,t,n)});case 2:return Object(o.a)(r)&&Object(o.a)(n)?t:Object(o.a)(r)?Object(u.a)(function(t,r){return e(t,n,r)}):Object(o.a)(n)?Object(u.a)(function(t,n){return e(r,t,n)}):Object(a.a)(function(t){return e(r,n,t)});default:return Object(o.a)(r)&&Object(o.a)(n)&&Object(o.a)(c)?t:Object(o.a)(r)&&Object(o.a)(n)?Object(u.a)(function(t,r){return e(t,r,c)}):Object(o.a)(r)&&Object(o.a)(c)?Object(u.a)(function(t,r){return e(t,n,r)}):Object(o.a)(n)&&Object(o.a)(c)?Object(u.a)(function(t,n){return e(r,t,n)}):Object(o.a)(r)?Object(a.a)(function(t){return e(t,n,c)}):Object(o.a)(n)?Object(a.a)(function(t){return e(r,t,c)}):Object(o.a)(c)?Object(a.a)(function(t){return e(r,n,t)}):e(r,n,c)}}}t.a=n;var a=r(1),u=r(0),o=r(6)},function(e,t,r){function n(e,t,r){for(var n=0,a=r.length;n<a;){if((t=e["@@transducer/step"](t,r[n]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n+=1}return e["@@transducer/result"](t)}function a(e,t,r){for(var n=r.next();!n.done;){if((t=e["@@transducer/step"](t,n.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}n=r.next()}return e["@@transducer/result"](t)}function u(e,t,r,n){return e["@@transducer/result"](r[n](Object(f.a)(e["@@transducer/step"],e),t))}function o(e,t,r){if("function"==typeof e&&(e=Object(i.a)(e)),Object(c.a)(r))return n(e,t,r);if("function"==typeof r["fantasy-land/reduce"])return u(e,t,r,"fantasy-land/reduce");if(null!=r[l])return a(e,t,r[l]());if("function"==typeof r.next)return a(e,t,r);if("function"==typeof r.reduce)return u(e,t,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}t.a=o;var c=r(25),i=r(39),f=r(40),l="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator"},function(e,t,r){function n(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,r){return t.apply(this,arguments)};case 3:return function(e,r,n){return t.apply(this,arguments)};case 4:return function(e,r,n,a){return t.apply(this,arguments)};case 5:return function(e,r,n,a,u){return t.apply(this,arguments)};case 6:return function(e,r,n,a,u,o){return t.apply(this,arguments)};case 7:return function(e,r,n,a,u,o,c){return t.apply(this,arguments)};case 8:return function(e,r,n,a,u,o,c,i){return t.apply(this,arguments)};case 9:return function(e,r,n,a,u,o,c,i,f){return t.apply(this,arguments)};case 10:return function(e,r,n,a,u,o,c,i,f,l){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}t.a=n},function(e,t,r){function n(e,t){return Object.prototype.hasOwnProperty.call(t,e)}t.a=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),a=r(8),u=Object(n.a)(a.a);t.default=u},function(e,t,r){var n=r(1),a=r(10),u=r(50),o=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],i=function(){return arguments.propertyIsEnumerable("length")}(),f=function(e,t){for(var r=0;r<e.length;){if(e[r]===t)return!0;r+=1}return!1},l="function"!=typeof Object.keys||i?function(e){if(Object(e)!==e)return[];var t,r,n=[],l=i&&Object(u.a)(e);for(t in e)!Object(a.a)(t,e)||l&&"length"===t||(n[n.length]=t);if(o)for(r=c.length-1;r>=0;)t=c[r],Object(a.a)(t,e)&&!f(n,t)&&(n[n.length]=t),r-=1;return n}:function(e){return Object(e)!==e?[]:Object.keys(e)},s=Object(n.a)(l);t.a=s},function(e,t,r){function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(37),u=function(e){return e&&e.__esModule?e:{default:e}}(a),o=r(2),c=function(e){return["Metrics"].concat(n((0,u.default)([],o.domainTransducer,e)))};t.default=c},function(e,t,r){function n(e){return"function"==typeof e["@@transducer/step"]}t.a=n},function(e,t,r){t.a=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){function n(e){return"[object String]"===Object.prototype.toString.call(e)}t.a=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(4),u=r(5),o=Object(n.a)(function(e,t){return Object(a.default)(Object(u.default)(e),t)});t.default=o},function(e,t,r){function n(e,t,r){return function(){if(0===arguments.length)return r();var n=Array.prototype.slice.call(arguments,0),o=n.pop();if(!Object(a.a)(o)){for(var c=0;c<e.length;){if("function"==typeof o[e[c]])return o[e[c]].apply(o,n);c+=1}if(Object(u.a)(o))return t.apply(null,n)(o)}return r.apply(this,arguments)}}t.a=n;var a=r(15),u=r(14)},function(e,t,r){function n(e,t){for(var r=0,n=t.length,a=Array(n);r<n;)a[r]=e(t[r]),r+=1;return a}t.a=n},function(e,t,r){t.a={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},function(e,t,r){var n=r(9),a=r(1),u=r(0),o=r(49),c=Object(u.a)(function(e,t){return 1===e?Object(a.a)(t):Object(n.a)(e,Object(o.a)(e,[],t))});t.a=c},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=Object(n.a)(function(e,t){for(var r=t,n=0;n<e.length;){if(null==r)return;r=r[e[n]],n+=1}return r});t.default=a},function(e,t,r){function n(e){return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""))}t.a=n},function(e,t,r){var n=r(1),a=Object(n.a)(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});t.a=a},function(e,t,r){var n=r(1),a=r(15),u=r(16),o=Object(n.a)(function(e){return!!Object(a.a)(e)||!!e&&"object"==typeof e&&!Object(u.a)(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))});t.a=o},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=Object(n.a)(function(e,t){return t>e?t:e});t.default=a},function(e,t,r){function n(e,t){return function(){var r=arguments.length;if(0===r)return t();var n=arguments[r-1];return Object(a.a)(n)||"function"!=typeof n[e]?t.apply(this,arguments):n[e].apply(n,Array.prototype.slice.call(arguments,0,r-1))}}t.a=n;var a=r(15)},function(e,t,r){var n=r(1),a=r(57),u=Object(n.a)(function(e){return Object(a.a)(e,[])});t.a=u},function(e,t,r){var n=r(0),a=r(60),u=Object(n.a)(function(e,t){return Object(a.a)(e,t,[],[])});t.a=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(18),u=r(69),o=r(70),c=r(8),i=r(71),f=r(12),l=Object(n.a)(Object(a.a)(["filter"],i.a,function(e,t){return Object(o.a)(t)?Object(c.a)(function(r,n){return e(t[n])&&(r[n]=t[n]),r},{},Object(f.a)(t)):Object(u.a)(e,t)}));t.default=l},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(85),a=r(11),u=Object(a.default)(n.a,0);t.default=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.audits=void 0;var n=r(5),a=function(e){return e&&e.__esModule?e:{default:e}}(n);t.audits=(0,a.default)("audits")},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.suffixFormatter=function(e){return new google.visualization.NumberFormat({suffix:e})}},function(e,t,r){e.exports=r(35)},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,u){try{var o=t[a](u),c=o.value}catch(e){return void r(e)}return o.done?void e(c):Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)})}return n("next")})}}var u=r(36),o=n(u),c=r(81),i=n(c),f=r(86),l=n(f),s=r(93),d=r(2);(0,d.scriptAsync)("www.gstatic.com/charts/loader.js",function(){google.charts.load("current",{packages:["corechart"]})});var p=function(){var e=a(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.readFiles)(t);case 2:r=e.sent,(0,d.idleCallback)(function(){try{(0,d.hide)("#parseError"),(0,d.show)("#charts"),(0,o.default)("chart_score",r),(0,l.default)("chart_bytes",r),(0,i.default)("chart_timings",r)}catch(e){(0,d.hide)("#charts"),(0,d.show)("#parseError")}});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();window.handleFiles=p,(0,s.dragDrop)("drop-area",p)},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){var r=google.visualization.arrayToDataTable([[].concat(u((0,i.default)(t)),["Budget"])].concat(u((0,l.default)(t)))),n={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:a({},t.length,{type:"line"}),animation:{startup:!0}};(0,s.show)(".score");var o=new google.visualization.ComboChart(document.getElementById(e));(0,s.addDownloadImage)(o,"score__download"),o.draw(r,n),(0,s.resizeChart)(o,r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var c=r(13),i=n(c),f=r(75),l=n(f),s=r(2)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(38),a=r(7),u=r(14),o=r(8),c=r(41),i=Object(a.a)(function(e,t,r){return Object(u.a)(e)?Object(o.a)(t(e),e["@@transducer/init"](),r):Object(o.a)(t(Object(c.a)(e)),Object(n.a)(e,[],[],!1),r)});t.default=i},function(e,t,r){function n(e,t,r,o){var c=function a(u){for(var c=t.length,a=0;a<c;){if(e===t[a])return r[a];a+=1}t[a+1]=e,r[a+1]=u;for(var i in e)u[i]=o?n(e[i],t,r,!0):e[i];return u};switch(Object(u.a)(e)){case"Object":return c({});case"Array":return c([]);case"Date":return new Date(e.valueOf());case"RegExp":return Object(a.a)(e);default:return e}}t.a=n;var a=r(23),u=r(24)},function(e,t,r){function n(e){return new a(e)}t.a=n;var a=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},e}()},function(e,t,r){var n=r(9),a=r(0),u=Object(a.a)(function(e,t){return Object(n.a)(e.length,function(){return e.apply(t,arguments)})});t.a=u},function(e,t,r){function n(e){if(Object(c.a)(e))return e;if(Object(o.a)(e))return f;if("string"==typeof e)return l;if("object"==typeof e)return s;throw new Error("Cannot create transformer for "+e)}t.a=n;var a=r(42),u=r(44),o=r(25),c=r(14),i=r(45),f={"@@transducer/init":Array,"@@transducer/step":function(e,t){return e.push(t),e},"@@transducer/result":u.a},l={"@@transducer/init":String,"@@transducer/step":function(e,t){return e+t},"@@transducer/result":u.a},s={"@@transducer/init":Object,"@@transducer/step":function(e,t){return Object(a.a)(e,Object(o.a)(t)?Object(i.a)(t[0],t[1]):t)},"@@transducer/result":u.a}},function(e,t,r){var n=r(43);t.a="function"==typeof Object.assign?Object.assign:n.a},function(e,t,r){function n(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),r=1,n=arguments.length;r<n;){var u=arguments[r];if(null!=u)for(var o in u)Object(a.a)(o,u)&&(t[o]=u[o]);r+=1}return t}t.a=n;var a=r(10)},function(e,t,r){function n(e){return e}t.a=n},function(e,t,r){var n=r(0),a=Object(n.a)(function(e,t){var r={};return r[e]=t,r});t.a=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=Object(n.a)(function(e,t){return t<e?t:e});t.default=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=Object(n.a)(function(e,t){return e*t});t.default=a},function(e,t,r){var n=r(0),a=r(20),u=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=a.a.init,e.prototype["@@transducer/result"]=a.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},e}(),o=Object(n.a)(function(e,t){return new u(e,t)});t.a=o},function(e,t,r){function n(e,t,r){return function(){for(var o=[],c=0,i=e,f=0;f<t.length||c<arguments.length;){var l;f<t.length&&(!Object(u.a)(t[f])||c>=arguments.length)?l=t[f]:(l=arguments[c],c+=1),o[f]=l,Object(u.a)(l)||(i-=1),f+=1}return i<=0?r.apply(this,o):Object(a.a)(i,n(e,o,r))}}t.a=n;var a=r(9),u=r(6)},function(e,t,r){var n=r(10),a=Object.prototype.toString,u=function(){return"[object Arguments]"===a.call(arguments)?function(e){return"[object Arguments]"===a.call(e)}:function(e){return Object(n.a)("callee",e)}};t.a=u},function(e,t,r){function n(e,t){return function(){return t.call(this,e.apply(this,arguments))}}t.a=n},function(e,t,r){var n=r(27),a=r(1),u=r(53),o=Object(a.a)(Object(n.a)("tail",Object(u.a)(1,1/0)));t.a=o},function(e,t,r){var n=r(27),a=r(7),u=Object(a.a)(Object(n.a)("slice",function(e,t,r){return Array.prototype.slice.call(r,e,t)}));t.a=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(55),a=Object(n.a)(1,"split");t.default=a},function(e,t,r){var n=r(0),a=r(56),u=r(21),o=r(28),c=Object(n.a)(function(e,t){return Object(u.a)(e+1,function(){var r=arguments[e];if(null!=r&&Object(a.a)(r[t]))return r[t].apply(r,Array.prototype.slice.call(arguments,0,e));throw new TypeError(Object(o.a)(r)+' does not have a method named "'+t+'"')})});t.a=c},function(e,t,r){function n(e){return"[object Function]"===Object.prototype.toString.call(e)}t.a=n},function(e,t,r){function n(e,t){var r=function(r){var u=t.concat([e]);return Object(a.a)(r,u)?"<Circular>":n(r,u)},l=function(e,t){return Object(u.a)(function(t){return Object(o.a)(t)+": "+r(e[t])},t.slice().sort())};switch(Object.prototype.toString.call(e)){case"[object Arguments]":return"(function() { return arguments; }("+Object(u.a)(r,e).join(", ")+"))";case"[object Array]":return"["+Object(u.a)(r,e).concat(l(e,Object(f.a)(function(e){return/^\d+$/.test(e)},Object(i.a)(e)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof e?"new Boolean("+r(e.valueOf())+")":e.toString();case"[object Date]":return"new Date("+(isNaN(e.valueOf())?r(NaN):Object(o.a)(Object(c.a)(e)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof e?"new Number("+r(e.valueOf())+")":1/e==-1/0?"-0":e.toString(10);case"[object String]":return"object"==typeof e?"new String("+r(e.valueOf())+")":Object(o.a)(e);case"[object Undefined]":return"undefined";default:if("function"==typeof e.toString){var s=e.toString();if("[object Object]"!==s)return s}return"{"+l(e,Object(i.a)(e)).join(", ")+"}"}}t.a=n;var a=r(58),u=r(19),o=r(65),c=r(66),i=r(12),f=r(67)},function(e,t,r){function n(e,t){return Object(a.a)(t,e,0)>=0}t.a=n;var a=r(59)},function(e,t,r){function n(e,t,r){var n,u;if("function"==typeof e.indexOf)switch(typeof t){case"number":if(0===t){for(n=1/t;r<e.length;){if(0===(u=e[r])&&1/u===n)return r;r+=1}return-1}if(t!==t){for(;r<e.length;){if("number"==typeof(u=e[r])&&u!==u)return r;r+=1}return-1}return e.indexOf(t,r);case"string":case"boolean":case"function":case"undefined":return e.indexOf(t,r);case"object":if(null===t)return e.indexOf(t,r)}for(;r<e.length;){if(Object(a.a)(e[r],t))return r;r+=1}return-1}t.a=n;var a=r(29)},function(e,t,r){function n(e,t,r,n){function c(e,t){return a(e,t,r.slice(),n.slice())}var i=Object(u.a)(e),f=Object(u.a)(t);return!Object(o.a)(function(e,t){return!Object(o.a)(c,t,e)},f,i)}function a(e,t,r,u){if(Object(f.a)(e,t))return!0;var o=Object(s.a)(e);if(o!==Object(s.a)(t))return!1;if(null==e||null==t)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(o){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===Object(c.a)(e.constructor))return e===t;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof t||!Object(f.a)(e.valueOf(),t.valueOf()))return!1;break;case"Date":if(!Object(f.a)(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(e.source!==t.source||e.global!==t.global||e.ignoreCase!==t.ignoreCase||e.multiline!==t.multiline||e.sticky!==t.sticky||e.unicode!==t.unicode)return!1}for(var d=r.length-1;d>=0;){if(r[d]===e)return u[d]===t;d-=1}switch(o){case"Map":return e.size===t.size&&n(e.entries(),t.entries(),r.concat([e]),u.concat([t]));case"Set":return e.size===t.size&&n(e.values(),t.values(),r.concat([e]),u.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var p=Object(l.a)(e);if(p.length!==Object(l.a)(t).length)return!1;var b=r.concat([e]),y=u.concat([t]);for(d=p.length-1;d>=0;){var g=p[d];if(!Object(i.a)(g,t)||!a(t[g],e[g],b,y))return!1;d-=1}return!0}t.a=a;var u=r(61),o=r(62),c=r(63),i=r(10),f=r(64),l=r(12),s=r(24)},function(e,t,r){function n(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}t.a=n},function(e,t,r){function n(e,t,r){for(var n=0,a=r.length;n<a;){if(e(t,r[n]))return!0;n+=1}return!1}t.a=n},function(e,t,r){function n(e){var t=String(e).match(/^function (\w*)/);return null==t?"":t[1]}t.a=n},function(e,t,r){var n=r(0),a=Object(n.a)(function(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t});t.a=a},function(e,t,r){function n(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}t.a=n},function(e,t,r){var n=function(e){return(e<10?"0":"")+e},a="function"==typeof Date.prototype.toISOString?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+n(e.getUTCMonth()+1)+"-"+n(e.getUTCDate())+"T"+n(e.getUTCHours())+":"+n(e.getUTCMinutes())+":"+n(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};t.a=a},function(e,t,r){var n=r(68),a=r(0),u=r(30),o=Object(a.a)(function(e,t){return Object(u.default)(Object(n.a)(e),t)});t.a=o},function(e,t,r){function n(e){return function(){return!e.apply(this,arguments)}}t.a=n},function(e,t,r){function n(e,t){for(var r=0,n=t.length,a=[];r<n;)e(t[r])&&(a[a.length]=t[r]),r+=1;return a}t.a=n},function(e,t,r){function n(e){return"[object Object]"===Object.prototype.toString.call(e)}t.a=n},function(e,t,r){var n=r(0),a=r(20),u=function(){function e(e,t){this.xf=t,this.f=e}return e.prototype["@@transducer/init"]=a.a.init,e.prototype["@@transducer/result"]=a.a.result,e.prototype["@@transducer/step"]=function(e,t){return this.f(t)?this.xf["@@transducer/step"](e,t):e},e}(),o=Object(n.a)(function(e,t){return new u(e,t)});t.a=o},function(e,t,r){function n(){if(0===arguments.length)throw new Error("compose requires at least one argument");return a.default.apply(this,Object(u.a)(arguments))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a=r(3),u=r(73)},function(e,t,r){var n=r(1),a=r(16),u=Object(n.a)(function(e){return Object(a.a)(e)?e.split("").reverse().join(""):Array.prototype.slice.call(e,0).reverse()});t.a=u},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(16),u=Object(n.a)(function(e,t){var r=e<0?t.length+e:e;return Object(a.a)(t)?t.charAt(r):t[r]});t.default=u},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e){var t=(0,c.default)(l.reportCategoriesPerfScore,e),r=(0,c.default)(l.reportCategoriesPWAScore,e),n=(0,c.default)(l.reportCategoriesBestpracticeScore,e),u=(0,c.default)(l.reportCategoriesAccessibilityScore,e),o=(0,c.default)(l.reportCategoriesSEOScore,e),i=d(t),f=d(r),s=d(n),p=d(u),b=d(o);return[["Performance\n "+i].concat(a(t),[i]),["PWA\n "+f].concat(a(r),[f]),["Best Practice\n "+s].concat(a(n),[s]),["Accessibility\n "+p].concat(a(u),[p]),["SEO\n "+b].concat(a(o),[b])]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var o=r(4),c=n(o),i=r(3),f=n(i),l=r(76),s=r(2),d=(0,f.default)(s.maxList,function(e){return e.toFixed(2)},parseFloat)},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.reportCategoriesSEOScore=t.reportCategoriesBestpracticeScore=t.reportCategoriesAccessibilityScore=t.reportCategoriesPWAScore=t.reportCategoriesPerfScore=void 0;var a=r(3),u=n(a),o=r(77),c=n(o),i=r(80),f=n(i),l=r(5),s=n(l),d=(0,s.default)("reportCategories");t.reportCategoriesPerfScore=(0,u.default)(d,(0,c.default)((0,f.default)("id","performance")),(0,s.default)("score")),t.reportCategoriesPWAScore=(0,u.default)(d,(0,c.default)((0,f.default)("id","pwa")),(0,s.default)("score")),t.reportCategoriesAccessibilityScore=(0,u.default)(d,(0,c.default)((0,f.default)("id","accessibility")),(0,s.default)("score")),t.reportCategoriesBestpracticeScore=(0,u.default)(d,(0,c.default)((0,f.default)("id","best-practices")),(0,s.default)("score")),t.reportCategoriesSEOScore=(0,u.default)(d,(0,c.default)((0,f.default)("id","seo")),(0,s.default)("score"))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(18),u=r(78),o=Object(n.a)(Object(a.a)(["find"],u.a,function(e,t){for(var r=0,n=t.length;r<n;){if(e(t[r]))return t[r];r+=1}}));t.default=o},function(e,t,r){var n=r(0),a=r(79),u=r(20),o=function(){function e(e,t){this.xf=t,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=u.a.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,t){return this.f(t)&&(this.found=!0,e=Object(a.a)(this.xf["@@transducer/step"](e,t))),e},e}(),c=Object(n.a)(function(e,t){return new o(e,t)});t.a=c},function(e,t,r){function n(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}}t.a=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),a=r(29),u=Object(n.a)(function(e,t,r){return Object(a.a)(t,r[e])});t.default=u},function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e,t){var r=google.visualization.arrayToDataTable([[].concat(a((0,c.default)(t)),["Budget"])].concat(a((0,i.dataTimings)(t)))),u={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:n({},t.length,{type:"line"})};(0,l.show)(".timings");var o=new google.visualization.ComboChart(document.getElementById(e)),s=new f.suffixFormatter(" ms");t.forEach(function(e,t){s.format(r,t+1)}),s.format(r,t.length+1),(0,l.addDownloadImage)(o,"timings__download"),o.draw(r,u),(0,l.resizeChart)(o,r,u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var o=r(13),c=function(e){return e&&e.__esModule?e:{default:e}}(o),i=r(82),f=r(33),l=r(2)},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.dataTimings=void 0;var u=r(4),o=n(u),c=r(3),i=n(c),f=r(83),l=r(2),s=(0,i.default)(l.minList,l.off,function(e){return e.toFixed(2)},parseFloat);t.dataTimings=function(e){var t=(0,o.default)(f.firstMeaningfulPaint,e),r=(0,o.default)(f.firstVisualChange,e),n=(0,o.default)(f.firstInteractive,e),u=(0,o.default)(f.visuallyComplete,e),c=(0,o.default)(f.timeToFirstByte,e),i=(0,o.default)(f.jsParseCompile,e),l=s(t),d=s(r),p=s(n),b=s(u),y=s(c),g=s(i);return[["First MeaningfulPaint\n "+l].concat(a(t),[l]),["First Visual Change\n "+d].concat(a(r),[d]),["First Interactive\n "+p].concat(a(n),[p]),["Visually Complete\n "+b].concat(a(u),[b]),["Time to first byte\n "+y].concat(a(c),[y]),["JS Parse & Compile\n "+g].concat(a(i),[g])]}},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.timeToFirstByte=t.jsParseCompile=t.minorGC=t.compileScript=t.evaluateScript=t.firstVisualChange=t.visuallyComplete=t.firstInteractive=t.firstMeaningfulPaint=void 0;var a=r(5),u=n(a),o=r(22),c=n(o),i=r(3),f=n(i),l=r(84),s=n(l),d=r(31),p=n(d),b=r(32),y=(t.firstMeaningfulPaint=(0,f.default)(b.audits,(0,c.default)(["first-meaningful-paint","rawValue"])),t.firstInteractive=(0,f.default)(b.audits,(0,c.default)(["first-interactive","rawValue"])),(0,c.default)(["speed-index-metric","extendedInfo","value","timings"])),g=(t.visuallyComplete=(0,f.default)(b.audits,y,(0,u.default)("visuallyComplete")),t.firstVisualChange=(0,f.default)(b.audits,y,(0,u.default)("firstVisualChange")),(0,c.default)(["mainthread-work-breakdown","extendedInfo","value"])),v=t.evaluateScript=(0,f.default)(b.audits,g,(0,u.default)("Evaluate Script")),O=t.compileScript=(0,f.default)(b.audits,g,(0,u.default)("Compile Script")),j=t.minorGC=(0,f.default)(b.audits,g,(0,u.default)("Minor GC"));t.jsParseCompile=(0,s.default)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,p.default)(t)},[v,O,j]),t.timeToFirstByte=(0,f.default)(b.audits,(0,c.default)(["time-to-first-byte","rawValue"]))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=r(19),u=r(21),o=r(26),c=r(17),i=r(11),f=Object(n.a)(function(e,t){return Object(u.a)(Object(i.default)(o.default,0,Object(c.default)("length",t)),function(){var r=arguments,n=this;return e.apply(n,Object(a.a)(function(e){return e.apply(n,r)},t))})});t.default=f},function(e,t,r){var n=r(0),a=Object(n.a)(function(e,t){return Number(e)+Number(t)});t.a=a},function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e,t){var r=google.visualization.arrayToDataTable([[].concat(a((0,i.default)(t)),["Budget"])].concat(a((0,f.dataBytes)(t)))),u={legend:{position:"top",maxLines:1},bar:{groupWidth:"75%"},seriesType:"bars",series:n({},t.length,{type:"line"})},c=(0,o.suffixFormatter)(" KB");t.forEach(function(e,t){c.format(r,t+1)}),c.format(r,t.length+1),(0,l.show)(".bytes");var s=new google.visualization.ComboChart(document.getElementById(e));(0,l.addDownloadImage)(s,"bytes__download"),s.draw(r,u),(0,l.resizeChart)(s,r,u)}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=u;var o=r(33),c=r(13),i=function(e){return e&&e.__esModule?e:{default:e}}(c),f=r(87),l=r(2)},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.dataBytes=void 0;var u=r(4),o=n(u),c=r(3),i=n(c),f=r(88),l=n(f),s=r(89),d=n(s),p=r(90),b=r(2),y=(0,l.default)(d.default,1e3),g=(0,i.default)(b.minList,b.off,function(e){return e.toFixed(2)},parseFloat);t.dataBytes=function(e){var t=(0,o.default)((0,i.default)(p.totalByteWeightValue,y),e),r=(0,o.default)((0,i.default)(p.totalByteWeightJS,y),e),n=(0,o.default)((0,i.default)(p.totalByteWeightCSS,y),e),u=(0,o.default)((0,i.default)(p.totalByteWeightIMG,y),e),c=(0,o.default)((0,i.default)(p.totalByteWeightFONT,y),e),f=(0,o.default)((0,i.default)(p.totalByteWeightJSON,y),e),l=g(t),s=g(r),d=g(n),b=g(u),v=g(c),O=g(f);return[["Total Size\n "+l].concat(a(t),[l]),["Total JS\n "+s].concat(a(r),[s]),["Total CSS\n "+d].concat(a(n),[d]),["Total IMG\n "+b].concat(a(u),[b]),["Total Font\n "+v].concat(a(c),[v]),["Total JSON\n "+O].concat(a(f),[O])]}},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),a=Object(n.a)(function(e,t){return e/t});t.default=a},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default={"@@functional/placeholder":!0}},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.numberOfRequests=t.totalByteWeightFONT=t.totalByteWeightIMG=t.totalByteWeightJSON=t.totalByteWeightCSS=t.totalByteWeightJS=t.totalByteWeightValue=t.totalByteWeightExtendedInfo=void 0;var a=r(30),u=n(a),o=r(22),c=n(o),i=r(3),f=n(i),l=r(17),s=n(l),d=r(5),p=n(d),b=r(31),y=n(b),g=r(91),v=n(g),O=r(32),j=(0,f.default)(O.audits,(0,p.default)("total-byte-weight")),h=t.totalByteWeightExtendedInfo=(0,f.default)(j,(0,c.default)(["extendedInfo","value","results"])),m=(t.totalByteWeightValue=(0,f.default)(j,(0,p.default)("rawValue")),(0,v.default)(/\.js$/g)),w=(0,v.default)(/\.css$/g),_=(0,v.default)(/\.json$/g),S=(0,v.default)(/\.(png|jpg|jpeg|svg|webp)/g),E=(0,v.default)(/\.(ttf|woff|woff2|otf|eot)/g),P=(0,f.default)((0,p.default)("url"),m),A=(0,f.default)((0,p.default)("url"),w),C=(0,f.default)((0,p.default)("url"),_),x=(0,f.default)((0,p.default)("url"),S),M=(0,f.default)((0,p.default)("url"),E);t.totalByteWeightJS=(0,f.default)(h,(0,u.default)(P),(0,s.default)("totalBytes"),y.default),t.totalByteWeightCSS=(0,f.default)(h,(0,u.default)(A),(0,s.default)("totalBytes"),y.default),t.totalByteWeightJSON=(0,f.default)(h,(0,u.default)(C),(0,s.default)("totalBytes"),y.default),t.totalByteWeightIMG=(0,f.default)(h,(0,u.default)(x),(0,s.default)("totalBytes"),y.default),t.totalByteWeightFONT=(0,f.default)(h,(0,u.default)(M),(0,s.default)("totalBytes"),y.default),t.numberOfRequests=(0,f.default)(O.audits,(0,c.default)(["total-byte-weight","extendedInfo","value","totalCompletedRequests"]))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(23),a=r(0),u=r(92),o=r(28),c=Object(a.a)(function(e,t){if(!Object(u.a)(e))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+Object(o.a)(e));return Object(n.a)(e).test(t)});t.default=c},function(e,t,r){function n(e){return"[object RegExp]"===Object.prototype.toString.call(e)}t.a=n},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e.preventDefault(),e.stopPropagation()};t.dragDrop=function(e,t){function r(e){o.classList.add("highlight")}function a(e){o.classList.remove("highlight")}function u(e,t){t(e.dataTransfer.files)}var o=document.getElementById(e);["dragenter","dragover","dragleave","drop"].forEach(function(e){o.addEventListener(e,n,!1)}),["dragenter","dragover"].forEach(function(e){o.addEventListener(e,r,!1)}),["dragleave","drop"].forEach(function(e){o.addEventListener(e,a,!1)}),o.addEventListener("drop",u,!1)}}])},330:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var c=r(7),i=n(c),f=r(222),l=n(f),s=function(e){function t(r){a(this,t);var n=u(this,e.call(this,r));return console.log(r),n.siteDescription=r.data.site.siteMetadata.description,n}return o(t,e),t.prototype.componentDidMount=function(){r(325),this.handleFilesv2=window.handleFiles},t.prototype.render=function(){var e=this;return i.default.createElement("div",null,i.default.createElement("h2",null,"Keep your website under budget"),i.default.createElement("p",{className:"description"},"This version of lighthouse keeper works only with audits created with lighthouse v2. If you created reports using v3 please use the following one"," ",i.default.createElement(l.default,{to:"/",style:{color:"white"}}," ","lighthouse-keeper"," ")),i.default.createElement("p",{className:"description"},this.siteDescription),i.default.createElement("div",{id:"drop-area"},i.default.createElement("form",{className:"my-form"},i.default.createElement("p",null,"Select/Drag multiple Lighthouse reports"),i.default.createElement("input",{type:"file",id:"fileElem",multiple:!0,accept:".json",onChange:function(t){return e.handleFiles(t.target.files)}}),i.default.createElement("label",{className:"button",htmlFor:"fileElem"},"Select reports"))),i.default.createElement("div",{id:"charts"},i.default.createElement("div",{className:"score hidden"},i.default.createElement("h2",{className:"score-title"},"Score"),i.default.createElement("div",{id:"chart_score"}),i.default.createElement("div",{id:"legend"}),i.default.createElement("div",{className:"flexy"},i.default.createElement("a",{id:"score__download",className:"button",download:"score.png"},"Download"))),i.default.createElement("div",{className:"bytes hidden"},i.default.createElement("h2",{className:"chart-bytes"},"Bytes"),i.default.createElement("div",{id:"chart_bytes"}),i.default.createElement("div",{className:"flexy"},i.default.createElement("a",{id:"bytes__download",className:"button",download:"bytes.png"},"Download"))),i.default.createElement("div",{className:"timings hidden"},i.default.createElement("h2",{className:"chart-timings"},"Timings"),i.default.createElement("div",{id:"chart_timings"}),i.default.createElement("div",{className:"flexy"},i.default.createElement("a",{id:"timings__download",className:"button",download:"timings.png"},"Download")))),i.default.createElement("div",{id:"parseError",className:"error hidden"},"Oops something wrong happened!!"))},t}(i.default.Component);t.default=s;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-v-2-js-09d0f6cd18afcbf3820d.js.map