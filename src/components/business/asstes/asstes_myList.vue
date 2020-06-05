<template>

  <div class="mylist">

    <p class="asset-list-title">{{$t('feature.assets.text_list')}}</p>

    <div class="asset-list">
      <ul>
        <li v-for="(item, index) in balanceList" :key="index">
          <div class="asset-list-top">
            <img :src="item.coin.coinName === 'USDT' ? require('./../../../assets/wallet/asstes/USDT@2x.png') : item.coin.coinName === 'TB' ? require('./../../../assets/wallet/asstes/TB-币logo@2x.png') : require('./../../../assets/wallet/asstes/ＴＢＧ@2x.png')" alt="">
            <span>{{item.coin.coinName}}</span>
          </div>
          <div class="list-name">
            <p>{{$t('feature.assets.text_available')}}</p>
            <p>{{$t('feature.assets.text_freeze')}}</p>
          </div>
          <div class="asset-sum">
            <p>{{financial(item.amount)}}</p>
            <p>00.000</p>
          </div>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    props: ['user'],
    data() {
      return {
        // 资产列表
        balanceList: null
      }
    },
    created() {
      this.getBalanceAll()
    },
    methods: {
      // 获取资产列表信息
      getBalanceAll() {
        let res = this.userInfo.balanceModels.map(v=>{
            v.text = `${v.coin.coinName}(${this.$t('feature.transfer.text_balance')}${v.amount})`
            return v;
        }).filter(v=>v.coin.transfer=='Y');
        this.balanceList = res
        console.log(this.balanceList)
      },
      // 保留小数点
      financial(x) {
        return Number.parseFloat(x).toFixed(3)
      }
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted() {

    }
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../../styles/walletVal";
  .mylist{
    .asset-list-title {
      width: 100%;
      height: 54px;
      background: #fff;
      line-height: 54px;
      padding-left: 15px;
      font-size: 16px;
      font-weight: bold;
      color: rgba(53,53,53,1);
    }
    .asset-list {
      width: 100%;
      background: #fff;
      margin-top: 6px;
      padding: 0 15px 8px;
      > ul {
          li {
          padding: 10px 0;
          border-bottom: 1px solid #EBEBEB;
        }
      }
      .asset-list-top {
        width: 100%;
        height: 24px;
        img {
          display: inline-block;
          height: 24px;
          width: 24px;
          vertical-align: bottom;
        }
        span {
          font-size: 14px;
          font-weight: bold;
          color: rgba(53,53,53,1);
        }
      }
      .list-name {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;
        p {
          flex: 1;
          font-size: 12px;
          font-weight: 500;
          color: rgba(200,205,211,1);
        }
        p:nth-child(2),
        p:nth-child(3)  {
          text-align: left;
        }
      }
      .asset-sum {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;
        p {
          flex: 1;
          font-size: 14px;
          font-weight: bold;
          color: rgba(53,53,53,1);
        }
        p:nth-child(2),
        p:nth-child(3)  {
          text-align: left;
        }
      }
    }
  }
</style>
