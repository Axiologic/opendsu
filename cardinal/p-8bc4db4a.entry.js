import{r as e,h as t,g as n}from"./p-83ba3037.js";import"./p-5aa8f28a.js";import{i as o}from"./p-fd9161e6.js";import"./p-d9d3000e.js";import"./p-de9d826d.js";import{T as r}from"./p-0df30512.js";import{C as i}from"./p-c49427b9.js";import{C as s}from"./p-c68ecd54.js";bindableModelRequire=function e(t,n,o){function r(s,u){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!u&&l)return l(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var a=n[s]={exports:{}};t[s][0].call(a.exports,(function(e){return r(t[s][1][e]||e)}),a,a.exports,e,t,n,o)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)r(o[s]);return r}({"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\builds\\tmp\\bindableModel.js":[function(e){void 0===window.process&&(window.process={}),e("./bindableModel_intermediar")},{"./bindableModel_intermediar":"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\builds\\tmp\\bindableModel_intermediar.js"}],"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\builds\\tmp\\bindableModel_intermediar.js":[function(e){(function(t){t.bindableModelLoadModules=function(){void 0===$$.__runtimeModules["overwrite-require"]&&($$.__runtimeModules["overwrite-require"]=e("overwrite-require")),void 0===$$.__runtimeModules.queue&&($$.__runtimeModules.queue=e("queue")),void 0===$$.__runtimeModules.soundpubsub&&($$.__runtimeModules.soundpubsub=e("soundpubsub")),void 0===$$.__runtimeModules["psk-bindable-model"]&&($$.__runtimeModules["psk-bindable-model"]=e("psk-bindable-model"))},t.bindableModelRequire=e,"undefined"!=typeof $$&&$$.requireBundle("bindableModel")}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"overwrite-require":"overwrite-require","psk-bindable-model":"psk-bindable-model",queue:"queue",soundpubsub:"soundpubsub"}],"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\overwrite-require\\moduleConstants.js":[function(e,t){t.exports={BROWSER_ENVIRONMENT_TYPE:"browser",SERVICE_WORKER_ENVIRONMENT_TYPE:"service-worker",ISOLATE_ENVIRONMENT_TYPE:"isolate",THREAD_ENVIRONMENT_TYPE:"thread",NODEJS_ENVIRONMENT_TYPE:"nodejs"}},{}],"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js":[function(e){(function(t){let n=console;if(t.process&&"true"===process.env.NO_LOGS)console.log("Environment flag NO_LOGS is set, logging to console");else try{e("zeromq");const t=e("psklogger");n=t.PSKLogger.getLogger(),console.log("Logger init successful",process.pid)}catch(e){-1!==e.message.indexOf("psklogger")||-1!==e.message.indexOf("zeromq")?(console.log("Logger not available, using console"),n=console):console.log(e)}$$.registerGlobalSymbol=function(e,t){void 0===$$[e]?Object.defineProperty($$,e,{value:t,writable:!1}):n.error("Refusing to overwrite $$."+e)},console.warn=(...e)=>{console.log(...e)},$$.registerGlobalSymbol("autoThrow",(function(e){if(!e)throw e})),$$.registerGlobalSymbol("propagateError",(function(e,t){if(e)throw t(e),e})),$$.registerGlobalSymbol("logError",(function(e){e&&(console.log(e),$$.err(e))})),console.log("Fix the fixMe to not display on console but put in logs"),$$.registerGlobalSymbol("fixMe",(function(){})),$$.registerGlobalSymbol("exception",(function(e){throw new Error(e)})),$$.registerGlobalSymbol("throw",(function(e){throw new Error(e)})),$$.incomplete=function(...e){e.unshift("Incomplete feature touched:"),n.warn(...e)},$$.notImplemented=$$.incomplete,$$.registerGlobalSymbol("assert",(function(e,t){if(!e)throw new Error("Assert false "+t)})),$$.registerGlobalSymbol("flags",(function(){$$.incomplete("flags handling not implemented")})),$$.registerGlobalSymbol("obsolete",(function(...e){e.unshift("Obsolete feature:"),n.log(...e),console.log(...e)})),$$.registerGlobalSymbol("log",(function(...e){e.unshift("Log:"),n.log(...e)})),$$.registerGlobalSymbol("info",(function(...e){e.unshift("Info:"),n.log(...e),console.log(...e)})),$$.registerGlobalSymbol("err",(function(...e){e.unshift("Error:"),n.error(...e),console.error(...e)})),$$.registerGlobalSymbol("error",(function(...e){e.unshift("Error:"),n.error(...e),console.error(...e)})),$$.registerGlobalSymbol("warn",(function(...e){e.unshift("Warn:"),n.warn(...e),console.log(...e)})),$$.registerGlobalSymbol("syntaxError",(function(...e){e.unshift("Syntax error:"),n.error(...e);try{throw new Error("Syntax error or misspelled symbol!")}catch(t){console.error(...e),console.error(t.stack)}})),$$.invalidMemberName=function(e,t){let o="unknown";t&&t.meta&&(o=t.meta.swarmTypeName);const r="Invalid member name "+e+"in swarm "+o;console.error(r),n.err(r)},$$.registerGlobalSymbol("invalidSwarmName",(function(e){const t="Invalid swarm name "+e;console.error(t),n.err(t)})),$$.registerGlobalSymbol("unknownException",(function(...e){e.unshift("unknownException:"),n.err(...e),console.error(...e)})),$$.registerGlobalSymbol("event",(function(e,...t){n.hasOwnProperty("event")?n.event(e,...t):"status.domains.boot"===e&&console.log("Failing to console...",e,...t)})),$$.registerGlobalSymbol("redirectLog",(function(e,t){n.hasOwnProperty("redirect")&&n.redirect(e,t)})),$$.registerGlobalSymbol("throttlingEvent",(function(...e){n.log(...e)}))}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{psklogger:!1}],"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\psk-bindable-model\\lib\\PskBindableModel.js":[function(e,t){const n=e("soundpubsub").soundPubSub,o=["copyWithin","fill","pop","push","reverse","shift","slice","sort","splice","unshift"];n.registerCompactor("chainChanged",(function(e,t){if("chainChanged"===e.type)return t}));let r=0;t.exports=class{static setModel(e){let t=void 0,i="Model."+r+".",s=new Set;const u={};function l(e,t){return e?e+"."+t:t}function c(e){return i+e}function a(e){return function(n,o,r){let i=l(e,o);return n[o]=r&&"object"==typeof r?f(r,i):r,t.notify(i),!0}}function f(e,r){if("object"!=typeof e)return e;let i,u,d,p,h=!r;h&&(i=function(e){(function(e){let t=new Set;t.add("*");let n=e.split(".").map(e=>e.trim()),o="";for(let e=0;e<n.length;e++)0!==e?o+="."+n[e]:o=n[e],t.add(o);return s.forEach(n=>{n.startsWith(e)&&t.add(n)}),t})(e).forEach(e=>{n.publish(c(e),{type:"chainChanged",chain:e})})},d=function(e){return e?e.split(".").map(e=>e.trim()).reduce((e,t)=>{if(null!=e)return e[t]},t):t},p=function(e,n){return e.split(".").map(e=>e.trim()).reduce((e,t,o,r)=>{if(null!=e)return o===r.length-1?(e[t]=n,!0):e=e[t]},t)},u=function(e,t){s.add(e),n.subscribe(c(e),t)});let b=a(r),w={apply:function(){throw new Error("A function call was not expected inside proxy!")},constructor:function(){throw new Error("A constructor call was not expected inside proxy!")},isExtensible:function(e){return Reflect.isExtensible(e)},preventExtensions:function(e){return Reflect.preventExtensions(e)},get:function(e,t){if(h)switch(t){case"onChange":return u;case"notify":return i;case"getChainValue":return d;case"setChainValue":return p}return e[t]},set:a(r),deleteProperty:function(e,t){delete e[t]},ownKeys:function(e){return Reflect.ownKeys(e)},has:function(e,t){return t in e},defineProperty:function(e,t,n){let o=Object.assign({},n);return o.set=function(e,t,o){n.hasOwnProperty("set")&&n.set(e,t,o),b(e,t,o)},Object.defineProperty(e,t,o)},getOwnPropertyDescriptor:function(e,t){return Object.getOwnPropertyDescriptor(e,t)},getPrototypeOf:function(e){return Reflect.getPrototypeOf(e)},setPrototypeOf:function(e,t){Reflect.setPrototypeOf(e,t)}};return Array.isArray(e)&&(w.get=function(e){return function(n,r){const i=n[r];if("function"==typeof i)switch(r){case"push":return function(e,n){return function(){try{let o=Array.prototype.push.apply(e,arguments);return t.notify(l(n,o-1)),o}catch(e){throw console.log("An error occurred in Proxy"),e}}}(n,e);default:return function(e,n,r){return function(){try{let i=Array.prototype[e].apply(n,arguments);return-1!==o.indexOf(e)&&t.notify(r),i}catch(e){throw console.log("An error occurred in Proxy"),e}}}(r,n,e)}return i}}(r)),Object.keys(e).forEach(t=>{e[t]&&(e[t]=f(e[t],l(r,t)))}),new Proxy(e,w)}return r++,t=f(e),t.toObject=function(e){let n={};return e?"string"==typeof e&&(n=t.getChainValue(e)):n=t,n&&"object"==typeof n?JSON.parse(JSON.stringify(n)):n},t.addExpression=function(e,n,...o){if("string"!=typeof e||!e.length)throw new Error("Expression name must be a valid string");if("function"!=typeof n)throw new Error("Expression must have a callback");let r=[];if(o.length){let e=o;Array.isArray(e[0])&&(e=e[0]),r=e.filter(e=>"string"==typeof e&&e.length)}u[e]={watchChain:r,callback:function(){return n.call(t)}}},t.evaluateExpression=function(e){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);return u[e].callback()},t.hasExpression=function(e){return"object"==typeof u[e]&&"function"==typeof u[e].callback},t.onChangeExpressionChain=function(e,t){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);const n=u[e];if(n.watchChain.length)for(let e=0;e<n.watchChain.length;e++)this.onChange(n.watchChain[e],t)},t}}},{soundpubsub:"soundpubsub"}],"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\soundpubsub\\lib\\soundPubSub.js":[function(e,t,n){const o=e("queue");n.soundPubSub=new function(){this.publish=function(e,s){return a(e)||function(e){var t=!1;return e&&"object"==typeof e||(t=!0,wprint("Invalid messages types: "+e)),t}(s)||void 0===t[e]?null:(function(e,t){var s=!1,u=n[e];if(void 0===u&&(u=new o,n[e]=u),t&&void 0!==t.type){var l=r[t.type];if(void 0!==l)for(let e of u)if(l(t,e)===e&&void 0===e.__transmisionIndex){s=!0;break}}!s&&t&&(u.push(t),i.push(e))}(e,s),setTimeout(u,0),t[e].length)},this.subscribe=function(e,n,o,r){if(!a(e)&&!f(n)){var i={callBack:n,waitForMore:o,filter:r},s=t[e];void 0===s&&(t[e]=s=[]),s.push(i)}},this.unsubscribe=function(e,n,o){if(!f(n)){var r=!1;if(t[e])for(var i=0;i<t[e].length;i++){var s=t[e][i];s.callBack!==n||void 0!==o&&s.filter!==o||(r=!0,s.forDelete=!0,s.callBack=void 0,s.filter=void 0)}r||wprint("Unable to unsubscribe a callback that was not subscribed!")}},this.blockCallBacks=function(){s++},this.releaseCallBacks=function(){for(s--;0===s&&u(!0););for(;0===s&&c(););},this.afterAllEvents=function(e){f(e)||l.push(e),this.blockCallBacks(),this.releaseCallBacks()},this.hasChannel=function(e){return!a(e)&&void 0!==t[e]},this.addChannel=function(e){a(e)||this.hasChannel(e)||(t[e]=[])};var e=this,t={},n={},r={},i=new o,s=0;function u(o){if(s>0)return!1;const r=i.front();if(void 0!==r){e.blockCallBacks();try{let e;if(n[r].isEmpty()||(e=n[r].front()),void 0===e)n[r].isEmpty()||wprint("Can't use as message in a pub/sub channel this object: "+e),i.pop();else{if(void 0===e.__transmisionIndex){e.__transmisionIndex=0;for(var u=t[r].length-1;u>=0;u--){var l=t[r][u];!0===l.forDelete&&t[r].splice(u,1)}}else e.__transmisionIndex++;void 0===e.__transmisionIndex&&wprint("Can't use as message in a pub/sub channel this object: "+e),void 0===(l=t[r][e.__transmisionIndex])?(delete e.__transmisionIndex,n[r].pop()):(null==l.filter||!f(l.filter)&&l.filter(e))&&(l.forDelete||(l.callBack(e),!l.waitForMore||f(l.waitForMore)||l.waitForMore(e)||(l.forDelete=!0)))}}catch(e){wprint("Event callback failed: "+l.callBack+"error: "+e.stack)}return o?s--:e.releaseCallBacks(),!0}return!1}this.registerCompactor=function(e,t){f(t)||(r[e]=t)};var l=new o;function c(){return l.isEmpty()||l.pop()(),!l.isEmpty()}function a(e){var t=!1;return(!e||"string"!=typeof e&&"number"!=typeof e)&&(t=!0,wprint("Invalid channel name: "+e)),t}function f(e){var t=!1;return e&&"function"==typeof e||(t=!0,wprint("Expected to be function but is: "+e)),t}}},{queue:"queue"}],"overwrite-require":[function(e,t){(function(n){t.exports={enableForEnvironment:function(t){const o=e("./moduleConstants");switch(t){case o.BROWSER_ENVIRONMENT_TYPE:n=window;break;case o.SERVICE_WORKER_ENVIRONMENT_TYPE:n=self}void 0===n.$$&&(n.$$={}),void 0===$$.__global&&($$.__global={}),Object.defineProperty($$,"environmentType",{get:function(){return t},set:function(){throw Error("Environment type already set!")}}),void 0===$$.__global.requireLibrariesNames&&($$.__global.currentLibraryName=null,$$.__global.requireLibrariesNames={}),void 0===$$.__runtimeModules&&($$.__runtimeModules={}),void 0===n.functionUndefined&&(n.functionUndefined=function(){throw console.log("Called of an undefined function!!!!"),new Error("Called of an undefined function")},void 0===n.webshimsRequire&&(n.webshimsRequire=n.functionUndefined),void 0===n.domainRequire&&(n.domainRequire=n.functionUndefined),void 0===n.pskruntimeRequire&&(n.pskruntimeRequire=n.functionUndefined));const r={};function i(e){return $$.__runtimeModules[e]}function s(e,t){let o,i;e?(o=$$.__requireFunctionsChain.slice(),o.push(e)):o=$$.__requireFunctionsChain,function(e){if(r[e]){const t=new Error("Preventing recursive require for "+e);throw t.type="PSKIgnorableError",t}}(t),function(e){r[e]=!0}(t);let s=!1;$$.__global.currentLibraryName||($$.__global.currentLibraryName=t,void 0===$$.__global.requireLibrariesNames[t]&&($$.__global.requireLibrariesNames[t]={}),s=!0);for(let e=0;e<o.length;e++){const r=o[e];try{if(r===n.functionUndefined)continue;if(i=r(t),i)break}catch(e){}}if(!i)throw Error("Failed to load module "+t);return function(e){r[e]=!1}(t),s&&($$.__global.currentLibraryName=null),i}if(e("./standardGlobalSymbols.js"),void 0===$$.require)switch($$.__requireList=["webshimsRequire"],$$.__requireFunctionsChain=[],$$.requireBundle=function(e){$$.__requireList.push(e+="Require");const t=[i];$$.__requireList.forEach((function(e){const o=function(e){const t=n[e];return void 0===t||t===n.functionUndefined?null:function(e){const n=t(e);return $$.__runtimeModules[e]=n,n}}(e);o&&t.push(o)})),$$.__requireFunctionsChain=t},$$.requireBundle("init"),$$.environmentType){case o.BROWSER_ENVIRONMENT_TYPE:case o.SERVICE_WORKER_ENVIRONMENT_TYPE:console.log("Defining global require in browser"),n.require=function(e){return s(null,e)},$$.require=e;break;case o.ISOLATE_ENVIRONMENT_TYPE:!function(){$$.requireBundle("sandboxBase");const t=n.require;n.crypto=e("crypto"),n.require=function(e){const n=this;let o;return o=s((function(...o){let r;try{r=t.apply(n,o)}catch(o){if("MODULE_NOT_FOUND"!==o.code)throw o;{const o=path.join(process.cwd(),e);r=t.apply(n,[o]),e=o}}return r}),e),o}}(),$$.require=e;break;default:$$.require=function(){const t=e("path");$$.__runtimeModules.crypto=e("crypto"),$$.__runtimeModules.util=e("util");const n=e("module");$$.__runtimeModules.module=n,console.log("Redefining require for node"),$$.__originalRequire=n._load;const o=n.prototype.require;function r(e){const n=this;return s((function(...r){let i;try{i=o.apply(n,r)}catch(r){if("MODULE_NOT_FOUND"!==r.code)throw r;{let r=e;(r.startsWith("/")||r.startsWith("./")||r.startsWith("../"))&&(r=t.join(process.cwd(),e)),i=o.call(n,r),e=r}}return i}),e)}return n.prototype.require=r,r}()}},constants:e("./moduleConstants")}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./moduleConstants":"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\overwrite-require\\moduleConstants.js","./standardGlobalSymbols.js":"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js"}],"psk-bindable-model":[function(e,t){t.exports=e("./lib/PskBindableModel")},{"./lib/PskBindableModel":"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\psk-bindable-model\\lib\\PskBindableModel.js"}],queue:[function(e,t){function n(e){this.content=e,this.next=null}function o(){this.head=null,this.tail=null,this.length=0,this.push=function(e){const t=new n(e);this.head?(this.tail.next=t,this.tail=t):(this.head=t,this.tail=t),this.length++},this.pop=function(){if(!this.head)return null;const e=this.head;return this.head=this.head.next,this.length--,0===this.length&&(this.tail=null),e.content},this.front=function(){return this.head?this.head.content:void 0},this.isEmpty=function(){return null===this.head},this[Symbol.iterator]=function*(){let e=this.head;for(;null!==e;)yield e.content,e=e.next}.bind(this)}o.prototype.inspect=o.prototype.toString=function(){let e="",t=this.head;for(;t;)e+=JSON.stringify(t.content)+" ",t=t.next;return e},t.exports=o},{}],soundpubsub:[function(e,t){t.exports={soundPubSub:e("./lib/soundPubSub").soundPubSub}},{"./lib/soundPubSub":"D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\modules\\soundpubsub\\lib\\soundPubSub.js"}]},{},["D:\\work\\git\\webcomponents\\psk-enterprise-workspace\\privatesky\\builds\\tmp\\bindableModel.js"]);const u=bindableModelRequire("psk-bindable-model");function l(e,t,n){fetch(e,{method:"POST",body:t}).then(e=>e.json().then(t=>{if(!e.ok||201!=e.status){let e="";Array.isArray(t)&&t.length?e=`${t[0].error.message}. Code: ${t[0].error.code}`:"object"==typeof t&&(e=t.message?t.message:JSON.stringify(t));let n=new Error(e);throw n.data=t,n}if(Array.isArray(t)){let e=[];for(const n of t)console.log(`Uploaded ${n.file.name} to ${n.result.path}`),e.push(n.result.path);n(void 0,e.length>1?e:e[0])}})).catch(e=>n(e))}function c(e,t,n,o){"function"==typeof n&&(o=n,n=void 0);const r=new FormData;let i="file";if(Array.isArray(t))for(const e of t)i="files[]",r.append(i,e);else r.append(i,t);let s=`/upload?path=${e}&input=${i}`;void 0!==n&&n.preventOverwrite&&(s+="&preventOverwrite=true"),l(s,r,o)}function a(e,t){let n=[],o=[],r=i=>{let s=i;"/"!==i[0]&&(i="/"+i),function(e,t){fetch(e,{method:"DELETE"}).then(e=>{if(!e.ok)throw new Error(e.statusText);t()}).catch(e=>t(e))}("/delete"+i,i=>{if(i?(console.log(i),n.push({filename:s,message:i.message})):o.push(s),e.length>0)return r(e.shift());t(n.length?n:void 0,o)})};r(e.shift())}class f{setObject(e,t,n){try{let o=JSON.stringify(t);this.setItem(e,o,n)}catch(e){n(e)}}getObject(e,t){this.getItem(e,"json",t)}setItem(e,t,n){let o=e.split("/"),r=o.splice(o.length-1,1)[0];(e=o.join("/"))||(e="/"),l(`/upload?path=${e}&filename=${r}`,t,n)}getItem(e,t,n){"function"==typeof t&&(n=t,t="arrayBuffer"),"/"!==e[0]&&(e="/"+e),function(e,t,n){fetch(e).then(e=>{if(!e.ok)throw new Error(e.statusText);e[t]().then(e=>n(void 0,e)).catch(e=>{throw e})}).catch(e=>n(e))}(e="/download"+e,t,n)}uploadFile(e,t,n,o){c(...arguments)}uploadMultipleFiles(e,t,n,o){c(...arguments)}removeFile(e,t){a([e],t)}removeFiles(e,t){a(...arguments)}}class d{constructor(e,t){this.element=e,this.history=t}navigateToPageByTag(e,t){this.__getTagPage(e,(e,n)=>{e||this.navigateToPageByUrl(n,t)})}navigateToPageByUrl(e,t){let n={pathname:e};t&&(n.state=t),this.history.push(n)}getState(){return this.history.win.history.state.state}__getTagPage(e,t){this.element.dispatchEvent(new CustomEvent("getTags",{bubbles:!0,cancelable:!0,composed:!0,detail:(n,o)=>n?t(n):o[e]?void t(void 0,o[e]):t(new Error(`No page with tag: '${e}'`))}))}}class p{constructor(e,t){this.element=e,this.DSUStorage=new f,this.History=new d(e,t),this.modalsUrls=null;let n=[];this.setModel=e=>(this.model=u.setModel(e),n.forEach(e=>{e()}),this.model),this.onModelReady=e=>{if(void 0!==this.model)return e();n.push(e)},(()=>{e.addEventListener("getModelEvent",e=>{e.preventDefault(),e.stopImmediatePropagation();let{bindValue:t,callback:n}=e.detail;if("function"==typeof n)return this.onModelReady(()=>{!function(e,t,n){e&&t[e]&&n(null,t[e]),e||n(null,t)}(t,this.model,n)});n(new Error("No callback provided"))})})()}on(e,t,n){try{this._checkArguments(e,t,n),this.element.addEventListener(e,t,n)}catch(e){console.error(e)}}off(e,t,n){try{this._checkArguments(e,t,n),this.element.removeEventListener(e,t,n)}catch(e){console.error(e)}}send(e,t,n){if(n||(n={bubbles:!0,cancelable:!0,composed:!0,detail:t}),!e||0===e.trim().length)throw new Error(`\n      Argument eventName is not valid. It must bea non-empty string.\n      Provided value: ${e}\n      `);this.element.dispatchEvent(new CustomEvent(e,n))}_checkArguments(e,t,n){if("string"!=typeof e||0===e.trim().length)throw new Error(`\n      Argument eventName is not valid. It must be a non-empty string.\n      Provided value: ${e}\n      `);if("function"!=typeof t)throw new Error(`\n      Argument listener is not valid, it must be a function.\n      Provided value: ${t}\n      `);if(n&&"boolean"!=typeof n&&"object"!=typeof n)throw new Error(`\n      Argument options is not valid, it must a boolean (true/false) in case of capture, or an options object.\n      If no options are needed, this argument can be left empty.\n      Provided value: ${n}\n      `)}__getModalsUrl(e){if(this.modalsUrls)return e(this.modalsUrls);let t=new CustomEvent("getModals",{bubbles:!0,cancelable:!0,composed:!0,detail:e});this.element.dispatchEvent(t)}__constructModalElement(e){let t=this.element.querySelector("psk-page-loader[data-type=modal]");t||(t=document.createElement("psk-page-loader"),this.element.append(t),t.setAttribute("data-type","modal")),t.setAttribute("page-url",e)}showModal(e,t,n){const o=(...e)=>{this.hideModal(),console.log("Hide modal is called from completeCallback"),n(...e)},r=function(e){(0,e.data.callback)(void 0,t,o)};this.__getModalsUrl((t,n)=>{if(t)throw t;if(!n)throw new Error("Modals is not configured for this app");let o=n[e];if(!o)return console.error(`Modal with name ${e} does not exists. Did you forgot to add it in config.json?`);this.__constructModalElement(o),this.element.addEventListener("bindModalData",r),this.element.addEventListener("closeModal",this.hideModal.bind(this,r))})}hideModal(e){let t=this.element.querySelector("psk-page-loader[data-type=modal]");t&&t.remove(),e&&this.element.removeEventListener("bindModalData",e)}}var h=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var u=e.length-1;u>=0;u--)(r=e[u])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};const b=class{constructor(t){e(this,t),this.promisifyControllerLoad=e=>new Promise((t,n)=>{s.getController(e).then(e=>{t(e)}).catch(n)})}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}render(){return[t("slot",null),this.htmlFilePath&&t("psk-page-loader",{pageUrl:this.htmlFilePath})]}componentWillLoad(){let e;return e="string"==typeof this.controllerName&&this.controllerName.length>0?this.promisifyControllerLoad(this.controllerName):Promise.resolve(p),e.then(e=>{this.disconnected||(this.controller=new e(this._host,this.history),this.__getInnerController.call(this,this._host),this.controllerScript&&this.executeScript(this.controllerScript))}).catch(e=>{console.log(e)}),e}__getInnerController(e){const t=e.children;for(let e=0;e<t.length;e++){const n=t[e];if("script"===n.tagName.toLowerCase())return this.controllerScript=n.innerHTML,void(n.innerHTML="")}}executeScript(e){return"string"==typeof e&&e.trim().length>0&&new Function("controller",e)(this.controller),null}get _host(){return n(this)}};h([i(),r({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no value is sent then the null default value will be taken and the component will use the basic Controller."],propertyType:"string",defaultValue:"null"})],b.prototype,"controllerName",void 0),h([r({description:["This property is the page url (html) that will be passed to the psk-page-loader component","This component will sent a get request to that url in order to get the content of that url."],isMandatory:!1,propertyType:"string",defaultValue:"null"})],b.prototype,"htmlFilePath",void 0),o(b);export{b as psk_container}