<template>
  <div class="com-info-edit">
    <job-split></job-split>
    <inputLine :des="'公司信息'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="'公司简称'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <div class="logo">
      <div class="upload-wrapper">
        <img-Upload :imgSrc="infoList['LOGO']" :width="logoWidth" :height="logoHeight" @imgChange="imgChange"></img-Upload>
      </div>
      <span class="text">请上传公司图标</span>
    </div>
    <job-split></job-split>
    <inputLine :des="'所属行业'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="'公司规模'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="'所处阶段'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="'公司介绍'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="'公司地址'" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="'公司网址'" @msg="editInfo"></inputLine>
    <job-split></job-split>




    <div class="bt-wrapper">
      <vw-button type="primary" @click="save">保存</vw-button>
    </div>
    <job-split></job-split>
    <div class="bt-wrapper">
      <vw-button type="warn" @click="cancel">取消</vw-button>
    </div>
    <div class="more"></div>
  </div>
</template>
<script>
  import { inputLine, jobSplit, imgUpload } from 'components';
  export default {
    name: 'com-info-edit',
    components: {
      inputLine,
      jobSplit,
      imgUpload
    },
    filters: {},
    data() {
      return {
        infoList: {
          '公司信息': '',
          '公司简称': '',
          'LOGO': '',
          '所属行业': '',
          '公司规模': '',
          '所处阶段': '',
          '公司介绍': '',
          '公司地址': '',
          '公司网址': ''
        },
        logoWidth: '60px',
        logoHeight: '60px'
      }
    },
    created() {},
    computed: {},
    watth: {},
    methods: {
      editInfo(msg) {
        this.infoList[msg.des] = msg.model;
      },
      imgChange(src) {
        this.infoList['LOGO'] = src;
      },
      save() {
        console.log(this.infoList);
      },
      cancel() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .com-info-edit{
    .logo{
      display: flex;
      background: white;
      padding: 12px 16px;
      .upload-wrapper{
        flex:0 0 80px;
        box-sizing: content-box;
        width: 80px;
        border-right: 2px solid #D8D8D8;
      }
      .text{
        flex: 1;
        font-size: 16px;
        color: #A7A7A7;
        height: 58px;
        line-height: 58px;
        text-align: center;

      }
    }
    .bt-wrapper{
      background: white;
      padding: 12px 16px;
    }
    .more{
      height: 80px;
    }
  }
</style>
