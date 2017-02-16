<template>
  <div class="weui-cells weui-cells_form">
    <div v-for="input in inputs" class="weui-cell weui-cell-a">
      <div class="weui-cell__hd"><label class="weui-label">{{ input.title }}</label></div>
      <div class="weui-cell__bd">
        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请选择职位类别">
      </div>
    </div>
    <div class="weui-btn-bg">
      <a href="javascript:;" class="weui-btn weui-btn_primary">保存</a>
    </div>
    <job-opr></job-opr>
  </div>
</template>

<script>
  import JobOpr from './JobOpr';
  export default {
    data() {
      return {
        inputs: [{
          'title': '职位类别',
          'placeholder': '请选择职位类别'
        }, {
          'title': '职位名称',
          'placeholder': '请填写职位名称'
        }, {
          'title': '工作性质',
          'placeholder': '请选择工作性质'
        }, {
          'title': '工作经验',
          'placeholder': '请选择工作经验'
        }, {
          'title': '学历要求',
          'placeholder': '请选择学历要求'
        }, {
          'title': '月薪范围',
          'placeholder': '请选择月薪范围'
        }, {
          'title': '职位描述',
          'placeholder': '请填写职位描述'
        }, {
          'title': '工作地址',
          'placeholder': '请填写工作地址'
        }]
      }
    },
    components: {
      JobOpr
    }
  }
</script>

<style lang="scss" scoped>
  .weui {
    &-cells {
      margin-top: 0;
      background: transparent;
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
      &__hd {
        position: relative;
        &:after {
          content: " ";
          position: absolute;
          right: 0;
          top: 0;
          width: 1px;
          bottom: 0;
          border-right: 1px solid #D9D9D9;
          color: #D9D9D9;
          -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0;
          -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
        }
      }
      &__bd {
        padding-left: 5px;
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
