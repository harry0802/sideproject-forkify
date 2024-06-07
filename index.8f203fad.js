function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},o={},s=i.parcelRequire3a11;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["fkcu7","index.8f203fad.js","eyyUD","icons.c14567a0.svg"]'));var c={getURL:"https://forkify-api.herokuapp.com/api/v2/recipes/",page_quantity:10},u=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(o=new x(a||[]),s=d,function(r,i){if(s===p)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;return A()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=h(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===d)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=p;var u=h(e,n,o);if("normal"===u.type){if(s=o.done?f:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=f,o.method="throw",o.arg=u.arg)}})}),c}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="executing",f="completed",g={};function m(){}function v(){}function _(){}var y={};u(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==r&&n.call(w,o)&&(y=w);var k=_.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function F(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=h(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function $(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:A}}function A(){return{value:t,done:!0}}return v.prototype=_,i(k,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:v,configurable:!0}),v.displayName=u(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(F.prototype),u(F.prototype,s,function(){return this}),e.AsyncIterator=F,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new F(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=u}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}var l={timeout:e=>new Promise((t,r)=>{setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)}),AJAX:async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,this.timeout(5)]),i=await n.json();if(!n.ok)throw Error(`\u{274C} ${i.message}(${error.status}) \u{274C}`);return i}catch(e){throw console.error(`\u{1F4A3} ${e}`),e}}};const h={recipe:{},search:{query:"",result:[],page:1},bookmarks:[]},d=function(e){let{recipe:t}=e.data;return{...t}},p=async e=>{try{let t=await l.AJAX(`${c.getURL}${e}`),r=d(t);return h.recipe={...r},console.log(h.recipe),h.bookmarks.some(t=>t.id===e)?h.recipe.bookmarked=!0:h.recipe.bookmarked=!1,r}catch(e){throw e}},f=async(e="pizza")=>{try{let{recipes:t}=(await l.AJAX(`${c.getURL}?search=${e}&key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`)).data;t.map(e=>{let r={};Object.keys(e).forEach(t=>{r[t]=e[t]}),h.search.page=1,h.search.result.length>=t.length||h.search.result.push(r)})}catch(e){throw e}},g=function(){localStorage.setItem("bookMark",JSON.stringify(h.bookmarks))},m=function(e=h.search.page){h.search.page=e;let t=(e-1)*c.page_quantity,r=e*c.page_quantity;return h.search.result.slice(t,r)},v=function(e){h.bookmarks.push(e),e.id===h.recipe.id&&(h.recipe.bookmarked=!0),g()},_=function(e){let t=h.bookmarks.findIndex(t=>t.id===e);h.bookmarks.splice(t,1),e===h.recipe.id&&(h.recipe.bookmarked=!1),g()},y=function(e){h.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/h.recipe.servings}),h.recipe.servings=e};!function(){let e=localStorage.getItem("bookMark");e&&(h.bookmarks=JSON.parse(e))}();const b=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("你必須有三個項目並使用 , 區隔 ");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,title:e.title,servings:e.servings,cooking_time:e.cookingTime,ingredients:t},n=await l.AJAX(`${c.getURL}?key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`,r),i=d(n);h.recipe={...i}}catch(e){throw e}};var w={};w=new URL("icons.c14567a0.svg",import.meta.url).toString();class k{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.getError();this._data=e;let r=this._getStr();if(!t)return r;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._getStr(),r=Array.from(new DOMParser().parseFromString(t,"text/html").querySelectorAll("*")),n=Array.from(this._parentElment.querySelectorAll("*")),i=r.filter(e=>{let t=e.tagName.toLowerCase();return"html"!==t&&"head"!==t&&"body"!==t});if(0===i.length)return;let a=Math.min(r.length,n.length);for(let e=0;e<a;e++){let t=i[e],r=n[e];t.isEqualNode(r)||t.firstChild?.nodeValue.trim()===""||(r.textContent=t.textContent);let a=Array.from(t.attributes),o=Array.from(r.attributes);a.filter(e=>{let t=o.find(t=>t.name===e.name);return!t||e.value!==t.value}).forEach(e=>{r.setAttribute(e.name,e.value)})}}_clear(){this._parentElment.innerHTML=""}getError(t=this._errorMessage){let r=`<div class="error">
    <div>
      <svg>
        <use href="${e(w)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",r)}getLoadSpinner(){let t=`<div class="spinner">
    <svg>
      <use href="${e(w)}#icon-loader"></use>
    </svg>
    </div> `;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class E extends k{_parentElment=document.querySelector(".recipe");data;_errorMessage=`\u{932F}\u{8AA4}\u{7684}\u{64CD}\u{4F5C}\u{FF0C}\u{8ACB}\u{91CD}\u{65B0}\u{6AA2}\u{67E5}\u{4F60}\u{7684}\u{914D}\u{7F6E}`;message="";getHandlerUpdataServings(e){this._parentElment.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.servingss;n<=0||e(n)})}getHandlerAddBookMarkde(e){this._parentElment.addEventListener("click",function(t){t.target.closest(".btn--bookMark")&&e()})}_getStr(){return console.log(this._data),`
    <figure class="recipe__fig">
      <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
  
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(w)}.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes"> ${this._data.cooking_time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(w)}.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button data-servingss='${this._data.servings-1}' class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(w)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-servingss='${this._data.servings+1}' class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(w)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
      <use href="${e(w)}#icon-user"></use>
      </svg>
      </div>

      <button class="btn--round btn--bookMark">
        <svg class="">
          <use href="${e(w)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}">   </use>
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
          <use href="${e(w)}.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `}_settingInGredient(t){return`
    <li class="recipe__ingredient">
       <svg class="recipe__icon">
         <use href="${e(w)}.svg#icon-check"></use>
       </svg>
       <div class="recipe__quantity">${t.quantity?new n(t.quantity).toString():""}</div>
       <div class="recipe__description">
         <span class="recipe__unit">${t.unit}</span>
         ${t.description}
       </div>
     </li>
    `}getHandlerRecipe(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}const F=()=>new E;class L extends k{_parentElment=document.querySelector(".search");getInputValue(){let e=document.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return document.querySelector(".search__field").value=""}getHandlerSearch(e){this._parentElment.addEventListener("submit",function(t){t.preventDefault(),e()})}}const S=()=>new L;var x=new class extends k{_getStr(){let t=window.location.hash.slice(1);return` 
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
      <use href="${e(w)}#icon-user"></use>
    </svg>
  </div>
  </a>
 </li>`}};class $ extends k{_parentElment=document.querySelector(".results");_errorMessage=`\u{932F}\u{8AA4}\u{7684}\u{64CD}\u{4F5C}\u{FF0C}\u{8ACB}\u{91CD}\u{65B0}\u{6AA2}\u{67E5}\u{4F60}\u{7684}\u{914D}\u{7F6E}`;message="";_getStr(){return this._data.map(e=>x.render(e,!1)).join("")}}const A=()=>new $;class O extends k{_parentElment=document.querySelector(".pagination");_getStr(){return this.generatedSearchPagination()}getHandlerButton(e){this._parentElment.addEventListener("click",function(t){let r=t.target.closest(".btn--inline ");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}generatedSearchPagination=function(){let e=this._data,t=Math.ceil(e.result.length/c.page_quantity);return 1===e.page&&t>1?this.getNextOrPrev("next"):e.page===t&&t>1?this.getNextOrPrev("prev"):e.page<t?this.getNextOrPrev():void 0};getNextOrPrev(t){let r=`
     <button data-goto='${this._data.page-1}' class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${e(w)}#icon-arrow-left"></use>
    </svg>
    <span>page ${this._data.page-1}</span>
  </button>
  `,n=`
  <button data-goto='${this._data.page+1}' class="btn--inline pagination__btn--next">
  <span>page ${this._data.page+1}</span>
  <svg class="search__icon">
    <use href="${e(w)}#icon-arrow-right"></use>
  </svg>
</button>
  `;return"prev"===t?r:"next"===t?n:r+n}}const M=()=>new O;class q extends k{_parentElment=document.querySelector(".bookmarks__list");_errorMessage="目前尚未有標記";getHandlerLoadBookmark(e){window.addEventListener("load",e)}_getStr(){return this._data.map(e=>x.render(e,!1)).join("")}}const j=function(){return new q};class H extends k{_parentElment=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="\uD83D\uDFE2 以成功上傳至伺服器";constructor(){super(),this.#e(),this.#t()}toggleBtn(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}#e(){this._btnOpen.addEventListener("click",this.toggleBtn.bind(this))}#t(){this._btnClose.addEventListener("click",this.toggleBtn.bind(this)),this._overlay.addEventListener("click",this.toggleBtn.bind(this))}getHandlerUpLoad(e){this._parentElment.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var N=new H;const C=async function(){try{let e=window.location.hash.slice(1);if(!e)return;F().getLoadSpinner(),A().update(m()),j().update(h.bookmarks),await p(e),F().render(h.recipe)}catch(e){console.error(`\u{1F4A3} ${e}`),F().getError()}},T=async function(){try{A().getLoadSpinner();let e=S().getInputValue();if(!e)return;await f(e),A().render(m()),M().render(h.search)}catch(e){console.error(e)}},P=async function(e){try{console.log(h.recipe),N.getLoadSpinner(),await b(e),v(h.recipe),F().render(h.recipe),N.getError(),setTimeout(()=>{N.toggleBtn()},2500),j().render(h.bookmarks),history.pushState(null,"",`#${h.recipe.id}`)}catch(e){console.log(`\u{1F4A3}${e}`),N.getError(e)}};j().getHandlerLoadBookmark(function(){j().render(h.bookmarks)}),F().getHandlerRecipe(C),F().getHandlerUpdataServings(function(e){y(e),F().update(h.recipe)}),S().getHandlerSearch(T),M().getHandlerButton(e=>{A().render(m(e)),M().render(h.search)}),F().getHandlerAddBookMarkde(function(){h.recipe.bookmarked?_(h.recipe.id):v(h.recipe),F().update(h.recipe),j().render(h.bookmarks)}),N.getHandlerUpLoad(P);
//# sourceMappingURL=index.8f203fad.js.map
