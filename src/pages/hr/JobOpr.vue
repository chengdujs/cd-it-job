<template>
  <div class="weui-btn-bg">
    <a href="javascript:;" class="weui-btn weui-btn_primary">修改</a>
    <a href="javascript:;" class="weui-btn weui-btn_warn">下线</a>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .weui {
    &-btn {
      &-bg {
        a {
          display: inline-block;
          margin-top: 0;
          width: 48%;

          &:first-child {
            margin-right: 1%;
          }

          &:last-child {
            margin-left: 1%;
          }
        }
      }
    }
  }
</style>
