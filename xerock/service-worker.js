if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-cd8cc49b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"data_converter.c74db71f5ff7b3d95248.js",revision:null},{url:"data_converter.css",revision:"f2fdebf26b622d5e1d03aba53189aa1c"},{url:"data_viewer.28d6a0b0803f37c33262.js",revision:null},{url:"data_viewer.css",revision:"5edf30a2e25716917405bee8ba0577a1"},{url:"favicon.ico",revision:"cc1046de1cd709f1ce9612ea78bc957e"},{url:"filter_tester.40539d0e71cd38d5f299.js",revision:null},{url:"filter_tester.css",revision:"ca26759db26a34005f5fc4b58efb66ef"},{url:"icon-192x192.png",revision:"79580b6028cc61e67318b4cda22d2411"},{url:"icon-256x256.png",revision:"441e4d20dd7212e73b1444826ac14dad"},{url:"icon-384x384.png",revision:"05f9a7ffba90b970b58a4930750739ac"},{url:"icon-512x512.png",revision:"993228f1ec771542b845174f82281626"},{url:"index.bcc84bb6805811021bac.js",revision:null},{url:"index.css",revision:"6748e325ffb538944b4c2aaa95631732"},{url:"index.html",revision:"b7a50b66786bcb9c6d7539db21de7eac"},{url:"manifest.json",revision:"a8dbb874aebc8696b9a8f3eb76906986"},{url:"tools/data_converter.html",revision:"3e5b10ddb0daa76954e7383386e465ec"},{url:"tools/data_viewer.html",revision:"78eadda72de0a5191974b03972e84133"},{url:"tools/filter_tester.html",revision:"d82f5464b9659a3e6e11d03b6a57795a"},{url:"vendor-locale.js.2a37dff9d4e040802c55.js",revision:null},{url:"vendor-model.js.9c67d1ab9b02f89e09f6.js",revision:null},{url:"vendor-types.js.24f31502c1fc360f8d61.js",revision:null},{url:"vendor-view.js.8c243f1a09520dea2b1c.js",revision:null},{url:"vendor-xterm.js.bc0b2613abd26cf40f9f.js",revision:null}],{}),e.registerRoute(/.*/,new e.StaleWhileRevalidate,"GET")}));
