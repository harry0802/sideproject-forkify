import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.getError();
    this._data = data;
    const markUp = this._getStr();
    if (!render) return markUp;
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', markUp);
  }

  // update(data) {
  //   this._data = data;
  //   const newMarkUp = this._getStr();
  //   const newNode = document.createRange().createContextualFragment(newMarkUp);

  //   const newElement = Array.from(newNode.querySelectorAll('*'));

  //   const oldElement = Array.from(this._parentElment.querySelectorAll('*'));
  //   newElement.forEach((newEl, i) => {
  //     let oldEl = oldElement[i];
  //     // 更新文字邏輯

  //     if (
  //       !newEl.isEqualNode(oldEl) &&
  //       newEl.firstChild?.nodeValue.trim() !== ''
  //     ) {
  //       console.log({ oldEl });
  //       console.log({ newEl });

  //       oldEl.textContent = newEl.textContent;
  //     }

  //     // 跟新屬性邏輯
  //     if (!newEl.isEqualNode(oldEl)) {
  //       Array.from(newEl.attributes).forEach(newAttr =>
  //         oldEl.setAttribute(newAttr.name, newAttr.value)
  //       );
  //     }
  //   });
  // }
  update(data) {
    this._data = data;
    const newMarkUp = this._getStr();
    const parser = new DOMParser();
    const newDoc = parser.parseFromString(newMarkUp, 'text/html');
    const newElements = Array.from(newDoc.querySelectorAll('*'));
    const oldElements = Array.from(this._parentElment.querySelectorAll('*'));

    //過濾掉特定的標籤
    const filteredElements = newElements.filter(element => {
      const tagName = element.tagName.toLowerCase();
      return tagName !== 'html' && tagName !== 'head' && tagName !== 'body';
    });
    // 如果沒東西就返回
    if (filteredElements.length === 0) return;

    const length = Math.min(newElements.length, oldElements.length);

    for (let i = 0; i < length; i++) {
      const newEl = filteredElements[i];
      const oldEl = oldElements[i];

      // 更新文字邏輯
      if (
        !newEl.isEqualNode(oldEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        oldEl.textContent = newEl.textContent;
      }

      // 更新屬性邏輯
      const newAttributes = Array.from(newEl.attributes);
      const oldAttributes = Array.from(oldEl.attributes);
      const attributesToUpdate = newAttributes.filter(newAttr => {
        const oldAttr = oldAttributes.find(attr => attr.name === newAttr.name);
        return !oldAttr || newAttr.value !== oldAttr.value;
      });

      attributesToUpdate.forEach(newAttr => {
        oldEl.setAttribute(newAttr.name, newAttr.value);
      });
    }
  }

  _clear() {
    this._parentElment.innerHTML = '';
  }

  getError(message = this._errorMessage) {
    const html = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', html);
  }
  getLoadSpinner() {
    const html = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
    </div> `;
    this._clear();
    this._parentElment.insertAdjacentHTML('afterbegin', html);
  }
}
