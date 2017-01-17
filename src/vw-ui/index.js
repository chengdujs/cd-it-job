import Button from './components/button/Button';
import Tabbar from './components/tabbar/Tabbar';
import TabItem from './components/tabbar/TabItem';

import Toast from './components/toast/toast.js';

// All components.
const COMPONENTS = [
  Button,
  Tabbar,
  TabItem
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
