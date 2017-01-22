<style scoped>
  .vw-toptip{
    opacity: 0;
    display: block;
    transition: opacity .3s linear;
  }
</style>
<template>
  <div class="weui-toptips weui-toptips_warn vw-toptip" :style="{opacity: opacity}">{{content}}</div>
</template>
<script>
  export default {
    name: 'vw-toast',
    props: {
      content: {
        type: String
      },
      opacity: {
        type: Number,
        default: 0
      }
    }
  };
</script>
