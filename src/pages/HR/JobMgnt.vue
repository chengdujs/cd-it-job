<style lang="scss">
.page-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 50px;
  width: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

<template>
  <div class="page-wrapper">
    <job-navbar :onFirstTabActive="onFirstTabActive" :onSecondTabActive="onSecondTabActive">
      <div slot="tab-content-first">
        <div class="job-list">
          <div class="job-list-item" v-for="job in jobs">
            <job-split></job-split>
            <job-info :job="job"></job-info>
          </div>
        </div>
      </div>
      <div slot="tab-content-second">
        <div class="job-list">
          <div class="job-list-item" v-for="job in jobs">
            <job-split></job-split>
            <job-info :job="job"></job-info>
          </div>
        </div>
      </div>
    </job-navbar>
  </div>
</template>

<script>
import { jobInfo, jobSplit, jobNavbar } from 'components';
import { ajax } from 'common';

export default {
  components: {
    jobInfo,
    jobSplit,
    jobNavbar
  },
  data() {
    return {
      jobs: []
    }
  },
  methods: {
    onFirstTabActive() {
      this.jobs = [];
      ajax.get(`${window.AppConf.apiHost}/hr/jobs/online`)
        .then(res => {
          if (res.state === 1) {
            this.jobs = res.data;
          }
        });
    },
    onSecondTabActive() {
      this.jobs = [];
      ajax.get(`${window.AppConf.apiHost}/hr/jobs/offline`)
        .then(res => {
          if (res.state === 1) {
            this.jobs = res.data;
          }
        });
    }
  },
  created() {
    this.onFirstTabActive();
  }
}
</script>
