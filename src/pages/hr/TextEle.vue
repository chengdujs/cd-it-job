<template>
  <div class="weui-cell page-cell-a">
    <div class="weui-cell__hd"><label class="weui-label">{{ input.title }}</label></div>
    <div class="weui-cell__bd page-cell__bd_a">
      <input @change="sendData" v-model="model" class="weui-input" type="text" :name="input.name" :placeholder="input.placeholder">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['inputInfo'],
    data() {
      return {
        input: '',
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
    mounted() {
      this.input = this.inputInfo;
    },
    methods: {
      sendData() {
        this.$emit('msg', this.msg);
      }
    }
  }
</script>
