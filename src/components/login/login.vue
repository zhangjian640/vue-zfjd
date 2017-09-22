<template>
  <div class="login">
    <div class="logo"><img src="./login_logo.png"></div>
    <div class="title">武汉市公安局执法监督平台移动警务</div>
    <div class="input-wrap user-wrap">
      <img src="./login_user.png">
      <input type="text" placeholder="警号" autocomplete="off">
    </div>
    <div class="input-wrap password-wrap">
      <img src="./login_pass.png" alt="">
      <input type="password" placeholder="密码" autocomplete="off">
    </div>
    <input type="button" class="submit" value="登录"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
.login{
  height: 100vh;
  background: url(./login_bg.jpg) no-repeat;
  background-size: cover;
  .logo{
    padding-top: 3.45rem;
    text-align: center;
    img{
      width: 3.08rem;
    }
  }
  .title{
    padding-top: .66rem;
    color: #fff;
    text-align: center;
    font-size: .58rem;
  }
  .input-wrap {
    width: 7.74rem;
    height: 1.4rem;
    border:1px solid #022845;
    margin: 0 auto;
    position: relative;
    &.user-wrap{
      margin-top: .6rem;
    }
    &.password-wrap{
      margin-top: .46rem;
      margin-bottom: .8rem;
    }
    img{
     width: .6rem;
      margin-left: .5rem;
      margin-top: .34rem;
    }
    input{
      width: 6.34rem;
      position: absolute;
      left: 1.4rem;
      height: 1.4rem;
      line-height: 1.4rem;
      font-size: .4rem;
      background: transparent;
      color: #084471;
      outline: none;
    }
  }
  .submit{
    display: block;
    margin: 0 auto;
    width: 5.12rem;
    height: 1.06rem;
    line-height: 1.06rem;
    background: url(./login_btn.png) no-repeat;
    background-size: 100%;
    font-size: .4rem;
    outline: none;
    color: #fff;
    &:active,&:hover{
      background: url(./login_btn_hover.png) no-repeat;
      background-size: 100%;
    }
  }
}
</style>
