const conf = {
  isDebug: true,
  apiHost: 'http://chat.hstar.org:8601/HkGhqLCUg'
};

const api = {
  // 个人中心模块
  my: {
    myInfoUrl: conf.apiHost + '/my/myinfo',
    myControlUrl: conf.apiHost + '/my/mycontrol'
  }
};

conf.api = api;

window.AppConf = conf;
