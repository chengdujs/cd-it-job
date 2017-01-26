/** 1.组件上传未完成，头像暂留空;2.MyPage未设置router-view，因此使用fixed样式进行覆盖;3.未添加表单验证**/
<template lang="html">
  <div v-if="settingShow" class="my-setting">
    <div class="my-avatar-wrapper">
      <div class="my-avatar">
        <div class="text">
          用户头像
        </div>
        <div class="avatar">

        </div>
      </div>
    </div>
    <job-split></job-split>
    <div class="nickname-wrapper">
      <div class="nickname">
        <div class="text">
          昵称
        </div>
        <input type="text" class="nicknameIn" placeholder="请填写" v-model.trim.lazy="user.nickname">
      </div>
    </div>
    <job-split></job-split>
    <div class="sex-wrapper">
      <div class="sex">
        <div class="text">
          性别
        </div>
        <select class="sexIn" name="sex" v-model.lazy="user.sex">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
    </div>
    <job-split></job-split>
    <div class="job-wrapper">
      <div class="job">
        <div class="text">
          职业身份
        </div>
        <input type="text" class="jobIn" v-model.trim.lazy="user.job" placeholder="请填写">
      </div>
    </div>
    <job-split></job-split>
    <div class="tel-wrapper">
      <div class="tel">
        <div class="text">
          手机号码修改
        </div>
        <input type="tel" name="" class="telIn" v-model.number.lazy="user.tel" placeholder="请输入">
      </div>
    </div>
    <job-split></job-split>
    <div class="bt-wrapper">
      <vw-button @click="_save" type="primary">保存</vw-button>
    </div>
  </div>
</template>

<script>
import { jobSplit } from 'components';
export default {
  name: 'my-setting',
  props: {
    settingShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    jobSplit
  },
  data() {
    return {
      user: {
        nickname: '',
        avatar: '',
        sex: '男',
        job: '',
        tel: ''
      }
    }
  },
  methods: {
    _save() {
      // 预留接口处
      this.$toast.msg('信息已保存', { duration: 3000 }, () => {
        this.$emit('flagChange');
      });
      console.log('保存信息');
      console.log(this.user);
    }
  }
}
</script>

<style lang="scss">
  .flexType{
    display: flex;
    justify-content: space-between;
  }
  .flexItem{
    display: 0 0 60px;
    width: 60px;
    font-size: 16px;
    margin-top: 5px;
  }
  .my-setting{
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    background: white;
    input{
      outline: none;
      border: none;
    }
    .text{
      flex: 1;
      font-size: 16px;
      line-height: 16px;
    }
    .my-avatar-wrapper{
      padding: 12px 16px;
      .my-avatar{
        @extend .flexType;
        .text{
          margin-top: 22px;
        }
        .avatar{
          @extend .flexItem;
          height: 60px;
          background: green;
        }
      }
    }
    .nickname-wrapper{
      padding: 12px 16px;
      .nickname{
        @extend .flexType;
        .nicknameIn{
          @extend .flexItem;
          font-size: 16px;
        }
        .text{
          margin-top: 5px;
        }
      }
    }
    .sex-wrapper{
      padding: 12px 16px;
      .sex{
        @extend .flexType;
        .sexIn{
          @extend .flexItem;
        }
        .text{
          margin-top: 5px;
        }
      }
    }
    .job-wrapper{
      padding: 12px 16px;
      .job{
        @extend .flexType;
        .jobIn{
          @extend .flexItem;
        }
        .text{
          margin-top: 5px;
        }
      }
    }
    .tel-wrapper{
      padding: 12px 16px;
      .tel{
        @extend .flexType;
        .telIn{
          @extend .flexItem;
        }
        .text{
          margin-top: 5px;
        }
      }
    }
    .bt-wrapper{
      padding: 12px 16px;
    }
  }
</style>
