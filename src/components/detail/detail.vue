<template>
  <div class="detail" v-show="showDetail">
    <div class="header-wrap">
      <div class="back" @click="goBack">
      </div>
      <div class="title-msg">武汉公安移动警务应用平台</div>
    </div>
    <div class="message-title">消息内容</div>
    <div class="detail-wrap" ref="detailWrap">
      <div>
        <p class="message">{{caseData.message}}</p>
        <table>
          <tr>
            <td width="30%">警情编号</td>
            <td width="70%">J4201146200002017070026</td>
          </tr>
          <tr>
            <td>警情名称</td>
            <td>{{caseData.caseName}}</td>
          </tr>
          <tr>
            <td>主办单位</td>
            <td>{{caseData.deptName}}</td>
          </tr>
          <tr>
            <td>主办人</td>
            <td>{{caseData.hostName}}</td>
          </tr>
          <tr>
            <td>到期时间</td>
            <td>{{caseData.endTime | formatDate}}</td>
          </tr>
          <tr>
            <td>受案时间</td>
            <td>{{caseData.createTime | formatDate}}</td>
          </tr>
        </table>
        <div class="case-title">简要案情</div>
        <div class="case-detail">{{caseData.caseDetail}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import { formatDate } from '../../assets/js/date'
  export default {
    props: {
      caseData: {},
      showDetail: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showDetail () {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    methods: {
      goBack () {
        this.$emit('show-detail', this.showDetail)
      },
      _initScroll () {
        this.caseScroll = new BScroll(this.$refs.detailWrap, {
          probeType: 1
        })
      }
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .detail {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #fff;
    .header-wrap {
      width: 100%;
      position: relative;
      background: #000;
      height: 1.3rem;
      .back {
        width: .3rem;
        height: .5rem;
        position: absolute;
        top: 50%;
        margin-top: -.25rem;
        left: .55rem;
        background: url(./back.png);
        background-size: 100%;
        z-index: 10;
      }
      .title-msg {
        width: 100%;
        position: absolute;
        height: 1.3rem;
        line-height: 1.3rem;
        color: #fff;
        font-size: .48rem;
        text-align: center;
        box-sizing: border-box;
      }
    }
    .message-title {
      width: 100%;
      height: 1.26rem;
      background: linear-gradient(#2ca2f7, #1a92eb);
      color: #fff;
      text-align: center;
      font-size: .6rem;
      line-height: 1.26rem;
      position: relative;
    }
    .detail-wrap {
      position: fixed;
      top: 2.56rem;
      bottom: 0;
      overflow: hidden;
      background: #fff;
      .message {
        padding: .5rem;
        color: #222c3c;
        font-size: .45rem;
        line-height: 1.5;
        position: relative;
      }
      table {
        width: 100%;
        margin-top: .3rem;
        position: relative;
        tr {
          td {
            line-height: 1.12rem;
            border-top: 1px solid #f3f3f4;
            color: #222c3c;
            padding-left: .5rem;
            font-size: 14px;
            background: #fff;
            box-sizing: border-box;
            &:first-child {
              background: #fcfcfc;
              color: #9299a7;
              border-right: 1px solid #f3f3f4;
            }
          }
          &:last-child {
            border-bottom: 1px solid #f3f3f4;
          }
        }
      }
      .case-title {
        height: 1.24rem;
        line-height: 1.24rem;
        color: #999;
        font-size: .5rem;
        text-align: center;
        border-bottom: 1px solid #f3f3f4;
      }
      .case-detail {
        padding: .5rem;
        font-size: .5rem;
        line-height: 1.5;
        color: #222c3c;
      }
    }
  }
</style>
