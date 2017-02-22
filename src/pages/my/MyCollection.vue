<template>
  <div class="my-collection">
    <div class="item"
         v-for="item in collectionList"
         >
         <collected-job :job="item" @cancel="refresh"></collected-job>
         <job-Split></job-Split>
    </div>
  </div>
</template>
<script>
  import { jobSplit } from 'components';
  import { ajax } from 'common';
  import collectedJob from './collected-job';
  export default {
    name: 'my-collection',
    props: {},
    components: {
      collectedJob,
      jobSplit
    },
    filters: {},
    data() {
      return {
        collectionList: [],
        url: `${window.AppConf.apiHost}/my/jobCollection`
      }
    },
    created() {
      this._getData();
    },
    methods: {
      _getData() {
        ajax.get(this.url)
          .then(data => {
            this.$set(this, 'collectionList', data);
            console.log(data);
          })
          .catch(() => {
            this.$toast.msg('请求的数据未得到', { duration: 3000 },
              () => {
                window.history.go(-1);
              });
          });
      },
      refresh() {
        this._getData();
      }
    }
  }

</script>
<style lang="scss" scoped>

</style>
