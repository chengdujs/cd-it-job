<template>
  <div class="com-info-edit">
    <job-split></job-split>
    <inputLine :des="formFiles[0].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="formFiles[1].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <div class="logo">
      <div class="upload-wrapper">
        <img-Upload :imgSrc="formFiles[2].value" :width="logoWidth" :height="logoHeight" @imgChange="imgChange"></img-Upload>
      </div>
      <span class="text">请上传公司图标</span>
    </div>
    <job-split></job-split>
    <inputLine :des="formFiles[3].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="formFiles[4].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="formFiles[5].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="formFiles[6].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="formFiles[7].text" @msg="editInfo"></inputLine>
    <job-split></job-split>
    <inputLine :des="formFiles[8].text" @msg="editInfo"></inputLine>
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
        formFiles: [
          {
            type: 'comInfo',
            text: '公司信息',
            value: ''
          },
          {
            type: 'name',
            text: '公司简称',
            value: ''
          },
          {
            type: 'logoURL',
            text: 'LOGO',
            value: ''
          },
          {
            type: 'industry',
            text: '所属行业',
            value: ''
          },
          {
            type: 'staffTotalNumber',
            text: '公司规模',
            value: ''
          },
          {
            type: 'financingStage',
            text: '所处阶段',
            value: ''
          },
          {
            type: 'description',
            text: '公司介绍',
            value: ''
          },
          {
            type: 'address',
            text: '公司地址',
            value: ''
          },
          {
            type: 'comURL',
            text: '公司网址',
            value: ''
          }
        ],
        logoWidth: '60px',
        logoHeight: '60px'
      }
    },
    created() {},
    computed: {},
    watth: {},
    methods: {
      editInfo(msg) {
        for (let file of this.formFiles) {
          if (file.text === msg.des) {
            file.value = msg.model;
            break;
          }
        }
      },
      imgChange(src) {
        this.formFiles[2].value = src;
      },
      save() {
        console.log(this.formFiles);
        // 表单上传
        let formData = new FormData();
        for (let file of this.formFiles) {
          formData.append(file.type, file.value);
        }
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
