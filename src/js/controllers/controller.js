import * as model from '../models/model';
import * as recipeView from '../views/recipeView';
import * as searchView from '../views/searchView';
import * as resultsView from '../views/resultView';
import * as paginationView from '../views/paginationView';
import * as bookMarkView from '../views/bookMarkView';
import addRecipeView from '../views/addRecipeView';

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
