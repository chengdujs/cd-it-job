<style scoped>
  .vw-swipe-item{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0s cubic-bezier(0.22, 0.69, 0.72, 0.88);
  }
  .vw-swipe-item img{
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <li class="vw-swipe-item" :style="styleObj">
    <slot></slot>
  </li>
</template>
<script>
  export default {
    name: 'vw-swipe-item',
    data() {
      return {
        styleObj: {}
      };
    },
    created() {
      this.$parent.pages.push(this);
    },
    mounted() {

    }
  };
</script>
