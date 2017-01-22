import Button from './components/button/button';

import Tabbar from './components/tabbar/tabbar';
import TabItem from './components/tabbar/tab-item';

import Slider from './components/slider/slider';

import Toast from './components/toast/toast.js';

// All components.
const COMPONENTS = [
  Button,
  Tabbar,
  TabItem,
  Slider
];

const SERVICES = [
  Toast
];

const install = Vue => {
  if (install.installed) return;
  SERVICES.forEach(service => {
    Vue[service.name] = Vue.prototype[service.name] = service;
  });
  COMPONENTS.forEach(comp => {
    Vue.component(comp.name, comp);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version: '0.0.1'
};
