<template>
  <div class="input-line">
    <label class="des" :for="id">
      {{comModel.text}}
    </label>
    <input type="text"
    :id="id"
    :placeholder="comModel.value?comModel.value:hint"
    class="input"
    :name="comModel.text"
    v-model="model"
    @change="sendData">
  </div>
</template>
<script>
  export default {
    name: 'input-line',
    props: {
      comModel: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        model: ''
      }
    },
    computed: {
      msg() {
        let msg = {
          des: this.comModel.text,
          model: this.model
        };
        return msg;
      },
      hint() {
        return `请填写${this.comModel.text}`;
      },
      id() {
        return Math.floor(Math.random() * 89999 + 10000);
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
  $darkGrey: #D8D8D8;
  .input-line{
    display: flex;
    background: white;
    padding: 12px 16px;
    input{
      outline:none;
      border: none;
    }
    .des{
      flex: 0 0 80px;
      width: 80px;
      height: 20px;
      border-right: 2px solid $darkGrey;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
    .input{
      flex: 1;
      font-size: 16px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
  }
</style>
