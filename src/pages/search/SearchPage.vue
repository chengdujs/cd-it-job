<template>
  <div class="page-search">
    <div class="job-search">
      <div class="job-search__label" @click="selectCity">
        <i class="icon ion-ios-location"></i>
        <span class="city">{{ selectedCity }}</span>
      </div>
      <div class="job-search__form">
        <input class="input" type="search" placeholder="请输入职位/地址/关键字"
               @click="onFocus" ref="inputEl" v-model="inputTxt">
        <span class="icon ion-ios-search-strong" @click="_searchJob"></span>
      </div>
      <div class="job-search__cancel" @click="searchCancel">取消</div>
    </div>
    <div class="job-list" v-if="showJobs">
      <div class="job-list-item" v-for="job in resultJobs">
        <job-split></job-split>
        <job-info :job="job"></job-info>
      </div>
    </div>
    <div class="job-search-tags" v-else>
      <div class="job-tags">
        <div class="job-tags-setion" v-show="inputJobs.length > 0 ? true : false">
          <div class="job-tags__name">最近搜索 <i class="icon ion-trash-a" @click="searchClear"></i></div>
          <div class="job-tags__list">
            <span class="tag" v-for="job in inputJobs" @click="searchTag(job)">{{ job }}</span>
          </div>
        </div>
        <div class="job-tags-setion">
          <div class="job-tags__name">热门搜索</div>
          <div class="job-tags__list">
            <span class="tag" v-for="job in hotJobTags" @click="searchHotTag(job)">{{ job.tag }}</span>
          </div>
        </div>
      </div>
      <div class="job-city" v-show="showCity">
        <div class="job-city-hd">选择城市 <i class="icon ion-close-round" @click="hideCity"></i></div>
        <div class="job-city-bd">
          <div class="job-tags">
            <div class="job-tags__name">期望工作城市</div>
            <div class="job-tags__list city">
              <span class="tag">成都</span>
              <span class="change">更改 <i class="ion-chevron-right"></i></span>
            </div>
            <div class="job-tags__name"><i class="ion-android-star"></i>热门城市</div>
            <div class="job-tags__list city">
              <span class="tag">全国</span>
              <span class="tag" v-for="city in hotCities">{{ city.city }}</span>
            </div>
            <div class="job-tags__name">全国城市</div>
            <div class="job-tags__list city">
              <span class="tag" v-for="city in cities" @click="searchCity(city)">{{ city.city }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState, mapGetters } from 'vuex';
  import { jobInfo, jobSplit } from 'components';

  export default {

    components: {
      jobInfo,
      jobSplit
    },

    data() {
      return {
        showJobs: true,
        showCity: false,
        inputTxt: '',
        inputJobs: [],
        selectedCity: '成都'
      }
    },

    created() {
      if (this.jobs.length === 0) {
        this.$store.dispatch('GET_JOBS');
      }
      if (this.cities.length === 0) {
        this.$store.dispatch('GET_CITIES');
      }
      if (this.jobTags.length === 0) {
        this.$store.dispatch('GET_JOB_TAGS');
      }
    },

    computed: {
      ...mapState({
        jobs: state => state.job.jobs,
        cities: state => state.job.cities,
        searchedJobs: state => state.job.searchedJobs,
        jobTags: state => state.job.jobTags
      }),
      ...mapGetters(['hotCities', 'hotJobTags']),
      resultJobs() {
        return this.searchedJobs.length === 0 ? this.jobs : this.searchedJobs
      }
    },

    methods: {
      selectCity() {
        this.showJobs = false;
        this.showCity = true;
      },
      hideCity() {
        this.showCity = false;
        this.$refs.inputEl.focus();
      },
      onFocus() {
        this.showJobs = false;
      },
      _searchJob() {
        /**
         * 此方法目前为纯前端操作：
         * 等接口完善后，应该把搜索的结果缓存到数据库
         */
        let arr = this.inputJobs;
        let str = this.inputTxt;

        // 最近搜索
        if (str !== '') {
          arr.push(str);
          this.inputTxt = '';
        }
        this.inputJobs = Array.from(new Set(arr));

        // 关键词搜索
        let temp = []
        let re = new RegExp(str)
        this.jobs.forEach(job => {
          Object.values(job).forEach(val => {
            if (re.test(val)) {
              temp.push(job)
            }
          })
        })
        temp = Array.from(new Set(temp));
        if (temp.length === 0) {
          window.alert('未搜匹配到结果，默认显示全部')
        }
        this.$store.commit('GET_SEARCHED_JOBS', temp);
        this.showJobs = true
      },
      searchTag(job) {
        this.inputTxt = job;
        this._searchJob();
      },
      searchHotTag(job) {
        this.inputTxt = job.tag;
        this._searchJob();
      },
      searchCity(city) {
        this.selectedCity = city.city;
        this.inputTxt = city.city;
        this._searchJob();
        this.showCity = false;
      },
      searchClear() {
        this.inputJobs.splice(0, this.inputJobs.length)
      },
      searchCancel () {
        this.showJobs = true
      }
    }

  }
</script>
<style lang="scss" type="text/scss">
  .page-search {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 50px;
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .job-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 15px;
    height: 44px;
    line-height: 1;
    background: #f4f4f4;
    box-sizing: border-box;
    font-size: 12px;
    border-bottom: 1px solid #ddd;

    &__label, &__form, &__cancel {
      height: 30px;
      line-height: 30px;
      color: #999;
    }

    &__label {
      min-width: 60px;
      max-width: 80px;
      margin-left: -15px;
      text-align: center;
      font-size: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .icon {
        font-size: 15px;
        vertical-align: middle;
      }
      .city {
        padding: 0 5px;
        font-size: 12px;
        vertical-align: middle;
      }
    }

    &__form {
      position: relative;
      flex: 1;
      padding-right: 30px;
      border: 1px solid #ddd;
      border-radius: 30px;
      background: #FFF;
      .input {
        display: block;
        height: 100%;
        width: 100%;
        padding: 0 10px;
        border: none;
        outline: none;
        background: none;
        font: inherit;
        color: #999;
        &::-webkit-input-placeholder {
          font: inherit;
          font-size: 11px;
        }
      }
      .icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
      }
    }

    &__cancel {
      padding: 0 20px;
      margin-right: -15px;
    }
  }

  .job-tags {
    background: #FFF;
    box-sizing: border-box;

    &__name {
      padding: 0 15px;
      line-height: 26px;
      font-size: 12px;
      font-weight: 600;
      color: #666;
      background: #f4f4f4;
      .icon {
        float: right;
        margin-right: -15px;
        padding: 0 15px;
        height: 26px;
        text-align: center;
        font-size: 16px;
      }
    }

    &__list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 15px;

      .tag {
        height: 24px;
        line-height: 24px;
        margin: 2%;
        padding: 0 4%;
        text-align: center;
        font-size: 12px;
        border-radius: 24px;
        border: 1px solid #ddd;
        color: #00b38a;
        font-weight: 200;
        box-sizing: border-box;
        white-space: nowrap;
        &:active {
          background: #f6f6f6;
        }
      }

      .change {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translate3d(0,-50%,0);
        font-size: 14px;
        color: #00b38a;
      }

      &.city .tag {
        width: 28%;
        font-size: 13px;
        color: #999;
      }
    }

  }

  .job-city {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 501;
    background: #FFF;

    &-hd {
      position: relative;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: #f4f4f4;
      font-size: 16px;
      font-weight: 200;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      .icon {
        position: absolute;
        right: 0;
        height: 44px;
        padding: 0 15px;
        font-size: 18px;
      }
    }

    &-bd {
      position: absolute;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
