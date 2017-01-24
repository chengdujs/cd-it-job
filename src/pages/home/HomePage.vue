<template>
  <div class="invite-hot">
    <vw-actionsheet :model="isFilterSearch" @handler="handlerActionSheet">
      <filterSearch ref="filter" :optionData="filterData"></filterSearch>
    </vw-actionsheet>
    <div class="job-header primary">
      <div class="job-header__search" @click="searchOnClick">
        <i class="icon ion-ios-search-strong"></i>
        <span class="txt">请输入职位/地址/关键字</span>
      </div>
    </div>
    <div class="job-content">
      <div class="job-banner">
        <vw-swipe >
          <vw-swipe-item>
            <a href="">
              <img src="../../assets/banner.png">
            </a>
          </vw-swipe-item>
          <vw-swipe-item>
            <a href="">
              <img src="../../assets/2.jpg">
            </a>
          </vw-swipe-item>
          <vw-swipe-item>
            <a href="">
              <img src="../../assets/3.jpg">
            </a>
          </vw-swipe-item>
        </vw-swipe>
      </div>
      <div class="job-list">
        <div class="job-list-item" v-for="job in jobs">
          <job-split></job-split>
          <job-info :job="job"></job-info>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { jobInfo, jobSplit } from 'components';
  import { filterSearch } from 'components/filterSearch';
  import { ajax } from 'common';

  export default {
    components: {
      jobInfo,
      jobSplit,
      filterSearch
    },
    data() {
      return {
        jobs: [],
        filterData: [],
        isFilterSearch: false
      };
    },
    methods: {
      searchOnClick() {
        this.isFilterSearch = !this.isFilterSearch;
      },
      handlerActionSheet(arg) {
        let d = this.$refs.filter.getValue();
        console.log(d)
        this.isFilterSearch = false;
      }
    },
    created() {
      ajax.get(`${window.AppConf.apiHost}/recommendation_list`)
        .then(data => {
          if (data.state === 1) {
            this.jobs = data.data;
          }
        });

      ajax.get(`${window.AppConf.apiHost}/getFilterSearchData`)
        .then(resp => {
          this.filterData = resp.result;
        });
    }
  };
</script>
<style lang="scss" type="text/scss">

  .invite-hot img {
    max-width: 100%;
    vertical-align: top;
  }

  .job-header {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 15px;
    width: 100%;
    height: 44px;
    z-index: 500;
    display: flex;
    align-items: center;
    color: #FFF;
    box-sizing: border-box;

    &.primary {
      background-color: #1ac788;
      border-bottom: 1px solid rgba(255,255,255,.1)
    }

    &__search {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 30px;
      border: 1px solid rgba(255,255,255,.8);
      border-radius: 5px;

      .icon {
        font-size: 18px;
      }

      .txt {
        margin-left: 10px;
        font-size: 12px;
      }
    }

    & ~ .job-content {
      top: 44px;
      overflow-y: auto;
    }
  }

  .job-banner {
    text-align: center;
  }

  .job-content {
    width: 100%;
    position: absolute;
    bottom: 50px;
  }
</style>
