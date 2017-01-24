<template>
  <div class="my-control" v-if="myControlData">
    <ul class="my-control-list">
      <li v-for="item in myControlData">
        <a href="#"><i class="icon-font" :class="item.icon"></i>{{ item.title }}</a>
      </li>
    </ul>
  </div>
  <div class="my-control" v-else>
    <p class="my-control-nodata"><i class="weui-icon-warn"></i>没有得到数据</p>
  </div>
</template>
<script>
  export default {
    name: 'my-control',
    props: {
      myControlData: {
        default: []
      }
    }
  }
</script>
<style lang="scss">
  .my-control{
    padding: 10px 0;
    &-list{
       li{
         margin: 10px 0;
         padding: 0 20px;
         height: 50px;
         line-height: 50px;
         background: #fff;
       }
       a{
         display: block;
       }
       .icon-font{
         width: 20px;
         text-align: center;
         display:inline-block;
         margin-right: 20px;
         font-size: 30px;
         vertical-align: middle;
         position: relative;
         top: -3px;
       }
    }
    &-nodata{
      height: 200px;
      line-height: 200px;
      text-align:center;
      background: #fff;
      .weui-icon-warn{
        margin-right: 10px;
      }
    }
  }
</style>