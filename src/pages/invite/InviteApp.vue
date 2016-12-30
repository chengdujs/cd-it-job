<template>
  <div>
    <div class="tabs">
      <router-link class="tab" to="/hot">热招中</router-link>
      <router-link class="tab" to="/stale">已下线</router-link>
    </div>
    <div class="views">
      <router-view :list="list"></router-view>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters({
        list: 'getList'
      })
    },
    mounted() {
      this.$store.dispatch('GET_LIST');
    }
  }
</script>

<style scoped>
  .tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 50px;
    background: #110140;
  }
  .tab {
    display: block;
    width: 50%;
    color: #dedfe3;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;
  }

  .tab.router-link-active {
    color: #00fcb2;
  }
</style>
