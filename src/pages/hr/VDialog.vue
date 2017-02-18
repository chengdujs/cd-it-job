<template>
  <!-- 数据暂时固定不能作为公用组件 -->
  <div :class="[isHidden ? 'v-dialog' : '']">
    <div :class="[isHidden ? '' : weuiMask, isHidden ? '' : 'weuiAnimateFadeOut']"></div>
    <div :class="[isHidden ? '' : dialogClass, isAndroid ? androidSkin : '', isHidden ? '' : 'weuiAnimateFadeOut']">
        <div v-if="dialog.title" class="weui-dialog__hd"><strong class="weui-dialog__title">{{ dialog.title }}</strong></div>
        <div class="weui-dialog__bd">{{ dialog.content }}</div>
        <div class="weui-dialog__ft">
            <a v-for="(button, key) in dialog.buttons" :data-id="key" @click="doClick" href="javascript:;" :class="'weui-dialog__btn weui-dialog__btn_' + button.type">{{ button.label }}</a>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        'vDialog': 'vm-dialog',
        'dialogClass': 'weui-dialog',
        'androidSkin': 'weui-skin_android',
        'weuiMask': 'weui-mask',
        'weuiAnimateFadeOut': 'weui-animate-fade-out',
        'isAndroid': false,
        'localIsHidden': this.isHidden,
        'dialog': {
          title: '保存成功！',
          content: '是否发布？',
          buttons: [{
            type: 'default',
            label: '返回',
            fn() {
              this.$emit('msg');
            }
          }, {
            type: 'primary',
            label: '发布',
            fn() {
              // 提交职位状态修改请求
              // 跳转至职位管理列表
              this.$router.push('/hr/job');
            }
          }]
        }
      }
    },
    methods: {
      doClick(e) {
        this.dialog.buttons[e.currentTarget.dataset.id].fn.call(this);
      }
    },
    props: ['isHidden']
  }
</script>

<style lang="scss" scoped>
  .v-dialog {
    display: none;
  }
</style>
