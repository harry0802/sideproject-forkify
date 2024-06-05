import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import icons from 'url:../img/icons.svg';

import * as model from '../models/model';
import * as recipeView from '../views/recipeView';
import * as searchView from '../views/searchView';
import * as resultsView from '../views/resultView';
import * as paginationView from '../views/paginationView';
import * as bookMarkView from '../views/bookMarkView';
import addRecipeView from '../views/addRecipeView';
import { async } from 'regenerator-runtime';

if (module.hot) {
  module.hot.accept();
}
const controllerShowRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // 渲染加載器動畫
    recipeView.createRecipeView().getLoadSpinner();

    // 跟新資料
    resultsView.resultsView().update(model.generatedSearchResult());
    bookMarkView.bookmarkview().update(model.state.bookmarks);

    await model.getFetchID(id);

    recipeView.createRecipeView().render(model.state.recipe);
  } catch (err) {
    console.error(`💣 ${err}`);
    recipeView.createRecipeView().getError();
  }
};

const controllerSearchRecipe = async function () {
  try {
    resultsView.resultsView().getLoadSpinner();

    const query = searchView.createSearchView().getInputValue();

    if (!query) return;
    await model.getFetchSearch(query);

    resultsView.resultsView().render(model.generatedSearchResult());

    paginationView.pagination().render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};
const getPagination = gotoPage => {
  resultsView.resultsView().render(model.generatedSearchResult(gotoPage));
  paginationView.pagination().render(model.state.search);
};

const conrtollerServings = function (quantity) {
  model.updataServings(quantity);
  recipeView.createRecipeView().update(model.state.recipe);
};

const controllerAddBookMark = function () {
  if (!model.state.recipe.bookmarked) model.addBookMarked(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  recipeView.createRecipeView().update(model.state.recipe);

  bookMarkView.bookmarkview().render(model.state.bookmarks);
};

const controllerLoadRenderBookMark = function () {
  bookMarkView.bookmarkview().render(model.state.bookmarks);
};

const controllerAddRicipe = async function (fromdata) {
  try {
    console.log(model.state.recipe);

    addRecipeView.getLoadSpinner();
    await model.addRecipeUploadAPI(fromdata);
    model.addBookMarked(model.state.recipe);
    recipeView.createRecipeView().render(model.state.recipe);
    addRecipeView.getError();
    setTimeout(() => {
      addRecipeView.toggleBtn();
    }, 1000 * 2.5);

    bookMarkView.bookmarkview().render(model.state.bookmarks);
    history.pushState(null, '', `#${model.state.recipe.id}`);
  } catch (error) {
    console.log(`💣${error}`);
    addRecipeView.getError(error);
  }
};

const init = function () {
  bookMarkView
    .bookmarkview()
    .getHandlerLoadBookmark(controllerLoadRenderBookMark);
  recipeView.createRecipeView().getHandlerRecipe(controllerShowRecipe);
  recipeView.createRecipeView().getHandlerUpdataServings(conrtollerServings);
  searchView.createSearchView().getHandlerSearch(controllerSearchRecipe);
  paginationView.pagination().getHandlerButton(getPagination);
  recipeView.createRecipeView().getHandlerAddBookMarkde(controllerAddBookMark);
  addRecipeView.getHandlerUpLoad(controllerAddRicipe);
};
init();

/*@ 顯示單頁要多少 list 
# 比如說我們渲染頁面時會產生 30個 litem，但這對用戶來說並不友好
  所以我們想要一個有限的視窗中顯示 10 pice list

*
1,我們透過 [] 放入 item ，並透過.slice 設置起點到終點
 example: [].slice(start , end ) 
  tips:  end 並不包括他本身

  2. 透過函數包裝獲得 argument



- Logico
  1.start and End: 透過 argument 設置
  比如說當前是第一頁，argument =1 
  
  2.start = (argument -1  ) * 10 (暫定我們想要的數量)
  3.start = argument * 10 (暫定我們想要的數量)

  這樣一來， [].slice(start , end ) 就會是 
  page(1) = 0 -10 (實際是9)
  page(2) = 10 - 20 (實際是 19)

 tips:
 我們為了有單一職責性，把我們 {10們想要的數量 }可以加入到
 共用的 state {} 裏面或者是 MVC等等架構中，應該被放置的地方
 
 這樣一來我們就能有架構性的使用這些東西
_
*/

/* @ 我們該如何知道我們需要多少頁面？
////////////////////////////
@ 我們該如何知道我們需要多少頁面？
 我 需要知道多少如何製作多少頁面   達成製作分頁項目
 
 如何達成：
1. 我們需要先知道我們需要的項目的總數量
2. 並且把他除上我們需要的單頁項目
  例如我們有 10 項目，單頁需求是5 =  需要兩頁

處理細節：
 1.首先我們需要確保我們不會有小數點，所以我們需要有無條件進位
   Math.ceil( 3.4 ) 
///////////////////////////////
@ 顯示換頁按紐
  我,
  想要顯示按鈕切換頁面,
  (但第一頁不要有上一頁按鈕，最後一頁不要有下一頁按鈕)
  達到讓使用者有能有良好體驗.

 如何達成：
  1.我們需要判斷下頁面（為了能知道我們需要創建紀錄當下的頁面的變數）。

  2.當他是 第一頁 與 最後一頁時 我們需要單向顯示
  [如何知道 first and last] 
   firsr 就是 1
   last = 我們剛剛計算出來的實際需求的多少頁面數字

  [example]:
  1.if( 當下頁面 === 1 && 計算出來的最大頁面  > 1) first 或是其他頁面

  2. if( 當下頁面 === 計算出來的最大頁面 && 計算出來的最大頁面 > 1 ) last 
   細節處理：
   我們可能會面臨到，只有單獨一頁所以會進入 [當下頁面 === 計算出來的最大頁面]
   為了防止這樣我們需要再加上保護條例，計算出來的最大頁面最少要大 >1 
  
  3.剩下雙向顯示
   if( page < 最大頁面 ) center 頁面

  4. 當我們只有項目數量只有一頁，就並不需要顯示分頁按鈕
   
///////////////////////////////////////////
@ 監聽我們的按鈕進行使用者交互
用戶 想要點擊按鈕  切換下一頁面

 如何達成： 
 1. 需要使用事件監聽器執行
 在架構中我們可以使用 發布者 - 訂閱者設計模式
 發布者（Publisher）將事件或訊息發送給多個訂閱者（Subscriber），讓訂閱者能夠接收並回應這些事件或訊息

 所以我們創建發布者（監聽事件函數（接收外部的函數實現）） 這樣我們就能處理事件，並執行函數
＊ copy By AI :
   在發布者-訂閱者模式中，訂閱者指的是那些註冊並接收發布者所發布的事件或函數的結果或通知的物件或函數。

   訂閱者可以是系統中的任何元素或組件，包括其他函數、類別、模組、服務或物件等。
   他們通常會在初始化階段或運行時註冊到發布者的通道上，以接收特定的事件或函數。

   當發布者發佈事件或呼叫特定的函數時，訂閱者會被通知並執行相應的處理邏輯。
   這樣可以實現組件之間的解耦和彈性，使得訂閱者可以獨立地處理發布者的內容。

2. 在監聽事件中要執行的函數：
   我 們需要分清楚，我們目前是要使用的是哪一個按鈕 達到正確的操作

  A: 分清楚按鈕 [當下目標]：
   [當下目標] =  event.target.
  
 細節處理:我們必續認清楚下向尋找的元素的正確性 
  由於我們使用的是當下目標的 parentElment 當作監聽元素。
  我們並不能確定當下目標中是否是我們要的元素，有可能 parentElment 中有許多包覆

  所以我們需要在當下目標中，繼續向下尋找，完成提高精準度
    event.target.closest()
  
  B:當我們的按鈕被正確選擇時，但我們為什麼實際上會點選按鈕？
    我們需要知道，我們要跳轉的頁面 
    
    [JS 如何知道他應該實際顯示什麼]
    我們需要再次，在DOM 和我們程式之間 ，基本建立連接

   # 實現方式：
    [使用自定義屬性]
    我們需要自定義 data 並連結到每個按鈕，他將會包含我們需要的頁面
    我們可以讀取這些資料，並製作 JS 讓我們的應用程式跳轉到頁面

    問題：
    該如何建立 html 與 js 之間的 data橋樑？

    [建立 data]
    使用 HTML5 中的 data-* attribute 屬性
     * 就是一個可以自定義的名稱
     * 字號的地方不能包含大寫字母，也就是屬性名稱不能包含大寫字母，而屬性值則可以是任何的字串
         data-自定義名稱 ='想要表達的'
    [搭建橋樑] 
    使用 JS 取得 data-* attribute 的屬性值
    我們可以簡單利用 JavaScript 中的 dataset 物件，就可以取得了
     目標.dataset.*名稱

  C: 需要處理在 element中 空白的 targer
     空白地方我們獲取 target.cloeset('指定元素 ')
    因為並沒有該物件，他會有 undefined 這導致後續執行上下文時出現 Error。
    我們需要避免這樣的情況

    [如何避免]:當元素沒有時 結束程式的讀取
    if(!沒有目標) return


  3.我們需要把積木組合起來
    A:我們在負責控制程式的地方有著 渲染 slider page的功能

    B:透過剛剛獲得的 HTML data 給我們的頁面

    C:組合呼叫達到跳轉頁面的效果


    該如何把它連接起來？
    我們在監聽事件中我們是使用 ，外部函數包覆監聽事件
    所以我們透過外部函數的調用，把監聽事件的東西放進去裡面
    exampele:
    view:
     outside( agument ){
      listen('event', fn(){
         result 
         agument(result)
      } )
     }
    在負責控制的地方把傳入的函數接收監聽事件的參數
     controller:
     
     getListenFn(agument){
      console.log(agument = view,Outside,Result )
     }
     
    4, 在 UI 中被點擊按鈕時該如何？
      得到搜尋結果，切換頁面，渲染頁面，渲染新的按鈕

    所以我們在控制中 再次 渲染頁面，渲染新的按鈕





  




*/

/* 更新舊有的配方資料
@ 舉例來說我們有一個食譜，裏面有配方的比例

4人份， 原料:[], 多久製成

[我們運算新的原料的邏輯是]
1.原料 =( 舊的原料 *  新的數量 )/ 原本的數量  (因為舊的數量並不一定是從 1 開始)
2. 原本的數量 = 新的數量 (避免下次運算時，新的原諒與舊的數量，運算不匹配)

# 我一個正常函數在使用 api 的函數時會拿不到 ，因為他是異步的， js 並不會等他加載完才繼續向下執行上下文
  所以不是你加入他們，就是你在他們的上下文裡執行
*/

/* 只讓特定區域更新 dom，減少重排重繪
@ 我們 要避免因為一個小功能導致整個畫面重新渲染  避免效能受到影響，用戶體驗不好。

  1.不應該頻繁的使用渲染 DOM 的方法：
    創建一個更新的函數，傳遞新的資料[更新 DOM 的文字與屬性]

  2. 當我們獲得新的數據時，創建一個新的變數，裏面放置 html 文本方法

  3.我們不呼叫渲染 DOM 的方法，而是使用比較，比較舊的 html 與新的 html 內容差異
    並且只改變文字與屬性，重 old 到 new 的 version

   # 該如何比較這些包含 html 的方法？
    因為他們都是 String 屬性，為了處理他

    [我們將它轉化爲 DOM]:
    document.createRange().createContextualFragment( 要轉換的字串 )

   # Range：
    Range 接口表示一個包含節點與文本節點的一部分的文檔片段。
    可以使用 Document.createRange 方法創建 Range。
    也可以用 Selection 對象的 getRangeAt() 方法
    或者 Document 對象的 caretRangeFromPoint() 方法獲取 Range 對象。

    還可以用 Range() 構造函數。


   A: 透過 Range 我們獲得了新的文本。
   B: 透過 Range(新文本的變數).querySelectorAll('*') [獲取所有節點] 
   C: 為了能夠前後比較 dom 我們還需要當下頁面的 DOM
     [該如何前後比較]？
    a, 透過循環取得前後的值 （在使用循環前我們需要先專換成文 array ）Array.from( El )
     之後我們使用方法去判斷兩者節點是否相等 node.isEqualNode(otherNode);


     newElemt.forEach((newEl , index )=>{
      const oidElemt = oid[index]
      newEl.isEqualNode(oidElemt);  
     })

    所以當我們 某的 HTML 對比 只要子節點不一樣，他的父節點就會不一樣

    b, 我們使用 if 當不相等時，我們想要跟改文本內容
     [如何更改？]
     新的替代舊的：
     我們把舊的文字內容 textcontent = 新的文字內容 textcontent
     
     ！但這會發生一個問題，就是他會把整個容器都換掉，
      但我們只需要替換掉文本

    [如何避免？]：
    Node.nodeValue
     Node 的 nodeValue 属性返回或设置当前节点的值。

     我們新增一個檢查的條件，  newEl.firstChild.nodeValue.trim() === ''
      firstChild :第一個 Child-Node
      nodeValue : Node 的 nodeValue 属性返回或设置当前节点的值。
      trim() 去掉空格。

      if( !!newEl.isEqualNode(oldEl) && newEl.firstChild?.nodeValue.trim() === '')
      我們還需要確定是否有 firstChild 所以使用

      目前為止我們跟新的文本的部分，如果我們還有 HTML data- 屬性我們還需要替換他

      [如何替換屬性？]
      1. 讀取屬性：使用 Element.attributes
        attributes 是字符串形式的鍵值對，代表了那個屬性的任何信息 「他回傳 NameNodeMap」 !== array

      2. loop him
        將獲得的 NameNodeMap 轉換為 Array 並使用 forEach
        把舊的元素設定到新的元素

        [如何使用？]：透過當下的元素 使用 setAttribute 
        curEl.setAttribute( NewEl.name , NewEl.value )

        這樣我們替換所有的素性在與屬性值 透過forEach 的屬性


       



    

     


    
*
-
_
*/

/* 實現添加書籤頁功能。
用戶 添加書籤 達到他們點擊書籤就能找到

@ 添加到書籤：
# 在 MVC 中我們拆分將資料的 控制,改變放在 M: model
1.  創建書籤的容器 = []
  bookmark = [] 

2. 創建函數並引入參數，且添加到 bookmark (透過 Array.push 添加)
   接下來判斷 (引入參數的 ID === 當下我們資料的 id ) 添加當下資料.bookMark = true:  
   [ 透過這樣，我們在當下資料裡面添加新的屬性 ]

@ 使用添加書籤的方法
# 在 MVC 中我們拆分，將操作資料的方法 放在 C: contorller
  在 contorller 中代表著 負責處理用戶的行為和交互
  
 1.我們我們建立一個方法，並且操作來自 model 的 bookMark 資料並傳遞參數（）

 2. 該方法會是傳送給 View 中的函數參數，

 3. 並且更新 view 的資料

 4. 使用 view的函數 並把該函數當作參數傳送過去。

@ 選染頁面：
     MVC:V
    當我們資料操作完畢後，將會渲染 UI 讓使用者感受到操作

 1. 我們是透過 HTML class 去添加 icon 的效果

 2. 使用發布者模式， 一個函數接受一個參數，（參數還是一個函數） 
    函數裡面添加 事件監聽，並呼叫我們的參數

    透過 event.target() 去獲取
    接著使用 closest 獲取目標元素。
    [因為在頁面家載時我們的目標元素還不存在，所以我們透過父元素去監聽]

    當有獲得 closest 目標時才會執行我們的 行參


  * [發布者訂閱者模式就是 兩者之間不依賴 透過抽象實現]

    在異步處理中：
    發布者可以是某個任務或事件的觸發者，
    而訂閱者可以是對該任務或事件感興趣並希望接收通知的其他組件或模塊。
    
    通過使用發布者-訂閱者模式:
    可以將任務的執行和事件的處理解耦 ( 解除依賴 )，
    使得任務的觸發和事件的處理可以在不同的時間和上下文中進行，而不需要直接的依賴關係。

 3. 我們操作字串，當 bookmarked = true 就會添加 指定的className 否則就是 空字串 

@ deBug

1. 我們在 sideBar 中點選 bookmark 設定
   當我們切換 menu 時，原本的 bookmark 被取消了？

   [What happened ?]:
    我們資料中的 bookmarked 屬性消失了。
    當我們點選新的 menu 資料時，他將會覆蓋新的資料給原本資料，所以他被覆蓋了

    因為資料是API 所以我們從 serivce 獲得資料去轉移到物件中


   [ 如何解決 ]：
   
   我們需要回到我們獲取 資料API 中的操作，我們需要檢查是否有 bookmark 的屬性
    (透過 array.some 有一個條件符合就是 true)

    tips:只要是資料處理就會是 model 

    我們的判斷邏輯是:
    該 bookmark 是我們前面創建的空陣列：

    if (bookmark.some(mark => mark.id === id )) 資料.bookmarked = true
    else 資料.bookmarked = false

    這樣當我們切換 menu 時就會保持原來的資料


  2. 無法退出紀錄書籤的狀態
      [ 我們要把標記狀態取消 ？ ]

     當我們把 bookmarked 設置為 true 時 代表著我們 class 被設置
     所以反之我們把 bookmarked 設置為 false 

     [ 該如何做? ]

     一樣我們設置資料給要在 model 中使用，我們使用與 addbookmark 函數中相反的邏輯

     該函數參數傳入一個 id， 並且檢查哪一個有 bookmark 陣列中的 id 相等於參數的 id 並刪除

     [ 該如何刪除 ]：
     因為數據在陣列中，所以我們使用陣列的 splice 方法 (陣列的索引，刪除幾個) 

     如何獲得陣列索引值？：
     我們透過 陣列的 bookmark資料.findIndex ()  並且使用方法， 參數.id === id 


     [判斷邏輯,去將我們的設定是 true 的資料去改為 false ]


     3. 重新整合我們在 C 中控制 addBookMark 的方法
       因為我們現在有兩個方法 1. addBookmark 2. deleteBookmark

       所以我們需要利用判斷使用情況，決定要用什麼方法

       [如何判斷?] 
       需要確定 資料中的 bookmarked 是什麼狀態
       true : deleteBookmark
       false : addBookmark

*/

/* 實現添加到我的最愛功能
@ 我的最愛專區。
 1. 首先我們要有 HTML 結構，建構出這些專區出來

 2. 將這些專區的 HTML 使用 JS 去處理這些 DOM 
   JS操作：
  1. 選取父元素作為我們需要操控的對象， document.querySelector
  2. 添加 DOM 到該父元素的結構渲染 UI (插入到DOM 中)
  3. 設置錯誤訊息 
  4. 設置當被選中時 能夠標示當下的 class
  5. 基本上都是夠過參數去使用
   
  [ 判斷何時要添加到我的最愛 ]：
  1. 當我們點選標記最愛的按鈕時，他會放到到該區域 [所以會有個區域，專門放進被標記的項目]

  2. 該在哪裡執行？
     應該與點選標記時放在一起執行。這樣操作才會同步


  3. 他也需要一個更新資料的程式。[在當我們渲染食譜時]

*/

/* 整合我們的資料
@ 如果我們有兩個相似的外部引用程式，他們方法與資料相似 (來自 view)
  這些資料都擠在一個資料夾中，這將會導致我們的資料混亂 (放在 controller)
   這將會導致我們的數據難以追蹤，和維護 (功能)


# 為了處理這些雜亂的資料，我們應該提高他的重複性 (放在一個共同的資料中) 
  這個共同的資料夾的功能就是負責處理共用的資料的

  1.view
  2.preView
  3.bookMarkView 
  4.sideBarView

  3 與 4 共用一個 2 ， 全部 繼承 1

  2. 負責產出公用的 HTML 結溝

  3,4 則是負責循環 2 HTML，並產生文字
  (透過 import 去獲得)

  [問題]：
  我們直接使用他是不行的：

  因為他我們這些方法是封裝在 1 裡面呼叫，所以需要夠過 1 去接受資料參數。其他地方接收不到資料參數。
  這樣我們 this 才會訪問到我們特定的屬性，才會有資料

  [問題]
  2 本身 HTML 方法中他也會需要參數 [參數來源?]

  透過 1 去處理，新增一個參數並使用預設 = true
  並在 1 獲得獲得 HTML 字串之後判斷

  if(!參數) 返回HTML 字串 [代表他不會選染到 ui 介面]

  這樣流程控制了要不要選染到 UI


  [運作邏輯]
  我們一開始得到的 3,4 this.data 會透過 map 循環 我們透過 2 的 1 去渲染生成字串。透過 join 轉成文字

  為了獲得 2 的HTML this.data 我們需要在該次的渲染流程返回 [字串模版]
  [設置一個開關] 1,打開預設 2,關起就是單純字串

  ！如果我們  3,4 this.data map 直接循環 2 就會出現沒有資料設定他的 HTML 模版

  所以總共會出現兩次的渲染 UI 
  第一次是由 contorller 
  第二次是由 3,4 map 的 2 [我們只需要他返回字串] 

  最終我們透過 join 生成文字模版

  由第一次渲染的流程 渲染 UI 

  「以上都是透過要拿到 this.data 去做的」
*/

/* 緩存我們的資料
實現特定的資料不會因為頁面重整流失
  
@ 基本上處理資料的都在 model 中，

  [ 該怎麼緩存 ]：
    將資料放進去 localStorage

  1. 所以我們在 model 創建一個函數  
     使用 localStorage.setItem( 'name' , JSON.stringify( state.bookmarks ) )

  2. 我們把我們把他放在相關功能裡面去呼叫

  [ 獲取緩存 ]
   先在有了資料，我們從本地儲存中撈出來

  1. 一樣在 mode中 創建一個函數負責撈出 local 的資料
    localStorage.getItem('剛剛設置的名稱')

  2. 我們設置 localStorage 時候是使用 stringify
     當我們撈取時我們區要 JSON.parse( '剛剛設置的名稱的變數' )

  3. 當我們有 localStorage 就把原本資料設定為 JSON.parse 的資料

  [bug]
     頁面渲染失敗？
     
     透過 debug 我們得知一開始我們的元素是 HTML 父層標籤
     所以我們拿不到資料 [context]

  [解決]
  為了處了這樣的方式，我們就需要在更新資料前先得到 local資料

  怎麼渲染資料？
  所以我們需要 load 事件添加函數 [ 該資料對應到我們原先從 local 拿到的資料]
  該load 事件是觸發一開始渲染的資料
  
  使用發布者訂閱者模式
*/

/* 處理表單數據
@ 在JS 中處理表單數據我們需要分為幾個階段


@ 在 view 中我們要處理 UI 表單的資料。

[ 要控制表單的元素 ] CLASS ： 
1.  form 標籤 [ parent ] -> 控制表單行為

2. 包覆 form 標籤的元素 [ window ] -> 控制表單的位置
 tips: 如果表單有控制 display 的元素我們也需要去處理他

3. 表開開關按鈕


[ 監聽表單傳送 ] Function：

1. 我們創建一個函數，用於處理 addEventListenert 當使用者某個行為時
   我們將會觸發函數 [需要注意 addEventListenert 他的 callback function this指向 undefinde -> (usr strict ) ]

2. 顯示隱藏 :使用者點擊事件時，添加或移除 display class

3. 在哪執行？ 
    如果我們在 class 中使用，我們就在 constructor 使用
    如果剛好他是 extends class ， constructor 就需要加上 super


[ 表單傳送 ] Function：
 點擊按鈕傳送表單
  # [怎麼傳送出表單？ ]



[使用發布-訂閱者模式]  

 1. 父元素監聽事件， 'submit' 事件
 2. 我們取消表單預設行為 [避免重新渲染頁面]

 # [如何獲取表單的值？]
    透過使用 XMLHttpRequest -> multipart/Formdata

1. 所以我們使用 new Formdata (this )  傳入值 [this] -> 因為我們在函數內部
     (因為表單需要 HTML 表單元素)


  回傳的值：
  創建一個新的FormData物件，並以特定的表單元素作為初始化數據。

  但 new Formdata 給我們的值，一開始並不可用 ，需要轉化他：
   1. 透過解構賦值 [... new FroData(this) ]

   2.當我們需要使用物件， 使用 object.fromEntrise( 上面解構的值 )

   3. 把我們處理好的 FroData 交給參數執行
  
  
[controller]:

 我們透過 controller 操作 view 方法
 並使用 model 中的函數傳給 view 執行

controller :
1. 操作 view 方法
2. 創建函數與 view 方法聯繫( 傳送 model資料 ) 


[model]:

[ 上傳 API ]
我們需要把這些資料上傳到 API ，所以我們應該透過 model 上傳

[透過 API 上傳到表單]：
 
1. 創建 async 函數

2. 取得我們 HTML input 資料，並且處理他 
 [資料是誰？ ]
  我們透過  C -> V - >M -> C 過程傳送過來的

3. 我們需要對資料進行篩選:
  首先我們會獲得我們的物件，我們需要對其轉換成陣列
    Object.entries() :直接取得所有 property 的 name 和 value，並以陣列回傳

  我們接著使用 filter 過濾我們不要的值:
   參數.startsWith ('我們要包含的開頭 ')與 參數不能有空直



  startsWith 方法： {  
   startsWith():
    方法用來判斷當前字符串是否以另外一個給定的子字符串開頭，並根據判斷結果返回 true 或 false。

    str.startsWith(searchString[, position])

  searchString
    要搜索的子字符串。

   position 可选
    在 str 中搜索 searchString 的开始位置，默认值为 0。
}
  4 我們接著需要把過濾好的文字取出，並放進去一個物件中進行轉換
    我們當下的值是陣列，有 index ,value 我們需要對他轉成字串

    [如何使用]：
    1. 把 arry 中的空值換成空字串
    2. 分割掉 index 中的 ',' 為字串分割點
    3. 回傳字串並且把他設定預設為 null
    4. 為了避免使用者操作失誤，我們需要設置檢查，並顯示在 UI 介面中

    [轉換字串過成]
    透過 mpa :
    replaceAll( 所有的空格換成空字串 ) -> split(','  切割陣列中的 ,) 
    我們保持純函數所以我們創建陣列，並把處理好的放進去並回傳他


    const [a,b,c] = replaceAll( 所有的空格換成空字串 ) -> split(',') 

    回傳他{ a,b,c } 我們可以對他進行設定使用三元運算符號

    ⚠️不過這樣會有問題：
     對於需要空格的單字也會被替換掉，所以我們要修改
     首先我們提取 , 字串成為 Array，之後 map 他，使用 trim
     arr.split(',').map(el => el.trim())

    [我們需要規定表單格式]：
    當我們轉換完的值，不等於某個數量時，我們需要拋出錯誤，並傳遞到 UI 介面

    傳遞到 UI:
    在 C 中控制 M 的部分我們使用 try / catch
    catch 中我們紀錄 M 回傳的錯誤，並且使用渲染 UI 錯誤，的方法接收到我們的錯誤內容


    5.準備上傳到 API 中
     [需要確認]

    @ 資料：
     我們需要確認我們上傳的資料，需要與我們從 API 下載的資料一樣
     

    @ HTTP ：
    * 請求報文 :
     
     透過 json 格式的資料傳送到 API 傳送 = post
     我們在做 post 時候需要使用 fetch 進行 AJAX 的 HTTP post方法
     在 post 方法中我們需要 定義 request message：

     1. Method : "POST"

     2. 自定義 headers 請求頭: 'Content-Type': MIME application/json

     3. 傳送我們 內容實體（Request Body）：        
        對應於 fetch 方法的第二個參數的 body 屬性，
        用於傳遞請求的內容實體，例如表單數據、JSON 數據等。 

        如果請求不包含內容實體，則可以為空或省略。

    * ' 響應報文 ' :
     我們須要處理 '響應報文' 
     1. 使用 資料.json()
     2. 當資料逾時我們需要拋出錯誤
     3. 當資料狀態 !OK 時我們需要進行拋錯
        拋出 json 的錯誤訊息，與 fetch 的狀態訊息


    
    @ 處理我們 auth
      在處理 auth 中我們需要透過 api key 才能被允許使用


  6. 將我們上傳的資料也發送到 UI 介面中
     他也需要透過 get 方式轉換資料，所以我們可以共同使用一個轉換資料
     讓 POST 與 GET 都使用到

     POST 轉換資料後，我們把他放在公用的資料裡面
       
  7. 我們需要添加書籤屬性與保留 id 值去操作
    1. 添加書籤 ：
      我們的計畫流程當我們自定義新的資料，我們就會自動添加到 bookmarkup

      所以我們直接呼叫 addBookMark方法

    2. 保留 key :
      我們在我們的公用的轉換資料中，特別設定
      當我們有 key 才會轉換 key

      [實現]：
      透過  && 運算子， 去判斷
      ...(key && {key: data.key })

   8. 在 Contorl 中我們
   
      1. 設定上傳完資料後渲染頁面

      2. 顯示是傳成功的消息

      3. 設定關閉訊息時延遲執行

      4. 添加加載時的過場動畫


  9. 處理我們的 URL 中的 id，與更新我們的標籤
     
    1.我們上傳 data 之後 url 並不會有變化，所以當我們重新整理是上一個 url 的畫面 
      透過使用 history

    2.我們當下新增的標籤不會馬上插入到 bookmark 裡面，
      所以我們需要渲染 bookmark

    3.當我們都處理好之後，我們需要在網頁更換他的 id
       所以我們需要在不重新整理的前提下轉換

      使用 history.pushstate( null, '' , `# 加上我們的 id 資料` )


    4. 重構我們的 AJAX fetch 方法 ，使他能夠共用 (透過 3元判斷，並使用參數 預設)



  10. 添加圖標，表示這是我們自己添加的項目
      在對於請求的 API 中我們可以透過 auth 得到 token
      我們可以透過 token 去訪問到我們專屬的項目


     1. 所以如果 api 有設定，我們就可以透過 ?key= token 
       訪問到專屬於我們的資料

      tips: 該資料會顯示於 sidebar 並且會標示自定義的 icon

    2. 我們需要透過 HTML 插入時檢查是否有特定的 token
       如果有那就是代表是我們的自定義 item，沒有那就是公共 item
        ex: token? '' : hidden

       我們需要兩個在 UI 元件中顯示 1. 內容  2. sidebar 3. bookmark

       2. 會有一個問題，就是我們目前並沒有添加 token 在 sidebar load 事件中
          所以我們需要特別去添加 key 甚至是檢查有沒有
        
-
_
*/

/* 編寫我們的文檔
@ 編寫 JS 文檔的標準方法 （ JSDocs ）：

#
*
-
_
*/
