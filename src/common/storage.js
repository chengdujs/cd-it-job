const globalObj = {};

class WebStorage {
  constructor(storage) {
    this.storage = storage;
  }
  get(key) {
    let valueStr = this.storage.getItem(key);
    try {
      return JSON.parse(valueStr);
    } catch (e) {
      return valueStr;
    }
  }
  set(key, value) {
    let valueStr = JSON.stringify(value);
    return this.storage.setItem(key, valueStr);
  }
  remove(key) {
    this.storage.removeItem(key);
  }
  removeAll() {
    this.storage.clear();
  }
}

export const storage = {
  local: new WebStorage(window.localStorage),
  session: new WebStorage(window.sessionStorage),
  memory: {
    get(key) {
      return globalObj[key];
    },
    set(key, value) {
      globalObj[key] = value;
    },
    remove(key) {
      globalObj[key] = undefined;
    },
    removeAll() {
      Object.keys(globalObj).forEach(key => { globalObj[key] = undefined });
    }
  }
};
