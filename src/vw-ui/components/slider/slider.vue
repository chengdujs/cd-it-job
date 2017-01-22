<template>
  <div class="weui-slider-box vw-slider">
    <div class="weui-slider">
      <div class="weui-slider__inner">
        <div class="weui-slider__track" :style="{'width': sliderTrackHandlerPercent}"></div>
        <div class="weui-slider__handler" :style="{'left': sliderTrackHandlerPercent}"></div>
      </div>
    </div>
    <div class="weui-slider-box__value" v-if="showValue">{{innerValue}}</div>
  </div>
</template>
<script>
  import { $$ } from './../../utils/dom';
  export default {
    name: 'vw-slider',
    props: {
      showValue: {
        type: Boolean,
        default: false
      },
      maxValue: {
        type: Number,
        default: 100
      },
      value: null
    },
    data() {
      return {
        innerValue: 0,
        sliderHandler: null,
        startLeft: 0,
        startX: 0,
        totalLen: 0
      };
    },
    mounted() {
      this.sliderHandler = this.$el.querySelector('.weui-slider__handler');
      this.totalLen = parseInt($$('.weui-slider__inner', this.$el).getStyle('width'), 10);
      this.innerValue = this.value;
      $$(this.sliderHandler).on('touchstart', this.onTouchstart);
      $$(this.sliderHandler).on('touchmove', this.onTouchmove);
    },
    beforeDestroy() {
      $$(this.sliderHandler).off('touchstart', this.onTouchstart);
      $$(this.sliderHandler).off('touchmove', this.onTouchmove);
    },
    computed: {
      sliderTrackHandlerPercent() {
        return `${this.innerValue / this.maxValue * 100}%`;
      }
    },
    watch: {
      value(newVal) {
        this.innerValue = newVal;
      },
      innerValue(newVal) {
        this.$emit('input', newVal);
      }
    },
    methods: {
      onTouchstart(e) {
        this.startLeft = parseInt($$(this.sliderHandler).getStyle('left'), 10);
        this.startX = e.changedTouches[0].clientX;
        console.log('start', this.startLeft, this.startX);
      },
      onTouchmove(e) {
        let totalLen = this.totalLen;
        let dist = this.startLeft + e.changedTouches[0].clientX - this.startX;
        dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
        this.innerValue = Math.floor(this.maxValue * (dist / totalLen));
        e.preventDefault();
        console.log('move');
      }
    }
  }
</script>
