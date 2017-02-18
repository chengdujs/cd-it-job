<template>
  <div class="weui-cell weui-cell-a weui-cell_select weui-cell_select-before">
    <div class="weui-cell__hd"><label class="weui-label">{{ input.title }}</label></div>
    <div class="weui-cell__bd">
      <select @change="sendData" :style="style" class="weui-select" :name="input.name" v-model="model">
        <option value="0000" hidden>{{ input.placeholder }}</option>
        <option v-for="(val, key) in jobData" :value="key">{{ val }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['inputInfo', 'jobData'],
    data() {
      return {
        input: this.inputInfo,
        model: '0000',
        style: {
          color: '#a9a9a9'
        }
      }
    },
    computed: {
      msg() {
        let data = {};
        this.style.color = this.model === '0000' ? '#a9a9a9' : '#000';
        data[this.input.name] = this.model;
        return data;
      }
    },
    methods: {
      sendData() {
        this.$emit('msg', this.msg);
      }
    }
  }
</script>

<style lang="scss" scoped>
  // reset
  .weui-cell_select-before {
    .weui-select {
      width: 100%;
      option {
       color: #000;
      }
    }
    .weui-cell__bd {
      padding-left: 0;
    }
    .weui-cell__hd {
      &:before {
        display: none;
      }
    }
  }
</style>
