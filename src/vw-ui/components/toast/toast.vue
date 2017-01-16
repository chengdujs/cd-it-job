<style>
  .vw-toast{
    opacity: 0;
    transition: opacity .3s linear;
  }
  .vw-toast.vw-toast-small{
    display: flex;
    justify-content: center;
  }
  .vw-toast.vw-toast-small .weui-toast{
    min-height: auto;
    position: initial;
    margin-left: initial;
    width: auto;
    max-width: 80%;
  }
  .vw-toast.vw-toast-small .weui-toast p{
    margin-bottom: 0;
    padding: 5px 10px;
  }
  .vw-toast.vw-toast-small .weui-toast p i{
    float: left;
  }
</style>
<template>
  <div class="vw-toast" :style="{opacity: opacity}" :class="rootClass">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i class="weui-icon_toast" :class="iconClass" v-if="!rootClass"></i>
      <p class="weui-toast__content"><i :class="msgIcon"></i>{{content}}</p>
    </div>
  </div>
</template>
<script>
  const iconMap = {
    success: 'weui-icon-success',
    info: 'weui-icon-info-circle',
    warn: 'weui-icon-warn',
    error: 'weui-icon-cancel'
  };
  export default {
    name: 'vw-toast',
    props: {
      rootClass: {
        type: String,
        default: ''
      },
      iconType: {
        type: String,
        default: ''
      },
      content: {
        type: String
      },
      opacity: {
        type: Number,
        default: 0
      },
      iconClass: {
        type: String,
        default: 'weui-icon-success-no-circle'
      }
    },
    computed: {
      msgIcon() {
        return iconMap[this.iconType] || '';
      }
    }
  };
</script>
