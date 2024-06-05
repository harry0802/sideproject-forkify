import View from '../views/view.js';

class RenderSearchView extends View {
  _parentElment = document.querySelector('.search');

  getInputValue() {
    const query = document.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    return (document.querySelector('.search__field').value = '');
  }
  getHandlerSearch(fn) {
    this._parentElment.addEventListener('submit', function (even) {
      even.preventDefault();

      fn();
    });
  }
}

const createSearchView = () => new RenderSearchView();

export { createSearchView };
