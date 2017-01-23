import Button from './components/button/button';

import Tabbar from './components/tabbar/tabbar';
import TabItem from './components/tabbar/tab-item';

import Slider from './components/slider/slider';

import Swipe from './components/swipe/swipe';
import SwipeItem from './components/swipe/swipe-item';

import Toast from './components/toast/toast.js';
import Toptip from './components/toptip/toptip.js';

// All components.
const COMPONENTS = [
  Button,
  Tabbar,
  TabItem,
  Slider,
  Swipe,
  SwipeItem
];

const SERVICES = [
  Toast,
  Toptip
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
