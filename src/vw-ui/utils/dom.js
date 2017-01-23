class LiteQuery {
  constructor(selector, doc = window.document) {
    this._nodeList = [];
    if (typeof selector === 'string') {
      this._nodeList = [].slice.call(doc.querySelectorAll(selector));
    } else if (selector instanceof window.Node) {
      this._nodeList = [selector];
    } else {
      throw new Error('arguments error');
    }
  }

  on(eventName, eventHandler, eventPropagation = false) {
    this._nodeList.forEach(el => {
      el.addEventListener(eventName, eventHandler, eventPropagation);
    });
    return this;
  }

  off(eventName, eventHandler = null) {
    this._nodeList.forEach(el => {
      el.removeEventListener(eventName, eventHandler);
    });
    return this;
  }

  getStyle(key) {
    if (this._nodeList.length !== 1) {
      throw new Error('getStyle must be called by one element.');
    }
    let el = this._nodeList[0];
    let elStyleObj = window.getComputedStyle(el);
    if (key) {
      return elStyleObj[key];
    }
    return elStyleObj;
  }

  addClass(className) {
    this._nodeList.forEach(el => {
      if (el.classList.indexOf(className) < 0) {
        el.classList.add(...className.split(' '));
      }
    });
    return this;
  }

  removeClass(className) {
    this._nodeList.forEach(el => {
      if (el.classList.indexOf(className) >= 0) {
        el.classList.remove(...className.split(' '));
      }
    });
  }

  css(key, value) {
    let styleObj;
    if (typeof key === 'string') {
      styleObj = { [key]: value };
    } else {
      styleObj = key;
    }
    let keys = Object.keys(styleObj);
    this._nodeList.forEach(el => {
      keys.forEach(styleProp => {
        el.style[styleProp] = styleObj[styleProp];
      });
    });
    return this;
  }
}

export const $$ = function (selector, doc) {
  return new LiteQuery(selector, doc);
};
