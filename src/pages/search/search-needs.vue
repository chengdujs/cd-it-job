<template lang="html">
  <div class="search-needs">
    <div class="content">
      <div class="address">
        <i class="ion-ios-location"></i><span>工作地点</span>
        <p class="text"> {{address}}</p>
      </div>
      <div class="job-quality">
        <i class="ion-ios-list"></i><span>职位描述</span>
        <p class="text"> {{editText}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-needs',
  props: {
    address: {
      type: String
    },
    jobDetail: {
      type: String
    }
  },
  computed: {
    editText() {
      if (this.jobDetail) {
        // let afterText;
        // afterText = this.jobDetail.replace(/\\n/, '<br />');
        // console.log(typeof this.jobDetail);
        return this.jobDetail;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$text : rgba(0,0,0,0.5);
$grey : #e5e5e5;
  .search-needs{
    .content{
      span{
        font-size: 18px;
        line-height: 18px;
        font-weight: 600;
      }
      .address{
        margin-bottom: 10px;
        .ion-ios-location{
          margin-right: 10px;
          font-size: 20px;
          line-height: 20px;
        }
        .text{
          color: $text;
        }
      }
      .job-quality{
        margin-bottom: 10px;
        .ion-ios-list{
          margin-right: 10px;
          font-size: 20px;
          line-height: 20px;
        }
        .text{
          color: $text;
        }
      }
    }
  }
</style>
