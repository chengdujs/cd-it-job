<template lang="html">
  <div class="company-name">
    <div class="title">
      <i class="ion-podium"></i>
      <span> {{arg[0]}}</span>
    </div>
    <div class="text"> {{arg[1]}}</div>
  </div>
</template>

<script>
export default {
  name: 'company-name',
  props: {
    arg: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .company-name{
    .title{
      margin-bottom: 8px;
      span{
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
      }
      .ion-podium{
        margin-right: 8px;
        font-size: 20px;
        line-height: 20px;
      }
    }
    .text{
      color: rgba(0,0,0,0.5);
    }
  }
</style>
