<template>
  <div class="weui-tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vw-tabbar',
    props: {
      value: null
    }
  };
</script>
