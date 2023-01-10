import*as e from"react";import r,{useEffect as t,useState as n}from"react";import{useListContext as a,useResourceContext as l,sanitizeListRestProps as o,RecordContextProvider as i,ChipField as c,Link as s,linkToRecord as u,useGetList as m,getResources as f,FilterList as d,FilterListItem as p,Button as h,useResourceDefinition as b,TopToolbar as v,CreateButton as y,ExportButton as E,List as g}from"react-admin";import{makeStyles as k,LinearProgress as w,Grid as P,Card as x,CardActionArea as C,CardMedia as O,CardContent as L,CardActions as j,useMediaQuery as N}from"@material-ui/core";import I from"@material-ui/icons/AddCircle";import S from"@material-ui/icons/Launch";import{useGetExternalLink as F,useDataModel as V,useContainers as T}from"@semapps/semantic-data-provider";import A from"react-masonry-css";import{useSelector as U,shallowEqual as _}from"react-redux";import{useLocation as R}from"react-router";function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function B(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function D(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,l=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(l.push(n.value),!r||l.length!==r);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return z(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var M=["classes","className","children","linkType","component","primaryText","appendLink","externalLinks"],$=k((function(e){return{root:{display:"flex",flexWrap:"wrap"},link:{textDecoration:"none",maxWidth:"100%"},chipField:{maxWidth:"100%"},addIcon:{cursor:"pointer",fontSize:35,position:"relative",top:-2,left:-2},launchIcon:{width:16,paddingRight:6,marginLeft:-10}}})),q=function(e){return e.stopPropagation()},G=function(){},H=function(e){e.classes,e.className,e.children;var t=e.linkType,n=void 0===t?"edit":t,m=e.component,f=void 0===m?"div":m,d=e.primaryText,p=e.appendLink,h=e.externalLinks,b=void 0!==h&&h,v=B(e,M),y=a(e),E=y.ids,g=y.data,k=y.loaded,P=y.basePath,x=l(e),C=F(b),O=$(e),L=f;return!1===k?r.createElement(w,null):r.createElement(L,W({className:O.root},o(v)),E.map((function(e){if(!g[e]||g[e]._error)return null;var t=C(g[e]);return t?r.createElement(i,{value:g[e],key:e},r.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:O.link,onClick:q},r.createElement(c,{record:g[e],resource:x,basePath:P,source:d,className:O.chipField,color:"secondary",deleteIcon:r.createElement(S,{className:O.launchIcon}),onClick:G,onDelete:G}))):n?r.createElement(i,{value:g[e],key:e},r.createElement(s,{className:O.link,to:u(P,e,n),onClick:q},r.createElement(c,{record:g[e],resource:x,basePath:P,source:d,className:O.chipField,color:"secondary",onClick:G}))):r.createElement(i,{value:g[e],key:e},r.createElement(c,{record:g[e],resource:x,basePath:P,source:d,className:O.chipField,color:"secondary",onClick:G}))})),p&&r.createElement(I,{color:"primary",className:O.addIcon,onClick:p}))},J=function(e){return e.stopPropagation()},K=function(){},Q=function(r){var t=r.children,n=r.linkType,l=r.externalLinks,o=r.spacing,c=r.xs,m=r.sm,f=r.md,d=r.lg,p=r.xl,h=a(),b=h.ids,v=h.data,y=h.basePath,E=F(l);return e.createElement(P,{container:!0,spacing:o},b.map((function(r){if(!v[r]||v[r]._error)return null;var a,l=E(v[r]);return a=l?e.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",onClick:J},e.cloneElement(e.Children.only(t),{record:v[r],basePath:t.props.basePath||y,externalLink:!0,onClick:K})):n?e.createElement(s,{to:u(y,r,n),onClick:J},e.cloneElement(e.Children.only(t),{record:v[r],basePath:t.props.basePath||y,onClick:K})):e.cloneElement(e.Children.only(t),{record:v[r],basePath:t.props.basePath||y}),e.createElement(P,{item:!0,key:r,xs:c,sm:m,md:f,lg:d,xl:p},e.createElement(i,{value:v[r],key:r},a))})))};Q.defaultProps={xs:6,spacing:3,linkType:"edit",externalLinks:!1};var X=k((function(){return{grid:{display:"flex",marginLeft:-20,marginBottom:-20,width:"auto"},column:{paddingLeft:20,backgroundClip:"padding-box"},card:{marginBottom:20},media:{height:0,paddingTop:"56.25%"}}})),Y=function(e){var t=e.image,n=e.content,l=e.actions,o=e.breakpointCols,i=e.linkType,c=X(),m=a(),f=m.ids,d=m.data,p=m.basePath;return r.createElement(A,{breakpointCols:o,className:c.grid,columnClassName:c.column},f.map((function(e){if(!d[e]||d[e]._error)return null;var a="function"==typeof t?t(d[e]):t;return r.createElement(x,{key:e,className:c.card},r.createElement(s,{to:u(p,e)+"/"+i},r.createElement(C,null,a&&r.createElement(O,{className:c.media,image:a}),n&&r.createElement(L,null,n(d[e])))),l&&r.createElement(j,null,l.map((function(t){return r.createElement(t,{record:d[e],basePath:p})}))))})))};Y.defaultProps={breakpointCols:{default:3,1050:2,700:1},linkType:"edit"};var Z=function(e){var t=e.source,n=e.id,a=l(),o=m(a).data;return r.createElement(r.Fragment,null," ",r.createElement("span",{className:"filter-count"},"("+Object.values(o).filter((function(e){return[].concat(e[t]).includes(n)})).length+")"))},ee=function(e){var n=e.reference,o=e.source,i=e.inverseSource,c=e.limit,s=e.sort,u=e.filter,h=e.label,b=e.icon,v=e.showCounters,y=m(n,{page:1,perPage:c},s,u),E=y.data,g=y.ids,k=U(f,_).filter((function(e){return(null==e?void 0:e.name)===n}))[0],w=l();V(w);var P=T(w),x=a();x.displayedFilters,x.filterValues;var C=x.setFilters;x.hideFilter,t((function(){var e=new URLSearchParams(window.location.search);Object.fromEntries(e.entries()).filter||C({})}),[]);return r.createElement(d,{label:h||k.options.label,icon:b||r.createElement(k.icon)},g.filter((function(e){return function(e){if(!i)return!0;if(!P||!E||!E[e][i])return!1;var r=!1;return Object.values(P).forEach((function(t){t.forEach((function(t){[].concat(E[e][i]).forEach((function(e){e.startsWith(t)&&(r=!0)}))}))})),r}(e)})).map((function(e){return r.createElement(p,{key:e,label:r.createElement("span",{className:"filter-label"},E[e]["pair:label"],v&&r.createElement(Z,{source:o,id:e})),value:(t={},n=o,a=e,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t)});var t,n,a})))};ee.defaultProps={limit:25,showCounters:!0};var re=r.createContext({views:null,currentView:null,setView:function(){return null}}),te=function(){var e=new URLSearchParams(R().search),t=r.useContext(re),n=t.views,a=t.currentView,l=t.setView;return n?Object.entries(n).filter((function(e){return D(e,1)[0]!==a})).map((function(t){var n=D(t,2),a=n[0],o=n[1];return e.set("view",a),e.set("page",1),e.set("perPage",o.perPage),o.sort&&(e.set("sort",o.sort.field),e.set("order",o.sort.order)),r.createElement(s,{key:a,to:"?"+e.toString()},r.createElement(h,{onClick:function(){return l(a)},label:o.label},r.createElement(o.icon)))})):null},ne=["bulkActions","basePath","currentSort","displayedFilters","exporter","filters","filterValues","onUnselectItems","resource","selectedIds","showFilter","total"],ae=function(e){var t=e.bulkActions,n=e.basePath,a=e.currentSort,l=e.displayedFilters,o=e.exporter,i=e.filters,c=e.filterValues,s=e.onUnselectItems,u=e.resource,m=e.selectedIds,f=e.showFilter,d=e.total,p=B(e,ne),h=N((function(e){return e.breakpoints.down("xs")})),g=b(p);return r.createElement(v,null,r.createElement(te,null),i&&r.cloneElement(i,{resource:u,showFilter:f,displayedFilters:l,filterValues:c,context:"button"}),g.hasCreate&&r.createElement(y,{basePath:n}),!h&&!1!==o&&r.createElement(E,{disabled:0===d,resource:u,sort:a,filter:c,exporter:o}),t&&r.cloneElement(t,{basePath:n,filterValues:c,resource:u,selectedIds:m,onUnselectItems:s}))},le=["children","actions","views","ListComponent"],oe=function(e){e.children;var t=e.actions,a=e.views,l=e.ListComponent,o=B(e,le),i=new URLSearchParams(R().search),c=i.has("view")?i.get("view"):Object.keys(a)[0],s=D(n(c),2),u=s[0],m=s[1];return r.createElement(re.Provider,{value:{views:a,currentView:u,setView:m}},r.createElement(l,W({actions:t,pagination:a[u].pagination,perPage:a[c].perPage,sort:a[c].sort},o),a[u].list))};oe.defaultProps={actions:r.createElement(ae,null),ListComponent:g};export{H as ChipList,Q as GridList,ae as ListActionsWithViews,re as ListViewContext,Y as MasonryList,oe as MultiViewsList,ee as ReferenceFilter,te as ViewsButtons};
//# sourceMappingURL=index.es.js.map