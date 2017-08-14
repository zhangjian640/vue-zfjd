<template>
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
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      lists: {
        type: Array,
        default () {
          return []
        }
      },
      desc: {
        default () {
          return {
            warning: '预警信息',
            problem: '执法问题'
          }
        }
      },
      selectType: {}
    },
    methods: {
      select (type) {
        this.$emit('select-type', type)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
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
</style>
