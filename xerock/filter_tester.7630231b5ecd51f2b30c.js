(()=>{var e={1506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:e=>{e.exports=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},9100:(e,n,t)=>{var r=t(9489),o=t(7067);function i(n,t,c){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,n,t){var o=[null];o.push.apply(o,n);var i=new(Function.bind.apply(e,o));return t&&r(i,t.prototype),i},i.apply(null,arguments)}e.exports=i},3913:e=>{function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},9713:e=>{e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},9754:e=>{function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},2205:(e,n,t)=>{var r=t(9489);e.exports=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&r(e,n)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},7067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},8585:(e,n,t)=>{var r=t(8),o=t(1506);e.exports=function(e,n){return!n||"object"!==r(n)&&"function"!=typeof n?o(e):n}},9489:e=>{function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},n(t,r)}e.exports=n},8:e=>{function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},5957:(e,n,t)=>{var r=t(9754),o=t(9489),i=t(430),c=t(9100);function s(n){var t="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return c(e,arguments,r(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),o(n,e)},s(n)}e.exports=s},4630:(e,n,t)=>{"use strict";t(4575),t(3913),t(2205),t(8585),t(9754),t(7065),t(5334),t(6002),t(1996),t(3795)},4880:(e,n,t)=>{"use strict";t(4580)},4580:(e,n,t)=>{"use strict";t(4575),t(3913),t(4630),t(271),t(4880)},8336:(e,n,t)=>{"use strict";t.d(n,{w:()=>b});var r=t(4575),o=t.n(r),i=t(3913),c=t.n(i),s=t(2205),u=t.n(s),a=t(8585),l=t.n(a),d=t(9754),p=t.n(d),f=t(7065),v=t(271),h=(t(6001),t(2130));var b=function(e){u()(i,e);var n,t,r=(n=i,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(n);if(t){var o=p()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return l()(this,e)});function i(e,n){var t;return o()(this,i),(t=r.call(this))._model=e,t._view=n,t._view.on(h.$l.SET_FILTER,(function(e){return t.select(e,e.recursevely,e.unselect)})),t._model.on(h.$l.RENDER_DATA,(function(e){return t.emit(h.$l.RENDER_DATA,e)})).on(h.$l.RENDER_FILTER,(function(e){return t.emit(h.$l.RENDER_FILTER,e)})),t}return c()(i,[{key:"add_option",value:function(e){this._model.add_option(e)}},{key:"select",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this._model.select(e,n,t,r)}},{key:"filter",value:function(e){return this._model.filter(e)}},{key:"filter_options",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._model.filter_options(e,n)}},{key:"get",value:function(){return this._model.get()}},{key:"update",value:function(e){this._model.update(e)}}],[{key:"filter",value:function(e,n){return v.D.filter(e,n)}}]),i}(f.I)},8977:(e,n,t)=>{"use strict";t.d(n,{dV:()=>s,B9:()=>u}),t(9713);var r=t(5334),o=t(271),i=t(6001),c=t(8336);function s(e){var n={sid:{},time:null,dir:Object.keys(r.kc),type:Object.keys(r.DI),ctype:[],session:{},app:[]};return n.appf=Object.assign([],e.appf),n.ctype=Object.assign([],e.ctype),Object.keys(e.sid).forEach((function(t){n.sid[t]={},Object.keys(e[t]).forEach((function(r){n[t][r]=Object.assign([],e[t][r])}))})),Object.keys(e.session).forEach((function(t){n[t]=Object.assign([],e[t])})),n}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=new o.D(n,t);return new c.w(s,new i.W(s,e,r))}t(4580)},2124:(e,n,t)=>{"use strict";t.d(n,{d:()=>r});var r=document.createElement("template");r.innerHTML="\n<style>\n    .filter-row-attr\n    {\n        padding: 1px;\n        margin: 1px;\n        margin-left: 1px;\n        margin-right: 1px;\n        background-color: bisque;\n        display: inline-block;\n        border-radius: 5px;\n    }\n\n    .filter-button\n    {\n        outline: none;\n    }\n\n    .filter-button:hover\n    {\n        filter: brightness(115%);\n        cursor: pointer;\n    }\n\n    .filter-button:first-child\n    {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n    }\n\n    .filter-button:last-child\n    {\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n    .filter-selected{\n        border-style: inset;\n        background-color: darkgray;\n        color: white;\n    }\n\n    .filter-unselected{\n        border-style: outset;\n    }\n\n    /*\n    *\n    */\n    .filter-sid\n    {\n        background-color: bisque;\n        padding: 2px;\n        display: inline-flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        margin-right: 2px;\n        border-radius: 5px;\n        border: 3px solid brown;\n    }\n\n    .filter-sid-app\n    {\n        display: inline-block;\n        margin-right: 4px;\n    }\n\n    .filter-sid-app-id\n    {\n        display: inline-block;\n        margin-right: 4px;\n    }\n\n    .filter-button-app\n    {\n        border-top-right-radius: 0px !important;\n        border-bottom-right-radius: 0px !important;\n    }\n\n    .filter-button-id\n    {\n    /*    margin-right: 2px;*/\n    }\n\n    .filter-commands label\n    {\n        background-color: antiquewhite;\n        padding: 1px;\n        border-radius: 3px;\n    }\n</style>\n<div id=filter-list></div>"},2130:(e,n,t)=>{"use strict";t.d(n,{W_:()=>s,to:()=>u,PQ:()=>a,$l:()=>l});var r,o=t(9713),i=t.n(o),c=t(5334),s={sid:{value:"sid",name:"sid",decription:"Server ID"},dir:{value:"dir",name:"dir",description:"Message Direction"},type:{value:"type",name:"type",description:"Message Type"},ctype:{value:"ctype",name:"ctype",description:"Control Type"},session:{value:"session",name:"session",description:"Server ID session"},appf:{value:"appf",name:"appf",description:"Applications"}},u=(r={},i()(r,s.sid.value,{}),i()(r,s.dir.value,Object.keys(c.kc)),i()(r,s.type.value,Object.keys(c.DI)),i()(r,s.ctype.value,[]),i()(r,s.session.value,{}),i()(r,s.appf.value,[]),r),a={commands:!0,clear:!0,recursive:!0,recursive_checked:!0,unselect:!1,unselect_checked:!1},l={SET_FILTER:Symbol("set filter"),RENDER_FILTER:Symbol("render filter"),RENDER_DATA:Symbol("render data")}},5334:(e,n,t)=>{"use strict";t.d(n,{DI:()=>r,$M:()=>o,kc:()=>i}),t(4575),t(3913),t(8),t(1925);var r={data:{value:"data",name:"data"},control:{value:"control",name:"control"}};Object.freeze(r);var o={status:{value:"status",name:"status"},error:{value:"error",name:"error"},open:{value:"open",name:"open"},close:{value:"close",name:"close"},config:{value:"config",name:"config"},custom:{value:"custom",name:"custom"}};Object.freeze(o);var i={sent:{value:"sent",name:">>"},received:{value:"received",name:"<<"}};Object.freeze(i)},3795:(e,n,t)=>{"use strict";var r=t(4575),o=t.n(r),i=t(3913),c=t.n(i),s=0;new(function(){function e(){o()(this,e),this._session="-"}return c()(e,[{key:"id",value:function(){return 0}},{key:"addr",value:function(){return"local://127.0.0.1:0"}},{key:"full_addr",value:function(){return this.addr()}},{key:"name",value:function(){return"local"}},{key:"server_message_id",value:function(){return s++}},{key:"server_user_id",value:function(){return 0}},{key:"user_id",value:function(){return 1}},{key:"_save_connection",value:function(){app.configure().save_connection(this.id(),this.addr(),{name:this.name(),session:this.session})}},{key:"load_connection",value:function(e,n,t){this._session=Number.isInteger(t.session)?++t.session:0,this._save_connection()}},{key:"session",get:function(){return this._session}}]),e}())},6002:(e,n,t)=>{"use strict";Object.freeze({SEND_MESSAGE:"send message",INPUT_REGISTER:"input register",RECEIVED_MESSAGE:"received message",SENT:"sent",SHOW_MESSAGE:"show message",SERVER_NAME_CHANGE:"server name change",CLOSE_SERVER:"close server",SERVER_CONNECTED:"server connected",ADD_CONNECTION:"add connection",REMOVE_CONNECTION:"remove connection",ADD_APP:"new app added",ADD_LOCAL_APP:"new local pp added"}),Object.freeze({ID:"id",ID_STRING:"id_str",FROM:"from",FROM_STRING:"from_str",DATA_OUTPUT:"data_output",DATA_FIELD:"data_field"}),Object.freeze({plain:{value:"ws",name:"Plain"},secure:{value:"wss",name:"SSL"}}),Object.freeze({CONFIG_SEND:"config_send",CONFIG_RECEIVED:"config_recv",RECEIVED:"received",SENT:"sent"})},9018:(e,n,t)=>{"use strict";function r(e){return e.composedPath&&e.composedPath()||evt.path}t.d(n,{I:()=>r}),navigator.userAgent.includes("Chrome")&&navigator.vendor.includes("Google Inc")},1925:(e,n,t)=>{"use strict";t(8)},1996:(e,n,t)=>{"use strict";function r(e){return e instanceof Array?0==e.length:0===Object.keys(e).length&&e.constructor===Object}t.d(n,{H:()=>r}),t(8)},7065:(e,n,t)=>{"use strict";t.d(n,{I:()=>s});var r=t(4575),o=t.n(r),i=t(3913),c=t.n(i),s=function(){function e(){o()(this,e),this._events={}}return c()(e,[{key:"on",value:function(e,n){return(this._events[e]||(this._events[e]=[])).push(n),this}},{key:"emit",value:function(e,n){(this._events[e]||[]).slice().forEach((function(e){return e(n)}))}},{key:"clean",value:function(){this._events={}}}]),e}()},5121:(e,n,t)=>{"use strict";var r,o=t(4575),i=t.n(o),c=t(3913),s=t.n(c),u=t(2205),a=t.n(u),l=t(8585),d=t.n(l),p=t(9754),f=t.n(p),v=t(5957),h=t.n(v);(r=document.createElement("template")).innerHTML='\n<style>\n    :host{\n        display: inline-block;\n    }\n\n    :host([selected]) select\n    {\n        filter: brightness(0.5);\n    }\n\n    #select-box {\n        position: relative;\n    }\n\n    #select-box select \n    { \n        font-weight: bold;\n    }\n\n    #over-select {\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n    }\n\n    #checkboxes {\n        position: absolute;\n        background: white;\n        display: none;\n        border: 1px #dadada solid;\n        padding: 4px;\n        max-height: 100px;\n        overflow: auto;\n        z-index: 2;\n    }\n\n    #checkboxes label {\n        display: block;\n    }\n\n    #checkboxes label:hover {\n        background-color: #1e90ff;\n    }\n</style>\n\n<div id="select-box">\n    <select>\n        <option>Label</option>\n    </select>\n        <div id="over-select"></div>\n    </div>\n</div>\n<div id="checkboxes"></div>\n',customElements.define("select-checkbox",function(e){a()(c,e);var n,t,o=(n=c,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(n);if(t){var o=f()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return d()(this,e)});function c(){var e;i()(this,c);var n=(e=o.call(this)).attachShadow({mode:"open"});return n.appendChild(r.content.cloneNode(!0)),e._expanded=!1,e._checkboxes=n.getElementById("checkboxes"),e._label=n.querySelector("select option"),n.querySelector("#select-box").addEventListener("click",(function(n){e.toggle_view(),n.stopPropagation()})),e._checkboxes.addEventListener("click",(function(e){e.stopPropagation()})),e._checkboxes.addEventListener("change",(function(n){e.dispatchEvent(new CustomEvent("change",{detail:n}))})),window.addEventListener("click",(function(n){1==e._expanded&&e.hide()})),e}return s()(c,[{key:"connectedCallback",value:function(){this.hasAttribute("label")&&(this.label=this.getAttribute("label"))}},{key:"add_checkbox",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=document.createElement("label");return r.innerHTML="<input type=checkbox value=".concat(e," ").concat(t?"checked":"",">").concat(n),this._checkboxes.appendChild(r),r}},{key:"value",value:function(e){return this._checkboxes.querySelector("input[value=".concat(e,"]"))}},{key:"values",value:function(){return this._checkboxes.querySelectorAll("input[type=checkbox]")}},{key:"checked",value:function(){return this._checkboxes.querySelectorAll("input[type=checkbox]:checked")}},{key:"toggle_view",value:function(){this._expanded?this.hide():this.show()}},{key:"hide",value:function(){this._checkboxes.style.display="none",this._expanded=!1}},{key:"show",value:function(){this._checkboxes.style.display="block",this._expanded=!0}},{key:"label",set:function(e){this._label.textContent=e}}]),c}(h()(HTMLElement)));var b=t(8977),y=t(2130),m=t(5334),_={sid:{0:{webusb:[],webserial:[]},1:{main:[],tcp_server:["0.0.0.0:8089"],serial:[],echo:["1"]},2:{main:[],tcp_server:[],serial:[],echo:["2"],monitor:["2"]}},dir:Object.keys(m.kc),type:Object.keys(m.DI),ctype:Object.keys(m.$M),session:{0:["-",0,1,2],1:[4,5,6,8,9,12,20],2:[1,7,11]},appf:["webusb","webserial","main","tcp_server","serial","echo","monitor"]},g=(0,b.B9)(document.querySelector("#filter-container"),_,{},{unselect:!0});g.on(y.$l.RENDER_DATA,(function(e){document.querySelector("#filter-data").innerHTML=JSON.stringify(e,void 0,2)})),g.on(y.$l.RENDER_FILTER,(function(e){document.querySelector("#filter-options").innerHTML=JSON.stringify(e,void 0,2)})),g.emit(y.$l.RENDER_FILTER,g.filter_options()),g.emit(y.$l.RENDER_DATA,g.get())}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.x=e=>{},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.j=286,(()=>{var e={286:0},n=[[5121,577,568]],r=e=>{},o=(o,i)=>{for(var c,s,[u,a,l,d]=i,p=0,f=[];p<u.length;p++)s=u[p],t.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(c in a)t.o(a,c)&&(t.m[c]=a[c]);for(l&&l(t),o&&o(i);f.length;)f.shift()();return d&&n.push.apply(n,d),r()},i=self.webpackChunkweb=self.webpackChunkweb||[];function c(){for(var r,o=0;o<n.length;o++){for(var i=n[o],c=!0,s=1;s<i.length;s++){var u=i[s];0!==e[u]&&(c=!1)}c&&(n.splice(o--,1),r=t(t.s=i[0]))}return 0===n.length&&(t.x(),t.x=e=>{}),r}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var s=t.x;t.x=()=>(t.x=s||(e=>{}),(r=c)())})(),t.x()})();