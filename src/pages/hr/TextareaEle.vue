<template>
  <div>
    <div class="weui-cells__title">{{ input.title }}</div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__bd">
            <textarea @change="sendData" class="weui-textarea" v-model="model" :placeholder="input.placeholder" rows="5"></textarea>
            <div class="weui-textarea-counter"><span>{{ getLen }}</span>/5000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['inputInfo'],
    data() {
      return {
        input: '',
        model: '',
        len: 0
      }
    },
    computed: {
      msg() {
        let data = {};
        data[this.input.name] = this.model;
        return data;
      },
      getLen() {
        return this.model.length;
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
