/**
 * 每一个模块一个 key-value 结构
*/

/**
 * invite 模块的 actions 常量的配置
 * 导入方式 import { INVITE } from ''
 * 这样的好处就是能够添加数据的时候可以不用修改导入的地方
*/
export const INVITE = {
  GET_LIST: 'GET_LIST'
};

/**
 * job模块
 * 包含首页、搜索页的招聘信息
*/

export const JOB = {
  GET_JOBS: 'GET_JOBS',
  GET_CITIES: 'GET_CITIES'
};
