<template>

  <div class="mylist">

    <p class="asset-list-title">{{$t('feature.assets.text_list')}}</p>

    <div class="asset-list">
      <ul>
        <li v-for="(item, index) in balanceList" :key="index" v-if="item.coin.coinName === 'USDT' || item.coin.coinName === 'CBK' || item.coin.coinName === 'CBG'">
          <div class="asset-list-top">
            <img :src="item.coin.coinName === 'USDT' ? require('./../../../assets/wallet/asstes/USDT@2x.png') : item.coin.coinName === 'CBK' ? require('./../../../assets/wallet/asstes/CBK透明@2x.png') : require('./../../../assets/wallet/asstes/cbg@2x.png')" alt="">
            <span>{{item.coin.coinName}}</span>
          </div>
          <div class="list-name">
            <p>{{$t('feature.assets.text_available')}}</p>
            <p>{{$t('feature.assets.text_freeze')}}</p>
          </div>
          <div class="asset-sum">
            <p>{{item.amount}}</p>
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
    mapState,
    setUser
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
      // console.log(this.$store.state.user)
    }
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../../styles/walletVal";
  .mylist{
    .asset-list-title {
      width: 100%;
      height: 54px;
      line-height: 54px;
      padding-left: 15px;
      font-size: 16px;
      font-weight: bold;
      color: rgba(53,53,53,1);
      border-bottom: 8px solid #f3f4f6;
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
        p:nth-child(2)  {
          text-align: right;
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
        p:nth-child(2)  {
          text-align: right;
        }
      }
    }
  }
</style>
