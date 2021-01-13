import{r as t,c as e,h as i,g as s}from"./p-87f0c668.js";import"./p-c06cc5e4.js";import{j as o,k as r}from"./p-5120ebde.js";import{T as n}from"./p-454c45f1.js";const h=class{constructor(i){t(this,i),this.getModelEvent=e(this,"getModelEvent",7),this.condition=null,this.conditionResult=!1,this.falseSlot=null,this.trueSlot=null}componentWillLoad(){if(!this._host.isConnected)return;this.modelChain=this.condition,this.modelChain=o(this.modelChain);let t=t=>{if(t.hasExpression(this.modelChain)){let e=()=>{this.condition=t.evaluateExpression(this.modelChain)};t.onChangeExpressionChain(this.modelChain,e),e()}else{let e=()=>{this.condition=t.getChainValue(this.modelChain)};t.onChange(this.modelChain,e),e()}this.falseSlot=null;const e=Array.from(this._host.children);let i=e.filter(t=>"condition-true"===t.getAttribute("slot"));this.trueSlot=i.map(t=>t.outerHTML).join("");let s=e.filter(t=>"condition-false"===t.getAttribute("slot"));this.falseSlot=s.map(t=>t.outerHTML).join(""),0===this.trueSlot.length&&0===this.falseSlot.length&&(this.trueSlot=e.map(t=>t.outerHTML).join("")),this._host.innerHTML=""};return new Promise(e=>{this.getModelEvent.emit({callback:(i,s)=>{i&&console.log(i),t(s),this._updateConditionResult().then(()=>{e()})}})})}componentWillUpdate(){return this._updateConditionResult()}_updateConditionResult(){let t;return t=this.condition instanceof Promise?this.condition:Promise.resolve(this.condition),t.then(t=>(this.conditionResult=r(t),Promise.resolve()))}render(){return i("psk-hoc",{innerHTML:this.conditionResult?this.trueSlot:this.falseSlot})}get _host(){return s(this)}};!function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);r>3&&n&&Object.defineProperty(e,i,n)}([n({description:"The property value must be the name of a model property or expression. Children are rendered only if the value of the condition is evaluated to true",isMandatory:!0,propertyType:"any"})],h.prototype,"condition",void 0);export{h as psk_condition}