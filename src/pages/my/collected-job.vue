<template>
  <div class="collected-job">
    <div class="top">
      <div class="logo">

      </div>
      <div class="detail">
        <div class="job-name">
        {{job.name}}
        </div>
        <div class="city">
        <i class="ion-ios-location-outline"></i>{{job.city}}
        </div>
        <div class="com-name">
        {{job.comName}}
        </div>
      </div>
      <div class="salary">
        {{job.salary}}
      </div>
    </div>
    <div class="bottom">
      <div class="cancel" @click="cancel">
        <i class="ion-android-star"></i><span class="text">取消收藏</span>
      </div>
      <div class="push" @click="push">
        <i class="ion-archive"></i><span class="text">发送简历</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'collected-job',
  props: {
    job: {
      type: Object,
      default: {
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    cancel() {
      console.log(`取消收藏${this.job.id}`);
      this.$emit('cancel');
    },
    push() {
      console.log('发送简历');
    }
  }
}
</script>
<style lang="scss">
  $grey: #F3F3F3;
  $darkGrey: #D8D8D8;
  .collected-job{
    background: white;
    .top{
      display: flex;
      padding: 12px 20px;
      .logo{
        background: $grey;
        flex:0 0 80px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .detail{
        flex: 1;
        margin-left: 10px;
        padding: 0 12px;
        .job-name{
          margin-bottom: 8px;
          font-size: 16px;
          font-weight: 700;
        }
        .city{
          margin-bottom: 8px;
          font-size: 14px;
          color: $darkGrey;
          line-height: 14px;
        }
        .com-name{
          font-size: 14px;
          color: $darkGrey;
          line-height: 14px;
        }

      }
      .salary{
        flex: 0 0 80px;
        width: 80px;
        height: 80px;
        font-size: 20px;
        color: red;
        line-height: 80px;
      }
    }
    .bottom{
      display: flex;
      height: 30px;
      .cancel{
        flex: 1;
        width: 50%;
        height: 30px;
        background: $grey;
        border-right: 2px solid $darkGrey;
        font-size: 16px;
        color: #61C68C;
        text-align: center;
        line-height: 30px;
        .text{
          margin-left: 8px;
        }
      }
      .push{
        flex: 1;
        width: 50%;
        height: 30px;
        background: $grey;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
        .text{
          margin-left: 8px;
        }

      }
    }
  }
</style>
