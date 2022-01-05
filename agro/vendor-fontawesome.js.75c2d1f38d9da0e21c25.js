/*! For license information please see vendor-fontawesome.js.75c2d1f38d9da0e21c25.js.LICENSE.txt */
(self.webpackChunkagro_web=self.webpackChunkagro_web||[]).push([[813],{7287:(t,e,n)=>{!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=function(){},s={},l={},f=null,u={mark:c,measure:c};try{"undefined"!=typeof window&&(s=window),"undefined"!=typeof document&&(l=document),"undefined"!=typeof MutationObserver&&(f=MutationObserver),"undefined"!=typeof performance&&(u=performance)}catch(t){}var d=(s.navigator||{}).userAgent,m=void 0===d?"":d,p=s,h=l,g=f,v=u,b=!!p.document,y=!!h.documentElement&&!!h.head&&"function"==typeof h.addEventListener&&"function"==typeof h.createElement,w=~m.indexOf("MSIE")||~m.indexOf("Trident/"),x="svg-inline--fa",k="data-fa-i2svg",_="data-fa-pseudo-element",A="fontawesome-i2svg",O=["HTML","HEAD","STYLE","SCRIPT"],C=function(){try{return!0}catch(t){return!1}}(),E={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fak:"kit",fa:"solid"},N={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab",kit:"fak"},S="fa-layers-text",M=/Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,P={900:"fas",400:"far",normal:"far",300:"fal"},z=[1,2,3,4,5,6,7,8,9,10],j=z.concat([11,12,13,14,15,16,17,18,19,20]),L=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],T={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",T.GROUP,T.SWAP_OPACITY,T.PRIMARY,T.SECONDARY].concat(z.map((function(t){return"".concat(t,"x")}))).concat(j.map((function(t){return"w-".concat(t)}))),I=p.FontAwesomeConfig||{};h&&"function"==typeof h.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=i(t,2),n=e[0],a=e[1],r=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));null!=r&&(I[a]=r)}));var F=r({},{familyPrefix:"fa",replacementClass:x,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},I);F.autoReplaceSvg||(F.observeMutations=!1);var Y=r({},F);p.FontAwesomeConfig=Y;var H=p||{};H.___FONT_AWESOME___||(H.___FONT_AWESOME___={}),H.___FONT_AWESOME___.styles||(H.___FONT_AWESOME___.styles={}),H.___FONT_AWESOME___.hooks||(H.___FONT_AWESOME___.hooks={}),H.___FONT_AWESOME___.shims||(H.___FONT_AWESOME___.shims=[]);var W=H.___FONT_AWESOME___,D=[],U=!1;function q(t){y&&(U?setTimeout(t,0):D.push(t))}y&&((U=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState))||h.addEventListener("DOMContentLoaded",(function t(){h.removeEventListener("DOMContentLoaded",t),U=1,D.map((function(t){return t()}))})));var V,X="pending",B="settled",G="fulfilled",K="rejected",J=function(){},Q=void 0!==n.g&&void 0!==n.g.process&&"function"==typeof n.g.process.emit,Z="undefined"==typeof setImmediate?setTimeout:setImmediate,$=[];function tt(){for(var t=0;t<$.length;t++)$[t][0]($[t][1]);$=[],V=!1}function et(t,e){$.push([t,e]),V||(V=!0,Z(tt,0))}function nt(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=G;try{a=r(a)}catch(t){ot(i,t)}}at(i,a)||(n===G&&rt(i,a),n===K&&ot(i,a))}function at(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(t){a||(a=!0,n===t?it(e,t):rt(e,t))}),(function(t){a||(a=!0,ot(e,t))})),!0}}catch(t){return a||ot(e,t),!0}return!1}function rt(t,e){t!==e&&at(t,e)||it(t,e)}function it(t,e){t._state===X&&(t._state=B,t._data=e,et(st,t))}function ot(t,e){t._state===X&&(t._state=B,t._data=e,et(lt,t))}function ct(t){t._then=t._then.forEach(nt)}function st(t){t._state=G,ct(t)}function lt(t){t._state=K,ct(t),!t._handled&&Q&&n.g.process.emit("unhandledRejection",t._data,t)}function ft(t){n.g.process.emit("rejectionHandled",t)}function ut(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof ut==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){ot(e,t)}try{t((function(t){rt(e,t)}),n)}catch(t){n(t)}}(t,this)}ut.prototype={constructor:ut,_state:X,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(J),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===K&&Q&&et(ft,this)),this._state===G||this._state===K?et(nt,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},ut.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new ut((function(e,n){var a=[],r=0;function i(t){return r++,function(n){a[t]=n,--r||e(a)}}for(var o,c=0;c<t.length;c++)(o=t[c])&&"function"==typeof o.then?o.then(i(c),n):a[c]=o;r||e(a)}))},ut.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new ut((function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)}))},ut.resolve=function(e){return e&&"object"===t(e)&&e.constructor===ut?e:new ut((function(t){t(e)}))},ut.reject=function(t){return new ut((function(e,n){n(t)}))};var dt="function"==typeof Promise?Promise:ut,mt=16,pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ht(t){if(t&&y){var e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=h.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(e,a),t}}function gt(){for(var t=12,e="";t-- >0;)e+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return e}function vt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function bt(t){return t.classList?vt(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function yt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wt(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function xt(t){return t.size!==pt.size||t.x!==pt.x||t.y!==pt.y||t.rotate!==pt.rotate||t.flipX||t.flipY}function kt(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var _t={x:0,y:0,width:"100%",height:"100%"};function At(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ot(t){var e=t.icons,n=e.main,a=e.mask,i=t.prefix,o=t.iconName,c=t.transform,s=t.symbol,l=t.title,f=t.maskId,u=t.titleId,d=t.extra,m=t.watchable,p=void 0!==m&&m,h=a.found?a:n,g=h.width,v=h.height,b="fak"===i,y=b?"":"fa-w-".concat(Math.ceil(g/v*16)),w=[Y.replacementClass,o?"".concat(Y.familyPrefix,"-").concat(o):"",y].filter((function(t){return-1===d.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(d.classes).join(" "),x={children:[],attributes:r({},d.attributes,{"data-prefix":i,"data-icon":o,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},_=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(x.attributes[k]=""),l&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||gt())},children:[l]});var A=r({},x,{prefix:i,iconName:o,main:n,mask:a,maskId:f,transform:c,symbol:s,styles:r({},_,d.styles)}),O=a.found&&n.found?function(t){var e,n=t.children,a=t.attributes,i=t.main,o=t.mask,c=t.maskId,s=t.transform,l=i.width,f=i.icon,u=o.width,d=o.icon,m=kt({transform:s,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:r({},_t,{fill:"white"})},h=f.children?{children:f.children.map(At)}:{},g={tag:"g",attributes:r({},m.inner),children:[At(r({tag:f.tag,attributes:r({},f.attributes,m.path)},h))]},v={tag:"g",attributes:r({},m.outer),children:[g]},b="mask-".concat(c||gt()),y="clip-".concat(c||gt()),w={tag:"mask",attributes:r({},_t,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(e=d,"g"===e.tag?e.children:[e])},w]};return n.push(x,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},_t)}),{children:n,attributes:a}}(A):function(t){var e=t.children,n=t.attributes,a=t.main,i=t.transform,o=wt(t.styles);if(o.length>0&&(n.style=o),xt(i)){var c=kt({transform:i,containerWidth:a.width,iconWidth:a.width});e.push({tag:"g",attributes:r({},c.outer),children:[{tag:"g",attributes:r({},c.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:r({},a.icon.attributes,c.path)}]}]})}else e.push(a.icon);return{children:e,attributes:n}}(A),C=O.children,E=O.attributes;return A.children=C,A.attributes=E,s?function(t){var e=t.prefix,n=t.iconName,a=t.children,i=t.attributes,o=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r({},i,{id:!0===o?"".concat(e,"-").concat(Y.familyPrefix,"-").concat(n):o}),children:a}]}]}(A):function(t){var e=t.children,n=t.main,a=t.mask,i=t.attributes,o=t.styles,c=t.transform;if(xt(c)&&n.found&&!a.found){var s={x:n.width/n.height/2,y:.5};i.style=wt(r({},o,{"transform-origin":"".concat(s.x+c.x/16,"em ").concat(s.y+c.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}(A)}function Ct(t){var e=t.content,n=t.width,a=t.height,i=t.transform,o=t.title,c=t.extra,s=t.watchable,l=void 0!==s&&s,f=r({},c.attributes,o?{title:o}:{},{class:c.classes.join(" ")});l&&(f[k]="");var u=r({},c.styles);xt(i)&&(u.transform=function(t){var e=t.transform,n=t.width,a=void 0===n?16:n,r=t.height,i=void 0===r?16:r,o=t.startCentered,c=void 0!==o&&o,s="";return s+=c&&w?"translate(".concat(e.x/mt-a/2,"em, ").concat(e.y/mt-i/2,"em) "):c?"translate(calc(-50% + ".concat(e.x/mt,"em), calc(-50% + ").concat(e.y/mt,"em)) "):"translate(".concat(e.x/mt,"em, ").concat(e.y/mt,"em) "),(s+="scale(".concat(e.size/mt*(e.flipX?-1:1),", ").concat(e.size/mt*(e.flipY?-1:1),") "))+"rotate(".concat(e.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var d=wt(u);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Et(t){var e=t.content,n=t.title,a=t.extra,i=r({},a.attributes,n?{title:n}:{},{class:a.classes.join(" ")}),o=wt(a.styles);o.length>0&&(i.style=o);var c=[];return c.push({tag:"span",attributes:i,children:[e]}),n&&c.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),c}var Nt=function(){},St=Y.measurePerformance&&v&&v.mark&&v.measure?v:{mark:Nt,measure:Nt},Mt='FA "5.15.4"',Pt=function(t){return St.mark("".concat(Mt," ").concat(t," begins")),function(){return function(t){St.mark("".concat(Mt," ").concat(t," ends")),St.measure("".concat(Mt," ").concat(t),"".concat(Mt," ").concat(t," begins"),"".concat(Mt," ").concat(t," ends"))}(t)}},zt=function(t,e,n,a){var r,i,o,c=Object.keys(t),s=c.length,l=void 0!==a?function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}}(e,a):e;for(void 0===n?(r=1,o=t[c[0]]):(r=0,o=n);r<s;r++)o=l(o,t[i=c[r]],i,t);return o};function jt(t){for(var e="",n=0;n<t.length;n++)e+=("000"+t.charCodeAt(n).toString(16)).slice(-4);return e}function Lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.skipHooks,i=void 0!==a&&a,o=Object.keys(e).reduce((function(t,n){var a=e[n];return a.icon?t[a.iconName]=a.icon:t[n]=a,t}),{});"function"!=typeof W.hooks.addPack||i?W.styles[t]=r({},W.styles[t]||{},o):W.hooks.addPack(t,o),"fas"===t&&Lt("fa",e)}var Tt=W.styles,Rt=W.shims,It={},Ft={},Yt={},Ht=function(){var t=function(t){return zt(Tt,(function(e,n,a){return e[a]=zt(n,t,{}),e}),{})};It=t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),Ft=t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in Tt;Yt=zt(Rt,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),t[a]={prefix:r,iconName:i},t}),{})};function Wt(t,e){return(It[t]||{})[e]}Ht();var Dt=W.styles;function Ut(t){return t.reduce((function(t,e){var n=function(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~R.indexOf(n))?null:i}(Y.familyPrefix,e);if(Dt[e])t.prefix=e;else if(Y.autoFetchSvg&&Object.keys(E).indexOf(e)>-1)t.prefix=e;else if(n){var a="fa"===t.prefix?Yt[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==Y.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t}),{prefix:null,iconName:null,rest:[]})}function qt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Vt(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?yt(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(yt(t[n]),'" ')}),"").trim()}(a),">").concat(i.map(Vt).join(""),"</").concat(e,">")}var Xt=function(){};function Bt(t){return"string"==typeof(t.getAttribute?t.getAttribute(k):null)}var Gt={replace:function(t){var e=t[0],n=t[1].map((function(t){return Vt(t)})).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(Y.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," Font Awesome fontawesome.com --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~bt(e).indexOf(Y.replacementClass))return Gt.replace(t);var a=new RegExp("".concat(Y.familyPrefix,"-.*"));delete n[0].attributes.style,delete n[0].attributes.id;var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===Y.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map((function(t){return Vt(t)})).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(k,""),e.innerHTML=i}};function Kt(t){t()}function Jt(t,e){var n="function"==typeof e?e:Xt;if(0===t.length)n();else{var a=Kt;"async"===Y.mutateApproach&&(a=p.requestAnimationFrame||Kt),a((function(){var e=!0===Y.autoReplaceSvg?Gt.replace:Gt[Y.autoReplaceSvg]||Gt.replace,a=Pt("mutate");t.map(e),a(),n()}))}}var Qt=!1;function Zt(){Qt=!1}var $t=null;function te(t){if(g&&Y.observeMutations){var e=t.treeCallback,n=t.nodeCallback,a=t.pseudoElementsCallback,r=t.observeMutationsRoot,i=void 0===r?h:r;$t=new g((function(t){Qt||vt(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Bt(t.addedNodes[0])&&(Y.searchPseudoElements&&a(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&Y.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&Bt(t.target)&&~L.indexOf(t.attributeName))if("class"===t.attributeName){var r=Ut(bt(t.target)),i=r.prefix,o=r.iconName;i&&t.target.setAttribute("data-prefix",i),o&&t.target.setAttribute("data-icon",o)}else n(t.target)}))})),y&&$t.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}var ee=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),e):e};function ne(t){var e=function(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Ut(bt(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&i.length>1?o.iconName=(e=o.prefix,n=t.innerText,(Ft[e]||{})[n]):o.prefix&&1===i.length&&(o.iconName=Wt(o.prefix,jt(t.innerText))),o}(t),n=e.iconName,a=e.prefix,r=e.rest,i=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t}),{})),n}(t),o=function(t){return ee(t.getAttribute("data-fa-transform"))}(t),c=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)}(t),s=function(t){var e=vt(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return Y.autoA11y&&(n?e["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(a||gt()):(e["aria-hidden"]="true",e.focusable="false")),e}(t),l=function(t){var e=t.getAttribute("data-fa-mask");return e?Ut(e.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]}}(t);return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:o,symbol:c,mask:l,maskId:t.getAttribute("data-fa-mask-id"),extra:{classes:r,styles:i,attributes:s}}}function ae(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}ae.prototype=Object.create(Error.prototype),ae.prototype.constructor=ae;var re={fill:"currentColor"},ie={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},oe={tag:"path",attributes:r({},re,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},ce=r({},ie,{attributeName:"opacity"}),se={tag:"g",children:[oe,{tag:"circle",attributes:r({},re,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:r({},ie,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r({},ce,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:r({},re,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:r({},ce,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:r({},re,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r({},ce,{values:"0;0;1;1;0;0;"})}]}]},le=W.styles;function fe(t){var e=t[0],n=t[1],a=i(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(Y.familyPrefix,"-").concat(T.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.familyPrefix,"-").concat(T.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(Y.familyPrefix,"-").concat(T.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}function ue(t,e){return new dt((function(n,a){var r={found:!1,width:512,height:512,icon:se};if(t&&e&&le[e]&&le[e][t])return n(fe(le[e][t]));t&&e&&!Y.showMissingIcons?a(new ae("Icon is missing for prefix ".concat(e," with icon name ").concat(t))):n(r)}))}var de=W.styles;function me(t){var e=ne(t);return~e.extra.classes.indexOf(S)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(w){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return Y.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),dt.resolve([t,Ct({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,e):function(t,e){var n=e.iconName,a=e.title,r=e.titleId,o=e.prefix,c=e.transform,s=e.symbol,l=e.mask,f=e.maskId,u=e.extra;return new dt((function(e,d){dt.all([ue(n,o),ue(l.iconName,l.prefix)]).then((function(l){var d=i(l,2),m=d[0],p=d[1];e([t,Ot({icons:{main:m,mask:p},prefix:o,iconName:n,transform:c,symbol:s,mask:p,maskId:f,title:a,titleId:r,extra:u,watchable:!0})])}))}))}(t,e)}function pe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(y){var n=h.documentElement.classList,a=function(t){return n.add("".concat(A,"-").concat(t))},r=function(t){return n.remove("".concat(A,"-").concat(t))},i=Y.autoFetchSvg?Object.keys(E):Object.keys(de),o=[".".concat(S,":not([").concat(k,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(k,"])")}))).join(", ");if(0!==o.length){var c=[];try{c=vt(t.querySelectorAll(o))}catch(t){}if(c.length>0){a("pending"),r("complete");var s=Pt("onTree"),l=c.reduce((function(t,e){try{var n=me(e);n&&t.push(n)}catch(t){C||t instanceof ae&&console.error(t)}return t}),[]);return new dt((function(t,n){dt.all(l).then((function(n){Jt(n,(function(){a("active"),a("complete"),r("pending"),"function"==typeof e&&e(),s(),t()}))})).catch((function(){s(),n()}))}))}}}}function he(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;me(t).then((function(t){t&&Jt([t],e)}))}function ge(t,e){var n="".concat("data-fa-pseudo-element-pending").concat(e.replace(":","-"));return new dt((function(a,i){if(null!==t.getAttribute(n))return a();var o=vt(t.children).filter((function(t){return t.getAttribute(_)===e}))[0],c=p.getComputedStyle(t,e),s=c.getPropertyValue("font-family").match(M),l=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(o&&!s)return t.removeChild(o),a();if(s&&"none"!==f&&""!==f){var u=c.getPropertyValue("content"),d=~["Solid","Regular","Light","Duotone","Brands","Kit"].indexOf(s[2])?N[s[2].toLowerCase()]:P[l],m=jt(3===u.length?u.substr(1,1):u),g=Wt(d,m),v=g;if(!g||o&&o.getAttribute("data-prefix")===d&&o.getAttribute("data-icon")===v)a();else{t.setAttribute(n,v),o&&t.removeChild(o);var b={iconName:null,title:null,titleId:null,prefix:null,transform:pt,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}},y=b.extra;y.attributes[_]=e,ue(g,d).then((function(i){var o=Ot(r({},b,{icons:{main:i,mask:{prefix:null,iconName:null,rest:[]}},prefix:d,iconName:v,extra:y,watchable:!0})),c=h.createElement("svg");":before"===e?t.insertBefore(c,t.firstChild):t.appendChild(c),c.outerHTML=o.map((function(t){return Vt(t)})).join("\n"),t.removeAttribute(n),a()})).catch(i)}}else a()}))}function ve(t){return dt.all([ge(t,":before"),ge(t,":after")])}function be(t){return!(t.parentNode===document.head||~O.indexOf(t.tagName.toUpperCase())||t.getAttribute(_)||t.parentNode&&"svg"===t.parentNode.tagName)}function ye(t){if(y)return new dt((function(e,n){var a=vt(t.querySelectorAll("*")).filter(be).map(ve),r=Pt("searchPseudoElements");Qt=!0,dt.all(a).then((function(){r(),Zt(),e()})).catch((function(){r(),Zt(),n()}))}))}function we(){var t="fa",e=x,n=Y.familyPrefix,a=Y.replacementClass,r="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(a))}return r}function xe(){Y.autoAddCss&&!Ce&&(ht(we()),Ce=!0)}function ke(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Vt(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(y){var e=h.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function _e(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return qt(Oe.definitions,n,a)||qt(W.styles,n,a)}var Ae,Oe=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var n,a;return n=t,(a=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=r({},t.definitions[e]||{},i[e]),Lt(e,i[e]),Ht()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o})),t}}])&&e(n.prototype,a),t}()),Ce=!1,Ee={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(y){xe();var e=t.node,n=void 0===e?h:e,a=t.callback,r=void 0===a?function(){}:a;return Y.searchPseudoElements&&ye(n),pe(n,r)}return dt.reject("Operation requires a DOM of some kind.")},css:we,insertCss:function(){Ce||(ht(we()),Ce=!0)},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===Y.autoReplaceSvg&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,q((function(){Me({autoReplaceSvgRoot:e}),te({treeCallback:pe,nodeCallback:he,pseudoElementsCallback:ye,observeMutationsRoot:n})}))}},Ne=(Ae=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?pt:n,i=e.symbol,o=void 0!==i&&i,c=e.mask,s=void 0===c?null:c,l=e.maskId,f=void 0===l?null:l,u=e.title,d=void 0===u?null:u,m=e.titleId,p=void 0===m?null:m,h=e.classes,g=void 0===h?[]:h,v=e.attributes,b=void 0===v?{}:v,y=e.styles,w=void 0===y?{}:y;if(t){var x=t.prefix,k=t.iconName,_=t.icon;return ke(r({type:"icon"},t),(function(){return xe(),Y.autoA11y&&(d?b["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(p||gt()):(b["aria-hidden"]="true",b.focusable="false")),Ot({icons:{main:fe(_),mask:s?fe(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:r({},pt,a),symbol:o,title:d,maskId:f,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:_e(t||{}),a=e.mask;return a&&(a=(a||{}).icon?a:_e(a||{})),Ae(n,r({},e,{mask:a}))}),Se={noAuto:function(){Y.autoReplaceSvg=!1,Y.observeMutations=!1,$t&&$t.disconnect()},config:Y,dom:Ee,library:Oe,parse:{transform:function(t){return ee(t)}},findIconDefinition:_e,icon:Ne,text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?pt:n,i=e.title,c=void 0===i?null:i,s=e.classes,l=void 0===s?[]:s,f=e.attributes,u=void 0===f?{}:f,d=e.styles,m=void 0===d?{}:d;return ke({type:"text",content:t},(function(){return xe(),Ct({content:t,transform:r({},pt,a),title:c,extra:{attributes:u,styles:m,classes:["".concat(Y.familyPrefix,"-layers-text")].concat(o(l))}})}))},counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,c=e.attributes,s=void 0===c?{}:c,l=e.styles,f=void 0===l?{}:l;return ke({type:"counter",content:t},(function(){return xe(),Et({content:t.toString(),title:a,extra:{attributes:s,styles:f,classes:["".concat(Y.familyPrefix,"-layers-counter")].concat(o(i))}})}))},layer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classes,a=void 0===n?[]:n;return ke({type:"layer"},(function(){xe();var e=[];return t((function(t){Array.isArray(t)?t.map((function(t){e=e.concat(t.abstract)})):e=e.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(Y.familyPrefix,"-layers")].concat(o(a)).join(" ")},children:e}]}))},toHtml:Vt},Me=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=void 0===e?h:e;(Object.keys(W.styles).length>0||Y.autoFetchSvg)&&y&&Y.autoReplaceSvg&&Se.dom.i2svg({node:n})};!function(t){try{b&&(p.FontAwesome||(p.FontAwesome=Se),q((function(){Me(),te({treeCallback:pe,nodeCallback:he,pseudoElementsCallback:ye})}))),W.hooks=r({},W.hooks,{addPack:function(t,e){W.styles[t]=r({},W.styles[t]||{},e),Ht(),Me()},addShims:function(t){var e;(e=W.shims).push.apply(e,o(t)),Ht(),Me()}})}catch(t){if(!C)throw t}}()}()}}]);