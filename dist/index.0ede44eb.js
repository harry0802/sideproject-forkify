function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},n={},i=t.parcelRequire3a11;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire3a11=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["fkcu7","index.0ede44eb.js","eyyUD","icons.c14567a0.svg"]'));var a={getURL:"https://forkify-api.herokuapp.com/api/v2/recipes/",page_quantity:10},o=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(o=new x(a||[]),s=d,function(r,i){if(s===p)throw Error("Generator is already running");if(s===g){if("throw"===r)throw i;return F()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),f;var o=h(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,f):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,f)}(a,o);if(c){if(c===f)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===d)throw s=g,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var l=h(e,n,o);if("normal"===l.type){if(s=o.done?g:"suspendedYield",l.arg===f)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(s=g,o.method="throw",o.arg=l.arg)}})}),c}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",p="executing",g="completed",f={};function v(){}function _(){}function m(){}var y={};l(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(A([])));w&&w!==r&&n.call(w,o)&&(y=w);var k=m.prototype=v.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function $(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=h(e[i],e,a);if("throw"===c.type)s(c.arg);else{var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(u).then(function(e){l.value=e,o(l)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function A(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:F}}function F(){return{value:t,done:!0}}return _.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:_,configurable:!0}),_.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E($.prototype),l($.prototype,s,function(){return this}),e.AsyncIterator=$,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new $(u(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),l(k,c,"Generator"),l(k,o,function(){return this}),l(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(l){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),f}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var s={timeout:e=>new Promise((t,r)=>{setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)}),AJAX:async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,this.timeout(5)]),i=await n.json();if(!n.ok)throw Error(`\u{274C} ${i.message}(${error.status}) \u{274C}`);return i}catch(e){throw console.error(`\u{1F4A3} ${e}`),e}}};const c={recipe:{},search:{query:"",result:[],page:1},bookmarks:[]},l=function(e){let{recipe:t}=e.data;return{...t}},u=async e=>{try{let t=await s.AJAX(`${a.getURL}${e}`),r=l(t);return c.recipe={...r},console.log(c.recipe),c.bookmarks.some(t=>t.id===e)?c.recipe.bookmarked=!0:c.recipe.bookmarked=!1,r}catch(e){throw e}},h=async(e="pizza")=>{try{let{recipes:t}=(await s.AJAX(`${a.getURL}?search=${e}&key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`)).data;t.map(e=>{let r={};Object.keys(e).forEach(t=>{r[t]=e[t]}),c.search.page=1,c.search.result.length>=t.length||c.search.result.push(r)})}catch(e){throw e}},d=function(){localStorage.setItem("bookMark",JSON.stringify(c.bookmarks))},p=function(e=c.search.page){c.search.page=e;let t=(e-1)*a.page_quantity,r=e*a.page_quantity;return c.search.result.slice(t,r)},g=function(e){c.bookmarks.push(e),e.id===c.recipe.id&&(c.recipe.bookmarked=!0),d()},f=function(e){let t=c.bookmarks.findIndex(t=>t.id===e);c.bookmarks.splice(t,1),e===c.recipe.id&&(c.recipe.bookmarked=!1),d()},v=function(e){c.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/c.recipe.servings}),c.recipe.servings=e};!function(){let e=localStorage.getItem("bookMark");e&&(c.bookmarks=JSON.parse(e))}();const _=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("你必須有三個項目並使用 , 區隔 ");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,title:e.title,servings:e.servings,cooking_time:e.cookingTime,ingredients:t},n=await s.AJAX(`${a.getURL}?key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`,r),i=l(n);c.recipe={...i}}catch(e){throw e}};var m={};m=new URL("icons.c14567a0.svg",import.meta.url).toString();class y{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.getError();this._data=e;let r=this._getStr();if(!t)return r;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._getStr(),r=Array.from(new DOMParser().parseFromString(t,"text/html").querySelectorAll("*")),n=Array.from(this._parentElment.querySelectorAll("*")),i=r.filter(e=>{let t=e.tagName.toLowerCase();return"html"!==t&&"head"!==t&&"body"!==t});if(0===i.length)return;let a=Math.min(r.length,n.length);for(let e=0;e<a;e++){let t=i[e],r=n[e];t.isEqualNode(r)||t.firstChild?.nodeValue.trim()===""||(r.textContent=t.textContent);let a=Array.from(t.attributes),o=Array.from(r.attributes);a.filter(e=>{let t=o.find(t=>t.name===e.name);return!t||e.value!==t.value}).forEach(e=>{r.setAttribute(e.name,e.value)})}}_clear(){this._parentElment.innerHTML=""}getError(t=this._errorMessage){let r=`<div class="error">
    <div>
      <svg>
        <use href="${e(m)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",r)}getLoadSpinner(){let t=`<div class="spinner">
    <svg>
      <use href="${e(m)}#icon-loader"></use>
    </svg>
    </div> `;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",t)}}var b={};function w(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let l=0,u=e,h=t;for(;l<=c.length;)u%c[l]==0&&h%c[l]==0?(c[l],u/=c[l],h/=c[l]):l++;return a=h,o=u,s=r,1===a&&1===o?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}b=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(!o||!(r.length>2)){var s,c;return s=r,c=t,w(parseInt(s,10),Math.pow(10,s.length),a,c,!1)}{let e=o[0].split("").reverse().join(""),n=o[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length);return w(Math.round((s*c-s)*Math.pow(10,a)),(c-1)*o,n,i,!0)}(r,n,e,a,t)}};class k extends y{_parentElment=document.querySelector(".recipe");data;_errorMessage=`\u{932F}\u{8AA4}\u{7684}\u{64CD}\u{4F5C}\u{FF0C}\u{8ACB}\u{91CD}\u{65B0}\u{6AA2}\u{67E5}\u{4F60}\u{7684}\u{914D}\u{7F6E}`;message="";getHandlerUpdataServings(e){this._parentElment.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.servingss;n<=0||e(n)})}getHandlerAddBookMarkde(e){this._parentElment.addEventListener("click",function(t){t.target.closest(".btn--bookMark")&&e()})}_getStr(){return console.log(this._data),`
    <figure class="recipe__fig">
      <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
  
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(m)}.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes"> ${this._data.cooking_time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(m)}.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button data-servingss='${this._data.servings-1}' class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(m)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-servingss='${this._data.servings+1}' class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(m)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
      <use href="${e(m)}#icon-user"></use>
      </svg>
      </div>

      <button class="btn--round btn--bookMark">
        <svg class="">
          <use href="${e(m)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}">   </use>
        </svg>
      </button>
      
    </div>
  
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
  
      ${this._data.ingredients.map(this._settingInGredient).join("")}
  
      </ul>
    </div>
  
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.source_url}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${e(m)}.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `}_settingInGredient(t){return`
    <li class="recipe__ingredient">
       <svg class="recipe__icon">
         <use href="${e(m)}.svg#icon-check"></use>
       </svg>
       <div class="recipe__quantity">${t.quantity?(0,b.fracty)(t.quantity).toString():""}</div>
       <div class="recipe__description">
         <span class="recipe__unit">${t.unit}</span>
         ${t.description}
       </div>
     </li>
    `}getHandlerRecipe(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}const E=()=>new k;class $ extends y{_parentElment=document.querySelector(".search");getInputValue(){let e=document.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return document.querySelector(".search__field").value=""}getHandlerSearch(e){this._parentElment.addEventListener("submit",function(t){t.preventDefault(),e()})}}const L=()=>new $;var S=new class extends y{_getStr(){let t=window.location.hash.slice(1);return` 
    <li class="preview">
  <a class="preview__link ${t===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
    <figure class="preview__fig">
      <img src="${this._data.image_url}" alt="${this._data.title}" />
    </figure>
    <div class="preview__data">
      <h4 class="preview__title">
     ${this._data.title}
      </h4>
      <p class="preview__publisher">${this._data.publisher}</p>
    </div>
    <div class="preview__user-generated ${this._data.key?"":"hidden"}">
    <svg>
      <use href="${e(m)}#icon-user"></use>
    </svg>
  </div>
  </a>
 </li>`}};class x extends y{_parentElment=document.querySelector(".results");_errorMessage=`\u{932F}\u{8AA4}\u{7684}\u{64CD}\u{4F5C}\u{FF0C}\u{8ACB}\u{91CD}\u{65B0}\u{6AA2}\u{67E5}\u{4F60}\u{7684}\u{914D}\u{7F6E}`;message="";_getStr(){return this._data.map(e=>S.render(e,!1)).join("")}}const A=()=>new x;class F extends y{_parentElment=document.querySelector(".pagination");_getStr(){return this.generatedSearchPagination()}getHandlerButton(e){this._parentElment.addEventListener("click",function(t){let r=t.target.closest(".btn--inline ");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}generatedSearchPagination=function(){let e=this._data,t=Math.ceil(e.result.length/a.page_quantity);return 1===e.page&&t>1?this.getNextOrPrev("next"):e.page===t&&t>1?this.getNextOrPrev("prev"):e.page<t?this.getNextOrPrev():void 0};getNextOrPrev(t){let r=`
     <button data-goto='${this._data.page-1}' class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${e(m)}#icon-arrow-left"></use>
    </svg>
    <span>page ${this._data.page-1}</span>
  </button>
  `,n=`
  <button data-goto='${this._data.page+1}' class="btn--inline pagination__btn--next">
  <span>page ${this._data.page+1}</span>
  <svg class="search__icon">
    <use href="${e(m)}#icon-arrow-right"></use>
  </svg>
</button>
  `;return"prev"===t?r:"next"===t?n:r+n}}const O=()=>new F;class j extends y{_parentElment=document.querySelector(".bookmarks__list");_errorMessage="目前尚未有標記";getHandlerLoadBookmark(e){window.addEventListener("load",e)}_getStr(){return this._data.map(e=>S.render(e,!1)).join("")}}const q=function(){return new j};class H extends y{_parentElment=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="\uD83D\uDFE2 以成功上傳至伺服器";constructor(){super(),this.#e(),this.#t()}toggleBtn(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}#e(){this._btnOpen.addEventListener("click",this.toggleBtn.bind(this))}#t(){this._btnClose.addEventListener("click",this.toggleBtn.bind(this)),this._overlay.addEventListener("click",this.toggleBtn.bind(this))}getHandlerUpLoad(e){this._parentElment.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var M=new H;const N=async function(){try{let e=window.location.hash.slice(1);if(!e)return;E().getLoadSpinner(),A().update(p()),q().update(c.bookmarks),await u(e),E().render(c.recipe)}catch(e){console.error(`\u{1F4A3} ${e}`),E().getError()}},T=async function(){try{A().getLoadSpinner();let e=L().getInputValue();if(!e)return;await h(e),A().render(p()),O().render(c.search)}catch(e){console.error(e)}},C=async function(e){try{console.log(c.recipe),M.getLoadSpinner(),await _(e),g(c.recipe),E().render(c.recipe),M.getError(),setTimeout(()=>{M.toggleBtn()},2500),q().render(c.bookmarks),history.pushState(null,"",`#${c.recipe.id}`)}catch(e){console.log(`\u{1F4A3}${e}`),M.getError(e)}};q().getHandlerLoadBookmark(function(){q().render(c.bookmarks)}),E().getHandlerRecipe(N),E().getHandlerUpdataServings(function(e){v(e),E().update(c.recipe)}),L().getHandlerSearch(T),O().getHandlerButton(e=>{A().render(p(e)),O().render(c.search)}),E().getHandlerAddBookMarkde(function(){c.recipe.bookmarked?f(c.recipe.id):g(c.recipe),E().update(c.recipe),q().render(c.bookmarks)}),M.getHandlerUpLoad(C);
//# sourceMappingURL=index.0ede44eb.js.map
