"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@mui/x-date-pickers/LocalizationProvider"),n=require("@mui/x-date-pickers/AdapterDateFns"),a=require("@mui/x-date-pickers/DatePicker"),o=require("@mui/x-date-pickers/TimePicker"),i=require("@mui/x-date-pickers/DateTimePicker"),l=require("@fullcalendar/react"),u=require("@fullcalendar/daygrid"),c=require("@mui/material"),s=require("@mui/styles/makeStyles"),f=require("react-router-dom"),p=require("@fullcalendar/list");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=d(e),y=d(l),b=d(u),g=d(s),v=d(p);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return function(t){return("0".repeat(e)+t).slice(-e)}},x=T(4),j=T(2),S=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,q=function(e){if(!(e instanceof Date)||isNaN(e.getDate()))return"";var t=x(e.getFullYear()),r=j(e.getMonth()+1),n=j(e.getDate()),a=j(e.getHours()),o=j(e.getMinutes());return"".concat(t,"-").concat(r,"-").concat(n,"T").concat(a,":").concat(o)},E=function(e){return null==e||""===e?"":e instanceof Date?q(e):S.test(e)?e:q(new Date(e))},F=function(e){return e?new Date(e):""},I=["PickerComponent","format","label","source","helperText","onBlur","onChange","onFocus","parse","validate","defaultValue","locale","pickerVariant","stringFormat","allowClear"],V=["allowEmpty","alwaysOn","component","defaultValue","format","formClassName","initialValue","initializeForm","input","isRequired","label","limitChoicesToValue","locale","meta","options","optionText","optionValue","parse","source","textAlign","translate","translateChoice","labelTime"],A=function(a){var o=a.PickerComponent,i=a.format,l=void 0===i?E:i,u=a.label,c=a.source,s=a.helperText,f=a.onBlur,p=a.onChange,d=a.onFocus,y=a.parse,b=void 0===y?F:y,g=a.validate;a.defaultValue;var v=a.locale;a.pickerVariant;var h=a.stringFormat,P=void 0===h?"ISO":h;a.allowClear;var w=C(a,I),D=t.useInput(O({format:l,onBlur:f,onChange:p,onFocus:d,parse:b,source:c,validate:g},w)),T=D.field,x=D.isRequired,j=D.fieldState,S=j.error,q=j.isTouched,V=e.useCallback((function(e){Date.parse(e)?T.onChange("ISO"===P?e.toISOString():e.toString()):T.onChange(null)}),[]);return m.default.createElement(r.LocalizationProvider,{dateAdapter:n.AdapterDateFns,adapterLocale:v},m.default.createElement(o,k({label:m.default.createElement(t.FieldTitle,{label:u,source:c,isRequired:x}),error:!(!q||!S),slotProps:{textField:{helperText:m.default.createElement(t.InputHelperText,{touched:q,error:S,helperText:s})}}},L(w),{value:T.value?new Date(T.value):null,onChange:V,onBlur:function(){return T.onBlur(T.value?"ISO"===P?new Date(T.value).toISOString():new Date(T.value).toString():null)}})))};A.defaultProps={isRequired:!1,meta:{isTouched:!1,error:!1},locale:void 0,parse:function(e){return""===e?null:e}};var L=function(e){return e.allowEmpty,e.alwaysOn,e.component,e.defaultValue,e.format,e.formClassName,e.initialValue,e.initializeForm,e.input,e.isRequired,e.label,e.limitChoicesToValue,e.locale,e.meta,e.options,e.optionText,e.optionValue,e.parse,e.source,e.textAlign,e.translate,e.translateChoice,e.labelTime,C(e,V)},M=function(r){var n=r.label,a=r.startDate,o=r.endDate,i=r.linkType,l=t.useListContext(),u=l.data,c=l.isLoading,s=l.resource,p=w(f.useSearchParams(),2);p[0];var d=p[1],m=f.useNavigate(),y=t.useCreatePath(),b=new URLSearchParams(location.search),g=e.useCallback((function(e){var t=e.event;e.jsEvent.preventDefault(),m(t.url)}),[]),v=e.useCallback((function(e){var t=e.view;d((function(e){return O(O({},e),{},{month:t.currentStart.getMonth()+1,year:t.currentStart.getFullYear()})}))}),[d]),h=e.useMemo((function(){return!c&&u.filter((function(e){return e})).map((function(e){return{id:e.id,title:"string"==typeof n?e[n]:n(e),start:"string"==typeof a?e[a]:a(e),end:"string"==typeof o?e[o]:o(e),url:y({resource:s,id:e.id,type:i})}}))}),[c,u,s,y]);return{initialDate:b.has("month")?new Date(b.get("year"),b.get("month")-1):new Date,events:h,datesSet:v,eventClick:g}},B=g.default((function(e){return{"@global":{".fc-button":{backgroundColor:e.palette.primary.main+" !important",border:"none !important",opacity:"1 !important"},".fc-day-today":{backgroundColor:e.palette.secondary.light+" !important"},"a.fc-daygrid-dot-event":{color:"black !important"}}}})),R=function(e){var t=c.useTheme(),r=M(e);return B(),m.default.createElement(y.default,k({plugins:[b.default],locale:e.locale,initialView:"dayGridMonth",eventBackgroundColor:t.palette.primary.main},r))};R.defaultProps={linkType:"edit"};var N=g.default((function(e){return{"@global":{".fc-button":{backgroundColor:e.palette.primary.main+" !important",border:"none !important",opacity:"1 !important"}}}})),z=function(e){var t=M(e);return N(),m.default.createElement(y.default,k({plugins:[v.default],locale:e.locale,initialView:"listMonth"},t))};z.defaultProps={linkType:"edit"};exports.CalendarList=R,exports.DateInput=function(e){return m.default.createElement(A,k({PickerComponent:a.DatePicker},e))},exports.DateTimeInput=function(e){return m.default.createElement(A,k({PickerComponent:i.DateTimePicker},e))},exports.DaysList=z,exports.TimeInput=function(e){return m.default.createElement(A,k({PickerComponent:o.TimePicker},e))},exports.useFullCalendarProps=M;
//# sourceMappingURL=index.cjs.js.map
