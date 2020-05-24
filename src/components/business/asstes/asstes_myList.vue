<template>

  <div class="mylist">

    <p class="asset-list-title">资产列表</p>

    <div class="asset-list">
      <ul>
        <li>
          <div class="asset-list-top">
            <img src="../../../assets/wallet/asstes/USDT@2x.png" alt="">
            <span>USDT</span>
          </div>
          <div class="list-name">
            <p>可用</p>
            <p>冻结</p>
            <p>众筹</p>
          </div>
          <div class="asset-sum">
            <p>20.000</p>
            <p>00.000</p>
            <p>20.000</p>
          </div>
        </li>
        <li>
          <div class="asset-list-top">
            <img src="../../../assets/wallet/asstes/TB-币logo@2x.png" alt="">
            <span>USDT</span>
          </div>
          <div class="list-name">
            <p>可用</p>
            <p>冻结</p>
            <p>众筹</p>
          </div>
          <div class="asset-sum">
            <p>20.000</p>
            <p>00.000</p>
            <p>20.000</p>
          </div>
        </li>
        <li>
          <div class="asset-list-top">
            <img src="../../../assets/wallet/asstes/ＴＢＧ@2x.png" alt="">
            <span>USDT</span>
          </div>
          <div class="list-name">
            <p>可用</p>
            <p>冻结</p>
            <p>众筹</p>
          </div>
          <div class="asset-sum">
            <p>20.000</p>
            <p>00.000</p>
            <p>20.000</p>
          </div>
        </li>
      </ul>
    </div>
      <!-- <div class="listTitle">{{$t('feature.assets.text_list')}}</div>

       <div class="list_type1 flex align between animated fadeIn" v-for="(item,index) in userInfo.balanceModels" :key="index" @click="gopage(`/assetsDetail_v2?id=${item.coin.id}`)">

         <div class="item flex align">
           <i class="coin_icon">
             <img :src="setImgUrl(item.coin.coinImg)" alt="" srcset="">
           </i>
           <span>{{item.coin.coinName}}</span>
         </div>

         <div class="amout">{{item.amount}}</div>

       </div> -->

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

      }
    },
    created() {
      console.log(this.userInfo)
    },
    methods: {
      
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
      // min-height: 427px;
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
          height: 100%;
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
