<template>
  <div class="weui-tab">
    <div class="weui-navbar" @click="onNavbarClick($event)">
        <div class="weui-navbar__item" :class="{'weui-bar__item_on': isFirstTabActive}">
            热招中
        </div>
        <div class="weui-navbar__item" :class="{'weui-bar__item_on': isSecondTabActive}">
            已下线
        </div>
    </div>
    <div class="weui-tab__panel">
      <slot v-if="isFirstTabActive" name="tab-content-first"></slot>
      <slot v-if="isSecondTabActive" name="tab-content-second"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'vw-navbar',
  props: {
    onFirstTabActive: {
      type: Function,
      default: () => {}
    },
    onSecondTabActive: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      activeTab: 'first'
    }
  },
  methods: {
    onNavbarClick(evt) {
      switch (evt.target.innerText) {
        case '热招中':
          if (this.activeTab === 'first') {
            break;
          } else {
            this.onFirstTabActive();
            this.activeTab = 'first';
          }
          break;
        case '已下线':
          if (this.activeTab === 'second') {
            break;
          } else {
            this.onSecondTabActive();
            this.activeTab = 'second';
            break;
          }
      }
    }
  },
  computed: {
    isFirstTabActive() {
      return this.activeTab === 'first';
    },
    isSecondTabActive() {
      return this.activeTab === 'second';
    }
  }
};
</script>
