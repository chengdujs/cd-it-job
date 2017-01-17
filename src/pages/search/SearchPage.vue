<template>
  <div class="page-search">
    <div class="job-search">
      <div class="job-search__label"><i class="icon ion-ios-location"></i><span class="city">成都</span></div>
      <div class="job-search__form">
        <input class="input" type="search" placeholder="搜索职位/公司">
        <span class="icon ion-ios-search-strong"></span>
      </div>
      <div class="job-search__cancel">取消</div>
    </div>
    <div class="job-hot">
      
    </div>
  </div>
</template>
<style lang="scss" type="text/scss">
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
</style>
