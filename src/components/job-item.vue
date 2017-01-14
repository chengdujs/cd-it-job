<style scoped>
  .job-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    background: #fff;
    border-bottom: 1px #e5e5e5 solid;
    margin-top: 8px;
  }

  .other-infoMoney {
    font-size: 16px;
    color: #ff7452;
    font-weight: 700;
  }
</style>
<template>
  <li class="job-item">
    <div class="base-info">
      <h3>{{item.name}}</h3>
      <p>{{item.position}}/{{item.year}}/{{item.education}}</p>
    </div>
    <div class="other-info">
      <span class="other-infoMoney">{{item.money}}</span>
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
    }
  };
</script>
