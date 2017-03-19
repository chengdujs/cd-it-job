<template>
  <div class="page-layout">
    <router-view></router-view>
    <vw-tabbar v-model="pageName">
      <vw-tab-item label="首页"
                   value="home">
        <i slot="icon"
           class="ion-home"></i>
      </vw-tab-item>
      <vw-tab-item label="搜索"
                   value="search">
        <i slot="icon"
           class="ion-search"></i>
      </vw-tab-item>
      <vw-tab-item label="消息"
                   value="message">
        <i slot="icon"
           class="ion-chatboxes"></i>
      </vw-tab-item>
      <vw-tab-item label="我的"
                   value="my">
        <i slot="icon"
           class="ion-person"></i>
      </vw-tab-item>
    </vw-tabbar>
  </div>
</template>
<script>
import { eventBus } from 'common';
export default {
  data() {
    return {
      pageName: 'home'
    };
  },
  created() {
    eventBus.on('set-current-page', pageName => {
      this.pageName = pageName;
    });
  },
  watch: {
    pageName(newVal) {
      if (newVal === 'home') {
        newVal = '';
      }
      this.$router.push(`/${newVal}`);
    }
  }
};
</script>
