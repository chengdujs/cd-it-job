<template>
  <div>
    <label for="upload-input">
      <img class="pic" :height="height" :width="width" :src="imgSrc">
    </label>
    <input id="upload-input" style="display: none;" type="file" accept="image/*" @change="upload($event)">
  </div>
</template>

<script>
import { ajax } from 'common';

export default {
  props: {
    imgSrc: {
      type: String
    },
    height: {
      type: String,
      default: '50px'
    },
    width: {
      type: String,
      default: '50px'
    }
  },
  methods: {
    upload(event) {
      let files = event.target.files;
      let formData = new window.FormData();
      for (let i = 0, length = files.length; i < length; i++) {
        formData.append('file', files[i], files[i].name);
      }
      let src = window.URL.createObjectURL(files[0]);
      this.$emit('imgChange', src);

      ajax.post(`${window.AppConf.apiHost}/upload`, formData)
        .then((data) => {
          // this.$emit('imgChange', data.src);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.pic {
  border: none;
}
</style>
