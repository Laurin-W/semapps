"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react")),r=require("react-admin"),n=e(require("jsonld"));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function c(e){o(i,n,a,c,u,"next",e)}function u(e){o(i,n,a,c,u,"throw",e)}c(void 0)}))}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var y=function(e){var n=e.record,a=e.source,o=f(e,["record","source"]);return n[a]&&(Array.isArray(n[a])?n[a]=n[a].map((function(e){return e["@id"]||e})):n[a]=[n[a]]),t.createElement(r.ReferenceArrayField,u({record:n,source:a},o))};y.defaultProps={addLabel:!0};var m=function(e){var t=e.types,r=e.params,n=r.query,a=r.pagination,o=(r.sort,r.filter),i=e.ontologies,c="";return o.q&&o.q.length>0&&(c+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(o.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      ')),n&&Object.keys(n).forEach((function(e){var t=n[e].startsWith("http")?"<".concat(n[e],">"):n[e];c+="?s1 ".concat(e," ").concat(t," .")})),"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(i),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2\n    }\n    WHERE {\n      ").concat(c,"\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(t.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT ").concat(a.perPage,"\n    # OFFSET ").concat((a.page-1)*a.perPage,"\n  ")},g=require("speakingurl"),h=function(e){var t={};return e.forEach((function(e){return t[e.prefix]=e.url})),t},b=function(e){return e&&e.rawFile&&e.rawFile instanceof File};exports.DateTimeInput=function(e){return t.createElement(r.DateTimeInput,u({},e,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},exports.ImageField=function(e){var n=e.record,a=e.source,o=f(e,["record","source"]);return"string"==typeof n&&(n=c({},a,n)),t.createElement(r.ImageField,u({record:n,source:a},o))},exports.UriArrayField=y,exports.UriArrayInput=function(e){return t.createElement(r.ReferenceArrayInput,u({},e,{format:function(t){return t?(Array.isArray(t)||(t=[t]),e.format&&(t=e.format(t)),t.map((function(e){return"object"===a(e)?e.id||e["@id"]:e}))):t}}))},exports.dataProvider=function(e){var t,r,o,c,u,s,f=e.sparqlEndpoint,d=e.httpClient,y=e.resources,v=e.ontologies,x=e.jsonContext,w=e.uploadsContainerUri,O=function(){var e=i(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,d(w,{method:"POST",body:t,headers:new Headers({Slug:(n=t.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),g(n,{lang:"fr"})+"."+a),"Content-Type":t.type})});case 4:if(201!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=i(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(r=e.t1.value,!t.hasOwnProperty(r)){e.next=20;break}if(!Array.isArray(t[r])){e.next=16;break}n=0;case 6:if(!(n<t[r].length)){e.next=14;break}if(!b(t[r][n])){e.next=11;break}return e.next=10,O(t[r][n].rawFile);case 10:t[r][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!b(t[r])){e.next=20;break}return e.next=19,O(t[r].rawFile);case 19:t[r]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{getList:(s=i(regeneratorRuntime.mark((function e(t,r){var a,o,i,c,u,s,l,g,b,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y[t],!r.id&&!r["@id"]&&y[t].types){e.next=16;break}return a=r.id||r["@id"]||y[t].containerUri,e.next=5,d(a);case 5:if(o=e.sent,i=o.json,c=["ldp:contains","as:orderedItems","orderedItems","as:items","items"].find((function(e){return i[e]}))){e.next=11;break}throw new Error("Unknown list type");case 11:return u=i[c].map((function(e){return e.id=e.id||e["@id"],e})),r.pagination&&(u=u.slice((r.pagination.page-1)*r.pagination.perPage,r.pagination.page*r.pagination.perPage)),e.abrupt("return",{data:u,total:i[c].length});case 16:return s=m({types:y[t].types,params:p(p({},r),{},{query:y[t].query}),ontologies:v}),e.next=19,d(f,{method:"POST",body:s});case 19:return l=e.sent,g=l.json,e.next=23,n.compact(g,x||h(v));case 23:if(b=e.sent,1!==Object.keys(b).length){e.next=28;break}return e.abrupt("return",{data:[],total:0});case 28:if(b["@graph"]){e.next=34;break}return b.id=b.id||b["@id"],console.log("compactJson",b),e.abrupt("return",{data:[b],total:1});case 34:return w=b["@graph"].map((function(e){return e.id=e.id||e["@id"],e})).sort((function(e,t){return!(r.sort&&e[r.sort.field]&&t[r.sort.field])||("DESC"===r.sort.order?e[r.sort.field].localeCompare(t[r.sort.field]):t[r.sort.field].localeCompare(e[r.sort.field]))})).slice((r.pagination.page-1)*r.pagination.perPage,r.pagination.page*r.pagination.perPage),e.abrupt("return",{data:w,total:b["@graph"].length});case 36:case"end":return e.stop()}}),e)}))),function(e,t){return s.apply(this,arguments)}),getOne:(u=i(regeneratorRuntime.mark((function e(t,r){var a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(r.id);case 2:return a=e.sent,(o=a.json).id=o.id||o["@id"],e.next=7,n.compact(o,x||h(v));case 7:return i=e.sent,e.abrupt("return",{data:i});case 9:case"end":return e.stop()}}),e)}))),function(e,t){return u.apply(this,arguments)}),getMany:(c=i(regeneratorRuntime.mark((function e(t,r){var n,o,i,c,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],o=l(r.ids),e.prev=2,o.s();case 4:if((i=o.n()).done){e.next=20;break}return c="object"===a(c=i.value)?c["@id"]:c,e.prev=7,e.next=10,d(c);case 10:u=e.sent,(s=u.json).id=s.id||s["@id"],n.push(s),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(7);case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),o.e(e.t1);case 25:return e.prev=25,o.f(),e.finish(25);case 28:return e.abrupt("return",{data:n});case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[7,16]])}))),function(e,t){return c.apply(this,arguments)}),getManyReference:function(e,t){throw new Error("getManyReference is not implemented yet")},create:(o=i(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,c,u,s,f,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y[t],n=y[t],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return r.data[e]})).join(" "):r.data[a]),e.next=6,j(r.data);case 6:return r.data=e.sent,e.next=9,d(o,{method:"POST",headers:c,body:JSON.stringify(p({"@context":x||h(v),"@type":i},r.data))});case 9:return u=e.sent,s=u.headers,f=s.get("Location"),e.next=14,d(f);case 14:return l=e.sent,(m=l.json).id=m.id||m["@id"],e.abrupt("return",{data:m});case 18:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),update:(r=i(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(r.data);case 2:return r.data=e.sent,e.next=5,d(r.id,{method:"PUT",body:JSON.stringify(p({"@context":x||h(v)},r.data))});case 5:return e.abrupt("return",{data:r.data});case 6:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),updateMany:function(e,t){throw new Error("updateMany is not implemented yet")},delete:(t=i(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(r.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:r.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),deleteMany:function(e,t){throw new Error("deleteMany is not implemented yet")}}},exports.httpClient=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.headers||(t.headers=new Headers),t.method){case"POST":case"PATCH":t.headers.has("Accept")||t.headers.set("Accept","application/ld+json"),t.headers.has("Content-Type")||t.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:t.headers.has("Accept")||t.headers.set("Accept","application/ld+json")}var n=localStorage.getItem("token");return n&&t.headers.set("Authorization","Bearer ".concat(n)),r.fetchUtils.fetchJson(e,t)};
