<template>
  <div class="quote">
      <table>
        <thead>
          <tr>
            <th class="textLeft">{{$t('feature.home.text_currency')}}</th>
            <th class="textCenter">{{$t('feature.home.text_price')}}</th>
            <th class="textRight">{{$t('feature.home.text_change')}}</th>
          </tr>
        </thead>
        <tbody v-if="rankInfo.length">
          <tr class=" animated fadeIn" v-for="(item,index) in rankInfo" :key="index">
            <td class="textLeft font14"><b>{{item.currency}}</b><span class="color-gray2">&nbsp;/&nbsp;USDT</span></td>
            <td class="textCenter font15"><b>$ {{toFixed_4 ( item.price / USDT_price ) }}</b></td>
            <td class="textRight font13">
              <van-tag type="danger" size="large" v-if="item.change>=0">{{item.change}}%</van-tag>
              <van-tag type="success" size="large" v-else>{{item.change}}%</van-tag>
            </td>
          </tr>

          <tr class=" animated fadeIn" v-if="userInfo">
            <td class="textLeft font14"><b>TB</b><span class="color-gray2">&nbsp;/&nbsp;USDT</span></td>
            <!-- <td class="textCenter font15"><b>$ {{toFixed_4 ( TB_price * USDT_price ) }}</b></td> -->
            <td class="textCenter font15"><b>$ {{toFixed_4 ( TB_price ) }}</b></td>
            <td class="textRight font13">
              <van-tag type="success" size="large">0.00%</van-tag>
            </td>
          </tr>

        </tbody>
      </table>
      <div class="space20"></div>

      <van-skeleton title :row="3" v-if="!rankInfo.length"/>


  </div>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {
    get_ranks
  } from '../../../data/wallet';

  export default {
    data() {
      return {
        activeType: "quotes",
        rankInfo:[],
        coinsList:['TB','OKB','BNB','HT'],
        USDT_price:0//usdt价格
      }
    },
    methods: {
      get_data(){//获取行情数据
        get_ranks({"unit":"usd"}).catch(v=>{
            // console.log(v);
            let res = v.filter(x=>this.coinsList.indexOf(x.currency)>=0);
            this.USDT_price = v.find(x=>x.currency==='USDT').price;
            this.rankInfo = res;
            // console.log(this.rankInfo)
        })
      },//get_data
    },
    computed: {
      ...mapState(['userInfo']),
      TB_price(){
        let coin = this.userInfo.balanceModels.filter(x=>x.coin.coinName=='TB')
        return coin[0].coin.coinPrice || 0;
      }
    },
    activated() {
      //console.log('//')
      this.get_data();
    } //mounted
  };
</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../../styles/walletVal";

  .quote{
    table{
      width: 100%;
      th{
        font-size: 12px;
        color: $them_color_gray;
        font-weight: normal;
        padding: 15px;
        padding-bottom: 0px;
      }
      td{
        padding: 20px 15px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }
    }
  }

</style>
