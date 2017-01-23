<template>
  <div id="actionSheet_wrap">
    <transition name="fade">
      <div class="weui-mask" v-show="toggleStatus"></div>
    </transition>
    <div :class="{'weui-actionsheet':true,'weui-actionsheet_toggle':toggleStatus}" >
      <div class="weui-actionsheet__menu">
         <slot></slot>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell"  @click="onClickEnter">确定</div>
        <div class="weui-actionsheet__cell"  @click="onClickCancel">取消</div>
      </div>
    </div>
  </div>
</template>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
<script>
  export default{
    name: 'vw-actionsheet',
    props: {
      model: {
        default() {
          return false;
        },
        type: Boolean
      }
    },
    watch: {
      model: {
        handler(newVal) {
          this.toggleStatus = newVal;
        }
      },
      maskStatus() {
        return this.toggleStatus === true
      }
    },
    data() {
      return {
        toggleStatus: false,
        maskStatus: false
      }
    },
    methods: {
      onClickCancel() {
        this.toggleStatus = false;
      },
      onClickEnter() {
        this.$emit('handler', {
          test: 123
        });
      }
    }
  }
</script>
