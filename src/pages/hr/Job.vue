<template>
  <div class="page-cells_wrapper">
    <div class="weui-cells page-cells-a">
      <template v-for="input in inputs">
        <text-ele @msg="updateJobInfo" :inputInfo="input" v-if="input.type == 'text'"></text-ele>
        <select-ele @msg="updateJobInfo" :inputInfo="input" :jobData="jobData[input.name]" v-if="input.type == 'select'"></select-ele>
        <textarea-ele @msg="updateJobInfo" :inputInfo="input" v-if="input.type == 'textarea'"></textarea-ele>
      </template>
      <div class="page-btn-bg">
        <a href="javascript:;" @click="save" class="weui-btn weui-btn_primary">保存</a>
      </div>
      <!--<v-dialog></v-dialog>-->
    </div>
  </div>
</template>

<script>
  import { ajax } from 'common';
  import TextEle from './TextEle';
  import TextareaEle from './TextareaEle';
  import SelectEle from './SelectEle';
  export default {
    data() {
      return {
        url: `${window.AppConf.apiHost}/hr/job`,
        jobInfo: {},
        inputs: [{
          'type': 'select',
          'name': 'category',
          'title': '职位类别',
          'placeholder': '请选择职位类别'
        }, {
          'type': 'text',
          'name': 'name',
          'title': '职位名称',
          'placeholder': '请填写职位名称'
        }, {
          'type': 'select',
          'name': 'nature',
          'title': '工作性质',
          'placeholder': '请选择工作性质'
        }, {
          'type': 'select',
          'name': 'experience',
          'title': '工作经验',
          'placeholder': '请选择工作经验'
        }, {
          'type': 'select',
          'name': 'educational',
          'title': '学历要求',
          'placeholder': '请选择学历要求'
        }, {
          'type': 'select',
          'name': 'salary',
          'title': '月薪范围',
          'placeholder': '请选择月薪范围'
        }, {
          'type': 'textarea',
          'name': 'describle',
          'title': '职位描述',
          'placeholder': '请填写职位描述'
        }, {
          'type': 'text',
          'name': 'address',
          'title': '工作地址',
          'placeholder': '请填写工作地址'
        }],
        jobData: {
          'category': {
            '0001': '技术'
          },
          'nature': {
            '0001': '不限',
            '0002': '全职',
            '0003': '兼职',
            '0004': '实习'
          },
          'experience': {
            '0001': '不限',
            '0002': '应届毕业生',
            '0003': '3年及以下',
            '0004': '3-5年',
            '0005': '5-10年',
            '0006': '10年以上',
            '0007': '不要求'
          },
          'educational': {
            '0001': '不限',
            '0002': '大专',
            '0003': '本科',
            '0004': '硕士',
            '0005': '博士',
            '0006': '不要求'
          },
          'salary': {
            '0001': '2K以下',
            '0002': '2K-5K',
            '0003': '5K-10K',
            '0004': '10K-15K',
            '0005': '15K-25K',
            '0006': '25K-50K',
            '0007': '50K以上'
          }
        }
      }
    },
    methods: {
      save() {
        if (this.validate()) {
          ajax.post(this.url, this.jobInfo).then((res) => {
            if (res.status) {
              // 存入返回数据至store
              // 跳转至预览页面
              this.$router.push('/hr/job/preview');
            }
          });
        }
      },
      updateJobInfo(info) {
        Object.assign(this.jobInfo, info);
      },
      validate() {
        /**
         * 检测表单填写完整性
         * 1. 数据的长度
         * 2. 数据的每个字段是否为符合要求
         */
        if (Object.keys(this.jobInfo).length === this.inputs.length) {
          let isOk = true;
          this.inputs.forEach((input) => {
            if ((input.type === 'text' || input.type === 'textarea') && !(this.jobInfo[input.name])) {
              isOk = false;
              this.$toast.msg(`${input.title}数据不能为空`);
            } else if (input.type === 'select' && !(this.jobData[input.name][this.jobInfo[input.name]])) {
              isOk = false;
              this.$toast.msg(`${input.title}数据不符合`);
            }
          })
          return isOk;
        } else {
          this.$toast.msg('数据不完整');
          return false;
        }
      }
    },
    components: {
      TextEle,
      TextareaEle,
      SelectEle
    }
  }
</script>

<style lang="scss">
  .page {
    &-cells {
      &-a {
        margin-top: 0;
        background: transparent;
      }
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
    &-cell {
      &-a {
        padding: 2px 0;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin: 10px 0;
        background: #fff;

        &:first-child {
          margin-top: 0;
        }
      }
      &__bd_a {
        padding-left: 15px;
      }
    }

    &-btn {

      &-bg {
        background: #fff;
        padding: 10px;
      }
    }
  }
</style>
