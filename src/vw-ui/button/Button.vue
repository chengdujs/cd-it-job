<template>
  <button class="weui-btn" @click="onButtonClick($event)" :class="btnClass"><slot></slot></button>
</template>
<script>
  const BTN_TYPES = ['default', 'warn', 'primary'];
  export default {
    name: 'vw-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plain: {
        type: Boolean,
        default: false
      },
      mini: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      btnClass() {
        let classArr = [];
        classArr.push(`weui-btn_${this.plain ? 'plain-' : ''}${this.type}`);
        if (this.disabled) {
          classArr.push(`weui-btn_${this.plain ? 'plain-' : ''}disabled`);
        }
        if (this.mini) {
          classArr.push('weui-btn_mini');
        }
        return classArr.join(' ');
      }
    },
    watch: {
      type(newVal) {
        if (BTN_TYPES.indexOf(newVal) < 0) {
          console.warn(`vw-ui:Button:invalid type value, type must in ['default', 'warn', 'primary'].`);
        }
      }
    },
    methods: {
      onButtonClick(evt) {
        if (this.disabled) {
          return;
        }
        this.$emit('click', evt);
      }
    }
  };
</script>
