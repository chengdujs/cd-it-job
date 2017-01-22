import Vue from 'vue';

const ToptipConstructor = Vue.extend(require('./toptip.vue'));
const toptipPool = [];

const getAnInstance = () => {
  if (toptipPool.length > 0) {
    let instance = toptipPool[0];
    toptipPool.splice(0, 1);
    return instance;
  }
  return new ToptipConstructor({
    el: document.createElement('div')
  });
};

const returnAnInstance = instance => {
  if (instance) {
    toptipPool.push(instance);
  }
};

const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToptipConstructor.prototype.close = function () {
  this.$el.addEventListener('transitionend', removeDom);
  this.opacity = 0;
  this.closeCallback();
  returnAnInstance(this);
};

const showToptip = (options) => {
  let duration = options.duration || 3000;
  let instance = getAnInstance();

  clearTimeout(instance.timer);
  instance.content = options.content;
  instance.closeCallback = options.callback;
  document.body.appendChild(instance.$el);

  Vue.nextTick(function () {
    instance.opacity = 1;
    instance.$el.removeEventListener('transitionend', removeDom);
    ~duration && (instance.timer = setTimeout(() => {
      instance.close();
    }, duration));
  });

  return instance;
};

const noop = function () { };

const Toptip = {
  name: '$toptip',
  tip(message, options, callback) {
    options = options || {};
    showToptip({
      content: message,
      duration: options.duration || 3000,
      callback: callback || noop
    });
  }
};

export default Toptip;
