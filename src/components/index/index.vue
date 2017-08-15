<template>
  <div class="index">
    <div class="user-wrap">
      <div class="avatar">
        <img src="./index_img.png" alt="">
      </div>
      <dl class="user">
        <dt>{{message.userName}}</dt>
        <dd>{{message.deptName}}</dd>
      </dl>
    </div>
    <ul class="bts">
      <li @click="goIndex(1)">
        <img src="./index_icon_yujing.png" alt="">
        <div class="btn">预警信息</div>
      </li>
      <li @click="goIndex(2)">
        <img src="./index_icon_wenti.png" alt="">
        <div class="btn">执法问题</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0
  import { getMessage } from 'api/case'
  export default {
    data () {
      return {
        message: {}
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
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .index {
    width: 100vw;
    height: 100vh;
    background: url(index_bg.jpg) no-repeat;
    background-size: 100%;
  }
  .user-wrap {
    width: 100%;
    height: 3.13rem;
    top: 10rem;
    position: absolute;
    .avatar {
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
      position: absolute;
      left: 1rem;
      top: 50%;
      margin-top: -1.15rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .user {
      position: absolute;
      left: 4rem;
      height: 3.13rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: .5rem;

      color: #fff;
      dt {
        display: block;
        padding: .2rem 0;
        font-weight: 200;
      }
      dd {
        display: block;
        padding: .2rem 0;
        font-weight: 200;
      }
    }
  }
  .bts{
    width: 100%;
    height: 5rem;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
      flex: 1;
      margin: 1rem 0;
      text-align: center;
      img{
        width: 2rem;
        height: 2rem;
      }
      .btn{
        font-weight: 200;
        padding-top: .2rem;
        font-size: 20px;
        color: #fff;
      }
    }
  }
</style>
