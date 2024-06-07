function e(e){return e&&e.__esModule?e.default:e}var t,r,n,i=globalThis,a={},s={},o=i.parcelRequire3a11;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){s[e]=t},i.parcelRequire3a11=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["fkcu7","index.6c06c756.js","eyyUD","icons.c14567a0.svg"]'));var c={getURL:"https://forkify-api.herokuapp.com/api/v2/recipes/",page_quantity:10},u={timeout:e=>new Promise((t,r)=>{setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)}),AJAX:async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,this.timeout(5)]),i=await n.json();if(!n.ok)throw Error(`\u{274C} ${i.message}(${error.status}) \u{274C}`);return i}catch(e){throw console.error(`\u{1F4A3} ${e}`),e}}};const l={recipe:{},search:{query:"",result:[],page:1},bookmarks:[]},d=function(e){let{recipe:t}=e.data;return{...t}},h=async e=>{try{let t=await u.AJAX(`${c.getURL}${e}`),r=d(t);return l.recipe={...r},console.log(l.recipe),l.bookmarks.some(t=>t.id===e)?l.recipe.bookmarked=!0:l.recipe.bookmarked=!1,r}catch(e){throw e}},p=async(e="pizza")=>{try{let{recipes:t}=(await u.AJAX(`${c.getURL}?search=${e}&key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`)).data;t.map(e=>{let r={};Object.keys(e).forEach(t=>{r[t]=e[t]}),l.search.page=1,l.search.result.length>=t.length||l.search.result.push(r)})}catch(e){throw e}},g=function(){localStorage.setItem("bookMark",JSON.stringify(l.bookmarks))},m=function(e=l.search.page){l.search.page=e;let t=(e-1)*c.page_quantity,r=e*c.page_quantity;return l.search.result.slice(t,r)},_=function(e){l.bookmarks.push(e),e.id===l.recipe.id&&(l.recipe.bookmarked=!0),g()},f=function(e){let t=l.bookmarks.findIndex(t=>t.id===e);l.bookmarks.splice(t,1),e===l.recipe.id&&(l.recipe.bookmarked=!1),g()},v=function(e){l.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/l.recipe.servings}),l.recipe.servings=e};!function(){let e=localStorage.getItem("bookMark");e&&(l.bookmarks=JSON.parse(e))}();const b=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("你必須有三個項目並使用 , 區隔 ");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,title:e.title,servings:e.servings,cooking_time:e.cookingTime,ingredients:t},n=await u.AJAX(`${c.getURL}?key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`,r),i=d(n);l.recipe={...i}}catch(e){throw e}};var y={};y=new URL("icons.c14567a0.svg",import.meta.url).toString();class k{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.getError();this._data=e;let r=this._getStr();if(!t)return r;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._getStr(),r=Array.from(new DOMParser().parseFromString(t,"text/html").querySelectorAll("*")),n=Array.from(this._parentElment.querySelectorAll("*")),i=r.filter(e=>{let t=e.tagName.toLowerCase();return"html"!==t&&"head"!==t&&"body"!==t});if(0===i.length)return;let a=Math.min(r.length,n.length);for(let e=0;e<a;e++){let t=i[e],r=n[e];t.isEqualNode(r)||t.firstChild?.nodeValue.trim()===""||(r.textContent=t.textContent);let a=Array.from(t.attributes),s=Array.from(r.attributes);a.filter(e=>{let t=s.find(t=>t.name===e.name);return!t||e.value!==t.value}).forEach(e=>{r.setAttribute(e.name,e.value)})}}_clear(){this._parentElment.innerHTML=""}getError(t=this._errorMessage){let r=`<div class="error">
    <div>
      <svg>
        <use href="${e(y)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${t}</p>
  </div>`;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",r)}getLoadSpinner(){let t=`<div class="spinner">
    <svg>
      <use href="${e(y)}#icon-loader"></use>
    </svg>
    </div> `;this._clear(),this._parentElment.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var a=r.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},n=Fraction;class w extends k{_parentElment=document.querySelector(".recipe");data;_errorMessage=`\u{932F}\u{8AA4}\u{7684}\u{64CD}\u{4F5C}\u{FF0C}\u{8ACB}\u{91CD}\u{65B0}\u{6AA2}\u{67E5}\u{4F60}\u{7684}\u{914D}\u{7F6E}`;message="";getHandlerUpdataServings(e){this._parentElment.addEventListener("click",function(t){let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.servingss;n<=0||e(n)})}getHandlerAddBookMarkde(e){this._parentElment.addEventListener("click",function(t){t.target.closest(".btn--bookMark")&&e()})}_getStr(){return console.log(this._data),`
    <figure class="recipe__fig">
      <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
  
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(y)}.svg#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes"> ${this._data.cooking_time}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${e(y)}.svg#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button data-servingss='${this._data.servings-1}' class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(y)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button data-servingss='${this._data.servings+1}' class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${e(y)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
      <use href="${e(y)}#icon-user"></use>
      </svg>
      </div>

      <button class="btn--round btn--bookMark">
        <svg class="">
          <use href="${e(y)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}">   </use>
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
          <use href="${e(y)}.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  `}_settingInGredient(t){return`
    <li class="recipe__ingredient">
       <svg class="recipe__icon">
         <use href="${e(y)}.svg#icon-check"></use>
       </svg>
       <div class="recipe__quantity">${t.quantity?new n(t.quantity).toString():""}</div>
       <div class="recipe__description">
         <span class="recipe__unit">${t.unit}</span>
         ${t.description}
       </div>
     </li>
    `}getHandlerRecipe(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}}const F=()=>new w;class $ extends k{_parentElment=document.querySelector(".search");getInputValue(){let e=document.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){return document.querySelector(".search__field").value=""}getHandlerSearch(e){this._parentElment.addEventListener("submit",function(t){t.preventDefault(),e()})}}const E=()=>new $;var S=new class extends k{_getStr(){let t=window.location.hash.slice(1);return` 
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
      <use href="${e(y)}#icon-user"></use>
    </svg>
  </div>
  </a>
 </li>`}};class A extends k{_parentElment=document.querySelector(".results");_errorMessage=`\u{932F}\u{8AA4}\u{7684}\u{64CD}\u{4F5C}\u{FF0C}\u{8ACB}\u{91CD}\u{65B0}\u{6AA2}\u{67E5}\u{4F60}\u{7684}\u{914D}\u{7F6E}`;message="";_getStr(){return this._data.map(e=>S.render(e,!1)).join("")}}const L=()=>new A;class M extends k{_parentElment=document.querySelector(".pagination");_getStr(){return this.generatedSearchPagination()}getHandlerButton(e){this._parentElment.addEventListener("click",function(t){let r=t.target.closest(".btn--inline ");if(!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}generatedSearchPagination=function(){let e=this._data,t=Math.ceil(e.result.length/c.page_quantity);return 1===e.page&&t>1?this.getNextOrPrev("next"):e.page===t&&t>1?this.getNextOrPrev("prev"):e.page<t?this.getNextOrPrev():void 0};getNextOrPrev(t){let r=`
     <button data-goto='${this._data.page-1}' class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${e(y)}#icon-arrow-left"></use>
    </svg>
    <span>page ${this._data.page-1}</span>
  </button>
  `,n=`
  <button data-goto='${this._data.page+1}' class="btn--inline pagination__btn--next">
  <span>page ${this._data.page+1}</span>
  <svg class="search__icon">
    <use href="${e(y)}#icon-arrow-right"></use>
  </svg>
</button>
  `;return"prev"===t?r:"next"===t?n:r+n}}const q=()=>new M;class x extends k{_parentElment=document.querySelector(".bookmarks__list");_errorMessage="目前尚未有標記";getHandlerLoadBookmark(e){window.addEventListener("load",e)}_getStr(){return this._data.map(e=>S.render(e,!1)).join("")}}const H=function(){return new x};class C extends k{_parentElment=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="\uD83D\uDFE2 以成功上傳至伺服器";constructor(){super(),this.#e(),this.#t()}toggleBtn(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}#e(){this._btnOpen.addEventListener("click",this.toggleBtn.bind(this))}#t(){this._btnClose.addEventListener("click",this.toggleBtn.bind(this)),this._overlay.addEventListener("click",this.toggleBtn.bind(this))}getHandlerUpLoad(e){this._parentElment.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var O=new C;const D=async function(){try{let e=window.location.hash.slice(1);if(!e)return;F().getLoadSpinner(),L().update(m()),H().update(l.bookmarks),await h(e),F().render(l.recipe)}catch(e){console.error(`\u{1F4A3} ${e}`),F().getError()}},N=async function(){try{L().getLoadSpinner();let e=E().getInputValue();if(!e)return;await p(e),L().render(m()),q().render(l.search)}catch(e){console.error(e)}},B=async function(e){try{console.log(l.recipe),O.getLoadSpinner(),await b(e),_(l.recipe),F().render(l.recipe),O.getError(),setTimeout(()=>{O.toggleBtn()},2500),H().render(l.bookmarks),history.pushState(null,"",`#${l.recipe.id}`)}catch(e){console.log(`\u{1F4A3}${e}`),O.getError(e)}};H().getHandlerLoadBookmark(function(){H().render(l.bookmarks)}),F().getHandlerRecipe(D),F().getHandlerUpdataServings(function(e){v(e),F().update(l.recipe)}),E().getHandlerSearch(N),q().getHandlerButton(e=>{L().render(m(e)),q().render(l.search)}),F().getHandlerAddBookMarkde(function(){l.recipe.bookmarked?f(l.recipe.id):_(l.recipe),F().update(l.recipe),H().render(l.bookmarks)}),O.getHandlerUpLoad(B);
//# sourceMappingURL=index.6c06c756.js.map
