import{b as t}from"./p-5120ebde.js";function i(){let i=this.element,n=Array.from(this.element.querySelectorAll("psk-chapter"));this.activeChapter=null;const r=i.scrollTop,s=i.offsetHeight;let l=function(i){let e=[];return i.forEach(i=>{const n=i.getAttribute("guid");if(!n)return null;const r=i.getElementsByClassName("card psk-card")?i.getElementsByClassName("card psk-card")[0]:null;if(!r)return null;const s=function(i,e){let n=i.offsetTop;const r=i.offsetHeight;let s=e[e.length-1]?e[e.length-1]:null;if(s){let{verticalOffset:l,height:c}=s;if(l>n||l+c>n+r){const r=t(i,"psk-chapter",2),s=e.find(t=>r&&t.guid===r.getAttribute("guid"));s&&(n+=s.verticalOffset)}}return n}(r,e);e.push({guid:n,height:r.offsetHeight,verticalOffset:s,title:i.title})}),e}(n);e.call(this,l,r,s)}function e(t,i,e){let n=t.find(t=>i<=t.verticalOffset&&t.verticalOffset+t.height<=i+e);if(n)return void(this.activeChapter=n.guid);let r=t.filter(t=>i>=t.verticalOffset&&(i+e<=t.verticalOffset+t.height||i<=t.verticalOffset+t.height));r.length>0?this.activeChapter=r[r.length-1].guid:t.length>0&&(this.activeChapter=t[0].guid)}export{i as h}