var on=Object.defineProperty,sn=Object.defineProperties;var an=Object.getOwnPropertyDescriptors;var $e=Object.getOwnPropertySymbols;var ln=Object.prototype.hasOwnProperty,cn=Object.prototype.propertyIsEnumerable;var we=(e,t,r)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ee=(e,t)=>{for(var r in t||(t={}))ln.call(t,r)&&we(e,r,t[r]);if($e)for(var r of $e(t))cn.call(t,r)&&we(e,r,t[r]);return e},Ae=(e,t)=>sn(e,an(t));const un=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};un();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=window,le=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),Se=new WeakMap;class _r{constructor(t,r,n){if(this._$cssResult$=!0,n!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(le&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Se.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Se.set(r,t))}return t}toString(){return this.cssText}}const dn=e=>new _r(typeof e=="string"?e:e+"",void 0,ce),R=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new _r(r,e,ce)},hn=(e,t)=>{le?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=ft.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},Ce=le?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return dn(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kt;const mt=window,xe=mt.trustedTypes,pn=xe?xe.emptyScript:"",Pe=mt.reactiveElementPolyfillSupport,Zt={toAttribute(e,t){switch(t){case Boolean:e=e?pn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},yr=(e,t)=>t!==e&&(t==t||e==e),Lt={attribute:!0,type:String,converter:Zt,reflect:!1,hasChanged:yr};class M extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;(r=this.h)!==null&&r!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),t.push(o))}),t}static createProperty(t,r=Lt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,n,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(o){const i=this[t];this[r]=o,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Lt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Ce(o))}else t!==void 0&&r.push(Ce(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return hn(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Lt){var o;const i=this.constructor._$Ep(t,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Zt).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,r){var n;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=o.getPropertyOptions(i),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Zt;this._$El=i,this[i]=c.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let o=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||yr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}M.finalized=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},Pe==null||Pe({ReactiveElement:M}),((kt=mt.reactiveElementVersions)!==null&&kt!==void 0?kt:mt.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ut;const _t=window,j=_t.trustedTypes,Oe=j?j.createPolicy("lit-html",{createHTML:e=>e}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,$r="?"+C,fn=`<${$r}>`,V=document,ot=(e="")=>V.createComment(e),it=e=>e===null||typeof e!="object"&&typeof e!="function",wr=Array.isArray,vn=e=>wr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Re=/-->/g,Te=/>/g,T=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Le=/"/g,Er=/^(?:script|style|textarea|title)$/i,bn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),yt=bn(1),q=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ue=new WeakMap,gn=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=i._$litPart$;if(s===void 0){const c=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new ut(t.insertBefore(ot(),c),c,void 0,r!=null?r:{})}return s._$AI(e),s},B=V.createTreeWalker(V,129,null,!1),mn=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=Y;for(let a=0;a<r;a++){const l=e[a];let h,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===Y?u[1]==="!--"?s=Re:u[1]!==void 0?s=Te:u[2]!==void 0?(Er.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=T):u[3]!==void 0&&(s=T):s===T?u[0]===">"?(s=o!=null?o:Y,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?T:u[3]==='"'?Le:ke):s===Le||s===ke?s=T:s===Re||s===Te?s=Y:(s=T,o=void 0);const _=s===T&&e[a+1].startsWith("/>")?" ":"";i+=s===Y?l+fn:d>=0?(n.push(h),l.slice(0,d)+"$lit$"+l.slice(d)+C+_):l+C+(d===-2?(n.push(void 0),a):_)}const c=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Oe!==void 0?Oe.createHTML(c):c,n]};class st{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const c=t.length-1,a=this.parts,[l,h]=mn(t,r);if(this.el=st.createElement(l,n),B.currentNode=this.el.content,r===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(o=B.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const u=[];for(const d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(C)){const p=h[s++];if(u.push(d),p!==void 0){const _=o.getAttribute(p.toLowerCase()+"$lit$").split(C),N=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:N[2],strings:_,ctor:N[1]==="."?yn:N[1]==="?"?wn:N[1]==="@"?En:xt})}else a.push({type:6,index:i})}for(const d of u)o.removeAttribute(d)}if(Er.test(o.tagName)){const u=o.textContent.split(C),d=u.length-1;if(d>0){o.textContent=j?j.emptyScript:"";for(let p=0;p<d;p++)o.append(u[p],ot()),B.nextNode(),a.push({type:2,index:++i});o.append(u[d],ot())}}}else if(o.nodeType===8)if(o.data===$r)a.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(C,u+1))!==-1;)a.push({type:7,index:i}),u+=C.length-1}i++}}static createElement(t,r){const n=V.createElement("template");return n.innerHTML=t,n}}function W(e,t,r=e,n){var o,i,s,c;if(t===q)return t;let a=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const l=it(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,n)),n!==void 0?((s=(c=r)._$Cl)!==null&&s!==void 0?s:c._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(t=W(e,a._$AS(e,t.values),a,n)),t}class _n{constructor(t,r){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:V).importNode(n,!0);B.currentNode=i;let s=B.nextNode(),c=0,a=0,l=o[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new ut(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new An(s,this,t)),this.v.push(h),l=o[++a]}c!==(l==null?void 0:l.index)&&(s=B.nextNode(),c++)}return i}m(t){let r=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class ut{constructor(t,r,n,o){var i;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$C_=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$C_}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=W(this,t,r),it(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==q&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):vn(t)?this.O(t):this.$(t)}S(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==m&&it(this._$AH)?this._$AA.nextSibling.data=t:this.k(V.createTextNode(t)),this._$AH=t}T(t){var r;const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=st.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.m(n);else{const s=new _n(i,this),c=s.p(this.options);s.m(n),this.k(c),this._$AH=s}}_$AC(t){let r=Ue.get(t.strings);return r===void 0&&Ue.set(t.strings,r=new st(t)),r}O(t){wr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new ut(this.S(ot()),this.S(ot()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$C_=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class xt{constructor(t,r,n,o,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=W(this,t,r,0),s=!it(t)||t!==this._$AH&&t!==q,s&&(this._$AH=t);else{const c=t;let a,l;for(t=i[0],a=0;a<i.length-1;a++)l=W(this,c[n+a],r,a),l===q&&(l=this._$AH[a]),s||(s=!it(l)||l!==this._$AH[a]),l===m?t=m:t!==m&&(t+=(l!=null?l:"")+i[a+1]),this._$AH[a]=l}s&&!o&&this.P(t)}P(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class yn extends xt{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===m?void 0:t}}const $n=j?j.emptyScript:"";class wn extends xt{constructor(){super(...arguments),this.type=4}P(t){t&&t!==m?this.element.setAttribute(this.name,$n):this.element.removeAttribute(this.name)}}class En extends xt{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){var n;if((t=(n=W(this,t,r,0))!==null&&n!==void 0?n:m)===q)return;const o=this._$AH,i=t===m&&o!==m||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==m&&(o===m||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class An{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Ne=_t.litHtmlPolyfillSupport;Ne==null||Ne(st,ut),((Ut=_t.litHtmlVersions)!==null&&Ut!==void 0?Ut:_t.litHtmlVersions=[]).push("2.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nt,Mt;class L extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=gn(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return q}}L.finalized=!0,L._$litElement$=!0,(Nt=globalThis.litElementHydrateSupport)===null||Nt===void 0||Nt.call(globalThis,{LitElement:L});const Me=globalThis.litElementPolyfillSupport;Me==null||Me({LitElement:L});((Mt=globalThis.litElementVersions)!==null&&Mt!==void 0?Mt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=e=>t=>typeof t=="function"?((r,n)=>(customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ae(Ee({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Ar(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):Sn(e,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;((Ht=window.HTMLSlotElement)===null||Ht===void 0?void 0:Ht.prototype.assignedElements)!=null;var de=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),He=new Map,Sr=class{constructor(e,t){if(this._$cssResult$=!0,t!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=He.get(this.cssText);return de&&e===void 0&&(He.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},Cn=e=>new Sr(typeof e=="string"?e:e+"",he),Pt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Sr(r,he)},xn=(e,t)=>{de?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),o=window.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)})},De=de?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Cn(r)})(e):e,Dt,Ie=window.trustedTypes,Pn=Ie?Ie.emptyScript:"",ze=window.reactiveElementPolyfillSupport,Jt={toAttribute(e,t){switch(t){case Boolean:e=e?Pn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Cr=(e,t)=>t!==e&&(t==t||e==e),It={attribute:!0,type:String,converter:Jt,reflect:!1,hasChanged:Cr},H=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=It){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||It}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(De(n))}else e!==void 0&&t.push(De(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return xn(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=It){var n,o;const i=this.constructor._$Eh(e,r);if(i!==void 0&&r.reflect===!0){const s=((o=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&o!==void 0?o:Jt.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Ei=null}}_$AK(e,t){var r,n,o;const i=this.constructor,s=i._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const c=i.getPropertyOptions(s),a=c.converter,l=(o=(n=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&o!==void 0?o:Jt.fromAttribute;this._$Ei=s,this[s]=l(t,c.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Cr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,o)=>this[o]=n),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},ze==null||ze({ReactiveElement:H}),((Dt=globalThis.reactiveElementVersions)!==null&&Dt!==void 0?Dt:globalThis.reactiveElementVersions=[]).push("1.3.2");var zt,K=globalThis.trustedTypes,Be=K?K.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,xr="?"+x,On=`<${xr}>`,G=document,at=(e="")=>G.createComment(e),lt=e=>e===null||typeof e!="object"&&typeof e!="function",Pr=Array.isArray,Rn=e=>{var t;return Pr(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,je=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ve=/'/g,qe=/"/g,Or=/^(?:script|style|textarea|title)$/i,Tn=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),pe=Tn(1),O=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),We=new WeakMap,kn=(e,t,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=i._$litPart$;if(s===void 0){const c=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new Ot(t.insertBefore(at(),c),c,void 0,r!=null?r:{})}return s._$AI(e),s},F=G.createTreeWalker(G,129,null,!1),Ln=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":"",s=Q;for(let a=0;a<r;a++){const l=e[a];let h,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===Q?u[1]==="!--"?s=Fe:u[1]!==void 0?s=je:u[2]!==void 0?(Or.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=k):u[3]!==void 0&&(s=k):s===k?u[0]===">"?(s=o!=null?o:Q,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?k:u[3]==='"'?qe:Ve):s===qe||s===Ve?s=k:s===Fe||s===je?s=Q:(s=k,o=void 0);const _=s===k&&e[a+1].startsWith("/>")?" ":"";i+=s===Q?l+On:d>=0?(n.push(h),l.slice(0,d)+"$lit$"+l.slice(d)+x+_):l+x+(d===-2?(n.push(void 0),a):_)}const c=i+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Be!==void 0?Be.createHTML(c):c,n]},$t=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let o=0,i=0;const s=e.length-1,c=this.parts,[a,l]=Ln(e,t);if(this.el=$t.createElement(a,r),F.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=F.nextNode())!==null&&c.length<s;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(x)){const d=l[i++];if(h.push(u),d!==void 0){const p=n.getAttribute(d.toLowerCase()+"$lit$").split(x),_=/([.?@])?(.*)/.exec(d);c.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?Nn:_[1]==="?"?Hn:_[1]==="@"?Dn:Rt})}else c.push({type:6,index:o})}for(const u of h)n.removeAttribute(u)}if(Or.test(n.tagName)){const h=n.textContent.split(x),u=h.length-1;if(u>0){n.textContent=K?K.emptyScript:"";for(let d=0;d<u;d++)n.append(h[d],at()),F.nextNode(),c.push({type:2,index:++o});n.append(h[u],at())}}}else if(n.nodeType===8)if(n.data===xr)c.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(x,h+1))!==-1;)c.push({type:7,index:o}),h+=x.length-1}o++}}static createElement(e,t){const r=G.createElement("template");return r.innerHTML=e,r}};function X(e,t,r=e,n){var o,i,s,c;if(t===O)return t;let a=n!==void 0?(o=r._$Cl)===null||o===void 0?void 0:o[n]:r._$Cu;const l=lt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((i=a==null?void 0:a._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,n)),n!==void 0?((s=(c=r)._$Cl)!==null&&s!==void 0?s:c._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(t=X(e,a._$AS(e,t.values),a,n)),t}var Un=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:G).importNode(r,!0);F.currentNode=o;let i=F.nextNode(),s=0,c=0,a=n[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Ot(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new In(i,this,e)),this.v.push(l),a=n[++c]}s!==(a==null?void 0:a.index)&&(i=F.nextNode(),s++)}return o}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ot=class{constructor(e,t,r,n){var o;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),lt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==O&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Rn(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==g&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.k(G.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=$t.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(r);else{const i=new Un(o,this),s=i.p(this.options);i.m(r),this.k(s),this._$AH=i}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new $t(e)),t}S(e){Pr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const o of e)n===t.length?t.push(r=new Ot(this.M(at()),this.M(at()),this,this.options)):r=t[n],r._$AI(o),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Rt=class{constructor(e,t,r,n,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const o=this.strings;let i=!1;if(o===void 0)e=X(this,e,t,0),i=!lt(e)||e!==this._$AH&&e!==O,i&&(this._$AH=e);else{const s=e;let c,a;for(e=o[0],c=0;c<o.length-1;c++)a=X(this,s[r+c],t,c),a===O&&(a=this._$AH[c]),i||(i=!lt(a)||a!==this._$AH[c]),a===g?e=g:e!==g&&(e+=(a!=null?a:"")+o[c+1]),this._$AH[c]=a}i&&!n&&this.C(e)}C(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},Nn=class extends Rt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===g?void 0:e}},Mn=K?K.emptyScript:"",Hn=class extends Rt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==g?this.element.setAttribute(this.name,Mn):this.element.removeAttribute(this.name)}},Dn=class extends Rt{constructor(e,t,r,n,o){super(e,t,r,n,o),this.type=5}_$AI(e,t=this){var r;if((e=(r=X(this,e,t,0))!==null&&r!==void 0?r:g)===O)return;const n=this._$AH,o=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},In=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}},Ke=window.litHtmlPolyfillSupport;Ke==null||Ke($t,Ot),((zt=globalThis.litHtmlVersions)!==null&&zt!==void 0?zt:globalThis.litHtmlVersions=[]).push("2.2.4");var Bt,Ft,et=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=kn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return O}};et.finalized=!0,et._$litElement$=!0,(Bt=globalThis.litElementHydrateSupport)===null||Bt===void 0||Bt.call(globalThis,{LitElement:et});var Ge=globalThis.litElementPolyfillSupport;Ge==null||Ge({LitElement:et});((Ft=globalThis.litElementVersions)!==null&&Ft!==void 0?Ft:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe=Pt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,zn=Pt`
  ${fe}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Rr=Object.defineProperty,Bn=Object.defineProperties,Fn=Object.getOwnPropertyDescriptor,jn=Object.getOwnPropertyDescriptors,Xe=Object.getOwnPropertySymbols,Vn=Object.prototype.hasOwnProperty,qn=Object.prototype.propertyIsEnumerable,Ze=(e,t,r)=>t in e?Rr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t)=>{for(var r in t||(t={}))Vn.call(t,r)&&Ze(e,r,t[r]);if(Xe)for(var r of Xe(t))qn.call(t,r)&&Ze(e,r,t[r]);return e},ve=(e,t)=>Bn(e,jn(t)),f=(e,t,r,n)=>{for(var o=n>1?void 0:n?Fn(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&Rr(t,r,o),o},Wn=class extends Event{constructor(e){super("formdata");this.formData=e}},Kn=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Wn(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const n=this.getAll(e),o=n.indexOf(r.value);o!==-1&&n.splice(o,1),n.push(t),this.set(e,n)}else super.append(e,t);r.value=t}};function Gn(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Je(){!window.FormData||Gn()||(window.FormData=Kn,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Je():window.addEventListener("DOMContentLoaded",()=>Je());var tt=new WeakMap,Xn=class{constructor(e,t){(this.host=e).addController(this),this.options=Z({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,n)=>{r.value=n}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),tt.has(this.form)||(tt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),tt.has(this.form)&&(this.form.reportValidity=tt.get(this.form),tt.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof r=="string"&&typeof n!="undefined"&&(Array.isArray(n)?n.forEach(o=>{e.formData.append(r,o.toString())}):e.formData.append(r,n.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},Tr=Symbol.for(""),Zn=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===Tr)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Ye=(e,...t)=>({_$litStatic$:t.reduce((r,n,o)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]),r:Tr}),Qe=new Map,Jn=e=>(t,...r)=>{const n=r.length;let o,i;const s=[],c=[];let a,l=0,h=!1;for(;l<n;){for(a=t[l];l<n&&(i=r[l],(o=Zn(i))!==void 0);)a+=o+t[++l],h=!0;c.push(i),s.push(a),l++}if(l===n&&s.push(t[n]),h){const u=s.join("$$lit$$");(t=Qe.get(u))===void 0&&(s.raw=s,Qe.set(u,t=s)),r=c}return e(t,...r)},jt=Jn(pe);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yn=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},kr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lr=e=>(...t)=>({_$litDirective$:e,values:t}),Ur=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qn=Lr(class extends Ur{constructor(e){var t;if(super(e),e.type!==kr.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((r=this.st)===null||r===void 0)&&r.has(i))&&this.et.add(i);return this.render(t)}const o=e.element.classList;this.et.forEach(i=>{i in t||(o.remove(i),this.et.delete(i))});for(const i in t){const s=!!t[i];s===this.et.has(i)||((n=this.st)===null||n===void 0?void 0:n.has(i))||(s?(o.add(i),this.et.add(i)):(o.remove(i),this.et.delete(i)))}return O}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt=new Set,to=new MutationObserver(Hr),D=new Map,Nr=document.documentElement.dir||"ltr",Mr=document.documentElement.lang||navigator.language,rt;to.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function eo(...e){e.map(t=>{const r=t.$code.toLowerCase();D.has(r)?D.set(r,Object.assign(Object.assign({},D.get(r)),t)):D.set(r,t),rt||(rt=t)}),Hr()}function Hr(){Nr=document.documentElement.dir||"ltr",Mr=document.documentElement.lang||navigator.language,[...Yt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var ro=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Yt.add(this.host)}hostDisconnected(){Yt.delete(this.host)}dir(){return`${this.host.dir||Nr}`.toLowerCase()}lang(){return`${this.host.lang||Mr}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),n=this.lang().length>2?this.lang().toLowerCase():"",o=D.get(n),i=D.get(r);let s;if(o&&o[e])s=o[e];else if(i&&i[e])s=i[e];else if(rt&&rt[e])s=rt[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Dr=class extends ro{},no={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};eo(no);var y=e=>e!=null?e:g;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t,r){const n=new CustomEvent(t,Z({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(n),n}var be=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){window.customElements.define(r,s)}}})(e,t),oo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?ve(Z({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function v(e){return(t,r)=>r!==void 0?((n,o,i)=>{o.constructor.createProperty(i,n)})(e,t,r):oo(e,t)}function Ir(e){return v(ve(Z({},e),{state:!0}))}var io=({finisher:e,descriptor:t})=>(r,n)=>{var o;if(n===void 0){const i=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:ve(Z({},r),{key:i});return e!=null&&(s.finisher=function(c){e(c,i)}),s}{const i=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(i,n)}};function so(e,t){return io({descriptor:r=>{const n={get(){var o,i;return(i=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&i!==void 0?i:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var i,s;return this[o]===void 0&&(this[o]=(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return n}})}var Vt;((Vt=window.HTMLSlotElement)===null||Vt===void 0?void 0:Vt.prototype.assignedElements)!=null;var dt=class extends et{};f([v()],dt.prototype,"dir",2);f([v()],dt.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var b=class extends dt{constructor(){super(...arguments);this.formSubmitController=new Xn(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Yn(this,"[default]","prefix","suffix"),this.localize=new Dr(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,I(this,"sl-blur")}handleFocus(){this.hasFocus=!0,I(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Ye`a`:Ye`button`;return jt`
      <${t}
        part="base"
        class=${Qn({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:this.type)}
        name=${y(e?void 0:this.name)}
        value=${y(e?void 0:this.value)}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e&&this.target?"noreferrer noopener":void 0)}
        role=${y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?jt`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?jt`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};b.styles=zn;f([so(".button")],b.prototype,"button",2);f([Ir()],b.prototype,"hasFocus",2);f([v({reflect:!0})],b.prototype,"variant",2);f([v({reflect:!0})],b.prototype,"size",2);f([v({type:Boolean,reflect:!0})],b.prototype,"caret",2);f([v({type:Boolean,reflect:!0})],b.prototype,"disabled",2);f([v({type:Boolean,reflect:!0})],b.prototype,"loading",2);f([v({type:Boolean,reflect:!0})],b.prototype,"outline",2);f([v({type:Boolean,reflect:!0})],b.prototype,"pill",2);f([v({type:Boolean,reflect:!0})],b.prototype,"circle",2);f([v()],b.prototype,"type",2);f([v()],b.prototype,"name",2);f([v()],b.prototype,"value",2);f([v()],b.prototype,"href",2);f([v()],b.prototype,"target",2);f([v()],b.prototype,"download",2);f([v()],b.prototype,"form",2);f([v({attribute:"formaction"})],b.prototype,"formAction",2);f([v({attribute:"formmethod"})],b.prototype,"formMethod",2);f([v({attribute:"formnovalidate",type:Boolean})],b.prototype,"formNoValidate",2);f([v({attribute:"formtarget"})],b.prototype,"formTarget",2);b=f([be("sl-button")],b);var ao=Pt`
  ${fe}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Qt=class extends dt{constructor(){super(...arguments);this.localize=new Dr(this)}render(){return pe`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Qt.styles=ao;Qt=f([be("sl-spinner")],Qt);var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,ge=(e,t,r,n)=>{for(var o=n>1?void 0:n?co(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&lo(t,r,o),o};let wt=class extends L{constructor(){super();this.title="PWA Starter",this.enableBack=!1}static get styles(){return R`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return yt`
      <header>

        <div id="back-button-block">
          ${this.enableBack?yt`<sl-button href="${"/Trivia/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};ge([Ar({type:String})],wt.prototype,"title",2);ge([Ar({type:Boolean})],wt.prototype,"enableBack",2);wt=ge([ue("app-header")],wt);function Et(e){return e=e||[],Array.isArray(e)?e:[e]}function E(e){return`[Vaadin.Router] ${e}`}function uo(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const At="module",St="nomodule",te=[At,St];function tr(e){if(!e.match(/.+\.[m]?js$/))throw new Error(E(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function zr(e){if(!e||!w(e.path))throw new Error(E('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!U(e.action)&&!Array.isArray(e.children)&&!U(e.children)&&!Ct(t)&&!r.some(n=>w(e[n])))throw new Error(E(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(w(t))tr(t);else if(te.some(n=>n in t))te.forEach(n=>n in t&&tr(t[n]));else throw new Error(E('Expected route bundle to include either "'+St+'" or "'+At+'" keys, or both'));e.redirect&&["bundle","component"].forEach(n=>{n in e&&console.warn(E(`Route config "${e.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function er(e){Et(e).forEach(t=>zr(t))}function rr(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===At?r.setAttribute("type",At):t===St&&r.setAttribute(St,""),r.async=!0),new Promise((n,o)=>{r.onreadystatechange=r.onload=i=>{r.__dynamicImportLoaded=!0,n(i)},r.onerror=i=>{r.parentNode&&r.parentNode.removeChild(r),o(i)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&n()})}function ho(e){return w(e)?rr(e):Promise.race(te.filter(t=>t in e).map(t=>rr(e[t],t)))}function nt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Ct(e){return typeof e=="object"&&!!e}function U(e){return typeof e=="function"}function w(e){return typeof e=="string"}function Br(e){const t=new Error(E(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const z=new class{};function po(e){const t=e.port,r=e.protocol,i=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${i}`}function nr(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let c=0;c<r.length;c++){const a=r[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||po(t))!==window.location.origin)return;const{pathname:o,search:i,hash:s}=t;nt("go",{pathname:o,search:i,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const fo={activate(){window.document.addEventListener("click",nr)},inactivate(){window.document.removeEventListener("click",nr)}},vo=/Trident/.test(navigator.userAgent);vo&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function or(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:n}=window.location;nt("go",{pathname:t,search:r,hash:n})}const bo={activate(){window.addEventListener("popstate",or)},inactivate(){window.removeEventListener("popstate",or)}};var J=Kr,go=me,mo=wo,_o=Vr,yo=Wr,Fr="/",jr="./",$o=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function me(e,t){for(var r=[],n=0,o=0,i="",s=t&&t.delimiter||Fr,c=t&&t.delimiters||jr,a=!1,l;(l=$o.exec(e))!==null;){var h=l[0],u=l[1],d=l.index;if(i+=e.slice(o,d),o=d+h.length,u){i+=u[1],a=!0;continue}var p="",_=e[o],N=l[2],Qr=l[3],tn=l[4],ht=l[5];if(!a&&i.length){var Tt=i.length-1;c.indexOf(i[Tt])>-1&&(p=i[Tt],i=i.slice(0,Tt))}i&&(r.push(i),i="",a=!1);var en=p!==""&&_!==void 0&&_!==p,rn=ht==="+"||ht==="*",nn=ht==="?"||ht==="*",_e=p||s,ye=Qr||tn;r.push({name:N||n++,prefix:p,delimiter:_e,optional:nn,repeat:rn,partial:en,pattern:ye?Eo(ye):"[^"+S(_e)+"]+?"})}return(i||o<e.length)&&r.push(i+e.substr(o)),r}function wo(e,t){return Vr(me(e,t))}function Vr(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(n,o){for(var i="",s=o&&o.encode||encodeURIComponent,c=0;c<e.length;c++){var a=e[c];if(typeof a=="string"){i+=a;continue}var l=n?n[a.name]:void 0,h;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(h=s(l[u],a),!t[c].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');i+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(h=s(String(l),a),!t[c].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');i+=a.prefix+h;continue}if(a.optional){a.partial&&(i+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return i}}function S(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Eo(e){return e.replace(/([=!:$/()])/g,"\\$1")}function qr(e){return e&&e.sensitive?"":"i"}function Ao(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function So(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(Kr(e[o],t,r).source);return new RegExp("(?:"+n.join("|")+")",qr(r))}function Co(e,t,r){return Wr(me(e,r),t,r)}function Wr(e,t,r){r=r||{};for(var n=r.strict,o=r.start!==!1,i=r.end!==!1,s=S(r.delimiter||Fr),c=r.delimiters||jr,a=[].concat(r.endsWith||[]).map(S).concat("$").join("|"),l=o?"^":"",h=e.length===0,u=0;u<e.length;u++){var d=e[u];if(typeof d=="string")l+=S(d),h=u===e.length-1&&c.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+S(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?l+=S(d.prefix)+"("+p+")?":l+="(?:"+S(d.prefix)+"("+p+"))?":l+=S(d.prefix)+"("+p+")"}}return i?(n||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+s+"(?="+a+"))?"),h||(l+="(?="+s+"|"+a+")")),new RegExp(l,qr(r))}function Kr(e,t,r){return e instanceof RegExp?Ao(e,t):Array.isArray(e)?So(e,t,r):Co(e,t,r)}J.parse=go;J.compile=mo;J.tokensToFunction=_o;J.tokensToRegExp=yo;const{hasOwnProperty:xo}=Object.prototype,ee=new Map;ee.set("|false",{keys:[],pattern:/(?:)/});function ir(e){try{return decodeURIComponent(e)}catch{return e}}function Po(e,t,r,n,o){r=!!r;const i=`${e}|${r}`;let s=ee.get(i);if(!s){const l=[];s={keys:l,pattern:J(e,l,{end:r,strict:e===""})},ee.set(i,s)}const c=s.pattern.exec(t);if(!c)return null;const a=Object.assign({},o);for(let l=1;l<c.length;l++){const h=s.keys[l-1],u=h.name,d=c[l];(d!==void 0||!xo.call(a,u))&&(h.repeat?a[u]=d?d.split(h.delimiter).map(ir):[]:a[u]=d&&ir(d))}return{path:c[0],keys:(n||[]).concat(s.keys),params:a}}function Gr(e,t,r,n,o){let i,s,c=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=Po(a,t,!h,n,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;c<h.length;){if(!s){const d=h[c];d.parent=e;let p=i.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=Gr(d,t.substr(p),r,i.keys,i.params)}const u=s.next(l);if(!u.done)return{done:!1,value:u.value};s=null,c++}return{done:!0}}}}function Oo(e){if(U(e.route.action))return e.route.action(e)}function Ro(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function To(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function ko(e,t){const{route:r,path:n}=t;if(r&&!r.__synthetic){const o={path:n,route:r};if(!e.chain)e.chain=[];else if(r.parent){let i=e.chain.length;for(;i--&&e.chain[i].route&&e.chain[i].route!==r.parent;)e.chain.pop()}e.chain.push(o)}}class ct{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||Oo,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){er(t);const r=[...Et(t)];this.root.__children=r}addRoutes(t){return er(t),this.root.__children.push(...Et(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,w(t)?{pathname:t}:t),n=Gr(this.root,this.__normalizePathname(r.pathname),this.baseUrl),o=this.resolveRoute;let i=null,s=null,c=r;function a(l,h=i.value.route,u){const d=u===null&&i.value.route;return i=s||n.next(d),s=null,!l&&(i.done||!Ro(h,i.value.route))?(s=i,Promise.resolve(z)):i.done?Promise.reject(Br(r)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},r,i.value),ko(c,i.value),Promise.resolve(o(c)).then(p=>p!=null&&p!==z?(c.result=p.result||p,c):a(l,h,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const h=To(c);if(l?console.warn(h):l=new Error(h),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,r).href;if(n.slice(0,r.length)===r)return n.slice(r.length)}}ct.pathToRegexp=J;const{pathToRegexp:sr}=ct,ar=new Map;function Xr(e,t,r){const n=t.name||t.component;if(n&&(e.has(n)?e.get(n).push(t):e.set(n,[t])),Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];i.parent=t,Xr(e,i,i.__children||i.children)}}function lr(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function cr(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Lo(e,t={}){if(!(e instanceof ct))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(n,o)=>{let i=lr(r,n);if(!i&&(r.clear(),Xr(r,e.root,e.root.__children),i=lr(r,n),!i))throw new Error(`Route "${n}" not found`);let s=ar.get(i.fullPath);if(!s){let a=cr(i),l=i.parent;for(;l;){const p=cr(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const h=sr.parse(a),u=sr.tokensToFunction(h),d=Object.create(null);for(let p=0;p<h.length;p++)w(h[p])||(d[h[p].name]=!0);s={toPath:u,keys:d},ar.set(a,s),i.fullPath=a}let c=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const a={},l=Object.keys(o);for(let u=0;u<l.length;u++){const d=l[u];s.keys[d]||(a[d]=o[d])}const h=t.stringifyQueryParams(a);h&&(c+=h.charAt(0)==="?"?h:`?${h}`)}return c}}let ur=[];function Uo(e){ur.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),ur=e}const No=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Mo=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function dr(e,t){return e.classList.add(t),new Promise(r=>{if(No(e)){const n=e.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Mo(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const Ho=256;function qt(e){return e!=null}function Do(e){const t=Object.assign({},e);return delete t.next,t}function $({pathname:e="",search:t="",hash:r="",chain:n=[],params:o={},redirectFrom:i,resolver:s},c){const a=n.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:c||a.length&&a[a.length-1]||null,params:o,redirectFrom:i,getUrl:(l={})=>bt(P.pathToRegexp.compile(Zr(a))(Object.assign({},o,l)),s)}}function hr(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Io(e,t){t.location=$(e);const r=e.chain.map(n=>n.route).indexOf(e.route);return e.chain[r].element=t,t}function vt(e,t,r){if(U(e))return e.apply(r,t)}function pr(e,t,r){return n=>{if(n&&(n.cancel||n.redirect))return n;if(r)return vt(r[e],t,r)}}function zo(e,t){if(!Array.isArray(e)&&!Ct(e))throw new Error(E(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Et(e);for(let n=0;n<r.length;n++)zr(r[n]),t.__children.push(r[n])}function pt(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function bt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function Zr(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class P extends ct{constructor(t,r){const n=document.head.querySelector("base"),o=n&&n.getAttribute("href");super([],Object.assign({baseUrl:o&&ct.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const i=P.NavigationTrigger;P.setTriggers.apply(P,Object.keys(i).map(s=>i[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=$({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let n=Promise.resolve();U(r.children)&&(n=n.then(()=>r.children(Do(t))).then(i=>{!qt(i)&&!U(r.children)&&(i=r.children),zo(i,r)}));const o={redirect:i=>hr(t,i),component:i=>{const s=document.createElement(i);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(t))return vt(r.action,[t,o],r)}).then(i=>{if(qt(i)&&(i instanceof HTMLElement||i.redirect||i===z))return i;if(w(r.redirect))return o.redirect(r.redirect);if(r.bundle)return ho(r.bundle).then(()=>{},()=>{throw new Error(E(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(i=>{if(qt(i))return i;if(w(r.component))return o.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const n=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},w(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(o).then(i=>this.__fullyResolveChain(i)).then(i=>{if(this.__isLatestRender(i)){const s=this.__previousContext;if(i===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=$(i),r&&this.__updateBrowserHistory(i,n===1),nt("location-changed",{router:this,location:this.location}),i.__skipAttach)return this.__copyUnchangedElements(i,s),this.__previousContext=i,this.location;this.__addAppearingContent(i,s);const c=this.__animateIfNeeded(i);return this.__runOnAfterEnterCallbacks(i),this.__runOnAfterLeaveCallbacks(i,s),c.then(()=>{if(this.__isLatestRender(i))return this.__removeDisappearingContent(),this.__previousContext=i,this.location})}}).catch(i=>{if(n===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(o),pt(this.__outlet&&this.__outlet.children),this.location=$(Object.assign(o,{resolver:this})),nt("error",Object.assign({router:this,error:i},o)),i}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(n=>{const i=n!==r?n:t,c=bt(Zr(n.chain),n.resolver)===n.pathname,a=(l,h=l.route,u)=>l.next(void 0,h,u).then(d=>d===null||d===z?c?l:h.parent!==null?a(l,h.parent,d):d:d);return a(n).then(l=>{if(l===null||l===z)throw Br(i);return l&&l!==z&&l!==n?this.__fullyResolveChain(i,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Io(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(E(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${uo(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},n=r.chain||[],o=t.chain;let i=Promise.resolve();const s=()=>({cancel:!0}),c=a=>hr(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,o.length)&&!(n[a].route!==o[a].route||n[a].path!==o[a].path&&n[a].element!==o[a].element||!this.__isReusableElement(n[a].element,o[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=o.length===n.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=o.length-1;a>=0;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},n[a]);for(let a=0;a<o.length;a++)i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:c},o[a]),n[a].element.location=$(t,n[a].route)}else for(let a=n.length-1;a>=t.__divergedChainIndex;a--)i=this.__runOnBeforeLeaveCallbacks(i,t,{prevent:s},n[a])}if(!t.__skipAttach)for(let a=0;a<o.length;a++)a<t.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=$(t,n[a].route)):(i=this.__runOnBeforeEnterCallbacks(i,t,{prevent:s,redirect:c},o[a]),o[a].element&&(o[a].element.location=$(t,o[a].route)));return i.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,n,o){const i=$(r);return t.then(s=>{if(this.__isLatestRender(r))return pr("onBeforeLeave",[i,n,this],o.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,n,o){const i=$(r,o.route);return t.then(s=>{if(this.__isLatestRender(r))return pr("onBeforeEnter",[i,n,this],o.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,n){if(r>Ho)throw new Error(E(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(E(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:n=""},o){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==n){const i=o?"replaceState":"pushState";window.history[i](null,document.title,t+r+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let n=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const i=r&&r.chain[o].element;if(i)if(i.parentNode===n)t.chain[o].element=i,n=i;else break}return n}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(i=>this.__addedByRouter.get(i)&&i!==t.result);let o=n;for(let i=t.__divergedChainIndex;i<t.chain.length;i++){const s=t.chain[i].element;s&&(o.appendChild(s),this.__addedByRouter.set(s,!0),o===n&&this.__appearingContent.push(s),o=s)}}__removeDisappearingContent(){this.__disappearingContent&&pt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(pt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let n=r.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const o=r.chain[n].element;if(!!o)try{const i=$(t);vt(o.onAfterLeave,[i,{},r.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&pt(o.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const n=t.chain[r].element||{},o=$(t,t.chain[r].route);vt(n.onAfterEnter,[o,{},t.resolver],n)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],o=[],i=t.chain;let s;for(let c=i.length;c>0;c--)if(i[c-1].route.animate){s=i[c-1].route.animate;break}if(r&&n&&s){const c=Ct(s)&&s.leave||"leaving",a=Ct(s)&&s.enter||"entering";o.push(dr(r,c)),o.push(dr(n,a))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:n,hash:o}=t?t.detail:window.location;w(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:n,hash:o},!0))}static setTriggers(...t){Uo(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Lo(this)),bt(this.__urlForName(t,r),this)}urlForPath(t,r){return bt(P.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:n,hash:o}=w(t)?this.__createUrl(t,"http://a"):t;return nt("go",{pathname:r,search:n,hash:o})}}const Bo=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,gt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Fo(){function e(){return!0}return Jr(e)}function jo(){try{return Vo()?!0:qo()?gt?!Wo():!Fo():!1}catch{return!1}}function Vo(){return localStorage.getItem("vaadin.developmentmode.force")}function qo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Wo(){return!!(gt&&Object.keys(gt).map(t=>gt[t]).filter(t=>t.productionMode).length>0)}function Jr(e,t){if(typeof e!="function")return;const r=Bo.exec(e.toString());if(r)try{e=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(t)}window.Vaadin=window.Vaadin||{};const fr=function(e,t){if(window.Vaadin.developmentMode)return Jr(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=jo());function Ko(){}const Go=function(){if(typeof fr=="function")return fr(Ko)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Go();P.NavigationTrigger={POPSTATE:bo,CLICK:fo};const Xo="modulepreload",vr={},Zo="/Trivia/",Jo=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Zo}${n}`,n in vr)return;vr[n]=!0;const o=n.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Xo,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((c,a)=>{s.addEventListener("load",c),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Yo=R`#FFFCF5`,Qo=R`#232F34`,ti=R`#9EA0A3`,ei=R`#9535E1`,Yr=R`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  main {
    max-width: 428px;
    height: 100vh;
    margin: 0 auto;
    background-color: ${Yo};
    color: ${Qo};
    position: relative;
  }

  h2 {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
  }

  .text-center {
    text-align: center;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`,ri=R`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-content: center;
  }

  .logo {
    display: inline-flex;
    justify-content: center;
  }

  .app-name {
    font-size: 1.5rem;
    line-height:1;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  .intro {
    text-align: center;
    color: ${ti};
    font-size: 1rem;
    max-width: 195px;
    margin: 20px auto 0;
  }

  sl-button{
    position: absolute;
    bottom: 60px;
    right: 20px;
    left: 20px;
    display: block;
  }

  .setup-btn::part(base) {
    background-color: ${ei};
    color: #fff;
    border: 0;
  }
`;var ni=Pt`
  ${fe}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,re="";function br(e){re=e}function oi(){if(!re){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)br(t.getAttribute("data-shoelace"));else{const r=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let n="";r&&(n=r.getAttribute("src")),br(n.split("/").slice(0,-1).join("/"))}}return re.replace(/\/$/,"")}var ii={name:"default",resolver:e=>`${oi()}/assets/icons/${e}.svg`},si=ii,gr={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},ai={name:"system",resolver:e=>e in gr?`data:image/svg+xml,${encodeURIComponent(gr[e])}`:""},li=ai,ci=[si,li],ne=[];function ui(e){ne.push(e)}function di(e){ne=ne.filter(t=>t!==e)}function mr(e){return ci.find(t=>t.name===e)}var Wt=new Map;function hi(e,t="cors"){if(Wt.has(e))return Wt.get(e);const r=fetch(e,{mode:t}).then(async n=>({ok:n.ok,status:n.status,html:await n.text()}));return Wt.set(e,r),r}var Kt=new Map;async function pi(e){if(Kt.has(e))return Kt.get(e);const t=await hi(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const n=document.createElement("div");n.innerHTML=t.html;const o=n.firstElementChild;r.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return Kt.set(e,r),r}function Gt(e,t){const r=Z({waitUntilFirstUpdate:!1},t);return(n,o)=>{const{update:i}=n;if(e in n){const s=e;n.update=function(c){if(c.has(s)){const a=c.get(s),l=this[s];a!==l&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](a,l)}i.call(this,c)}}}}var oe=class extends Ur{constructor(e){if(super(e),this.it=g,e.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this.ft=void 0,this.it=e;if(e===O)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};oe.directiveName="unsafeHTML",oe.resultType=1;var ie=class extends oe{};ie.directiveName="unsafeSVG",ie.resultType=2;var fi=Lr(ie),Xt,A=class extends dt{constructor(){super(...arguments);this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),ui(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),di(this)}getUrl(){const e=mr(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=mr(this.library),r=this.getUrl();if(Xt||(Xt=new DOMParser),r)try{const n=await pi(r);if(r!==this.getUrl())return;if(n.ok){const i=Xt.parseFromString(n.svg,"text/html").body.querySelector("svg");i!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,i),this.svg=i.outerHTML,I(this,"sl-load")):(this.svg="",I(this,"sl-error"))}else this.svg="",I(this,"sl-error")}catch{I(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return pe` <div
      part="base"
      class="icon"
      role=${y(e?"img":void 0)}
      aria-label=${y(e?this.label:void 0)}
      aria-hidden=${y(e?void 0:"true")}
    >
      ${fi(this.svg)}
    </div>`}};A.styles=ni;f([Ir()],A.prototype,"svg",2);f([v({reflect:!0})],A.prototype,"name",2);f([v()],A.prototype,"src",2);f([v()],A.prototype,"label",2);f([v({reflect:!0})],A.prototype,"library",2);f([Gt("name"),Gt("src"),Gt("library")],A.prototype,"setIcon",1);A=f([be("sl-icon")],A);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,gi=(e,t,r,n)=>{for(var o=n>1?void 0:n?bi(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&vi(t,r,o),o};let se=class extends L{constructor(){super()}render(){return yt`
    <div class='container'>
      <div class='logo'>
      <sl-icon src="./assets/icons/app-logo.svg" style="font-size: 50px;"></sl-icon>
      <h1 class='app-name'>Trivial </br> Dispatch</h1>
      </div>
      <p class='intro'>Get a new trivia delivered to you everyday</p>
    </div>
    <sl-button class='setup-btn' variant="default" href='/set-frequency'>
      Setup
      <sl-icon slot="suffix" src="./assets/icons/arrow-right.svg" style="font-size: 15px;"></sl-icon>
    </sl-button>
    `}};se.styles=[Yr,ri];se=gi([ue("app-setup")],se);const mi=[{path:"/Trivia/",animate:!0,children:[{path:"",component:"app-setup"},{path:"/set-frequency",component:"set-frequency",action:async()=>{await Jo(()=>import("./index.0439b474.js"),[])}}]}];var _i=Object.defineProperty,yi=Object.getOwnPropertyDescriptor,$i=(e,t,r,n)=>{for(var o=n>1?void 0:n?yi(t,r):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&_i(t,r,o),o};let ae=class extends L{constructor(){super()}firstUpdated(){var t;new P((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes(mi)}render(){return yt`
        <main>
          <div id="routerOutlet"></div>
        </main>
    `}};ae.styles=[Yr,R`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `];ae=$i([ue("app-index")],ae);export{pe as $,Xn as F,dt as S,f as _,Ur as a,O as b,fe as c,so as d,Lr as e,Ir as f,v as g,Gt as h,R as i,I as j,Qn as k,y as l,L as m,be as n,Jt as o,ei as p,Yr as q,Pt as r,ti as s,kr as t,ue as u,g as w,yt as y};
//# sourceMappingURL=index.7d0178c9.js.map
