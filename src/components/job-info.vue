<template>
  <div class="job-info">
    <div class="job-info-main">
      <div class="job-info__thumb">LOGO</div>
      <div class="job-info-text">
        <div class="job-info__name">
          <span class="job">{{ job.jobName }}</span>
          <span class="type" v-if="job.jobInfo.type !== 0" :class="classMap[job.jobInfo.type - 1]">{{ infoType }}</span>
        </div>
        <div class="job-info__date">{{ job.jobInfo.date | format }}</div>
      </div>
      <div class="job-info-text">
        <div class="job-info__addr"><i class="icon ion-ios-location-outline"></i>{{ job.jobAddress }}</div>
        <div class="job-info__salary">{{ job.jobCompensation }}K</div>
      </div>
    </div>
    <div class="job-info-sub">
      <span class="job-info__desc"><span class="tips">要求</span>{{ job.jobExperience }}年工作经验</span>
      <span class="job-info__company">{{ job.companyName }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { formatDate } from './../common'

  export default {
    props: {
      job: {
        type: Object
      }
    },
    data() {
      return {
        classMap: ['type-hot', 'type-urgent']
      }
    },
    computed: {
      infoType() {
        let type = this.job.jobInfo.type || null;
        switch (type) {
          case 1:
            return '热';
          case 2:
            return '急';
        }
      }
    },
    filters: {
      format (time) {
        let date = new Date(time)
        return formatDate(date, 'M月dd日');
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .job-info {

    &-main {
      position: relative;
      padding: 10px 15px;
      height: 90px;
      background: #FFF;
    }

    &-sub {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      font-size: 12px;
      height: 28px;
      background: #f4f4f4;
    }

    &-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 14px 0 14px 80px;
      line-height: 1;
    }

    &__thumb {
      position: absolute;
      width: 70px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      border-radius: 50%;
      background: #e2e2e2;
      color: #FFF;
      font-weight: bold;
    }

    &__name {
      flex: 1;
      overflow: hidden;
      .job {
        max-width: 100%;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        padding-right: 20px;
        vertical-align: middle;
      }
      .type {
        display: inline-block;
        margin-left: -20px;
        vertical-align: middle;
        font-size: 10px;
        width: 15px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        border-radius: 3px;
        &.type-hot {
          background: #e14426;
          color: #FFF;
        }
        &.type-urgent {
          background: #0fcfb3;
          color: #FFF;
        }
      }
    }

    &__date {
      width: 65px;
      text-align: right;
      color: #999;
      font-size: 12px;
    }

    &__addr {
      font-size: 14px;
      color: #999;
      .icon {
        margin-right: 5px;
      }
    }

    &__salary {
      color: #e31915;
      font-size: 18px;
      font-weight: 600;
    }

    &__desc {
      color: #999;
      .tips {
        display: inline-block;
        padding: 2px 5px;
        margin-right: 5px;
        line-height: 1;
        color: #12b699;
        border: 1px solid #12b699;
        font-size: 10px;
        border-radius: 3px;
      }
    }

    &__company {
      color: #666;
    }
  }
</style>
