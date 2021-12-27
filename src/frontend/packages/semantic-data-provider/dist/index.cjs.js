"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react"),t=e(r),n=require("react-admin"),a=require("@material-ui/core/styles"),o=e(require("jsonld")),i=e(require("speakingurl")),c=e(require("crypto"));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,r,t,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?r(u):Promise.resolve(u).then(n,a)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function y(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||b(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){if(e){if("string"==typeof e)return g(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?g(e,r):void 0}}function g(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function x(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=b(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var w=function(e){var r=e.record,a=e.source,o=h(e,["record","source"]);return(null==r?void 0:r[a])&&(Array.isArray(r[a])||(r[a]=[r[a]]),r[a]=r[a].map((function(e){return e["@id"]||e.id||e}))),t.createElement(n.ReferenceArrayField,p({record:r,source:a},o))};w.defaultProps={addLabel:!0};var k=function(e){var r=e.record,a=e.source,o=h(e,["record","source"]);return r[a]&&"object"===u(r[a])&&(r[a]=r[a]["@id"]||r[a].id),t.createElement(n.ReferenceField,p({record:r,source:a},o))};k.defaultProps={addLabel:!0};var S=function(e){var n=e.children,a=e.record,o=e.filter,i=e.source,c=h(e,["children","record","filter","source"]),u=y(r.useState(),2),s=u[0],l=u[1];return r.useEffect((function(){if(a&&i&&Array.isArray(null==a?void 0:a[i])){var e=null==a?void 0:a[i].filter((function(e){var r=!0;for(var t in o){var n=e[t];Array.isArray(n)?n.includes(o[t])||(r=!1):n!==o[t]&&(r=!1)}return r})),r=v({},a);r[i]=e.length>0?e:void 0,l(r)}}),[a,i,o]),t.createElement(t.Fragment,null,t.Children.map(n,(function(e,r){return t.cloneElement(e,v(v({},c),{},{record:s,addLabel:!0,source:i}))})))},j=function(e){var r=n.useResourceContext({});return t.createElement(n.ReferenceArrayInput,p({},e,{resource:r,format:function(r){return r?(Array.isArray(r)||(r=[r]),e.format&&(r=e.format(r)),r.map((function(e){return"object"===u(e)?e.id||e["@id"]:e}))):r}}))},E=a.makeStyles({form:{display:"flex"},input:{paddingRight:"20px"}}),O=a.makeStyles({root:{display:"none"}}),R=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},C=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},A=function(){var e=l(regeneratorRuntime.mark((function e(r,t){var n,a,i,c,u,s,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.dataServers,c=t.httpClient,u=t.jsonContext,s=R("authServer",i),(l=C(r,i))===s||!(null===(n=i[s])||void 0===n?void 0:n.proxyUrl)||!0===(null===(a=i[l])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,c(i[s].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,c(r,{noToken:l!==s});case 11:e.t0=e.sent;case 12:if(f=e.t0,(p=f.json).id=p.id||p["@id"],p["@context"]===u){e.next=19;break}return e.next=18,o.compact(p,u);case 18:p=e.sent;case 19:return e.abrupt("return",p);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),T=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,l,f,p,d,v,h,y,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,c=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,A(n.id,e);case 6:if(u=r.sent,null===(a=c.list)||void 0===a?void 0:a.forceArray){l=x(null===(s=c.list)||void 0===s?void 0:s.forceArray);try{for(l.s();!(f=l.n()).done;)p=f.value,u[p]&&!Array.isArray(u[p])&&(u[p]=[u[p]])}catch(e){l.e(e)}finally{l.f()}}if(!(null===(o=c.list)||void 0===o?void 0:o.dereference)){r.next=35;break}v=x(null===(d=c.list)||void 0===d?void 0:d.dereference),r.prev=10,v.s();case 12:if((h=v.n()).done){r.next=27;break}if(y=h.value,!u[y]||"string"!=typeof u[y]||!u[y].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,A(u[y],e);case 18:delete(m=r.sent)["@context"],u[y]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),v.e(r.t1);case 32:return r.prev=32,v.f(),r.finish(32);case 35:return r.abrupt("return",{data:u});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var I=function(e,r){return e(r={exports:{}},r.exports),r.exports}((function(e){var r,t;r=P,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),F=function(e){return e&&e.rawFile&&e.rawFile instanceof File},U=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return I(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},L=function(){var e=l(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=U(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,c=void 0,u=void 0,c="",u=o.split("."),u.length>1&&(c=u.pop(),o=u.join(".")),i(o,{lang:"fr"})+"."+c),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,c,u}),e)})));return function(r,t){return e.apply(this,arguments)}}(),q=function(){var e=l(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!F(r[n][a])){e.next=11;break}return e.next=10,L(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!F(r[n])){e.next=20;break}return e.next=19,L(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),N=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=I(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},D=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u,s,l,f,p,d,h,y,m,b,g,x,w,k;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,c=e.resources,u=e.httpClient,s=e.jsonContext,l=c[t],f=new Headers,(null===(a=l.fieldsMapping)||void 0===a?void 0:a.title)&&f.set("Slug",n.data[null===(p=l.fieldsMapping)||void 0===p?void 0:p.title]),!(null===(o=l.create)||void 0===o?void 0:o.container)){r.next=10;break}d=null===(y=l.create)||void 0===y?void 0:y.container,h=C(d,i),r.next=20;break;case 10:if(h=(null===(m=l.create)||void 0===m?void 0:m.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(b=N(l.types,[h],i),(g=Object.keys(b))&&0!==g.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(l.types)," found on server ").concat(h));case 17:if(!(g.length>1||b[g[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(l.types)," on server ").concat(h));case 19:d=b[g[0]][0];case 20:return r.next=22,q(n.data,e);case 22:return n.data=r.sent,r.next=25,u(d,{method:"POST",headers:f,body:JSON.stringify(v({"@context":s,"@type":l.types},n.data)),noToken:!0!==i[h].authServer});case 25:return x=r.sent,w=x.headers,k=w.get("Location"),r.next=30,T(e)(t,{id:k});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},H=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=C(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},M=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=x(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=17;break}return u=c.value,r.prev=7,r.next=10,a(u,{method:"DELETE"});case 10:o.push(u),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},J=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=I(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},$=function(e){return function(r){var t,n,a,o,i=e.dataServers,c=e.resources[r];if(!c)throw new Error("Resource ".concat(r," is not mapped in resources file"));if(null===(t=c.create)||void 0===t?void 0:t.container)return null===(a=c.create)||void 0===a?void 0:a.container;if(null===(n=c.create)||void 0===n?void 0:n.server)return J(c.types,null===(o=c.create)||void 0===o?void 0:o.server,i);var u=R("default",i);return J(c.types,u,i)}},W=function(){var e=l(regeneratorRuntime.mark((function e(r,t,n,a){var i,c,u,s,l,f,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,c=a.httpClient,u=a.jsonContext,s=Object.keys(r).reduce((function(e,t){return v(v({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),l=Object.keys(s).map((function(e){return c(e,{noToken:!s[e]||!0!==i[s[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==u?o.compact(r,u):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(l);case 5:if(0!==(f=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return f=(p=[].concat).apply.apply(p,m(f)),d=f.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(d=d.filter((function(e){return Object.entries(n.filter).some((function(r){var t=y(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(d=d.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(d=d.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:d,total:f.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Y=function(e){var r,t={};if(e){var n,a=x(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=v(v({},t),r.reduce((function(e,r){return f({},r,v({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},G=function(e){return c.createHash("md5").update(e).digest("hex")},Q=function(e){return e.includes("/")&&e.split("/")[0]},X=function(e){return e.includes("/")?e.split("/")[1]:e},_=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return"\n      OPTIONAL { \n        ".concat(t.query,"\n        ").concat(t.filter,"\n        ").concat(e(r,t.node),"\n      }\n    ")})).join("\n")},z=function(e){var r=[],t=function(e){var r=[];if(e){var t,n=x(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(t){var n,a=x(t);try{for(a.s();!(n=a.n()).done;){var o=n.value,i=Q(o),c=X(o),u=G(o),s=i?G(i):"1";r.push({node:o,parentNode:i,query:"?s".concat(s," ").concat(c," ?s").concat(u," .\n?s").concat(u," ?p").concat(u," ?o").concat(u," ."),filter:""})}}catch(e){a.e(e)}finally{a.f()}return{construct:r.map((function(e){return e.query})).join("\n"),where:_(r)}}return{construct:"",where:""}},B=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o="",i="";t&&(t.q&&t.q.length>0&&(o+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(t.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      '),delete t.q),Object.keys(t).forEach((function(e){if(t[e]){var r=t[e].startsWith("http")?"<".concat(t[e],">"):t[e];i+="?s1 ".concat(e," ").concat(r," .")}})));var c=z(n);return"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(a),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2 .\n      ").concat(c.construct,"\n    }\n    WHERE {\n      ").concat(i,"\n      ?containerUri ldp:contains ?s1 .\n      FILTER( ?containerUri IN (").concat(r.map((function(e){return"<".concat(e,">")})).join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ").concat(o,"\n      ").concat(c.where,"\n      ?s1 ?p2 ?o2 .\n    }\n  ")},V=function(){var e=l(regeneratorRuntime.mark((function e(r,t,n,a){var i,c,u,s,l,f,p,d,h,y,b,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.dataServers,u=a.resources,s=a.httpClient,l=a.jsonContext,f=a.ontologies,p=u[t],d=v({"@context":l,"@type":p.types,"@embed":"@never"},Y(null===(i=p.list)||void 0===i?void 0:i.dereference)),h=Object.keys(r).map((function(e){return new Promise((function(t,a){var i,u,l=B({containers:r[e],params:v(v({},n),{},{filter:v(v({},null===(i=p.list)||void 0===i?void 0:i.filter),n.filter)}),dereference:null===(u=p.list)||void 0===u?void 0:u.dereference,ontologies:f});s(c[e].sparqlEndpoint,{method:"POST",body:l,noToken:!0!==c[e].authServer}).then((function(e){var r=e.json;return o.frame(r,d,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(h);case 6:if(0!==(y=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return y=(b=[].concat).apply.apply(b,m(y)),g=y.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(g=g.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(g=g.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:g,total:y.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),Z=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t){var n,a,o,i,c,u,s,l,f,p,d=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},c=e.dataServers,u=e.resources,s=u[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(l=(null===(n=s.list)||void 0===n?void 0:n.containers)&&(null===(a=s.list)||void 0===a?void 0:a.containers.length)>0?null===(f=s.list)||void 0===f?void 0:f.containers:N(s.types,null===(p=s.list)||void 0===p?void 0:p.servers,c),!(null===(o=s.list)||void 0===o?void 0:o.fetchContainer)){r.next=10;break}return r.abrupt("return",W(l,t,i,e));case 10:return r.abrupt("return",V(l,t,i,e));case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},K=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,c,s,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=x(n.ids),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=21;break}return s="object"===u(s=c.value)?s["@id"]:s,r.prev=8,r.next=11,T(e)(t,{id:s});case 11:l=r.sent,f=l.data,o.push(f),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:s});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},ee=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=v(v({},n.filter),{},f({},n.target,n.id)),delete n.target,r.next=4,Z(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},re=function(e){return function(){var r=l(regeneratorRuntime.mark((function r(t,n){var a,o,i,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,c=C(n.id,a),r.next=4,q(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(v({"@context":i},n.data)),noToken:!c||!0!==a[c].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function te(e){this.message=e}te.prototype=new Error,te.prototype.name="InvalidCharacterError";var ne="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new te("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function ae(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(ne(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return ne(r)}}function oe(e){this.message=e}function ie(e,r){if("string"!=typeof e)throw new oe("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(ae(e.split(".")[t]))}catch(e){throw new oe("Invalid token specified: "+e.message)}}oe.prototype=new Error,oe.prototype.name="InvalidTokenError";var ce=function(){var e=l(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,c,u,s,l,f,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=R("pod",t),i=R("authServer",t),!a){e.next=24;break}return c=ie(a),u=c.webId,e.prev=6,e.next=9,n(u);case 9:l=e.sent,f=l.json,s=f,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=I(u,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=s.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||I(u,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=s.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),ue=function(){var e=l(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=x(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}();exports.DateTimeInput=function(e){return t.createElement(n.DateTimeInput,p({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.FilterHandler=S,exports.GroupedReferenceHandler=function(e){var r=e.children,a=e.groupReference,o=e.groupLabel,i=e.groupHeader,c=e.filterProperty,u=h(e,["children","groupReference","groupLabel","groupHeader","filterProperty"]),s=n.useQueryWithStore({type:"getList",resource:a,payload:{}}).data;return t.createElement(t.Fragment,null,null==s?void 0:s.map((function(e,n){var a={};return a[c]=e.id,t.createElement(t.Fragment,null,i&&i(v(v({},u),{},{group:e})),t.createElement(S,p({},u,{filter:a,label:e[o]}),r))})))},exports.ImageField=function(e){var r=e.record,a=e.source,o=h(e,["record","source"]);return"string"==typeof r&&(r=f({},a,r)),t.createElement(n.ImageField,p({record:r,source:a},o))},exports.ReferenceArrayField=w,exports.ReferenceArrayInput=j,exports.ReferenceField=k,exports.ReferenceInput=function(e){var r=n.useResourceContext({});return t.createElement(n.ReferenceInput,p({},e,{resource:r,format:function(r){return r?(e.format&&(r=e.format(r)),"object"===u(r)?r.id||r["@id"]:r):r}}))},exports.ReificationArrayInput=function(e){var r=e.reificationClass,a=(e.children,h(e,["reificationClass","children"])),o=E(),i=O();return t.createElement(n.ArrayInput,a,t.createElement(n.SimpleFormIterator,{classes:{form:o.form}},t.Children.map(e.children,(function(e,r){return t.cloneElement(e,{className:o.input})})),t.createElement(n.TextInput,{className:i.root,source:"type",initialValue:r})))},exports.UriArrayField=w,exports.UriArrayInput=j,exports.buildDereferenceQuery=z,exports.buildSparqlQuery=B,exports.dataProvider=function(e){if(!R("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=ce(e),t=ue(e),n=function(e){return l(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(Z(e)),getOne:n(T(e)),getMany:n(K(e)),getManyReference:n(ee(e)),create:n(D(e)),update:n(re(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(H(e)),deleteMany:n(M(e)),getCreateContainer:n($(e))}},exports.httpClient=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return n.fetchUtils.fetchJson(e,r)},exports.useCreateContainer=function(e){var t=r.useContext(n.DataProviderContext),a=y(r.useState(),2),o=a[0],i=a[1];return r.useEffect((function(){e&&t.getCreateContainer(e).then((function(e){return i(e)}))}),[e]),o};
//# sourceMappingURL=index.cjs.js.map
