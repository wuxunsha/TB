<template>
  <div class="headerBg">

    <div class="">

      <div class="dataGroup flex align">
        <span>{{$t('feature.assets.text_balance')}}</span>&nbsp;&nbsp;<b>≈&nbsp;${{sumAmount}}</b>
      </div>
      <!-- dataGroup -->

      <div class="btnBox flex align">
        <div class="headerBtn"  @click="gopage('/transfer')">{{$t('feature.transfer.text_title')}}</div>
        <div class="headerBtn" @click="gopage('/withdraw')">{{$t('feature.assets.text_withdraw')}}</div>
        <div class="headerBtn"  @click="gopage('/recharge')">{{$t('feature.assets.text_recharge')}}</div>
      </div>

    </div>
    <!-- flex -->

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
    computed: {
      ...mapState(['userInfo']),
      sumAmount(){//设置总额
         let num = 0;
          this.userInfo.balanceModels.forEach(v=>{
            num += parseFloat(v.coin.coinPrice) * parseFloat(v.amount);
          })
          return num;
      }//sumAmount
    },
    methods: {
      
    },
    mounted() {

    }
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../../styles/walletVal";
  .btnBox{
    margin-top: 20px;
    .headerBtn{
      flex: 1;
      text-align: center;
      margin: 0 5px;
    }
  }
</style>
