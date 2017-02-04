<template>
  <div class="my-info" v-if="myInfoData">
    <div class="my-info-inner">
      <div class="my-info-main">
        <div class="my-info-head"><img :src="myInfoData.headImg" alt=""></div>
        <div class="my-info-desc">
          <h1>{{ myInfoData.title }}</h1>
          <p>{{ myInfoData.experience }}</p>
        </div>
      </div>
      <div @click="setInfo" class="my-info-update"><a href="#" class="update-button weui-btn weui-btn_plain-primary">资料维护</a></div>
      <my-setting :settingShow="settingShow" @flagChange="setInfo"></my-setting>

    </div>
  </div>
  <div class="my-info" v-else>
    <p class="my-info-nodata"><i class="weui-icon-warn"></i>没有得到数据</p>
  </div>
</template>
<script>
  import MySetting from './MySetting.vue';
  export default {
    name: 'my-info',
    data() {
      return {
        settingShow: false
      };
    },
    props: {
      myInfoData: {
        type: Object
      }
    },
    components: {
      MySetting
    },
    methods: {
      setInfo() {
        this.settingShow = !this.settingShow;
      }
    }
  }
</script>
<style lang="scss">
  .my-info{
    padding: 20px;
    position: relative;
    background: #fff;
    &-main{
      display: inline-block;
    }
    &-head,&-desc{
      display:inline-block;
    }
    &-head{
      margin-right: 15px;
      img{
        width: 60px;
        height: 60px;
      }
    }
    &-update{
      position: absolute;
      top: 50%;
      right: 30px;
      transform:translate(0,-50%);
    }
    .update-button{
      height: 40px;
      line-height: 40px;
    }
    &-desc{
      h1{
        font-weight:normal;
      }
    }
    &-nodata{
      height: 80px;
      line-height: 80px;
      text-align:center;
      background: #fff;
      .weui-icon-warn{
        margin-right: 10px;
      }
    }
  }
</style>
