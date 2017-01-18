<style scoped>
  .weui-tabbar__item > span{
    display: inline-block;
    position: relative;
  }
  .weui-badge_dot{
    position: absolute;
    top: 0;
    right: -6px;
  }
  .badge-text{
    position: absolute;
    top: -2px;
    left: 20px;
  }
  .weui-tabbar__label{
    min-height: 5px;
  }
  .weui-tabbar__icon i{
    line-height: 27px;
    font-size: 27px;
  }
</style>
<template>
  <a href="javascript:;" class="weui-tabbar__item" :class="{'weui-bar__item_on': active}" @click="onTabItemClick($event)">
    <span>
      <span class="weui-tabbar__icon">
        <slot name="icon" class=""></slot>
      </span>
    <span class="weui-badge weui-badge_dot" v-if="badge === true"></span>
    <span class="weui-badge badge-text" v-if="badgeText">{{badgeText}}</span>
    </span>
    <p class="weui-tabbar__label">{{label}}</p>
  </a>
</template>
<script>
  export default {
    name: 'vw-tab-item',
    props: {
      label: {
        type: String
      },
      badge: {
        default: false
      },
      value: {}
    },
    computed: {
      active() {
        return this.$parent.value === this.value;
      },
      badgeText() {
        return typeof this.badge === 'boolean' ? '' : this.badge;
      }
    },
    methods: {
      onTabItemClick() {
        this.$parent.$emit('input', this.value);
      }
    }
  };
</script>
