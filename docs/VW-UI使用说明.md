# Components

## Button

```html
<vw-button></vw-button>
```
**Props**

|属性 | 类型 | 详情|
|---|---|---|
| type | String | 可选值：default, primary, warn |
| disabled | Boolean | 是否被禁用，禁用时click无效 |
| plain | Boolean | 是否是plain样式 |
| mini | Boolean | 是否是小号按钮 |

**Events**

| 事件名 | 详情|
|---|---|
| click | 用户点击按钮事件 |

## Tabbar/TabbarItem

```html
<vw-tabbar v-model="selected">
  <vw-tab-item label="首页" value="tab1">
    <i slot="icon" class="ion-home">
  </vw-tab-item>
</vw-tabbar>
```

**Tabbar Props**

|属性 | 类型 | 详情|
|---|---|---|
| value | Any | 绑定当前选定tabbar-item的value属性 |

**Tabbar Events**

| 事件名 | 详情|
|---|---|
N/A

**TabbarItem Props**

|属性 | 类型 | 详情|
|---|---|---|
| label | String | 底部tab-item的标签文本 |
| badge | Number\|Boolean | tab-item的badge标签（右上角小红点），默认false，为true显示小红点，为具体数字时，显示该数字|
| value | Any | tab-item的值 |

**TabbarItem Events**

| 事件名 | 详情|
|---|---|
N/A

## Toast

```javascript
// 也可使用 this.$toast
Vue.$toast.success(message: string, options: {
  duration: number // 自动关闭时间（单位，毫秒）
}, callback: Function);

this.$toast.msg(message: string, options: {
  duration: number, // 自动关闭时间
  icon: enum{success, info, warn, error} // 显示的图标
}, callback: Function);
```
