/*
    author:成都-Treasure
    email:treasurewmj@foxmail.com
    version:0.0.1
    bug:1.还是没有解决ajax获取的数据无法访问二级对象，把部分内容做成子组件后可以响应
        2.没有设计图的图例，因此找不到部分图标，自己选了，也没有字体大小，padding等设置
        3.预留了路由接口，方便后期整合后台
        4.文字内容没有设置转换器，用了computed，后期可以直接修改
        5.mock数据结构在mock部分
*/




<template lang="html">
  <div class="search-detail">
    <div class="banner">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="logo">
        <div class="avatar"><img v-if="false" src="" alt=""></div>
        <p class="text"> {{comDetail.name}}</p>
      </div>
    </div>
    <div class="header">
      <div class="inner">
        <div class="title"> {{comDetail.job}}</div>
        <div class="salary">
          {{money.min}}-{{money.max}}K
        </div>
        <ul class="tags">
          <li class="item"><i class="ion-ios-location-outline"></i><span> {{tag.address}}</span></li>
          <li class="item"><i class="ion-ios-briefcase-outline"><span> {{tag.property}}</span></i></li>
          <li class="item"><i class="ion-university"><span> {{tag.education}}</span></i></li>
          <li class="item"><i class="ion-android-time"></i><span> {{tag.years}}</span></li>
        </ul>
        <div class="flag" @click="addMark">
          <i  :class="{'ion-ios-star-outline':markflag,'ion-star':!markflag}"></i>
          <p> {{mark}}</p>
        </div>
      </div>
    </div>
    <job-split></job-split>
    <div class="content-wrapper">
      <search-needs :address="comDetail.addressDetail" :jobDetail="comDetail.jobDetail"></search-needs>
    </div>
    <job-split></job-split>
    <div class="company-name-wrapper">
        <companyDetail :arg="comDetail.companyName"></companyDetail>
    </div>
    <job-split></job-split>
    <div class="company-detail-wrapper">
      <companyDetail :arg="comDetail.companyDetail"></companyDetail>
    </div>
  </div>
</template>

<script>
  import { jobSplit } from 'components';
  import { ajax } from 'common';
  import searchNeeds from './search-needs.vue';
  import companyDetail from './company-detail.vue';
  export default {
    name: 'search-detail',
    data() {
      return {
        comDetail: {}, // companyDetail
        url: 'http://chat.hstar.org:8601/99ed5748b6c1/companyDetail',
        markflag: false,
        money: {},
        tag: {}
      }
    },
    props() {

    },
    computed: {
      mark() {
        if (!this.markflag) {
          return '收藏职位';
        } else {
          return '点击收藏';
        }
      }
    },
    components: {
      jobSplit,
      searchNeeds,
      companyDetail
    },
    created() {
      this._getData();
    },
    methods: {
      _getData() {
        ajax.get(this.url)
        .then(data => {
          if (data.status === 1) {
            return data.body;
          }
        })
        .then(data => {
          this.comDetail = data;
          this.money = data.money;
          this.tag = data.tag;
        });
      },
      addMark() {
        this.markflag = !this.markflag;
      }
    }
/*  使用路由钩子获取数据，后期对接后台接口使用
    beforeRouteEnter(to, from, next) {
      ajax.get('http://chat.hstar.org:8601/99ed5748b6c1/companyDetail')
        .then(data => {
          if (data.status === 1) {
            console.log(data);
            return data.body;
          }
        })
        .then(data => {
          next(vm => {
            vm.comDetail = data;
            vm.money = data.money;
            console.log(data);
          });
        });
    },
    watch: {
      $route () {
        this.comDetail = null;
        ajax.get('http://chat.hstar.org:8601/99ed5748b6c1/companyDetail')
        .then(data => {
          if (data.status === 1) {
            return data.body;
          }
        })
        .then(data => {
          this.comDetail = data;
        });
      }
    } */
  }
</script>

<style lang="scss" scoped>
$green : #1ac688;
$grey :  #e5e5e5;
$text : rgba(0,0,0,0.5);
  .search-detail{
    box-sizing: border-box;
    height: 94vh;
    overflow-y: scroll;
    .banner{
      position: relative;
      width: 100%;
      .top{
        background: $green;
        width: 100vw;
        height: 82px;
      }
      .bottom{
        background: $grey;
        width: 100vw;
        height: 50px;
      }
      .logo{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 300px;
        height: 100px;
        background: white;
        border-radius: 10px;
        box-shadow: 1px 1px 4px 2px rgba(26,198,136,0.2);
        .avatar{
          margin: 10px auto;
          width: 55px;
          height: 55px;
          background: #1ac688;
          border-radius: 50% 50%;
        }
        .text{
          color: #636363;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
        }
      }
    }
    .header{
      position: relative;
      padding: 12px 16px;
      .inner{
        .title{
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 16px;
          color: black;
          font-weight: 700;
        }
        .salary{
          margin-bottom: 8px;
          font-size: 24px;
          line-height: 24px;
          color: red;
          font-weight: 700;
        }
        .tags{
          margin-bottom: 5px;
          list-style-type: none;
          .item{
            display: inline-block;
            margin-right: 10px;
            font-size: 16px;
            line-height: 16px;
            color: $text;
          }
        }
        .flag{
          position: absolute;
          top: 10px;
          right: 20px;
          text-align: center;
          .ion-star{
            font-size: 24px;
            color: red;
          }
          .ion-ios-star-outline{
            font-size: 24px;
          }
        }
      }
    }
    .content-wrapper{
      padding: 12px 16px;

    }
    .company-name-wrapper{
      padding: 12px 16px;
    }
    .company-detail-wrapper{
      padding: 12px 16px;
      margin-bottom: 30px;
    }
  }
</style>
