/* author: fridolph email:249121486@qq.com version:0.0.2 
bug:
1. my-control 没有预留接口 就新增一个路由来展示该页
（ localhost:12345/testresume ） 
src/router.config.js 完成该页后会去掉 /testresume
2. mock数据结构在 static/mock/myresumeDetail.json 
（由于没加入group，请原谅我在anymock擅自定义数据来测试…）
3. src/config/config.dev.js 添加了testApiHost，交接好后删掉该项
*/

<template lang="html">
  <div class="my-resume">
    <div class="banner">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="logo">
        <div class="avatar"><img :src="avatar" ></div>
        <p class="text">{{name}}</p>
        <p class="experience">{{subtitle}}</p>
      </div>
    </div>    
    <job-split></job-split>
    <div class="content-wrapper">
      <div class="title">
        <span>基本信息</span>
      </div>
      <div class="inline-content clearfix">
        <div class="label">期望职位</div>
        <div class="text">{{baseInfo.expectJob}}</div>
      </div>
      <div class="inline-content clearfix">
        <div class="label">工作年限</div>
        <div class="text">{{baseInfo.careerYear}}</div>
      </div>
      <div class="inline-content clearfix">
        <div class="label">出生年月</div>
        <div class="text">{{baseInfo.birthDate}}</div>
      </div>     
      <div class="inline-content clearfix">
        <div class="label">所在城市</div>
        <div class="text">{{baseInfo.presentAddress}}</div>
      </div>
      <div class="inline-content clearfix">
        <div class="label">联系电话</div>
        <div class="text">{{baseInfo.phone}}</div>
      </div>
      <div class="inline-content clearfix">
        <div class="label">联系邮箱</div>
        <div class="text">{{baseInfo.email}}</div>
      </div>
    </div>
    <job-split></job-split>
    <div class="content-wrapper">
      <div class="title">
        <span>期望工作</span>
      </div>
      <div class="inline-content clearfix">
        <div class="label">期望职位</div>
        <div class="text">{{expectJob.post}}</div>
      </div>
      <div class="inline-content clearfix">
        <div class="label">工作性质</div>
        <div class="text">{{expectJob.category}}</div>
      </div>
      <div class="inline-content clearfix">
        <div class="label">期望城市</div>
        <div class="text">{{expectJob.city}}</div>
      </div>
    </div>
    <job-split></job-split>
    <div class="content-wrapper">
      <div class="inline-content clearfix">
        <div class="title">
          <span>职业技能</span>
        </div>
        <div class="para-content">
          {{jobDetail}}
        </div>
      </div>
    </div>
    <job-split></job-split>
    <div class="content-wrapper">
      <div class="title">
        <span>工作经历</span>
      </div>
      <div class="para-content">
        {{workExperience}}
      </div>
    </div>
    <job-split></job-split>
    <div class="content-wrapper">
      <div class="title">
        <span>作品展示</span>
      </div>
      <div class="para-content">
        {{worksShow}}
      </div>
    </div>
    <job-split></job-split>
    <div class="content-wrapper">
      <div class="title">
        <span>擅长技术</span>
      </div>
      <div class="inline-content clearfix" v-for="skill in skills">
        <div class="label">{{skill.skill}}</div>
        <div class="text">
          <vw-slider :show-value="true" v-model="skill.degree"></vw-slider>
        </div>  
      </div>
    </div>
    <job-split></job-split>
    <div class="push-wrapper my-resume-items">
      <vw-button type="primary" @click="editResume">修改简历</vw-button>
    </div>
    <job-split></job-split>
    <div class="back" @click="back">
      <i class="ion-ios-arrow-back"></i>
    </div>
  </div>
</template>

<script>
  // import '../../vw-ui';
  import { jobSplit } from 'components';
  import { ajax, eventBus } from 'common';
  import searchNeeds from './search/search-needs.vue';
  import companyDetail from './search/company-detail.vue';
  export default {
    name: 'my-resume',
    data() {
      return {
        url: `${window.AppConf.testApiHost}/myresumeDetail.json`,
        type: 'default',
        plain: false,
        disabled: false,
        mini: false,
        selected: 'tab1',
        name: {},
        avatar: '',
        subtitle: {},
        baseInfo: {},
        expectJob: {},
        jobDetail: {},
        workExperience: {},
        worksShow: {},
        skills: {}
      };
    },
    components: {
      jobSplit,
      searchNeeds,
      companyDetail
    },
    methods: {
      _getData() {
        ajax.get(this.url)
          .then(data => {
            if (data.status === 1) {
              console.log(data.body);
              return data.body;
            } else {
              throw new Error();
            }
          })
          .then(data => {
            this.avatar = data.avatar;
            this.name = data.name;
            this.subtitle = data.subtitle;
            this.baseInfo = data.baseInfo;
            this.expectJob = data.expectJob;
            this.jobDetail = data.jobDetail;
            this.workExperience = data.workExperience;
            this.worksShow = data.worksShow;
            this.skills = data.skills;
          })
          .catch(() => {
            this.$toast.msg('请求的数据未得到', { duration: 3000 },
              () => {
                window.history.go(-1);
              });
          });
      },
      editResume() {
        console.log('editResume');
      },
      back() {
        window.history.go(-1);
      }
    },
    computed: {
    },
    created() {
      eventBus.emit('set-current-page', 'myresume');
      this._getData();
    }
  }
</script>

<style lang="scss" scoped>
$title-border-color : #29c18e;
$green : #1ac688;
$grey :  #e5e5e5;
$text : rgba(0,0,0,0.5);
  .my-resume{
    box-sizing: border-box;
    height: 94vh;
    overflow-y: scroll;
    position: relative;
    &-items{
      background: #fff;
    }
    .banner{
      position: relative;
      width: 100%;
      .top{
        background: $green;
        width: 100vw;
        height: 82px;
      }
      .bottom{
        background: $grey;
        width: 100vw;
        height: 50px;
      }
      .logo{
        position: absolute;
        top: 10;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 300px;
        height: 120px;
        background: white;
        border-radius: 10px;
        box-shadow: 1px 1px 4px 2px rgba(26,198,136,0.2);
        .avatar{
          margin: 10px auto;
          width: 55px;
          height: 55px;
          background: #1ac688;
          border-radius: 50% 50%;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50% 50%;
          }
        }
        .text, .experience{
          color: #636363;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
        }
        .text{
          margin-bottom: 8px;
          font-size: 15px;
        }
        .experience{
          color:#999;
        }
      }
    }
    .push-wrapper{
      padding: 12px 20px;
      button{
        background-color: #1ac688; 
      }
    }
    .back{
      position: absolute;
      left: 20px;
      top: 10px;
      .ion-ios-arrow-back{
        font-size: 40px;
        color: white;
      }
    }
    .content-wrapper{
      background-color: #fff;
      padding:12px 24px;
      .title{
        margin-bottom: 8px;
        font-size: 16px;
        span{
          display: inline-block; 
          padding-left:6px;
          border-left: 5px solid $title-border-color; 
          line-height: 15px;
          color: #777;
        }
      }      
      .inline-content{
        margin-bottom: 10px;
        width: 100%;       
        .label, .text{float: left;}
        .label{
          width: 80px;
          color: #777;
        }
        .text{
          width: calc(100% - 80px);
          color: #333;
        }
        .para-content{
          color: #333;
        }
      }      
    }
    .skilled-wrapper{
      .label{
        color: #333;
      }
    }
  }
</style>
