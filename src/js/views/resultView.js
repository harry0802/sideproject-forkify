import View from '../views/view.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElment = document.querySelector('.results');
  _errorMessage = `錯誤的操作，請重新檢查你的配置`;
  message = '';
  _getStr() {
    return this._data.map(bk => previewView.render(bk, false)).join('');
  }
}

const resultsView = () => new ResultsView();

export { resultsView };
