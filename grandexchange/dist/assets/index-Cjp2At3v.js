function kT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ST(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fw={exports:{}},Wu={},pw={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),AT=Symbol.for("react.portal"),CT=Symbol.for("react.fragment"),PT=Symbol.for("react.strict_mode"),RT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),VT=Symbol.for("react.memo"),MT=Symbol.for("react.lazy"),yg=Symbol.iterator;function jT(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var mw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gw=Object.assign,yw={};function Is(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vw(){}vw.prototype=Is.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=yw,this.updater=n||mw}var ff=hf.prototype=new vw;ff.constructor=hf;gw(ff,Is.prototype);ff.isPureReactComponent=!0;var vg=Array.isArray,ww=Object.prototype.hasOwnProperty,pf={current:null},_w={key:!0,ref:!0,__self:!0,__source:!0};function Ew(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ww.call(e,r)&&!_w.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:da,type:t,key:s,ref:o,props:i,_owner:pf.current}}function FT(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function UT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wg=/\/+/g;function td(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}function Il(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case AT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+td(o,0):r,vg(i)?(n="",t!=null&&(n=t.replace(wg,"$&/")+"/"),Il(i,e,n,"",function(d){return d})):i!=null&&(mf(i)&&(i=FT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+td(s,l);o+=Il(s,e,n,u,i)}else if(u=jT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+td(s,l++),o+=Il(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(t,e,n){if(t==null)return t;var r=[],i=0;return Il(t,r,"","",function(s){return e.call(n,s,i++)}),r}function BT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},bl={transition:null},zT={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:bl,ReactCurrentOwner:pf};function xw(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=Is;te.Fragment=CT;te.Profiler=RT;te.PureComponent=hf;te.StrictMode=PT;te.Suspense=LT;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zT;te.act=xw;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=pf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ww.call(e,u)&&!_w.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:da,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:DT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};te.createElement=Ew;te.createFactory=function(t){var e=Ew.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:OT,render:t}};te.isValidElement=mf;te.lazy=function(t){return{$$typeof:MT,_payload:{_status:-1,_result:t},_init:BT}};te.memo=function(t,e){return{$$typeof:VT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};te.unstable_act=xw;te.useCallback=function(t,e){return yt.current.useCallback(t,e)};te.useContext=function(t){return yt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};te.useEffect=function(t,e){return yt.current.useEffect(t,e)};te.useId=function(){return yt.current.useId()};te.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return yt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};te.useRef=function(t){return yt.current.useRef(t)};te.useState=function(t){return yt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return yt.current.useTransition()};te.version="18.3.1";pw.exports=te;var U=pw.exports;const Tw=ST(U),$T=kT({__proto__:null,default:Tw},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=U,WT=Symbol.for("react.element"),qT=Symbol.for("react.fragment"),KT=Object.prototype.hasOwnProperty,GT=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QT={key:!0,ref:!0,__self:!0,__source:!0};function Iw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)KT.call(e,r)&&!QT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WT,type:t,key:s,ref:o,props:i,_owner:GT.current}}Wu.Fragment=qT;Wu.jsx=Iw;Wu.jsxs=Iw;fw.exports=Wu;var f=fw.exports,$d={},bw={exports:{}},Nt={},kw={exports:{}},Sw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ee=$.length;$.push(X);e:for(;0<ee;){var Ee=ee-1>>>1,he=$[Ee];if(0<i(he,X))$[Ee]=X,$[ee]=he,ee=Ee;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ee=$.pop();if(ee!==X){$[0]=ee;e:for(var Ee=0,he=$.length,Ae=he>>>1;Ee<Ae;){var kn=2*(Ee+1)-1,Sn=$[kn],An=kn+1,Cn=$[An];if(0>i(Sn,ee))An<he&&0>i(Cn,Sn)?($[Ee]=Cn,$[An]=ee,Ee=An):($[Ee]=Sn,$[kn]=ee,Ee=kn);else if(An<he&&0>i(Cn,ee))$[Ee]=Cn,$[An]=ee,Ee=An;else break e}}return X}function i($,X){var ee=$.sortIndex-X.sortIndex;return ee!==0?ee:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,y=3,x=!1,S=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=$)r(d),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(d)}}function D($){if(R=!1,k($),!S)if(n(u)!==null)S=!0,zs(F);else{var X=n(d);X!==null&&bn(D,X.startTime-$)}}function F($,X){S=!1,R&&(R=!1,T(v),v=-1),x=!0;var ee=y;try{for(k(X),m=n(u);m!==null&&(!(m.expirationTime>X)||$&&!A());){var Ee=m.callback;if(typeof Ee=="function"){m.callback=null,y=m.priorityLevel;var he=Ee(m.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?m.callback=he:m===n(u)&&r(u),k(X)}else r(u);m=n(u)}if(m!==null)var Ae=!0;else{var kn=n(d);kn!==null&&bn(D,kn.startTime-X),Ae=!1}return Ae}finally{m=null,y=ee,x=!1}}var B=!1,E=null,v=-1,_=5,I=-1;function A(){return!(t.unstable_now()-I<_)}function P(){if(E!==null){var $=t.unstable_now();I=$;var X=!0;try{X=E(!0,$)}finally{X?b():(B=!1,E=null)}}else B=!1}var b;if(typeof w=="function")b=function(){w(P)};else if(typeof MessageChannel<"u"){var Vt=new MessageChannel,Br=Vt.port2;Vt.port1.onmessage=P,b=function(){Br.postMessage(null)}}else b=function(){N(P,0)};function zs($){E=$,B||(B=!0,b())}function bn($,X){v=N(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){S||x||(S=!0,zs(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var ee=y;y=X;try{return $()}finally{y=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=y;y=$;try{return X()}finally{y=ee}},t.unstable_scheduleCallback=function($,X,ee){var Ee=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ee+ee:Ee):ee=Ee,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,$={id:p++,callback:X,priorityLevel:$,startTime:ee,expirationTime:he,sortIndex:-1},ee>Ee?($.sortIndex=ee,e(d,$),n(u)===null&&$===n(d)&&(R?(T(v),v=-1):R=!0,bn(D,ee-Ee))):($.sortIndex=he,e(u,$),S||x||(S=!0,zs(F))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var X=y;return function(){var ee=y;y=X;try{return $.apply(this,arguments)}finally{y=ee}}}})(Sw);kw.exports=Sw;var YT=kw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=U,Pt=YT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Aw=new Set,Lo={};function gi(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Lo[t]=e,t=0;t<e.length;t++)Aw.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hd=Object.prototype.hasOwnProperty,JT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},Eg={};function ZT(t){return Hd.call(Eg,t)?!0:Hd.call(_g,t)?!1:JT.test(t)?Eg[t]=!0:(_g[t]=!0,!1)}function eI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tI(t,e,n,r){if(e===null||typeof e>"u"||eI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gf,yf);Xe[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gf,yf);Xe[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gf,yf);Xe[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vf(t,e,n,r){var i=Xe.hasOwnProperty(e)?Xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tI(e,n,i,r)&&(n=null),r||i===null?ZT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Vi=Symbol.for("react.fragment"),wf=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),Cw=Symbol.for("react.provider"),Pw=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),Ef=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Rw=Symbol.for("react.offscreen"),xg=Symbol.iterator;function no(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var Ie=Object.assign,nd;function ho(t){if(nd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nd=e&&e[1]||""}return`
`+nd+t}var rd=!1;function id(t,e){if(!t||rd)return"";rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ho(t):""}function nI(t){switch(t.tag){case 5:return ho(t.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return t=id(t.type,!1),t;case 11:return t=id(t.type.render,!1),t;case 1:return t=id(t.type,!0),t;default:return""}}function Gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vi:return"Fragment";case Li:return"Portal";case Wd:return"Profiler";case wf:return"StrictMode";case qd:return"Suspense";case Kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pw:return(t.displayName||"Context")+".Consumer";case Cw:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ef:return e=t.displayName||null,e!==null?e:Gd(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Gd(t(e))}catch{}}return null}function rI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gd(e);case 8:return e===wf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iI(t){var e=Nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=iI(t))}function Dw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qd(t,e){var n=e.checked;return Ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ow(t,e){e=e.checked,e!=null&&vf(t,"checked",e,!1)}function Yd(t,e){Ow(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xd(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xd(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(fo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function Lw(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,Mw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sI=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){sI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function jw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function Fw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oI=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(oI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,Qi=null,Yi=null;function Sg(t){if(t=pa(t)){if(typeof rh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Yu(e),rh(t.stateNode,t.type,e))}}function Uw(t){Qi?Yi?Yi.push(t):Yi=[t]:Qi=t}function Bw(){if(Qi){var t=Qi,e=Yi;if(Yi=Qi=null,Sg(t),e)for(t=0;t<e.length;t++)Sg(e[t])}}function zw(t,e){return t(e)}function $w(){}var sd=!1;function Hw(t,e,n){if(sd)return t(e,n);sd=!0;try{return zw(t,e,n)}finally{sd=!1,(Qi!==null||Yi!==null)&&($w(),Bw())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ih=!1;if(zn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){ih=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{ih=!1}function aI(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var xo=!1,ql=null,Kl=!1,sh=null,lI={onError:function(t){xo=!0,ql=t}};function uI(t,e,n,r,i,s,o,l,u){xo=!1,ql=null,aI.apply(lI,arguments)}function cI(t,e,n,r,i,s,o,l,u){if(uI.apply(this,arguments),xo){if(xo){var d=ql;xo=!1,ql=null}else throw Error(j(198));Kl||(Kl=!0,sh=d)}}function yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(yi(t)!==t)throw Error(j(188))}function dI(t){var e=t.alternate;if(!e){if(e=yi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ag(i),t;if(s===r)return Ag(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function qw(t){return t=dI(t),t!==null?Kw(t):null}function Kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Kw(t);if(e!==null)return e;t=t.sibling}return null}var Gw=Pt.unstable_scheduleCallback,Cg=Pt.unstable_cancelCallback,hI=Pt.unstable_shouldYield,fI=Pt.unstable_requestPaint,Re=Pt.unstable_now,pI=Pt.unstable_getCurrentPriorityLevel,Tf=Pt.unstable_ImmediatePriority,Qw=Pt.unstable_UserBlockingPriority,Gl=Pt.unstable_NormalPriority,mI=Pt.unstable_LowPriority,Yw=Pt.unstable_IdlePriority,qu=null,dn=null;function gI(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(qu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:wI,yI=Math.log,vI=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(yI(t)/vI|0)|0}var rl=64,il=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=po(l):(s&=o,s!==0&&(r=po(s)))}else o=n&~i,o!==0?r=po(o):s!==0&&(r=po(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function _I(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=_I(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xw(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function od(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ha(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function xI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function If(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function Jw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zw,bf,e_,t_,n_,ah=!1,sl=[],gr=null,yr=null,vr=null,jo=new Map,Fo=new Map,ir=[],TI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(e.pointerId)}}function io(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function II(t,e,n,r,i){switch(e){case"focusin":return gr=io(gr,t,e,n,r,i),!0;case"dragenter":return yr=io(yr,t,e,n,r,i),!0;case"mouseover":return vr=io(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return jo.set(s,io(jo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Fo.set(s,io(Fo.get(s)||null,t,e,n,r,i)),!0}return!1}function r_(t){var e=Yr(t.target);if(e!==null){var n=yi(e);if(n!==null){if(e=n.tag,e===13){if(e=Ww(n),e!==null){t.blockedOn=e,n_(t.priority,function(){e_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=pa(n),e!==null&&bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){kl(t)&&n.delete(e)}function bI(){ah=!1,gr!==null&&kl(gr)&&(gr=null),yr!==null&&kl(yr)&&(yr=null),vr!==null&&kl(vr)&&(vr=null),jo.forEach(Rg),Fo.forEach(Rg)}function so(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,bI)))}function Uo(t){function e(i){return so(i,t)}if(0<sl.length){so(sl[0],t);for(var n=1;n<sl.length;n++){var r=sl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&so(gr,t),yr!==null&&so(yr,t),vr!==null&&so(vr,t),jo.forEach(e),Fo.forEach(e),n=0;n<ir.length;n++)r=ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)r_(n),n.blockedOn===null&&ir.shift()}var Xi=Yn.ReactCurrentBatchConfig,Yl=!0;function kI(t,e,n,r){var i=ce,s=Xi.transition;Xi.transition=null;try{ce=1,kf(t,e,n,r)}finally{ce=i,Xi.transition=s}}function SI(t,e,n,r){var i=ce,s=Xi.transition;Xi.transition=null;try{ce=4,kf(t,e,n,r)}finally{ce=i,Xi.transition=s}}function kf(t,e,n,r){if(Yl){var i=lh(t,e,n,r);if(i===null)gd(t,e,r,Xl,n),Pg(t,r);else if(II(i,t,e,n,r))r.stopPropagation();else if(Pg(t,r),e&4&&-1<TI.indexOf(t)){for(;i!==null;){var s=pa(i);if(s!==null&&Zw(s),s=lh(t,e,n,r),s===null&&gd(t,e,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gd(t,e,r,null,n)}}var Xl=null;function lh(t,e,n,r){if(Xl=null,t=xf(r),t=Yr(t),t!==null)if(e=yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xl=t,null}function i_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pI()){case Tf:return 1;case Qw:return 4;case Gl:case mI:return 16;case Yw:return 536870912;default:return 16}default:return 16}}var cr=null,Sf=null,Sl=null;function s_(){if(Sl)return Sl;var t,e=Sf,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Ng(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:Ng,this.isPropagationStopped=Ng,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Af=Dt(bs),fa=Ie({},bs,{view:0,detail:0}),AI=Dt(fa),ad,ld,oo,Ku=Ie({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(ad=t.screenX-oo.screenX,ld=t.screenY-oo.screenY):ld=ad=0,oo=t),ad)},movementY:function(t){return"movementY"in t?t.movementY:ld}}),Dg=Dt(Ku),CI=Ie({},Ku,{dataTransfer:0}),PI=Dt(CI),RI=Ie({},fa,{relatedTarget:0}),ud=Dt(RI),NI=Ie({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),DI=Dt(NI),OI=Ie({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LI=Dt(OI),VI=Ie({},bs,{data:0}),Og=Dt(VI),MI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}function Cf(){return UI}var BI=Ie({},fa,{key:function(t){if(t.key){var e=MI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zI=Dt(BI),$I=Ie({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=Dt($I),HI=Ie({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),WI=Dt(HI),qI=Ie({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),KI=Dt(qI),GI=Ie({},Ku,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QI=Dt(GI),YI=[9,13,27,32],Pf=zn&&"CompositionEvent"in window,To=null;zn&&"documentMode"in document&&(To=document.documentMode);var XI=zn&&"TextEvent"in window&&!To,o_=zn&&(!Pf||To&&8<To&&11>=To),Vg=" ",Mg=!1;function a_(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function JI(t,e){switch(t){case"compositionend":return l_(e);case"keypress":return e.which!==32?null:(Mg=!0,Vg);case"textInput":return t=e.data,t===Vg&&Mg?null:t;default:return null}}function ZI(t,e){if(Mi)return t==="compositionend"||!Pf&&a_(t,e)?(t=s_(),Sl=Sf=cr=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o_&&e.locale!=="ko"?null:e.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e1[t.type]:e==="textarea"}function u_(t,e,n,r){Uw(r),e=Jl(e,"onChange"),0<e.length&&(n=new Af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Io=null,Bo=null;function t1(t){__(t,0)}function Gu(t){var e=Ui(t);if(Dw(e))return t}function n1(t,e){if(t==="change")return e}var c_=!1;if(zn){var cd;if(zn){var dd="oninput"in document;if(!dd){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),dd=typeof Fg.oninput=="function"}cd=dd}else cd=!1;c_=cd&&(!document.documentMode||9<document.documentMode)}function Ug(){Io&&(Io.detachEvent("onpropertychange",d_),Bo=Io=null)}function d_(t){if(t.propertyName==="value"&&Gu(Bo)){var e=[];u_(e,Bo,t,xf(t)),Hw(t1,e)}}function r1(t,e,n){t==="focusin"?(Ug(),Io=e,Bo=n,Io.attachEvent("onpropertychange",d_)):t==="focusout"&&Ug()}function i1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gu(Bo)}function s1(t,e){if(t==="click")return Gu(e)}function o1(t,e){if(t==="input"||t==="change")return Gu(e)}function a1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:a1;function zo(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hd.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function Bg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zg(t,e){var n=Bg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bg(n)}}function h_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function f_(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l1(t){var e=f_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h_(n.ownerDocument.documentElement,n)){if(r!==null&&Rf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zg(n,s);var o=zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u1=zn&&"documentMode"in document&&11>=document.documentMode,ji=null,uh=null,bo=null,ch=!1;function $g(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||ji==null||ji!==Wl(r)||(r=ji,"selectionStart"in r&&Rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&zo(bo,r)||(bo=r,r=Jl(uh,"onSelect"),0<r.length&&(e=new Af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ji)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},hd={},p_={};zn&&(p_=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Qu(t){if(hd[t])return hd[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in p_)return hd[t]=e[n];return t}var m_=Qu("animationend"),g_=Qu("animationiteration"),y_=Qu("animationstart"),v_=Qu("transitionend"),w_=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){w_.set(t,e),gi(e,[t])}for(var fd=0;fd<Hg.length;fd++){var pd=Hg[fd],c1=pd.toLowerCase(),d1=pd[0].toUpperCase()+pd.slice(1);Mr(c1,"on"+d1)}Mr(m_,"onAnimationEnd");Mr(g_,"onAnimationIteration");Mr(y_,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(v_,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cI(r,e,void 0,t),t.currentTarget=null}function __(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wg(i,l,d),s=u}}}if(Kl)throw t=sh,Kl=!1,sh=null,t}function ye(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(E_(e,t,2,!1),n.add(r))}function md(t,e,n){var r=0;e&&(r|=4),E_(n,t,r,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[ll]){t[ll]=!0,Aw.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||md(n,!1,t),md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,md("selectionchange",!1,e))}}function E_(t,e,n,r){switch(i_(e)){case 1:var i=kI;break;case 4:i=SI;break;default:i=kf}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Yr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Hw(function(){var d=s,p=xf(n),m=[];e:{var y=w_.get(t);if(y!==void 0){var x=Af,S=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":x=zI;break;case"focusin":S="focus",x=ud;break;case"focusout":S="blur",x=ud;break;case"beforeblur":case"afterblur":x=ud;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=PI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=WI;break;case m_:case g_:case y_:x=DI;break;case v_:x=KI;break;case"scroll":x=AI;break;case"wheel":x=QI;break;case"copy":case"cut":case"paste":x=LI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Lg}var R=(e&4)!==0,N=!R&&t==="scroll",T=R?y!==null?y+"Capture":null:y;R=[];for(var w=d,k;w!==null;){k=w;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,T!==null&&(D=Mo(w,T),D!=null&&R.push(Ho(w,D,k)))),N)break;w=w.return}0<R.length&&(y=new x(y,S,null,n,p),m.push({event:y,listeners:R}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",y&&n!==nh&&(S=n.relatedTarget||n.fromElement)&&(Yr(S)||S[$n]))break e;if((x||y)&&(y=p.window===p?p:(y=p.ownerDocument)?y.defaultView||y.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=d,S=S?Yr(S):null,S!==null&&(N=yi(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=d),x!==S)){if(R=Dg,D="onMouseLeave",T="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(R=Lg,D="onPointerLeave",T="onPointerEnter",w="pointer"),N=x==null?y:Ui(x),k=S==null?y:Ui(S),y=new R(D,w+"leave",x,n,p),y.target=N,y.relatedTarget=k,D=null,Yr(p)===d&&(R=new R(T,w+"enter",S,n,p),R.target=k,R.relatedTarget=N,D=R),N=D,x&&S)t:{for(R=x,T=S,w=0,k=R;k;k=Ri(k))w++;for(k=0,D=T;D;D=Ri(D))k++;for(;0<w-k;)R=Ri(R),w--;for(;0<k-w;)T=Ri(T),k--;for(;w--;){if(R===T||T!==null&&R===T.alternate)break t;R=Ri(R),T=Ri(T)}R=null}else R=null;x!==null&&qg(m,y,x,R,!1),S!==null&&N!==null&&qg(m,N,S,R,!0)}}e:{if(y=d?Ui(d):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var F=n1;else if(jg(y))if(c_)F=o1;else{F=i1;var B=r1}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=s1);if(F&&(F=F(t,d))){u_(m,F,n,p);break e}B&&B(t,y,d),t==="focusout"&&(B=y._wrapperState)&&B.controlled&&y.type==="number"&&Xd(y,"number",y.value)}switch(B=d?Ui(d):window,t){case"focusin":(jg(B)||B.contentEditable==="true")&&(ji=B,uh=d,bo=null);break;case"focusout":bo=uh=ji=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,$g(m,n,p);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":$g(m,n,p)}var E;if(Pf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Mi?a_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(o_&&n.locale!=="ko"&&(Mi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Mi&&(E=s_()):(cr=p,Sf="value"in cr?cr.value:cr.textContent,Mi=!0)),B=Jl(d,v),0<B.length&&(v=new Og(v,t,null,n,p),m.push({event:v,listeners:B}),E?v.data=E:(E=l_(n),E!==null&&(v.data=E)))),(E=XI?JI(t,n):ZI(t,n))&&(d=Jl(d,"onBeforeInput"),0<d.length&&(p=new Og("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=E))}__(m,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mo(t,n),s!=null&&r.unshift(Ho(t,s,i)),s=Mo(t,e),s!=null&&r.push(Ho(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=Mo(n,s),u!=null&&o.unshift(Ho(n,u,l))):i||(u=Mo(n,s),u!=null&&o.push(Ho(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var f1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(p1,"")}function ul(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(j(425))}function Zl(){}var dh=null,hh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(y1)}:ph;function y1(t){setTimeout(function(){throw t})}function yd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),cn="__reactFiber$"+ks,Wo="__reactProps$"+ks,$n="__reactContainer$"+ks,mh="__reactEvents$"+ks,v1="__reactListeners$"+ks,w1="__reactHandles$"+ks;function Yr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$n]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qg(t);t!==null;){if(n=t[cn])return n;t=Qg(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[cn]||t[$n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Yu(t){return t[Wo]||null}var gh=[],Bi=-1;function jr(t){return{current:t}}function we(t){0>Bi||(t.current=gh[Bi],gh[Bi]=null,Bi--)}function pe(t,e){Bi++,gh[Bi]=t.current,t.current=e}var Rr={},lt=jr(Rr),xt=jr(!1),ii=Rr;function as(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function eu(){we(xt),we(lt)}function Yg(t,e,n){if(lt.current!==Rr)throw Error(j(168));pe(lt,e),pe(xt,n)}function x_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,rI(t)||"Unknown",i));return Ie({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ii=lt.current,pe(lt,t),pe(xt,xt.current),!0}function Xg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=x_(t,e,ii),r.__reactInternalMemoizedMergedChildContext=t,we(xt),we(lt),pe(lt,t)):we(xt),pe(xt,n)}var Dn=null,Xu=!1,vd=!1;function T_(t){Dn===null?Dn=[t]:Dn.push(t)}function _1(t){Xu=!0,T_(t)}function Fr(){if(!vd&&Dn!==null){vd=!0;var t=0,e=ce;try{var n=Dn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dn=null,Xu=!1}catch(i){throw Dn!==null&&(Dn=Dn.slice(t+1)),Gw(Tf,Fr),i}finally{ce=e,vd=!1}}return null}var zi=[],$i=0,nu=null,ru=0,Mt=[],jt=0,si=null,On=1,Ln="";function Kr(t,e){zi[$i++]=ru,zi[$i++]=nu,nu=t,ru=e}function I_(t,e,n){Mt[jt++]=On,Mt[jt++]=Ln,Mt[jt++]=si,si=t;var r=On;t=Ln;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-tn(e)+i|n<<i|r,Ln=s+t}else On=1<<s|n<<i|r,Ln=t}function Nf(t){t.return!==null&&(Kr(t,1),I_(t,1,0))}function Df(t){for(;t===nu;)nu=zi[--$i],zi[$i]=null,ru=zi[--$i],zi[$i]=null;for(;t===si;)si=Mt[--jt],Mt[jt]=null,Ln=Mt[--jt],Mt[jt]=null,On=Mt[--jt],Mt[jt]=null}var Ct=null,At=null,_e=!1,Jt=null;function b_(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,At=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:On,overflow:Ln}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,At=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(_e){var e=At;if(e){var n=e;if(!Jg(t,e)){if(yh(t))throw Error(j(418));e=wr(n.nextSibling);var r=Ct;e&&Jg(t,e)?b_(r,n):(t.flags=t.flags&-4097|2,_e=!1,Ct=t)}}else{if(yh(t))throw Error(j(418));t.flags=t.flags&-4097|2,_e=!1,Ct=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function cl(t){if(t!==Ct)return!1;if(!_e)return Zg(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=At)){if(yh(t))throw k_(),Error(j(418));for(;e;)b_(t,e),e=wr(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Ct?wr(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=At;t;)t=wr(t.nextSibling)}function ls(){At=Ct=null,_e=!1}function Of(t){Jt===null?Jt=[t]:Jt.push(t)}var E1=Yn.ReactCurrentBatchConfig;function ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ey(t){var e=t._init;return e(t._payload)}function S_(t){function e(T,w){if(t){var k=T.deletions;k===null?(T.deletions=[w],T.flags|=16):k.push(w)}}function n(T,w){if(!t)return null;for(;w!==null;)e(T,w),w=w.sibling;return null}function r(T,w){for(T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function i(T,w){return T=Tr(T,w),T.index=0,T.sibling=null,T}function s(T,w,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<w?(T.flags|=2,w):k):(T.flags|=2,w)):(T.flags|=1048576,w)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,w,k,D){return w===null||w.tag!==6?(w=bd(k,T.mode,D),w.return=T,w):(w=i(w,k),w.return=T,w)}function u(T,w,k,D){var F=k.type;return F===Vi?p(T,w,k.props.children,D,k.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&ey(F)===w.type)?(D=i(w,k.props),D.ref=ao(T,w,k),D.return=T,D):(D=Ll(k.type,k.key,k.props,null,T.mode,D),D.ref=ao(T,w,k),D.return=T,D)}function d(T,w,k,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==k.containerInfo||w.stateNode.implementation!==k.implementation?(w=kd(k,T.mode,D),w.return=T,w):(w=i(w,k.children||[]),w.return=T,w)}function p(T,w,k,D,F){return w===null||w.tag!==7?(w=ti(k,T.mode,D,F),w.return=T,w):(w=i(w,k),w.return=T,w)}function m(T,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return w=bd(""+w,T.mode,k),w.return=T,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case el:return k=Ll(w.type,w.key,w.props,null,T.mode,k),k.ref=ao(T,null,w),k.return=T,k;case Li:return w=kd(w,T.mode,k),w.return=T,w;case nr:var D=w._init;return m(T,D(w._payload),k)}if(fo(w)||no(w))return w=ti(w,T.mode,k,null),w.return=T,w;dl(T,w)}return null}function y(T,w,k,D){var F=w!==null?w.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return F!==null?null:l(T,w,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case el:return k.key===F?u(T,w,k,D):null;case Li:return k.key===F?d(T,w,k,D):null;case nr:return F=k._init,y(T,w,F(k._payload),D)}if(fo(k)||no(k))return F!==null?null:p(T,w,k,D,null);dl(T,k)}return null}function x(T,w,k,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(k)||null,l(w,T,""+D,F);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case el:return T=T.get(D.key===null?k:D.key)||null,u(w,T,D,F);case Li:return T=T.get(D.key===null?k:D.key)||null,d(w,T,D,F);case nr:var B=D._init;return x(T,w,k,B(D._payload),F)}if(fo(D)||no(D))return T=T.get(k)||null,p(w,T,D,F,null);dl(w,D)}return null}function S(T,w,k,D){for(var F=null,B=null,E=w,v=w=0,_=null;E!==null&&v<k.length;v++){E.index>v?(_=E,E=null):_=E.sibling;var I=y(T,E,k[v],D);if(I===null){E===null&&(E=_);break}t&&E&&I.alternate===null&&e(T,E),w=s(I,w,v),B===null?F=I:B.sibling=I,B=I,E=_}if(v===k.length)return n(T,E),_e&&Kr(T,v),F;if(E===null){for(;v<k.length;v++)E=m(T,k[v],D),E!==null&&(w=s(E,w,v),B===null?F=E:B.sibling=E,B=E);return _e&&Kr(T,v),F}for(E=r(T,E);v<k.length;v++)_=x(E,T,v,k[v],D),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?v:_.key),w=s(_,w,v),B===null?F=_:B.sibling=_,B=_);return t&&E.forEach(function(A){return e(T,A)}),_e&&Kr(T,v),F}function R(T,w,k,D){var F=no(k);if(typeof F!="function")throw Error(j(150));if(k=F.call(k),k==null)throw Error(j(151));for(var B=F=null,E=w,v=w=0,_=null,I=k.next();E!==null&&!I.done;v++,I=k.next()){E.index>v?(_=E,E=null):_=E.sibling;var A=y(T,E,I.value,D);if(A===null){E===null&&(E=_);break}t&&E&&A.alternate===null&&e(T,E),w=s(A,w,v),B===null?F=A:B.sibling=A,B=A,E=_}if(I.done)return n(T,E),_e&&Kr(T,v),F;if(E===null){for(;!I.done;v++,I=k.next())I=m(T,I.value,D),I!==null&&(w=s(I,w,v),B===null?F=I:B.sibling=I,B=I);return _e&&Kr(T,v),F}for(E=r(T,E);!I.done;v++,I=k.next())I=x(E,T,v,I.value,D),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?v:I.key),w=s(I,w,v),B===null?F=I:B.sibling=I,B=I);return t&&E.forEach(function(P){return e(T,P)}),_e&&Kr(T,v),F}function N(T,w,k,D){if(typeof k=="object"&&k!==null&&k.type===Vi&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case el:e:{for(var F=k.key,B=w;B!==null;){if(B.key===F){if(F=k.type,F===Vi){if(B.tag===7){n(T,B.sibling),w=i(B,k.props.children),w.return=T,T=w;break e}}else if(B.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&ey(F)===B.type){n(T,B.sibling),w=i(B,k.props),w.ref=ao(T,B,k),w.return=T,T=w;break e}n(T,B);break}else e(T,B);B=B.sibling}k.type===Vi?(w=ti(k.props.children,T.mode,D,k.key),w.return=T,T=w):(D=Ll(k.type,k.key,k.props,null,T.mode,D),D.ref=ao(T,w,k),D.return=T,T=D)}return o(T);case Li:e:{for(B=k.key;w!==null;){if(w.key===B)if(w.tag===4&&w.stateNode.containerInfo===k.containerInfo&&w.stateNode.implementation===k.implementation){n(T,w.sibling),w=i(w,k.children||[]),w.return=T,T=w;break e}else{n(T,w);break}else e(T,w);w=w.sibling}w=kd(k,T.mode,D),w.return=T,T=w}return o(T);case nr:return B=k._init,N(T,w,B(k._payload),D)}if(fo(k))return S(T,w,k,D);if(no(k))return R(T,w,k,D);dl(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,w!==null&&w.tag===6?(n(T,w.sibling),w=i(w,k),w.return=T,T=w):(n(T,w),w=bd(k,T.mode,D),w.return=T,T=w),o(T)):n(T,w)}return N}var us=S_(!0),A_=S_(!1),iu=jr(null),su=null,Hi=null,Lf=null;function Vf(){Lf=Hi=su=null}function Mf(t){var e=iu.current;we(iu),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){su=t,Lf=Hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Et=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Lf!==t)if(t={context:t,memoizedValue:e,next:null},Hi===null){if(su===null)throw Error(j(308));Hi=t,su.dependencies={lanes:0,firstContext:t}}else Hi=Hi.next=t;return e}var Xr=null;function jf(t){Xr===null?Xr=[t]:Xr.push(t)}function C_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,jf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Hn(t,r)}function Hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function Ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Hn(t,n)}return i=r.interleaved,i===null?(e.next=e,jf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Hn(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}function ty(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,p=d=u=null,l=s;do{var y=l.lane,x=l.eventTime;if((r&y)===y){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,R=l;switch(y=e,x=n,R.tag){case 1:if(S=R.payload,typeof S=="function"){m=S.call(x,m,y);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=R.payload,y=typeof S=="function"?S.call(x,m,y):S,y==null)break e;m=Ie({},m,y);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else x={eventTime:x,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=x,u=m):p=p.next=x,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(p===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=m}}function ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ma={},hn=jr(ma),qo=jr(ma),Ko=jr(ma);function Jr(t){if(t===ma)throw Error(j(174));return t}function Uf(t,e){switch(pe(Ko,e),pe(qo,t),pe(hn,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}we(hn),pe(hn,e)}function cs(){we(hn),we(qo),we(Ko)}function R_(t){Jr(Ko.current);var e=Jr(hn.current),n=Zd(e,t.type);e!==n&&(pe(qo,t),pe(hn,n))}function Bf(t){qo.current===t&&(we(hn),we(qo))}var xe=jr(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wd=[];function zf(){for(var t=0;t<wd.length;t++)wd[t]._workInProgressVersionPrimary=null;wd.length=0}var Pl=Yn.ReactCurrentDispatcher,_d=Yn.ReactCurrentBatchConfig,oi=0,Te=null,Me=null,Be=null,lu=!1,ko=!1,Go=0,x1=0;function nt(){throw Error(j(321))}function $f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Hf(t,e,n,r,i,s){if(oi=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?k1:S1,t=n(r,i),ko){s=0;do{if(ko=!1,Go=0,25<=s)throw Error(j(301));s+=1,Be=Me=null,e.updateQueue=null,Pl.current=A1,t=n(r,i)}while(ko)}if(Pl.current=uu,e=Me!==null&&Me.next!==null,oi=0,Be=Me=Te=null,lu=!1,e)throw Error(j(300));return t}function Wf(){var t=Go!==0;return Go=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function Wt(){if(Me===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?Te.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(j(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function Qo(t,e){return typeof e=="function"?e(t):e}function Ed(t){var e=Wt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((oi&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Te.lanes|=p,ai|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,rn(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=Wt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function N_(){}function D_(t,e){var n=Te,r=Wt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,Et=!0),r=r.queue,qf(V_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Yo(9,L_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(j(349));oi&30||O_(n,e,i)}return i}function O_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,r){e.value=n,e.getSnapshot=r,M_(e)&&j_(t)}function V_(t,e,n){return n(function(){M_(e)&&j_(t)})}function M_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function j_(t){var e=Hn(t,1);e!==null&&nn(e,t,1,-1)}function ry(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=b1.bind(null,Te,t),[e.memoizedState,t]}function Yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function F_(){return Wt().memoizedState}function Rl(t,e,n,r){var i=ln();Te.flags|=t,i.memoizedState=Yo(1|e,n,void 0,r===void 0?null:r)}function Ju(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&$f(r,o.deps)){i.memoizedState=Yo(e,n,s,r);return}}Te.flags|=t,i.memoizedState=Yo(1|e,n,s,r)}function iy(t,e){return Rl(8390656,8,t,e)}function qf(t,e){return Ju(2048,8,t,e)}function U_(t,e){return Ju(4,2,t,e)}function B_(t,e){return Ju(4,4,t,e)}function z_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $_(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4,4,z_.bind(null,e,t),n)}function Kf(){}function H_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function W_(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function q_(t,e,n){return oi&21?(rn(n,e)||(n=Xw(),Te.lanes|=n,ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Et=!0),t.memoizedState=n)}function T1(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=_d.transition;_d.transition={};try{t(!1),e()}finally{ce=n,_d.transition=r}}function K_(){return Wt().memoizedState}function I1(t,e,n){var r=xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},G_(t))Q_(e,n);else if(n=C_(t,e,n,r),n!==null){var i=pt();nn(n,t,r,i),Y_(n,e,r)}}function b1(t,e,n){var r=xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(G_(t))Q_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,rn(l,o)){var u=e.interleaved;u===null?(i.next=i,jf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=C_(t,e,i,r),n!==null&&(i=pt(),nn(n,t,r,i),Y_(n,e,r))}}function G_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function Q_(t,e){ko=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Y_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,If(t,n)}}var uu={readContext:Ht,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},k1={readContext:Ht,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:iy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,z_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=I1.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:ry,useDebugValue:Kf,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=ry(!1),e=t[0];return t=T1.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=ln();if(_e){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),ze===null)throw Error(j(349));oi&30||O_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,iy(V_.bind(null,r,s,t),[t]),r.flags|=2048,Yo(9,L_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=ze.identifierPrefix;if(_e){var n=Ln,r=On;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},S1={readContext:Ht,useCallback:H_,useContext:Ht,useEffect:qf,useImperativeHandle:$_,useInsertionEffect:U_,useLayoutEffect:B_,useMemo:W_,useReducer:Ed,useRef:F_,useState:function(){return Ed(Qo)},useDebugValue:Kf,useDeferredValue:function(t){var e=Wt();return q_(e,Me.memoizedState,t)},useTransition:function(){var t=Ed(Qo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:D_,useId:K_,unstable_isNewReconciler:!1},A1={readContext:Ht,useCallback:H_,useContext:Ht,useEffect:qf,useImperativeHandle:$_,useInsertionEffect:U_,useLayoutEffect:B_,useMemo:W_,useReducer:xd,useRef:F_,useState:function(){return xd(Qo)},useDebugValue:Kf,useDeferredValue:function(t){var e=Wt();return Me===null?e.memoizedState=t:q_(e,Me.memoizedState,t)},useTransition:function(){var t=xd(Qo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:N_,useSyncExternalStore:D_,useId:K_,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=Ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _h(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=pt(),i=xr(t),s=Un(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(nn(e,t,i,r),Cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=pt(),i=xr(t),s=Un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(nn(e,t,i,r),Cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pt(),r=xr(t),i=Un(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(nn(e,t,r,n),Cl(e,t,r))}};function sy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function X_(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Tt(e)?ii:lt.current,r=e.contextTypes,s=(r=r!=null)?as(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function oy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Tt(e)?ii:lt.current,i.context=as(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_h(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ds(t,e){try{var n="",r=e;do n+=nI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C1=typeof WeakMap=="function"?WeakMap:Map;function J_(t,e,n){n=Un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){du||(du=!0,Nh=r),xh(t,e)},n}function Z_(t,e,n){n=Un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ay(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new C1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$1.bind(null,t,e,n),e.then(t,t))}function ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Un(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var P1=Yn.ReactCurrentOwner,Et=!1;function ft(t,e,n,r){e.child=t===null?A_(e,null,n,r):us(e,t.child,n,r)}function cy(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=Hf(t,e,n,r,s,i),n=Wf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(_e&&n&&Nf(e),e.flags|=1,ft(t,e,r,i),e.child)}function dy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e0(t,e,s,r,i)):(t=Ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zo(s,r)&&t.ref===e.ref)if(Et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Et=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return Th(t,e,n,r,i)}function t0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(qi,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(qi,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(qi,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(qi,St),St|=r;return ft(t,e,i,n),e.child}function n0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Th(t,e,n,r,i){var s=Tt(n)?ii:lt.current;return s=as(e,s),Ji(e,i),n=Hf(t,e,n,r,s,i),r=Wf(),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(_e&&r&&Nf(e),e.flags|=1,ft(t,e,n,i),e.child)}function hy(t,e,n,r,i){if(Tt(n)){var s=!0;tu(e)}else s=!1;if(Ji(e,i),e.stateNode===null)Nl(t,e),X_(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ht(d):(d=Tt(n)?ii:lt.current,d=as(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&oy(e,o,r,d),rr=!1;var y=e.memoizedState;o.state=y,ou(e,r,o,i),u=e.memoizedState,l!==r||y!==u||xt.current||rr?(typeof p=="function"&&(_h(e,n,p,r),u=e.memoizedState),(l=rr||sy(e,n,l,r,y,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,P_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Yt(e.type,l),o.props=d,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=Tt(n)?ii:lt.current,u=as(e,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&oy(e,o,r,u),rr=!1,y=e.memoizedState,o.state=y,ou(e,r,o,i);var S=e.memoizedState;l!==m||y!==S||xt.current||rr?(typeof x=="function"&&(_h(e,n,x,r),S=e.memoizedState),(d=rr||sy(e,n,d,r,y,S,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Ih(t,e,n,r,s,i)}function Ih(t,e,n,r,i,s){n0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xg(e,n,!1),Wn(t,e,s);r=e.stateNode,P1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,l,s)):ft(t,e,l,s),e.memoizedState=r.state,i&&Xg(e,n,!0),e.child}function r0(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),Uf(t,e.containerInfo)}function fy(t,e,n,r,i){return ls(),Of(i),e.flags|=256,ft(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function i0(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(xe,i&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,r,0,null),t=ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kh(n),e.memoizedState=bh,t):Gf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return R1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tr(l,s):(s=ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return s=t.child,t=s.sibling,r=Tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Gf(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,r){return r!==null&&Of(r),us(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function R1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Td(Error(j(422))),hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nc({mode:"visible",children:r.children},i,0,null),s=ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=kh(o),e.memoizedState=bh,s);if(!(e.mode&1))return hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Td(s,r,void 0),hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Et||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Hn(t,i),nn(r,t,i,-1))}return ep(),r=Td(Error(j(421))),hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=H1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=wr(i.nextSibling),Ct=e,_e=!0,Jt=null,t!==null&&(Mt[jt++]=On,Mt[jt++]=Ln,Mt[jt++]=si,On=t.id,Ln=t.overflow,si=e),e=Gf(e,r.children),e.flags|=4096,e)}function py(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wh(t.return,e,n)}function Id(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,n,e);else if(t.tag===19)py(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Id(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Id(e,!0,n,null,s);break;case"together":Id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N1(t,e,n){switch(e.tag){case 3:r0(e),ls();break;case 5:R_(e);break;case 1:Tt(e.type)&&tu(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?i0(t,e,n):(pe(xe,xe.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return s0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,t0(t,e,n)}return Wn(t,e,n)}var o0,Sh,a0,l0;o0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};a0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(hn.current);var s=null;switch(n){case"input":i=Qd(t,i),r=Qd(t,r),s=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),s=[];break;case"textarea":i=Jd(t,i),r=Jd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}eh(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Lo.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ye("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};l0=function(t,e,n,r){n!==r&&(e.flags|=4)};function lo(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function D1(t,e,n){var r=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return Tt(e.type)&&eu(),rt(e),null;case 3:return r=e.stateNode,cs(),we(xt),we(lt),zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(Lh(Jt),Jt=null))),Sh(t,e),rt(e),null;case 5:Bf(e);var i=Jr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)a0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return rt(e),null}if(t=Jr(hn.current),cl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<mo.length;i++)ye(mo[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Tg(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":bg(r,s),ye("invalid",r)}eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ul(r.textContent,l,t),i=["children",""+l]):Lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":tl(r),Ig(r,s,!0);break;case"textarea":tl(r),kg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Wo]=r,o0(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<mo.length;i++)ye(mo[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":Tg(t,r),i=Qd(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),ye("invalid",t);break;case"textarea":bg(t,r),i=Jd(t,r),ye("invalid",t);break;default:i=r}eh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Fw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ye("scroll",t):u!=null&&vf(t,s,u,o))}switch(n){case"input":tl(t),Ig(t,r,!1);break;case"textarea":tl(t),kg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Jr(Ko.current),Jr(hn.current),cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:ul(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return rt(e),null;case 13:if(we(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&At!==null&&e.mode&1&&!(e.flags&128))k_(),ls(),e.flags|=98560,s=!1;else if(s=cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[cn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),s=!1}else Jt!==null&&(Lh(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?je===0&&(je=3):ep())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return cs(),Sh(t,e),t===null&&$o(e.stateNode.containerInfo),rt(e),null;case 10:return Mf(e.type._context),rt(e),null;case 17:return Tt(e.type)&&eu(),rt(e),null;case 19:if(we(xe),s=e.memoizedState,s===null)return rt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)lo(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,lo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>hs&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return rt(e),null}else 2*Re()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=xe.current,pe(xe,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Zf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function O1(t,e){switch(Df(e),e.tag){case 1:return Tt(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),we(xt),we(lt),zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(we(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(xe),null;case 4:return cs(),null;case 10:return Mf(e.type._context),null;case 22:case 23:return Zf(),null;case 24:return null;default:return null}}var fl=!1,ot=!1,L1=typeof WeakSet=="function"?WeakSet:Set,H=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function Ah(t,e,n){try{n()}catch(r){Se(t,e,r)}}var my=!1;function V1(t,e){if(dh=Yl,t=f_(),Rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,y=null;t:for(;;){for(var x;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)y=m,m=x;for(;;){if(m===t)break t;if(y===n&&++d===i&&(l=o),y===s&&++p===r&&(u=o),(x=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hh={focusedElem:t,selectionRange:n},Yl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var R=S.memoizedProps,N=S.memoizedState,T=e.stateNode,w=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:Yt(e.type,R),N);T.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Se(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=my,my=!1,S}function So(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ah(e,n,s)}i=i.next}while(i!==r)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u0(t){var e=t.alternate;e!==null&&(t.alternate=null,u0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Wo],delete e[mh],delete e[v1],delete e[w1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(Ph(t,e,n),t=t.sibling;t!==null;)Ph(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var We=null,Xt=!1;function er(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(qu,n)}catch{}switch(n.tag){case 5:ot||Wi(n,e);case 6:var r=We,i=Xt;We=null,er(t,e,n),We=r,Xt=i,We!==null&&(Xt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Xt?(t=We,n=n.stateNode,t.nodeType===8?yd(t.parentNode,n):t.nodeType===1&&yd(t,n),Uo(t)):yd(We,n.stateNode));break;case 4:r=We,i=Xt,We=n.stateNode.containerInfo,Xt=!0,er(t,e,n),We=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ah(n,e,o),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!ot&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,er(t,e,n),ot=r):er(t,e,n);break;default:er(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new L1),e.forEach(function(r){var i=W1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Xt=!1;break e;case 3:We=l.stateNode.containerInfo,Xt=!0;break e;case 4:We=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(We===null)throw Error(j(160));d0(s,o,i),We=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Se(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)h0(e,t),e=e.sibling}function h0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),an(t),r&4){try{So(3,t,t.return),ec(3,t)}catch(R){Se(t,t.return,R)}try{So(5,t,t.return)}catch(R){Se(t,t.return,R)}}break;case 1:Gt(e,t),an(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(Gt(e,t),an(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(R){Se(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ow(i,s),th(l,o);var d=th(l,s);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Fw(i,m):p==="dangerouslySetInnerHTML"?Mw(i,m):p==="children"?Vo(i,m):vf(i,p,m,d)}switch(l){case"input":Yd(i,s);break;case"textarea":Lw(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Gi(i,!!s.multiple,x,!1):y!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(R){Se(t,t.return,R)}}break;case 6:if(Gt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Se(t,t.return,R)}}break;case 3:if(Gt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(R){Se(t,t.return,R)}break;case 4:Gt(e,t),an(t);break;case 13:Gt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xf=Re())),r&4&&yy(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(d=ot)||p,Gt(e,t),ot=d):Gt(e,t),an(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(H=t,p=t.child;p!==null;){for(m=H=p;H!==null;){switch(y=H,x=y.child,y.tag){case 0:case 11:case 14:case 15:So(4,y,y.return);break;case 1:Wi(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(R){Se(r,n,R)}}break;case 5:Wi(y,y.return);break;case 22:if(y.memoizedState!==null){wy(m);continue}}x!==null?(x.return=y,H=x):wy(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{i=m.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=jw("display",o))}catch(R){Se(t,t.return,R)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(R){Se(t,t.return,R)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Gt(e,t),an(t),r&4&&yy(t);break;case 21:break;default:Gt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=gy(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gy(t);Ph(t,l,o);break;default:throw Error(j(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M1(t,e,n){H=t,f0(t)}function f0(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ot;l=fl;var d=ot;if(fl=o,(ot=u)&&!d)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?_y(i):u!==null?(u.return=o,H=u):_y(i);for(;s!==null;)H=s,f0(s),s=s.sibling;H=i,fl=l,ot=d}vy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):vy(t)}}function vy(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ny(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ny(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Uo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ot||e.flags&512&&Ch(e)}catch(y){Se(e,e.return,y)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function wy(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function _y(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{Ch(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{Ch(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var j1=Math.ceil,cu=Yn.ReactCurrentDispatcher,Qf=Yn.ReactCurrentOwner,zt=Yn.ReactCurrentBatchConfig,se=0,ze=null,Oe=null,Qe=0,St=0,qi=jr(0),je=0,Xo=null,ai=0,tc=0,Yf=0,Ao=null,_t=null,Xf=0,hs=1/0,Nn=null,du=!1,Nh=null,Er=null,pl=!1,dr=null,hu=0,Co=0,Dh=null,Dl=-1,Ol=0;function pt(){return se&6?Re():Dl!==-1?Dl:Dl=Re()}function xr(t){return t.mode&1?se&2&&Qe!==0?Qe&-Qe:E1.transition!==null?(Ol===0&&(Ol=Xw()),Ol):(t=ce,t!==0||(t=window.event,t=t===void 0?16:i_(t.type)),t):1}function nn(t,e,n,r){if(50<Co)throw Co=0,Dh=null,Error(j(185));ha(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(tc|=n),je===4&&sr(t,Qe)),It(t,r),n===1&&se===0&&!(e.mode&1)&&(hs=Re()+500,Xu&&Fr()))}function It(t,e){var n=t.callbackNode;EI(t,e);var r=Ql(t,t===ze?Qe:0);if(r===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?_1(Ey.bind(null,t)):T_(Ey.bind(null,t)),g1(function(){!(se&6)&&Fr()}),n=null;else{switch(Jw(r)){case 1:n=Tf;break;case 4:n=Qw;break;case 16:n=Gl;break;case 536870912:n=Yw;break;default:n=Gl}n=E0(n,p0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p0(t,e){if(Dl=-1,Ol=0,se&6)throw Error(j(327));var n=t.callbackNode;if(Zi()&&t.callbackNode!==n)return null;var r=Ql(t,t===ze?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=se;se|=2;var s=g0();(ze!==t||Qe!==e)&&(Nn=null,hs=Re()+500,ei(t,e));do try{B1();break}catch(l){m0(t,l)}while(!0);Vf(),cu.current=s,se=i,Oe!==null?e=0:(ze=null,Qe=0,e=je)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Oh(t,i))),e===1)throw n=Xo,ei(t,0),sr(t,r),It(t,Re()),n;if(e===6)sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!F1(i)&&(e=fu(t,r),e===2&&(s=oh(t),s!==0&&(r=s,e=Oh(t,s))),e===1))throw n=Xo,ei(t,0),sr(t,r),It(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Gr(t,_t,Nn);break;case 3:if(sr(t,r),(r&130023424)===r&&(e=Xf+500-Re(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(Gr.bind(null,t,_t,Nn),e);break}Gr(t,_t,Nn);break;case 4:if(sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*j1(r/1960))-r,10<r){t.timeoutHandle=ph(Gr.bind(null,t,_t,Nn),r);break}Gr(t,_t,Nn);break;case 5:Gr(t,_t,Nn);break;default:throw Error(j(329))}}}return It(t,Re()),t.callbackNode===n?p0.bind(null,t):null}function Oh(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=fu(t,e),t!==2&&(e=_t,_t=n,e!==null&&Lh(e)),t}function Lh(t){_t===null?_t=t:_t.push.apply(_t,t)}function F1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Yf,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Ey(t){if(se&6)throw Error(j(327));Zi();var e=Ql(t,0);if(!(e&1))return It(t,Re()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Oh(t,r))}if(n===1)throw n=Xo,ei(t,0),sr(t,e),It(t,Re()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gr(t,_t,Nn),It(t,Re()),null}function Jf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(hs=Re()+500,Xu&&Fr())}}function li(t){dr!==null&&dr.tag===0&&!(se&6)&&Zi();var e=se;se|=1;var n=zt.transition,r=ce;try{if(zt.transition=null,ce=1,t)return t()}finally{ce=r,zt.transition=n,se=e,!(se&6)&&Fr()}}function Zf(){St=qi.current,we(qi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:cs(),we(xt),we(lt),zf();break;case 5:Bf(r);break;case 4:cs();break;case 13:we(xe);break;case 19:we(xe);break;case 10:Mf(r.type._context);break;case 22:case 23:Zf()}n=n.return}if(ze=t,Oe=t=Tr(t.current,null),Qe=St=e,je=0,Xo=null,Yf=tc=ai=0,_t=Ao=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Xr=null}return t}function m0(t,e){do{var n=Oe;try{if(Vf(),Pl.current=uu,lu){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(oi=0,Be=Me=Te=null,ko=!1,Go=0,Qf.current=null,n===null||n.return===null){je=1,Xo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var y=p.alternate;y?(p.updateQueue=y.updateQueue,p.memoizedState=y.memoizedState,p.lanes=y.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=ly(o);if(x!==null){x.flags&=-257,uy(x,o,l,s,e),x.mode&1&&ay(s,d,e),e=x,u=d;var S=e.updateQueue;if(S===null){var R=new Set;R.add(u),e.updateQueue=R}else S.add(u);break e}else{if(!(e&1)){ay(s,d,e),ep();break e}u=Error(j(426))}}else if(_e&&l.mode&1){var N=ly(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),uy(N,o,l,s,e),Of(ds(u,l));break e}}s=u=ds(u,l),je!==4&&(je=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=J_(s,u,e);ty(s,T);break e;case 1:l=u;var w=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Er===null||!Er.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Z_(s,l,e);ty(s,D);break e}}s=s.return}while(s!==null)}v0(n)}catch(F){e=F,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function g0(){var t=cu.current;return cu.current=uu,t===null?uu:t}function ep(){(je===0||je===3||je===2)&&(je=4),ze===null||!(ai&268435455)&&!(tc&268435455)||sr(ze,Qe)}function fu(t,e){var n=se;se|=2;var r=g0();(ze!==t||Qe!==e)&&(Nn=null,ei(t,e));do try{U1();break}catch(i){m0(t,i)}while(!0);if(Vf(),se=n,cu.current=r,Oe!==null)throw Error(j(261));return ze=null,Qe=0,je}function U1(){for(;Oe!==null;)y0(Oe)}function B1(){for(;Oe!==null&&!hI();)y0(Oe)}function y0(t){var e=_0(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?v0(t):Oe=e,Qf.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=D1(n,e,St),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function Gr(t,e,n){var r=ce,i=zt.transition;try{zt.transition=null,ce=1,z1(t,e,n,r)}finally{zt.transition=i,ce=r}return null}function z1(t,e,n,r){do Zi();while(dr!==null);if(se&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xI(t,s),t===ze&&(Oe=ze=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,E0(Gl,function(){return Zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=ce;ce=1;var l=se;se|=4,Qf.current=null,V1(t,n),h0(n,t),l1(hh),Yl=!!dh,hh=dh=null,t.current=n,M1(n),fI(),se=l,ce=o,zt.transition=s}else t.current=n;if(pl&&(pl=!1,dr=t,hu=i),s=t.pendingLanes,s===0&&(Er=null),gI(n.stateNode),It(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(du)throw du=!1,t=Nh,Nh=null,t;return hu&1&&t.tag!==0&&Zi(),s=t.pendingLanes,s&1?t===Dh?Co++:(Co=0,Dh=t):Co=0,Fr(),null}function Zi(){if(dr!==null){var t=Jw(hu),e=zt.transition,n=ce;try{if(zt.transition=null,ce=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,hu=0,se&6)throw Error(j(331));var i=se;for(se|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(H=d;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:So(8,p,s)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var y=p.sibling,x=p.return;if(u0(p),p===d){H=null;break}if(y!==null){y.return=x,H=y;break}H=x}}}var S=s.alternate;if(S!==null){var R=S.child;if(R!==null){S.child=null;do{var N=R.sibling;R.sibling=null,R=N}while(R!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:So(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,H=T;break e}H=s.return}}var w=t.current;for(H=w;H!==null;){o=H;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,H=k;else e:for(o=w;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ec(9,l)}}catch(F){Se(l,l.return,F)}if(l===o){H=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,H=D;break e}H=l.return}}if(se=i,Fr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(qu,t)}catch{}r=!0}return r}finally{ce=n,zt.transition=e}}return!1}function xy(t,e,n){e=ds(n,e),e=J_(t,e,1),t=_r(t,e,1),e=pt(),t!==null&&(ha(t,1,e),It(t,e))}function Se(t,e,n){if(t.tag===3)xy(t,t,n);else for(;e!==null;){if(e.tag===3){xy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=ds(n,t),t=Z_(e,t,1),e=_r(e,t,1),t=pt(),e!==null&&(ha(e,1,t),It(e,t));break}}e=e.return}}function $1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=pt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Qe&n)===n&&(je===4||je===3&&(Qe&130023424)===Qe&&500>Re()-Xf?ei(t,0):Yf|=n),It(t,e)}function w0(t,e){e===0&&(t.mode&1?(e=il,il<<=1,!(il&130023424)&&(il=4194304)):e=1);var n=pt();t=Hn(t,e),t!==null&&(ha(t,e,n),It(t,n))}function H1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w0(t,n)}function W1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),w0(t,n)}var _0;_0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)Et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Et=!1,N1(t,e,n);Et=!!(t.flags&131072)}else Et=!1,_e&&e.flags&1048576&&I_(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Nl(t,e),t=e.pendingProps;var i=as(e,lt.current);Ji(e,n),i=Hf(null,e,r,t,i,n);var s=Wf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ff(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=Ih(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&Nf(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K1(r),t=Yt(r,t),i){case 0:e=Th(null,e,r,t,n);break e;case 1:e=hy(null,e,r,t,n);break e;case 11:e=cy(null,e,r,t,n);break e;case 14:e=dy(null,e,r,Yt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Th(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),hy(t,e,r,i,n);case 3:e:{if(r0(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,P_(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ds(Error(j(423)),e),e=fy(t,e,r,n,i);break e}else if(r!==i){i=ds(Error(j(424)),e),e=fy(t,e,r,n,i);break e}else for(At=wr(e.stateNode.containerInfo.firstChild),Ct=e,_e=!0,Jt=null,n=A_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){e=Wn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return R_(e),t===null&&vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fh(r,i)?o=null:s!==null&&fh(r,s)&&(e.flags|=32),n0(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return i0(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=us(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),cy(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(iu,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!xt.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Un(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),wh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Ht(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),dy(t,e,r,i,n);case 15:return e0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Nl(t,e),e.tag=1,Tt(r)?(t=!0,tu(e)):t=!1,Ji(e,n),X_(e,r,i),Eh(e,r,i,n),Ih(null,e,r,!0,t,n);case 19:return s0(t,e,n);case 22:return t0(t,e,n)}throw Error(j(156,e.tag))};function E0(t,e){return Gw(t,e)}function q1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new q1(t,e,n,r)}function tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K1(t){if(typeof t=="function")return tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===Ef)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vi:return ti(n.children,i,s,e);case wf:o=8,i|=8;break;case Wd:return t=Bt(12,n,e,i|2),t.elementType=Wd,t.lanes=s,t;case qd:return t=Bt(13,n,e,i),t.elementType=qd,t.lanes=s,t;case Kd:return t=Bt(19,n,e,i),t.elementType=Kd,t.lanes=s,t;case Rw:return nc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cw:o=10;break e;case Pw:o=9;break e;case _f:o=11;break e;case Ef:o=14;break e;case nr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ti(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function nc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=Rw,t.lanes=n,t.stateNode={isHidden:!1},t}function bd(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function kd(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=od(0),this.expirationTimes=od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function np(t,e,n,r,i,s,o,l,u){return t=new G1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ff(s),t}function Q1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x0(t){if(!t)return Rr;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Tt(n))return x_(t,n,e)}return e}function T0(t,e,n,r,i,s,o,l,u){return t=np(n,r,!0,t,i,s,o,l,u),t.context=x0(null),n=t.current,r=pt(),i=xr(n),s=Un(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,ha(t,i,r),It(t,r),t}function rc(t,e,n,r){var i=e.current,s=pt(),o=xr(i);return n=x0(n),e.context===null?e.context=n:e.pendingContext=n,e=Un(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(nn(t,i,o,s),Cl(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ty(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rp(t,e){Ty(t,e),(t=t.alternate)&&Ty(t,e)}function Y1(){return null}var I0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ip(t){this._internalRoot=t}ic.prototype.render=ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));rc(t,e,null,null)};ic.prototype.unmount=ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){rc(null,t,null,null)}),e[$n]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=t_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ir.length&&e!==0&&e<ir[n].priority;n++);ir.splice(n,0,t),n===0&&r_(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Iy(){}function X1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=pu(o);s.call(d)}}var o=T0(e,r,t,0,null,!1,!1,"",Iy);return t._reactRootContainer=o,t[$n]=o.current,$o(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=pu(u);l.call(d)}}var u=np(t,0,!1,null,null,!1,!1,"",Iy);return t._reactRootContainer=u,t[$n]=u.current,$o(t.nodeType===8?t.parentNode:t),li(function(){rc(e,u,n,r)}),u}function oc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pu(o);l.call(u)}}rc(e,o,t,i)}else o=X1(n,e,t,i,r);return pu(o)}Zw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(If(e,n|1),It(e,Re()),!(se&6)&&(hs=Re()+500,Fr()))}break;case 13:li(function(){var r=Hn(t,1);if(r!==null){var i=pt();nn(r,t,1,i)}}),rp(t,1)}};bf=function(t){if(t.tag===13){var e=Hn(t,134217728);if(e!==null){var n=pt();nn(e,t,134217728,n)}rp(t,134217728)}};e_=function(t){if(t.tag===13){var e=xr(t),n=Hn(t,e);if(n!==null){var r=pt();nn(n,t,e,r)}rp(t,e)}};t_=function(){return ce};n_=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};rh=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(j(90));Dw(r),Yd(r,i)}}}break;case"textarea":Lw(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};zw=Jf;$w=li;var J1={usingClientEntryPoint:!1,Events:[pa,Ui,Yu,Uw,Bw,Jf]},uo={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z1={bundleType:uo.bundleType,version:uo.version,rendererPackageName:uo.rendererPackageName,rendererConfig:uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qw(t),t===null?null:t.stateNode},findFiberByHostInstance:uo.findFiberByHostInstance||Y1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{qu=ml.inject(Z1),dn=ml}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(j(200));return Q1(t,e,null,n)};Nt.createRoot=function(t,e){if(!sp(t))throw Error(j(299));var n=!1,r="",i=I0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=np(t,1,!1,null,null,n,!1,r,i),t[$n]=e.current,$o(t.nodeType===8?t.parentNode:t),new ip(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=qw(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return li(t)};Nt.hydrate=function(t,e,n){if(!sc(e))throw Error(j(200));return oc(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=I0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=T0(e,null,t,1,n??null,i,!1,s,o),t[$n]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ic(e)};Nt.render=function(t,e,n){if(!sc(e))throw Error(j(200));return oc(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!sc(t))throw Error(j(40));return t._reactRootContainer?(li(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[$n]=null})}),!0):!1};Nt.unstable_batchedUpdates=Jf;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return oc(t,e,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bw.exports=Nt;var eb=bw.exports,by=eb;$d.createRoot=by.createRoot,$d.hydrateRoot=by.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}var hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hr||(hr={}));const ky="popstate";function tb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Vh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mu(i)}return rb(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function op(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nb(){return Math.random().toString(36).substr(2,8)}function Sy(t,e){return{usr:t.state,key:t.key,idx:e}}function Vh(t,e,n,r){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ss(e):e,{state:n,key:e&&e.key||r||nb()})}function mu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ss(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=hr.Pop,u=null,d=p();d==null&&(d=0,o.replaceState(Jo({},o.state,{idx:d}),""));function p(){return(o.state||{idx:null}).idx}function m(){l=hr.Pop;let N=p(),T=N==null?null:N-d;d=N,u&&u({action:l,location:R.location,delta:T})}function y(N,T){l=hr.Push;let w=Vh(R.location,N,T);d=p()+1;let k=Sy(w,d),D=R.createHref(w);try{o.pushState(k,"",D)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(D)}s&&u&&u({action:l,location:R.location,delta:1})}function x(N,T){l=hr.Replace;let w=Vh(R.location,N,T);d=p();let k=Sy(w,d),D=R.createHref(w);o.replaceState(k,"",D),s&&u&&u({action:l,location:R.location,delta:0})}function S(N){let T=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof N=="string"?N:mu(N);return w=w.replace(/ $/,"%20"),Ve(T,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,T)}let R={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ky,m),u=N,()=>{i.removeEventListener(ky,m),u=null}},createHref(N){return e(i,N)},createURL:S,encodeLocation(N){let T=S(N);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:y,replace:x,go(N){return o.go(N)}};return R}var Ay;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ay||(Ay={}));function ib(t,e,n){return n===void 0&&(n="/"),sb(t,e,n)}function sb(t,e,n,r){let i=typeof e=="string"?Ss(e):e,s=ap(i.pathname||"/",n);if(s==null)return null;let o=k0(t);ob(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let d=vb(s);l=mb(o[u],d)}return l}function k0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Ir([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),k0(s.children,e,p,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:fb(d,s.index),routesMeta:p})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of S0(s.path))i(s,o,u)}),e}function S0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=S0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function ob(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ab=/^:[\w-]+$/,lb=3,ub=2,cb=1,db=10,hb=-2,Cy=t=>t==="*";function fb(t,e){let n=t.split("/"),r=n.length;return n.some(Cy)&&(r+=hb),e&&(r+=ub),n.filter(i=>!Cy(i)).reduce((i,s)=>i+(ab.test(s)?lb:s===""?cb:db),r)}function pb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mb(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],d=l===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",m=gb({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},p),y=u.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Ir([s,m.pathname]),pathnameBase:Tb(Ir([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=Ir([s,m.pathnameBase]))}return o}function gb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,p,m)=>{let{paramName:y,isOptional:x}=p;if(y==="*"){let R=l[m]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const S=l[m];return x&&!S?d[y]=void 0:d[y]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function yb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),op(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return op(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ap(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_b=t=>wb.test(t);function Eb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ss(t):t,s;if(n)if(_b(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),op(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Py(n.substring(1),"/"):s=Py(n,e)}else s=e;return{pathname:s,search:Ib(r),hash:bb(i)}}function Py(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function A0(t,e){let n=xb(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function C0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ss(t):(i=Jo({},t),Ve(!i.pathname||!i.pathname.includes("?"),Sd("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Sd("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Sd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=Eb(i,l),d=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||p)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),Tb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ib=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const P0=["post","put","patch","delete"];new Set(P0);const Sb=["get",...P0];new Set(Sb);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zo.apply(this,arguments)}const lp=U.createContext(null),Ab=U.createContext(null),vi=U.createContext(null),ac=U.createContext(null),wi=U.createContext({outlet:null,matches:[],isDataRoute:!1}),R0=U.createContext(null);function Cb(t,e){let{relative:n}=e===void 0?{}:e;ga()||Ve(!1);let{basename:r,navigator:i}=U.useContext(vi),{hash:s,pathname:o,search:l}=D0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ir([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ga(){return U.useContext(ac)!=null}function lc(){return ga()||Ve(!1),U.useContext(ac).location}function N0(t){U.useContext(vi).static||U.useLayoutEffect(t)}function ya(){let{isDataRoute:t}=U.useContext(wi);return t?zb():Pb()}function Pb(){ga()||Ve(!1);let t=U.useContext(lp),{basename:e,future:n,navigator:r}=U.useContext(vi),{matches:i}=U.useContext(wi),{pathname:s}=lc(),o=JSON.stringify(A0(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return N0(()=>{l.current=!0}),U.useCallback(function(d,p){if(p===void 0&&(p={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let m=C0(d,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ir([e,m.pathname])),(p.replace?r.replace:r.push)(m,p.state,p)},[e,r,o,s,t])}function D0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(vi),{matches:i}=U.useContext(wi),{pathname:s}=lc(),o=JSON.stringify(A0(i,r.v7_relativeSplatPath));return U.useMemo(()=>C0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Rb(t,e){return Nb(t,e)}function Nb(t,e,n,r){ga()||Ve(!1);let{navigator:i}=U.useContext(vi),{matches:s}=U.useContext(wi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=lc(),p;if(e){var m;let N=typeof e=="string"?Ss(e):e;u==="/"||(m=N.pathname)!=null&&m.startsWith(u)||Ve(!1),p=N}else p=d;let y=p.pathname||"/",x=y;if(u!=="/"){let N=u.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(N.length).join("/")}let S=ib(t,{pathname:x}),R=Mb(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Ir([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Ir([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&R?U.createElement(ac.Provider,{value:{location:Zo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:hr.Pop}},R):R}function Db(){let t=Bb(),e=kb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const Ob=U.createElement(Db,null);class Lb extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(wi.Provider,{value:this.props.routeContext},U.createElement(R0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vb(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(lp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(wi.Provider,{value:e},r)}function Mb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);p>=0||Ve(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:x}=n,S=m.route.loader&&y[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||S){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,m,y)=>{let x,S=!1,R=null,N=null;n&&(x=l&&m.route.id?l[m.route.id]:void 0,R=m.route.errorElement||Ob,u&&(d<0&&y===0?($b("route-fallback"),S=!0,N=null):d===y&&(S=!0,N=m.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,y+1)),w=()=>{let k;return x?k=R:S?k=N:m.route.Component?k=U.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=p,U.createElement(Vb,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?U.createElement(Lb,{location:n.location,revalidation:n.revalidation,component:R,error:x,children:w(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):w()},null)}var O0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(O0||{}),L0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(L0||{});function jb(t){let e=U.useContext(lp);return e||Ve(!1),e}function Fb(t){let e=U.useContext(Ab);return e||Ve(!1),e}function Ub(t){let e=U.useContext(wi);return e||Ve(!1),e}function V0(t){let e=Ub(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Bb(){var t;let e=U.useContext(R0),n=Fb(),r=V0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zb(){let{router:t}=jb(O0.UseNavigateStable),e=V0(L0.UseNavigateStable),n=U.useRef(!1);return N0(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zo({fromRouteId:e},s)))},[t,e])}const Ry={};function $b(t,e,n){Ry[t]||(Ry[t]=!0)}function Hb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qt(t){Ve(!1)}function Wb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=hr.Pop,navigator:s,static:o=!1,future:l}=t;ga()&&Ve(!1);let u=e.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Zo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ss(r));let{pathname:p="/",search:m="",hash:y="",state:x=null,key:S="default"}=r,R=U.useMemo(()=>{let N=ap(p,u);return N==null?null:{location:{pathname:N,search:m,hash:y,state:x,key:S},navigationType:i}},[u,p,m,y,x,S,i]);return R==null?null:U.createElement(vi.Provider,{value:d},U.createElement(ac.Provider,{children:n,value:R}))}function qb(t){let{children:e,location:n}=t;return Rb(Mh(e),n)}new Promise(()=>{});function Mh(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Mh(r.props.children,s));return}r.type!==Qt&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Mh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jh(){return jh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jh.apply(this,arguments)}function Kb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Gb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Qb(t,e){return t.button===0&&(!e||e==="_self")&&!Gb(t)}const Yb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Xb="6";try{window.__reactRouterVersion=Xb}catch{}const Jb="startTransition",Ny=$T[Jb];function Zb(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=tb({window:i,v5Compat:!0}));let o=s.current,[l,u]=U.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},p=U.useCallback(m=>{d&&Ny?Ny(()=>u(m)):u(m)},[u,d]);return U.useLayoutEffect(()=>o.listen(p),[o,p]),U.useEffect(()=>Hb(r),[r]),U.createElement(Wb,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const ek=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:d,preventScrollReset:p,viewTransition:m}=e,y=Kb(e,Yb),{basename:x}=U.useContext(vi),S,R=!1;if(typeof d=="string"&&tk.test(d)&&(S=d,ek))try{let k=new URL(window.location.href),D=d.startsWith("//")?new URL(k.protocol+d):new URL(d),F=ap(D.pathname,x);D.origin===k.origin&&F!=null?d=F+D.search+D.hash:R=!0}catch{}let N=Cb(d,{relative:i}),T=nk(d,{replace:o,state:l,target:u,preventScrollReset:p,relative:i,viewTransition:m});function w(k){r&&r(k),k.defaultPrevented||T(k)}return U.createElement("a",jh({},y,{href:S||N,onClick:R||s?r:w,ref:n,target:u}))});var Dy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dy||(Dy={}));var Oy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Oy||(Oy={}));function nk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=ya(),d=lc(),p=D0(t,{relative:o});return U.useCallback(m=>{if(Qb(m,n)){m.preventDefault();let y=r!==void 0?r:mu(d)===mu(p);u(t,{replace:y,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[d,u,p,r,i,n,t,s,o,l])}var Ly={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},j0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|d>>6,x=d&63;u||(x=64,o||(y=64)),r.push(n[p],n[m],n[y],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new ik;const y=s<<2|l>>4;if(r.push(y),d!==64){const x=l<<4&240|d>>2;if(r.push(x),m!==64){const S=d<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ik extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sk=function(t){const e=M0(t);return j0.encodeByteArray(e,!0)},gu=function(t){return sk(t).replace(/\./g,"")},F0=function(t){try{return j0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=()=>ok().__FIREBASE_DEFAULTS__,lk=()=>{if(typeof process>"u"||typeof Ly>"u")return;const t=Ly.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&F0(t[1]);return e&&JSON.parse(e)},uc=()=>{try{return ak()||lk()||uk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},U0=t=>{var e,n;return(n=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},B0=t=>{const e=U0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},z0=()=>{var t;return(t=uc())===null||t===void 0?void 0:t.config},$0=t=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function hk(){var t;const e=(t=uc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gk(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yk(){return!hk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vk(){try{return typeof indexedDB=="object"}catch{return!1}}function wk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_k,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ek(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,l,r)}}function Ek(t,e){return t.replace(xk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xk=/\{\$([^}]+)}/g;function Tk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vy(s)&&Vy(o)){if(!yu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ik(t,e){const n=new bk(t,e);return n.subscribe.bind(n)}class bk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ad),i.error===void 0&&(i.error=Ad),i.complete===void 0&&(i.complete=Ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ad(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ck;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ck(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ak(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ak(t){return t===Qr?void 0:t}function Ck(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Rk={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Nk=re.INFO,Dk={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Ok=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Dk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class up{constructor(e){this.name=e,this._logLevel=Nk,this._logHandler=Ok,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Lk=(t,e)=>e.some(n=>t instanceof n);let My,jy;function Vk(){return My||(My=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mk(){return jy||(jy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W0=new WeakMap,Fh=new WeakMap,q0=new WeakMap,Cd=new WeakMap,cp=new WeakMap;function jk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W0.set(n,t)}).catch(()=>{}),cp.set(e,t),e}function Fk(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let Uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uk(t){Uh=t(Uh)}function Bk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return q0.set(r,e.sort?e.sort():[e]),br(r)}:Mk().includes(t)?function(...e){return t.apply(Pd(this),e),br(W0.get(this))}:function(...e){return br(t.apply(Pd(this),e))}}function zk(t){return typeof t=="function"?Bk(t):(t instanceof IDBTransaction&&Fk(t),Lk(t,Vk())?new Proxy(t,Uh):t)}function br(t){if(t instanceof IDBRequest)return jk(t);if(Cd.has(t))return Cd.get(t);const e=zk(t);return e!==t&&(Cd.set(t,e),cp.set(e,t)),e}const Pd=t=>cp.get(t);function $k(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Hk=["get","getKey","getAll","getAllKeys","count"],Wk=["put","add","delete","clear"],Rd=new Map;function Fy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rd.get(e))return Rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Wk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Rd.set(e,s),s}Uk(t=>({...t,get:(e,n,r)=>Fy(e,n)||t.get(e,n,r),has:(e,n)=>!!Fy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",Uy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new up("@firebase/app"),Gk="@firebase/app-compat",Qk="@firebase/analytics-compat",Yk="@firebase/analytics",Xk="@firebase/app-check-compat",Jk="@firebase/app-check",Zk="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/data-connect",rS="@firebase/database-compat",iS="@firebase/functions",sS="@firebase/functions-compat",oS="@firebase/installations",aS="@firebase/installations-compat",lS="@firebase/messaging",uS="@firebase/messaging-compat",cS="@firebase/performance",dS="@firebase/performance-compat",hS="@firebase/remote-config",fS="@firebase/remote-config-compat",pS="@firebase/storage",mS="@firebase/storage-compat",gS="@firebase/firestore",yS="@firebase/vertexai-preview",vS="@firebase/firestore-compat",wS="firebase",_S="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="[DEFAULT]",ES={[Bh]:"fire-core",[Gk]:"fire-core-compat",[Yk]:"fire-analytics",[Qk]:"fire-analytics-compat",[Jk]:"fire-app-check",[Xk]:"fire-app-check-compat",[Zk]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-data-connect",[rS]:"fire-rtdb-compat",[iS]:"fire-fn",[sS]:"fire-fn-compat",[oS]:"fire-iid",[aS]:"fire-iid-compat",[lS]:"fire-fcm",[uS]:"fire-fcm-compat",[cS]:"fire-perf",[dS]:"fire-perf-compat",[hS]:"fire-rc",[fS]:"fire-rc-compat",[pS]:"fire-gcs",[mS]:"fire-gcs-compat",[gS]:"fire-fst",[vS]:"fire-fst-compat",[yS]:"fire-vertex","fire-js":"fire-js",[wS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,xS=new Map,$h=new Map;function By(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if($h.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;$h.set(e,t);for(const n of vu.values())By(n,t);for(const n of xS.values())By(n,t);return!0}function cc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new va("app","Firebase",TS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=_S;function K0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(n||(n=z0()),!n)throw kr.create("no-options");const s=vu.get(i);if(s){if(yu(n,s.options)&&yu(r,s.config))return s;throw kr.create("duplicate-app",{appName:i})}const o=new Pk(i);for(const u of $h.values())o.addComponent(u);const l=new IS(n,r,o);return vu.set(i,l),l}function dp(t=zh){const e=vu.get(t);if(!e&&t===zh&&z0())return K0();if(!e)throw kr.create("no-app",{appName:t});return e}function fn(t,e,n){var r;let i=(r=ES[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(l.join(" "));return}ui(new Nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="firebase-heartbeat-database",kS=1,ea="firebase-heartbeat-store";let Nd=null;function G0(){return Nd||(Nd=$k(bS,kS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ea)}catch(n){console.warn(n)}}}}).catch(t=>{throw kr.create("idb-open",{originalErrorMessage:t.message})})),Nd}async function SS(t){try{const n=(await G0()).transaction(ea),r=await n.objectStore(ea).get(Q0(t));return await n.done,r}catch(e){if(e instanceof Tn)qn.warn(e.message);else{const n=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function zy(t,e){try{const r=(await G0()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,Q0(t)),await r.done}catch(n){if(n instanceof Tn)qn.warn(n.message);else{const r=kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function Q0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=1024,CS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$y();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=CS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$y(),{heartbeatsToSend:r,unsentEntries:i}=RS(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return qn.warn(n),""}}}function $y(){return new Date().toISOString().substring(0,10)}function RS(t,e=AS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vk()?wk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hy(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){ui(new Nr("platform-logger",e=>new qk(e),"PRIVATE")),ui(new Nr("heartbeat",e=>new PS(e),"PRIVATE")),fn(Bh,Uy,t),fn(Bh,Uy,"esm2017"),fn("fire-js","")}DS("");var Wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ni,Y0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function _(){}_.prototype=v.prototype,E.D=v.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(I,A,P){for(var b=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)b[Vt-2]=arguments[Vt];return v.prototype[A].apply(I,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,_){_||(_=0);var I=Array(16);if(typeof v=="string")for(var A=0;16>A;++A)I[A]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(A=0;16>A;++A)I[A]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=E.g[0],_=E.g[1],A=E.g[2];var P=E.g[3],b=v+(P^_&(A^P))+I[0]+3614090360&4294967295;v=_+(b<<7&4294967295|b>>>25),b=P+(A^v&(_^A))+I[1]+3905402710&4294967295,P=v+(b<<12&4294967295|b>>>20),b=A+(_^P&(v^_))+I[2]+606105819&4294967295,A=P+(b<<17&4294967295|b>>>15),b=_+(v^A&(P^v))+I[3]+3250441966&4294967295,_=A+(b<<22&4294967295|b>>>10),b=v+(P^_&(A^P))+I[4]+4118548399&4294967295,v=_+(b<<7&4294967295|b>>>25),b=P+(A^v&(_^A))+I[5]+1200080426&4294967295,P=v+(b<<12&4294967295|b>>>20),b=A+(_^P&(v^_))+I[6]+2821735955&4294967295,A=P+(b<<17&4294967295|b>>>15),b=_+(v^A&(P^v))+I[7]+4249261313&4294967295,_=A+(b<<22&4294967295|b>>>10),b=v+(P^_&(A^P))+I[8]+1770035416&4294967295,v=_+(b<<7&4294967295|b>>>25),b=P+(A^v&(_^A))+I[9]+2336552879&4294967295,P=v+(b<<12&4294967295|b>>>20),b=A+(_^P&(v^_))+I[10]+4294925233&4294967295,A=P+(b<<17&4294967295|b>>>15),b=_+(v^A&(P^v))+I[11]+2304563134&4294967295,_=A+(b<<22&4294967295|b>>>10),b=v+(P^_&(A^P))+I[12]+1804603682&4294967295,v=_+(b<<7&4294967295|b>>>25),b=P+(A^v&(_^A))+I[13]+4254626195&4294967295,P=v+(b<<12&4294967295|b>>>20),b=A+(_^P&(v^_))+I[14]+2792965006&4294967295,A=P+(b<<17&4294967295|b>>>15),b=_+(v^A&(P^v))+I[15]+1236535329&4294967295,_=A+(b<<22&4294967295|b>>>10),b=v+(A^P&(_^A))+I[1]+4129170786&4294967295,v=_+(b<<5&4294967295|b>>>27),b=P+(_^A&(v^_))+I[6]+3225465664&4294967295,P=v+(b<<9&4294967295|b>>>23),b=A+(v^_&(P^v))+I[11]+643717713&4294967295,A=P+(b<<14&4294967295|b>>>18),b=_+(P^v&(A^P))+I[0]+3921069994&4294967295,_=A+(b<<20&4294967295|b>>>12),b=v+(A^P&(_^A))+I[5]+3593408605&4294967295,v=_+(b<<5&4294967295|b>>>27),b=P+(_^A&(v^_))+I[10]+38016083&4294967295,P=v+(b<<9&4294967295|b>>>23),b=A+(v^_&(P^v))+I[15]+3634488961&4294967295,A=P+(b<<14&4294967295|b>>>18),b=_+(P^v&(A^P))+I[4]+3889429448&4294967295,_=A+(b<<20&4294967295|b>>>12),b=v+(A^P&(_^A))+I[9]+568446438&4294967295,v=_+(b<<5&4294967295|b>>>27),b=P+(_^A&(v^_))+I[14]+3275163606&4294967295,P=v+(b<<9&4294967295|b>>>23),b=A+(v^_&(P^v))+I[3]+4107603335&4294967295,A=P+(b<<14&4294967295|b>>>18),b=_+(P^v&(A^P))+I[8]+1163531501&4294967295,_=A+(b<<20&4294967295|b>>>12),b=v+(A^P&(_^A))+I[13]+2850285829&4294967295,v=_+(b<<5&4294967295|b>>>27),b=P+(_^A&(v^_))+I[2]+4243563512&4294967295,P=v+(b<<9&4294967295|b>>>23),b=A+(v^_&(P^v))+I[7]+1735328473&4294967295,A=P+(b<<14&4294967295|b>>>18),b=_+(P^v&(A^P))+I[12]+2368359562&4294967295,_=A+(b<<20&4294967295|b>>>12),b=v+(_^A^P)+I[5]+4294588738&4294967295,v=_+(b<<4&4294967295|b>>>28),b=P+(v^_^A)+I[8]+2272392833&4294967295,P=v+(b<<11&4294967295|b>>>21),b=A+(P^v^_)+I[11]+1839030562&4294967295,A=P+(b<<16&4294967295|b>>>16),b=_+(A^P^v)+I[14]+4259657740&4294967295,_=A+(b<<23&4294967295|b>>>9),b=v+(_^A^P)+I[1]+2763975236&4294967295,v=_+(b<<4&4294967295|b>>>28),b=P+(v^_^A)+I[4]+1272893353&4294967295,P=v+(b<<11&4294967295|b>>>21),b=A+(P^v^_)+I[7]+4139469664&4294967295,A=P+(b<<16&4294967295|b>>>16),b=_+(A^P^v)+I[10]+3200236656&4294967295,_=A+(b<<23&4294967295|b>>>9),b=v+(_^A^P)+I[13]+681279174&4294967295,v=_+(b<<4&4294967295|b>>>28),b=P+(v^_^A)+I[0]+3936430074&4294967295,P=v+(b<<11&4294967295|b>>>21),b=A+(P^v^_)+I[3]+3572445317&4294967295,A=P+(b<<16&4294967295|b>>>16),b=_+(A^P^v)+I[6]+76029189&4294967295,_=A+(b<<23&4294967295|b>>>9),b=v+(_^A^P)+I[9]+3654602809&4294967295,v=_+(b<<4&4294967295|b>>>28),b=P+(v^_^A)+I[12]+3873151461&4294967295,P=v+(b<<11&4294967295|b>>>21),b=A+(P^v^_)+I[15]+530742520&4294967295,A=P+(b<<16&4294967295|b>>>16),b=_+(A^P^v)+I[2]+3299628645&4294967295,_=A+(b<<23&4294967295|b>>>9),b=v+(A^(_|~P))+I[0]+4096336452&4294967295,v=_+(b<<6&4294967295|b>>>26),b=P+(_^(v|~A))+I[7]+1126891415&4294967295,P=v+(b<<10&4294967295|b>>>22),b=A+(v^(P|~_))+I[14]+2878612391&4294967295,A=P+(b<<15&4294967295|b>>>17),b=_+(P^(A|~v))+I[5]+4237533241&4294967295,_=A+(b<<21&4294967295|b>>>11),b=v+(A^(_|~P))+I[12]+1700485571&4294967295,v=_+(b<<6&4294967295|b>>>26),b=P+(_^(v|~A))+I[3]+2399980690&4294967295,P=v+(b<<10&4294967295|b>>>22),b=A+(v^(P|~_))+I[10]+4293915773&4294967295,A=P+(b<<15&4294967295|b>>>17),b=_+(P^(A|~v))+I[1]+2240044497&4294967295,_=A+(b<<21&4294967295|b>>>11),b=v+(A^(_|~P))+I[8]+1873313359&4294967295,v=_+(b<<6&4294967295|b>>>26),b=P+(_^(v|~A))+I[15]+4264355552&4294967295,P=v+(b<<10&4294967295|b>>>22),b=A+(v^(P|~_))+I[6]+2734768916&4294967295,A=P+(b<<15&4294967295|b>>>17),b=_+(P^(A|~v))+I[13]+1309151649&4294967295,_=A+(b<<21&4294967295|b>>>11),b=v+(A^(_|~P))+I[4]+4149444226&4294967295,v=_+(b<<6&4294967295|b>>>26),b=P+(_^(v|~A))+I[11]+3174756917&4294967295,P=v+(b<<10&4294967295|b>>>22),b=A+(v^(P|~_))+I[2]+718787259&4294967295,A=P+(b<<15&4294967295|b>>>17),b=_+(P^(A|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var _=v-this.blockSize,I=this.B,A=this.h,P=0;P<v;){if(A==0)for(;P<=_;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<v;)if(I[A++]=E.charCodeAt(P++),A==this.blockSize){i(this,I),A=0;break}}else for(;P<v;)if(I[A++]=E[P++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var _=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.u(E),E=Array(16),v=_=0;4>v;++v)for(var I=0;32>I;I+=8)E[_++]=this.g[v]>>>I&255;return E};function s(E,v){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=v(E)}function o(E,v){this.h=v;for(var _=[],I=!0,A=E.length-1;0<=A;A--){var P=E[A]|0;I&&P==v||(_[A]=P,I=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return N(d(-E));for(var v=[],_=1,I=0;E>=_;I++)v[I]=E/_|0,_*=4294967296;return new o(v,0)}function p(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(p(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(v,8)),I=m,A=0;A<E.length;A+=8){var P=Math.min(8,E.length-A),b=parseInt(E.substring(A,A+P),v);8>P?(P=d(Math.pow(v,P)),I=I.j(P).add(d(b))):(I=I.j(_),I=I.add(d(b)))}return I}var m=u(0),y=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var E=0,v=1,_=0;_<this.g.length;_++){var I=this.i(_);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(R(this))return"-"+N(this).toString(E);for(var v=d(Math.pow(E,6)),_=this,I="";;){var A=D(_,v).g;_=T(_,A.j(v));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=A,S(_))return P+I;for(;6>P.length;)P="0"+P;I=P+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=T(this,E),R(E)?-1:S(E)?0:1};function N(E){for(var v=E.g.length,_=[],I=0;I<v;I++)_[I]=~E.g[I];return new o(_,~E.h).add(y)}t.abs=function(){return R(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0,A=0;A<=v;A++){var P=I+(this.i(A)&65535)+(E.i(A)&65535),b=(P>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);I=b>>>16,P&=65535,b&=65535,_[A]=b<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function T(E,v){return E.add(N(v))}t.j=function(E){if(S(this)||S(E))return m;if(R(this))return R(E)?N(this).j(N(E)):N(N(this).j(E));if(R(E))return N(this.j(N(E)));if(0>this.l(x)&&0>E.l(x))return d(this.m()*E.m());for(var v=this.g.length+E.g.length,_=[],I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<E.g.length;A++){var P=this.i(I)>>>16,b=this.i(I)&65535,Vt=E.i(A)>>>16,Br=E.i(A)&65535;_[2*I+2*A]+=b*Br,w(_,2*I+2*A),_[2*I+2*A+1]+=P*Br,w(_,2*I+2*A+1),_[2*I+2*A+1]+=b*Vt,w(_,2*I+2*A+1),_[2*I+2*A+2]+=P*Vt,w(_,2*I+2*A+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function w(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function k(E,v){this.g=E,this.h=v}function D(E,v){if(S(v))throw Error("division by zero");if(S(E))return new k(m,m);if(R(E))return v=D(N(E),v),new k(N(v.g),N(v.h));if(R(v))return v=D(E,N(v)),new k(N(v.g),v.h);if(30<E.g.length){if(R(E)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var _=y,I=v;0>=I.l(E);)_=F(_),I=F(I);var A=B(_,1),P=B(I,1);for(I=B(I,2),_=B(_,2);!S(I);){var b=P.add(I);0>=b.l(E)&&(A=A.add(_),P=b),I=B(I,1),_=B(_,1)}return v=T(E,A.j(v)),new k(A,v)}for(A=m;0<=E.l(v);){for(_=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),P=d(_),b=P.j(v);R(b)||0<b.l(E);)_-=I,P=d(_),b=P.j(v);S(P)&&(P=y),A=A.add(P),E=T(E,b)}return new k(A,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)&E.i(I);return new o(_,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)|E.i(I);return new o(_,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)^E.i(I);return new o(_,this.h^E.h)};function F(E){for(var v=E.g.length+1,_=[],I=0;I<v;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(_,E.h)}function B(E,v){var _=v>>5;v%=32;for(var I=E.g.length-_,A=[],P=0;P<I;P++)A[P]=0<v?E.i(P+_)>>>v|E.i(P+_+1)<<32-v:E.i(P+_);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,ni=o}).apply(typeof Wy<"u"?Wy:typeof self<"u"?self:typeof window<"u"?window:{});var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X0,vo,J0,Vl,Hh,Z0,eE,tE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof gl=="object"&&gl];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in h))break e;h=h[C]}a=a[a.length-1],g=h[a],c=c(g),c!=g&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,g=!1,C={next:function(){if(!g&&h<a.length){var O=h++;return{value:c(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,h){return a.call.apply(a.bind,arguments)}function m(a,c,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(c,C)}}return function(){return a.apply(c,arguments)}}function y(a,c,h){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,y.apply(null,arguments)}function x(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,C,O){for(var z=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)z[fe-2]=arguments[fe];return c.prototype[C].apply(g,z)}}function R(a){const c=a.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=a[g];return h}return[]}function N(a,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const C=a.length||0,O=g.length||0;a.length=C+O;for(let z=0;z<O;z++)a[C+z]=g[z]}else a.push(g)}}class T{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var F=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function B(a,c,h){for(const g in a)c.call(h,a[g],g,a)}function E(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let h,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(h in g)a[h]=g[h];for(let O=0;O<_.length;O++)h=_[O],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function A(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function P(a){l.setTimeout(()=>{throw a},0)}function b(){var a=X;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Vt{constructor(){this.h=this.g=null}add(c,h){const g=Br.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var Br=new T(()=>new zs,a=>a.reset());class zs{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let bn,$=!1,X=new Vt,ee=()=>{const a=l.Promise.resolve(void 0);bn=()=>{a.then(Ee)}};var Ee=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(h){P(h)}var c=Br;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ae(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function Sn(a,c){if(Ae.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(F){e:{try{D(c.nodeName);var C=!0;break e}catch{}C=!1}C||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:An[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Sn.aa.h.call(this)}}S(Sn,Ae);var An={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),Qx=0;function Yx(a,c,h,g,C){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=C,this.key=++Qx,this.da=this.fa=!1}function La(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Va(a){this.src=a,this.g={},this.h=0}Va.prototype.add=function(a,c,h,g,C){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=Dc(a,c,g,C);return-1<z?(c=a[z],h||(c.fa=!1)):(c=new Yx(c,this.src,O,!!g,C),c.fa=h,a.push(c)),c};function Nc(a,c){var h=c.type;if(h in a.g){var g=a.g[h],C=Array.prototype.indexOf.call(g,c,void 0),O;(O=0<=C)&&Array.prototype.splice.call(g,C,1),O&&(La(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Dc(a,c,h,g){for(var C=0;C<a.length;++C){var O=a[C];if(!O.da&&O.listener==c&&O.capture==!!h&&O.ha==g)return C}return-1}var Oc="closure_lm_"+(1e6*Math.random()|0),Lc={};function vm(a,c,h,g,C){if(Array.isArray(c)){for(var O=0;O<c.length;O++)vm(a,c[O],h,g,C);return null}return h=Em(h),a&&a[Cn]?a.K(c,h,d(g)?!!g.capture:!1,C):Xx(a,c,h,!1,g,C)}function Xx(a,c,h,g,C,O){if(!c)throw Error("Invalid event type");var z=d(C)?!!C.capture:!!C,fe=Mc(a);if(fe||(a[Oc]=fe=new Va(a)),h=fe.add(c,h,g,z,O),h.proxy)return h;if(g=Jx(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)kn||(C=z),C===void 0&&(C=!1),a.addEventListener(c.toString(),g,C);else if(a.attachEvent)a.attachEvent(_m(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Jx(){function a(h){return c.call(a.src,a.listener,h)}const c=Zx;return a}function wm(a,c,h,g,C){if(Array.isArray(c))for(var O=0;O<c.length;O++)wm(a,c[O],h,g,C);else g=d(g)?!!g.capture:!!g,h=Em(h),a&&a[Cn]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],h=Dc(O,h,g,C),-1<h&&(La(O[h]),Array.prototype.splice.call(O,h,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Mc(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Dc(c,h,g,C)),(h=-1<a?c[a]:null)&&Vc(h))}function Vc(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Cn])Nc(c.i,a);else{var h=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(h,g,a.capture):c.detachEvent?c.detachEvent(_m(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=Mc(c))?(Nc(h,a),h.h==0&&(h.src=null,c[Oc]=null)):La(a)}}}function _m(a){return a in Lc?Lc[a]:Lc[a]="on"+a}function Zx(a,c){if(a.da)a=!0;else{c=new Sn(c,this);var h=a.listener,g=a.ha||a.src;a.fa&&Vc(a),a=h.call(g,c)}return a}function Mc(a){return a=a[Oc],a instanceof Va?a:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Em(a){return typeof a=="function"?a:(a[jc]||(a[jc]=function(c){return a.handleEvent(c)}),a[jc])}function Ze(){he.call(this),this.i=new Va(this),this.M=this,this.F=null}S(Ze,he),Ze.prototype[Cn]=!0,Ze.prototype.removeEventListener=function(a,c,h,g){wm(this,a,c,h,g)};function dt(a,c){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Ae(c,a);else if(c instanceof Ae)c.target=c.target||a;else{var C=c;c=new Ae(g,a),I(c,C)}if(C=!0,h)for(var O=h.length-1;0<=O;O--){var z=c.g=h[O];C=Ma(z,g,!0,c)&&C}if(z=c.g=a,C=Ma(z,g,!0,c)&&C,C=Ma(z,g,!1,c)&&C,h)for(O=0;O<h.length;O++)z=c.g=h[O],C=Ma(z,g,!1,c)&&C}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],g=0;g<h.length;g++)La(h[g]);delete a.g[c],a.h--}}this.F=null},Ze.prototype.K=function(a,c,h,g){return this.i.add(String(a),c,!1,h,g)},Ze.prototype.L=function(a,c,h,g){return this.i.add(String(a),c,!0,h,g)};function Ma(a,c,h,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var C=!0,O=0;O<c.length;++O){var z=c[O];if(z&&!z.da&&z.capture==h){var fe=z.listener,He=z.ha||z.src;z.fa&&Nc(a.i,z),C=fe.call(He,g)!==!1&&C}}return C&&!g.defaultPrevented}function xm(a,c,h){if(typeof a=="function")h&&(a=y(a,h));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Tm(a){a.g=xm(()=>{a.g=null,a.i&&(a.i=!1,Tm(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class eT extends he{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Tm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(a){he.call(this),this.h=a,this.g={}}S($s,he);var Im=[];function bm(a){B(a.g,function(c,h){this.g.hasOwnProperty(h)&&Vc(c)},a),a.g={}}$s.prototype.N=function(){$s.aa.N.call(this),bm(this)},$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fc=l.JSON.stringify,tT=l.JSON.parse,nT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uc(){}Uc.prototype.h=null;function km(a){return a.h||(a.h=a.i())}function Sm(){}var Hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bc(){Ae.call(this,"d")}S(Bc,Ae);function zc(){Ae.call(this,"c")}S(zc,Ae);var zr={},Am=null;function ja(){return Am=Am||new Ze}zr.La="serverreachability";function Cm(a){Ae.call(this,zr.La,a)}S(Cm,Ae);function Ws(a){const c=ja();dt(c,new Cm(c))}zr.STAT_EVENT="statevent";function Pm(a,c){Ae.call(this,zr.STAT_EVENT,a),this.stat=c}S(Pm,Ae);function ht(a){const c=ja();dt(c,new Pm(c,a))}zr.Ma="timingevent";function Rm(a,c){Ae.call(this,zr.Ma,a),this.size=c}S(Rm,Ae);function qs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function rT(a,c,h,g,C,O){a.info(function(){if(a.g)if(O)for(var z="",fe=O.split("&"),He=0;He<fe.length;He++){var oe=fe[He].split("=");if(1<oe.length){var et=oe[0];oe=oe[1];var tt=et.split("_");z=2<=tt.length&&tt[1]=="type"?z+(et+"="+oe+"&"):z+(et+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+c+`
`+h+`
`+z})}function iT(a,c,h,g,C,O,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+c+`
`+h+`
`+O+" "+z})}function Si(a,c,h,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+oT(a,h)+(g?" "+g:"")})}function sT(a,c){a.info(function(){return"TIMEOUT: "+c})}Ks.prototype.info=function(){};function oT(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var O=C[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return Fc(h)}catch{return c}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$c;function Ua(){}S(Ua,Uc),Ua.prototype.g=function(){return new XMLHttpRequest},Ua.prototype.i=function(){return{}},$c=new Ua;function Xn(a,c,h,g){this.j=a,this.i=c,this.l=h,this.R=g||1,this.U=new $s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Dm}function Dm(){this.i=null,this.g="",this.h=!1}var Om={},Hc={};function Wc(a,c,h){a.L=1,a.v=Ha(Pn(c)),a.m=h,a.P=!0,Lm(a,null)}function Lm(a,c){a.F=Date.now(),Ba(a),a.A=Pn(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Qm(h.i,"t",g),a.C=0,h=a.j.J,a.h=new Dm,a.g=fg(a.j,h?c:null,!a.m),0<a.O&&(a.M=new eT(y(a.Y,a,a.g),a.O)),c=a.U,h=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Im[0]=C.toString()),C=Im);for(var O=0;O<C.length;O++){var z=vm(h,C[O],g||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ws(),rT(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Rn(a)==3?c.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=Rn(this.g);var c=this.g.Ba();const Pi=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||ng(this.g)))){this.J||tt!=4||c==7||(c==8||0>=Pi?Ws(3):Ws(2)),qc(this);var h=this.g.Z();this.X=h;t:if(Vm(this)){var g=ng(this.g);a="";var C=g.length,O=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),Gs(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<C;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(O&&c==C-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=h==200,iT(this.i,this.u,this.A,this.l,this.R,tt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var fe,He=this.g;if((fe=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(fe)){var oe=fe;break t}}oe=null}if(h=oe)Si(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kc(this,h);else{this.o=!1,this.s=3,ht(12),$r(this),Gs(this);break e}}if(this.P){h=!0;let Kt;for(;!this.J&&this.C<z.length;)if(Kt=aT(this,z),Kt==Hc){tt==4&&(this.s=4,ht(14),h=!1),Si(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Om){this.s=4,ht(15),Si(this.i,this.l,z,"[Invalid Chunk]"),h=!1;break}else Si(this.i,this.l,Kt,null),Kc(this,Kt);if(Vm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||z.length!=0||this.h.h||(this.s=1,ht(16),h=!1),this.o=this.o&&h,!h)Si(this.i,this.l,z,"[Invalid Chunked Response]"),$r(this),Gs(this);else if(0<z.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Zc(et),et.M=!0,ht(11))}}else Si(this.i,this.l,z,null),Kc(this,z);tt==4&&$r(this),this.o&&!this.J&&(tt==4?ug(this.j,this):(this.o=!1,Ba(this)))}else IT(this.g),h==400&&0<z.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),$r(this),Gs(this)}}}catch{}finally{}};function Vm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function aT(a,c){var h=a.C,g=c.indexOf(`
`,h);return g==-1?Hc:(h=Number(c.substring(h,g)),isNaN(h)?Om:(g+=1,g+h>c.length?Hc:(c=c.slice(g,g+h),a.C=g+h,c)))}Xn.prototype.cancel=function(){this.J=!0,$r(this)};function Ba(a){a.S=Date.now()+a.I,Mm(a,a.I)}function Mm(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=qs(y(a.ba,a),c)}function qc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(sT(this.i,this.A),this.L!=2&&(Ws(),ht(17)),$r(this),this.s=2,Gs(this)):Mm(this,this.S-a)};function Gs(a){a.j.G==0||a.J||ug(a.j,a)}function $r(a){qc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,bm(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Kc(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Gc(h.h,a))){if(!a.K&&Gc(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)Ya(h),Ga(h);else break e;Jc(h),ht(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=qs(y(h.Za,h),6e3));if(1>=Um(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Wr(h,11)}else if((a.K||h.g==a)&&Ya(h),!w(c))for(C=h.Da.g.parse(c),c=0;c<C.length;c++){let oe=C[c];if(h.T=oe[0],oe=oe[1],h.G==2)if(oe[0]=="c"){h.K=oe[1],h.ia=oe[2];const et=oe[3];et!=null&&(h.la=et,h.j.info("VER="+h.la));const tt=oe[4];tt!=null&&(h.Aa=tt,h.j.info("SVER="+h.Aa));const Pi=oe[5];Pi!=null&&typeof Pi=="number"&&0<Pi&&(g=1.5*Pi,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const Kt=a.g;if(Kt){const Ja=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ja){var O=g.h;O.g||Ja.indexOf("spdy")==-1&&Ja.indexOf("quic")==-1&&Ja.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Qc(O,O.h),O.h=null))}if(g.D){const ed=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;ed&&(g.ya=ed,ge(g.I,g.D,ed))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var z=a;if(g.qa=hg(g,g.J?g.ia:null,g.W),z.K){Bm(g.h,z);var fe=z,He=g.L;He&&(fe.I=He),fe.B&&(qc(fe),Ba(fe)),g.g=z}else ag(g);0<h.i.length&&Qa(h)}else oe[0]!="stop"&&oe[0]!="close"||Wr(h,7);else h.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Wr(h,7):Xc(h):oe[0]!="noop"&&h.l&&h.l.ta(oe),h.v=0)}}Ws(4)}catch{}}var lT=class{constructor(a,c){this.g=a,this.map=c}};function jm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Um(a){return a.h?1:a.g?a.g.size:0}function Gc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Qc(a,c){a.g?a.g.add(c):a.h=c}function Bm(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}jm.prototype.cancel=function(){if(this.i=zm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return R(a.i)}function uT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,g=0;g<h;g++)c.push(a[g]);return c}c=[],h=0;for(g in a)c[h++]=a[g];return c}function cT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const g in a)c[h++]=g;return c}}}function $m(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=cT(a),g=uT(a),C=g.length,O=0;O<C;O++)c.call(void 0,g[O],h&&h[O],a)}var Hm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dT(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),C=null;if(0<=g){var O=a[h].substring(0,g);C=a[h].substring(g+1)}else O=a[h];c(O,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,za(this,a.j),this.o=a.o,this.g=a.g,$a(this,a.s),this.l=a.l;var c=a.i,h=new Xs;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Wm(this,h),this.m=a.m}else a&&(c=String(a).match(Hm))?(this.h=!1,za(this,c[1]||"",!0),this.o=Qs(c[2]||""),this.g=Qs(c[3]||"",!0),$a(this,c[4]),this.l=Qs(c[5]||"",!0),Wm(this,c[6]||"",!0),this.m=Qs(c[7]||"")):(this.h=!1,this.i=new Xs(null,this.h))}Hr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ys(c,qm,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ys(c,qm,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Ys(h,h.charAt(0)=="/"?pT:fT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Ys(h,gT)),a.join("")};function Pn(a){return new Hr(a)}function za(a,c,h){a.j=h?Qs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function $a(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Wm(a,c,h){c instanceof Xs?(a.i=c,yT(a.i,a.h)):(h||(c=Ys(c,mT)),a.i=new Xs(c,a.h))}function ge(a,c,h){a.i.set(c,h)}function Ha(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Qs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ys(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,hT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qm=/[#\/\?@]/g,fT=/[#\?:]/g,pT=/[#\?]/g,mT=/[#\?@]/g,gT=/#/g;function Xs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&dT(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Xs.prototype,t.add=function(a,c){Jn(this),this.i=null,a=Ai(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Km(a,c){Jn(a),c=Ai(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Gm(a,c){return Jn(a),c=Ai(a,c),a.g.has(c)}t.forEach=function(a,c){Jn(this),this.g.forEach(function(h,g){h.forEach(function(C){a.call(c,C,g,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const C=a[g];for(let O=0;O<C.length;O++)h.push(c[g])}return h},t.V=function(a){Jn(this);let c=[];if(typeof a=="string")Gm(this,a)&&(c=c.concat(this.g.get(Ai(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Jn(this),this.i=null,a=Ai(this,a),Gm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Qm(a,c,h){Km(a,c),0<h.length&&(a.i=null,a.g.set(Ai(a,c),R(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const O=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=O;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),a.push(C)}}return this.i=a.join("&")};function Ai(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function yT(a,c){c&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(h,g){var C=g.toLowerCase();g!=C&&(Km(this,g),Qm(this,C,h))},a)),a.j=c}function vT(a,c){const h=new Ks;if(l.Image){const g=new Image;g.onload=x(Zn,h,"TestLoadImage: loaded",!0,c,g),g.onerror=x(Zn,h,"TestLoadImage: error",!1,c,g),g.onabort=x(Zn,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=x(Zn,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function wT(a,c){const h=new Ks,g=new AbortController,C=setTimeout(()=>{g.abort(),Zn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(C),O.ok?Zn(h,"TestPingServer: ok",!0,c):Zn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(C),Zn(h,"TestPingServer: error",!1,c)})}function Zn(a,c,h,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(h)}catch{}}function _T(){this.g=new nT}function ET(a,c,h){const g=h||"";try{$m(a,function(C,O){let z=C;d(C)&&(z=Fc(C)),c.push(g+O+"="+encodeURIComponent(z))})}catch(C){throw c.push(g+"type="+encodeURIComponent("_badmap")),C}}function Wa(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Wa,Uc),Wa.prototype.g=function(){return new qa(this.l,this.j)},Wa.prototype.i=function(a){return function(){return a}}({});function qa(a,c){Ze.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(qa,Ze),t=qa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zs(this)),this.g&&(this.readyState=3,Zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ym(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ym(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Js(this):Zs(this),this.readyState==3&&Ym(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Js(this))},t.Qa=function(a){this.g&&(this.response=a,Js(this))},t.ga=function(){this.g&&Js(this)};function Js(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function Zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xm(a){let c="";return B(a,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function Yc(a,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=Xm(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ge(a,c,h))}function ke(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ke,Ze);var xT=/^https?$/i,TT=["POST","PUT"];t=ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$c.g(),this.v=this.o?km(this.o):km($c),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Jm(this,O);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)h.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())h.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(TT,c,void 0))||g||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of h)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tg(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Jm(this,O)}};function Jm(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Zm(a),Ka(a)}function Zm(a){a.A||(a.A=!0,dt(a,"complete"),dt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,dt(this,"complete"),dt(this,"abort"),Ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ka(this,!0)),ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?eg(this):this.bb())},t.bb=function(){eg(this)};function eg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)xm(a.Ea,0,a);else if(dt(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=z===0){var C=String(a.D).match(Hm)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!xT.test(C?C.toLowerCase():"")}h=g}if(h)dt(a,"complete"),dt(a,"success");else{a.m=6;try{var O=2<Rn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Zm(a)}}finally{Ka(a)}}}}function Ka(a,c){if(a.g){tg(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||dt(a,"ready");try{h.onreadystatechange=g}catch{}}}function tg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),tT(c)}};function ng(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function IT(a){const c={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var h=A(a[g]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=c[C]||[];c[C]=O,O.push(h)}E(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function eo(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function rg(a){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=eo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=eo("baseRetryDelayMs",5e3,a),this.cb=eo("retryDelaySeedMs",1e4,a),this.Wa=eo("forwardChannelMaxRetries",2,a),this.wa=eo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new jm(a&&a.concurrentRequestLimit),this.Da=new _T,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=rg.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,g){ht(0),this.W=a,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=hg(this,null,this.W),Qa(this)};function Xc(a){if(ig(a),a.G==3){var c=a.U++,h=Pn(a.I);if(ge(h,"SID",a.K),ge(h,"RID",c),ge(h,"TYPE","terminate"),to(a,h),c=new Xn(a,a.j,c),c.L=2,c.v=Ha(Pn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=fg(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ba(c)}dg(a)}function Ga(a){a.g&&(Zc(a),a.g.cancel(),a.g=null)}function ig(a){Ga(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ya(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Qa(a){if(!Fm(a.h)&&!a.s){a.s=!0;var c=a.Ga;bn||ee(),$||(bn(),$=!0),X.add(c,a),a.B=0}}function bT(a,c){return Um(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=qs(y(a.Ga,a,c),cg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Xn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(C.H=O,O=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=og(this,C,c),h=Pn(this.I),ge(h,"RID",a),ge(h,"CVER",22),this.D&&ge(h,"X-HTTP-Session-Id",this.D),to(this,h),O&&(this.O?c="headers="+encodeURIComponent(String(Xm(O)))+"&"+c:this.m&&Yc(h,this.m,O)),Qc(this.h,C),this.Ua&&ge(h,"TYPE","init"),this.P?(ge(h,"$req",c),ge(h,"SID","null"),C.T=!0,Wc(C,h,null)):Wc(C,h,c),this.G=2}}else this.G==3&&(a?sg(this,a):this.i.length==0||Fm(this.h)||sg(this))};function sg(a,c){var h;c?h=c.l:h=a.U++;const g=Pn(a.I);ge(g,"SID",a.K),ge(g,"RID",h),ge(g,"AID",a.T),to(a,g),a.m&&a.o&&Yc(g,a.m,a.o),h=new Xn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=og(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qc(a.h,h),Wc(h,g,c)}function to(a,c){a.H&&B(a.H,function(h,g){ge(c,g,h)}),a.l&&$m({},function(h,g){ge(c,g,h)})}function og(a,c,h){h=Math.min(a.i.length,h);var g=a.l?y(a.l.Na,a.l,a):null;e:{var C=a.i;let O=-1;for(;;){const z=["count="+h];O==-1?0<h?(O=C[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let fe=!0;for(let He=0;He<h;He++){let oe=C[He].g;const et=C[He].map;if(oe-=O,0>oe)O=Math.max(0,C[He].g-100),fe=!1;else try{ET(et,z,"req"+oe+"_")}catch{g&&g(et)}}if(fe){g=z.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,g}function ag(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;bn||ee(),$||(bn(),$=!0),X.add(c,a),a.v=0}}function Jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=qs(y(a.Fa,a),cg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,lg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=qs(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Ga(this),lg(this))};function Zc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function lg(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Pn(a.qa);ge(c,"RID","rpc"),ge(c,"SID",a.K),ge(c,"AID",a.T),ge(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(c,"TO",a.ja),ge(c,"TYPE","xmlhttp"),to(a,c),a.m&&a.o&&Yc(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=Ha(Pn(c)),h.m=null,h.P=!0,Lm(h,a)}t.Za=function(){this.C!=null&&(this.C=null,Ga(this),Jc(this),ht(19))};function Ya(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ug(a,c){var h=null;if(a.g==c){Ya(a),Zc(a),a.g=null;var g=2}else if(Gc(a.h,c))h=c.D,Bm(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var C=a.B;g=ja(),dt(g,new Rm(g,h)),Qa(a)}else ag(a);else if(C=c.s,C==3||C==0&&0<c.X||!(g==1&&bT(a,c)||g==2&&Jc(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),C){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function cg(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Wr(a,c){if(a.j.info("Error code "+c),c==2){var h=y(a.fb,a),g=a.Xa;const C=!g;g=new Hr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||za(g,"https"),Ha(g),C?vT(g.toString(),h):wT(g.toString(),h)}else ht(2);a.G=0,a.l&&a.l.sa(c),dg(a),ig(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function dg(a){if(a.G=0,a.ka=[],a.l){const c=zm(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function hg(a,c,h){var g=h instanceof Hr?Pn(h):new Hr(h);if(g.g!="")c&&(g.g=c+"."+g.g),$a(g,g.s);else{var C=l.location;g=C.protocol,c=c?c+"."+C.hostname:C.hostname,C=+C.port;var O=new Hr(null);g&&za(O,g),c&&(O.g=c),C&&$a(O,C),h&&(O.l=h),g=O}return h=a.D,c=a.ya,h&&c&&ge(g,h,c),ge(g,"VER",a.la),to(a,g),g}function fg(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ke(new Wa({eb:h})):new ke(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pg(){}t=pg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xa(){}Xa.prototype.g=function(a,c){return new kt(a,c)};function kt(a,c){Ze.call(this),this.g=new rg(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ci(this)}S(kt,Ze),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Xc(this.g)},kt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Fc(a),a=h);c.i.push(new lT(c.Ya++,a)),c.G==3&&Qa(c)},kt.prototype.N=function(){this.g.l=null,delete this.j,Xc(this.g),delete this.g,kt.aa.N.call(this)};function mg(a){Bc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}S(mg,Bc);function gg(){zc.call(this),this.status=1}S(gg,zc);function Ci(a){this.g=a}S(Ci,pg),Ci.prototype.ua=function(){dt(this.g,"a")},Ci.prototype.ta=function(a){dt(this.g,new mg(a))},Ci.prototype.sa=function(a){dt(this.g,new gg)},Ci.prototype.ra=function(){dt(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,tE=function(){return new Xa},eE=function(){return ja()},Z0=zr,Hh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,Vl=Fa,Nm.COMPLETE="complete",J0=Nm,Sm.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,vo=Sm,ke.prototype.listenOnce=ke.prototype.L,ke.prototype.getLastError=ke.prototype.Ka,ke.prototype.getLastErrorCode=ke.prototype.Ba,ke.prototype.getStatus=ke.prototype.Z,ke.prototype.getResponseJson=ke.prototype.Oa,ke.prototype.getResponseText=ke.prototype.oa,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Ha,X0=ke}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});const qy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new up("@firebase/firestore");function co(){return ci.logLevel}function q(t,...e){if(ci.logLevel<=re.DEBUG){const n=e.map(hp);ci.debug(`Firestore (${As}): ${t}`,...n)}}function Kn(t,...e){if(ci.logLevel<=re.ERROR){const n=e.map(hp);ci.error(`Firestore (${As}): ${t}`,...n)}}function fs(t,...e){if(ci.logLevel<=re.WARN){const n=e.map(hp);ci.warn(`Firestore (${As}): ${t}`,...n)}}function hp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: `+t;throw Kn(e),new Error(e)}function de(t,e){t||Y()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class LS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VS{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new nE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new st(e)}}class MS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class jS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new MS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class US{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new FS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=BS(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Fe(0,0))}static max(){return new J(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends ta{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const zS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ta{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return zS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ve.fromString(e))}static fromName(e){return new K(ve.fromString(e).popFirst(5))}static empty(){return new K(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ve(e.slice()))}}function $S(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Dr(i,K.empty(),e)}function HS(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(J.min(),K.empty(),-1)}static max(){return new Dr(J.max(),K.empty(),-1)}}function WS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==qS)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function GS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}fp.oe=-1;function dc(t){return t==null}function wu(t){return t===0&&1/t==-1/0}function QS(t){return typeof t=="number"&&Number.isInteger(t)&&!wu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function iE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yl(this.root,e,this.comparator,!0)}}class yl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gy(this.data.getIterator())}getIteratorFrom(e){return new Gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sE("Invalid base64 string: "+s):s}}(e);return new Je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const YS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(de(!!t),typeof t=="string"){let e=0;const n=YS.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?Je.fromBase64String(t):Je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function mp(t){const e=t.mapValue.fields.__previous_value__;return pp(e)?mp(e):e}function na(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl={mapValue:{}};function hi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pp(t)?4:ZS(t)?9007199254740991:JS(t)?10:11:Y()}function _n(t,e){if(t===e)return!0;const n=hi(t);if(n!==hi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Or(i.timestampValue),l=Or(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return di(i.bytesValue).isEqual(di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?wu(o)===wu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ky(o)!==Ky(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function ia(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=hi(t),r=hi(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Qy(t.timestampValue,e.timestampValue);case 4:return Qy(na(t),na(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=di(s),u=di(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ae(l[d],u[d]);if(p!==0)return p}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Pe(s.latitude),Pe(o.latitude));return l!==0?l:ae(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const m=s.fields||{},y=o.fields||{},x=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=y.value)===null||u===void 0?void 0:u.arrayValue,R=ae(((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0,((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0);return R!==0?R:Yy(x,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===vl.mapValue&&o===vl.mapValue)return 0;if(s===vl.mapValue)return 1;if(o===vl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const y=ae(u[m],p[m]);if(y!==0)return y;const x=ms(l[u[m]],d[p[m]]);if(x!==0)return x}return ae(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Or(t),r=Or(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Yy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ms(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function gs(t){return Wh(t)}function Wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Wh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Wh(n.fields[o])}`;return i+"}"}(t.mapValue):Y()}function Xy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qh(t){return!!t&&"integerValue"in t}function gp(t){return!!t&&"arrayValue"in t}function Jy(t){return!!t&&"nullValue"in t}function Zy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function JS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Po(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(Po(this.value))}}function oE(t){const e=[];return Cs(t.fields,(n,r)=>{const i=new Ge([n]);if(Ml(r)){const s=oE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,J.min(),J.min(),J.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new at(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new at(e,2,n,J.min(),J.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,J.min(),J.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.position=e,this.inclusive=n}}function ev(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function eA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{}class Le extends aE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nA(e,n,r):n==="array-contains"?new sA(e,r):n==="in"?new oA(e,r):n==="not-in"?new aA(e,r):n==="array-contains-any"?new lA(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rA(e,r):new iA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&hi(this.value)===hi(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends aE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new sn(e,n)}matches(e){return lE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lE(t){return t.op==="and"}function uE(t){return tA(t)&&lE(t)}function tA(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function Kh(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(uE(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function cE(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&_n(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&cE(o,i.filters[l]),!0):!1}(t,e):void Y()}function dE(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(dE).join(" ,")+"}"}(t):"Filter"}class nA extends Le{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class rA extends Le{constructor(e,n){super(e,"in",n),this.keys=hE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iA extends Le{constructor(e,n){super(e,"not-in",n),this.keys=hE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class sA extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return gp(n)&&ia(n.arrayValue,this.value)}}class oA extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class aA extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ia(this.value.arrayValue,n)}}class lA extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function nv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new uA(t,e,n,r,i,s,o)}function yp(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Kh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ue=n}return e.ue}function vp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tv(t.startAt,e.startAt)&&tv(t.endAt,e.endAt)}function Gh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cA(t,e,n,r,i,s,o,l){return new Ps(t,e,n,r,i,s,o,l)}function fE(t){return new Ps(t)}function rv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pE(t){return t.collectionGroup!==null}function Ro(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Ge.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new sa(s,r))}),n.has(Ge.keyField().canonicalString())||e.ce.push(new sa(Ge.keyField(),r))}return e.ce}function pn(t){const e=Z(t);return e.le||(e.le=dA(e,Ro(t))),e.le}function dA(t,e){if(t.limitType==="F")return nv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sa(i.field,s)});const n=t.endAt?new _u(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _u(t.startAt.position,t.startAt.inclusive):null;return nv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qh(t,e){const n=t.filters.concat([e]);return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yh(t,e,n){return new Ps(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return vp(pn(t),pn(e))&&t.limitType===e.limitType}function mE(t){return`${yp(pn(t))}|lt:${t.limitType}`}function Ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>dE(i)).join(", ")}]`),dc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>gs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>gs(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=ev(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,l,u){const d=ev(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ro(r),i))}(t,e)}function hA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function gE(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=fA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fA(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?ms(u,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new be(K.comparator);function Gn(){return pA}const yE=new be(K.comparator);function wo(...t){let e=yE;for(const n of t)e=e.insert(n.key,n);return e}function vE(t){let e=yE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zr(){return No()}function wE(){return No()}function No(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new be(K.comparator),gA=new Ye(K.comparator);function ne(...t){let e=gA;for(const n of t)e=e.add(n);return e}const yA=new Ye(ae);function vA(){return yA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wu(e)?"-0":e}}function _E(t){return{integerValue:""+t}}function wA(t,e){return QS(e)?_E(e):wp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this._=void 0}}function _A(t,e,n){return t instanceof Eu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&pp(s)&&(s=mp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof oa?xE(t,e):t instanceof aa?TE(t,e):function(i,s){const o=EE(i,s),l=iv(o)+iv(i.Pe);return qh(o)&&qh(i.Pe)?_E(l):wp(i.serializer,l)}(t,e)}function EA(t,e,n){return t instanceof oa?xE(t,e):t instanceof aa?TE(t,e):n}function EE(t,e){return t instanceof xu?function(r){return qh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Eu extends pc{}class oa extends pc{constructor(e){super(),this.elements=e}}function xE(t,e){const n=IE(e);for(const r of t.elements)n.some(i=>_n(i,r))||n.push(r);return{arrayValue:{values:n}}}class aa extends pc{constructor(e){super(),this.elements=e}}function TE(t,e){let n=IE(e);for(const r of t.elements)n=n.filter(i=>!_n(i,r));return{arrayValue:{values:n}}}class xu extends pc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function iv(t){return Pe(t.integerValue||t.doubleValue)}function IE(t){return gp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function xA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof oa&&i instanceof oa||r instanceof aa&&i instanceof aa?ps(r.elements,i.elements,_n):r instanceof xu&&i instanceof xu?_n(r.Pe,i.Pe):r instanceof Eu&&i instanceof Eu}(t.transform,e.transform)}class TA{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function bE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _p(t.key,mn.none()):new xa(t.key,t.data,mn.none());{const n=t.data,r=Ut.empty();let i=new Ye(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ei(t.key,r,new Zt(i.toArray()),mn.none())}}function IA(t,e,n){t instanceof xa?function(i,s,o){const l=i.value.clone(),u=ov(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ei?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ov(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(kE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof xa?function(s,o,l,u){if(!jl(s.precondition,o))return l;const d=s.value.clone(),p=av(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ei?function(s,o,l,u){if(!jl(s.precondition,o))return l;const d=av(s.fieldTransforms,u,o),p=o.data;return p.setAll(kE(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=EE(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function sv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ps(r,i,(s,o)=>xA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xa extends mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ei extends mc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ov(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,EA(o,l,n[i]))}return r}function av(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_A(s,o,e))}return r}class _p extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kA extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=bE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>sv(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>sv(n,r))}}class Ep{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return mA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ep(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,ie;function PA(t){switch(t){default:return Y();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function SE(t){if(t===void 0)return Kn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return Y()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new ni([4294967295,4294967295],0);function lv(t){const e=RA().encode(t),n=new Y0;return n.update(e),new Uint8Array(n.digest())}function uv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ni([n,r],0),new ni([i,s],0)]}class xp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _o(`Invalid padding: ${n}`);if(r<0)throw new _o(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _o(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _o(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ni.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ni.fromNumber(r)));return i.compare(NA)===1&&(i=new ni([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=lv(e),[r,i]=uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=lv(e),[r,i]=uv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _o extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(J.min(),i,new be(ae),Gn(),ne())}}class Ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class AE{constructor(e,n){this.targetId=e,this.me=n}}class CE{constructor(e,n,r=Je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class cv{constructor(){this.fe=0,this.ge=hv(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=hv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class DA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Gn(),this.qe=dv(),this.Qe=new be(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Gh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,at.newNoDocument(o,J.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=di(r).toUint8Array()}catch(u){if(u instanceof sE)return fs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new xp(o,i,s)}catch(u){return fs(u instanceof _o?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Gh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,at.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new gc(e,n,this.Qe,this.ke,r);return this.ke=Gn(),this.qe=dv(),this.Qe=new be(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new cv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function dv(){return new be(K.comparator)}function hv(){return new be(K.comparator)}const OA={asc:"ASCENDING",desc:"DESCENDING"},LA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VA={and:"AND",or:"OR"};class MA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xh(t,e){return t.useProto3Json||dc(e)?e:{value:e}}function Tu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function jA(t,e){return Tu(t,e.toTimestamp())}function gn(t){return de(!!t),J.fromTimestamp(function(n){const r=Or(n);return new Fe(r.seconds,r.nanos)}(t))}function Tp(t,e){return Jh(t,e).canonicalString()}function Jh(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function RE(t){const e=ve.fromString(t);return de(VE(e)),e}function Zh(t,e){return Tp(t.databaseId,e.path)}function Dd(t,e){const n=RE(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(DE(n))}function NE(t,e){return Tp(t.databaseId,e)}function FA(t){const e=RE(t);return e.length===4?ve.emptyPath():DE(e)}function ef(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function DE(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fv(t,e,n){return{name:Zh(t,e),fields:n.value.mapValue.fields}}function UA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(de(p===void 0||typeof p=="string"),Je.fromBase64String(p||"")):(de(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Je.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?V.UNKNOWN:SE(d.code);return new W(p,d.message||"")}(o);n=new CE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dd(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):J.min(),l=new Ut({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Fl(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dd(t,r.document),s=r.readTime?gn(r.readTime):J.min(),o=at.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dd(t,r.document),s=r.removedTargetIds||[];n=new Fl([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CA(i,s),l=r.targetId;n=new AE(l,o)}}return n}function BA(t,e){let n;if(e instanceof xa)n={update:fv(t,e.key,e.value)};else if(e instanceof _p)n={delete:Zh(t,e.key)};else if(e instanceof Ei)n={update:fv(t,e.key,e.data),updateMask:YA(e.fieldMask)};else{if(!(e instanceof kA))return Y();n={verify:Zh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof aa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:jA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y()}(t,e.precondition)),n}function zA(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(J.min())&&(o=gn(s)),new TA(o,i.transformResults||[])}(n,e))):[]}function $A(t,e){return{documents:[NE(t,e.path)]}}function HA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NE(t,i);const s=function(d){if(d.length!==0)return LE(sn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(y){return{field:Di(y.field),direction:KA(y.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Xh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function WA(t){let e=FA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(m){const y=OE(m);return y instanceof sn&&uE(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(S){return new sa(Oi(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,dc(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,x=m.values||[];return new _u(x,y)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const y=!m.before,x=m.values||[];return new _u(x,y)}(n.endAt)),cA(e,i,o,s,l,"F",u,d)}function qA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function OE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oi(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oi(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>OE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function KA(t){return OA[t]}function GA(t){return LA[t]}function QA(t){return VA[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Oi(t){return Ge.fromServerFormat(t.fieldPath)}function LE(t){return t instanceof Le?function(n){if(n.op==="=="){if(Zy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NAN"}};if(Jy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NAN"}};if(Jy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(n.field),op:GA(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>LE(i));return r.length===1?r[0]:{compositeFilter:{op:QA(n.op),filters:r}}}(t):Y()}function YA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,i,s=J.min(),o=J.min(),l=Je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.ct=e}}function JA(t){const e=WA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.un=new eC}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Dr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class eC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ys(0)}static kn(){return new ys(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,Zt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=wo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Gn();const o=No(),l=function(){return No()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ei)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),Do(p.mutation,d,p.mutation.getFieldMask(),Fe.now())):o.set(d.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new nC(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=No();let i=new be((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||Zt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=wE();p.forEach(y=>{if(!s.has(y)){const x=bE(n.get(y),r.get(y));x!==null&&m.set(y,x),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Zr());let l=-1,u=s;return o.next(d=>M.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(y=>{u=u.insert(p,y)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ne())).next(p=>({batchId:l,changes:vE(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=wo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=wo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const d=function(m,y){return new Ps(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,at.newInvalidDocument(p)))});let l=wo();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&Do(p.mutation,d,Zt.empty(),Fe.now()),fc(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:JA(i.bundledQuery),readTime:gn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.overlays=new be(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Zr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=Zr(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AA(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.Tr=new Ye(Ue.Er),this.dr=new Ye(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ve([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ve([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(Ue.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ae);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new K(s),0);let l=new Ye(ae);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.Mr=e,this.docs=function(){return new be(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||WS(HS(p),r)<=0||(i.has(p.key)||fc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uC(this)}getSize(e){return M.resolve(this.size)}}class uC extends tC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.persistence=e,this.Nr=new Rs(n=>yp(n),vp),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ip,this.targetCount=0,this.kr=ys.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new fp(0),this.Kr=!1,this.Kr=!0,this.$r=new oC,this.referenceDelegate=e(this),this.Ur=new cC(this),this.indexManager=new ZA,this.remoteDocumentCache=function(i){return new lC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new XA(n),this.Gr=new iC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new aC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new hC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class hC extends KS{constructor(e){super(),this.currentSequenceNumber=e}}class bp{constructor(e){this.persistence=e,this.Jr=new Ip,this.Yr=null}static Zr(e){return new bp(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new kp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yk()?8:GS(ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new fC;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(co()<=re.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(co()<=re.DEBUG&&q("QueryEngine","Query:",Ni(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(co()<=re.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):M.resolve())}Yi(e,n){if(rv(n))return M.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yh(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Yh(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return rv(n)||i.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(co()<=re.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ni(n)),this.rs(e,o,n,$S(i,-1)).next(l=>l))})}ts(e,n){let r=new Ye(gE(e));return n.forEach((i,s)=>{fc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return co()<=re.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ni(n)),this.Ji.getDocumentsMatchingQuery(e,n,Dr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new be(ae),this._s=new Rs(s=>yp(s),vp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function gC(t,e,n,r){return new mC(t,e,n,r)}async function ME(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function yC(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,y=m.keys();let x=M.resolve();return y.forEach(S=>{x=x.next(()=>p.getEntry(u,S)).next(R=>{const N=d.docVersions.get(S);de(N!==null),R.version.compareTo(N)<0&&(m.applyToRemoteDocument(R,d),R.isValidDocument()&&(R.setReadTime(d.commitVersion),p.addEntry(R)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jE(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function vC(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const y=i.get(m);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,m)));let x=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),i=i.insert(m,x),function(R,N,T){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(y,x,p)&&l.push(n.Ur.updateTargetData(s,x))});let u=Gn(),d=ne();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(wC(s,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(J.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(m=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function wC(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function _C(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EC(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function tf(t,e,n){const r=Z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ea(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function pv(t,e,n){const r=Z(t);let i=J.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=Z(u),y=m._s.get(p);return y!==void 0?M.resolve(m.os.get(y)):m.Ur.getTargetData(d,p)}(r,o,pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ne())).next(l=>(xC(r,hA(e),l),{documents:l,Ts:s})))}function xC(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class mv{constructor(){this.activeTargetIds=vA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TC{constructor(){this.so=new mv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl=null;function Od(){return wl===null?wl=function(){return 268435456+Math.round(2147483648*Math.random())}():wl++,"0x"+wl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection";class SC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Od(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(p=>(q("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw fs("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+As}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=bC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Od();return new Promise((o,l)=>{const u=new X0;u.setWithCredentials(!0),u.listenOnce(J0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vl.NO_ERROR:const p=u.getResponseJson();q(it,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case Vl.TIMEOUT:q(it,`RPC '${e}' ${s} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const m=u.getStatus();if(q(it,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const x=y==null?void 0:y.error;if(x&&x.status&&x.message){const S=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(x.status);l(new W(S,x.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{q(it,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);q(it,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Od(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tE(),l=eE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");q(it,`Creating RPC '${e}' stream ${i}: ${p}`,u);const m=o.createWebChannel(p,u);let y=!1,x=!1;const S=new kC({Io:N=>{x?q(it,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(y||(q(it,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),q(it,`RPC '${e}' stream ${i} sending:`,N),m.send(N))},To:()=>m.close()}),R=(N,T,w)=>{N.listen(T,k=>{try{w(k)}catch(D){setTimeout(()=>{throw D},0)}})};return R(m,vo.EventType.OPEN,()=>{x||(q(it,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),R(m,vo.EventType.CLOSE,()=>{x||(x=!0,q(it,`RPC '${e}' stream ${i} transport closed`),S.So())}),R(m,vo.EventType.ERROR,N=>{x||(x=!0,fs(it,`RPC '${e}' stream ${i} transport errored:`,N),S.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),R(m,vo.EventType.MESSAGE,N=>{var T;if(!x){const w=N.data[0];de(!!w);const k=w,D=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(D){q(it,`RPC '${e}' stream ${i} received error:`,D);const F=D.status;let B=function(_){const I=De[_];if(I!==void 0)return SE(I)}(F),E=D.message;B===void 0&&(B=V.INTERNAL,E="Unknown error status: "+F+" with message "+D.message),x=!0,S.So(new W(B,E)),m.close()}else q(it,`RPC '${e}' stream ${i} received:`,w),S.bo(w)}}),R(l,Z0.STAT_EVENT,N=>{N.stat===Hh.PROXY?q(it,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Hh.NOPROXY&&q(it,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){return new MA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new FE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Kn(n.toString()),Kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AC extends UE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=UA(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?gn(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ef(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Gh(u)?{documents:$A(s,u)}:{query:HA(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=PE(s,o.resumeToken);const d=Xh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Tu(s,o.snapshotVersion.toTimestamp());const d=Xh(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=qA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ef(this.serializer),n.removeTarget=e,this.a_(n)}}class CC extends UE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=zA(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ef(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>BA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Jh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Jh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Kn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{xi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Z(u);d.L_.add(4),await Ia(d),d.q_.set("Unknown"),d.L_.delete(4),await vc(d)}(this))})}),this.q_=new RC(r,i)}}async function vc(t){if(xi(t))for(const e of t.B_)await e(!0)}async function Ia(t){for(const e of t.B_)await e(!1)}function BE(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Pp(n)?Cp(n):Ns(n).r_()&&Ap(n,e))}function Sp(t,e){const n=Z(t),r=Ns(n);n.N_.delete(e),r.r_()&&zE(n,e),n.N_.size===0&&(r.r_()?r.o_():xi(n)&&n.q_.set("Unknown"))}function Ap(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).A_(e)}function zE(t,e){t.Q_.xe(e),Ns(t).R_(e)}function Cp(t){t.Q_=new DA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.q_.v_()}function Pp(t){return xi(t)&&!Ns(t).n_()&&t.N_.size>0}function xi(t){return Z(t).L_.size===0}function $E(t){t.Q_=void 0}async function DC(t){t.q_.set("Online")}async function OC(t){t.N_.forEach((e,n)=>{Ap(t,e)})}async function LC(t,e){$E(t),Pp(t)?(t.q_.M_(e),Cp(t)):t.q_.set("Unknown")}async function VC(t,e,n){if(t.q_.set("Online"),e instanceof CE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Iu(t,r)}else if(e instanceof Fl?t.Q_.Ke(e):e instanceof AE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await jE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(Je.EMPTY_BYTE_STRING,p.snapshotVersion)),zE(s,u);const m=new fr(p.target,u,d,p.sequenceNumber);Ap(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Iu(t,r)}}async function Iu(t,e,n){if(!Ea(e))throw e;t.L_.add(1),await Ia(t),t.q_.set("Offline"),n||(n=()=>jE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vc(t)})}function HE(t,e){return e().catch(n=>Iu(t,n,e))}async function wc(t){const e=Z(t),n=Lr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;MC(e);)try{const i=await _C(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,jC(e,i)}catch(i){await Iu(e,i)}WE(e)&&qE(e)}function MC(t){return xi(t)&&t.O_.length<10}function jC(t,e){t.O_.push(e);const n=Lr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function WE(t){return xi(t)&&!Lr(t).n_()&&t.O_.length>0}function qE(t){Lr(t).start()}async function FC(t){Lr(t).p_()}async function UC(t){const e=Lr(t);for(const n of t.O_)e.m_(n.mutations)}async function BC(t,e,n){const r=t.O_.shift(),i=Ep.from(r,e,n);await HE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wc(t)}async function zC(t,e){e&&Lr(t).V_&&await async function(r,i){if(function(o){return PA(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Lr(r).s_(),await HE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wc(r)}}(t,e),WE(t)&&qE(t)}async function yv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=xi(n);n.L_.add(3),await Ia(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vc(n)}async function $C(t,e){const n=Z(t);e?(n.L_.delete(2),await vc(n)):e||(n.L_.add(2),await Ia(n),n.q_.set("Unknown"))}function Ns(t){return t.K_||(t.K_=function(n,r,i){const s=Z(n);return s.w_(),new AC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:DC.bind(null,t),Ro:OC.bind(null,t),mo:LC.bind(null,t),d_:VC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Pp(t)?Cp(t):t.q_.set("Unknown")):(await t.K_.stop(),$E(t))})),t.K_}function Lr(t){return t.U_||(t.U_=function(n,r,i){const s=Z(n);return s.w_(),new CC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:FC.bind(null,t),mo:zC.bind(null,t),f_:UC.bind(null,t),g_:BC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wc(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Rp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Np(t,e){if(Kn("AsyncQueue",`${e}: ${t}`),Ea(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=wo(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.W_=new be(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vs(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class WC{constructor(){this.queries=wv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=Z(n),s=i.queries;i.queries=wv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function wv(){return new Rs(t=>mE(t),hc)}async function qC(t,e){const n=Z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new HC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Np(o,`Initialization of query '${Ni(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Dp(n)}async function KC(t,e){const n=Z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function GC(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Dp(n)}function QC(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Dp(t){t.Y_.forEach(e=>{e.next()})}var nf,_v;(_v=nf||(nf={})).ea="default",_v.Cache="cache";class YC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.key=e}}class GE{constructor(e){this.key=e}}class XC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=gE(e),this.Ra=new es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new vv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const y=i.get(p),x=fc(this.query,m)?m:null,S=!!y&&this.mutatedKeys.has(y.key),R=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let N=!1;y&&x?y.data.isEqual(x.data)?S!==R&&(r.track({type:3,doc:x}),N=!0):this.ga(y,x)||(r.track({type:2,doc:x}),N=!0,(u&&this.Aa(x,u)>0||d&&this.Aa(x,d)<0)&&(l=!0)):!y&&x?(r.track({type:0,doc:x}),N=!0):y&&!x&&(r.track({type:1,doc:y}),N=!0,(u||d)&&(l=!0)),N&&(x?(o=o.add(x),s=R?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(x,S){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return R(x)-R(S)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new vs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new vv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new GE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new KE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return vs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class JC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ZC{constructor(e){this.key=e,this.va=!1}}class eP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Rs(l=>mE(l),hc),this.Ma=new Map,this.xa=new Set,this.Oa=new be(K.comparator),this.Na=new Map,this.La=new Ip,this.Ba={},this.ka=new Map,this.qa=ys.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tP(t,e,n=!0){const r=e2(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await QE(r,e,n,!0),i}async function nP(t,e){const n=e2(t);await QE(n,e,!0,!1)}async function QE(t,e,n,r){const i=await EC(t.localStore,pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await rP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&BE(t.remoteStore,i),l}async function rP(t,e,n,r,i){t.Ka=(m,y,x)=>async function(R,N,T,w){let k=N.view.ma(T);k.ns&&(k=await pv(R.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,k)));const D=w&&w.targetChanges.get(N.targetId),F=w&&w.targetMismatches.get(N.targetId)!=null,B=N.view.applyChanges(k,R.isPrimaryClient,D,F);return xv(R,N.targetId,B.wa),B.snapshot}(t,m,y,x);const s=await pv(t.localStore,e,!0),o=new XC(e,s.Ts),l=o.ma(s.documents),u=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);xv(t,n,d.wa);const p=new JC(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function iP(t,e,n){const r=Z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!hc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sp(r.remoteStore,i.targetId),rf(r,i.targetId)}).catch(_a)):(rf(r,i.targetId),await tf(r.localStore,i.targetId,!0))}async function sP(t,e){const n=Z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sp(n.remoteStore,r.targetId))}async function oP(t,e,n){const r=fP(t);try{const i=await function(o,l){const u=Z(o),d=Fe.now(),p=l.reduce((x,S)=>x.add(S.key),ne());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let S=Gn(),R=ne();return u.cs.getEntries(x,p).next(N=>{S=N,S.forEach((T,w)=>{w.isValidDocument()||(R=R.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,S)).next(N=>{m=N;const T=[];for(const w of l){const k=bA(w,m.get(w.key).overlayedDocument);k!=null&&T.push(new Ei(w.key,k,oE(k.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(x,d,T,l)}).next(N=>{y=N;const T=N.applyToLocalDocumentSet(m,R);return u.documentOverlayCache.saveOverlays(x,N.batchId,T)})}).then(()=>({batchId:y.batchId,changes:vE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new be(ae)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await ba(r,i.changes),await wc(r.remoteStore)}catch(i){const s=Np(i,"Failed to persist write");n.reject(s)}}async function YE(t,e){const n=Z(t);try{const r=await vC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await ba(n,r,e)}catch(r){await _a(r)}}function Ev(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const y of m.j_)y.Z_(l)&&(d=!0)}),d&&Dp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function aP(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new be(K.comparator);o=o.insert(s,at.newNoDocument(s,J.min()));const l=ne().add(s),u=new gc(J.min(),new Map,new be(ae),o,l);await YE(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Op(r)}else await tf(r.localStore,e,!1).then(()=>rf(r,e,n)).catch(_a)}async function lP(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await yC(n.localStore,e);JE(n,r,null),XE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ba(n,i)}catch(i){await _a(i)}}async function uP(t,e,n){const r=Z(t);try{const i=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(de(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);JE(r,e,n),XE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ba(r,i)}catch(i){await _a(i)}}function XE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function JE(t,e,n){const r=Z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function rf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||ZE(t,r)})}function ZE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Op(t))}function xv(t,e,n){for(const r of n)r instanceof KE?(t.La.addReference(r.key,e),cP(t,r)):r instanceof GE?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||ZE(t,r.key)):Y()}function cP(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Op(t))}function Op(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ve.fromString(e)),r=t.qa.next();t.Na.set(r,new ZC(n)),t.Oa=t.Oa.insert(n,r),BE(t.remoteStore,new fr(pn(fE(n.path)),r,"TargetPurposeLimboResolution",fp.oe))}}async function ba(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=kp.Wi(u.targetId,d);s.push(m)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const p=Z(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(d,y=>M.forEach(y.$i,x=>p.persistence.referenceDelegate.addReference(m,y.targetId,x)).next(()=>M.forEach(y.Ui,x=>p.persistence.referenceDelegate.removeReference(m,y.targetId,x)))))}catch(m){if(!Ea(m))throw m;q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const y=m.targetId;if(!m.fromCache){const x=p.os.get(y),S=x.snapshotVersion,R=x.withLastLimboFreeSnapshotVersion(S);p.os=p.os.insert(y,R)}}}(r.localStore,s))}async function dP(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await ME(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ba(n,r.hs)}}function hP(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function e2(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aP.bind(null,e),e.Ca.d_=GC.bind(null,e.eventManager),e.Ca.$a=QC.bind(null,e.eventManager),e}function fP(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uP.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return gC(this.persistence,new pC,e.initialUser,this.serializer)}Ga(e){return new dC(bp.Zr,this.serializer)}Wa(e){return new TC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class sf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ev(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dP.bind(null,this.syncEngine),await $C(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new WC}()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),r=function(s){return new SC(s)}(e.databaseInfo);return function(s,o,l,u){return new PC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new NC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ev(this.syncEngine,n,0),function(){return gv.D()?new gv:new IC}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const m=new eP(i,s,o,l,u,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Z(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Ia(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sf.provider={build:()=>new sf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=st.UNAUTHENTICATED,this.clientId=rE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Np(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ME(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gP(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>yv(e.remoteStore,i)),t._onlineComponents=e}async function gP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await Vd(t,new bu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Vd(t,new bu);return t._offlineComponents}async function t2(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Tv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Tv(t,new sf))),t._onlineComponents}function yP(t){return t2(t).then(e=>e.syncEngine)}async function vP(t){const e=await t2(t),n=e.eventManager;return n.onListen=tP.bind(null,e.syncEngine),n.onUnlisten=iP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=nP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=sP.bind(null,e.syncEngine),n}function wP(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new pP({next:y=>{p.Za(),o.enqueueAndForget(()=>KC(s,m)),y.fromCache&&u.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(y)},error:y=>d.reject(y)}),m=new YC(l,p,{includeMetadataChanges:!0,_a:!0});return qC(s,m)}(await vP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _P(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bv(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kv(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function la(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_c(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_P("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=n2((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ec{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OS;switch(r.type){case"firstParty":return new jS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Iv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Iv.delete(n),r.terminate())}(this),Promise.resolve()}}function EP(t,e,n,r={}){var i;const s=(t=la(t,Ec))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=st.MOCK_USER;else{l=H0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new st(d)}t._authCredentials=new LS(new nE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class Ar extends Ti{constructor(e,n,r){super(e,n,fE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new K(e))}withConverter(e){return new Ar(this.firestore,e,this._path)}}function Vr(t,e,...n){if(t=mt(t),r2("collection","path",e),t instanceof Ec){const r=ve.fromString(e,...n);return kv(r),new Ar(t,null,r)}{if(!(t instanceof $t||t instanceof Ar))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return kv(r),new Ar(t.firestore,null,r)}}function Lp(t,e,...n){if(t=mt(t),arguments.length===1&&(e=rE.newId()),r2("doc","path",e),t instanceof Ec){const r=ve.fromString(e,...n);return bv(r),new $t(t,null,new K(r))}{if(!(t instanceof $t||t instanceof Ar))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return bv(r),new $t(t.firestore,t instanceof Ar?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new FE(this,"async_queue_retry"),this.Vu=()=>{const r=Ld();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ld();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ea(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Rp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class xc extends Ec{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Av,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Av(e),this._firestoreClient=void 0,await e}}}function xP(t,e){const n=typeof t=="object"?t:dp(),r=typeof t=="string"?t:"(default)",i=cc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=B0("firestore");s&&EP(i,...s)}return i}function i2(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TP(t),t._firestoreClient}function TP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new XS(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,n2(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new mP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ws(Je.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ws(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=/^__.*__$/;class bP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new xa(e,this.data,n,this.fieldTransforms)}}function o2(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Fp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Fp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ku(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(o2(this.Cu)&&IP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class kP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yc(e)}Qu(e,n,r,i=!1){return new Fp({Cu:e,methodName:n,qu:r,path:Ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function a2(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new kP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function SP(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);c2("Data must be an object, but it was:",o,r);const l=l2(r,o);let u,d;if(s.merge)u=new Zt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const y=CP(e,m,n);if(!o.contains(y))throw new W(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);RP(p,y)||p.push(y)}u=new Zt(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new bP(new Ut(l),u,d)}function AP(t,e,n,r=!1){return Up(n,t.Qu(r?4:3,e))}function Up(t,e){if(u2(t=mt(t)))return c2("Unsupported field value:",e,t),l2(t,e);if(t instanceof s2)return function(r,i){if(!o2(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Up(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Tu(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tu(i.serializer,s)}}if(r instanceof Mp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ws)return{bytesValue:PE(i.serializer,r._byteString)};if(r instanceof $t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return wp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${_c(r)}`)}(t,e)}function l2(t,e){const n={};return iE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,i)=>{const s=Up(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function u2(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Mp||t instanceof ws||t instanceof $t||t instanceof s2||t instanceof jp)}function c2(t,e,n){if(!u2(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=_c(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function CP(t,e,n){if((e=mt(e))instanceof Vp)return e._internalPath;if(typeof e=="string")return d2(t,e);throw ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const PP=new RegExp("[~\\*/\\[\\]]");function d2(t,e,n){if(e.search(PP)>=0)throw ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vp(...e.split("."))._internalPath}catch{throw ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ku(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function RP(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NP extends h2{data(){return super.data()}}function Bp(t,e){return typeof e=="string"?d2(t,e):e instanceof Vp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zp{}class f2 extends zp{}function Su(t,e,...n){let r=[];e instanceof zp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Hp).length,l=s.filter(u=>u instanceof $p).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $p extends f2{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $p(e,n,r)}_apply(e){const n=this._parse(e);return p2(e._query,n),new Ti(e.firestore,e.converter,Qh(e._query,n))}_parse(e){const n=a2(e.firestore);return function(s,o,l,u,d,p,m){let y;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Pv(m,p);const x=[];for(const S of m)x.push(Cv(u,s,S));y={arrayValue:{values:x}}}else y=Cv(u,s,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Pv(m,p),y=AP(l,o,m,p==="in"||p==="not-in");return Le.create(d,p,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Hp extends zp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)p2(o,u),o=Qh(o,u)}(e._query,n),new Ti(e.firestore,e.converter,Qh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wp extends f2{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sa(s,o)}(e._query,this._field,this._direction);return new Ti(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ps(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Au(t,e="asc"){const n=e,r=Bp("orderBy",t);return Wp._create(r,n)}function Cv(t,e,n){if(typeof(n=mt(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pE(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xy(t,new K(r))}if(n instanceof $t)return Xy(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_c(n)}.`)}function Pv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function p2(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class OP{convertValue(e,n="none"){switch(hi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new jp(s)}convertGeoPoint(e){return new Mp(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=mp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Or(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);de(VE(r));const i=new ra(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VP extends h2{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends VP{data(e={}){return super.data(e)}}class MP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new _l(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new _l(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _l(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new _l(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:jP(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}class FP extends OP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function _s(t){t=la(t,Ti);const e=la(t.firestore,xc),n=i2(e),r=new FP(e);return DP(t._query),wP(n,t._query).then(i=>new MP(e,r,t,i))}function m2(t){return y2(la(t.firestore,xc),[new _p(t._key,mn.none())])}function g2(t,e){const n=la(t.firestore,xc),r=Lp(t),i=LP(t.converter,e);return y2(n,[SP(a2(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function y2(t,e){return function(r,i){const s=new Sr;return r.asyncQueue.enqueueAndForget(async()=>oP(await yP(r),i,s)),s.promise}(i2(t),e)}(function(e,n=!0){(function(i){As=i})(_i),ui(new Nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xc(new VS(r.getProvider("auth-internal")),new US(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),fn(qy,"4.7.3",e),fn(qy,"4.7.3","esm2017")})();var UP="firebase",BP="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(UP,BP,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="firebasestorage.googleapis.com",zP="storageBucket",$P=2*60*1e3,HP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Tn{constructor(e,n,r=0){super(Md(e),`Firebase Storage: ${n} (${Md(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,In.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Md(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var En;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(En||(En={}));function Md(t){return"storage/"+t}function WP(){const t="An unknown error occurred, please check the error payload for server response.";return new In(En.UNKNOWN,t)}function qP(){return new In(En.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function KP(){return new In(En.CANCELED,"User canceled the upload/download.")}function GP(t){return new In(En.INVALID_URL,"Invalid URL '"+t+"'.")}function QP(t){return new In(En.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Rv(t){return new In(En.INVALID_ARGUMENT,t)}function w2(){return new In(En.APP_DELETED,"The Firebase app was deleted.")}function YP(t){return new In(En.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw QP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",x=new RegExp(`^https?://${m}/${p}/b/${i}/o${y}`,"i"),S={bucket:1,path:3},R=n===v2?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",T=new RegExp(`^https?://${R}/${i}/${N}`,"i"),k=[{regex:l,indices:u,postModify:s},{regex:x,indices:S,postModify:d},{regex:T,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<k.length;D++){const F=k[D],B=F.regex.exec(e);if(B){const E=B[F.indices.bucket];let v=B[F.indices.path];v||(v=""),r=new en(E,v),F.postModify(r);break}}if(r==null)throw GP(e);return r}}class XP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...N){d||(d=!0,e.apply(null,N))}function m(N){i=setTimeout(()=>{i=null,t(x,u())},N)}function y(){s&&clearTimeout(s)}function x(N,...T){if(d){y();return}if(N){y(),p.call(null,N,...T);return}if(u()||o){y(),p.call(null,N,...T);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let S=!1;function R(N){S||(S=!0,y(),!d&&(i!==null?(N||(l=2),clearTimeout(i),m(0)):N||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function ZP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){return t!==void 0}function Nv(t,e,n,r){if(r<e)throw Rv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Rv(`Invalid value for '${t}'. Expected ${n} or less.`)}function tR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Cu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cu||(Cu={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n,r,i,s,o,l,u,d,p,m,y=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=m,this.retry=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,S)=>{this.resolve_=x,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new El(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Cu.NO_ERROR,u=s.getStatus();if(!l||nR(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Cu.ABORT;r(!1,new El(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new El(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());eR(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=WP();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?w2():KP();o(u)}else{const u=qP();o(u)}};this.canceled_?n(!1,new El(!1,null,!0)):this.backoffId_=JP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class El{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lR(t,e,n,r,i,s,o=!0){const l=tR(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return oR(d,e),iR(d,n),sR(d,s),aR(d,r),new rR(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function cR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pu(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cR(this._location.path)}get storage(){return this._service}get parent(){const e=uR(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new Pu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YP(e)}}function Dv(t,e){const n=e==null?void 0:e[zP];return n==null?null:en.makeFromBucketSpec(n,t)}function dR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:H0(i,t.app.options.projectId))}class hR{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=v2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$P,this._maxUploadRetryTime=HP,this._requests=new Set,i!=null?this._bucket=en.makeFromBucketSpec(i,this._host):this._bucket=Dv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=Dv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XP(w2());{const o=lR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ov="@firebase/storage",Lv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="storage";function fR(t=dp(),e){t=mt(t);const r=cc(t,_2).getImmediate({identifier:e}),i=B0("storage");return i&&pR(r,...i),r}function pR(t,e,n,r={}){dR(t,e,n,r)}function mR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hR(n,r,i,e,_i)}function gR(){ui(new Nr(_2,mR,"PUBLIC").setMultipleInstances(!0)),fn(Ov,Lv,""),fn(Ov,Lv,"esm2017")}gR();function qp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function E2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yR=E2,x2=new va("auth","Firebase",E2());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new up("@firebase/auth");function vR(t,...e){Ru.logLevel<=re.WARN&&Ru.warn(`Auth (${_i}): ${t}`,...e)}function Bl(t,...e){Ru.logLevel<=re.ERROR&&Ru.error(`Auth (${_i}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw Kp(t,...e)}function yn(t,...e){return Kp(t,...e)}function T2(t,e,n){const r=Object.assign(Object.assign({},yR()),{[e]:n});return new va("auth","Firebase",r).create(e,{appName:t.name})}function Cr(t){return T2(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x2.create(t,...e)}function Q(t,e,...n){if(!t)throw Kp(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Qn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wR(){return Vv()==="http:"||Vv()==="https:"}function Vv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wR()||pk()||"connection"in navigator)?navigator.onLine:!0}function ER(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qn(n>e,"Short delay should be less than long delay!"),this.isMobile=dk()||mk()}get(){return _R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t,e){Qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new ka(3e4,6e4);function Ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ur(t,e,n,r,i={}){return b2(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return fk()||(d.referrerPolicy="no-referrer"),I2.fetch()(k2(t,t.config.apiHost,n,l),d)})}async function b2(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xR),e);try{const i=new bR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw xl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw xl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw T2(t,p,d);on(t,p)}}catch(i){if(i instanceof Tn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function Tc(t,e,n,r,i={}){const s=await Ur(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}function k2(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gp(t.config,i):`${t.config.apiScheme}://${i}`}function IR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),TR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yn(t,e,r);return i.customData._tokenResponse=n,i}function Mv(t){return t!==void 0&&t.enterprise!==void 0}class kR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return IR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SR(t,e){return Ur(t,"GET","/v2/recaptchaConfig",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AR(t,e){return Ur(t,"POST","/v1/accounts:delete",e)}async function S2(t,e){return Ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CR(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=Qp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(jd(i.auth_time)),issuedAtTime:Oo(jd(i.iat)),expirationTime:Oo(jd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jd(t){return Number(t)*1e3}function Qp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=F0(n);return i?JSON.parse(i):(Bl("Failed to decode base64 JWT payload"),null)}catch(i){return Bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jv(t){const e=Qp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&PR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ua(t,S2(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?A2(s.providerUserInfo):[],l=DR(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new af(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function NR(t){const e=mt(t);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function A2(t){return t.map(e=>{var{providerId:n}=e,r=qp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e){const n=await b2(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=k2(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",I2.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function LR(t,e){return Ur(t,"POST","/v2/accounts:revokeToken",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=jv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ts;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new af(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ua(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CR(this,e)}reload(){return NR(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vn(this.auth.app))return Promise.reject(Cr(this.auth));const e=await this.getIdToken();return await ua(this,AR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:D,isAnonymous:F,providerData:B,stsTokenManager:E}=n;Q(k&&E,e,"internal-error");const v=ts.fromJSON(this.name,E);Q(typeof k=="string",e,"internal-error"),tr(m,e.name),tr(y,e.name),Q(typeof D=="boolean",e,"internal-error"),Q(typeof F=="boolean",e,"internal-error"),tr(x,e.name),tr(S,e.name),tr(R,e.name),tr(N,e.name),tr(T,e.name),tr(w,e.name);const _=new jn({uid:k,auth:e,email:y,emailVerified:D,displayName:m,isAnonymous:F,photoURL:S,phoneNumber:x,tenantId:R,stsTokenManager:v,createdAt:T,lastLoginAt:w});return B&&Array.isArray(B)&&(_.providerData=B.map(I=>Object.assign({},I))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new ts;i.updateFromServerResponse(n);const s=new jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?A2(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ts;l.updateFromIdToken(r);const u=new jn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new af(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new Map;function Fn(t){Qn(t instanceof Function,"Expected a class definition");let e=Fv.get(t);return e?(Qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}C2.type="NONE";const Uv=C2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zl(this.userKey,i.apiKey,s),this.fullPersistenceKey=zl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(Fn(Uv),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Fn(Uv);const o=zl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const m=jn._fromJSON(e,p);d!==s&&(l=m),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ns(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new ns(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(P2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(L2(e))return"Blackberry";if(V2(e))return"Webos";if(R2(e))return"Safari";if((e.includes("chrome/")||N2(e))&&!e.includes("edge/"))return"Chrome";if(O2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function P2(t=ut()){return/firefox\//i.test(t)}function R2(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N2(t=ut()){return/crios\//i.test(t)}function D2(t=ut()){return/iemobile/i.test(t)}function O2(t=ut()){return/android/i.test(t)}function L2(t=ut()){return/blackberry/i.test(t)}function V2(t=ut()){return/webos/i.test(t)}function Yp(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VR(t=ut()){var e;return Yp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MR(){return gk()&&document.documentMode===10}function M2(t=ut()){return Yp(t)||O2(t)||V2(t)||L2(t)||/windows phone/i.test(t)||D2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j2(t,e=[]){let n;switch(t){case"Browser":n=Bv(ut());break;case"Worker":n=`${Bv(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e={}){return Ur(t,"GET","/v2/passwordPolicy",Ii(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=6;class BR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zv(this),this.idTokenSubscription=new zv(this),this.beforeStateQueue=new jR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await S2(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Vn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ER()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vn(this.app))return Promise.reject(Cr(this));const n=e?mt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vn(this.app)?Promise.reject(Cr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vn(this.app)?Promise.reject(Cr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FR(this),n=new BR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await LR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ds(t){return mt(t)}class zv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ik(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $R(t){Ic=t}function F2(t){return Ic.loadJS(t)}function HR(){return Ic.recaptchaEnterpriseScript}function WR(){return Ic.gapiScript}function qR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const KR="recaptcha-enterprise",GR="NO_RECAPTCHA";class QR{constructor(e){this.type=KR,this.auth=Ds(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{SR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new kR(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Mv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(GR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Mv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=HR();u.length!==0&&(u+=l),F2(u).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function $v(t,e,n,r=!1){const i=new QR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hv(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await $v(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await $v(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e){const n=cc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yu(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function XR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JR(t,e,n){const r=Ds(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=U2(e),{host:o,port:l}=ZR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eN()}function U2(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZR(t){const e=U2(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wv(o)}}}function Wv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function tN(t,e){return Ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e){return Tc(t,"POST","/v1/accounts:signInWithPassword",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e){return Tc(t,"POST","/v1/accounts:signInWithEmailLink",Ii(t,e))}async function iN(t,e){return Tc(t,"POST","/v1/accounts:signInWithEmailLink",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Xp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ca(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ca(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hv(e,n,"signInWithPassword",nN);case"emailLink":return rN(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hv(e,r,"signUpPassword",tN);case"emailLink":return iN(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e){return Tc(t,"POST","/v1/accounts:signInWithIdp",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN="http://localhost";class fi extends Xp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:sN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aN(t){const e=go(yo(t)).link,n=e?go(yo(e)).deep_link_id:null,r=go(yo(t)).deep_link_id;return(r?go(yo(r)).link:null)||r||n||e||t}class Jp{constructor(e){var n,r,i,s,o,l;const u=go(yo(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=oN((i=u.mode)!==null&&i!==void 0?i:null);Q(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=aN(e);try{return new Jp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return ca._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jp.parseLink(n);return Q(r,"argument-error"),ca._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends B2{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Sa{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com";ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Sa{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Sa{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jn._fromIdTokenResponse(e,r,i),o=qv(r);return new Es({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qv(r);return new Es({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Du.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Du(e,n,r,i)}}function z2(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Du._fromErrorAndOperation(t,s,e,r):s})}async function lN(t,e,n=!1){const r=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e,n=!1){const{auth:r}=t;if(Vn(r.app))return Promise.reject(Cr(r));const i="reauthenticate";try{const s=await ua(t,z2(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Qp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Es._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $2(t,e,n=!1){if(Vn(t.app))return Promise.reject(Cr(t));const r="signIn",i=await z2(t,r,e),s=await Es._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cN(t,e){return $2(Ds(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(t){const e=Ds(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function hN(t,e,n){return Vn(t.app)?Promise.reject(Cr(t)):cN(mt(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&dN(t),r})}function fN(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function pN(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function Zp(t){return mt(t).signOut()}const Ou="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=1e3,gN=10;class W2 extends H2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);MR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}W2.type="LOCAL";const yN=W2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2 extends H2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q2.type="SESSION";const K2=q2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await vN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=em("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===d)switch(y.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function _N(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function EN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TN(){return G2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2="firebaseLocalStorageDb",IN=1,Lu="firebaseLocalStorage",Y2="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Lu],e?"readwrite":"readonly").objectStore(Lu)}function bN(){const t=indexedDB.deleteDatabase(Q2);return new Aa(t).toPromise()}function lf(){const t=indexedDB.open(Q2,IN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Lu,{keyPath:Y2})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Lu)?e(r):(r.close(),await bN(),e(await lf()))})})}async function Kv(t,e,n){const r=kc(t,!0).put({[Y2]:e,value:n});return new Aa(r).toPromise()}async function kN(t,e){const n=kc(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function Gv(t,e){const n=kc(t,!0).delete(e);return new Aa(n).toPromise()}const SN=800,AN=3;class X2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(TN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await EN(),!this.activeServiceWorker)return;this.sender=new wN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lf();return await Kv(e,Ou,"1"),await Gv(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kc(i,!1).getAll();return new Aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}X2.type="LOCAL";const CN=X2;new ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t,e){return e?Fn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Xp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function RN(t){return $2(t.auth,new tm(t),t.bypassAuthState)}function NN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),uN(n,new tm(t),t.bypassAuthState)}async function DN(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),lN(n,new tm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RN;case"linkViaPopup":case"linkViaRedirect":return DN;case"reauthViaPopup":case"reauthViaRedirect":return NN;default:on(this.auth,"internal-error")}}resolve(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new ka(2e3,1e4);class Ki extends J2{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ki.currentPopupAction&&Ki.currentPopupAction.cancel(),Ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Qn(this.filter.length===1,"Popup operations only handle one event");const e=em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ON.get())};e()}}Ki.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN="pendingRedirect",$l=new Map;class VN extends J2{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await MN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MN(t,e){const n=UN(e),r=FN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jN(t,e){$l.set(t._key(),e)}function FN(t){return Fn(t._redirectPersistence)}function UN(t){return zl(LN,t.config.apiKey,t.name)}async function BN(t,e,n=!1){if(Vn(t.app))return Promise.reject(Cr(t));const r=Ds(t),i=PN(r,e),o=await new VN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=10*60*1e3;class $N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Z2(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qv(e))}saveEventToCache(e){this.cachedEventUids.add(Qv(e)),this.lastProcessedEventTime=Date.now()}}function Qv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Z2({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Z2(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(t,e={}){return Ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KN=/^https?/;async function GN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WN(t);for(const n of e)try{if(QN(n))return}catch{}on(t,"unauthorized-domain")}function QN(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KN.test(n))return!1;if(qN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=new ka(3e4,6e4);function Yv(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XN(t){return new Promise((e,n)=>{var r,i,s;function o(){Yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yv(),n(yn(t,"network-request-failed"))},timeout:YN.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const l=qR("iframefcb");return vn()[l]=()=>{gapi.load?o():n(yn(t,"network-request-failed"))},F2(`${WR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function JN(t){return Hl=Hl||XN(t),Hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new ka(5e3,15e3),eD="__/auth/iframe",tD="emulator/auth/iframe",nD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iD(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gp(e,tD):`https://${t.config.authDomain}/${eD}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=rD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wa(r).slice(1)}`}async function sD(t){const e=await JN(t),n=vn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:iD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=vn().setTimeout(()=>{s(o)},ZN.get());function u(){vn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aD=500,lD=600,uD="_blank",cD="http://localhost";class Xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dD(t,e,n,r=aD,i=lD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},oD),{width:r.toString(),height:i.toString(),top:s,left:o}),d=ut().toLowerCase();n&&(l=N2(d)?uD:n),P2(d)&&(e=e||cD,u.scrollbars="yes");const p=Object.entries(u).reduce((y,[x,S])=>`${y}${x}=${S},`,"");if(VR(d)&&l!=="_self")return hD(e||"",l),new Xv(null);const m=window.open(e||"",l,p);Q(m,t,"popup-blocked");try{m.focus()}catch{}return new Xv(m)}function hD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="__/auth/handler",pD="emulator/auth/handler",mD=encodeURIComponent("fac");async function Jv(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof B2){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Sa){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${mD}=${encodeURIComponent(u)}`:"";return`${gD(t)}?${wa(l).slice(1)}${d}`}function gD({config:t}){return t.emulator?Gp(t,pD):`https://${t.authDomain}/${fD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="webStorageSupport";class yD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K2,this._completeRedirectFn=BN,this._overrideRedirectResult=jN}async _openPopup(e,n,r,i){var s;Qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Jv(e,n,r,of(),i);return dD(e,o,em())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Jv(e,n,r,of(),i);return _N(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sD(e),r=new $N(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fd,{type:Fd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fd];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M2()||R2()||Yp()}}const vD=yD;var Zv="@firebase/auth",ew="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ED(t){ui(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j2(t)},d=new zR(r,i,s,u);return XR(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Nr("auth-internal",e=>{const n=Ds(e.getProvider("auth").getImmediate());return(r=>new wD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Zv,ew,_D(t)),fn(Zv,ew,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=5*60,TD=$0("authIdTokenMaxAge")||xD;let tw=null;const ID=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TD)return;const i=n==null?void 0:n.token;tw!==i&&(tw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bD(t=dp()){const e=cc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YR(t,{popupRedirectResolver:vD,persistence:[CN,yN,K2]}),r=$0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ID(s.toString());pN(n,o,()=>o(n.currentUser)),fN(n,l=>o(l))}}const i=U0("auth");return i&&JR(n,`http://${i}`),n}function kD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$R({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",kD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ED("Browser");const SD={apiKey:"AIzaSyDPZVbCaTe3mB3x3iINLAYdcHW_Gu1touw",authDomain:"grandexchange-5b251.firebaseapp.com",projectId:"grandexchange-5b251",storageBucket:"grandexchange-5b251.firebasestorage.app",messagingSenderId:"23800452996",appId:"1:23800452996:web:61f70cf92cf0f63196efd1"},nm=K0(SD),wn=xP(nm);fR(nm);const pi=bD(nm);function AD({isOpen:t,onClose:e}){return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:`drawer ${t?"open":""}`,onClick:n=>n.target.classList.contains("drawer")&&e(),children:[f.jsx(Ft,{to:"/",onClick:e,children:"Home"}),f.jsx(Ft,{to:"/casino",onClick:e,children:"Casino"}),f.jsx(Ft,{to:"/cricket",onClick:e,children:"Cricket"}),f.jsx(Ft,{to:"/football",onClick:e,children:"Football"}),f.jsx(Ft,{to:"/card",onClick:e,children:"Card Games"}),f.jsx(Ft,{to:"/about",onClick:e,children:"About"}),f.jsx("div",{style:{marginTop:"12px"},children:f.jsx("a",{className:"cta-btn",href:"https://wa.me/917587914617",style:{display:"inline-block",padding:"10px 16px"},children:"Click for ID"})})]}),f.jsx("style",{jsx:!0,children:`
        .drawer {
          position: fixed;
          top: 0;
          left: -280px;
          width: 280px;
          height: 100%;
          background: #0b0b0b;
          padding: 22px;
          transition: all 0.28s ease;
          z-index: 90;
        }
        .drawer.open {
          left: 0;
        }
        .drawer a {
          display: block;
          color: var(--muted);
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
      `})]})}function Ls(){const[t,e]=U.useState(!1);return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:"header",role:"banner",children:f.jsxs("div",{className:"wrap",children:[f.jsx("div",{className:"brand",children:f.jsx("div",{className:"logo","aria-hidden":"true"})}),f.jsxs("nav",{className:"nav",role:"navigation","aria-label":"Main",children:[f.jsx(Ft,{to:"/",children:"Home"}),f.jsxs("div",{className:"has-dd",children:[f.jsx("a",{href:"#",children:"Services ▾"}),f.jsxs("ul",{className:"dropdown",children:[f.jsx("li",{children:f.jsx(Ft,{to:"/cricket",children:"Cricket Betting"})}),f.jsx("li",{children:f.jsx(Ft,{to:"/casino",children:"Casino Betting"})}),f.jsx("li",{children:f.jsx(Ft,{to:"/football",children:"Football Betting"})}),f.jsx("li",{children:f.jsx(Ft,{to:"/card",children:"Card Games"})})]})]}),f.jsx(Ft,{to:"/about",children:"About"})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[f.jsx("a",{className:"cta-btn",href:"https://wa.me/917587914617",children:"Click for ID"}),f.jsx("button",{className:"menu-btn",onClick:()=>e(!0),"aria-label":"Open menu",children:"☰"})]})]})}),f.jsx(AD,{isOpen:t,onClose:()=>e(!1)}),f.jsx("style",{jsx:!0,children:`
        .header {
          width: 100%;
          background: #474343;
          color: #111;
          position: sticky;
          top: 0;
          z-index: 60;
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.06);
        }
        .wrap {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          gap: 16px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .logo {
          width: 170px;
          height: 56px;
          background: url('/images/grandexchange.png') center/contain no-repeat;
        }
        .nav {
          display: flex;
          gap: 22px;
          align-items: center;
          font-weight: 600;
        }
        .nav a {
          color: #111;
          padding: 8px 6px;
        }
        .nav a:hover {
          color: var(--accent);
        }
        .has-dd {
          position: relative;
        }
        .has-dd .dropdown {
          display: none;
          position: absolute;
          background: #fff;
          padding: 10px 0;
          list-style: none;
          margin: 0;
          min-width: 180px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          z-index: 100;
        }
        .has-dd:hover .dropdown {
          display: block;
        }
        .has-dd .dropdown li a {
          display: block;
          padding: 10px 15px;
          color: #333;
        }
        .has-dd .dropdown li a:hover {
          background: #f5f5f5;
        }
        .cta-btn {
          background: #000;
          color: #fff;
          padding: 12px 20px;
          border-radius: 28px;
          font-weight: 700;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
        }
        .menu-btn {
          display: none;
          background: transparent;
          border: 0;
          font-size: 26px;
          cursor: pointer;
        }
        @media (max-width: 700px) {
          .nav {
            display: none;
          }
          .menu-btn {
            display: block;
          }
          .logo {
            width: 140px;
            height: 48px;
          }
        }
      `})]})}function Vs(){const t=new Date().getFullYear();return f.jsxs("footer",{className:"footer",role:"contentinfo",children:[f.jsxs("div",{className:"foot-inner",children:[f.jsxs("div",{className:"foot-col",children:[f.jsx("h4",{children:"GrandExchange"}),f.jsx("p",{style:{color:"var(--muted)",maxWidth:"320px"},children:"India's largest exchange platform. Trusted cricket demo ID platform & instant withdrawals."})]}),f.jsxs("div",{className:"foot-col",children:[f.jsx("h4",{children:"Quick Links"}),f.jsxs("p",{children:[f.jsx("a",{href:"#",style:{color:"var(--muted)"},children:"Home"})," ·"," ",f.jsx("a",{href:"#",style:{color:"var(--muted)"},children:"Services"})]}),f.jsxs("p",{children:[f.jsx("a",{href:"#",style:{color:"var(--muted)"},children:"Platform"})," ·"," ",f.jsx("a",{href:"#",style:{color:"var(--muted)"},children:"Support"})]})]}),f.jsxs("div",{className:"foot-col",children:[f.jsx("h4",{children:"Contact"}),f.jsxs("p",{style:{color:"var(--muted)"},children:["WhatsApp: ",f.jsx("strong",{style:{color:"#fff"},children:"+91 7587914617"})]}),f.jsxs("p",{style:{color:"var(--muted)"},children:["Email: ",f.jsx("strong",{style:{color:"#fff"},children:"GrandExchange@gmail.com"})]})]})]}),f.jsxs("div",{className:"foot-bottom",children:["© ",t," GrandExchange.Live — All rights reserved."]}),f.jsx("style",{jsx:!0,children:`
        .footer {
          background: #0b0b0b;
          padding: 36px 20px 18px;
          color: var(--muted);
        }
        .foot-inner {
          max-width: var(--max-width);
          margin: 0 auto;
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .foot-col {
          min-width: 180px;
          flex: 1;
        }
        .foot-col h4 {
          color: #fff;
          margin: 0 0 12px;
        }
        .foot-bottom {
          max-width: var(--max-width);
          margin: 18px auto 0;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          text-align: center;
        }
      `})]})}function Ms(){return f.jsxs("a",{className:"whats-float",href:"https://wa.me/917587914617",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"WhatsApp"}),f.jsx("style",{jsx:!0,children:`
        .whats-float {
          position: fixed;
          right: 18px;
          bottom: 18px;
          background: linear-gradient(180deg, #14a76c, #0e8b59);
          width: 64px;
          height: 64px;
          border-radius: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 80;
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4);
        }
        .whats-float img {
          width: 38px;
          height: 38px;
        }
      `})]})}function CD(){const[t,e]=U.useState([]),[n,r]=U.useState([]),[i,s]=U.useState(!0);U.useEffect(()=>{o()},[]);const o=async()=>{try{const u=Su(Vr(wn,"instafeeds"),Au("created_at","desc")),p=(await _s(u)).docs.map(S=>({id:S.id,...S.data()}));e(p);const m=Su(Vr(wn,"paymentproofs"),Au("uploaded_at","desc")),x=(await _s(m)).docs.map(S=>({id:S.id,...S.data()}));r(x),s(!1)}catch(u){console.error("Error fetching data:",u),s(!1)}},l=u=>{const d=encodeURIComponent(`Hello! I'm interested in: ${u}`);window.open(`https://wa.me/917587914617?text=${d}`,"_blank")};return f.jsxs(f.Fragment,{children:[f.jsx(Ls,{}),f.jsx("section",{className:"hero",children:f.jsx("div",{className:"container",children:f.jsxs("div",{className:"hero-inner",children:[f.jsx("h1",{children:"Experience India's Most Trusted & Fastest Growing Online Sports Betting Platform"}),f.jsx("p",{className:"lead",children:"At GrandExchange, we bring you a premium and secure sports betting experience with verified Cricket ID creation, real-time odds, instant deposits, and lightning-fast withdrawals."}),f.jsx("a",{className:"cta-btn",href:"https://wa.me/917587914617",style:{background:"var(--accent)",color:"#000",marginTop:"6px",display:"inline-block"},children:"Contact Us Now"})]})})}),f.jsx("section",{className:"section",id:"instagram",children:f.jsxs("div",{className:"container",children:[f.jsx("div",{className:"title",children:"Instagram Feeds"}),f.jsx("div",{className:"feed-wrap",children:i?f.jsx("p",{style:{textAlign:"center"},children:"Loading feeds..."}):t.length===0?f.jsx("p",{style:{textAlign:"center"},children:"No Instagram feeds uploaded yet."}):f.jsx("div",{className:"grid-carousel",children:t.map(u=>{var d;return f.jsxs("div",{className:"card-feed",onClick:()=>l(u.caption),style:{cursor:"pointer"},children:[f.jsx("div",{className:"card-thumb",style:{backgroundImage:`url(${u.image})`}}),f.jsxs("div",{className:"card-meta",children:[f.jsx("h4",{children:u.caption}),f.jsx("small",{children:new Date((d=u.created_at)==null?void 0:d.toDate()).toLocaleString()})]})]},u.id)})})})]})}),f.jsx("section",{className:"section",id:"proofs",style:{paddingTop:"6px",paddingBottom:"6px"},children:f.jsxs("div",{className:"container",children:[f.jsx("div",{className:"title",style:{fontSize:"34px"},children:"Payment Proofs"}),n.length>0&&f.jsx("div",{className:"slider",children:n.map(u=>f.jsx("div",{className:"slide",children:f.jsx("div",{className:"proof",style:{backgroundImage:`url(${u.image})`}})},u.id))})]})}),f.jsx("section",{className:"section",style:{background:"linear-gradient(180deg,#0b1220,#0f1724)",padding:"60px 20px"},children:f.jsxs("div",{className:"container",style:{display:"flex",alignItems:"center",gap:"40px",flexWrap:"wrap"},children:[f.jsxs("div",{style:{flex:1,minWidth:"280px"},children:[f.jsx("h2",{style:{fontFamily:"'Playfair Display',serif",fontSize:"40px",color:"var(--accent)",marginBottom:"16px"},children:"BUMPER OFFER"}),f.jsxs("p",{style:{fontSize:"18px",lineHeight:"1.7",marginBottom:"24px"},children:["🎮✨ Step into the ultimate betting experience! ✨🎮",f.jsx("br",{}),f.jsx("br",{}),"For a limited time only, ",f.jsx("strong",{children:"GrandExchange"})," is offering an exclusive Bumper Offer with a ",f.jsx("strong",{children:"10% bonus"}),"."]}),f.jsx("a",{className:"cta-btn",href:"https://wa.me/917587914617",style:{background:"var(--accent)",color:"#000",padding:"14px 28px",borderRadius:"40px",fontWeight:700},children:"WHATS APP US NOW"})]}),f.jsx("div",{style:{flex:1,minWidth:"280px",textAlign:"center"},children:f.jsx("img",{src:"/images/bumper.jpg",alt:"Bumper Offer",style:{maxWidth:"100%",height:"auto",borderRadius:"12px",boxShadow:"0 8px 30px rgba(0,0,0,0.4)"}})})]})}),f.jsxs("section",{className:"about",children:[f.jsx("div",{className:"overlay"}),f.jsxs("div",{className:"about-inner",children:[f.jsxs("div",{className:"feature",children:[f.jsx("h3",{children:"Choose Your Game"}),f.jsx("p",{children:"Pick from a wide range of thrilling gambling options."})]}),f.jsxs("div",{className:"feature",children:[f.jsx("h3",{children:"Place Your Bet"}),f.jsx("p",{children:"Watch as magic unfolds with every spin or card flip."})]}),f.jsxs("div",{className:"feature",children:[f.jsx("h3",{children:"Claim Your Prize"}),f.jsx("p",{children:"Win big and unlock rewards as you level up."})]})]}),f.jsxs("a",{className:"whatsapp-btn",href:"https://wa.me/917587914617",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"",style:{width:"26px",height:"26px",verticalAlign:"middle",marginRight:"10px"}}),"WHATS APP US NOW"]})]}),f.jsx(Vs,{}),f.jsx(Ms,{}),f.jsx("style",{jsx:!0,children:`
        .hero {
          background-image: url('/images/home.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
          height: 665px;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.35), rgba(3,6,15,0.6));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          margin: 0 0 18px;
          color: #8ee07f;
          line-height: 1.05;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          font-size: 18px;
          margin: 0 0 26px;
        }
        .section {
          padding: 48px 20px;
        }
        .title {
          font-family: 'Playfair Display', serif;
          text-align: center;
          font-size: 48px;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .grid-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 18px auto;
        }
        .card-feed {
          background: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.35));
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.28s ease;
        }
        .card-feed:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
        }
        .card-thumb {
          height: 360px;
          background-size: cover;
          background-position: center;
        }
        .card-meta {
          padding: 12px 14px;
        }
        .card-meta h4 {
          margin: 0;
          font-size: 14px;
          color: #fff;
        }
        .card-meta small {
          color: var(--muted);
          display: block;
          margin-top: 6px;
          font-size: 13px;
        }
        .slider {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding: 24px 0;
        }
        .slide {
          min-width: 320px;
          flex: 0 0 32%;
          background: linear-gradient(180deg,#09312a,#074437);
          border-radius: 12px;
          padding: 14px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .proof {
          height: 420px;
          background-size: cover;
          background-position: center;
          border-radius: 10px;
        }
        .about {
          background-size: cover;
          background-position: center;
          padding: 54px 20px 80px;
          position: relative;
          margin-top: 8px;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.6), rgba(3,6,15,0.72));
        }
        .about-inner {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 28px;
        }
        .feature {
          background: rgba(0,0,0,0.32);
          padding: 26px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .feature h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }
        .feature p {
          color: var(--muted);
          margin: 0;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto 0;
          padding: 14px 28px;
          border-radius: 40px;
          border: 3px solid rgba(0,0,0,0.6);
          width: 360px;
          max-width: 92%;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1100px) {
          .grid-carousel {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 700px) {
          .grid-carousel {
            grid-template-columns: 1fr;
          }
          .about-inner {
            grid-template-columns: 1fr;
          }
          .hero h1 {
            font-size: 32px;
          }
        }
      `})]})}function PD(){return f.jsxs(f.Fragment,{children:[f.jsx(Ls,{}),f.jsx("section",{className:"hero",children:f.jsxs("div",{className:"container hero-inner",children:[f.jsx("h1",{children:"About GrandExchange"}),f.jsx("p",{className:"lead",children:"Learn about India's most trusted betting platform, offering safe, secure, and enjoyable gaming experiences."})]})}),f.jsxs("div",{className:"content",children:[f.jsx("h2",{children:"Our Mission"}),f.jsx("p",{children:"GrandExchange aims to provide a safe and reliable online betting experience for users across India. We prioritize transparency, security, and fairness in all our games."}),f.jsx("h2",{children:"Our Vision"}),f.jsx("p",{children:"To become the leading platform for online betting by combining advanced technology, excellent customer support, and innovative gaming options."}),f.jsx("h2",{children:"Why Choose Us?"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Licensed & Secure Platform"}),f.jsx("li",{children:"Live Betting & Real-Time Odds"}),f.jsx("li",{children:"24/7 Customer Support"}),f.jsx("li",{children:"Multiple Game Options: Cricket, Football, Casino, Card Games"}),f.jsx("li",{children:"Fast Deposits & Withdrawals"}),f.jsx("li",{children:"Exclusive Promotions & Rewards"})]})]}),f.jsx("section",{className:"about-section",children:f.jsxs("div",{className:"about-inner",children:[f.jsxs("div",{className:"feature",children:[f.jsx("h3",{children:"Security"}),f.jsx("p",{children:"We use advanced encryption to ensure all your transactions and data are fully protected."})]}),f.jsxs("div",{className:"feature",children:[f.jsx("h3",{children:"Fair Play"}),f.jsx("p",{children:"All games are monitored and audited to maintain fairness and transparency."})]}),f.jsxs("div",{className:"feature",children:[f.jsx("h3",{children:"Support"}),f.jsx("p",{children:"Our customer service team is available 24/7 to assist you with any queries."})]})]})}),f.jsxs("a",{className:"whatsapp-btn",href:"https://wa.me/917587914617",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"",style:{width:"26px",height:"26px",marginRight:"10px",verticalAlign:"middle"}}),"WHATS APP US NOW"]}),f.jsx(Vs,{}),f.jsx(Ms,{}),f.jsx("style",{jsx:!0,children:`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.2), rgba(3,6,15,0.4));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
          position: relative;
          z-index: 2;
          margin: 0 auto;
          text-align: center;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          color: #8ee07f;
          margin-bottom: 18px;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          font-size: 18px;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }
        .content {
          max-width: 900px;
          margin: 40px auto;
          padding: 28px;
          background: rgba(0,0,0,0.3);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          margin-bottom: 16px;
          text-align: center;
        }
        .content p {
          font-size: 17px;
          line-height: 1.8;
          margin-bottom: 16px;
          color: #fff;
        }
        .content ul {
          margin-left: 24px;
          margin-bottom: 24px;
        }
        .content li {
          margin-bottom: 10px;
        }
        .about-section {
          padding: 40px 20px;
        }
        .about-inner {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px;
        }
        .feature {
          background: rgba(0,0,0,0.32);
          padding: 26px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.04);
        }
        .feature h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }
        .feature p {
          color: var(--muted);
          margin: 0;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto;
          padding: 14px 28px;
          border-radius: 40px;
          width: 90%;
          max-width: 360px;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        @media (max-width: 1100px) {
          .about-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 700px) {
          .about-inner {
            grid-template-columns: 1fr;
          }
          .hero h1 {
            font-size: 32px;
          }
        }
      `})]})}function RD(){return f.jsxs(f.Fragment,{children:[f.jsx(Ls,{}),f.jsx("section",{className:"hero",children:f.jsxs("div",{className:"container hero-inner",children:[f.jsx("h1",{children:"Football Betting"}),f.jsx("p",{className:"lead",children:"GrandExchange brings you India's most trusted football betting platform with live match odds, instant deposits, fast withdrawals, and verified betting IDs."})]})}),f.jsxs("div",{className:"content",children:[f.jsx("h2",{children:"Why Choose GrandExchange for Football?"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Live Football Match Odds Updates"}),f.jsx("li",{children:"Instant Account Creation & Dedicated Support"}),f.jsx("li",{children:"Safe, Secured & Licensed Betting Platform"}),f.jsx("li",{children:"Real-Time Betting and Fast Withdrawals"}),f.jsx("li",{children:"24/7 Customer Assistance for Football Fans"}),f.jsx("li",{children:"Exclusive Football Tournaments & Promotions"})]})]}),f.jsxs("a",{className:"whatsapp-btn",href:"https://wa.me/917587914617",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"",style:{width:"26px",height:"26px",verticalAlign:"middle",marginRight:"10px"}}),"WHATS APP US NOW"]}),f.jsx(Vs,{}),f.jsx(Ms,{}),f.jsx("style",{jsx:!0,children:`
        .hero {
          background-image: url('/images/football.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.35), rgba(3,6,15,0.6));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          margin: 0 0 18px;
          color: #8ee07f;
          line-height: 1.05;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          font-size: 18px;
          margin: 0 0 26px;
        }
        .content {
          max-width: 900px;
          margin: 32px auto;
          background: rgba(0,0,0,0.3);
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .content ul {
          margin: 12px 0 18px 20px;
        }
        .content li {
          margin-bottom: 8px;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto 38px;
          padding: 14px 28px;
          border-radius: 40px;
          border: 3px solid rgba(0,0,0,0.6);
          width: 360px;
          max-width: 92%;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        @media (max-width: 700px) {
          .hero h1 {
            font-size: 32px;
          }
        }
      `})]})}function ND(){return f.jsxs(f.Fragment,{children:[f.jsx(Ls,{}),f.jsx("section",{className:"hero",children:f.jsxs("div",{className:"container hero-inner",children:[f.jsx("h1",{children:"Cricket Betting"}),f.jsx("p",{className:"lead",children:"GrandExchange brings you India's most trusted cricket betting experience with live odds, instant deposits, fast withdrawals, and verified betting IDs."})]})}),f.jsxs("div",{className:"content",children:[f.jsx("h2",{children:"Why Choose GrandExchange?"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Live Cricket Odds Updates"}),f.jsx("li",{children:"Instant Account Creation & Support"}),f.jsx("li",{children:"Safe, Secured & Licensed Platform"}),f.jsx("li",{children:"Real-Time Betting and Fast Withdrawals"}),f.jsx("li",{children:"24/7 Customer Assistance"})]})]}),f.jsxs("a",{className:"whatsapp-btn",href:"https://wa.me/917587914617",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"",style:{width:"26px",height:"26px",verticalAlign:"middle",marginRight:"10px"}}),"WHATS APP US NOW"]}),f.jsx(Vs,{}),f.jsx(Ms,{}),f.jsx("style",{jsx:!0,children:`
        .hero {
          background-image: url('/images/b340566eb510527692129043eedd3985.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.35), rgba(3,6,15,0.6));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          margin: 0 0 18px;
          color: #8ee07f;
          line-height: 1.05;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          font-size: 18px;
          margin: 0 0 26px;
        }
        .content {
          max-width: 900px;
          margin: 32px auto;
          background: rgba(0,0,0,0.3);
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .content ul {
          margin: 12px 0 18px 20px;
        }
        .content li {
          margin-bottom: 8px;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto 38px;
          padding: 14px 28px;
          border-radius: 40px;
          border: 3px solid rgba(0,0,0,0.6);
          width: 360px;
          max-width: 92%;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        @media (max-width: 700px) {
          .hero h1 {
            font-size: 32px;
          }
        }
      `})]})}function DD(){return f.jsxs(f.Fragment,{children:[f.jsx(Ls,{}),f.jsx("section",{className:"hero",children:f.jsxs("div",{className:"container hero-inner",children:[f.jsx("h1",{children:"Casino Betting"}),f.jsx("p",{className:"lead",children:"GrandExchange brings you India's most exciting and secure casino betting experience with live games, instant deposits, fast withdrawals, and verified betting IDs."})]})}),f.jsxs("div",{className:"content",children:[f.jsx("h2",{children:"Why Choose GrandExchange for Casino?"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Live Casino Games Including Roulette, Poker, and Slots"}),f.jsx("li",{children:"Instant Account Creation & Dedicated Support"}),f.jsx("li",{children:"Safe, Secured & Licensed Platform"}),f.jsx("li",{children:"Real-Time Betting with Fast Withdrawals"}),f.jsx("li",{children:"24/7 Customer Assistance for Casino Players"}),f.jsx("li",{children:"Exclusive Casino Tournaments & Promotions"})]}),f.jsx("p",{children:"Get your instant casino betting ID by contacting our team on WhatsApp."})]}),f.jsxs("a",{className:"whatsapp-btn",href:"https://wa.me/917587914617",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"",style:{width:"26px",height:"26px",verticalAlign:"middle",marginRight:"10px"}}),"WHATS APP US NOW"]}),f.jsx(Vs,{}),f.jsx(Ms,{}),f.jsx("style",{jsx:!0,children:`
        .hero {
          background-image: url('/images/casino.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.35), rgba(3,6,15,0.6));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          margin: 0 0 18px;
          color: #8ee07f;
          line-height: 1.05;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          font-size: 18px;
          margin: 0 0 26px;
        }
        .content {
          max-width: 900px;
          margin: 32px auto;
          background: rgba(0,0,0,0.3);
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .content ul {
          margin: 12px 0 18px 20px;
        }
        .content li {
          margin-bottom: 8px;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto 38px;
          padding: 14px 28px;
          border-radius: 40px;
          border: 3px solid rgba(0,0,0,0.6);
          width: 360px;
          max-width: 92%;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        @media (max-width: 700px) {
          .hero h1 {
            font-size: 32px;
          }
        }
      `})]})}function OD(){return f.jsxs(f.Fragment,{children:[f.jsx(Ls,{}),f.jsx("section",{className:"hero",children:f.jsxs("div",{className:"container hero-inner",children:[f.jsx("h1",{children:"Card Games Betting"}),f.jsx("p",{className:"lead",children:"GrandExchange brings you India's most trusted card games betting experience with live tables, instant deposits, fast withdrawals, and verified betting IDs."})]})}),f.jsxs("div",{className:"content",children:[f.jsx("h2",{children:"Why Choose GrandExchange for Card Games?"}),f.jsxs("ul",{children:[f.jsx("li",{children:"Live Card Games Including Poker, Teen Patti, and Rummy"}),f.jsx("li",{children:"Instant Account Creation & Dedicated Support"}),f.jsx("li",{children:"Safe, Secured & Licensed Platform"}),f.jsx("li",{children:"Real-Time Betting with Fast Withdrawals"}),f.jsx("li",{children:"24/7 Customer Assistance for Card Players"}),f.jsx("li",{children:"Exclusive Tournaments & Special Promotions"})]}),f.jsx("p",{children:"Get your instant card games betting ID by contacting our team on WhatsApp."})]}),f.jsxs("a",{className:"whatsapp-btn",href:"https://wa.me/917587914617",children:[f.jsx("img",{src:"/images/whatsapp.png",alt:"",style:{width:"26px",height:"26px",verticalAlign:"middle",marginRight:"10px"}}),"WHATS APP US NOW"]}),f.jsx(Vs,{}),f.jsx(Ms,{}),f.jsx("style",{jsx:!0,children:`
        .hero {
          background-image: url('/images/cardgame.jpg');
          background-size: cover;
          background-position: center;
          padding: 80px 20px 60px;
          position: relative;
        }
        .hero::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(3,6,15,0.35), rgba(3,6,15,0.6));
          mix-blend-mode: multiply;
        }
        .container {
          max-width: var(--max-width);
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 20px;
        }
        .hero-inner {
          max-width: 920px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          margin: 0 0 18px;
          color: #8ee07f;
          line-height: 1.05;
          text-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .hero p.lead {
          color: rgba(255,255,255,0.92);
          line-height: 1.7;
          font-size: 18px;
          margin: 0 0 26px;
        }
        .content {
          max-width: 900px;
          margin: 32px auto;
          background: rgba(0,0,0,0.3);
          padding: 28px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .content h2 {
          color: var(--accent);
          margin-bottom: 12px;
          font-family: 'Playfair Display', serif;
        }
        .content ul {
          margin: 12px 0 18px 20px;
        }
        .content li {
          margin-bottom: 8px;
        }
        .whatsapp-btn {
          display: block;
          margin: 32px auto 38px;
          padding: 14px 28px;
          border-radius: 40px;
          border: 3px solid rgba(0,0,0,0.6);
          width: 360px;
          max-width: 92%;
          text-align: center;
          font-weight: 800;
          background: rgba(255,255,255,0.05);
          color: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.45);
        }
        @media (max-width: 700px) {
          .hero h1 {
            font-size: 32px;
          }
        }
      `})]})}/*!
* sweetalert2 v11.26.3
* Released under the MIT License.
*/function ex(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function LD(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function nw(t,e){return t.get(ex(t,e))}function VD(t,e,n){LD(t,e),e.set(t,n)}function MD(t,e,n){return t.set(ex(t,e),n),n}const jD=100,G={},FD=()=>{G.previousActiveElement instanceof HTMLElement?(G.previousActiveElement.focus(),G.previousActiveElement=null):document.body&&document.body.focus()},UD=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;G.restoreFocusTimeout=setTimeout(()=>{FD(),e()},jD),window.scrollTo(n,r)}),tx="swal2-",BD=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],L=BD.reduce((t,e)=>(t[e]=tx+e,t),{}),zD=["success","warning","info","question","error"],Vu=zD.reduce((t,e)=>(t[e]=tx+e,t),{}),nx="SweetAlert2:",rm=t=>t.charAt(0).toUpperCase()+t.slice(1),gt=t=>{console.warn(`${nx} ${typeof t=="object"?t.join(" "):t}`)},bi=t=>{console.error(`${nx} ${t}`)},rw=[],$D=t=>{rw.includes(t)||(rw.push(t),gt(t))},rx=(t,e=null)=>{$D(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Sc=t=>typeof t=="function"?t():t,im=t=>t&&typeof t.toPromise=="function",Ca=t=>im(t)?t.toPromise():Promise.resolve(t),sm=t=>t&&Promise.resolve(t)===t,wt=()=>document.body.querySelector(`.${L.container}`),Pa=t=>{const e=wt();return e?e.querySelector(t):null},Ot=t=>Pa(`.${t}`),le=()=>Ot(L.popup),js=()=>Ot(L.icon),HD=()=>Ot(L["icon-content"]),ix=()=>Ot(L.title),om=()=>Ot(L["html-container"]),sx=()=>Ot(L.image),am=()=>Ot(L["progress-steps"]),Ac=()=>Ot(L["validation-message"]),xn=()=>Pa(`.${L.actions} .${L.confirm}`),Fs=()=>Pa(`.${L.actions} .${L.cancel}`),ki=()=>Pa(`.${L.actions} .${L.deny}`),WD=()=>Ot(L["input-label"]),Us=()=>Pa(`.${L.loader}`),Ra=()=>Ot(L.actions),ox=()=>Ot(L.footer),Cc=()=>Ot(L["timer-progress-bar"]),lm=()=>Ot(L.close),qD=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,um=()=>{const t=le();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((s,o)=>{const l=parseInt(s.getAttribute("tabindex")||"0"),u=parseInt(o.getAttribute("tabindex")||"0");return l>u?1:l<u?-1:0}),r=t.querySelectorAll(qD),i=Array.from(r).filter(s=>s.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(i))].filter(s=>bt(s))},cm=()=>Bn(document.body,L.shown)&&!Bn(document.body,L["toast-shown"])&&!Bn(document.body,L["no-backdrop"]),Pc=()=>{const t=le();return t?Bn(t,L.toast):!1},KD=()=>{const t=le();return t?t.hasAttribute("data-loading"):!1},Lt=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),i=r.querySelector("head");i&&Array.from(i.childNodes).forEach(o=>{t.appendChild(o)});const s=r.querySelector("body");s&&Array.from(s.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},Bn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},GD=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(L).includes(n)&&!Object.values(Vu).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},Rt=(t,e,n)=>{if(GD(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){gt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}ue(t,r)}},Rc=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${L.popup} > .${L[e]}`);case"checkbox":return t.querySelector(`.${L.popup} > .${L.checkbox} input`);case"radio":return t.querySelector(`.${L.popup} > .${L.radio} input:checked`)||t.querySelector(`.${L.popup} > .${L.radio} input:first-child`);case"range":return t.querySelector(`.${L.popup} > .${L.range} input`);default:return t.querySelector(`.${L.popup} > .${L.input}`)}},ax=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},lx=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(r):i.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},ue=(t,e)=>{lx(t,e,!0)},qt=(t,e)=>{lx(t,e,!1)},pr=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const i=n[r];if(i instanceof HTMLElement&&Bn(i,e))return i}},ri=(t,e,n)=>{n===`${parseInt(`${n}`)}`&&(n=parseInt(n)),n||parseInt(`${n}`)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},$e=(t,e="flex")=>{t&&(t.style.display=e)},ct=t=>{t&&(t.style.display="none")},dm=(t,e="block")=>{t&&new MutationObserver(()=>{Na(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},iw=(t,e,n,r)=>{const i=t.querySelector(e);i&&i.style.setProperty(n,r)},Na=(t,e,n="flex")=>{e?$e(t,n):ct(t)},bt=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),QD=()=>!bt(xn())&&!bt(ki())&&!bt(Fs()),uf=t=>t.scrollHeight>t.clientHeight,YD=(t,e)=>{let n=t;for(;n&&n!==e;){if(uf(n))return!0;n=n.parentElement}return!1},ux=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},hm=(t,e=!1)=>{const n=Cc();n&&bt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},XD=()=>{const t=Cc();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},JD=()=>typeof window>"u"||typeof document>"u",ZD=`
 <div aria-labelledby="${L.title}" aria-describedby="${L["html-container"]}" class="${L.popup}" tabindex="-1">
   <button type="button" class="${L.close}"></button>
   <ul class="${L["progress-steps"]}"></ul>
   <div class="${L.icon}"></div>
   <img class="${L.image}" />
   <h2 class="${L.title}" id="${L.title}"></h2>
   <div class="${L["html-container"]}" id="${L["html-container"]}"></div>
   <input class="${L.input}" id="${L.input}" />
   <input type="file" class="${L.file}" />
   <div class="${L.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${L.select}" id="${L.select}"></select>
   <div class="${L.radio}"></div>
   <label class="${L.checkbox}">
     <input type="checkbox" id="${L.checkbox}" />
     <span class="${L.label}"></span>
   </label>
   <textarea class="${L.textarea}" id="${L.textarea}"></textarea>
   <div class="${L["validation-message"]}" id="${L["validation-message"]}"></div>
   <div class="${L.actions}">
     <div class="${L.loader}"></div>
     <button type="button" class="${L.confirm}"></button>
     <button type="button" class="${L.deny}"></button>
     <button type="button" class="${L.cancel}"></button>
   </div>
   <div class="${L.footer}"></div>
   <div class="${L["timer-progress-bar-container"]}">
     <div class="${L["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),eO=()=>{const t=wt();return t?(t.remove(),qt([document.documentElement,document.body],[L["no-backdrop"],L["toast-shown"],L["has-column"]]),!0):!1},qr=()=>{G.currentInstance.resetValidationMessage()},tO=()=>{const t=le(),e=pr(t,L.input),n=pr(t,L.file),r=t.querySelector(`.${L.range} input`),i=t.querySelector(`.${L.range} output`),s=pr(t,L.select),o=t.querySelector(`.${L.checkbox} input`),l=pr(t,L.textarea);e.oninput=qr,n.onchange=qr,s.onchange=qr,o.onchange=qr,l.oninput=qr,r.oninput=()=>{qr(),i.value=r.value},r.onchange=()=>{qr(),i.value=r.value}},nO=t=>typeof t=="string"?document.querySelector(t):t,rO=t=>{const e=le();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},iO=t=>{window.getComputedStyle(t).direction==="rtl"&&ue(wt(),L.rtl)},sO=t=>{const e=eO();if(JD()){bi("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=L.container,e&&ue(n,L["no-transition"]),Lt(n,ZD),n.dataset.swal2Theme=t.theme;const r=nO(t.target);r.appendChild(n),t.topLayer&&(n.setAttribute("popover",""),n.showPopover()),rO(t),iO(r),tO()},fm=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?oO(t,e):t&&Lt(e,t)},oO=(t,e)=>{t.jquery?aO(e,t):Lt(e,t.toString())},aO=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},lO=(t,e)=>{const n=Ra(),r=Us();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ct(n):$e(n),Rt(n,e,"actions"),uO(n,r,e),Lt(r,e.loaderHtml||""),Rt(r,e,"loader"))};function uO(t,e,n){const r=xn(),i=ki(),s=Fs();!r||!i||!s||(Bd(r,"confirm",n),Bd(i,"deny",n),Bd(s,"cancel",n),cO(r,i,s,n),n.reverseButtons&&(n.toast?(t.insertBefore(s,r),t.insertBefore(i,r)):(t.insertBefore(s,e),t.insertBefore(i,e),t.insertBefore(r,e))))}function cO(t,e,n,r){if(!r.buttonsStyling){qt([t,e,n],L.styled);return}ue([t,e,n],L.styled),r.confirmButtonColor&&t.style.setProperty("--swal2-confirm-button-background-color",r.confirmButtonColor),r.denyButtonColor&&e.style.setProperty("--swal2-deny-button-background-color",r.denyButtonColor),r.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",r.cancelButtonColor),Ud(t),Ud(e),Ud(n)}function Ud(t){const e=window.getComputedStyle(t);if(e.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=e.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");t.style.setProperty("--swal2-action-button-focus-box-shadow",e.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function Bd(t,e,n){const r=rm(e);Na(t,n[`show${r}Button`],"inline-block"),Lt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=L[e],Rt(t,n,`${e}Button`)}const dO=(t,e)=>{const n=lm();n&&(Lt(n,e.closeButtonHtml||""),Rt(n,e,"closeButton"),Na(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},hO=(t,e)=>{const n=wt();n&&(fO(n,e.backdrop),pO(n,e.position),mO(n,e.grow),Rt(n,e,"container"))};function fO(t,e){typeof e=="string"?t.style.background=e:e||ue([document.documentElement,document.body],L["no-backdrop"])}function pO(t,e){e&&(e in L?ue(t,L[e]):(gt('The "position" parameter is not valid, defaulting to "center"'),ue(t,L.center)))}function mO(t,e){e&&ue(t,L[`grow-${e}`])}var me={innerParams:new WeakMap,domCache:new WeakMap};const gO=["input","file","range","select","radio","checkbox","textarea"],yO=(t,e)=>{const n=le();if(!n)return;const r=me.innerParams.get(t),i=!r||e.input!==r.input;gO.forEach(s=>{const o=pr(n,L[s]);o&&(_O(s,e.inputAttributes),o.className=L[s],i&&ct(o))}),e.input&&(i&&vO(e),EO(e))},vO=t=>{if(!t.input)return;if(!Ce[t.input]){bi(`Unexpected type of input! Expected ${Object.keys(Ce).join(" | ")}, got "${t.input}"`);return}const e=cx(t.input);if(!e)return;const n=Ce[t.input](e,t);$e(e),t.inputAutoFocus&&setTimeout(()=>{ax(n)})},wO=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},_O=(t,e)=>{const n=le();if(!n)return;const r=Rc(n,t);if(r){wO(r);for(const i in e)r.setAttribute(i,e[i])}},EO=t=>{if(!t.input)return;const e=cx(t.input);e&&Rt(e,t,"input")},pm=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},Da=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),i=L["input-label"];r.setAttribute("for",t.id),r.className=i,typeof n.customClass=="object"&&ue(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},cx=t=>{const e=le();if(e)return pr(e,L[t]||L.input)},Mu=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:sm(e)||gt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Ce={};Ce.text=Ce.email=Ce.password=Ce.number=Ce.tel=Ce.url=Ce.search=Ce.date=Ce["datetime-local"]=Ce.time=Ce.week=Ce.month=(t,e)=>(Mu(t,e.inputValue),Da(t,t,e),pm(t,e),t.type=e.input,t);Ce.file=(t,e)=>(Da(t,t,e),pm(t,e),t);Ce.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return Mu(n,e.inputValue),n.type=e.input,Mu(r,e.inputValue),Da(n,t,e),t};Ce.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");Lt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Da(t,t,e),t};Ce.radio=t=>(t.textContent="",t);Ce.checkbox=(t,e)=>{const n=Rc(le(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return Lt(r,e.inputPlaceholder||e.inputLabel),n};Ce.textarea=(t,e)=>{Mu(t,e.inputValue),pm(t,e),Da(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(le()).width),i=()=>{if(!document.body.contains(t))return;const s=t.offsetWidth+n(t);s>r?le().style.width=`${s}px`:ri(le(),"width",e.width)};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const xO=(t,e)=>{const n=om();n&&(dm(n),Rt(n,e,"htmlContainer"),e.html?(fm(e.html,n),$e(n,"block")):e.text?(n.textContent=e.text,$e(n,"block")):ct(n),yO(t,e))},TO=(t,e)=>{const n=ox();n&&(dm(n),Na(n,!!e.footer,"block"),e.footer&&fm(e.footer,n),Rt(n,e,"footer"))},IO=(t,e)=>{const n=me.innerParams.get(t),r=js();if(!r)return;if(n&&e.icon===n.icon){ow(r,e),sw(r,e);return}if(!e.icon&&!e.iconHtml){ct(r);return}if(e.icon&&Object.keys(Vu).indexOf(e.icon)===-1){bi(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ct(r);return}$e(r),ow(r,e),sw(r,e),ue(r,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",dx)},sw=(t,e)=>{for(const[n,r]of Object.entries(Vu))e.icon!==n&&qt(t,r);ue(t,e.icon&&Vu[e.icon]),SO(t,e),dx(),Rt(t,e,"icon")},dx=()=>{const t=le();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},bO=t=>`
  ${t.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${t.animation?'<div class="swal2-success-fix"></div>':""}
  ${t.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,kO=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,ow=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=aw(e.iconHtml):e.icon==="success"?(r=bO(e),n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=kO:e.icon&&(r=aw({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&Lt(t,r)},SO=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])iw(t,n,"background-color",e.iconColor);iw(t,".swal2-success-ring","border-color",e.iconColor)}},aw=t=>`<div class="${L["icon-content"]}">${t}</div>`,AO=(t,e)=>{const n=sx();if(n){if(!e.imageUrl){ct(n);return}$e(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),ri(n,"width",e.imageWidth),ri(n,"height",e.imageHeight),n.className=L.image,Rt(n,e,"image")}};let mm=!1,hx=0,fx=0,px=0,mx=0;const CO=t=>{t.addEventListener("mousedown",ju),document.body.addEventListener("mousemove",Fu),t.addEventListener("mouseup",Uu),t.addEventListener("touchstart",ju),document.body.addEventListener("touchmove",Fu),t.addEventListener("touchend",Uu)},PO=t=>{t.removeEventListener("mousedown",ju),document.body.removeEventListener("mousemove",Fu),t.removeEventListener("mouseup",Uu),t.removeEventListener("touchstart",ju),document.body.removeEventListener("touchmove",Fu),t.removeEventListener("touchend",Uu)},ju=t=>{const e=le();if(t.target===e||js().contains(t.target)){mm=!0;const n=gx(t);hx=n.clientX,fx=n.clientY,px=parseInt(e.style.insetInlineStart)||0,mx=parseInt(e.style.insetBlockStart)||0,ue(e,"swal2-dragging")}},Fu=t=>{const e=le();if(mm){let{clientX:n,clientY:r}=gx(t);e.style.insetInlineStart=`${px+(n-hx)}px`,e.style.insetBlockStart=`${mx+(r-fx)}px`}},Uu=()=>{const t=le();mm=!1,qt(t,"swal2-dragging")},gx=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},RO=(t,e)=>{const n=wt(),r=le();if(!(!n||!r)){if(e.toast){ri(n,"width",e.width),r.style.width="100%";const i=Us();i&&r.insertBefore(i,js())}else ri(r,"width",e.width);ri(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),ct(Ac()),NO(r,e),e.draggable&&!e.toast?(ue(r,L.draggable),CO(r)):(qt(r,L.draggable),PO(r))}},NO=(t,e)=>{const n=e.showClass||{};t.className=`${L.popup} ${bt(t)?n.popup:""}`,e.toast?(ue([document.documentElement,document.body],L["toast-shown"]),ue(t,L.toast)):ue(t,L.modal),Rt(t,e,"popup"),typeof e.customClass=="string"&&ue(t,e.customClass),e.icon&&ue(t,L[`icon-${e.icon}`])},DO=(t,e)=>{const n=am();if(!n)return;const{progressSteps:r,currentProgressStep:i}=e;if(!r||r.length===0||i===void 0){ct(n);return}$e(n),n.textContent="",i>=r.length&&gt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((s,o)=>{const l=OO(s);if(n.appendChild(l),o===i&&ue(l,L["active-progress-step"]),o!==r.length-1){const u=LO(e);n.appendChild(u)}})},OO=t=>{const e=document.createElement("li");return ue(e,L["progress-step"]),Lt(e,t),e},LO=t=>{const e=document.createElement("li");return ue(e,L["progress-step-line"]),t.progressStepsDistance&&ri(e,"width",t.progressStepsDistance),e},VO=(t,e)=>{const n=ix();n&&(dm(n),Na(n,!!(e.title||e.titleText),"block"),e.title&&fm(e.title,n),e.titleText&&(n.innerText=e.titleText),Rt(n,e,"title"))},yx=(t,e)=>{RO(t,e),hO(t,e),DO(t,e),IO(t,e),AO(t,e),VO(t,e),dO(t,e),xO(t,e),lO(t,e),TO(t,e);const n=le();typeof e.didRender=="function"&&n&&e.didRender(n),G.eventEmitter.emit("didRender",n)},MO=()=>bt(le()),vx=()=>{var t;return(t=xn())===null||t===void 0?void 0:t.click()},jO=()=>{var t;return(t=ki())===null||t===void 0?void 0:t.click()},FO=()=>{var t;return(t=Fs())===null||t===void 0?void 0:t.click()},Bs=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wx=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},UO=(t,e,n)=>{wx(t),e.toast||(t.keydownHandler=r=>zO(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:le(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},cf=(t,e)=>{var n;const r=um();if(r.length){t=t+e,t===-2&&(t=r.length-1),t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=le())===null||n===void 0||n.focus()},_x=["ArrowRight","ArrowDown"],BO=["ArrowLeft","ArrowUp"],zO=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?$O(e,t):e.key==="Tab"?HO(e):[..._x,...BO].includes(e.key)?WO(e.key):e.key==="Escape"&&qO(e,t,n)))},$O=(t,e)=>{if(!Sc(e.allowEnterKey))return;const n=Rc(le(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;vx(),t.preventDefault()}},HO=t=>{const e=t.target,n=um();let r=-1;for(let i=0;i<n.length;i++)if(e===n[i]){r=i;break}t.shiftKey?cf(r,-1):cf(r,1),t.stopPropagation(),t.preventDefault()},WO=t=>{const e=Ra(),n=xn(),r=ki(),i=Fs();if(!e||!n||!r||!i)return;const s=[n,r,i];if(document.activeElement instanceof HTMLElement&&!s.includes(document.activeElement))return;const o=_x.includes(t)?"nextElementSibling":"previousElementSibling";let l=document.activeElement;if(l){for(let u=0;u<e.children.length;u++){if(l=l[o],!l)return;if(l instanceof HTMLButtonElement&&bt(l))break}l instanceof HTMLButtonElement&&l.focus()}},qO=(t,e,n)=>{t.preventDefault(),Sc(e.allowEscapeKey)&&n(Bs.esc)};var xs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const KO=()=>{const t=wt();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Ex=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},xx=typeof window<"u"&&!!window.GestureEvent,GO=()=>{if(xx&&!Bn(document.body,L.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ue(document.body,L.iosfix),QO()}},QO=()=>{const t=wt();if(!t)return;let e;t.ontouchstart=n=>{e=YO(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},YO=t=>{const e=t.target,n=wt(),r=om();return!n||!r||XO(t)||JO(t)?!1:e===n||!uf(n)&&e instanceof HTMLElement&&!YD(e,r)&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(uf(r)&&r.contains(e))},XO=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",JO=t=>t.touches&&t.touches.length>1,ZO=()=>{if(Bn(document.body,L.iosfix)){const t=parseInt(document.body.style.top,10);qt(document.body,L.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},eL=()=>{const t=document.createElement("div");t.className=L["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let is=null;const tL=t=>{is===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(is=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${is+eL()}px`)},nL=()=>{is!==null&&(document.body.style.paddingRight=`${is}px`,is=null)};function Tx(t,e,n,r){Pc()?lw(t,r):(UD(n).then(()=>lw(t,r)),wx(G)),xx?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),cm()&&(nL(),ZO(),Ex()),rL()}function rL(){qt([document.documentElement,document.body],[L.shown,L["height-auto"],L["no-backdrop"],L["toast-shown"]])}function mr(t){t=sL(t);const e=xs.swalPromiseResolve.get(this),n=iL(this);this.isAwaitingPromise?t.isDismissed||(Oa(this),e(t)):n&&e(t)}const iL=t=>{const e=le();if(!e)return!1;const n=me.innerParams.get(t);if(!n||Bn(e,n.hideClass.popup))return!1;qt(e,n.showClass.popup),ue(e,n.hideClass.popup);const r=wt();return qt(r,n.showClass.backdrop),ue(r,n.hideClass.backdrop),oL(t,e,n),!0};function Ix(t){const e=xs.swalPromiseReject.get(this);Oa(this),e&&e(t)}const Oa=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,me.innerParams.get(t)||t._destroy())},sL=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),oL=(t,e,n)=>{var r;const i=wt(),s=ux(e);typeof n.willClose=="function"&&n.willClose(e),(r=G.eventEmitter)===null||r===void 0||r.emit("willClose",e),s?aL(t,e,i,n.returnFocus,n.didClose):Tx(t,i,n.returnFocus,n.didClose)},aL=(t,e,n,r,i)=>{G.swalCloseEventFinishedCallback=Tx.bind(null,t,n,r,i);const s=function(o){if(o.target===e){var l;(l=G.swalCloseEventFinishedCallback)===null||l===void 0||l.call(G),delete G.swalCloseEventFinishedCallback,e.removeEventListener("animationend",s),e.removeEventListener("transitionend",s)}};e.addEventListener("animationend",s),e.addEventListener("transitionend",s)},lw=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=G.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},Ts=t=>{let e=le();if(e||new Ke,e=le(),!e)return;const n=Us();Pc()?ct(js()):lL(e,t),$e(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},lL=(t,e)=>{const n=Ra(),r=Us();!n||!r||(!e&&bt(xn())&&(e=xn()),$e(n),e&&(ct(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),ue([t,n],L.loading))},uL=(t,e)=>{e.input==="select"||e.input==="radio"?pL(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(im(e.inputValue)||sm(e.inputValue))&&(Ts(xn()),mL(t,e))},cL=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return dL(n);case"radio":return hL(n);case"file":return fL(n);default:return e.inputAutoTrim?n.value.trim():n.value}},dL=t=>t.checked?1:0,hL=t=>t.checked?t.value:null,fL=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,pL=(t,e)=>{const n=le();if(!n)return;const r=i=>{e.input==="select"?gL(n,Bu(i),e):e.input==="radio"&&yL(n,Bu(i),e)};im(e.inputOptions)||sm(e.inputOptions)?(Ts(xn()),Ca(e.inputOptions).then(i=>{t.hideLoading(),r(i)})):typeof e.inputOptions=="object"?r(e.inputOptions):bi(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},mL=(t,e)=>{const n=t.getInput();n&&(ct(n),Ca(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,$e(n),n.focus(),t.hideLoading()}).catch(r=>{bi(`Error in inputValue promise: ${r}`),n.value="",$e(n),n.focus(),t.hideLoading()}))};function gL(t,e,n){const r=pr(t,L.select);if(!r)return;const i=(s,o,l)=>{const u=document.createElement("option");u.value=l,Lt(u,o),u.selected=bx(l,n.inputValue),s.appendChild(u)};e.forEach(s=>{const o=s[0],l=s[1];if(Array.isArray(l)){const u=document.createElement("optgroup");u.label=o,u.disabled=!1,r.appendChild(u),l.forEach(d=>i(u,d[1],d[0]))}else i(r,l,o)}),r.focus()}function yL(t,e,n){const r=pr(t,L.radio);if(!r)return;e.forEach(s=>{const o=s[0],l=s[1],u=document.createElement("input"),d=document.createElement("label");u.type="radio",u.name=L.radio,u.value=o,bx(o,n.inputValue)&&(u.checked=!0);const p=document.createElement("span");Lt(p,l),p.className=L.label,d.appendChild(u),d.appendChild(p),r.appendChild(d)});const i=r.querySelectorAll("input");i.length&&i[0].focus()}const Bu=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let i=n;typeof i=="object"&&(i=Bu(i)),e.push([r,i])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=Bu(r)),e.push([n,r])}),e},bx=(t,e)=>!!e&&e.toString()===t.toString(),vL=t=>{const e=me.innerParams.get(t);t.disableButtons(),e.input?kx(t,"confirm"):ym(t,!0)},wL=t=>{const e=me.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?kx(t,"deny"):gm(t,!1)},_L=(t,e)=>{t.disableButtons(),e(Bs.cancel)},kx=(t,e)=>{const n=me.innerParams.get(t);if(!n.input){bi(`The "input" parameter is needed to be set when using returnInputValueOn${rm(e)}`);return}const r=t.getInput(),i=cL(t,n);n.inputValidator?EL(t,i,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?gm(t,i):ym(t,i)},EL=(t,e,n)=>{const r=me.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Ca(r.inputValidator(e,r.validationMessage))).then(s=>{t.enableButtons(),t.enableInput(),s?t.showValidationMessage(s):n==="deny"?gm(t,e):ym(t,e)})},gm=(t,e)=>{const n=me.innerParams.get(t||void 0);n.showLoaderOnDeny&&Ts(ki()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Ca(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),Oa(t)):t.close({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Sx(t||void 0,i))):t.close({isDenied:!0,value:e})},uw=(t,e)=>{t.close({isConfirmed:!0,value:e})},Sx=(t,e)=>{t.rejectPromise(e)},ym=(t,e)=>{const n=me.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Ts(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Ca(n.preConfirm(e,n.validationMessage))).then(i=>{bt(Ac())||i===!1?(t.hideLoading(),Oa(t)):uw(t,typeof i>"u"?e:i)}).catch(i=>Sx(t||void 0,i))):uw(t,e)};function zu(){const t=me.innerParams.get(this);if(!t)return;const e=me.domCache.get(this);ct(e.loader),Pc()?t.icon&&$e(js()):xL(e),qt([e.popup,e.actions],L.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const xL=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?$e(e[0],"inline-block"):QD()&&ct(t.actions)};function Ax(){const t=me.innerParams.get(this),e=me.domCache.get(this);return e?Rc(e.popup,t.input):null}function Cx(t,e,n){const r=me.domCache.get(t);e.forEach(i=>{r[i].disabled=n})}function Px(t,e){const n=le();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${L.radio}"]`);for(let i=0;i<r.length;i++)r[i].disabled=e}else t.disabled=e}function Rx(){Cx(this,["confirmButton","denyButton","cancelButton"],!1)}function Nx(){Cx(this,["confirmButton","denyButton","cancelButton"],!0)}function Dx(){Px(this.getInput(),!1)}function Ox(){Px(this.getInput(),!0)}function Lx(t){const e=me.domCache.get(this),n=me.innerParams.get(this);Lt(e.validationMessage,t),e.validationMessage.className=L["validation-message"],n.customClass&&n.customClass.validationMessage&&ue(e.validationMessage,n.customClass.validationMessage),$e(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",L["validation-message"]),ax(r),ue(r,L.inputerror))}function Vx(){const t=me.domCache.get(this);t.validationMessage&&ct(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),qt(e,L.inputerror))}const ss={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},TL=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],IL={allowEnterKey:void 0},bL=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Mx=t=>Object.prototype.hasOwnProperty.call(ss,t),jx=t=>TL.indexOf(t)!==-1,Fx=t=>IL[t],kL=t=>{Mx(t)||gt(`Unknown parameter "${t}"`)},SL=t=>{bL.includes(t)&&gt(`The parameter "${t}" is incompatible with toasts`)},AL=t=>{const e=Fx(t);e&&rx(t,e)},Ux=t=>{t.backdrop===!1&&t.allowOutsideClick&&gt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(t.theme)&&gt(`Invalid theme "${t.theme}"`);for(const e in t)kL(e),t.toast&&SL(e),AL(e)};function Bx(t){const e=wt(),n=le(),r=me.innerParams.get(this);if(!n||Bn(n,r.hideClass.popup)){gt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=CL(t),s=Object.assign({},r,i);Ux(s),e.dataset.swal2Theme=s.theme,yx(this,s),me.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const CL=t=>{const e={};return Object.keys(t).forEach(n=>{jx(n)?e[n]=t[n]:gt(`Invalid parameter to update: ${n}`)}),e};function zx(){const t=me.domCache.get(this),e=me.innerParams.get(this);if(!e){$x(this);return}t.popup&&G.swalCloseEventFinishedCallback&&(G.swalCloseEventFinishedCallback(),delete G.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),G.eventEmitter.emit("didDestroy"),PL(this)}const PL=t=>{$x(t),delete t.params,delete G.keydownHandler,delete G.keydownTarget,delete G.currentInstance},$x=t=>{t.isAwaitingPromise?(zd(me,t),t.isAwaitingPromise=!0):(zd(xs,t),zd(me,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},zd=(t,e)=>{for(const n in t)t[n].delete(e)};var RL=Object.freeze({__proto__:null,_destroy:zx,close:mr,closeModal:mr,closePopup:mr,closeToast:mr,disableButtons:Nx,disableInput:Ox,disableLoading:zu,enableButtons:Rx,enableInput:Dx,getInput:Ax,handleAwaitingPromise:Oa,hideLoading:zu,rejectPromise:Ix,resetValidationMessage:Vx,showValidationMessage:Lx,update:Bx});const NL=(t,e,n)=>{t.toast?DL(t,e,n):(LL(e),VL(e),ML(t,e,n))},DL=(t,e,n)=>{e.popup.onclick=()=>{t&&(OL(t)||t.timer||t.input)||n(Bs.close)}},OL=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let $u=!1;const LL=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&($u=!0)}}},VL=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&($u=!0)}}},ML=(t,e,n)=>{e.container.onclick=r=>{if($u){$u=!1;return}r.target===e.container&&Sc(t.allowOutsideClick)&&n(Bs.backdrop)}},jL=t=>typeof t=="object"&&t.jquery,cw=t=>t instanceof Element||jL(t),FL=t=>{const e={};return typeof t[0]=="object"&&!cw(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const i=t[r];typeof i=="string"||cw(i)?e[n]=i:i!==void 0&&bi(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function UL(...t){return new this(...t)}function BL(t){class e extends this{_main(r,i){return super._main(r,Object.assign({},t,i))}}return e}const zL=()=>G.timeout&&G.timeout.getTimerLeft(),Hx=()=>{if(G.timeout)return XD(),G.timeout.stop()},Wx=()=>{if(G.timeout){const t=G.timeout.start();return hm(t),t}},$L=()=>{const t=G.timeout;return t&&(t.running?Hx():Wx())},HL=t=>{if(G.timeout){const e=G.timeout.increase(t);return hm(e,!0),e}},WL=()=>!!(G.timeout&&G.timeout.isRunning());let dw=!1;const df={};function qL(t="data-swal-template"){df[t]=this,dw||(document.body.addEventListener("click",KL),dw=!0)}const KL=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in df){const r=e.getAttribute(n);if(r){df[n].fire({template:r});return}}};class GL{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){const r=(...i)=>{this.removeListener(e,r),n.apply(this,i)};this.on(e,r)}emit(e,...n){this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,n)}catch(i){console.error(i)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),i=r.indexOf(n);i>-1&&r.splice(i,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}G.eventEmitter=new GL;const QL=(t,e)=>{G.eventEmitter.on(t,e)},YL=(t,e)=>{G.eventEmitter.once(t,e)},XL=(t,e)=>{if(!t){G.eventEmitter.reset();return}e?G.eventEmitter.removeListener(t,e):G.eventEmitter.removeAllListeners(t)};var JL=Object.freeze({__proto__:null,argsToParams:FL,bindClickHandler:qL,clickCancel:FO,clickConfirm:vx,clickDeny:jO,enableLoading:Ts,fire:UL,getActions:Ra,getCancelButton:Fs,getCloseButton:lm,getConfirmButton:xn,getContainer:wt,getDenyButton:ki,getFocusableElements:um,getFooter:ox,getHtmlContainer:om,getIcon:js,getIconContent:HD,getImage:sx,getInputLabel:WD,getLoader:Us,getPopup:le,getProgressSteps:am,getTimerLeft:zL,getTimerProgressBar:Cc,getTitle:ix,getValidationMessage:Ac,increaseTimer:HL,isDeprecatedParameter:Fx,isLoading:KD,isTimerRunning:WL,isUpdatableParameter:jx,isValidParameter:Mx,isVisible:MO,mixin:BL,off:XL,on:QL,once:YL,resumeTimer:Wx,showLoading:Ts,stopTimer:Hx,toggleTimer:$L});class ZL{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const qx=["swal-title","swal-html","swal-footer"],eV=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return lV(n),Object.assign(tV(n),nV(n),rV(n),iV(n),sV(n),oV(n),aV(n,qx))},tV=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{mi(r,["name","value"]);const i=r.getAttribute("name"),s=r.getAttribute("value");!i||!s||(typeof ss[i]=="boolean"?e[i]=s!=="false":typeof ss[i]=="object"?e[i]=JSON.parse(s):e[i]=s)}),e},nV=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const i=r.getAttribute("name"),s=r.getAttribute("value");!i||!s||(e[i]=new Function(`return ${s}`)())}),e},rV=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{mi(r,["type","color","aria-label"]);const i=r.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(e[`${i}ButtonText`]=r.innerHTML,e[`show${rm(i)}Button`]=!0,r.hasAttribute("color")&&(e[`${i}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},iV=t=>{const e={},n=t.querySelector("swal-image");return n&&(mi(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},sV=t=>{const e={},n=t.querySelector("swal-icon");return n&&(mi(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},oV=t=>{const e={},n=t.querySelector("swal-input");n&&(mi(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(i=>{mi(i,["value"]);const s=i.getAttribute("value");if(!s)return;const o=i.innerHTML;e.inputOptions[s]=o})),e},aV=(t,e)=>{const n={};for(const r in e){const i=e[r],s=t.querySelector(i);s&&(mi(s,[]),n[i.replace(/^swal-/,"")]=s.innerHTML.trim())}return n},lV=t=>{const e=qx.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||gt(`Unrecognized element <${r}>`)})},mi=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&gt([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Kx=10,uV=t=>{const e=wt(),n=le();typeof t.willOpen=="function"&&t.willOpen(n),G.eventEmitter.emit("willOpen",n);const i=window.getComputedStyle(document.body).overflowY;hV(e,n,t),setTimeout(()=>{cV(e,n)},Kx),cm()&&(dV(e,t.scrollbarPadding,i),KO()),!Pc()&&!G.previousActiveElement&&(G.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),G.eventEmitter.emit("didOpen",n)},Hu=t=>{const e=le();if(t.target!==e)return;const n=wt();e.removeEventListener("animationend",Hu),e.removeEventListener("transitionend",Hu),n.style.overflowY="auto",qt(n,L["no-transition"])},cV=(t,e)=>{ux(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",Hu),e.addEventListener("transitionend",Hu)):t.style.overflowY="auto"},dV=(t,e,n)=>{GO(),e&&n!=="hidden"&&tL(n),setTimeout(()=>{t.scrollTop=0})},hV=(t,e,n)=>{ue(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),$e(e,"grid"),setTimeout(()=>{ue(e,n.showClass.popup),e.style.removeProperty("opacity")},Kx)):$e(e,"grid"),ue([document.documentElement,document.body],L.shown),n.heightAuto&&n.backdrop&&!n.toast&&ue([document.documentElement,document.body],L["height-auto"])};var hw={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function fV(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=hw.email),t.input==="url"&&(t.inputValidator=hw.url))}function pV(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(gt('Target parameter is not valid, defaulting to "body"'),t.target="body")}function mV(t){fV(t),t.showLoaderOnConfirm&&!t.preConfirm&&gt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),pV(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),sO(t)}let un;var Tl=new WeakMap;class Ne{constructor(...e){if(VD(this,Tl,void 0),typeof window>"u")return;un=this;const n=Object.freeze(this.constructor.argsToParams(e));this.params=n,this.isAwaitingPromise=!1,MD(Tl,this,this._main(un.params))}_main(e,n={}){if(Ux(Object.assign({},n,e)),G.currentInstance){const s=xs.swalPromiseResolve.get(G.currentInstance),{isAwaitingPromise:o}=G.currentInstance;G.currentInstance._destroy(),o||s({isDismissed:!0}),cm()&&Ex()}G.currentInstance=un;const r=yV(e,n);mV(r),Object.freeze(r),G.timeout&&(G.timeout.stop(),delete G.timeout),clearTimeout(G.restoreFocusTimeout);const i=vV(un);return yx(un,r),me.innerParams.set(un,r),gV(un,i,r)}then(e){return nw(Tl,this).then(e)}finally(e){return nw(Tl,this).finally(e)}}const gV=(t,e,n)=>new Promise((r,i)=>{const s=o=>{t.close({isDismissed:!0,dismiss:o,isConfirmed:!1,isDenied:!1})};xs.swalPromiseResolve.set(t,r),xs.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>{vL(t)},e.denyButton.onclick=()=>{wL(t)},e.cancelButton.onclick=()=>{_L(t,s)},e.closeButton.onclick=()=>{s(Bs.close)},NL(n,e,s),UO(G,n,s),uL(t,n),uV(n),wV(G,n,s),_V(e,n),setTimeout(()=>{e.container.scrollTop=0})}),yV=(t,e)=>{const n=eV(t),r=Object.assign({},ss,e,n,t);return r.showClass=Object.assign({},ss.showClass,r.showClass),r.hideClass=Object.assign({},ss.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},vV=t=>{const e={popup:le(),container:wt(),actions:Ra(),confirmButton:xn(),denyButton:ki(),cancelButton:Fs(),loader:Us(),closeButton:lm(),validationMessage:Ac(),progressSteps:am()};return me.domCache.set(t,e),e},wV=(t,e,n)=>{const r=Cc();ct(r),e.timer&&(t.timeout=new ZL(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&($e(r),Rt(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&hm(e.timer)})))},_V=(t,e)=>{if(!e.toast){if(!Sc(e.allowEnterKey)){rx("allowEnterKey"),TV();return}EV(t)||xV(t,e)||cf(-1,1)}},EV=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&bt(n))return n.focus(),!0;return!1},xV=(t,e)=>e.focusDeny&&bt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&bt(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&bt(t.confirmButton)?(t.confirmButton.focus(),!0):!1,TV=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Ne.prototype.disableButtons=Nx;Ne.prototype.enableButtons=Rx;Ne.prototype.getInput=Ax;Ne.prototype.disableInput=Ox;Ne.prototype.enableInput=Dx;Ne.prototype.hideLoading=zu;Ne.prototype.disableLoading=zu;Ne.prototype.showValidationMessage=Lx;Ne.prototype.resetValidationMessage=Vx;Ne.prototype.close=mr;Ne.prototype.closePopup=mr;Ne.prototype.closeModal=mr;Ne.prototype.closeToast=mr;Ne.prototype.rejectPromise=Ix;Ne.prototype.update=Bx;Ne.prototype._destroy=zx;Object.assign(Ne,JL);Object.keys(RL).forEach(t=>{Ne[t]=function(...e){return un&&un[t]?un[t](...e):null}});Ne.DismissReason=Bs;Ne.version="11.26.3";const Ke=Ne;Ke.default=Ke;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');function IV(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(!1),o=ya(),l=async u=>{u.preventDefault(),s(!0);try{await hN(pi,t,n),Ke.fire({icon:"success",title:"Login Successful!",confirmButtonColor:"#ffb400"}),o("/admindash")}catch(d){console.error("Login error:",d),Ke.fire({icon:"error",title:"Login Failed",text:"Invalid email or password",confirmButtonColor:"#ffb400"})}finally{s(!1)}};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"login-container",children:[f.jsxs("div",{className:"login-card",children:[f.jsx("h1",{children:"Admin Login"}),f.jsxs("form",{onSubmit:l,children:[f.jsx("input",{type:"email",name:"email",placeholder:"Email",value:t,onChange:u=>e(u.target.value),required:!0,autoFocus:!0,autoComplete:"off"}),f.jsx("input",{type:"password",name:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value),required:!0,autoComplete:"off"}),f.jsx("button",{type:"submit",disabled:i,children:i?"Logging in...":"Login"})]}),f.jsxs("p",{className:"info",children:["Need help? ",f.jsx("a",{href:"https://wa.me/917587914617",target:"_blank",rel:"noopener noreferrer",children:"Contact Support"})]})]}),f.jsx("a",{className:"whats-float",href:"https://wa.me/917587914617",target:"_blank",rel:"noopener noreferrer",children:f.jsx("img",{src:"/images/whatsapp.png",alt:"WhatsApp"})})]}),f.jsx("style",{jsx:!0,children:`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(180deg, #071022, var(--bg));
        }
        .login-card {
          background: var(--card);
          padding: 36px 28px;
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          text-align: center;
        }
        .login-card h1 {
          font-family: 'Playfair Display', serif;
          color: var(--accent);
          margin-bottom: 24px;
          font-size: 28px;
        }
        .login-card form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .login-card input[type='email'],
        .login-card input[type='password'] {
          padding: 12px 14px;
          border-radius: 8px;
          border: none;
          font-size: 16px;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        .login-card input::placeholder {
          color: var(--muted);
        }
        .login-card button {
          background: var(--accent);
          color: #000;
          padding: 12px 18px;
          border: none;
          border-radius: 28px;
          font-weight: 700;
          cursor: pointer;
          font-size: 16px;
          transition: 0.2s;
        }
        .login-card button:hover {
          background: var(--green);
        }
        .login-card button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .info {
          font-size: 14px;
          color: var(--muted);
          margin-top: 16px;
        }
        .info a {
          color: var(--accent);
          text-decoration: underline;
        }
        .whats-float {
          position: fixed;
          right: 18px;
          bottom: 18px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #14a76c, #0e8b59);
          box-shadow: 0 8px 26px rgba(0, 0, 0, 0.4);
        }
        .whats-float img {
          width: 38px;
          height: 38px;
        }
      `})]})}function bV(){const[t,e]=U.useState(0),[n,r]=U.useState(0),i=ya();U.useEffect(()=>{const l=pi.onAuthStateChanged(u=>{u?s():i("/login")});return()=>l()},[i]);const s=async()=>{try{const l=await _s(Vr(wn,"instafeeds"));e(l.size);const u=await _s(Vr(wn,"paymentproofs"));r(u.size)}catch(l){console.error("Error fetching counts:",l)}},o=async()=>{await Zp(pi),i("/login")};return f.jsxs(f.Fragment,{children:[f.jsx("nav",{className:"navbar",children:f.jsx("div",{className:"nav-container",children:f.jsxs("div",{className:"nav-brand",children:[f.jsx("button",{className:"sidebar-toggle",id:"toggleSidebarMobile",children:f.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),f.jsxs("a",{href:"/admindash",className:"logo-text",children:[f.jsx("img",{src:"https://themewagon.github.io/windster/images/logo.svg",alt:"Logo"}),f.jsx("span",{children:"Admin"})]})]})})}),f.jsxs("div",{className:"admin-layout",children:[f.jsx("aside",{className:"sidebar",children:f.jsx("div",{className:"sidebar-content",children:f.jsxs("ul",{className:"nav-list",children:[f.jsx("li",{children:f.jsxs("a",{href:"/admindash",className:"nav-link active",children:[f.jsxs("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 20 20",children:[f.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}),f.jsx("path",{d:"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"})]}),f.jsx("span",{children:"Dashboard"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"/addinstafeeds",className:"nav-link",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"})}),f.jsx("span",{children:"Instagram Feeds"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"/addpaymentproof",className:"nav-link",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7h5l-5-5v5zm-8 4h10v2H7v-2zm0 4h10v2H7v-2z"})}),f.jsx("span",{children:"Add Payment Proof"})]})}),f.jsx("li",{children:f.jsxs("a",{onClick:o,className:"nav-link",style:{cursor:"pointer"},children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h6a1 1 0 110 2H5v10h5a1 1 0 110 2H4a1 1 0 01-1-1V4zm10.293 2.293a1 1 0 011.414 1.414L13.414 10l1.293 1.293a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2z",clipRule:"evenodd"})}),f.jsx("span",{children:"Logout"})]})})]})})}),f.jsxs("main",{className:"main-content",children:[f.jsx("div",{className:"dashboard-header",children:f.jsx("h1",{children:"Dashboard"})}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon blue",children:f.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"})})}),f.jsxs("div",{className:"stat-content",children:[f.jsx("p",{children:"Total Instagram Feeds"}),f.jsx("h2",{children:t})]})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon green",children:f.jsx("svg",{fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M4 4h16v2H4zm0 7h16v2H4zm0 7h16v2H4z"})})}),f.jsxs("div",{className:"stat-content",children:[f.jsx("p",{children:"Total Payment Proofs"}),f.jsx("h2",{children:n})]})]})]})]})]}),f.jsx("style",{jsx:!0,children:`
        .navbar {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 30;
          padding: 12px 20px;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sidebar-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .logo-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          color: #111;
        }
        .logo-text img {
          height: 24px;
        }
        .admin-layout {
          display: flex;
          padding-top: 64px;
          min-height: 100vh;
          background: #f9fafb;
        }
        .sidebar {
          width: 256px;
          background: #fff;
          border-right: 1px solid #e5e7eb;
          position: fixed;
          left: 0;
          top: 64px;
          bottom: 0;
          overflow-y: auto;
        }
        .sidebar-content {
          padding: 20px 12px;
        }
        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          color: #374151;
          border-radius: 8px;
          transition: 0.2s;
          text-decoration: none;
          margin-bottom: 4px;
        }
        .nav-link:hover, .nav-link.active {
          background: #f3f4f6;
          color: #111827;
        }
        .icon {
          width: 24px;
          height: 24px;
          color: #6b7280;
        }
        .nav-link:hover .icon, .nav-link.active .icon {
          color: #111827;
        }
        .main-content {
          margin-left: 256px;
          flex: 1;
          padding: 24px;
        }
        .dashboard-header h1 {
          font-size: 28px;
          color: #111827;
          margin-bottom: 24px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .stat-card {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .stat-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-icon.blue {
          background: #dbeafe;
          color: #2563eb;
        }
        .stat-icon.green {
          background: #d1fae5;
          color: #059669;
        }
        .stat-icon svg {
          width: 32px;
          height: 32px;
        }
        .stat-content p {
          color: #6b7280;
          font-size: 14px;
          margin: 0 0 8px;
        }
        .stat-content h2 {
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
          .main-content {
            margin-left: 0;
          }
          .sidebar-toggle {
            display: block;
          }
        }
      `})]})}const kV="dblugy7jr",SV="grandexchange",Gx=async t=>{try{const e=new FormData;return e.append("file",t),e.append("upload_preset",SV),(await(await fetch(`https://api.cloudinary.com/v1_1/${kV}/image/upload`,{method:"POST",body:e})).json()).secure_url}catch(e){throw console.error("Upload error:",e),e}};function AV(){const[t,e]=U.useState([]),[n,r]=U.useState(""),[i,s]=U.useState(null),[o,l]=U.useState(!1),u=ya();U.useEffect(()=>{const x=pi.onAuthStateChanged(S=>{S?d():u("/login")});return()=>x()},[u]);const d=async()=>{try{const x=Su(Vr(wn,"instafeeds"),Au("created_at","desc")),R=(await _s(x)).docs.map(N=>({id:N.id,...N.data()}));e(R)}catch(x){console.error("Error fetching feeds:",x)}},p=async x=>{if(x.preventDefault(),!i){Ke.fire({icon:"error",title:"Please select an image"});return}l(!0);try{const S=await Gx(i);await g2(Vr(wn,"instafeeds"),{caption:n,image:S,created_at:new Date}),Ke.fire({icon:"success",title:"Feed added successfully!"}),r(""),s(null),document.getElementById("fileInput").value="",d()}catch(S){Ke.fire({icon:"error",title:"Error uploading feed"}),console.error(S)}finally{l(!1)}},m=async x=>{if((await Ke.fire({title:"Are you sure?",text:"This feed will be permanently deleted!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{await m2(Lp(wn,"instafeeds",x)),Ke.fire("Deleted!","Feed deleted successfully.","success"),d()}catch(R){Ke.fire("Error!","Failed to delete feed.","error"),console.error(R)}},y=async()=>{await Zp(pi),u("/login")};return f.jsxs(f.Fragment,{children:[f.jsx("nav",{className:"navbar",children:f.jsx("div",{className:"nav-container",children:f.jsx("div",{className:"nav-brand",children:f.jsxs("a",{href:"/admindash",className:"logo-text",children:[f.jsx("img",{src:"https://themewagon.github.io/windster/images/logo.svg",alt:"Logo"}),f.jsx("span",{children:"Admin"})]})})})}),f.jsxs("div",{className:"admin-layout",children:[f.jsx("aside",{className:"sidebar",children:f.jsx("div",{className:"sidebar-content",children:f.jsxs("ul",{className:"nav-list",children:[f.jsx("li",{children:f.jsxs("a",{href:"/admindash",className:"nav-link",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"})}),f.jsx("span",{children:"Dashboard"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"/addinstafeeds",className:"nav-link active",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7z"})}),f.jsx("span",{children:"Instagram Feeds"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"/addpaymentproof",className:"nav-link",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"})}),f.jsx("span",{children:"Add Payment Proof"})]})}),f.jsx("li",{children:f.jsx("a",{onClick:y,className:"nav-link",style:{cursor:"pointer"},children:f.jsx("span",{children:"Logout"})})})]})})}),f.jsx("main",{className:"main-content",children:f.jsxs("div",{className:"content-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Add Instagram Feed"}),f.jsxs("form",{onSubmit:p,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Feed Name / Caption"}),f.jsx("input",{type:"text",value:n,onChange:x=>r(x.target.value),placeholder:"Enter caption...",required:!0})]}),f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Upload Image"}),f.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:x=>s(x.target.files[0]),required:!0}),i&&f.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#666"},children:["Selected: ",i.name]})]}),f.jsx("button",{type:"submit",className:"btn-submit",disabled:o,children:o?"Uploading to Cloudinary...":"Add Feed"})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Uploaded Feeds Preview"}),t.length===0?f.jsx("p",{children:"No feeds uploaded yet."}):f.jsx("div",{className:"feeds-grid",children:t.map(x=>f.jsxs("div",{className:"feed-item",children:[f.jsx("img",{src:x.image,alt:x.caption}),f.jsx("p",{children:x.caption}),f.jsx("button",{onClick:()=>m(x.id),className:"btn-delete",children:"🗑️ Delete"})]},x.id))})]})]})})]}),f.jsx("style",{jsx:!0,children:`
        .navbar {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 30;
          padding: 12px 20px;
        }
        .nav-container {
          display: flex;
          align-items: center;
        }
        .logo-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
        }
        .logo-text img {
          height: 24px;
        }
        .admin-layout {
          display: flex;
          padding-top: 64px;
          min-height: 100vh;
          background: #f9fafb;
        }
        .sidebar {
          width: 256px;
          background: #fff;
          border-right: 1px solid #e5e7eb;
          position: fixed;
          left: 0;
          top: 64px;
          bottom: 0;
        }
        .sidebar-content {
          padding: 20px 12px;
        }
        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          color: #374151;
          border-radius: 8px;
          transition: 0.2s;
          text-decoration: none;
          margin-bottom: 4px;
        }
        .nav-link:hover, .nav-link.active {
          background: #f3f4f6;
          color: #111827;
        }
        .icon {
          width: 24px;
          height: 24px;
        }
        .main-content {
          margin-left: 256px;
          flex: 1;
          padding: 24px;
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .card {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .card h3 {
          margin: 0 0 20px;
          font-size: 20px;
          color: #111827;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
        }
        .form-group input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
        }
        .btn-submit {
          width: 100%;
          background: #2563eb;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }
        .btn-submit:hover {
          background: #1d4ed8;
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .feeds-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .feed-item {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px;
          background: #f9fafb;
        }
        .feed-item img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .feed-item p {
          margin: 0 0 12px;
          font-size: 14px;
          color: #374151;
        }
        .btn-delete {
          width: 100%;
          background: #ef4444;
          color: #fff;
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-delete:hover {
          background: #dc2626;
        }
        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
          .main-content {
            margin-left: 0;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function CV(){const[t,e]=U.useState([]),[n,r]=U.useState(null),[i,s]=U.useState(!1),o=ya();U.useEffect(()=>{const m=pi.onAuthStateChanged(y=>{y?l():o("/login")});return()=>m()},[o]);const l=async()=>{try{const m=Su(Vr(wn,"paymentproofs"),Au("uploaded_at","desc")),x=(await _s(m)).docs.map(S=>({id:S.id,...S.data()}));e(x)}catch(m){console.error("Error fetching proofs:",m)}},u=async m=>{if(m.preventDefault(),!n){Ke.fire({icon:"error",title:"Please select an image"});return}s(!0);try{const y=await Gx(n);await g2(Vr(wn,"paymentproofs"),{image:y,uploaded_at:new Date}),Ke.fire({icon:"success",title:"Payment proof added successfully!"}),r(null),document.getElementById("fileInput").value="",l()}catch(y){Ke.fire({icon:"error",title:"Error uploading proof"}),console.error(y)}finally{s(!1)}},d=async m=>{if((await Ke.fire({title:"Are you sure?",text:"This payment proof will be permanently deleted!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{await m2(Lp(wn,"paymentproofs",m)),Ke.fire("Deleted!","Payment proof deleted successfully.","success"),l()}catch(x){Ke.fire("Error!","Failed to delete proof.","error"),console.error(x)}},p=async()=>{await Zp(pi),o("/login")};return f.jsxs(f.Fragment,{children:[f.jsx("nav",{className:"navbar",children:f.jsx("div",{className:"nav-container",children:f.jsx("div",{className:"nav-brand",children:f.jsxs("a",{href:"/admindash",className:"logo-text",children:[f.jsx("img",{src:"https://themewagon.github.io/windster/images/logo.svg",alt:"Logo"}),f.jsx("span",{children:"Admin"})]})})})}),f.jsxs("div",{className:"admin-layout",children:[f.jsx("aside",{className:"sidebar",children:f.jsx("div",{className:"sidebar-content",children:f.jsxs("ul",{className:"nav-list",children:[f.jsx("li",{children:f.jsxs("a",{href:"/admindash",className:"nav-link",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 20 20",children:f.jsx("path",{d:"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"})}),f.jsx("span",{children:"Dashboard"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"/addinstafeeds",className:"nav-link",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7z"})}),f.jsx("span",{children:"Instagram Feeds"})]})}),f.jsx("li",{children:f.jsxs("a",{href:"/addpaymentproof",className:"nav-link active",children:[f.jsx("svg",{className:"icon",fill:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"})}),f.jsx("span",{children:"Add Payment Proof"})]})}),f.jsx("li",{children:f.jsx("a",{onClick:p,className:"nav-link",style:{cursor:"pointer"},children:f.jsx("span",{children:"Logout"})})})]})})}),f.jsx("main",{className:"main-content",children:f.jsxs("div",{className:"content-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Add Payment Proof"}),f.jsxs("form",{onSubmit:u,children:[f.jsxs("div",{className:"form-group",children:[f.jsx("label",{children:"Upload Payment Proof"}),f.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:m=>r(m.target.files[0]),required:!0}),n&&f.jsxs("p",{style:{marginTop:"8px",fontSize:"14px",color:"#666"},children:["Selected: ",n.name]})]}),f.jsx("button",{type:"submit",className:"btn-submit",disabled:i,children:i?"Uploading to Cloudinary...":"Add Payment Proof"})]})]}),f.jsxs("div",{className:"card",children:[f.jsx("h3",{children:"Uploaded Payment Proofs"}),t.length===0?f.jsx("p",{children:"No payment proofs uploaded yet."}):f.jsx("div",{className:"proofs-grid",children:t.map(m=>f.jsxs("div",{className:"proof-item",children:[f.jsx("img",{src:m.image,alt:"Payment Proof"}),f.jsx("button",{onClick:()=>d(m.id),className:"btn-delete",children:"🗑️ Delete"})]},m.id))})]})]})})]}),f.jsx("style",{jsx:!0,children:`
        .navbar {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 30;
          padding: 12px 20px;
        }
        .nav-container {
          display: flex;
          align-items: center;
        }
        .logo-text {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 700;
          color: #111;
          text-decoration: none;
        }
        .logo-text img {
          height: 24px;
        }
        .admin-layout {
          display: flex;
          padding-top: 64px;
          min-height: 100vh;
          background: #f9fafb;
        }
        .sidebar {
          width: 256px;
          background: #fff;
          border-right: 1px solid #e5e7eb;
          position: fixed;
          left: 0;
          top: 64px;
          bottom: 0;
        }
        .sidebar-content {
          padding: 20px 12px;
        }
        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          color: #374151;
          border-radius: 8px;
          transition: 0.2s;
          text-decoration: none;
          margin-bottom: 4px;
        }
        .nav-link:hover, .nav-link.active {
          background: #f3f4f6;
          color: #111827;
        }
        .icon {
          width: 24px;
          height: 24px;
        }
        .main-content {
          margin-left: 256px;
          flex: 1;
          padding: 24px;
        }
        .content-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .card {
          background: #fff;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .card h3 {
          margin: 0 0 20px;
          font-size: 20px;
          color: #111827;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
        }
        .form-group input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 16px;
          background: #f9fafb;
        }
        .btn-submit {
          width: 100%;
          background: #059669;
          color: #fff;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }
        .btn-submit:hover {
          background: #047857;
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .proofs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .proof-item {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 12px;
          background: #f9fafb;
        }
        .proof-item img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 6px;
          margin-bottom: 12px;
        }
        .btn-delete {
          width: 100%;
          background: #ef4444;
          color: #fff;
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
        }
        .btn-delete:hover {
          background: #dc2626;
        }
        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
          .main-content {
            margin-left: 0;
          }
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function PV(){return f.jsx(Zb,{children:f.jsxs(qb,{children:[f.jsx(Qt,{path:"/",element:f.jsx(CD,{})}),f.jsx(Qt,{path:"/about",element:f.jsx(PD,{})}),f.jsx(Qt,{path:"/football",element:f.jsx(RD,{})}),f.jsx(Qt,{path:"/cricket",element:f.jsx(ND,{})}),f.jsx(Qt,{path:"/casino",element:f.jsx(DD,{})}),f.jsx(Qt,{path:"/card",element:f.jsx(OD,{})}),f.jsx(Qt,{path:"/login",element:f.jsx(IV,{})}),f.jsx(Qt,{path:"/admindash",element:f.jsx(bV,{})}),f.jsx(Qt,{path:"/addinstafeeds",element:f.jsx(AV,{})}),f.jsx(Qt,{path:"/addpaymentproof",element:f.jsx(CV,{})})]})})}$d.createRoot(document.getElementById("root")).render(f.jsx(Tw.StrictMode,{children:f.jsx(PV,{})}));
