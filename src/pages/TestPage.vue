<template>
  <div class="test-page">
    Type: <label><input type="radio" name="type" v-model="type" value="default">default</label>
    <label><input type="radio" name="type" v-model="type" value="primary">primary</label>
    <label><input type="radio" name="type" v-model="type" value="warn">warn</label>
    <br> Disabled: <input type="checkbox" v-model="disabled">
    <br> Plain: <input type="checkbox" v-model="plain">
    <br> Mini: <input type="checkbox" v-model="mini">
    <vw-button @click="onClick" :disabled="disabled" :mini="mini" :type="type" :plain="plain"><i class="ion-help-buoy"></i>页面操作</vw-button>
    <hr>
    <vw-button @click="showToast()">Toast</vw-button>
    <vw-tabbar v-model="selected">
      <vw-tab-item label="首页" value="tab1">
        <i slot="icon" class="ion-home">
      </vw-tab-item>
      <vw-tab-item label="列表" value="tab2">
        <i slot="icon" class="ion-grid">
      </vw-tab-item>
      <vw-tab-item label="搜索" value="test">
        <i slot="icon" class="ion-search">
      </vw-tab-item>
      <vw-tab-item label="我的" value="test2">
        <i slot="icon" class="ion-person"></i>
      </vw-tab-item>
    </vw-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        type: 'default',
        plain: false,
        disabled: false,
        mini: false,
        selected: 'tab1'
      };
    },
    methods: {
      onClick(e) {
        console.log('ok');
        console.log(e);
      },
      showToast() {
        this.$toast.msg('已完成呵呵', { duration: 300000, icon: 'success' }, () => {
          console.log('close');
        });
      }
    }
  };
</script>
