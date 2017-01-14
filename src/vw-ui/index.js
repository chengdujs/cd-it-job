import Button from './button/Button';
import Tabbar from './tabbar/Tabbar';
import TabItem from './tabbar/TabItem';

// All components.
const COMPONENTS = [
  Button,
  Tabbar,
  TabItem
];

const install = function (Vue) {
  if (install.installed) return;
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
