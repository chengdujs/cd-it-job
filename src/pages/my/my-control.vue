<template>
  <div class="my-control">
    <ul class="my-control-list">
      <li v-for="item in myControlData">
        <a href="#"><i class="icon-font" :class="item.icon"></i>{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'my-control',
    props: {
      myControlData: {
        default() {
          return [];
        }
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
  }
</style>