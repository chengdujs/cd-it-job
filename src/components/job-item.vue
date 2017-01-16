<template>
  <li class="job-item">
    <div class="base-info">
      <img class="base-infoLogo" :src="item.company.logoUrl">
      <div class="base-infoContent">
        <div class="base-infoName">{{item.name}}</div>
        <div class="base-infoCompany">{{item.company.name}}</div>
        <div class="base-infoDetail">{{item.position}}/{{item.year}}/{{item.education}}</div>
      </div>
    </div>
    <div class="other-info">
      <span class="other-infoMoney">{{item.money}}</span>
      <span class="other-infoDate">{{item.company.lastUpdateDate | dateTime}}</span>
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
        let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
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

  .base-infoLogo {
    display: inline-block;
    align-self: center;
    width: 50px;
    height: 50px;
    margin-right: 12px;
  }

  .base-infoName {
    font-size: 18px;
  }

  .base-infoCompany {
    font-size: 14px;
  }

  .base-infoDetail {
    font-size: 14px;
    color: #999;
  }

  .other-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .other-infoMoney {
    font-size: 16px;
    color: #ff7452;
    font-weight: 700;
  }

  .other-infoDate {
    font-size: 12px;
    color: #999;
  }
</style>
