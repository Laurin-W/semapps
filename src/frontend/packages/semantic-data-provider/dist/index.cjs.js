"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("react-admin"),t=require("@material-ui/core/styles"),n=require("jsonld"),a=require("speakingurl"),o=require("crypto"),i=require("@rdfjs/data-model");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=u(e),c=u(n),f=u(a),l=u(o),p=u(i);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){m(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,r,t,n,a,o,i){try{var u=e[o](i),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,a)}function g(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){y(o,n,a,i,u,"next",e)}function u(e){y(o,n,a,i,u,"throw",e)}i(void 0)}))}}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function w(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function x(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}(e,r)||S(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,r){if(e){if("string"==typeof e)return j(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,r):void 0}}function j(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function O(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=S(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw o}}}}var E=["record","source"],C=["record","source"],R=function(e){var t=e.record,n=e.source,a=w(e,C);return null!=t&&t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),s.default.createElement(r.ReferenceArrayField,b({record:t,source:n},a))};R.defaultProps={addLabel:!0};var A=["record","source"],P=function(e){var t=e.record,n=e.source,a=w(e,A);return t[n]&&"object"===v(t[n])&&(t[n]=t[n]["@id"]||t[n].id),s.default.createElement(r.ReferenceField,b({record:t,source:n},a))};P.defaultProps={addLabel:!0};var T=["children","record","filter","source"],I=function(r){var t=r.children,n=r.record,a=r.filter,o=r.source,i=w(r,T),u=x(e.useState(),2),c=u[0],f=u[1];return e.useEffect((function(){if(n&&o&&Array.isArray(null==n?void 0:n[o])){var e=null==n?void 0:n[o].filter((function(e){var r=!0;for(var t in a){var n=e[t];Array.isArray(n)?n.includes(a[t])||(r=!1):n!==a[t]&&(r=!1)}return r})),r=h({},n);r[o]=e.length>0?e:void 0,f(r)}}),[n,o,a]),s.default.createElement(s.default.Fragment,null,s.default.Children.map(t,(function(e,r){return s.default.cloneElement(e,h(h({},i),{},{record:c,addLabel:!0,source:o}))})))},_=["children","groupReference","groupLabel","groupHeader","filterProperty"],U=function(e){var t=r.useResourceContext({});return s.default.createElement(r.ReferenceArrayInput,b({},e,{resource:t,format:function(r){return r?(Array.isArray(r)||(r=[r]),e.format&&(r=e.format(r)),r.map((function(e){return"object"===v(e)?e.id||e["@id"]:e}))):r}}))},q=["reificationClass","children"],M=t.makeStyles({form:{display:"flex"},input:{paddingRight:"20px"}}),D=t.makeStyles({root:{display:"none"}}),B=function(t){var n=e.useContext(r.DataProviderContext),a=x(e.useState(),2),o=a[0],i=a[1];return e.useEffect((function(){n.getDataModel(t).then((function(e){return i(e)}))}),[n,t,i]),o},F=function(){var t=e.useContext(r.DataProviderContext),n=x(e.useState(),2),a=n[0],o=n[1];return e.useEffect((function(){t.getDataServers().then((function(e){return o(e)}))}),[t,o]),a},H="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function L(e,r){return e(r={exports:{}},r.exports),r.exports}var N=L((function(e){var r,t;r=H,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),z=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},W=function(e,r){switch(e){case"@default":return z("default",r);case"@pod":return z("pod",r);case"@authServer":return z("authServer",r);default:return e}},$=function(e,r,t){var n={},a=[];return r=function(e,r){if(Array.isArray(e))return e.includes("@all")?Object.keys(r):e.map((function(e){return W(e,r)}));if("string"==typeof e){if("@all"===e)return Object.keys(r);if("@remote"===e){var t=z("default",r);return Object.keys(r).filter((function(e){return e!==t}))}return[W(e,r)]}return!1}(r,t),Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!r.includes(i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=N(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},J=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=N(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},Y=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},G=function(){var e=g(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,u,s,f,l,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.dataServers,i=t.httpClient,u=t.jsonContext,s=z("authServer",o),(f=Y(r,o))===s||null===(n=o[s])||void 0===n||!n.proxyUrl||!0===(null===(a=o[f])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,i(o[s].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,i(r,{noToken:f!==s});case 11:e.t0=e.sent;case 12:if(l=e.t0,(p=l.json).id=p.id||p["@id"],p["@context"]===u){e.next=19;break}return e.next=18,c.default.compact(p,u);case 18:p=e.sent;case 19:return e.abrupt("return",p);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),Q=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,f,l,p,d,h,v,y,g;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,u=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,G(n.id,e);case 6:if(s=r.sent,null!==(a=u.list)&&void 0!==a&&a.forceArray){f=O(null===(c=u.list)||void 0===c?void 0:c.forceArray);try{for(f.s();!(l=f.n()).done;)p=l.value,s[p]&&!Array.isArray(s[p])&&(s[p]=[s[p]])}catch(e){f.e(e)}finally{f.f()}}if(null===(o=u.list)||void 0===o||!o.dereference){r.next=35;break}h=O(null===(d=u.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((v=h.n()).done){r.next=27;break}if(y=v.value,!s[y]||"string"!=typeof s[y]||!s[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,G(s[y],e);case 18:delete(g=r.sent)["@context"],s[y]=g,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:s});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},V=function(e){return e&&e.rawFile&&e.rawFile instanceof File},K=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return N(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},X=function(){var e=g(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=K(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,u=void 0,i="",u=o.split("."),u.length>1&&(i=u.pop(),o=u.join(".")),f.default(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,u}),e)})));return function(r,t){return e.apply(this,arguments)}}(),Z=function(){var e=g(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!V(r[n][a])){e.next=11;break}return e.next=10,X(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!V(r[n])){e.next=20;break}return e.next=19,X(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ee=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,f,l,p,d,v,y,g,m,b,w;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,u=e.resources,s=e.httpClient,c=e.jsonContext,f=u[t],l=new Headers,null!==(a=f.fieldsMapping)&&void 0!==a&&a.title&&(Array.isArray(f.fieldsMapping.title)?l.set("Slug",f.fieldsMapping.title.map((function(e){return n.data[e]})).join(" ")):l.set("Slug",n.data[f.fieldsMapping.title])),null===(o=f.create)||void 0===o||!o.container){r.next=10;break}d=Object.keys(f.create.container)[0],p=N(i[d].baseUrl,Object.values(f.create.container)[0]),r.next=20;break;case 10:if(d=(null===(v=f.create)||void 0===v?void 0:v.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(y=$(f.types,[d],i),(g=Object.keys(y))&&0!==g.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(f.types)," found on server ").concat(d));case 17:if(!(g.length>1||y[g[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(f.types)," on server ").concat(d));case 19:p=y[g[0]][0];case 20:return r.next=22,Z(n.data,e);case 22:return n.data=r.sent,r.next=25,s(p,{method:"POST",headers:l,body:JSON.stringify(h({"@context":c,"@type":f.types},n.data)),noToken:!0!==i[d].authServer});case 25:return m=r.sent,b=m.headers,w=b.get("Location"),r.next=30,Q(e)(t,{id:w});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},re=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=Y(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},te=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=O(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=17;break}return s=u.value,r.prev=7,r.next=10,a(s,{method:"DELETE"});case 10:o.push(s),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},ne=function(e){return function(){return e.dataServers}},ae=function(e){return function(r){return e.resources[r]}},oe=function(){var e=g(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,s,f,l,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,u=a.jsonContext,s=Object.keys(r).reduce((function(e,t){return h(h({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),f=Object.keys(s).map((function(e){return i(e,{noToken:!s[e]||!0!==o[s[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==u?c.default.compact(r,u):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(f);case 5:if(0!==(l=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return l=(p=[].concat).apply.apply(p,k(l)),d=l.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(d=d.filter((function(e){return Object.entries(n.filter).some((function(r){var t=x(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(d=d.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(d=d.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:d,total:l.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),ie=function(e){var r,t={};if(e){var n,a=O(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=h(h({},t),r.reduce((function(e,r){return m({},r,h({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},ue=L((function(e,r){var t;e.exports=t=t||function(e,r){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&void 0!==H&&H.crypto&&(t=H.crypto),!t)try{t=l.default}catch(e){}var n=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),o={},i=o.lib={},u=i.Base={extend:function(e){var r=a(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=i.WordArray=u.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var r=this.words,t=e.words,n=this.sigBytes,a=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<a;o++){var i=t[o>>>2]>>>24-o%4*8&255;r[n+o>>>2]|=i<<24-(n+o)%4*8}else for(var u=0;u<a;u+=4)r[n+u>>>2]=t[u>>>2];return this.sigBytes+=a,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=e.ceil(t/4)},clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new s.init(r,e)}}),c=o.enc={},f=c.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n+=2)t[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new s.init(t,r/2)}},p=c.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n++)t[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new s.init(t,r)}},d=c.Utf8={stringify:function(e){try{return decodeURIComponent(escape(p.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return p.parse(unescape(encodeURIComponent(e)))}},h=i.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=d.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(r){var t,n=this._data,a=n.words,o=n.sigBytes,i=this.blockSize,u=o/(4*i),c=(u=r?e.ceil(u):e.max((0|u)-this._minBufferSize,0))*i,f=e.min(4*c,o);if(c){for(var l=0;l<c;l+=i)this._doProcessBlock(a,l);t=a.splice(0,c),n.sigBytes-=f}return new s.init(t,f)},clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=h.extend({cfg:u.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new v.HMAC.init(e,t).finalize(r)}}});var v=o.algo={};return o}(Math)})),se=L((function(e,r){var t;e.exports=(t=ue,function(e){var r=t,n=r.lib,a=n.WordArray,o=n.Hasher,i=r.algo,u=[];!function(){for(var r=0;r<64;r++)u[r]=4294967296*e.abs(e.sin(r+1))|0}();var s=i.MD5=o.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var n=r+t,a=e[n];e[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,i=e[r+0],s=e[r+1],d=e[r+2],h=e[r+3],v=e[r+4],y=e[r+5],g=e[r+6],m=e[r+7],b=e[r+8],w=e[r+9],x=e[r+10],k=e[r+11],S=e[r+12],j=e[r+13],O=e[r+14],E=e[r+15],C=o[0],R=o[1],A=o[2],P=o[3];C=c(C,R,A,P,i,7,u[0]),P=c(P,C,R,A,s,12,u[1]),A=c(A,P,C,R,d,17,u[2]),R=c(R,A,P,C,h,22,u[3]),C=c(C,R,A,P,v,7,u[4]),P=c(P,C,R,A,y,12,u[5]),A=c(A,P,C,R,g,17,u[6]),R=c(R,A,P,C,m,22,u[7]),C=c(C,R,A,P,b,7,u[8]),P=c(P,C,R,A,w,12,u[9]),A=c(A,P,C,R,x,17,u[10]),R=c(R,A,P,C,k,22,u[11]),C=c(C,R,A,P,S,7,u[12]),P=c(P,C,R,A,j,12,u[13]),A=c(A,P,C,R,O,17,u[14]),C=f(C,R=c(R,A,P,C,E,22,u[15]),A,P,s,5,u[16]),P=f(P,C,R,A,g,9,u[17]),A=f(A,P,C,R,k,14,u[18]),R=f(R,A,P,C,i,20,u[19]),C=f(C,R,A,P,y,5,u[20]),P=f(P,C,R,A,x,9,u[21]),A=f(A,P,C,R,E,14,u[22]),R=f(R,A,P,C,v,20,u[23]),C=f(C,R,A,P,w,5,u[24]),P=f(P,C,R,A,O,9,u[25]),A=f(A,P,C,R,h,14,u[26]),R=f(R,A,P,C,b,20,u[27]),C=f(C,R,A,P,j,5,u[28]),P=f(P,C,R,A,d,9,u[29]),A=f(A,P,C,R,m,14,u[30]),C=l(C,R=f(R,A,P,C,S,20,u[31]),A,P,y,4,u[32]),P=l(P,C,R,A,b,11,u[33]),A=l(A,P,C,R,k,16,u[34]),R=l(R,A,P,C,O,23,u[35]),C=l(C,R,A,P,s,4,u[36]),P=l(P,C,R,A,v,11,u[37]),A=l(A,P,C,R,m,16,u[38]),R=l(R,A,P,C,x,23,u[39]),C=l(C,R,A,P,j,4,u[40]),P=l(P,C,R,A,i,11,u[41]),A=l(A,P,C,R,h,16,u[42]),R=l(R,A,P,C,g,23,u[43]),C=l(C,R,A,P,w,4,u[44]),P=l(P,C,R,A,S,11,u[45]),A=l(A,P,C,R,E,16,u[46]),C=p(C,R=l(R,A,P,C,d,23,u[47]),A,P,i,6,u[48]),P=p(P,C,R,A,m,10,u[49]),A=p(A,P,C,R,O,15,u[50]),R=p(R,A,P,C,y,21,u[51]),C=p(C,R,A,P,S,6,u[52]),P=p(P,C,R,A,h,10,u[53]),A=p(A,P,C,R,x,15,u[54]),R=p(R,A,P,C,s,21,u[55]),C=p(C,R,A,P,b,6,u[56]),P=p(P,C,R,A,E,10,u[57]),A=p(A,P,C,R,g,15,u[58]),R=p(R,A,P,C,j,21,u[59]),C=p(C,R,A,P,v,6,u[60]),P=p(P,C,R,A,k,10,u[61]),A=p(A,P,C,R,d,15,u[62]),R=p(R,A,P,C,w,21,u[63]),o[0]=o[0]+C|0,o[1]=o[1]+R|0,o[2]=o[2]+A|0,o[3]=o[3]+P|0},_doFinalize:function(){var r=this._data,t=r.words,n=8*this._nDataBytes,a=8*r.sigBytes;t[a>>>5]|=128<<24-a%32;var o=e.floor(n/4294967296),i=n;t[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.sigBytes=4*(t.length+1),this._process();for(var u=this._hash,s=u.words,c=0;c<4;c++){var f=s[c];s[c]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return u},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function c(e,r,t,n,a,o,i){var u=e+(r&t|~r&n)+a+i;return(u<<o|u>>>32-o)+r}function f(e,r,t,n,a,o,i){var u=e+(r&n|t&~n)+a+i;return(u<<o|u>>>32-o)+r}function l(e,r,t,n,a,o,i){var u=e+(r^t^n)+a+i;return(u<<o|u>>>32-o)+r}function p(e,r,t,n,a,o,i){var u=e+(t^(r|~n))+a+i;return(u<<o|u>>>32-o)+r}r.MD5=o._createHelper(s),r.HmacMD5=o._createHmacHelper(s)}(Math),t.MD5)})),ce=p.default.namedNode,fe=p.default.quad,le=p.default.variable,pe=function(e){return se(e)},de=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return{type:"optional",patterns:[{type:"bgp",triples:t.query},e(r,t.node)]}}))},he=function(e,r){var t=[],n=function(e){var r=[];if(e){var t,n=O(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(n&&r&&r.length>0){var a,o=O(n);try{var i=function(){var e=a.value,n=function(e){return e.includes("/")&&e.split("/")[0]}(e),o=function(e){return e.includes("/")?e.split("/")[1]:e}(e),i=pe(e),u=n?pe(n):"1",s=o.split(":")[0],c=o.split(":")[1],f=r.find((function(e){return e.prefix===s})),l=[fe(le("s"+u),ce(f.url+c),le("s"+i)),fe(le("s"+i),le("p"+i),le("o"+i))];t.push({node:e,parentNode:n,query:l,filter:""})};for(o.s();!(a=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}return{construct:t.length>0?t.map((function(e){return e.query})).reduce((function(e,r){return e.concat(r)})):null,where:de(t)}}return{construct:"",where:""}},ve=p.default.literal,ye=p.default.namedNode,ge=p.default.triple,me=p.default.variable,be=new(0,require("sparqljs").Generator)({}),we=["q","sparqlWhere","_servers"],xe=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o={queryType:"CONSTRUCT",template:[ge(me("s1"),me("p1"),me("o1"))],where:[{type:"filter",expression:{type:"operation",operator:"in",args:[me("containerUri"),r.map((function(e){return ye(e)}))]}},{type:"bgp",triples:[ge(me("containerUri"),ye("http://www.w3.org/ns/ldp#contains"),me("s1"))]},{type:"filter",expression:{type:"operation",operator:"isiri",args:[me("s1")]}}],type:"query",prefixes:Object.fromEntries(a.map((function(e){return[e.prefix,e.url]})))};if(t&&Object.keys(t).length>0){var i=t.sparqlWhere&&Object.keys(t.sparqlWhere).length>0,u=t.q&&t.q.length>0;i&&[].concat(t.sparqlWhere).forEach((function(e){o.where.push(e)})),u&&o.where.push({type:"group",patterns:[{queryType:"SELECT",variables:[me("s1")],where:[{type:"bgp",triples:[ge(me("s1"),me("p1"),me("o1"))]},{type:"filter",expression:{type:"operation",operator:"isliteral",args:[me("o1")]}},{type:"filter",expression:{type:"operation",operator:"regex",args:[{type:"operation",operator:"lcase",args:[{type:"operation",operator:"str",args:[me("o1")]}]},ve(t.q.toLowerCase(),"",ye("http://www.w3.org/2001/XMLSchema#string"))]}}],type:"query"}]}),Object.keys(t).forEach((function(e){if(!we.includes(e)){var r="a"===e?t[e]:e,n=r.split(":")[0],i=r.split(":")[1],u=a.find((function(e){return e.prefix===n})),s="a"===e?"http://www.w3.org/1999/02/22-rdf-syntax-ns#type":u.url+i,c="a"===e?u.url+i:t[e];o.where.unshift({type:"bgp",triples:[ge(me("s1"),ye(s),ye(c))]})}}))}var s=he(n,a);return s&&s.construct&&(o.where=o.where.concat(s.where),o.template=o.template.concat(s.construct)),o.where.push({type:"bgp",triples:[ge(me("s1"),me("p1"),me("o1"))]}),be.stringify(o)},ke=function(){var e=g(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,s,f,l,p,d,v,y,g,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,u=a.resources,s=a.httpClient,f=a.jsonContext,l=a.ontologies,p=u[t],d=h({"@context":f,"@type":p.types,"@embed":"@never"},ie(null===(o=p.list)||void 0===o?void 0:o.dereference)),v=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,u,f=xe({containers:r[e],params:h(h({},n),{},{filter:h(h({},null===(o=p.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:null===(u=p.list)||void 0===u?void 0:u.dereference,ontologies:l});s(i[e].sparqlEndpoint,{method:"POST",body:f,noToken:!0!==i[e].authServer}).then((function(e){var r=e.json;return c.default.frame(r,d,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(v);case 6:if(0!==(y=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return y=(g=[].concat).apply.apply(g,k(y)),m=y.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(m=m.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(m=m.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:m,total:y.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Se=function(e,r){var t={};return Object.keys(e).forEach((function(n){if(!r[n])throw new Error("No server found with key "+n);t[n]=[],e[n].forEach((function(e){t[n].push(N(r[n].baseUrl,e))}))})),t},je=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t){var n,a,o,i,u,s,c,f,l,p,d,h=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=h.length>1&&void 0!==h[1]?h[1]:{},u=e.dataServers,s=e.resources,c=s[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(null!==(n=i.filter)&&void 0!==n&&n._servers||null===(a=c.list)||void 0===a||!a.containers){r.next=11;break}if(!Array.isArray(null===(l=c.list)||void 0===l?void 0:l.containers)){r.next=8;break}throw new Error("The list.containers property of ".concat(t," dataModel must be of type object ({ serverKey: [containerUri] })"));case 8:f=Se(c.list.containers,u),r.next=12;break;case 11:f=$(c.types,(null===(p=i.filter)||void 0===p?void 0:p._servers)||(null===(d=c.list)||void 0===d?void 0:d.servers),u);case 12:if(null===(o=c.list)||void 0===o||!o.fetchContainer){r.next=16;break}return r.abrupt("return",oe(f,t,i,e));case 16:return r.abrupt("return",ke(f,t,i,e));case 17:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Oe=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=O(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=21;break}return s="object"===v(s=u.value)?s["@id"]:s,r.prev=8,r.next=11,Q(e)(t,{id:s});case 11:c=r.sent,f=c.data,o.push(f),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:s});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},Ee=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=h(h({},n.filter),{},m({},n.target,n.id)),delete n.target,r.next=4,je(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Ce=function(e){return function(){var r=g(regeneratorRuntime.mark((function r(t,n){var a,o,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,u=Y(n.id,a),r.next=4,Z(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(h({"@context":i},n.data)),noToken:!u||!0!==a[u].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Re(e){this.message=e}Re.prototype=new Error,Re.prototype.name="InvalidCharacterError";var Ae="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Re("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Pe(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(Ae(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return Ae(r)}}function Te(e){this.message=e}function Ie(e,r){if("string"!=typeof e)throw new Te("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(Pe(e.split(".")[t]))}catch(e){throw new Te("Invalid token specified: "+e.message)}}Te.prototype=new Error,Te.prototype.name="InvalidTokenError";var _e=function(){var e=g(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,u,s,c,f,l,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=z("pod",t),i=z("authServer",t),!a){e.next=24;break}return u=Ie(a),s=u.webId,e.prev=6,e.next=9,n(s);case 9:f=e.sent,l=f.json,c=l,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=N(s,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=c.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||N(s,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=c.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),Ue=function(){var e=g(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=O(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}();exports.DateTimeInput=function(e){return s.default.createElement(r.DateTimeInput,b({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.FilterHandler=I,exports.GroupedReferenceHandler=function(e){var t=e.children,n=e.groupReference,a=e.groupLabel,o=e.groupHeader,i=e.filterProperty,u=w(e,_),c=r.useQueryWithStore({type:"getList",resource:n,payload:{}}).data;return s.default.createElement(s.default.Fragment,null,null==c?void 0:c.map((function(e,r){var n={};return n[i]=e.id,s.default.createElement(s.default.Fragment,null,o&&o(h(h({},u),{},{group:e})),s.default.createElement(I,b({},u,{filter:n,label:e[a]}),t))})))},exports.ImageField=function(e){var t=e.record,n=e.source,a=w(e,E);return"string"==typeof t&&(t=m({},n,t)),s.default.createElement(r.ImageField,b({record:t,source:n},a))},exports.ReferenceArrayField=R,exports.ReferenceArrayInput=U,exports.ReferenceField=P,exports.ReferenceInput=function(e){var t=r.useResourceContext({});return s.default.createElement(r.ReferenceInput,b({},e,{resource:t,format:function(r){return r?(e.format&&(r=e.format(r)),"object"===v(r)?r.id||r["@id"]:r):r}}))},exports.ReificationArrayInput=function(e){var t=e.reificationClass;e.children;var n=w(e,q),a=M(),o=D();return s.default.createElement(r.ArrayInput,n,s.default.createElement(r.SimpleFormIterator,{classes:{form:a.form}},s.default.Children.map(e.children,(function(e,r){return s.default.cloneElement(e,{className:a.input})})),s.default.createElement(r.TextInput,{className:o.root,source:"type",initialValue:t})))},exports.UriArrayField=R,exports.UriArrayInput=U,exports.buildDereferenceQuery=he,exports.buildSparqlQuery=xe,exports.dataProvider=function(e){if(!z("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=_e(e),t=Ue(e),n=function(e){return g(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(je(e)),getMany:n(Oe(e)),getManyReference:n(Ee(e)),getOne:n(Q(e)),create:n(ee(e)),update:n(Ce(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(re(e)),deleteMany:n(te(e)),getDataModel:n(ae(e)),getDataServers:n(ne(e))}},exports.httpClient=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.headers||(t.headers=new Headers),t.method){case"POST":case"PATCH":case"PUT":t.headers.has("Accept")||t.headers.set("Accept","application/ld+json"),t.headers.has("Content-Type")||t.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:t.headers.has("Accept")||t.headers.set("Accept","application/ld+json")}if(!t.noToken){var n=localStorage.getItem("token");n&&t.headers.set("Authorization","Bearer ".concat(n))}return r.fetchUtils.fetchJson(e,t)},exports.useContainers=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"@all",n=B(r),a=F(),o=e.useState(),i=x(o,2),u=i[0],s=i[1];return e.useEffect((function(){n&&a&&s($(n.types,t,a))}),[n,a,t]),u},exports.useCreateContainer=function(r){var t=B(r),n=F(),a=x(e.useState(),2),o=a[0],i=a[1];return e.useEffect((function(){var e,r;if(t&&n)if(null!==(e=t.create)&&void 0!==e&&e.container){var a=x(Object.entries(t.create.container)[0],2),o=a[0],u=a[1];i(N(n[o].baseUrl,u))}else if(null!==(r=t.create)&&void 0!==r&&r.server){var s;i(J(t.types,null===(s=t.create)||void 0===s?void 0:s.server,n))}else{var c=z("default",n);i(J(t.types,c,n))}}),[t,n,i]),o},exports.useDataModel=B,exports.useDataServers=F;
//# sourceMappingURL=index.cjs.js.map
