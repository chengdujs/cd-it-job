/** 1.组件上传未完成，头像暂留空;2.MyPage未设置router-view，因此使用fixed样式进行覆盖;3.未添加表单验证**/
<template lang="html">
  <div v-if="settingShow" class="my-setting">
    <div class="my-avatar-wrapper">
      <div class="my-avatar">
        <div class="text">
          用户头像
        </div>
        <div class="avatar">
          <img-upload :imgSrc="user.avatar" :width="avatarWidth" :height="avatarHeight" @imgChange="imgChange"></img-upload>
        </div>
      </div>
    </div>
    <job-split></job-split>
    <div class="nickname-wrapper">
      <div class="nickname">
        <div class="text">
          昵称
        </div>
        <input type="text" class="nickname-in" placeholder="请填写" v-model.trim.lazy="user.nickname">
      </div>
    </div>
    <job-split></job-split>
    <div class="sex-wrapper">
      <div class="sex">
        <div class="text">
          性别
        </div>
        <select class="sex-in" name="sex" v-model.lazy="user.sex">
          <option value="1">男</option>
          <option value="0">女</option>
        </select>
      </div>
    </div>
    <job-split></job-split>
    <div class="job-wrapper">
      <div class="job">
        <div class="text">
          职业身份
        </div>
        <input type="text" class="job-in" v-model.trim.lazy="user.job" placeholder="请填写">
      </div>
    </div>
    <job-split></job-split>
    <div class="tel-wrapper">
      <div class="tel">
        <div class="text">
          手机号码修改
        </div>
        <input type="tel" name="" class="tel-in" v-model.number.lazy="user.tel" placeholder="请输入">
      </div>
    </div>
    <job-split></job-split>
    <div class="bt-wrapper">
      <vw-button @click="_save" type="primary">保存</vw-button>
      <vw-button @click="_back" type="warn">取消</vw-button>
    </div>
  </div>
</template>

<script>
  import { jobSplit, imgUpload } from 'components';

  const SUCCESS = 1;

  export default {
    name: 'my-setting',
    props: {
      settingShow: {
        type: Boolean,
        default: false
      },
      userId: {
        type: String
      }
    },
    components: {
      jobSplit,
      imgUpload
    },
    data() {
      return {
        user: {
          nickname: '',
          avatar: '',
          sex: '男',
          job: '',
          tel: ''
        },
        avatarWidth: '60px',
        avatarHeight: '60px'
      }
    },
    watch: {
      settingShow(val, oldVal) {
        let self = this;
        if (val) {
          /* 创建组件时获取个人信息 */
          axios.get('http://chat.hstar.org:8601/HkGhqLCUg/my_info', {
            userId: self.userId
          })
            .then(function (response) {
              let data = response.data;
              if (data.status === SUCCESS) {
                self.user.nickname = data.userInfo.nickname
                self.user.avatar = data.userInfo.avatar
                self.user.sex = data.userInfo.sex
                self.user.job = data.userInfo.job
                self.user.tel = data.userInfo.tel
              } else {
                self.$toast.msg('信息已保存', { duration: 3000 }, () => {
                  self.$emit('flagChange');
                });
              }
            })
            .catch(function (error) {
              console.log(error);
              self.$toast.msg('服务器响应失败！', { duration: 1500 }, () => {
                self.$emit('flagChange');
              });
            });
        }
      }
    },
    methods: {
      _save() {
        let self = this;
        /* 验证手机号码，只允许为空或者手机a号码格式正确时才可以上传 */
        function _validate() {
          if (self.user.tel === '') {
            return { status: true, msg: '可以保存' };
          } else {
            if (/^1[0-9]{10}$/.test(self.user.tel)) {
              return { status: true, msg: '可以保存' };
            } else {
              return { status: false, msg: '请输入正确的手机号码' }
            }
          }
        }
        let validate = _validate();
        /* 更新保存个人信息 */
        if (validate.status) {
          /* global axios */
          axios.post('http://chat.hstar.org:8601/HkGhqLCUg/my/updateInfo', {
            nickname: self.user.nickname,
            avatar: self.user.avatar,
            sex: self.user.sex,
            job: self.user.job,
            tel: self.user.tel
          })
            .then(function (response) {
              let data = response.data;
              if (data.status === SUCCESS) {
                self.$toast.msg('信息保存成功', { duration: 1000 }, () => {
                  self.$emit('flagChange');
                });
              } else {
                self.$toast.msg('信息保存失败', { duration: 1000 }, () => { });
              }
            })
            .catch(function (error) {
              console.log(error);
              this.$toast.msg('信息保存失败', { duration: 3000 }, () => { });
            });
        } else {
          this.$toast.msg(validate.msg, { duration: 2000 }, '');
        }
      },
      _back() {
        // 预留接口处
        this.$emit('flagChange');
      },
      imgChange(src) {
        this.user.avatar = src;
      }
    }
  }

</script>

<style lang="scss">
  %flex-type {
    display: flex;
    justify-content: space-between;
  }
  
  %flex-item {
    display: 0 0 60px;
    width: 60px;
    font-size: 16px;
    margin-top: 5px;
  }
  
  .my-setting {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 99;
    background: white;
    input {
      outline: none;
      border: none;
    }
    .text {
      flex: 1;
      font-size: 16px;
      line-height: 16px;
    }
    .my-avatar-wrapper {
      padding: 12px 16px;
      .my-avatar {
        @extend %flex-type;
        .text {
          margin-top: 22px;
        }
        .avatar {
          @extend %flex-item;
          height: 60px;
          background: green;
        }
      }
    }
    .nickname-wrapper {
      padding: 12px 16px;
      .nickname {
        @extend %flex-type;
        .nickname-in {
          @extend %flex-item;
          font-size: 16px;
        }
        .text {
          margin-top: 5px;
        }
      }
    }
    .sex-wrapper {
      padding: 12px 16px;
      .sex {
        @extend %flex-type;
        .sex-in {
          @extend %flex-item;
        }
        .text {
          margin-top: 5px;
        }
      }
    }
    .job-wrapper {
      padding: 12px 16px;
      .job {
        @extend %flex-type;
        .job-in {
          @extend %flex-item;
        }
        .text {
          margin-top: 5px;
        }
      }
    }
    .tel-wrapper {
      padding: 12px 16px;
      .tel {
        @extend %flex-type;
        .tel-in {
          @extend %flex-item;
        }
        .text {
          margin-top: 5px;
        }
      }
    }
    .bt-wrapper {
      padding: 12px 16px;
    }
  }
</style>