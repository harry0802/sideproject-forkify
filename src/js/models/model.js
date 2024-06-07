import config from '../../js/models/config.js';
import helpers from '../../js/utils/helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
  },
  bookmarks: [],
};
const creatRicipeObject = function (data) {
  let { recipe } = data.data;
  const recipeObject = { ...recipe };

  return recipeObject;
};
export const getFetchID = async id => {
  try {
    const data = await helpers.AJAX(`${config.getURL}${id}`);
    const recipeObject = creatRicipeObject(data);
    state.recipe = { ...recipeObject };

    if (state.bookmarks.some(mark => mark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    return recipeObject;
  } catch (err) {
    throw err;
  }
};

export const getFetchSearch = async (query = 'pizza') => {
  try {
    const data = await helpers.AJAX(
      `${config.getURL}?search=${query}&key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`
    );
    const { recipes } = data.data;
    // 透過  Object.keys 在 forEach 所有的key
    recipes.map(obj => {
      let recipeObject = {};
      Object.keys(obj).forEach(key => {
        recipeObject[key] = obj[key];
      });
      state.search.page = 1;
      if (state.search.result.length >= recipes.length) return;
      state.search.result.push(recipeObject);
    });
  } catch (err) {
    throw err;
  }
};

const persistBookmark = function () {
  localStorage.setItem('bookMark', JSON.stringify(state.bookmarks));
};

export const generatedSearchResult = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * config.page_quantity;
  const end = page * config.page_quantity;
  return state.search.result.slice(start, end);
};
export const addBookMarked = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmark();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmark();
};

export const updataServings = function (newServings) {
  state.recipe.ingredients.forEach(data => {
    data.quantity = (data.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};
const init = function () {
  const localData = localStorage.getItem('bookMark');
  if (localData) state.bookmarks = JSON.parse(localData);
};
init();

const clearLocal = function () {
  removeItem.removeItem('bookMark');
};
// clearLocal();
export const addRecipeUploadAPI = async function (formdata) {
  try {
    const ingredients = Object.entries(formdata)
      .filter(el => el[0].startsWith('ingredient') && el[1] !== '')
      .map(el => {
        const textArr = el[1].replaceAll(' ', '').split(',');
        if (textArr.length !== 3)
          throw new Error('你必須有三個項目並使用 , 區隔 ');

        const [quantity, unit, description] = textArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    let addRecipe = {
      publisher: formdata.publisher,
      source_url: formdata.sourceUrl,
      image_url: formdata.image,
      title: formdata.title,
      servings: formdata.servings,
      cooking_time: formdata.cookingTime,
      ingredients,
    };

    const data = await helpers.AJAX(
      `${config.getURL}?key=b29b5fa3-c656-410b-b747-b90d3e3eb9db`,
      addRecipe
    );
    const addRecipeObject = creatRicipeObject(data);
    state.recipe = { ...addRecipeObject };
  } catch (err) {
    throw err;
  }
};
