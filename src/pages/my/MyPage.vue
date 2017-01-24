<template>
  <div class="page-my">
    <my-info :myInfoData="myInfoData"></my-info>
    <my-control :myControlData="myControlData"></my-control>
  </div>
</template>
<script>
  import { ajax } from 'common';
  import myInfo from './my-info';
  import myControl from './my-control';
  export default {

    components: {
      myInfo,
      myControl
    },

    data() {
      return {
        myInfoData: {},
        myControlData: {}
      }
    },

    created() {
      this._setData()
    },

    methods: {

      _setData() {
        var myApi = window.AppConf.api.my;

        ajax.get(myApi.myInfoUrl)
          .then(data => {
            this.myInfoData = data.results;
          })
          .catch(() => {
            this.$toast.msg('数据获取错误！', { duration: 3000 }, () => {
              window.history.go(-1);
            });
          });
        ajax.get(myApi.myControlUrl)
          .then(data => {
            this.myControlData = data.results;
          })
          .catch(() => {
            this.$toast.msg('数据获取错误！', { duration: 3000 }, () => {
              window.history.go(-1);
            });
          });
      }
    }
  }
</script>
<style>
  .my-login-status{
    padding: 15px 40px;
    height: 50px;
    line-height: 50px;
    background: #fff;
    display: none;
  }
</style>