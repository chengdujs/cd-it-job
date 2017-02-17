<template>
  <div class="weui-cell weui-cell-a">
    <div class="weui-cell__hd"><label class="weui-label">{{ input.title }}</label></div>
    <div class="weui-cell__bd weui-cell__bd_a">
      <input @change="sendData" v-model="model" class="weui-input" type="text" :name="input.name" :placeholder="input.placeholder">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['inputInfo'],
    data() {
      return {
        input: this.inputInfo,
        model: ''
      }
    },
    computed: {
      msg() {
        let data = {};
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
