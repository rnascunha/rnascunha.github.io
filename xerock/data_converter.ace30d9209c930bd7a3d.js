(()=>{var e={1506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},9100:(e,t,r)=>{var n=r(9489),a=r(7067);function o(t,r,i){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},o.apply(null,arguments)}e.exports=o},3913:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},9713:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},9754:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},2205:(e,t,r)=>{var n=r(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},7067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},8585:(e,t,r)=>{var n=r(8),a=r(1506);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}},9489:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},8:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},5957:(e,t,r)=>{var n=r(9754),a=r(9489),o=r(430),i=r(9100);function u(t){var r="function"==typeof Map?new Map:void 0;return e.exports=u=function(e){if(null===e||!o(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return i(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),a(t,e)},u(t)}e.exports=u},3292:(e,t,r)=>{"use strict";r.d(t,{y:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r=p(p({},{sep:" ",aggregate:0,pad_size:8,pad_char:"0"}),r),s.lR._set_arr_option(e.to_arr(t,r),r)}},{key:"to_arr",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s.lR.raw(t);r=p(p({},{sep:" ",aggregate:0,pad_size:8,pad_char:"0"}),r);var a=[];return n.forEach((function(t){a.push(s.lR._set_data_opt(e.to_binary_string(t),r))})),a}},{key:"from",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.assert("string"==typeof t,"Argument must be a string");var n=p(p({},{separator:" ",padding:!0}),r);if(t=s.lR._separator(t,n.separator,e.clear_no_binary_char,""),!e.is_binary_string(t))throw new s.kc(l.GR.INVALID_CHAR,t);if(!n.padding&&t.length%8)throw new s.kc(l.GR.INVALID_SIZE,t.length%8);var a=t.match(/[01]{1,8}/gi).map((function(e){return parseInt(e,2)}));return a}},{key:"to_binary_string",value:function(e){if(!("number"==typeof e&&e>=0&&e<=255))throw new s.kc(l.GR.WRONG_ARGUMENT,e);return e.toString(2)}},{key:"clear_no_binary_char",value:function(e){return e.replace(/[^01]/g,"")}},{key:"is_binary_char",value:function(e){return"1"===e||"0"===e}},{key:"is_binary_string",value:function(t){for(var r=0,n=t.length;r<n;r++)if(!e.is_binary_char(t[r]))return!1;return!0}},{key:"num_bytes",value:function(){return 1}}]),e}()},3414:(e,t,r)=>{"use strict";r.d(t,{g:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r=p(p({},{sep:" ",aggregate:2,pad_size:2,pad_char:"0"}),r),s.lR._set_arr_option(e.to_arr(t,r),r)}},{key:"to_arr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s.lR.raw(e);t=p(p({},{sep:" ",aggregate:2,pad_size:2,pad_char:"0"}),t);var n=[];return r.forEach((function(e){n.push(s.lR._set_data_opt(s.lR.to_hex_string(e,t.uppercase),t))})),n}},{key:"from",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.assert("string"==typeof t,"Argument must be a string");var n=p(p({},{separator:" ",padding:!0}),r);if(t=s.lR._separator(t,n.separator,e.clear_no_hex_char,""),!e.is_hex_string(t))throw new s.kc(l.GR.INVALID_CHAR,t);if(!n.padding&&t.length%2)throw new s.kc(l.GR.INVALID_SIZE,t.length%2);var a=t.match(/[\da-fA-F]{1,2}/gi).map((function(e){return parseInt(e,16)}));return a}},{key:"clear_no_hex_char",value:function(e){return e.replace(/[^0-9a-f]/gi,"")}},{key:"is_hex_char",value:function(e){return e>="0"&&e<="9"||e>="a"&&e<="f"||e>="A"&&e<="F"}},{key:"is_hex_string",value:function(t){for(var r=0,n=t.length;r<n;r++)if(!e.is_hex_char(t[r]))return!1;return!0}},{key:"num_bytes",value:function(){return 1}}]),e}()},8938:(e,t,r)=>{"use strict";r.d(t,{G:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),n),s.lR._set_arr_option(e.to_arr(t,r,n),n)}},{key:"to_arr",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s.lR.raw(e);r=p(p({},{padding:!0,sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r);var a=[],o=new DataView(new Uint8Array(n).buffer),i=o.byteLength%2;if(!r.padding&&i)throw new s.kc(l.GR.INVALID_SIZE,i);for(var u=o.byteLength/2-i,c=0;c<u;c++)a.push(s.lR._set_data_opt(o.getInt16(2*c,t),r));if(i){var f=new ArrayBuffer(2),v=new Uint8Array(f);v.set(n.slice(-i),2-i),a.push(s.lR._set_data_opt(new DataView(v.buffer).getInt16(0,t),r))}return a}},{key:"from",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.assert("string"==typeof t,"Argument must be a string");var a=p(p({},{separator:" "}),n);if(t=s.lR._separator(t,a.separator,null," "),void 0!==a.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var o=t.match(/[+-]{0,1}[0-9]+/gi);if(!o)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(o=o.map((function(e){return parseInt(e,10)})),!e.is_int16_array(o))throw new s.kc(l.GR.OUT_OF_BOUND,o);var i=new ArrayBuffer(2*o.length),u=new DataView(i);o.forEach((function(e,t){u.setInt16(2*t,e,r)}));var c=new Uint8Array(i),f=[];return c.forEach((function(e){return f.push(e)})),f}},{key:"is_int16_array",value:function(t){return t.every((function(t){return e.is_int16_num(t)}))}},{key:"is_int16_num",value:function(e){return e>=-32768&&e<=32767}},{key:"num_bytes_int16",value:function(){return 2}}]),e}()},8567:(e,t,r)=>{"use strict";r.d(t,{M:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),n),s.lR._set_arr_option(e.to_arr(t,r,n),n)}},{key:"to_arr",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s.lR.raw(e);r=p(p({},{padding:!0,sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r);var a=[],o=new DataView(new Uint8Array(n).buffer),i=o.byteLength%4;if(!r.padding&&i)throw new s.kc(l.GR.INVALID_SIZE,i);for(var u=o.byteLength/4-i,c=0;c<u;c++)a.push(s.lR._set_data_opt(o.getInt32(4*c,t),r));if(i){var f=new ArrayBuffer(4),v=new Uint8Array(f);v.set(n.slice(-i),4-i),a.push(s.lR._set_data_opt(new DataView(v.buffer).getInt32(0,t),r))}return a}},{key:"from",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.assert("string"==typeof t,"Argument must be a string");var a=p(p({},{separator:" "}),n);if(t=s.lR._separator(t,a.separator,null," "),void 0!==a.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var o=t.match(/[+-]{0,1}[0-9]+/gi);if(!o)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(o=o.map((function(e){return parseInt(e,10)})),!e.is_int32_array(o))throw new s.kc(l.GR.OUT_OF_BOUND,o);var i=new ArrayBuffer(4*o.length),u=new DataView(i);o.forEach((function(e,t){u.setInt32(4*t,e,r)}));var c=new Uint8Array(i),f=[];return c.forEach((function(e){return f.push(e)})),f}},{key:"is_int32_num",value:function(e){return e>=-2147483648&&e<=2147483647}},{key:"is_int32_array",value:function(t){return t.every((function(t){return e.is_int32_num(t)}))}},{key:"num_bytes_int32",value:function(){return 4}}]),e}()},3090:(e,t,r)=>{"use strict";r.d(t,{V:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),n),s.lR._set_arr_option(e.to_arr(t,r,n),n)}},{key:"to_arr",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s.lR.raw(e);r=p(p({},{padding:!0,sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r);var a=[],o=new DataView(new Uint8Array(n).buffer),i=o.byteLength%8;if(!r.padding&&i)throw new s.kc(l.GR.INVALID_SIZE,i);for(var u=o.byteLength/8-i,c=0;c<u;c++)a.push(s.lR._set_data_opt(o.getBigInt64(8*c,t),r));if(i){var f=new ArrayBuffer(8),v=new Uint8Array(f);v.set(n.slice(-i),8-i),a.push(s.lR._set_data_opt(new DataView(v.buffer).getBigInt64(0,t),r))}return a}},{key:"from",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.assert("string"==typeof t,"Argument must be a string");var a=p(p({},{separator:" "}),n);if(t=s.lR._separator(t,a.separator,null," "),void 0!==a.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var o=t.match(/[-+]{0,1}[0-9]+/gi);if(!o)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(o=o.map((function(e){return parseInt(e,10)})),!e.is_int64_array(o))throw new s.kc(l.GR.OUT_OF_BOUND,o);var i=new ArrayBuffer(8*o.length),u=new DataView(i);o.forEach((function(e,t){u.setBigInt64(8*t,BigInt(e),r)}));var c=new Uint8Array(i),f=[];return c.forEach((function(e){return f.push(e)})),f}},{key:"is_int64_num",value:function(e){return e>=-0x8000000000000000&&e<=0x8000000000000000}},{key:"is_int64_array",value:function(t){return t.every((function(t){return e.is_int64_num(t)}))}},{key:"num_bytes_int64",value:function(){return 8}}]),e}()},5517:(e,t,r)=>{"use strict";r.d(t,{f:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r),s.lR._set_arr_option(e.to_arr(t,r),r)}},{key:"to_arr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s.lR.raw(e);t=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),t);var n=[],a=new Int8Array(r);return a.forEach((function(e){n.push(s.lR._set_data_opt(e,t))})),n}},{key:"from",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.assert("string"==typeof t,"Argument must be a string");var n=p(p({},{separator:" "}),r);if(t=s.lR._separator(t,n.separator,null," "),void 0!==n.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var a=t.match(/[+-]{0,1}[0-9]+/gi);if(!a)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(a=a.map((function(e){return parseInt(e,10)})),!e.is_int8_array(a))throw new s.kc(l.GR.OUT_OF_BOUND,a);var o=[],i=new Uint8Array(a);return i.forEach((function(e){return o.push(e)})),o}},{key:"is_int8_num",value:function(e){return e>=-128&&e<=127}},{key:"is_int8_array",value:function(t){return t.every((function(t){return e.is_int8_num(t)}))}},{key:"num_bytes",value:function(){return 1}}]),e}()},9709:(e,t,r)=>{"use strict";r.d(t,{a:()=>p});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(5797);var p=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s.lR.raw(t),a=r.hasOwnProperty("prefix")?r.prefix:"\\x",o=r.hasOwnProperty("suffix")?r.suffix:"";r.pad_size=r.hasOwnProperty("pad_size")?r.pad_size:2,r.pad_char=r.hasOwnProperty("pad_char")?r.pad_char:"0";var i="";return n.forEach((function(t){i+=e.is_ascii_int(t)?String.fromCharCode(t):a+s.lR._set_data_opt(s.lR.to_hex_string(t),r)+o})),i}},{key:"from",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.assert("string"==typeof e,"Argument must be a string");var r=f(f({},{escaped_string:!0}),t),n=[];if(r.escaped_string)n=(0,s.Fg)(e);else{n=[];for(var a=0,o=e.length;a<o;a++)n.push(e.charCodeAt(a))}return n}},{key:"is_ascii_int",value:function(e){return e>=32&&e<126}},{key:"is_ascii_char",value:function(e){return 1===e.length}},{key:"is_ascii_string",value:function(t){for(var r=0,n=t.length;r<n;r++)if(!e.is_ascii_char(t[r]))return!1;return!0}},{key:"clear_no_digit_char",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=f(f({},{allowed:" "}),t),e.replace(new RegExp("[^0-9".concat(t.allowed,"]"),"g"),"")}},{key:"num_bytes",value:function(){return 1}}]),e}()},8639:(e,t,r)=>{"use strict";r.d(t,{p:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),n),s.lR._set_arr_option(e.to_arr(t,r,n),n)}},{key:"to_arr",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s.lR.raw(e);r=p(p({},{padding:!0,sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r);var a=[],o=new DataView(new Uint8Array(n).buffer),i=o.byteLength%2;if(!r.padding&&i)throw new s.kc(l.GR.INVALID_SIZE,i);for(var u=o.byteLength/2-i,c=0;c<u;c++)a.push(s.lR._set_data_opt(o.getUint16(2*c,t),r));if(i){var f=new ArrayBuffer(2),v=new Uint8Array(f);v.set(n.slice(-i),2-i),a.push(s.lR._set_data_opt(new DataView(v.buffer).getInt16(0,t),r))}return a}},{key:"from",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=p(p({},{separator:" "}),n);if(t=s.lR._separator(t,a.separator,null," "),void 0!==a.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var o=t.match(/[+-]{0,1}[0-9]+/gi);if(!o)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(o=o.map((function(e){return parseInt(e,10)})),!e.is_uint16_array(o))throw new s.kc(l.GR.OUT_OF_BOUND,o);var i=new ArrayBuffer(2*o.length),u=new DataView(i);o.forEach((function(e,t){u.setUint16(2*t,e,r)}));var c=new Uint8Array(i),f=[];return c.forEach((function(e){return f.push(e)})),f}},{key:"is_uint16_num",value:function(e){return e>=0&&e<=65535}},{key:"is_uint16_array",value:function(t){return t.every((function(t){return e.is_uint16_num(t)}))}},{key:"num_bytes",value:function(){return 2}}]),e}()},6850:(e,t,r)=>{"use strict";r.d(t,{E:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),n),s.lR._set_arr_option(e.to_arr(t,r,n),n)}},{key:"to_arr",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s.lR.raw(e);r=p(p({},{padding:!0,sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r);var a=[],o=new DataView(new Uint8Array(n).buffer),i=o.byteLength%4;if(!r.padding&&i)throw new s.kc(l.GR.INVALID_SIZE,i);for(var u=o.byteLength/4-i,c=0;c<u;c++)a.push(s.lR._set_data_opt(o.getUint32(4*c,t),r));if(i){var f=new ArrayBuffer(4),v=new Uint8Array(f);v.set(n.slice(-i),4-i),a.push(s.lR._set_data_opt(new DataView(v.buffer).getUint32(0,t),r))}return a}},{key:"from",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.assert("string"==typeof t,"Argument must be a string");var a=p(p({},{separator:" "}),n);if(t=s.lR._separator(t,a.separator,null," "),void 0!==a.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var o=t.match(/[+-]{0,1}[0-9]+/gi);if(!o)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(o=o.map((function(e){return parseInt(e,10)})),!e.is_uint32_array(o))throw new s.kc(l.GR.OUT_OF_BOUND,o);var i=new ArrayBuffer(4*o.length),u=new DataView(i);o.forEach((function(e,t){u.setUint32(4*t,e,r)}));var c=new Uint8Array(i),f=[];return c.forEach((function(e){return f.push(e)})),f}},{key:"is_uint32_num",value:function(e){return e>=0&&e<=4294967295}},{key:"is_uint32_array",value:function(t){return t.every((function(t){return e.is_uint32_num(t)}))}},{key:"num_bytes",value:function(){return 4}}]),e}()},8083:(e,t,r)=>{"use strict";r.d(t,{d:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),n),s.lR._set_arr_option(e.to_arr(t,r,n),n)}},{key:"to_arr",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s.lR.raw(e);r=p(p({},{padding:!0,sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r);var a=[],o=new DataView(new Uint8Array(n).buffer),i=o.byteLength%8;if(!r.padding&&i)throw new s.kc(l.GR.INVALID_SIZE,i);for(var u=o.byteLength/8-i,c=0;c<u;c++)a.push(s.lR._set_data_opt(o.getBigUint64(8*c,t),r));if(i){var f=new ArrayBuffer(8),v=new Uint8Array(f);v.set(n.slice(-i),8-i),a.push(s.lR._set_data_opt(new DataView(v.buffer).getBigUint64(0,t),r))}return a}},{key:"from",value:function(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.assert("string"==typeof t,"Argument must be a string");var a=p(p({},{separator:" "}),n);if(t=s.lR._separator(t,a.separator,null," "),void 0!==a.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var o=t.match(/[-+]{0,1}[0-9]+/gi);if(!o)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(o=o.map((function(e){return parseInt(e,10)})),!e.is_uint64_array(o))throw new s.kc(l.GR.OUT_OF_BOUND,o);var i=new ArrayBuffer(8*o.length),u=new DataView(i);o.forEach((function(e,t){u.setBigUint64(8*t,BigInt(e),r)}));var c=new Uint8Array(i),f=[];return c.forEach((function(e){return f.push(e)})),f}},{key:"is_uint64_num",value:function(e){return e>=0&&e<=0x10000000000000000}},{key:"is_uint64_array",value:function(t){return t.every((function(t){return e.is_uint64_num(t)}))}},{key:"num_bytes_uint64",value:function(){return 8}}]),e}()},4964:(e,t,r)=>{"use strict";r.d(t,{H:()=>v});var n=r(9713),a=r.n(n),o=r(4575),i=r.n(o),u=r(3913),c=r.n(u),s=r(6251),l=r(5797);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){i()(this,e)}return c()(e,null,[{key:"to",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),r),s.lR._set_arr_option(e.to_arr(t,r),r)}},{key:"to_arr",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=s.lR.raw(e);t=p(p({},{sep:" ",aggregate:0,pad_size:0,pad_char:" "}),t);var n=[],a=new Uint8Array(r);return a.forEach((function(e){n.push(s.lR._set_data_opt(e,t))})),n}},{key:"from",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.assert("string"==typeof t,"Argument must be a string");var n=p(p({},{separator:" "}),r);if(t=s.lR._separator(t,n.separator,null," "),void 0!==n.separator&&s.lR.invalid_number_char(t))throw new s.kc(l.GR.INVALID_CHAR,t);var a=t.match(/[+-]{0,1}[0-9]+/gi);if(!a)throw new s.kc(l.GR.WRONG_ARGUMENT,t);if(a=a.map((function(e){return parseInt(e,10)})),!e.is_uint8_array(a))throw new s.kc(l.GR.OUT_OF_BOUND,a);return a}},{key:"is_uint8_num",value:function(e){return e>=0&&e<=255}},{key:"is_uint8_array",value:function(t){return t.every((function(t){return e.is_uint8_num(t)}))}},{key:"num_bytes",value:function(){return 1}}]),e}()},3256:(e,t,r)=>{"use strict";var n=r(4575),a=r.n(n),o=r(3913),i=r.n(o),u=r(1506),c=r.n(u),s=r(2205),l=r.n(s),f=r(8585),p=r.n(f),v=r(9754),y=r.n(v),d=r(5957),_=r.n(d),h=r(9118),g=r(5797);!function(){var e=document.createElement("template");e.innerHTML="\n<style>\n    :host\n    {\n        display: inline-flex;\n        flex-direction: column;\n    }\n\n    #custom-container\n    {\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n    }\n\n    #error-item\n    {\n        display: inline-block;\n        box-sizing: border-box;\n        background-color: red;\n        color: white;\n        padding: 1px, 3px;\n    }\n\n    .custom-item\n    {\n        background-color: yellow;\n        padding: 4px;\n        display: inline-flex;\n        flex-direction: row;\n    }\n\n    .value\n    {\n        display: inline-block;\n        filter: invert(1);\n        /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */\n    }\n\n    .custom-item-opt\n    {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .custom-input\n    {\n        width: 100%;\n    }\n\n    .custom-close\n    {\n        background-color: white;\n        color: red;\n        padding: 2px 5px;\n        cursor: pointer;\n        border-radius: 3px;\n        display: flex;\n        align-items: center;\n    }\n\n    .custom-close:hover\n    {\n        background-color: red;\n        color: white;\n        box-sizing: content-box;\n    }\n</style>\n\n<div id=custom-container></div>\n<div>\n    <button id=add-custom>+</button>\n    <button id=calculate>calculate</button>\n    <span id=error-item>Error</span>\n    <slot></slot>\n</div>";var t=document.createElement("template");t.innerHTML="\n<div class=custom-item>\n    <div class=custom-item-opt-out>\n        <div class=custom-item-opt>\n            <select class=custom-select></select>\n            <input class=custom-input placeholder=value>\n        </div>\n        <div class=value></div>\n    </div>\n    <span class=custom-close>&times;</span>\n</div>",Object.keys(g.Nm).forEach((function(e){var r=document.createElement("option");r.textContent=g.Nm[e].name,r.value=g.Nm[e].value,t.content.querySelector(".custom-select").appendChild(r)})),customElements.define("custom-protocol",function(r){l()(s,r);var n,o,u=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y()(n);if(o){var r=y()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p()(this,e)});function s(){var t;a()(this,s);var r=(t=u.call(this)).attachShadow({mode:"open"});return r.appendChild(e.content.cloneNode(!0)),t._add_btn=r.querySelector("#add-custom"),t._custom_contaienr=r.querySelector("#custom-container"),t._calculate=r.querySelector("#calculate"),t._error_item_el=r.querySelector("#error-item"),t._byte_array=new h.O,t._add_btn.addEventListener("click",t.add.bind(c()(t))),t._calculate.addEventListener("click",(function(e){t.dispatchEvent(new CustomEvent("calculate",{detail:t.calculate(!0)}))})),t.error_item(!0),t}return i()(s,[{key:"connectedCallback",value:function(){this.hasAttribute("add-btn")&&this.show_add("false"!==this.getAttribute("add-btn")),this.hasAttribute("calculate-btn")&&this.show_calculate("false"!==this.getAttribute("calculate-btn"))}},{key:"show_add",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._add_btn.style.display=e?"inline-block":"none"}},{key:"show_calculate",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._calculate.style.display=e?"inline-block":"none"}},{key:"add",value:function(){var e=this,r=t.content.firstElementChild.cloneNode(!0),n=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}();r.style.backgroundColor=n,r.style.color=n,this._custom_contaienr.appendChild(r),r.querySelector(".custom-close").onclick=function(e){r.parentNode.removeChild(r)};var a=r.querySelector(".custom-input"),o=r.querySelector(".custom-select"),i=r.querySelector(".value"),u=function(t){if(null!==!a.value){switch(t.key){case"Escape":a.value=""}var r=o.selectedOptions[0].value;if(r)try{e._byte_array.from(a.value,r),i.textContent=e._byte_array.to(g.Nm.hex.value)}catch(e){i.textContent=e.message}else console.error("No data selected")}};a.addEventListener("keyup",u),o.addEventListener("change",u),a.focus()}},{key:"error_item",value:function(e){this._error_item_el.style.display=e?"none":"inline-block"}},{key:"calculate",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r={data:[],status:!0,items:[]};return this._custom_contaienr.querySelectorAll(".custom-item").forEach((function(t){var n,a=t.querySelector(".custom-select"),o=t.querySelector(".custom-input");try{e._byte_array.from(o.value,a.value),n=e._byte_array.raw(),r.data=r.data.concat(n)}catch(e){n={code:e.code,message:e.message,arg:e.arg},r.status=!1}r.items.push({selected:a.value,input:o.value,data:n,bg:t.style.backgroundColor})})),t&&this.error_item(r.status),r}}]),s}(_()(HTMLElement)))}();var b=document.querySelector("#data-input"),w=document.querySelector("#data-input-select"),m=document.querySelector("#padding"),O=document.querySelector("#data-table"),k=document.querySelector("#length"),j=document.querySelector("#data-output-raw"),R=document.querySelector("#error");function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];R.textContent=e+(t?" / arg=["+t+"]":""),R.style.display=e?"block":"none"}P();var E=[];Object.keys(g.Nm).forEach((function(e){var t=document.createElement("tr"),r=document.createElement("th"),n=document.createElement("td");n.setAttribute("id","data-output-"+g.Nm[e].value),r.textContent=g.Nm[e].name,r.title=g.Nm[e].long_name,t.appendChild(r),t.appendChild(n),O.appendChild(t),E.push([n,g.Nm[e].value]);var a=document.createElement("option");a.textContent=g.Nm[e].name,a.value=g.Nm[e].value,w.appendChild(a)}));var x=new h.O,D=function(e){if(null!==!b.value){if(e)switch(e.key){case"Escape":b.value=""}var t=function(e){for(var t,r=0,n=e.options.length;r<n&&!0!==(t=e.options[r]).selected;r++)t=!1;return t}(w);if(t)try{x.from(b.value,t.value,{padding:m.checked}),P(),j.textContent=x.raw_str(),j.classList.remove("error"),k.textContent=x.size(),E.forEach((function(e){try{e[0].textContent=x.to(e[1],{padding:m.checked}),e[0].classList.remove("error")}catch(t){e[0].textContent=t.message+(t.arg?" / arg=["+t.arg+"]":""),e[0].classList.add("error")}}))}catch(e){return j.classList.add("error"),k.textContent="null",P(e.message,e.arg),j.textContent="Fail conversion",void E.forEach((function(e){e[0].textContent="Fail conversion",e[0].classList.add("error")}))}else console.error("No data selected")}};function A(e,t){var r=document.createElement("span"),n=new h.O;return e.forEach((function(a,o){o&&(r.innerHTML+='<span style="background-image: linear-gradient(to right, '.concat(e[o-1].bg,", ").concat(a.bg,');"> </span>'));var i=document.createElement("span");i.style.backgroundColor=a.bg,n.raw(a.data),i.textContent=n.to(t),r.appendChild(i)})),r}b.addEventListener("keyup",D),w.addEventListener("change",D),m.addEventListener("change",D),document.querySelector("#custom-protocol").addEventListener("calculate",(function(e){var t=e.detail;if(t.status){x.raw(t.data),j.innerHTML="",j.appendChild(A(t.items,g.Nm.uint8.value)),[g.Nm.text,g.Nm.hex,g.Nm.binary,g.Nm.int8,g.Nm.uint8].forEach((function(e,r){E[r][0].innerHTML="",E[r][0].appendChild(A(t.items,e.value)),E[r][0].classList.remove("error")}));for(var r=Object.values(g.Nm),n=r.length,a=5;a<n;a++)E[a][0].textContent=x.to(r[a].value),E[a][0].classList.remove("error")}}))}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={549:0},t=[[3256,336,967,732]],n=e=>{},a=(a,o)=>{for(var i,u,[c,s,l,f]=o,p=0,v=[];p<c.length;p++)u=c[p],r.o(e,u)&&e[u]&&v.push(e[u][0]),e[u]=0;for(i in s)r.o(s,i)&&(r.m[i]=s[i]);for(l&&l(r),a&&a(o);v.length;)v.shift()();return f&&t.push.apply(t,f),n()},o=self.webpackChunkweb=self.webpackChunkweb||[];function i(){for(var n,a=0;a<t.length;a++){for(var o=t[a],i=!0,u=1;u<o.length;u++){var c=o[u];0!==e[c]&&(i=!1)}i&&(t.splice(a--,1),n=r(r.s=o[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var u=r.x;r.x=()=>(r.x=u||(e=>{}),(n=i)())})(),r.x()})();