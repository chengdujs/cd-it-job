<template>
  <div class="page-my">
    <h1>My</h1>
    <img-upload :imgSrc="src" @imgChange="imgChange"></img-upload>
  </div>
</template>

<script>
import { imgUpload } from 'components';

export default {
  components: {
    imgUpload
  },
  data() {
    return {
      src: 'http://7xoxnz.com1.z0.glb.clouddn.com/classAdapter.png'
    }
  },
  methods: {
    imgChange(src) {
      this.src = src;
    }
  }
}
</script>
