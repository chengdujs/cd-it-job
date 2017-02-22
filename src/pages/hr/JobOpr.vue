<template>
  <div>
    <div class="page-btn-bg">
      <a href="javascript:;" @click="toUpdateJob" class="weui-btn weui-btn_primary">修改</a>
      <a href="javascript:;" @click="putStatus" class="weui-btn weui-btn_warn">{{ statusName }}</a>
    </div>
    <v-dialog @msg="updateIsHidden" :isHidden="isHidden"></v-dialog>
  </div>
</template>

<script>
  import VDialog from './VDialog';
  export default {
    data() {
      return {
        status: 1,
        statusName: '下线',
        isHidden: true
      }
    },
    methods: {
      toUpdateJob() {
        this.$router.push('/hr/job');
      },
      putStatus() {
        // status 0 状态是下线 name应该是发布；1 状态是发布 name应该是下线
        // 获取store中的数据
        if (this.status === 1) {
          // 发起更新状态的请求，更新状态为下线状态，返回状态值为0
          this.status = 0;
          this.statusName = '发布';
        } else if (this.status === 0) {
          // 弹出dialog提示操作
          this.isHidden = false;
        }
      },
      updateIsHidden() {
        this.isHidden = !this.isHidden;
      }
    },
    components: {
      VDialog
    }
  }
</script>

<style lang="scss" scoped>
  a:hover {
    color: #fff;
  }
  .page {
    &-btn {
      &-bg {
        a {
          display: inline-block;
          margin-top: 0;
          width: 48%;

          &:first-child {
            margin-right: 1%;
          }

          &:last-child {
            margin-left: 1%;
          }
        }
      }
    }
  }
</style>
