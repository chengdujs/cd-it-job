<template>
  <div class="invite-hot">
    <ul>
      <job-item v-for="item of jobs" :item="item"></job-item>
    </ul>
  </div>
</template>
<script>
  import { jobItem } from './../../components';
  import { ajax } from './../../common';
  export default {
    components: {
      jobItem
    },
    data() {
      return {
        jobs: []
      };
    },
    created() {
      ajax.get('/static/mock/job.json')
        .then(data => {
          this.jobs = data;
        });
    }
  };
</script>
