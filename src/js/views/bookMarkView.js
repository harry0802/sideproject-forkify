import previewView from './previewView';
import View from './view';

class bookMarkView extends View {
  _parentElment = document.querySelector('.bookmarks__list');
  _errorMessage = '目前尚未有標記';
  getHandlerLoadBookmark(handler) {
    window.addEventListener('load', handler);
  }
  _getStr() {
    return this._data.map(bk => previewView.render(bk, false)).join('');
  }
}

const bookmarkview = function () {
  return new bookMarkView();
};

export { bookmarkview };
