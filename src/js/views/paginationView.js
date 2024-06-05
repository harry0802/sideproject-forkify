import View from './view';
import config from '../../js/models/config.js';
import icons from 'url:../../img/icons.svg';

class RenderPagination extends View {
  _parentElment = document.querySelector('.pagination');
  _getStr() {
    return this.generatedSearchPagination();
  }
  getHandlerButton(handler) {
    this._parentElment.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline ');
      if (!btn) return;
      const gotoPage = +btn.dataset.goto;
      console.log(gotoPage);

      handler(gotoPage);
    });
  }
  generatedSearchPagination = function () {
    const data = this._data;
    const quantity = Math.ceil(data.result.length / config.page_quantity);
    if (data.page === 1 && quantity > 1) {
      return this.getNextOrPrev('next');
    }
    if (data.page === quantity && quantity > 1) {
      return this.getNextOrPrev('prev');
    }
    if (data.page < quantity) {
      return this.getNextOrPrev();
    }

    return;
  };

  getNextOrPrev(direction) {
    const btnPre = `
     <button data-goto='${
       this._data.page - 1
     }' class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>page ${this._data.page - 1}</span>
  </button>
  `;
    const btnNext = `
  <button data-goto='${
    this._data.page + 1
  }' class="btn--inline pagination__btn--next">
  <span>page ${this._data.page + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>
  `;

    const btnAll = btnPre + btnNext;

    if (direction === 'prev') return btnPre;
    if (direction === 'next') return btnNext;

    return btnAll;
  }
}

const pagination = () => new RenderPagination();
export { pagination };
