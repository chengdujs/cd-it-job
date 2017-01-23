<template>
  <div class="weui-cells y-filter__wrapper">
    <filter-item :index=0 :option="opt" v-for="(opt,index) in filterData"  @changeIndex="changed"></filter-item>
  </div>
</template>
<script>
  import filterItem from './filter-item'
  export default{
    data() {
      return {
        filterData: [],
        activeObj: {},
        curRowId: ''
      }
    },
    props: {
      optionData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    create() {
    },
    watch: {
      optionData: {
        handler(newVal) {
          if (newVal && newVal.length) {
            this.filterData = newVal;
            this.initActiveObj(newVal);
          }
        }
      }
    },
    computed: {
    },
    methods: {
      initActiveObj(data) {
        data.forEach(({id}) => {
          this.$set(this.activeObj, id, 0);
        })
      },
      changed(id, index) {
        this.activeObj[id] = index;
      },
      getValue() {
        let result = [];
        for (let id in this.activeObj) {
          let value = this.activeObj[id]
          result.push({
            id,
            value
          })
        }
        return result
      }
    },
    components: {
      filterItem
    }
  }
</script>
<style>
  .y-filter__item {
    padding: 6px 16px;
    color: #555;
    font-size :14px;
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
    color: #555;
    text-decoration: none;
    font-size : 12px;
  }

  .y-filter__wrapper a:hover{
    background-color: #00b38a;
    color: #fff;
  }

  .y-filter__wrapper .chosen{
    background-color: #00b38a;
    color: #fff;
  }

</style>
