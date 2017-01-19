<template>
  <li class="job-item">
    <div class="base-info">
      <img class="base-info__logo" :src="item.company.logoUrl">
      <div class="base-info-content">
        <div class="base-info-content__name">{{item.name}}</div>
        <div class="base-info-content__company">{{item.company.name}}</div>
        <div class="base-info-content__detail">{{item.position}}/{{item.year}}/{{item.education}}</div>
      </div>
    </div>
    <div class="other-info">
      <span class="other-info__money">{{item.money}}</span>
      <span class="other-info__date">{{item.company.lastUpdateDate | dateTime}}</span>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    filters: {
      dateTime(val) {
        let date = new Date(val);
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        return month + '月' + day + '日';
      }
    }
  };
</script>

<style lang="scss" scoped>
  .job-item {
    display: flex;
    justify-content: space-between;
    min-height: 50px;
    padding: 10px 20px 10px 20px;
    background: #fff;
    border-bottom: 1px #e5e5e5 solid;
    margin-top: 8px;
  }

  .base-info {
    display: flex;
  }

  .base-info__logo {
    display: inline-block;
    align-self: center;
    width: 50px;
    height: 50px;
    margin-right: 12px;
  }

  .base-info__name {
    font-size: 18px;
  }

  .base-info__company {
    font-size: 14px;
  }

  .base-info__detail {
    font-size: 14px;
    color: #999;
  }

  .other-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .other-info__money {
    font-size: 16px;
    color: #ff7452;
    font-weight: 700;
  }

  .other-info__date {
    font-size: 12px;
    color: #999;
  }
</style>
