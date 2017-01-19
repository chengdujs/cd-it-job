import Vue from 'vue';

const ToastConstructor = Vue.extend(require('./toast.vue'));
const toastPool = [];

const getAnInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({
    el: document.createElement('div')
  });
};

const returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

const removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function () {
  this.$el.addEventListener('transitionend', removeDom);
  this.opacity = 0;
  this.closeCallback();
  returnAnInstance(this);
};

const showToast = (options) => {
  let duration = options.duration || 3000;
  let instance = getAnInstance();

  clearTimeout(instance.timer);
  instance.content = options.content;
  if (options.rootClass) {
    instance.rootClass = options.rootClass;
  }
  if (options.iconType) {
    instance.iconType = options.iconType;
  }
  instance.iconClass = options.iconClass;
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

const Toast = {
  name: '$toast',
  success(message, options, callback) {
    options = options || {};
    showToast({
      content: message,
      duration: options.duration || 3000,
      iconClass: 'weui-icon-success-no-circle',
      callback: callback || noop
    });
  },
  msg(message, options, callback) {
    options = options || {};
    showToast({
      rootClass: 'vw-toast-small',
      content: message,
      duration: options.duration || 3000,
      iconType: options.icon,
      callback: callback || noop
    });
  }
};

export default Toast;
