<template>
  <div class="my-info">
    <div class="my-info-inner">
      <div class="my-info-main">
        <div class="my-info-head"><img :src="myInfoData.headImg" alt=""></div>
        <div class="my-info-desc">
          <h1>{{ myInfoData.title }}</h1>
          <p>{{ myInfoData.experience }}</p>
        </div>
      </div>
      <div class="my-info-update"><a href="#" class="update-button weui-btn weui-btn_plain-primary">资料维护</a></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'my-info',
    props: {
      myInfoData: {
        type: Object
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
  }
</style>