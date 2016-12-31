const request = (method, url, data, config = {}) => {
  let options = Object.assign({}, config, {
    url,
    method,
    data,
    baseURL: window.AppConf.apiHost
  });
  options.headers = options.headers || {};
  return new Promise((resolve, reject) => {
    window.axios.request(options)
      .then(res => {
        let data = res.data;
        if (!data) {
          return resolve(data);
        }
        if (data.HasError) {
          if (!res.config.notNotifyError) {
            // toast.msg(data.ErrorMessage);
          }
          reject(res);
        }
        resolve(data);
      }).catch(res => {
        if (!res.config.notNotifyError) {
          // toast.msg(res.message);
        }
        reject(res);
      });
  });
};

export const ajax = {
  get(url, config) {
    return request('get', url, null, config);
  },
  delete(url, config) {
    return request('delete', url, null, config);
  },
  head(url, config) {
    return request('head', url, null, config);
  },
  post(url, data, config) {
    return request('post', url, data, config);
  },
  put(url, data, config) {
    return request('put', url, data, config);
  },
  patch(url, data, config) {
    return request('path', url, data, config);
  },
  setCommonHeader(key, value) {
    window.axios.defaults.headers.common[key] = value;
  }
};
