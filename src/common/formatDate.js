/**
 * 格式化日期
 * @param date 时间对象
 * @param fmt  要格式化的日期
 * @returns {String}
 * @example formatDate(date, 'yyyy-MM-dd hh:mm:ss') => '2017-01-17 11:09:33'
 */
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt
    .replace(RegExp.$1, (date.getFullYear() + ''))
    .substring(4 - RegExp.$1.length);
  };
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  };

  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
};
