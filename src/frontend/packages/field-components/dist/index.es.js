import*as e from"react";import t,{useState as r,useMemo as n,useEffect as o,useCallback as a,cloneElement as i,Children as c}from"react";import{useRecordContext as l,ReferenceArrayField as u,ReferenceField as s,useTranslate as f,useDataProvider as m,getResources as p,useGetResourceLabel as d,linkToRecord as h,useRefresh as y,useNotify as v,Button as g,usePermissionsOptimized as b,ImageField as E,useListContext as w,Link as x}from"react-admin";import{makeStyles as O,Box as k,Avatar as L,Chip as j,List as T,ListItem as N,ListItemAvatar as P,ListItemText as S,ListItemSecondaryAction as C,IconButton as A,CircularProgress as F,Dialog as _,DialogTitle as I,DialogContent as G,TextField as M,DialogActions as z,LinearProgress as R}from"@material-ui/core";import W from"@material-ui/icons/Launch";import{Form as B,Field as D}from"react-final-form";import U from"@material-ui/icons/Add";import{useSelector as Y,shallowEqual as q}from"react-redux";import H from"lodash.debounce";import V from"@material-ui/icons/Visibility";import $ from"@material-ui/icons/Error";import{useDataServers as J,useDataModel as K}from"@semapps/semantic-data-provider";import Q from"@material-ui/icons/Language";import X from"@material-ui/icons/Facebook";import Z from"@material-ui/icons/GitHub";import ee from"@material-ui/icons/Twitter";import te from"@material-ui/icons/Instagram";import re from"@material-ui/icons/YouTube";function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){ue(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ae(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
ae=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var s={};function f(){}function m(){}function p(){}var d={};c(d,o,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(k([])));y&&y!==t&&r.call(y,o)&&(d=y);var v=p.prototype=f.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(o,a){function i(){return new t((function(n,i){!function n(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=p,c(v,"constructor",p),c(p,"constructor",m),m.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),c(v,i,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function le(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){ce(a,n,o,i,c,"next",e)}function c(e){ce(a,n,o,i,c,"throw",e)}i(void 0)}))}}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(){return(se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function me(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(e,t)||de(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e){return function(e){if(Array.isArray(e))return he(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||de(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){if(e){if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?he(e,t):void 0}}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ye=["label","defaultLabel","image","fallback","externalLink","labelColor","classes"],ve=O((function(e){return{parent:function(e){return oe({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},chip:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:3,paddingBottom:3,paddingLeft:6,paddingRight:6,marginBottom:10,cursor:"pointer"},launchIcon:{width:14}}})),ge=function(){},be=function(e){var r=e.label,n=e.defaultLabel,o=e.image,a=e.fallback,i=e.externalLink,c=e.labelColor,u=e.classes,s=fe(e,ye);u=ve(u);var f=l(),m=("function"==typeof r?r(f):f[r])||n,p="function"==typeof o?o(f):f[o],d="function"==typeof a?a(f):a;return t.createElement(k,{className:u.parent},t.createElement("div",{className:u.square},t.createElement(L,se({src:p||d,alt:m,fallback:d},s,{className:u.avatar}))),m?i?t.createElement(j,{color:c,className:u.chip,size:"small",label:m,deleteIcon:t.createElement(W,{className:u.launchIcon}),onDelete:ge}):t.createElement(j,{color:c,className:u.chip,size:"small",label:m}):null)};be.defaultProps={labelColor:"secondary",externalLink:!1};var Ee=["record","source"],we=function(e){var r=e.record,n=e.source,o=fe(e,Ee);return null!=r&&r[n]&&(Array.isArray(r[n])||(r[n]=[r[n]]),r[n]=r[n].map((function(e){return e["@id"]||e.id||e}))),t.createElement(u,se({record:r,source:n},o))};we.defaultProps={addLabel:!0};var xe=["record","source"],Oe=function(e){var r=e.record,n=e.source,o=fe(e,xe);return r[n]&&"object"===ie(r[n])&&(r[n]=r[n]["@id"]||r[n].id),t.createElement(s,se({record:r,source:n},o))};Oe.defaultProps={addLabel:!0};var ke=O((function(e){return{root:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper,paddingTop:0,paddingBottom:0},primaryText:{width:"30%"},secondaryText:{fontStyle:"italic",color:"grey"}}})),Le=function(e,t){var r=t&&Object.values(t).find((function(t){return e.startsWith(t.baseUrl)}));return r?r.name:"Inconnu"},je=function(e){var a,i=e.keyword,c=e.source,u=e.reference,s=e.appendLink,y=e.switchToCreate,v=ke(),g=me(r(!1),2),b=g[0],E=g[1],w=me(r(!1),2),x=w[0],O=w[1],j=me(r([]),2),_=j[0],I=j[1],G=f(),M=m(),z=J(),R=l(),W=Y(p,q),B=n((function(){return W.find((function(e){return e.name===u}))}),[W,u]),D=d(),Q=K(u);if(Q&&Object.keys(Q).length>0&&(null==Q||null===(a=Q.fieldsMapping)||void 0===a||!a.title))throw new Error("No fieldsMapping.title config found for ".concat(u," dataModel"));var X=n((function(){return H((function(e){var t;M.getList(u,{pagination:{page:1,perPage:100},sort:{field:null==Q||null===(t=Q.fieldsMapping)||void 0===t?void 0:t.title,order:"ASC"},filter:{q:e,_predicates:[Q.fieldsMapping.title],_servers:"@all"}}).then((function(e){var t=e.data,r=R[c]?Array.isArray(R[c])?R[c]:[R[c]]:[],n=t.filter((function(e){return!r.includes(e.id)}));I(n),O(!0),E(!1)})).catch((function(e){E(!1)}))}),700)}),[M,Q,R,c,u,I,E,O]);return o((function(){if(i)return E(!0),O(!1),X(i),function(){return X.cancel()}}),[i,X,E]),i?t.createElement(T,{dense:!0,className:v.root},x&&_.map((function(e){return t.createElement(N,{key:e.id,button:!0,onClick:function(){return s(e.id)}},t.createElement(P,null,t.createElement(L,null,t.createElement(B.icon))),t.createElement(S,{className:v.primaryText,primary:e[Q.fieldsMapping.title]}),t.createElement(S,{className:v.secondaryText,primary:Le(e.id,z)}),t.createElement(C,null,t.createElement("a",{href:h("/"+u,e.id,"show"),target:"_blank",rel:"noopener noreferrer"},t.createElement(A,{edge:"end"},t.createElement(V,null)))))})),x&&0===_.length&&t.createElement(N,null,t.createElement(P,null,t.createElement(L,null,t.createElement($,null))),t.createElement(S,{className:v.primaryText,primary:G("ra.navigation.no_results")})),x&&B.hasCreate&&t.createElement(N,{button:!0,onClick:y},t.createElement(P,null,t.createElement(L,null,t.createElement(U,null))),t.createElement(S,{className:v.primaryText,primary:G("ra.page.create",{name:D(u,1)})})),b&&t.createElement(k,{display:"flex",alignItems:"center",justifyContent:"center",height:150},t.createElement(F,{size:60,thickness:6}))):null},Te=["meta","input"],Ne=O((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingLeft:8,paddingRight:8,paddingTop:0,paddingBottom:0,maxHeight:210}}})),Pe=function(e){var r=e.meta,n=r.touched,o=r.error,a=e.input,i=fe(e,Te);return t.createElement(M,se({error:!(!n||!o),helperText:n&&o},a,i,{fullWidth:!0}))},Se=function(e){var n=e.open,o=e.onClose,i=e.subjectUri,c=e.resource,l=e.source,u=e.reference,s=Ne(),p=me(r(""),2),h=p[0],b=p[1],E=me(r("find"),2),w=E[0],x=E[1],O=m(),k=f(),L=y(),j=v(),T=d(),N=K(u),P=a(function(){var e=le(ae().mark((function e(t){var r,n;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getOne(c,{id:i});case 2:return r=e.sent,n=r.data,e.next=6,O.update(c,{id:i,data:oe(oe({},n),{},ue({},l,n[l]?Array.isArray(n[l])?[].concat(pe(n[l]),[t]):[n[l],t]:t)),previousData:n});case 6:L(),o();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O,i,c,l,L,o]),S=a(function(){var e=le(ae().mark((function e(t){var r,n;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.create(u,{data:ue({},N.fieldsMapping.title,t.title)});case 2:return r=e.sent,n=r.data,e.next=6,P(n.id);case 6:j('La resource "'.concat(t.title,'" a été créée'),"success");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O,N,P,u,j]);return t.createElement(_,{fullWidth:!0,open:n,onClose:o},"find"===w?t.createElement(t.Fragment,null,t.createElement(I,{className:s.title},"Ajouter une relation"),t.createElement(G,{className:s.addForm},t.createElement(M,{autoFocus:!0,label:"Rechercher ou créer des "+T(u,2).toLowerCase(),variant:"filled",margin:"dense",value:h,onChange:function(e){return b(e.target.value)},fullWidth:!0})),t.createElement(G,{className:s.listForm},t.createElement(je,{keyword:h,source:l,reference:u,appendLink:P,switchToCreate:function(){return x("create")}})),t.createElement(z,{className:s.actions},t.createElement(g,{label:"ra.action.close",variant:"text",onClick:o}))):t.createElement(B,{onSubmit:S,initialValues:{title:h},render:function(e){var r=e.handleSubmit,n=e.submitting;return t.createElement("form",{onSubmit:r},t.createElement(I,{className:s.title},k("ra.page.create",{name:T(u,1)})),t.createElement(G,{className:s.addForm},t.createElement(D,{autoFocus:!0,id:"title",name:"title",component:Pe,label:"Titre",disabled:n,variant:"filled",margin:"dense"})),t.createElement(z,{className:s.actions},t.createElement(g,{label:"ra.action.create",variant:"contained",startIcon:t.createElement(U,null),type:"submit",disabled:n}),t.createElement(g,{label:"ra.action.close",variant:"text",onClick:o})))}}))},Ce=["record","reference","source","resource"],Ae=function(e){var o=e.record,a=e.reference,i=e.source,c=e.resource,l=fe(e,Ce),s=me(r(!1),2),f=s[0],m=s[1],p=b(o.id).permissions,d=n((function(){return!!p&&p.some((function(e){return["acl:Append","acl:Write","acl:Control"].includes(e["acl:mode"])}))}),[p]);return null!=o&&o[i]&&(Array.isArray(o[i])||(o[i]=[o[i]]),o[i]=o[i].map((function(e){return e["@id"]||e.id||e}))),t.createElement(t.Fragment,null,t.createElement(u,se({record:o,reference:a,source:i,resource:c,appendLink:d?function(){return m(!0)}:void 0},l)),d&&f&&t.createElement(Se,{open:f,onClose:function(){return m(!1)},subjectUri:o.id,resource:c,source:i,reference:a}))};Ae.defaultProps={addLabel:!0};var Fe=["record","source"],_e=function(e){var r=e.record,n=e.source,o=fe(e,Fe);return"string"==typeof r&&(r=ue({},n,r)),t.createElement(E,se({record:r,source:n},o))},Ie={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ge=t.createContext&&t.createContext(Ie),Me=function(){return(Me=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ze=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function Re(e){return function(r){return t.createElement(We,Me({attr:Me({},e.attr)},r),function e(r){return r&&r.map((function(r,n){return t.createElement(r.tag,Me({key:n},r.attr),e(r.child))}))}(e.child))}}function We(e){var r=function(r){var n,o=e.attr,a=e.size,i=e.title,c=ze(e,["attr","size","title"]),l=a||r.size||"1em";return r.className&&(n=r.className),e.className&&(n=(n?n+" ":"")+e.className),t.createElement("svg",Me({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,c,{className:n,style:Me(Me({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&t.createElement("title",null,i),e.children)};return void 0!==Ge?t.createElement(Ge.Consumer,null,(function(e){return r(e)})):r(Ie)}function Be(e){return Re({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"}}]})(e)}var De=["source","domainMapping"],Ue={"github.com":{label:"GitHub",icon:t.createElement(Z,null),color:"black",contrastText:"white"},"gitlab.com":{label:"GitLab",icon:t.createElement(Be,null),color:"orange",contrastText:"black"},"opencollective.com":{label:"Open Collective",icon:t.createElement(L,{src:"https://opencollective.com/static/images/opencollective-icon.svg"}),color:"white",contrastText:"#297EFF"},"facebook.com":{label:"Facebook",icon:t.createElement(X,null),color:"#4267B2",contrastText:"white"},"twitter.com":{label:"Twitter",icon:t.createElement(ee,null),color:"#00ACEE",contrastText:"white"},"instagram.com":{label:"Instagram",icon:t.createElement(te,null),color:"#8a3ab9",contrastText:"white"},"youtube.com":{label:"YouTube",icon:t.createElement(re,null),color:"#FF0000",contrastText:"white"}},Ye=O((function(e){return{link:{textDecoration:"unset","& :hover":{cursor:"pointer"}},chip:{paddingLeft:5,paddingRight:5,marginRight:5},label:{marginTop:-1}}})),qe=function(e){var r=e.source,n=e.domainMapping,o=fe(e,De),a=oe(oe({},Ue),n),i=l(),c=Ye();return(i[r]?Array.isArray(i[r])?i[r]:[i[r]]:[]).map((function(e,r){e.startsWith("http")||(e="https://"+e);var n=new URL(e);if(!n)return null;var i=a[n.hostname]||{label:"Site web",icon:t.createElement(Q,null),color:"#ea",contrastText:"black"};return t.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:c.link},t.createElement(j,se({},o,{icon:t.cloneElement(i.icon,{style:{color:i.contrastText}}),size:"small",label:i.label,classes:{root:c.chip,label:c.label},style:{color:i.contrastText,backgroundColor:i.color}})))}))};qe.defaultProps={addLabel:!0};var He=function(e){return e.stopPropagation()},Ve=function(){},$e=function(t){t.classes,t.className;var r=t.children,n=t.link,o=void 0===n?"edit":n,a=t.linkType,l=t.separator,u=void 0===l?", ":l,s=w(t),f=s.ids,m=s.data,p=s.loaded,d=s.resource,y=s.basePath;return void 0!==a&&(console.warn("The 'linkType' prop is deprecated and should be named to 'link' in <SeparatedListField />"),o=a),!1===p?e.createElement(R,null):e.createElement(e.Fragment,null,f.map((function(t,n){if(!m[t])return null;var a=!1!==o&&("function"==typeof o?o(m[t]):h(y,t,o));return a?e.createElement("span",{key:t},e.createElement(x,{to:a,onClick:He},i(c.only(r),{record:m[t],resource:d,basePath:y,onClick:Ve})),n<f.length-1&&u):e.createElement("span",{key:t},i(c.only(r),{record:m[t],resource:d,basePath:y}),n<f.length-1&&u)})))};export{be as AvatarWithLabelField,_e as ImageField,qe as MultiUrlField,Ae as QuickAppendReferenceArrayField,we as ReferenceArrayField,Oe as ReferenceField,$e as SeparatedListField};
//# sourceMappingURL=index.es.js.map