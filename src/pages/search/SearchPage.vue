<template>
  <div class="page-search">
    <div class="job-search">
      <div class="job-search__label"><i class="icon ion-ios-location"></i><span class="city">成都</span></div>
      <div class="job-search__form">
        <input class="input" type="search" placeholder="请输入职位/地址/关键字">
        <span class="icon ion-ios-search-strong"></span>
      </div>
      <div class="job-search__cancel">取消</div>
    </div>
    <div class="job-tags">
      <div class="job-tags__name">最近搜索 <i class="icon ion-trash-a"></i></div>
      <div class="job-tags__list">
        <span class="tag">web前端</span><span class="tag">php</span><span class="tag">前端</span>
      </div>
      <div class="job-tags__name">热门搜索</div>
      <div class="job-tags__list">
        <span class="tag">用户运营</span><span class="tag">PHP</span><span class="tag">web前端</span><span class="tag">java</span><span class="tag">android</span><span class="tag">php</span><span class="tag">前端</span><span class="tag">ios</span>
      </div>
    </div>
    <div class="job-city" v-show="false">
      <div class="job-city-hd">选择城市 <i class="icon ion-close-round"></i></div>
      <div class="job-city-bd">
        <div class="job-tags">
          <div class="job-tags__name">期望工作城市</div>
          <div class="job-tags__list city">
            <span class="tag">成都</span>
            <span class="change">更改 <i class="ion-chevron-right"></i></span>
          </div>
          <div class="job-tags__name"><i class="ion-android-star"></i>热门城市</div>
          <div class="job-tags__list city">
            <span class="tag">全国</span><span class="tag">北京</span><span class="tag">上海</span>
            <span class="tag">广州</span><span class="tag">深证</span><span class="tag">杭州</span>
            <span class="tag">成都</span><span class="tag">广州</span>
          </div>
          <div class="job-tags__name">全国城市</div>
          <div class="job-tags__list city">
            <span class="tag">鞍山</span><span class="tag">北京</span><span class="tag">成都</span>
            <span class="tag">东莞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" type="text/scss">
  .page-search {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 50px;
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .job-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 15px;
    height: 44px;
    line-height: 1;
    background: #f4f4f4;
    box-sizing: border-box;
    font-size: 12px;
    border-bottom: 1px solid #ddd;

    &__label, &__form, &__cancel {
      height: 30px;
      line-height: 30px;
      color: #999;
    }

    &__label {
      min-width: 60px;
      max-width: 80px;
      margin-left: -15px;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .icon {
        font-size: 15px;
        vertical-align: middle;
      }
      .city {
        padding: 0 5px;
        vertical-align: middle;
      }
    }

    &__form {
      position: relative;
      flex: 1;
      padding-right: 30px;
      border: 1px solid #ddd;
      border-radius: 30px;
      background: #FFF;
      .input {
        display: block;
        height: 100%;
        width: 100%;
        padding: 0 10px;
        border: none;
        outline: none;
        background: none;
        font: inherit;
        color: #999;
        &::-webkit-input-placeholder {
          font: inherit;
          font-size: 11px;
        }
      }
      .icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
      }
    }

    &__cancel {
      padding: 0 20px;
      margin-right: -15px;
    }
  }

  .job-tags {
    background: #FFF;
    box-sizing: border-box;

    &__name {
      padding: 0 15px;
      line-height: 26px;
      font-size: 12px;
      font-weight: 600;
      color: #666;
      background: #f4f4f4;
      .icon {
        float: right;
        margin-right: -15px;
        padding: 0 15px;
        height: 26px;
        text-align: center;
        font-size: 16px;
      }
    }

    &__list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 15px;

      .tag {
        height: 24px;
        line-height: 24px;
        margin: 2%;
        padding: 0 4%;
        text-align: center;
        font-size: 12px;
        border-radius: 24px;
        border: 1px solid #ddd;
        color: #00b38a;
        font-weight: 200;
        box-sizing: border-box;
        white-space: nowrap;
        &:active {
          background: #f6f6f6;
        }
      }

      .change {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translate3d(0,-50%,0);
        font-size: 14px;
        color: #00b38a;
      }

      &.city .tag {
        width: 28%;
        font-size: 13px;
        color: #999;
      }
    }

  }

  .job-city {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 501;
    background: #FFF;

    &-hd {
      position: relative;
      height: 44px;
      line-height: 44px;
      text-align: center;
      background: #f4f4f4;
      font-size: 16px;
      font-weight: 200;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      .icon {
        position: absolute;
        right: 0;
        height: 44px;
        padding: 0 15px;
        font-size: 18px;
      }
    }

    &-bd {
      position: absolute;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
</style>
