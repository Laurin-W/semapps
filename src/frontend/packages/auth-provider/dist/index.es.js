import e,{useState as t,useEffect as r,useCallback as n,forwardRef as o}from"react";import{useTranslate as a,useGetList as i,useDataProvider as c,Loading as l,Error as s,usePermissionsOptimized as u,useAuthProvider as m,Button as d,ListButton as f,ShowButton as p,Toolbar as h,SaveButton as g,DeleteButton as v,useNotify as y,useRedirect as b,Edit as w,EditButton as E,Show as k,useLogin as C,Notification as P,useLogout as x,Resource as O,MenuItemLink as I,useGetIdentity as j,UserMenu as A}from"react-admin";import{TopToolbar as S,List as R,ListActions as U}from"@semapps/archipelago-layout";import _ from"@material-ui/icons/Share";import{makeStyles as T,TextField as N,List as L,ListItem as W,ListItemAvatar as D,Avatar as G,ListItemText as V,ListItemSecondaryAction as $,IconButton as B,Menu as F,MenuItem as M,ListItemIcon as z,Dialog as H,DialogTitle as J,DialogContent as q,DialogActions as K,Card as Q,CardActions as X,Button as Y}from"@material-ui/core";import Z from"@material-ui/lab/Autocomplete";import ee from"@material-ui/icons/Person";import te from"@material-ui/icons/Edit";import re from"@material-ui/icons/Check";import ne from"@material-ui/icons/Public";import oe from"@material-ui/icons/VpnLock";import ae from"@material-ui/icons/Group";import{ThemeProvider as ie}from"@material-ui/styles";import{makeStyles as ce,createMuiTheme as le}from"@material-ui/core/styles";import se from"@material-ui/icons/Lock";import ue from"@material-ui/core/MenuItem";import me from"@material-ui/icons/PowerSettingsNew";import de from"@material-ui/icons/AccountCircle";function fe(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function pe(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){fe(a,n,o,i,c,"next",e)}function c(e){fe(a,n,o,i,c,"throw",e)}i(void 0)}))}}function he(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){he(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function be(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function we(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||ke(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e){return function(e){if(Array.isArray(e))return Ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||ke(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ke(e,t){if(e){if("string"==typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ce(e,t):void 0}}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Pe(e){this.message=e}Pe.prototype=new Error,Pe.prototype.name="InvalidCharacterError";var xe="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new Pe("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,o=0,a=0,i="";n=t.charAt(a++);~n&&(r=o%4?64*r+n:n,o++%4)?i+=String.fromCharCode(255&r>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Oe(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(xe(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return xe(t)}}function Ie(e){this.message=e}function je(e,t){if("string"!=typeof e)throw new Ie("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(Oe(e.split(".")[r]))}catch(e){throw new Ie("Invalid token specified: "+e.message)}}Ie.prototype=new Error,Ie.prototype.name="InvalidTokenError";var Ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Se,Re,Ue=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,r;t=Ae,r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(n>0&&(o=o.replace(/^[\/]+/,"")),o=n<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var a=t.join("/"),i=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():t.urljoin=r()})),_e=function(e){return e?Array.isArray(e)?e:[e]:void 0},Te=function(e,t){return Ue(e,t.replace(e,"_acl/"))},Ne=function(e){return{"@base":e,acl:"http://www.w3.org/ns/auth/acl#",foaf:"http://xmlns.com/foaf/0.1/","acl:agent":{"@type":"@id"},"acl:agentGroup":{"@type":"@id"},"acl:agentClass":{"@type":"@id"},"acl:mode":{"@type":"@id"},"acl:accessTo":{"@type":"@id"}}},Le=function(e){var t,r,n,o,a,i,c=e.middlewareUri,l=e.allowAnonymous,s=void 0===l||l,u=e.checkUser,m=void 0===u?function(e){return!0}:u,d=e.httpClient,f=e.checkPermissions,p=e.resources;return{login:(i=pe(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new URL(window.location.href),window.location.href="".concat(c,"auth?redirectUrl=")+encodeURIComponent(r.origin+"/login?login=true");case 2:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),logout:(a=pe(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URL(window.location.href),s){e.next=6;break}localStorage.removeItem("token"),window.location.href="".concat(c,"auth/logout?redirectUrl=")+encodeURIComponent(t.origin+"/login"),e.next=8;break;case 6:return window.location.href="".concat(c,"auth/logout?redirectUrl=")+encodeURIComponent(t.origin+"/login?logout=true"),e.abrupt("return","/");case 8:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),checkAuth:(o=pe(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")||s){e.next=3;break}throw new Error;case 3:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),checkUser:m,checkError:function(e){return Promise.resolve()},getPermissions:(n=pe(regeneratorRuntime.mark((function e(t){var r,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return",!0);case 2:return r=p[t]?p[t].containerUri:t,n=Te(c,r),e.next=6,d(n);case 6:return o=e.sent,a=o.json,e.abrupt("return",a["@graph"]);case 9:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),addPermission:(r=pe(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,l,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=p[t]?p[t].containerUri:t,l=Te(c,i),he(a={"@id":"#"+o.replace("acl:",""),"@type":"acl:Authorization"},n,r),he(a,"acl:accessTo",i),he(a,"acl:mode",o),s=a,e.next=5,d(l,{method:"PATCH",body:JSON.stringify({"@context":Ne(l),"@graph":[s]})});case 5:case"end":return e.stop()}}),e)}))),function(e,t,n,o){return r.apply(this,arguments)}),removePermission:(t=pe(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,l,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p[t]?p[t].containerUri:t,i=Te(c,a),e.next=4,d(i);case 4:return l=e.sent,s=l.json,u=s["@graph"].filter((function(e){return!e["@id"].includes("#Default")})).map((function(e){var t=_e(e["acl:mode"]),a=_e(e[n]);return o&&t.includes(o)&&a&&a.includes(r)&&(a=a.filter((function(e){return e!==r}))),ye(ye({},e),{},he({},n,a))})),e.next=9,d(i,{method:"PUT",body:JSON.stringify({"@context":Ne(i),"@graph":u})});case 9:case"end":return e.stop()}}),e)}))),function(e,r,n,o){return t.apply(this,arguments)}),getIdentity:function(){var e=localStorage.getItem("token");if(e){var t=je(e);return{id:t.webId,fullName:t.name}}}}},We="acl:agentClass",De=["acl:Append","acl:Write","acl:Control"],Ge=["acl:Append","acl:Write","acl:Control"],Ve=["acl:Write","acl:Control"],$e=["acl:Control"],Be=(he(Se={},"acl:Read","auth.right.resource.read"),he(Se,"acl:Append","auth.right.resource.append"),he(Se,"acl:Write","auth.right.resource.write"),he(Se,"acl:Control","auth.right.resource.control"),Se),Fe=(he(Re={},"acl:Read","auth.right.container.read"),he(Re,"acl:Write","auth.right.container.write"),he(Re,"acl:Control","auth.right.container.control"),Re),Me=T((function(){return{list:{padding:0,width:"100%"},option:{padding:0}}})),ze=function(n){var o=n.agents,c=n.addPermission,l=Me(),s=a(),u=we(t(null),2),m=u[0],d=u[1],f=we(t(""),2),p=f[0],h=f[1],g=we(t([]),2),v=g[0],y=g[1],b=i("Person",{page:1,perPage:100},{field:"pair:label",order:"ASC"},{q:p},{enabled:p.length>0}),w=b.ids,E=b.data;return r((function(){y(w.length>0?Object.values(E):[])}),[w,E]),e.createElement(Z,{classes:{option:l.option},getOptionLabel:function(e){return e["pair:label"]},filterOptions:function(e){return e.filter((function(e){return!Object.keys(o).includes(e.id)}))},options:v,noOptionsText:s("ra.navigation.no_results"),autoComplete:!0,blurOnSelect:!0,clearOnBlur:!0,disableClearable:!0,value:m,onChange:function(e,t){c(t.id||t["@id"],"acl:agent","acl:Read"),d(null),h(""),y([])},onInputChange:function(e,t){h(t)},renderInput:function(t){return e.createElement(N,ge({},t,{label:s("auth.input.agent_select"),variant:"filled",margin:"dense",fullWidth:!0}))},renderOption:function(t){return e.createElement(L,{dense:!0,className:l.list},e.createElement(W,{button:!0},e.createElement(D,null,e.createElement(G,{src:t.image},e.createElement(ee,null))),e.createElement(V,{primary:t["pair:label"]})))}})},He=function(t){var r=t.agent;switch(r.predicate){case We:return"foaf:Agent"===r.id?e.createElement(ne,null):e.createElement(oe,null);case"acl:agent":return e.createElement(ee,null);case"acl:agentGroup":return e.createElement(ae,null);default:throw new Error("Unknown agent predicate: "+r.predicate)}},Je=T((function(){return{listItem:{paddingLeft:4,paddingRight:36},primaryText:{width:"30%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},secondaryText:{textAlign:"center",width:"60%",fontStyle:"italic",color:"grey"}}})),qe=function(n){var o=n.isContainer,i=n.agent,u=n.addPermission,m=n.removePermission,d=Je(),f=a(),p=c(),h=we(e.useState(null),2),g=h[0],v=h[1],y=we(t(),2),b=y[0],w=y[1],E=we(t(!0),2),k=E[0],C=E[1],P=we(t(),2),x=P[0],O=P[1];if(r((function(){"acl:agent"===i.predicate?p.getOne("Person",{id:i.id}).then((function(e){var t=e.data;w(t),C(!1)})).catch((function(e){O(e),C(!1)})):C(!1)}),[i.id,i.predicate]),"acl:agentGroup"===i.predicate)return null;var I=function(){return v(null)},j=o?Fe:Be;return k?e.createElement(l,null):x?e.createElement(s,null):e.createElement(W,{className:d.listItem},e.createElement(D,null,e.createElement(G,{src:null==b?void 0:b.image},e.createElement(He,{agent:i}))),e.createElement(V,{className:d.primaryText,primary:b?b["pair:label"]:f("foaf:Agent"===i.id?"auth.agent.anonymous":"auth.agent.authenticated")}),e.createElement(V,{className:d.secondaryText,primary:i.permissions&&i.permissions.map((function(e){return f(j[e])})).join(", ")}),e.createElement($,null,e.createElement(B,{onClick:function(e){return v(e.currentTarget)}},e.createElement(te,null)),e.createElement(F,{anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:I},Object.entries(j).map((function(t){var r=we(t,2),n=r[0],o=r[1],a=i.permissions&&i.permissions.includes(n);return e.createElement(M,{key:n,onClick:function(){a?m(i.id,i.predicate,n):u(i.id,i.predicate,n),I()}},e.createElement(z,null,a?e.createElement(re,null):null),e.createElement(V,{primary:f(o)}))})))))},Ke=T((function(e){return{list:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper}}})),Qe=function(t){var r=t.isContainer,n=t.agents,o=t.addPermission,a=t.removePermission,i=Ke();return e.createElement(L,{dense:!0,className:i.list},Object.entries(n).map((function(t){var n=we(t,2),i=n[0],c=n[1];return e.createElement(qe,{key:i,isContainer:r,agent:c,addPermission:o,removePermission:a})})))},Xe=function(e){var o=u(e).permissions,a=m(),i=we(t({}),2),c=i[0],l=i[1];r((function(){var e,t=(he(e={},"foaf:Agent",{id:"foaf:Agent",predicate:We,permissions:[]}),he(e,"acl:AuthenticatedAgent",{id:"acl:AuthenticatedAgent",predicate:We,permissions:[]}),e),r=function(e,r,n){t[e]?t[e].permissions.push(n):t[e]={id:e,predicate:r,permissions:[n]}};if(o){var n,a=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=ke(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}(o);try{var i=function(){var e=n.value;e[We]&&_e(e[We]).forEach((function(t){return r(t,We,e["acl:mode"])})),e["acl:agent"]&&_e(e["acl:agent"]).forEach((function(t){return r(t,"acl:agent",e["acl:mode"])})),e["acl:agentGroup"]&&_e(e["acl:agentGroup"]).forEach((function(t){return r(t,"acl:agentGroup",e["acl:mode"])}))};for(a.s();!(n=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}l(t)}}),[o]);var s=n((function(t,r,n){var o,i=ye({},c);l(ye(ye({},c),{},he({},t,{id:t,predicate:r,permissions:c[t]?[].concat(Ee(null===(o=c[t])||void 0===o?void 0:o.permissions),[n]):[n]}))),a.addPermission(e,t,r,n).catch((function(e){l(i)}))}),[c,l,e,a]),d=n((function(t,r,n){var o=ye({},c);l(Object.fromEntries(Object.entries(c).map((function(e){var r=we(e,2),o=r[0],a=r[1];return a.id===t&&(a.permissions=a.permissions.filter((function(e){return e!==n}))),[o,a]})).filter((function(e){var t=we(e,2),r=(t[0],t[1]);return r.predicate===We||r.permissions.length>0})))),a.removePermission(e,t,r,n).catch((function(e){l(o)}))}),[c,l,e,a]);return{agents:c,addPermission:s,removePermission:d}},Ye=T((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingTop:0,paddingBottom:0,paddingRight:0,maxHeight:210}}})),Ze=function(t){var r=t.open,n=t.onClose,o=t.resourceId,i=t.isContainer,c=Ye(),l=a(),s=Xe(o),u=s.agents,m=s.addPermission,f=s.removePermission;return e.createElement(H,{fullWidth:!0,open:r,onClose:n},e.createElement(J,{className:c.title},l(i?"auth.dialog.container_permissions":"auth.dialog.resource_permissions")),e.createElement(q,{className:c.addForm},e.createElement(ze,{agents:u,addPermission:m})),e.createElement(q,{className:c.listForm},e.createElement(Qe,{isContainer:i,agents:u,addPermission:m,removePermission:f})),e.createElement(K,{className:c.actions},e.createElement(d,{label:"ra.action.close",variant:"text",onClick:n})))},et=function(r){var n=r.record,o=r.resource,a=we(t(!1),2),i=a[0],c=a[1],l=!!o?o:n.id||n["@id"];return e.createElement(e.Fragment,null,e.createElement(d,{label:"auth.action.permissions",onClick:function(){return c(!0)}},e.createElement(_,null)),e.createElement(Ze,{resourceId:l,isContainer:!!o,open:i,onClose:function(){return c(!1)}}))},tt=function(t){var r=t.basePath,n=t.className,o=t.data,a=t.hasList,i=t.hasShow,c=t.hasControl,l=be(t,["basePath","className","data","hasList","hasShow","hasControl"]);return e.createElement(S,ge({className:n},l),a&&e.createElement(f,{basePath:r,record:o}),i&&e.createElement(p,{basePath:r,record:o}),o&&c&&e.createElement(et,{basePath:r,record:o}))},rt=T((function(){return{toolbar:{flex:1,display:"flex",justifyContent:"space-between"}}})),nt=function(t){var r=t.hasDelete,n=be(t,["hasDelete"]),o=rt();return e.createElement(h,ge({},n,{className:o.toolbar}),e.createElement(g,null),r&&e.createElement(v,{undoable:!1}))},ot=function(t){var n=u(t.id).permissions,o=y(),a=b();return r((function(){n&&!n.some((function(e){return Ge.includes(e["acl:mode"])}))&&(o("auth.message.resource_edit_forbidden","error"),a(t.basePath))}),[n,a,o]),e.createElement(w,ge({actions:e.createElement(tt,{hasControl:!!n&&n.some((function(e){return $e.includes(e["acl:mode"])}))})},t,{permissions:n}),e.cloneElement(t.children,{toolbar:e.createElement(nt,{hasDelete:!!n&&n.some((function(e){return Ve.includes(e["acl:mode"])}))})}))},at=function(t){var r=t.actions,n=t.resource,o=t.hasCreate,a=be(t,["actions","resource","hasCreate"]),i=u(n).permissions;return e.createElement(R,ge({},a,{resource:n,hasCreate:o&&!!i&&i.some((function(e){return De.includes(e["acl:mode"])})),actions:r&&i&&i.some((function(e){return $e.includes(e["acl:mode"])}))?e.cloneElement(r,{bulkActions:e.createElement(et,null)}):r}))};at.defaultProps={actions:e.createElement(U,null)};var it=function(t){var r=t.basePath,n=t.className,o=t.data,a=t.hasList,i=t.hasEdit,c=t.hasControl,l=be(t,["basePath","className","data","hasList","hasEdit","hasControl"]);return e.createElement(S,ge({className:n},l),a&&e.createElement(f,{basePath:r,record:o}),i&&e.createElement(E,{basePath:r,record:o}),o&&c&&e.createElement(et,{basePath:r,record:o}))},ct=function(t){var r=u(t.id).permissions;return e.createElement(k,ge({actions:e.createElement(it,{hasControl:!!r&&r.some((function(e){return $e.includes(e["acl:mode"])}))})},t,{permissions:r,hasEdit:t.hasEdit&&!!r&&r.some((function(e){return Ge.includes(e["acl:mode"])}))}))},lt=ce((function(e){return{main:{display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"flex-start",backgroundColor:e.palette.primary[500]},card:{minWidth:300,marginTop:"6em"},lockIconAvatar:{margin:"1em",display:"flex",justifyContent:"center"},lockIcon:{backgroundColor:e.palette.secondary[500]}}})),st=function(t){var n=t.theme,o=t.history,a=t.location,i=t.buttons,l=t.userResource,s=lt(),u=y(),d=C(),f=c(),p=m();return r((function(){pe(regeneratorRuntime.mark((function e(){var t,r,n,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=new URLSearchParams(a.search)).has("login")){e.next=10;break}if(!t.has("token")){e.next=10;break}return r=t.get("token"),n=je(r),i=n.webId,e.next=7,f.getOne("Person",{id:i});case 7:c=e.sent,s=c.data,p.checkUser(s)?(localStorage.setItem("token",r),t.has("new")&&"true"===t.get("new")?(u("auth.message.new_user_created","info"),o.push("/"+l+"/"+encodeURIComponent(i)+"/edit")):(u("auth.message.user_connected","info"),o.push("/"))):(u("auth.message.user_not_allowed_to_login","error"),o.replace("/login"));case 10:t.has("logout")&&(localStorage.removeItem("token"),u("auth.message.user_disconnected","info"),o.push("/"));case 11:case"end":return e.stop()}}),e)})))()}),[a.search]),e.createElement(ie,{theme:le(n)},e.createElement("div",{className:s.main},e.createElement(Q,{className:s.card},e.createElement("div",{className:s.lockIconAvatar},e.createElement(G,{className:s.lockIcon},e.createElement(se,null))),i&&i.map((function(t,r){return e.createElement(X,{key:r},e.cloneElement(t,{fullWidth:!0,variant:"outlined",type:"submit",onClick:function(){return d({},"/login")}}))})))),e.createElement(P,null))};st.defaultProps={buttons:[e.createElement(Y,{startIcon:e.createElement(G,{src:"/lescommuns.jpg"})},"Les Communs")],userResource:"Person"};var ut=o((function(t,r){var n=x();return e.createElement(ue,{onClick:function(){return n()},ref:r},e.createElement(me,null),"   Se déconnecter")})),mt=function(t){var r=t.name,n=t.create,o=be(t,["name","create"]),a=u(r).permissions;return e.createElement(O,ge({},o,{name:r,create:a&&a.some((function(e){return De.includes(e["acl:mode"])}))?n:void 0}))},dt=o((function(t,r){var n=t.onClick,o=t.webId;return e.createElement(I,{ref:r,to:"/Person/".concat(encodeURIComponent(o),"/show"),primaryText:"Voir mon profil",leftIcon:e.createElement(de,null),onClick:n})})),ft=o((function(t,r){var n=t.onClick,o=t.webId;return e.createElement(I,{ref:r,to:"/Person/".concat(encodeURIComponent(o),"/edit"),primaryText:"Editer mon profil",leftIcon:e.createElement(te,null),onClick:n})})),pt=o((function(t,r){var n=t.onClick;return e.createElement(I,{ref:r,to:"/login",primaryText:"Se connecter",onClick:n})})),ht=function(t){var r=t.logout,n=be(t,["logout"]),o=j().identity;return e.createElement(A,n,o&&""!==o.id?[e.createElement(dt,{webId:o.id,key:"view"}),e.createElement(ft,{webId:o.id,key:"edit"}),e.cloneElement(r,{key:"logout"})]:e.createElement(pt,null))},gt={auth:{dialog:{container_permissions:"Permissions sur le container",resource_permissions:"Permissions sur la resource"},action:{permissions:"Permissions"},right:{resource:{read:"Lire",append:"Enrichir",write:"Modifier",control:"Administrer"},container:{read:"Lister",append:"Ajouter",write:"Ajouter",control:"Administrer"}},agent:{anonymous:"Tous les utilisateurs",authenticated:"Utilisateurs connectés"},input:{agent_select:"Ajouter un utilisateur..."},message:{resource_edit_forbidden:"Vous n'avez pas la permission d'éditer cette ressource",user_not_allowed_to_login:"Vous n'avez pas le droit de vous connecter avec ce compte",new_user_created:"Votre compte a été créé, vous pouvez maintenant le compléter",user_connected:"Vous êtes maintenant connecté",user_disconnected:"Vous êtes maintenant déconnecté"}}};export{tt as EditActions,ot as EditWithPermissions,at as ListWithPermissions,st as LoginPage,ut as LogoutButton,et as PermissionsButton,mt as ResourceWithPermissions,it as ShowActions,ct as ShowWithPermissions,ht as UserMenu,Le as authProvider,gt as frenchMessages};
//# sourceMappingURL=index.es.js.map
