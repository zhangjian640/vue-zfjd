<template>
  <div class="index">
    <div class="title-wrap">
      <div class="back" @click.stop="goBack"></div>
      <div class="title">{{title}}</div>
    </div>
    <div class="user-wrap">
      <div class="avatar">
        <img src="./index_touxiang.png" alt="">
      </div>
      <dl class="user">
        <dt>{{message.userName}}</dt>
        <dd>{{message.deptName}}</dd>
      </dl>
    </div>
    <div class="content" ref="caseWrapper">
      <ul class="cases">
        <li v-for="item in lists" @click.stop="selectItem(item.caseId)"  class="item">
          <div class="case-state">
            <div class="state" :class="{'active': item.rateType === 2}"></div>
          </div>
          <div class="case-name">
            {{item.message}}
          </div>
        </li>
      </ul>
    </div>
    <ul class="bts">
      <li class="warning" @click="select(1)" :class="{'active':selectType === 1}">
        <div class="block"></div>
        <div class="btn">{{desc.warning}}</div>
      </li>
      <li class="problem" @click.stop="select(2)" :class="{'active':selectType === 2}">
        <div class="block"></div>
        <div class="btn">{{desc.problem}}</div>
      </li>
    </ul>
    <loading v-show="!lists.length"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { getMessage } from 'api/case'
  import Loading from '@/common/loading/loading'
  const ERR_OK = 0
  export default {
    data () {
      return {
        message: {},
        lists: [],
        desc: {
          warning: '预警信息',
          problem: '执法问题'
        },
        caseData: {}
      }
    },
    created () {
      this._getMessage(this.$store.state.type)
    },
    computed: {
      title () {
        if (this.$store.state.type === 1) {
          return this.desc.warning
        } else if (this.$store.state.type === 2) {
          return this.desc.problem
        }
      },
      selectType () {
        return this.$store.state.type
      }
    },
    methods: {
      selectItem (id) {
        for (var x in this.lists) {
          if (id === this.lists[x].caseId) {
            this.caseData = this.lists[x]
          }
        }
        // 跳转至详情页
        this.$router.push({
          name: 'Detail'
        })
        // 改变案件信息id
        this.$store.commit('changeCaseData', this.caseData)
      },
      goBack () {
        this.$router.back()
      },
      select (type) {
        this.lists = []
        this.$store.commit('selectType', type)
        this._getMessage(type)
        this.$nextTick(() => {
          this.refresh()
        })
      },
      // 获取数据
      _getMessage (type) {
        getMessage().then((res) => {
          if (res.errno === ERR_OK) {
            this.message = res.data
            this._getMessageList(type)
            this.$nextTick(() => {
              this._initScroll()
            })
          }
        })
      },
      // 提取数据的数组
      _getMessageList (type) {
        for (var x in this.message.messageList) {
          if (type === this.message.messageList[x].rateType) {
            this.lists.push(this.message.messageList[x])
            this.lists.sort(this._timeSort('endTime'))
          }
        }
      },
      _initScroll () {
        this.caseScroll = new BScroll(this.$refs.caseWrapper, {
          probeType: 1,
          click: true
        })
      },
      refresh () {
        this.scroll && this.caseScroll.refresh()
      },
      // 时间排序
      _timeSort (name) {
        return function (o, p) {
          let a, b
          if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name]
            b = p[name]
            if (a === b) {
              return 0
            }
            if (typeof a === typeof b) {
              return a < b ? 1 : -1
            }
            return typeof a < typeof b ? 1 : -1
          }
        }
      }
    },
    watch: {
      lists () {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    },
    components: {
      Loading
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .index {
    .title-wrap {
      background: #000;
      height: 1.3rem;
      position: relative;
      .back {
        width: .3rem;
        height: .5rem;
        top: 50%;
        margin-top: -.25rem;
        position: absolute;
        left: .55rem;
        z-index: 10;
        background: url(back.png);
        background-size: 100%;
      }
      .title {
        width: 100%;
        position: absolute;
        height: 1.3rem;
        line-height: 1.3rem;
        color: #fff;
        font-size: .5rem;
        text-align: center;
        box-sizing: border-box;
      }
    }
    .user-wrap {
      height: 3.13rem;
      background: linear-gradient(#2ca2f7, #1a92eb);
      position: relative;
      .avatar {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        position: absolute;
        left: .48rem;
        top: 50%;
        margin-top: -1.15rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user {
        position: absolute;
        left: 3.70rem;
        height: 3.13rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .5rem;
        color: #fff;
        dt {
          display: block;
          padding: .2rem 0;
        }
        dd {
          display: block;
          padding: .2rem 0;
        }
      }
    }
    .content{
      position: absolute;
      top: 4.4rem;
      bottom: 1.77rem;
      width: 100%;
      overflow: hidden;
      z-index: -1;
      .cases {
        .item {
          display: flex;
          height: 1.65rem;
          margin: 0.3rem 0;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);
          &:last-child{
            margin-bottom: 0;
            border-bottom:none;
            padding-bottom: .2rem;
          }
          .case-state {
            width: 1.9rem;
            flex: 0 0 1.9rem;
            position: relative;
            .state {
              position: absolute;
              width: .83rem;
              height: 1.15rem;
              left: 50%;
              margin-left: -.415rem;
              top: 50%;
              margin-top: -0.575rem;
              background: url(./normal.png) no-repeat;
              background-size: 100%;
              &.active {
                background: url(./warning.png) no-repeat;
                background-size: 100%;
              }
            }
          }
          .case-name {
            font-size: .45rem;
            padding-right: .2rem;
            color: #9299a7;
            line-height: 1.5;
            height: 1.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    .bts {
      width: 100%;
      height: 1.77rem;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid #cacaca;
      background: #fff;
      li {
        flex: 1;
        height: 100%;
        color: #808080;
        text-align: center;
        .block {
          width: .63rem;
          height: .72rem;
          margin: .2rem auto 0;

        }
        .btn {
          font-weight: 200;
          padding-top: .2rem;
          font-size: .3rem;
        }
        &.warning {
          border-right: 1px solid #c2c2c2;
          &.active {
            .btn {
              color: #1d8add;
            }
            .block {
              background: url(./liebiao_icon_yujing_hover.png) no-repeat;
              background-size: 100%;
            }
          }
          .block {
            background: url(./liebiao_icon_yujing.png) no-repeat;
            background-size: 100%;
          }
        }
        &.problem {
          &.active {
            .btn {
              color: #1d8add;
            }
            .block {
              background: url(./liebiao_icon_anqing_hover.png) no-repeat;
              background-size: 100%;
            }
          }
          .block {
            background: url(./liebiao_icon_anqing.png) no-repeat;
            background-size: 100%;
          }
        }

      }
    }
  }
</style>
