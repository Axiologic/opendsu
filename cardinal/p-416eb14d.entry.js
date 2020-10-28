import{r as t,c as s,h as e,g as i}from"./p-83ba3037.js";import"./p-d8158e24.js";import{a as o,s as r}from"./p-1b1d03ce.js";import{T as n}from"./p-acc27727.js";const h=class{constructor(e){t(this,e),this.getModelEvent=s(this,"getModelEvent",7),this.condition=null,this.conditionResult=!1,this.falseSlot=null,this.trueSlot=null}componentWillLoad(){if(!this._host.isConnected)return;this.modelChain=this.condition,this.modelChain=o(this.modelChain);let t=t=>{if(t.hasExpression(this.modelChain)){let s=()=>{this.condition=t.evaluateExpression(this.modelChain)};t.onChangeExpressionChain(this.modelChain,s),s()}else{let s=()=>{this.condition=t.getChainValue(this.modelChain)};t.onChange(this.modelChain,s),s()}this.falseSlot=null;const s=Array.from(this._host.children);let e=s.filter(t=>"condition-true"===t.getAttribute("slot"));this.trueSlot=e.map(t=>t.outerHTML).join("");let i=s.filter(t=>"condition-false"===t.getAttribute("slot"));this.falseSlot=i.map(t=>t.outerHTML).join(""),0===this.trueSlot.length&&0===this.falseSlot.length&&(this.trueSlot=s.map(t=>t.outerHTML).join("")),this._host.innerHTML=""};return new Promise(s=>{this.getModelEvent.emit({callback:(e,i)=>{e&&console.log(e),t(i),this._updateConditionResult().then(()=>{s()})}})})}componentWillUpdate(){return this._updateConditionResult()}_updateConditionResult(){let t;return t=this.condition instanceof Promise?this.condition:Promise.resolve(this.condition),t.then(t=>(this.conditionResult=r(t),Promise.resolve()))}render(){return e("psk-hoc",{innerHTML:this.conditionResult?this.trueSlot:this.falseSlot})}get _host(){return i(this)}};!function(t,s,e,i){var o,r=arguments.length,n=r<3?s:null===i?i=Object.getOwnPropertyDescriptor(s,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,s,e,i);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(s,e,n):o(s,e))||n);r>3&&n&&Object.defineProperty(s,e,n)}([n({description:"The property value must be the name of a model property or expression. Children are rendered only if the value of the condition is evaluated to true",isMandatory:!0,propertyType:"any"})],h.prototype,"condition",void 0);export{h as psk_condition}