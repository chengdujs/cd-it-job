<template>
  <div class="weui-cell y-filter__item" >
    <div class="weui-cell__hd">
      <span class="y-filter__item" v-text="option.name"></span>
    </div>
    <div class="weui-cell__bd">
      <a :class="{'y-filter__item--title':true,'chosen':curIndex == $index}"
         href="javascript:;"  v-for="(details,$index) in option.items"
         @click="detailAction(option.id,$index)">{{details.label}}
      </a>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      option: Object,
      index: Number
    },
    data() {
      return {
        curIndex: 0
      }
    },
    created() {
      this.curIndex = this.index;
    },
    methods: {
      detailAction(id, index) {
        this.curIndex = index;
        this.$emit('changeIndex', id, index)
      }
    },
    components: {
    }
  }
</script>
