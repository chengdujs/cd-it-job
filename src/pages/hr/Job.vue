<template>
  <div class="weui-cells_wrapper">
    <div class="weui-cells weui-cells-a">
      <template v-for="input in inputs">
        <text-ele @msg="getJobInfo" :inputInfo="input" v-if="input.type == 'text'"></text-ele>
        <select-ele @msg="getJobInfo" :inputInfo="input" :jobData="jobData[input.name]" v-if="input.type == 'select'"></select-ele>
        <textarea-ele @msg="getJobInfo" :inputInfo="input" v-if="input.type == 'textarea'"></textarea-ele>
      </template>
      <div class="weui-btn-bg">
        <a href="javascript:;" @click="save" class="weui-btn weui-btn_primary">保存</a>
      </div>
      <!--<job-opr></job-opr>-->
    </div>
  </div>
</template>

<script>
  import JobOpr from './JobOpr';
  import TextEle from './TextEle';
  import TextareaEle from './TextareaEle';
  import SelectEle from './SelectEle';
  export default {
    data() {
      return {
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
        console.log(this.jobInfo);
      },
      getJobInfo(info) {
        Object.assign(this.jobInfo, info);
        console.log(this.jobInfo);
      }
    },
    components: {
      JobOpr,
      TextEle,
      TextareaEle,
      SelectEle
    }
  }
</script>

<style lang="scss">
  .weui {
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
