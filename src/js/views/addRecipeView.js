import View from './view';

class addRecipeView extends View {
  _parentElment = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _errorMessage = '🟢 以成功上傳至伺服器';
  constructor() {
    super();
    this.#getHandlerShowFrom();
    this.#getHandlerhiddenFrom();
  }
  toggleBtn() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  #getHandlerShowFrom() {
    this._btnOpen.addEventListener('click', this.toggleBtn.bind(this));
  }
  #getHandlerhiddenFrom() {
    this._btnClose.addEventListener('click', this.toggleBtn.bind(this));
    this._overlay.addEventListener('click', this.toggleBtn.bind(this));
  }

  getHandlerUpLoad(handler) {
    this._parentElment.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
}

export default new addRecipeView();
