<template>
  <div class="weui-cells y-filter__wrapper">
    <div class="weui-cell y-filter__item" v-for="(row,index) in filterData">
      <div class="weui-cell__hd">
        <span class="y-filter__item">{{row.name}}:</span>
      </div>
      <div class="weui-cell__bd">
        <a class="y-filter__item--title" href="javascript:;" v-for="(details,index) in row.items">{{details.label}}</a>
      </div>
    </div>
  </div>
</template>
<style>
  .y-filter__wrapper {
  }

  .y-filter__item {
    padding: 6px 16px;
    color: #555;
  }

  .y-filter__item span {
    font-weight: 600;
    margin-right: -5px;
  }

  .y-filter__item--title, .y-filter__wrapper a {
    float: left;
    margin-right: 5px;
    padding: 5px 8px;
    height: 14px;
    line-height: 14px;
  }

  .y-filter__wrapper a {
    color: #00b38a;
    background-color: transparent;
    text-decoration: none;
  }
</style>
<script>
  const filterData = [
    {
      name: '工作经验',
      items: [
        {label: '应届毕业生', value: '001'},
        {label: '3年以下', value: '002'},
        {label: '3-5年', value: '003'},
        {label: '5-10年', value: '004'},
        {label: '10年以上', value: '005'}
      ]
    },
    {
      name: '学历要求',
      items: [
        {label: '大专', value: '001'},
        {label: '本科', value: '002'},
        {label: '硕士', value: '003'},
        {label: '博士', value: '004'}
      ]
    },
    {
      name: '行业领域',
      items: [
        {label: '移动互联网', value: '001'},
        {label: '电子商务', value: '002'},
        {label: '金融', value: '003'},
        {label: '教育', value: '004'}
      ]
    }
  ]
  export default{
    data() {
      return {
        filterData
      }
    },
    components: {}
  }
</script>
