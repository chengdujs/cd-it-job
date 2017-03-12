<template>
  <div class="home-search">
    <div class="head">
      <i class="ion-ios-location"></i>当前搜索：
      <span> {{info[0]}}</span>/
      <span> {{info[1]}}</span>/
      <span> {{info[2]}}</span>
    </div>
    <div class="job-list">
    <div class="job-list-item" v-for="job in jobs">
          <job-info :job="job"></job-info>
          <job-split></job-split>
    </div>
    </div>
    <div class="button-wrapper">
      <vw-button @click="back" type="primary">返回</vw-button>
    </div>

  </div>

</template>

<script>
  import { jobInfo, jobSplit } from 'components';
  import { ajax } from 'common';
  const detail = [['应届毕业生', '3年以下', '3-5年', '5-10年', '10年以上'], ['大专', '本科', '硕士', '博士'], ['移动互联网', '电子商务', '金融', '教育']]; // 这个应该放在vuex中动态变化
  export default {
    name: 'home-search',
    components: {
      jobInfo,
      jobSplit
    },
    props: {
      searchValue: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    computed: {
      params() {
        let obj = {};
        for (let val of this.searchValue) {
          obj[val.id] = val.value;
        }
        return obj;
      },
      info() {
        let arr = [];
        for (let val of this.searchValue) {
          arr.push(detail[0][val.value]);
        }
        return arr;
      }
    },
    created () {
      this._getData();
    },
    data() {
      return {
        jobs: []
      }
    },
    methods: {
      _getData() {
        ajax.get(`${window.AppConf.apiHost}/recommendation_list`)
        .then(res => {
          this.jobs = res.data;
        });
        /*
        使用GET方法进行参数搜索，暂无相应API
        ajax.get(`${window.AppConf.apiHost}/jobs`, this.params)
        .then(res => {
          this.jobs = res;
        });
        */
      },
      back() {
        this.$parent.switchIsSearch();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-search{
    .head{
      background: #F2F3F3;
      padding: 12px 16px;
      color: #939393;
      font-size: 14px;
    }
    .button-wrapper{
      padding: 12px 16px;
    }
  }
</style>
