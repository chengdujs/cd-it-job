<style scoped>
  .vw-swipe{
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  .vw-swipe ul{
    height: 100%;
  }
  .vw-swipe .vw-swipe-indicators{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  .vw-swipe .vw-swipe-indicators .vw-swipe-indicator{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
    background: transparent;
    border: 1px solid #fff;
    display: inline-block;
  }
  .vw-swipe .vw-swipe-indicator.is-active{
    background: green;
  }
</style>
<template>
  <div class="vw-swipe">
    <ul :style="styleObj">
      <slot></slot>
      vw
    </ul>
    <div class="vw-swipe-indicators" v-show="showIndicators">
      <div class="vw-swipe-indicator" v-for="(page, $index) in pages" :class="{ 'is-active': $index === index }"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'vw-swipe',
    props: {
      showIndicators: {
        type: Boolean,
        default: true
      },
      speed: { // 动画保持时间
        type: Number,
        default: 300
      },
      auto: { // 自动切换间隔时间
        type: Number,
        default: 2000
      }
    },
    data() {
      return {
        pageWidth: -1,
        index: 0,
        pages: [],
        startOffset: -1,
        minValue: 0,
        s: 0.3
      }
    },
    created() {

    },
    mounted() {
      this.pageWidth = this.$el.clientWidth;
      this.startOffset = this.pageWidth;
      this.minValue = this.startOffset - (this.pages.length) * this.pageWidth;

      this.pages.forEach((p, i) => {
        p.styleObj = {
          transform: `translate3d(${(i - 1) * this.pageWidth}px, 0px, 0px)`
        };
      });

      setInterval(() => {
        this.startOffset -= this.pageWidth;
        this.s = this.speed / 1000;
        this.index++;
        if (this.startOffset <= this.minValue) {
          this.startOffset = this.pageWidth;
          this.s = 0;
        }
        if (this.index >= this.pages.length) {
          this.index = 0;
        }
      }, this.auto);
    },
    computed: {
      styleObj() {
        return {
          transition: `all ${this.s}s cubic-bezier(0.22, 0.69, 0.72, 0.88)`,
          transform: `translate3d(${this.startOffset}px, 0px, 0px)`
        }
      }
    }
  };
</script>
