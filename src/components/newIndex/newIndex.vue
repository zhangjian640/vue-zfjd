<template>
  <div class="new-index">
    <div class="title-wrap">
      <div class="menu"></div>
      <div class="title">{{title}}</div>
      <div class="camera"></div>
    </div>
    <div class="ad">
      <slider :height="height">
        <slider-item>
          <img src="./ad1.png">
        </slider-item>
        <slider-item>
          <img src="./ad2.png">
        </slider-item>
        <slider-item>
          <img src="./ad3.png">
        </slider-item>
      </slider>
    </div>
    <div class="user-wrap">
      <div class="avatar">
        <img src="./index_img.png" alt="">
      </div>
      <ul class="user">
        <li>{{message.userName}}</li>
        <li>{{message.deptName}}</li>
      </ul>
    </div>
    <ul class="icons">
      <li class="item" @click="goIndex(1)">
        <div class="icon icon-1"></div>
        <span class="text">预警信息</span>
      </li>
      <li class="item" @click="goIndex(2)">
        <div class="icon icon-2"></div>
        <span class="text">执法问题</span>
      </li>
      <li class="item" @click="goIndex(3)">
        <div class="icon icon-3"></div>
        <span class="text">办案助手</span>
      </li>
      <li class="item" @click="goIndex(3)">
        <div class="icon icon-4"></div>
        <span class="text">执法能力提升</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  // npm 安装slider插件 vue-easy-slider

  import { Slider, SliderItem } from 'vue-easy-slider'
  const ERR_OK = 0
  import { getMessage } from 'api/case'
  export default {
    data () {
      return {
        title: '执法监督管理移动平台',
        message: {},
        height: '310px'
      }
    },
    created () {
      this._getMessage()
    },
    methods: {
      goIndex (n) {
        this.$router.push({
          name: 'List'
        })
        this.$store.commit('selectType', n)
      },
      _getMessage () {
        getMessage().then((res) => {
          if (res.errno === ERR_OK) {
            this.message = res.data
          }
        })
      }
    },
    components: {
      Slider,
      SliderItem
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .new-index{
    width: 100vw;
    height: 100vh;
    background:url(./index_bg.jpg) no-repeat;
    background-size: cover;
    .title-wrap {
      background: linear-gradient(#2ca2f7, #2ba3f7);;
      height: 1.51rem;
      position: relative;
      .menu {
        width: .57rem;
        height: .34rem;
        top: 50%;
        margin-top: -.17rem;
        position: absolute;
        left: .44rem;
        z-index: 10;
        background: url(icon_menu.png) no-repeat;
        background-size: 100%;
      }
      .title {
        width: 100%;
        position: absolute;
        height: 1.51rem;
        line-height: 1.51rem;
        color: #fff;
        font-size: .5rem;
        text-align: center;
        box-sizing: border-box;
      }
      .camera{
        width: 1.74rem;
        height: 1.74rem;
        position: absolute;
        top: .4rem;
        right: .2rem;
        background: url(icon_saoyisao.png) no-repeat;
        background-size: 100%;
        z-index: 100;
      }
    }
    .ad img{
      height: 100%;
    }
    .user-wrap {
      width: 100%;
      height: 5.02rem;
      .avatar {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        margin: 0 auto;
        padding-top: .5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user {
        width: 100%;
        height: 2.02rem;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .5rem;
        color: #fff;
        li {
          text-align: center;
          padding: .1rem 0;
          font-weight: 200;
        }
      }
    }
    .icons{
      width: 100%;
      height: 3.15rem;
      position: absolute;
      bottom: 0;
      display: flex;
      border-top: 1px solid #314455;
      li{
        flex: 1;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #4d657f;
        .icon{
          width: 1.75rem;
          height: 1.75rem;
          margin-top: .3rem;
        }
        .icon-1{
          background: url(./icon1.png) no-repeat;
          background-size: 100%;
        }
        .icon-2{
          background: url(./icon2.png) no-repeat;
          background-size: 100%;
        }
        .icon-3{
          background: url(./icon3.png) no-repeat;
          background-size: 100%;
        }
        .icon-4{
          background: url(./icon4.png) no-repeat;
          background-size: 100%;
        }
        .text{
          margin-top: .2rem;
          font-size: .4rem;
        }
        &:hover,
        &:active,
        &.active{
          .icon-1{
            background: url(./icon1_hover.png) no-repeat;
            background-size: 100%;
          }
        }
        &:hover,
        &:active,
        &.active{
          .icon-2{
            background: url(./icon2_hover.png) no-repeat;
            background-size: 100%;
          }
        }
        &:hover,
        &:active,
        &.active{
          .icon-3{
            background: url(./icon3_hover.png) no-repeat;
            background-size: 100%;
          }
        }
        &:hover,
        &:active,
        &.active{
          .icon-4{
            background: url(./icon4_hover.png) no-repeat;
            background-size: 100%;
          }
        }
        &:hover,
        &:active,
        &.active{
          .text{
            color: #2da1f7;
          }
        }
      }
      li + li {
        border-left: 1px solid #314455;
      }

    }
  }
</style>
