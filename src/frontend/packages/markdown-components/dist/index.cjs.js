"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=require("react-admin"),e=require("markdown-to-jsx"),n=require("react-mde"),o=require("@mui/material"),i=require("@mui/system");function a(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var u=a(t),c=a(e),l=a(n);function f(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function s(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?f(Object(e),!0).forEach((function(r){d(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function p(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
p=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o=r&&r.prototype instanceof s?r:s,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=_(a,e);if(u){if(u===f)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function s(){}function h(){}function v(){}var d={};u(d,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(E([])));g&&g!==r&&e.call(g,o)&&(d=g);var m=v.prototype=s.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&e.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function _(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=v,u(m,"constructor",v),u(v,"constructor",h),h.displayName=u(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),u(m,a,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}function h(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function v(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){h(i,n,o,a,u,"next",t)}function u(t){h(i,n,o,a,u,"throw",t)}a(void 0)}))}}function d(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function y(){return(y=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}function g(t,r){if(null==t)return{};var e,n,o=function(t,r){if(null==t)return{};var e,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||(o[e]=t[e]);return o}(t,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],r.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}function m(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return b(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var w=Array.isArray,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},O="object"==typeof _&&_&&_.Object===Object&&_,j="object"==typeof self&&self&&self.Object===Object&&self,x=O||j||Function("return this")(),E=x.Symbol,L=Object.prototype,P=L.hasOwnProperty,S=L.toString,k=E?E.toStringTag:void 0;var T=function(t){var r=P.call(t,k),e=t[k];try{t[k]=void 0;var n=!0}catch(t){}var o=S.call(t);return n&&(r?t[k]=e:delete t[k]),o},F=Object.prototype.toString;var C=function(t){return F.call(t)},A=E?E.toStringTag:void 0;var z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?T(t):C(t)};var I=function(t){return null!=t&&"object"==typeof t};var N=function(t){return"symbol"==typeof t||I(t)&&"[object Symbol]"==z(t)},$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,q=/^\w*$/;var G=function(t,r){if(w(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!N(t))||(q.test(t)||!$.test(t)||null!=r&&t in Object(r))};var M=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)};var D,R=function(t){if(!M(t))return!1;var r=z(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},H=x["__core-js_shared__"],U=(D=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"";var W=function(t){return!!U&&U in t},Y=Function.prototype.toString;var B=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},J=/^\[object .+?Constructor\]$/,K=Function.prototype,Q=Object.prototype,V=K.toString,X=Q.hasOwnProperty,Z=RegExp("^"+V.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var tt=function(t){return!(!M(t)||W(t))&&(R(t)?Z:J).test(B(t))};var rt=function(t,r){return null==t?void 0:t[r]};var et=function(t,r){var e=rt(t,r);return tt(e)?e:void 0},nt=et(Object,"create");var ot=function(){this.__data__=nt?nt(null):{},this.size=0};var it=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},at=Object.prototype.hasOwnProperty;var ut=function(t){var r=this.__data__;if(nt){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return at.call(r,t)?r[t]:void 0},ct=Object.prototype.hasOwnProperty;var lt=function(t){var r=this.__data__;return nt?void 0!==r[t]:ct.call(r,t)};var ft=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=nt&&void 0===r?"__lodash_hash_undefined__":r,this};function st(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}st.prototype.clear=ot,st.prototype.delete=it,st.prototype.get=ut,st.prototype.has=lt,st.prototype.set=ft;var pt=st;var ht=function(){this.__data__=[],this.size=0};var vt=function(t,r){return t===r||t!=t&&r!=r};var dt=function(t,r){for(var e=t.length;e--;)if(vt(t[e][0],r))return e;return-1},yt=Array.prototype.splice;var gt=function(t){var r=this.__data__,e=dt(r,t);return!(e<0)&&(e==r.length-1?r.pop():yt.call(r,e,1),--this.size,!0)};var mt=function(t){var r=this.__data__,e=dt(r,t);return e<0?void 0:r[e][1]};var bt=function(t){return dt(this.__data__,t)>-1};var wt=function(t,r){var e=this.__data__,n=dt(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};function _t(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}_t.prototype.clear=ht,_t.prototype.delete=gt,_t.prototype.get=mt,_t.prototype.has=bt,_t.prototype.set=wt;var Ot=_t,jt=et(x,"Map");var xt=function(){this.size=0,this.__data__={hash:new pt,map:new(jt||Ot),string:new pt}};var Et=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Lt=function(t,r){var e=t.__data__;return Et(r)?e["string"==typeof r?"string":"hash"]:e.map};var Pt=function(t){var r=Lt(this,t).delete(t);return this.size-=r?1:0,r};var St=function(t){return Lt(this,t).get(t)};var kt=function(t){return Lt(this,t).has(t)};var Tt=function(t,r){var e=Lt(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};function Ft(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}Ft.prototype.clear=xt,Ft.prototype.delete=Pt,Ft.prototype.get=St,Ft.prototype.has=kt,Ft.prototype.set=Tt;var Ct=Ft;function At(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=e.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return e.cache=i.set(o,a)||i,a};return e.cache=new(At.Cache||Ct),e}At.Cache=Ct;var zt=At;var It=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nt=/\\(\\)?/g,$t=function(t){var r=zt(t,(function(t){return 500===e.size&&e.clear(),t})),e=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(It,(function(t,e,n,o){r.push(n?o.replace(Nt,"$1"):e||t)})),r}));var qt=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},Gt=E?E.prototype:void 0,Mt=Gt?Gt.toString:void 0;var Dt=function t(r){if("string"==typeof r)return r;if(w(r))return qt(r,t)+"";if(N(r))return Mt?Mt.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e};var Rt=function(t){return null==t?"":Dt(t)};var Ht=function(t,r){return w(t)?t:G(t,r)?[t]:$t(Rt(t))};var Ut=function(t){if("string"==typeof t||N(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var Wt=function(t,r){for(var e=0,n=(r=Ht(r,t)).length;null!=t&&e<n;)t=t[Ut(r[e++])];return e&&e==n?t:void 0};var Yt=function(t,r,e){var n=null==t?void 0:Wt(t,r);return void 0===n?e:n},Bt=["source","LabelComponent","overrides"],Jt=function(t){var e=t.source,n=t.LabelComponent,o=t.overrides,i=void 0===o?{}:o,a=g(t,Bt),l=r.useRecordContext();return l&&Yt(l,e)?u.default.createElement(c.default,{options:s({createElement:function(t,r,e){return r.label?u.default.createElement(u.default.Fragment,null,u.default.createElement(n,null,r.label),u.default.createElement(t,r,e)):u.default.createElement(t,r,e)},overrides:s({h1:n},i)},a)},Yt(l,e)):null};Jt.defaultProps={LabelComponent:"h2"};var Kt=i.styled(o.FormControl)((function(t){var r=t.theme;return{"&.validationError":{"& p":{color:r.palette.error.main},"& .mde-text":{outline:"-webkit-focus-ring-color auto 1px",outlineOffset:0,outlineColor:r.palette.error.main,outlineStyle:"auto",outlineWidth:1},"& p.MuiFormHelperText-root":{color:r.palette.error.main}}}}));exports.MarkdownField=Jt,exports.MarkdownInput=function(e){var n=e.validate,i=t.useMemo((function(){return!!n&&!![].concat(n).find((function(t){return t.toString()===r.required().toString()}))}),[n]),a=m(t.useState("write"),2),f=a[0],s=a[1],h=r.useInput(e),d=h.field,g=d.value,b=d.onChange,w=h.fieldState,_=w.isDirty,O=w.invalid,j=w.error,x=w.isTouched;return u.default.createElement(Kt,{fullWidth:!0,className:"ra-input-mde ".concat(O?"validationError":"")},u.default.createElement(r.Labeled,y({},e,{isRequired:i}),u.default.createElement(l.default,y({value:g,onChange:function(t){return b(t)},onTabChange:function(t){return s(t)},generateMarkdownPreview:function(){var t=v(p().mark((function t(r){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.default.createElement(c.default,null,r));case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),selectedTab:f},e))),u.default.createElement(o.FormHelperText,{error:_&&O,margin:"dense",variant:"outlined"},u.default.createElement(r.InputHelperText,{error:_&&O&&j,helperText:e.helperText,touched:j||x})))},exports.useLoadLinks=function(t,e){var n=r.useDataProvider(),o=r.useTranslate();return function(){var r=v(p().mark((function r(i){var a;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!i){r.next=9;break}return r.next=3,n.getList(t,{pagination:{page:1,perPage:5},filter:{q:i}});case 3:if(!((a=r.sent).total>0)){r.next=8;break}return r.abrupt("return",a.data.map((function(r){return{preview:r[e],value:"[".concat(r[e],"](/").concat(t,"/").concat(encodeURIComponent(r.id),"/show)")}})));case 8:return r.abrupt("return",[{preview:o("ra.navigation.no_results"),value:"["+i}]);case 9:return r.abrupt("return",[{preview:o("ra.action.search"),value:"["+i}]);case 10:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()};
//# sourceMappingURL=index.cjs.js.map
