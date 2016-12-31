<template>
  <div class="page-layout">
    <router-view></router-view>
    <vw-tabbar v-model="pageName">
      <vw-tab-item label="首页" value="">
        <i slot="icon" class="ion-home">
      </vw-tab-item>
      <vw-tab-item label="搜索" value="search">
        <i slot="icon" class="ion-search">
      </vw-tab-item>
      <vw-tab-item label="消息" value="message">
        <i slot="icon" class="ion-chatboxes">
      </vw-tab-item>
      <vw-tab-item label="我的" value="my">
        <i slot="icon" class="ion-person"></i>
      </vw-tab-item>
    </vw-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pageName: 'home'
      };
    },
    watch: {
      pageName(newVal) {
        this.$router.push(`/${newVal}`);
      }
    }
  };
</script>
