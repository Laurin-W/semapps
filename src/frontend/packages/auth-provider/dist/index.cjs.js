"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),r=e(t),n=require("react-admin"),o=require("@semapps/archipelago-layout"),a=e(require("@material-ui/icons/Share")),i=require("@material-ui/core"),s=e(require("@material-ui/lab/Autocomplete")),c=e(require("@material-ui/icons/Person")),u=e(require("@material-ui/icons/Edit")),l=e(require("@material-ui/icons/Check")),m=e(require("@material-ui/icons/Public")),d=e(require("@material-ui/icons/VpnLock")),f=e(require("@material-ui/icons/Group")),p=require("@material-ui/styles"),h=require("@material-ui/core/styles"),g=e(require("@material-ui/icons/Lock")),v=e(require("@material-ui/core/MenuItem")),y=e(require("@material-ui/icons/PowerSettingsNew")),b=e(require("@material-ui/icons/AccountCircle"));function w(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){w(a,n,o,i,s,"next",e)}function s(e){w(a,n,o,i,s,"throw",e)}i(void 0)}))}}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw a}}return r}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e){this.message=e}T.prototype=new Error,T.prototype.name="InvalidCharacterError";var R="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new T("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,o=0,a=0,i="";n=t.charAt(a++);~n&&(r=o%4?64*r+n:n,o++%4)?i+=String.fromCharCode(255&r>>(-2*o&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function L(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(R(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return R(t)}}function _(e){this.message=e}function U(e,t){if("string"!=typeof e)throw new _("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(L(e.split(".")[r]))}catch(e){throw new _("Invalid token specified: "+e.message)}}_.prototype=new Error,_.prototype.name="InvalidTokenError";var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var q,B,W=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,r;t=N,r=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var o=e[n];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(n>0&&(o=o.replace(/^[\/]+/,"")),o=n<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var a=t.join("/"),i=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=r():t.urljoin=r()})),D=function(e){return e?Array.isArray(e)?e:[e]:void 0},M=function(e,t){return W(e,t.replace(e,"_acl/"))},z=function(e){return{"@base":e,acl:"http://www.w3.org/ns/auth/acl#",foaf:"http://xmlns.com/foaf/0.1/","acl:agent":{"@type":"@id"},"acl:agentGroup":{"@type":"@id"},"acl:agentClass":{"@type":"@id"},"acl:mode":{"@type":"@id"},"acl:accessTo":{"@type":"@id"}}},G="acl:agentClass",V=["acl:Append","acl:Write","acl:Control"],$=["acl:Append","acl:Write","acl:Control"],F=["acl:Write","acl:Control"],H=["acl:Control"],J=(P(q={},"acl:Read","auth.right.resource.read"),P(q,"acl:Append","auth.right.resource.append"),P(q,"acl:Write","auth.right.resource.write"),P(q,"acl:Control","auth.right.resource.control"),q),K=(P(B={},"acl:Read","auth.right.container.read"),P(B,"acl:Write","auth.right.container.write"),P(B,"acl:Control","auth.right.container.control"),B),Q=i.makeStyles((function(){return{list:{padding:0,width:"100%"},option:{padding:0}}})),X=function(e){var o=e.agents,a=e.addPermission,u=Q(),l=n.useTranslate(),m=S(t.useState(null),2),d=m[0],f=m[1],p=S(t.useState(""),2),h=p[0],g=p[1],v=S(t.useState([]),2),y=v[0],b=v[1],w=n.useGetList("Person",{page:1,perPage:100},{field:"pair:label",order:"ASC"},{q:h},{enabled:h.length>0}),E=w.ids,P=w.data;return t.useEffect((function(){b(E.length>0?Object.values(P):[])}),[E,P]),r.createElement(s,{classes:{option:u.option},getOptionLabel:function(e){return e["pair:label"]},filterOptions:function(e){return e.filter((function(e){return!Object.keys(o).includes(e.id)}))},options:y,noOptionsText:l("ra.navigation.no_results"),autoComplete:!0,blurOnSelect:!0,clearOnBlur:!0,disableClearable:!0,value:d,onChange:function(e,t){a(t.id||t["@id"],"acl:agent","acl:Read"),f(null),g(""),b([])},onInputChange:function(e,t){g(t)},renderInput:function(e){return r.createElement(i.TextField,k({},e,{label:l("auth.input.agent_select"),variant:"filled",margin:"dense",fullWidth:!0}))},renderOption:function(e){return r.createElement(i.List,{dense:!0,className:u.list},r.createElement(i.ListItem,{button:!0},r.createElement(i.ListItemAvatar,null,r.createElement(i.Avatar,{src:e.image},r.createElement(c,null))),r.createElement(i.ListItemText,{primary:e["pair:label"]})))}})},Y=function(e){var t=e.agent;switch(t.predicate){case G:return"foaf:Agent"===t.id?r.createElement(m,null):r.createElement(d,null);case"acl:agent":return r.createElement(c,null);case"acl:agentGroup":return r.createElement(f,null);default:throw new Error("Unknown agent predicate: "+t.predicate)}},Z=i.makeStyles((function(){return{listItem:{paddingLeft:4,paddingRight:36},primaryText:{width:"30%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},secondaryText:{textAlign:"center",width:"60%",fontStyle:"italic",color:"grey"}}})),ee=function(e){var o=e.isContainer,a=e.agent,s=e.addPermission,c=e.removePermission,m=Z(),d=n.useTranslate(),f=n.useDataProvider(),p=S(r.useState(null),2),h=p[0],g=p[1],v=S(t.useState(),2),y=v[0],b=v[1],w=S(t.useState(!0),2),E=w[0],P=w[1],k=S(t.useState(),2),C=k[0],x=k[1];if(t.useEffect((function(){"acl:agent"===a.predicate?f.getOne("Person",{id:a.id}).then((function(e){var t=e.data;b(t),P(!1)})).catch((function(e){x(e),P(!1)})):P(!1)}),[a.id,a.predicate]),"acl:agentGroup"===a.predicate)return null;var I=function(){return g(null)},O=o?K:J;return E?r.createElement(n.Loading,null):C?r.createElement(n.Error,null):r.createElement(i.ListItem,{className:m.listItem},r.createElement(i.ListItemAvatar,null,r.createElement(i.Avatar,{src:null==y?void 0:y.image},r.createElement(Y,{agent:a}))),r.createElement(i.ListItemText,{className:m.primaryText,primary:y?y["pair:label"]:d("foaf:Agent"===a.id?"auth.agent.anonymous":"auth.agent.authenticated")}),r.createElement(i.ListItemText,{className:m.secondaryText,primary:a.permissions&&a.permissions.map((function(e){return d(O[e])})).join(", ")}),r.createElement(i.ListItemSecondaryAction,null,r.createElement(i.IconButton,{onClick:function(e){return g(e.currentTarget)}},r.createElement(u,null)),r.createElement(i.Menu,{anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:I},Object.entries(O).map((function(e){var t=S(e,2),n=t[0],o=t[1],u=a.permissions&&a.permissions.includes(n);return r.createElement(i.MenuItem,{key:n,onClick:function(){u?c(a.id,a.predicate,n):s(a.id,a.predicate,n),I()}},r.createElement(i.ListItemIcon,null,u?r.createElement(l,null):null),r.createElement(i.ListItemText,{primary:d(o)}))})))))},te=i.makeStyles((function(e){return{list:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper}}})),re=function(e){var t=e.isContainer,n=e.agents,o=e.addPermission,a=e.removePermission,s=te();return r.createElement(i.List,{dense:!0,className:s.list},Object.entries(n).map((function(e){var n=S(e,2),i=n[0],s=n[1];return r.createElement(ee,{key:i,isContainer:t,agent:s,addPermission:o,removePermission:a})})))},ne=function(e){var r=n.usePermissionsOptimized(e).permissions,o=n.useAuthProvider(),a=S(t.useState({}),2),i=a[0],s=a[1];t.useEffect((function(){var e,t=(P(e={},"foaf:Agent",{id:"foaf:Agent",predicate:G,permissions:[]}),P(e,"acl:AuthenticatedAgent",{id:"acl:AuthenticatedAgent",predicate:G,permissions:[]}),e),n=function(e,r,n){t[e]?t[e].permissions.push(n):t[e]={id:e,predicate:r,permissions:[n]}};if(r){var o,a=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=A(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw o}}}}(r);try{var i=function(){var e=o.value;e[G]&&D(e[G]).forEach((function(t){return n(t,G,e["acl:mode"])})),e["acl:agent"]&&D(e["acl:agent"]).forEach((function(t){return n(t,"acl:agent",e["acl:mode"])})),e["acl:agentGroup"]&&D(e["acl:agentGroup"]).forEach((function(t){return n(t,"acl:agentGroup",e["acl:mode"])}))};for(a.s();!(o=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}s(t)}}),[r]);var c=t.useCallback((function(t,r,n){var a,c=x({},i);s(x(x({},i),{},P({},t,{id:t,predicate:r,permissions:i[t]?[].concat(O(null===(a=i[t])||void 0===a?void 0:a.permissions),[n]):[n]}))),o.addPermission(e,t,r,n).catch((function(e){s(c)}))}),[i,s,e,o]),u=t.useCallback((function(t,r,n){var a=x({},i);s(Object.fromEntries(Object.entries(i).map((function(e){var r=S(e,2),o=r[0],a=r[1];return a.id===t&&(a.permissions=a.permissions.filter((function(e){return e!==n}))),[o,a]})).filter((function(e){var t=S(e,2),r=(t[0],t[1]);return r.predicate===G||r.permissions.length>0})))),o.removePermission(e,t,r,n).catch((function(e){s(a)}))}),[i,s,e,o]);return{agents:i,addPermission:c,removePermission:u}},oe=i.makeStyles((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingTop:0,paddingBottom:0,paddingRight:0,maxHeight:210}}})),ae=function(e){var t=e.open,o=e.onClose,a=e.resourceId,s=e.isContainer,c=oe(),u=n.useTranslate(),l=ne(a),m=l.agents,d=l.addPermission,f=l.removePermission;return r.createElement(i.Dialog,{fullWidth:!0,open:t,onClose:o},r.createElement(i.DialogTitle,{className:c.title},u(s?"auth.dialog.container_permissions":"auth.dialog.resource_permissions")),r.createElement(i.DialogContent,{className:c.addForm},r.createElement(X,{agents:m,addPermission:d})),r.createElement(i.DialogContent,{className:c.listForm},r.createElement(re,{isContainer:s,agents:m,addPermission:d,removePermission:f})),r.createElement(i.DialogActions,{className:c.actions},r.createElement(n.Button,{label:"ra.action.close",variant:"text",onClick:o})))},ie=function(e){var o=e.record,i=e.resource,s=S(t.useState(!1),2),c=s[0],u=s[1],l=!!i?i:o.id||o["@id"];return r.createElement(r.Fragment,null,r.createElement(n.Button,{label:"auth.action.permissions",onClick:function(){return u(!0)}},r.createElement(a,null)),r.createElement(ae,{resourceId:l,isContainer:!!i,open:c,onClose:function(){return u(!1)}}))},se=function(e){var t=e.basePath,a=e.className,i=e.data,s=e.hasList,c=e.hasShow,u=e.hasControl,l=I(e,["basePath","className","data","hasList","hasShow","hasControl"]);return r.createElement(o.TopToolbar,k({className:a},l),s&&r.createElement(n.ListButton,{basePath:t,record:i}),c&&r.createElement(n.ShowButton,{basePath:t,record:i}),i&&u&&r.createElement(ie,{basePath:t,record:i}))},ce=function(e){var t=n.useRecordContext(),o=n.usePermissionsOptimized(t.id).permissions;return o&&o.some((function(e){return F.includes(e["acl:mode"])}))?r.createElement(n.DeleteButton,e):null},ue=i.makeStyles((function(){return{toolbar:{flex:1,display:"flex",justifyContent:"space-between"}}})),le=function(e){var t=ue();return r.createElement(n.Toolbar,k({},e,{className:t.toolbar}),r.createElement(n.SaveButton,null),r.createElement(ce,{undoable:!1}),"}")},me=function(e){var t=e.actions,a=e.resource,i=e.hasCreate,s=I(e,["actions","resource","hasCreate"]),c=n.usePermissionsOptimized(a).permissions;return r.createElement(o.List,k({},s,{resource:a,hasCreate:i&&!!c&&c.some((function(e){return V.includes(e["acl:mode"])})),actions:t&&c&&c.some((function(e){return H.includes(e["acl:mode"])}))?r.cloneElement(t,{bulkActions:r.createElement(ie,null)}):t}))};me.defaultProps={actions:r.createElement(o.ListActions,null)};var de=function(e){var t=e.basePath,a=e.className,i=e.data,s=e.hasList,c=e.hasEdit,u=e.hasControl,l=I(e,["basePath","className","data","hasList","hasEdit","hasControl"]);return r.createElement(o.TopToolbar,k({className:a},l),s&&r.createElement(n.ListButton,{basePath:t,record:i}),c&&r.createElement(n.EditButton,{basePath:t,record:i}),i&&u&&r.createElement(ie,{basePath:t,record:i}))},fe=h.makeStyles((function(e){return{main:{display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"flex-start",backgroundColor:e.palette.primary[500]},card:{minWidth:300,marginTop:"6em"},lockIconAvatar:{margin:"1em",display:"flex",justifyContent:"center"},lockIcon:{backgroundColor:e.palette.secondary[500]}}})),pe=function(e){var o=e.theme,a=e.history,s=e.location,c=e.buttons,u=e.userResource,l=fe(),m=n.useNotify(),d=n.useLogin(),f=n.useDataProvider(),v=n.useAuthProvider();return t.useEffect((function(){E(regeneratorRuntime.mark((function e(){var t,r,n,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=new URLSearchParams(s.search)).has("login")){e.next=14;break}if(!t.has("error")){e.next=6;break}"registration.not-allowed"===t.get("error")?m("auth.message.user_email_not_found","error"):m("auth.message.bad_request","error",{error:t.get("error")}),e.next=14;break;case 6:if(!t.has("token")){e.next=14;break}return r=t.get("token"),n=U(r),o=n.webId,e.next=11,f.getOne("Person",{id:o});case 11:i=e.sent,c=i.data,v.checkUser(c)?(localStorage.setItem("token",r),t.has("new")&&"true"===t.get("new")?(m("auth.message.new_user_created","info"),a.push("/"+u+"/"+encodeURIComponent(o)+"/edit")):(m("auth.message.user_connected","info"),a.push("/"))):(m("auth.message.user_not_allowed_to_login","error"),a.replace("/login"));case 14:t.has("logout")&&(localStorage.removeItem("token"),m("auth.message.user_disconnected","info"),a.push("/"));case 15:case"end":return e.stop()}}),e)})))()}),[s.search]),r.createElement(p.ThemeProvider,{theme:h.createMuiTheme(o)},r.createElement("div",{className:l.main},r.createElement(i.Card,{className:l.card},r.createElement("div",{className:l.lockIconAvatar},r.createElement(i.Avatar,{className:l.lockIcon},r.createElement(g,null))),c&&c.map((function(e,t){return r.createElement(i.CardActions,{key:t},r.cloneElement(e,{fullWidth:!0,variant:"outlined",type:"submit",onClick:function(){return d({},"/login")}}))})))),r.createElement(n.Notification,null))};pe.defaultProps={buttons:[r.createElement(i.Button,{startIcon:r.createElement(i.Avatar,{src:"/lescommuns.jpg"})},"Les Communs")],userResource:"Person"};var he=t.forwardRef((function(e,t){var o=n.useLogout();return r.createElement(v,{onClick:function(){return o()},ref:t},r.createElement(y,null),"   Se déconnecter")})),ge=t.forwardRef((function(e,t){var o=e.onClick,a=e.webId;return r.createElement(n.MenuItemLink,{ref:t,to:"/Person/".concat(encodeURIComponent(a),"/show"),primaryText:"Voir mon profil",leftIcon:r.createElement(b,null),onClick:o})})),ve=t.forwardRef((function(e,t){var o=e.onClick,a=e.webId;return r.createElement(n.MenuItemLink,{ref:t,to:"/Person/".concat(encodeURIComponent(a),"/edit"),primaryText:"Editer mon profil",leftIcon:r.createElement(u,null),onClick:o})})),ye=t.forwardRef((function(e,t){var o=e.onClick;return r.createElement(n.MenuItemLink,{ref:t,to:"/login",primaryText:"Se connecter",onClick:o})}));exports.DeleteButtonWithPermissions=ce,exports.EditActions=se,exports.EditToolbarWithPermissions=le,exports.EditWithPermissions=function(e){var o=n.usePermissionsOptimized(e.id).permissions,a=n.useNotify(),i=n.useRedirect();return t.useEffect((function(){o&&!o.some((function(e){return $.includes(e["acl:mode"])}))&&(a("auth.message.resource_edit_forbidden","error"),i(e.basePath))}),[o,i,a]),r.createElement(n.Edit,k({actions:r.createElement(se,{hasControl:!!o&&o.some((function(e){return H.includes(e["acl:mode"])}))})},e,{permissions:o}),r.cloneElement(e.children,x({toolbar:r.createElement(le,null)},e.children.props)))},exports.ListWithPermissions=me,exports.LoginPage=pe,exports.LogoutButton=he,exports.PermissionsButton=ie,exports.ResourceWithPermissions=function(e){var t=e.name,o=e.create,a=I(e,["name","create"]),i=n.usePermissionsOptimized(t).permissions;return r.createElement(n.Resource,k({},a,{name:t,create:i&&i.some((function(e){return V.includes(e["acl:mode"])}))?o:void 0}))},exports.ShowActions=de,exports.ShowWithPermissions=function(e){var t=n.usePermissionsOptimized(e.id).permissions;return r.createElement(n.Show,k({actions:r.createElement(de,{hasControl:!!t&&t.some((function(e){return H.includes(e["acl:mode"])}))})},e,{permissions:t,hasEdit:e.hasEdit&&!!t&&t.some((function(e){return $.includes(e["acl:mode"])}))}))},exports.UserMenu=function(e){var t=e.logout,o=I(e,["logout"]),a=n.useGetIdentity().identity;return r.createElement(n.UserMenu,o,a&&""!==a.id?[r.createElement(ge,{webId:a.id,key:"view"}),r.createElement(ve,{webId:a.id,key:"edit"}),r.cloneElement(t,{key:"logout"})]:r.createElement(ye,null))},exports.authProvider=function(e){var t,r,n,o,a,i,s=e.middlewareUri,c=e.allowAnonymous,u=void 0===c||c,l=e.checkUser,m=e.httpClient,d=e.checkPermissions,f=e.resources;return{login:(i=E(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new URL(window.location.href),window.location.href="".concat(s,"auth?redirectUrl=")+encodeURIComponent(r.origin+"/login?login=true");case 2:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)}),logout:(a=E(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URL(window.location.href),u){e.next=6;break}localStorage.removeItem("token"),window.location.href="".concat(s,"auth/logout?redirectUrl=")+encodeURIComponent(t.origin+"/login"),e.next=8;break;case 6:return window.location.href="".concat(s,"auth/logout?redirectUrl=")+encodeURIComponent(t.origin+"/login?logout=true"),e.abrupt("return","/");case 8:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),checkAuth:(o=E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("token")||u){e.next=3;break}throw new Error;case 3:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)}),checkUser:function(e){return!l||l(e)},checkError:function(e){return Promise.resolve()},getPermissions:(n=E(regeneratorRuntime.mark((function e(t){var r,n,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=2;break}return e.abrupt("return",!0);case 2:return r=f[t]?f[t].containerUri:t,n=M(s,r),e.next=6,m(n);case 6:return o=e.sent,a=o.json,e.abrupt("return",a["@graph"]);case 9:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),addPermission:(r=E(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f[t]?f[t].containerUri:t,c=M(s,i),P(a={"@id":"#"+o.replace("acl:",""),"@type":"acl:Authorization"},n,r),P(a,"acl:accessTo",i),P(a,"acl:mode",o),u=a,e.next=5,m(c,{method:"PATCH",body:JSON.stringify({"@context":z(c),"@graph":[u]})});case 5:case"end":return e.stop()}}),e)}))),function(e,t,n,o){return r.apply(this,arguments)}),removePermission:(t=E(regeneratorRuntime.mark((function e(t,r,n,o){var a,i,c,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f[t]?f[t].containerUri:t,i=M(s,a),e.next=4,m(i);case 4:return c=e.sent,u=c.json,l=u["@graph"].filter((function(e){return!e["@id"].includes("#Default")})).map((function(e){var t=D(e["acl:mode"]),a=D(e[n]);return o&&t.includes(o)&&a&&a.includes(r)&&(a=a.filter((function(e){return e!==r}))),x(x({},e),{},P({},n,a))})),e.next=9,m(i,{method:"PUT",body:JSON.stringify({"@context":z(i),"@graph":l})});case 9:case"end":return e.stop()}}),e)}))),function(e,r,n,o){return t.apply(this,arguments)}),getIdentity:function(){var e=localStorage.getItem("token");if(e){var t=U(e);return{id:t.webId,fullName:t.name}}}}},exports.frenchMessages={auth:{dialog:{container_permissions:"Permissions sur le container",resource_permissions:"Permissions sur la resource"},action:{permissions:"Permissions"},right:{resource:{read:"Lire",append:"Enrichir",write:"Modifier",control:"Administrer"},container:{read:"Lister",append:"Ajouter",write:"Ajouter",control:"Administrer"}},agent:{anonymous:"Tous les utilisateurs",authenticated:"Utilisateurs connectés"},input:{agent_select:"Ajouter un utilisateur..."},message:{resource_edit_forbidden:"Vous n'avez pas la permission d'éditer cette ressource",user_not_allowed_to_login:"Vous n'avez pas le droit de vous connecter avec ce compte",user_email_not_found:"Aucun compte trouvé avec cette adresse mail",new_user_created:"Votre compte a été créé, vous pouvez maintenant le compléter",user_connected:"Vous êtes maintenant connecté",user_disconnected:"Vous êtes maintenant déconnecté",bad_request:"Requête erronée (Message d'erreur renvoyé par le serveur: %{error})"}}};
//# sourceMappingURL=index.cjs.js.map
