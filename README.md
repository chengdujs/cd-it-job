# cd-it-job
针对成都IT小伙伴们的工作机会（招聘，求职）交流的微信订阅号项目。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

## 开发规范

1. 统一使用2个空格缩进，文件末尾空出一行。（项目已包含editorconfig配置文件，建议安装编辑器/IDE的editorconfig插件）
2. 使用常规的 `JavaScript` 编码规范
3. 使用ES6编码风格最佳
4. 请务必提交可运行的代码
5. 发起PR的时候，请务必注明编写的功能
6. 如果可以，请编写单元测试代码
7. Page命名，以大驼峰为准（驼峰，首字母大写，如：HomePage）
8. Component命名，全小写（中横线分割，如：job-item）

## 目录说明

```
build/ -- 构建目录
config/ -- 构建配置目录
docs/ -- 文档目录
src/ -- 源代码目录（重点关注目录）
  assets/ -- 需要打包的资源目录
  common/ -- 公共服务
    ajax.js -- ajax封装
    eventBus.js -- 事件中心封装
    storage.js -- 存储封装（Local, Session, Memory)
  components/ -- 组件目录（此处用于放置公共组件）
  config/ -- 系统配置目录
    config.dev.js -- 开发时的配置
    config.prod.js -- 上线时的配置（保证和开发时具有相同的属性）
  pages/ -- 页面目录，具体的页面
  store/ -- Vuex相关目录
  vw-ui/ -- 组件目录，以后将会拆分到vw-ui项目中，放置对weui的包装组件
  App.vue
  main.js -- 程序入口文件
  router.config.js -- 全局路由配置文件
static/ -- 第三方静态资源目录
test/ -- 测试代码目录
.babelrc -- babel配置文件
.editorconfig  -- 编辑器格式通用配置文件，建议安装EditorConfig插件
index.html  -- 入口HTML文件
...
```

## 贡献者

**注：排名不分先后**

![hstarorg](https://avatars3.githubusercontent.com/u/4043284?v=3&s=30)
[hstarorg](https://github.com/hstarorg)

![mabelyong](https://avatars3.githubusercontent.com/u/15611759?v=3&s=30)
[mabelyong](https://github.com/mabelyong)

![MrTreasure](https://avatars3.githubusercontent.com/u/22043285?v=3&s=30)
[MrTreasure](https://github.com/MrTreasure)

![jikeytang](https://avatars3.githubusercontent.com/u/539745?v=3&s=30)
[jikeytang](https://github.com/jikeytang)

![yelingfeng](https://avatars1.githubusercontent.com/u/1932350?v=3&s=30)
[yelingfeng](https://github.com/yelingfeng)

![zerosrat](https://avatars3.githubusercontent.com/u/8179987?v=3&s=30)
[zerosrat](https://github.com/zerosrat)
