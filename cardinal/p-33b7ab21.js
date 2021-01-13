import{e}from"./p-8ff37cfd.js";class t{static _prepareRoutesTree(e,t){let i=function(e){let o={};return e.forEach(e=>{let n=e.name.replace(/(\s+|-)/g,"").toLowerCase();if(!o[n]){let i=e.path;switch(t){case"browser":case"query":i=e.path;break;case"hash":i="/#"+e.path}o[n]={path:i}}if("object"==typeof e.children&&Array.isArray(e.children.items))o[n].children={type:"known",items:i(e.children.items)};else if("string"==typeof e.children&&0===e.children.indexOf("@event:")){let t=e.children.substring("@event:".length);o[n].children={type:"event",event:t}}}),o};return i(e)}static _prepareConfiguration(e,i){let o={};o.baseUrl=i;let n=i+"pages/",s=new URL(i).pathname;if(e.modals&&(o.modals={},Object.keys(e.modals).length))for(let t in e.modals)o.modals[t]=n+e.modals[t];if(!e.menu||!e.menu.defaultMenuConfig)throw new Error("Default menu configuration is missing");let r=e.menu.defaultMenuConfig;e.profile&&(o.profile=e.profile);let a=function(e){for(let t=0;t<e.length;t++)e[t].children&&e[t].children.items?a(e[t].children.items):void 0!==e[t].indexed&&"false"===e[t].indexed.toString()&&(e.splice(t,1),t--);return e},l=function(e,t){return t=t?t.replace(/^\/|\/$/g,""):"",e.forEach(e=>{if(!e.path){let t=e.name.toLowerCase().toLowerCase().replace(/\s+/g,"-");t=t.replace(/[:\/]/g,""),e.path=t}let i="/";0===t.length&&(i=""),e.path.startsWith("/")||(e.path=i+e.path);let o=t+e.path;if(o=o.replace(/^\//g,""),e.path=o,e.children)e.type="abstract",e.icon||(e.icon=r.icon);else{for(let t in r)e.hasOwnProperty(t)||(e[t]=r[t]);if("psk-page-loader"===e.component)if(e.componentProps||(e.componentProps={}),Object.assign(e.componentProps,e.options),e.pageSrc)e.componentProps.pageUrl=e.pageSrc.startsWith("http")?e.pageSrc:n+e.pageSrc;else{let o=e.name.replace(/[:.!?]/g,"").replace(/\s/g,"-").toLowerCase();e.componentProps.pageUrl=n+t+i+o+".html"}}if("object"==typeof e.children&&Array.isArray(e.children))e.children={type:"known",items:JSON.parse(JSON.stringify(e.children))},l(e.children.items,o);else if("string"==typeof e.children&&0==e.children.indexOf("@event:")){let t=e.children.substring("@event:".length);e.children={type:"event",event:t}}}),e};o.routes=l(e.menu.pages),o.historyType="browser";let f=e.menu.defaultMenuConfig.historyType;"hash"!==f&&"query"!==f||(o.historyType=f);let p=s;if("query"===f){let t="?";e.menu.defaultMenuConfig.pagePrefix&&(t=e.menu.defaultMenuConfig.pagePrefix),p=s+t}(e=>{let t=function(i){i.forEach(i=>{let o=i.path;0===o.indexOf("/")&&(o=o.substr(1)),i.path=`${e}${o}`,i.children&&i.children.items&&t(i.children.items)})};t(o.routes)})(p);let c=JSON.parse(JSON.stringify(o.routes)),u=JSON.parse(JSON.stringify(c));return o.menu=a(u),o.tags=function(e){let t=[];return function e(i){i.forEach(i=>{Object.prototype.hasOwnProperty.call(i,"tags")&&i.tags.split(",").map(e=>e.trim()).forEach(e=>{t[e]=i.path}),"object"==typeof i.children&&Array.isArray(i.children.items)&&e(i.children.items)})}(e),t}(c),o.pagesHierarchy=t._prepareRoutesTree(o.routes,f),o}}const i={theme:"default",appVersion:"1.0.0",profile:{username:"Cardinal App",email:"privatesky@axiologic.net",avatar:"https://privatesky.xyz/assets/images/privatesky.png"},menu:{defaultMenuConfig:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:!1,indexed:!0,historyType:"browser"},pages:[{name:"Home",path:"/home",pageSrc:"index.html"}]}};let o="config.json",n="menu.json";window.globalConfig={};class s{constructor(e){let i;this.configIsLoaded=!1,this.pendingRequests=[],window&&window.location&&window.location.origin&&(i=window.location.origin);let s=document.querySelector("base");if(s){let e=s.getAttribute("href");e&&(i+=e)}i.endsWith("/")||(i+="/"),o=i+o,n=i+n,window.basePath=i,this._getAppConfiguration(o,(e,o)=>{if(e)return console.log(e);this._fetchConfigurationFile(n,(e,n)=>{for(e?console.log(e):o.menu=n,this.configuration=t._prepareConfiguration(o,i),this.configuration.theme=o.theme,this.configuration.appVersion=o.appVersion,this.configIsLoaded=!0;this.pendingRequests.length;){let e=this.pendingRequests.pop();this.respondWithConfiguration(e.configName,e.callback)}})}),e.addEventListener("getThemeConfig",this._provideConfig("theme")),e.addEventListener("getAppVersion",this._provideConfig("appVersion")),e.addEventListener("needRoutes",this._provideConfig("routes")),e.addEventListener("needMenuItems",this._provideConfig("menu")),e.addEventListener("getUserInfo",this._provideConfig("profile")),e.addEventListener("getHistoryType",this._provideConfig("historyType")),e.addEventListener("getModals",this._provideConfig("modals")),e.addEventListener("getTags",this._provideConfig("tags")),e.addEventListener("getConfiguration",this._provideConfig()),e.addEventListener("validateUrl",e=>{e.stopImmediatePropagation();let{sourceUrl:t,callback:i}=e.detail;i&&"function"==typeof i?this._parseSourceUrl(t,i):console.error("Callback was not properly provided!")}),e.addEventListener("getCustomLandingPage",e=>{let t=e.detail;if(window.frameElement&&window.frameElement.hasAttribute("landing-page"))return t(void 0,window.frameElement.getAttribute("landing-page"));t()})}_provideConfig(e){return t=>{t.stopImmediatePropagation();let i=t.detail;if(i&&"function"==typeof i){if(this.configIsLoaded)return this.respondWithConfiguration(e,i);this.pendingRequests.push({configName:e,callback:i})}}}respondWithConfiguration(e,t){if(void 0!==e&&!this.configuration[e])throw new Error(`Config ${e} does not exists`);if(void 0===e)return t(void 0,this.configuration);t(void 0,this.configuration[e])}_parseSourceUrl(e,t){let i=(e=e.replace(/(\s+|-)/g,"").toLowerCase()).split("/"),o=this.configuration.pagesHierarchy;for(let n=0;n<i.length;n++){let s=i[n];const r=Object.keys(o).find((function(e){return-1!==o[e].path.toLowerCase().indexOf(s)}));let a,l,f=void 0!==o[r];if(!o[s]&&!f){t(e+" is not a valid path in the application!");break}if(a=f?o[r].children:o[s].children,"object"!=typeof a||"object"!=typeof a.items||n===i.length)return l=f?o[r].path:o[s].path,t(void 0,l);o=a.items}}_getAppConfiguration(e,t){this._fetchConfigurationFile(e,(e,o)=>{if(e)return console.log(e),t(void 0,i);for(let e in i)o.hasOwnProperty(e)||(o[e]=i[e]);t(void 0,o)})}_fetchConfigurationFile(t,i){e(t).then((function(e){return e.json()})).then((function(e){i(void 0,e)})).catch((function(e){i(e)}))}}export{t as A,s as D,i as d}