<template>
  <div class="page-my">
    <my-info :my-info-data="myInfoData"></my-info>
    <my-control :my-control-data="myControlData"></my-control>
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
        ajax.get(`${window.AppConf.apiHost}/my/myInfo`)
          .then(data => {
            if (data.status === '1') {
              this.myInfoData = data.results;
            }
          }, () => {
            this.myInfoData = null;
          });
        ajax.get(`${window.AppConf.apiHost}/my/myControl`)
          .then(data => {
            if (data.status === '1') {
              this.myControlData = data.results;
            }
          }, () => {
            this.myControlData = null;
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
