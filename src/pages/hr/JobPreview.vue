<template>
  <!-- 内容应该是和job detail一致的，只是对于角色的不一样，脚部操作有一个检测输出 -->
  <div class="job-preview_wrapper">
    <search-detail></search-detail>

    <job-opr></job-opr>
  </div>
</template>

<script>
  import SearchDetail from '../search/SearchDetail';
  import JobOpr from './JobOpr';
  import VDialog from './VDialog';
  export default {
    data() {
      return {

      }
    },
    components: {
      SearchDetail,
      JobOpr,
      VDialog
    }
  }
</script>

<style lang="scss" scoped>
  .job-preview {
      &_wrapper {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 50px;
        width: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
  }
</style>
