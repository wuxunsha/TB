<template>
  <div id="funds" class="padding20">

    <walletNav :title="$t('wallet.recharge.nav_title')" left-arrow @clickLeft="goback()" />
    <!-- <div class="rightText" @click="gopage('/wallet/book?type=recharge')"><van-icon name="todo-list-o" size="20px"/>{{$t('wallet.recharge.text_list')}}</div>
    </walletNav> -->

  
    <div class="item_box">

      <chooseCoins  v-on:chooseCoin="chooseCoin" :defaultId="$route.query.coinId" type="recharge"/>

      <div class="code_box">

        <div class="qr">
          <div class="qr_box">
            <div class="qrcode" ref="qrCodeUrl" id="qrCodeUrl">
              <img :src="addressInfo.qrImg" alt="">
            </div>
          </div>
        </div>
        <!-- qr -->


        <div>
          <div class="addr textCenter font-bold font12">{{addressInfo.address}}</div>
          <!-- <div class="addr textCenter font-bold font12" v-if="currRechargeInfo">{{currRechargeInfo.rechargeAddress.address}}</div> -->
          <!-- {{curr_icon.address}} -->
          <!-- <div class="small textCenter font11 them_color_gray" v-if="currRechargeInfo">{{currRechargeInfo.coin.coinName}}{{$t('wallet.recharge.text_addr')}}</div> -->
          <div class="textCenter padding10">
            <van-button plain type="default" class="copycode" size="small" :data-clipboard-text="copyText" @click="copy">{{$t('wallet.recharge.text_copy_addr')}}</van-button>
          </div>

        </div>
        <!-- if -->

        
      </div>
      <!-- code_box -->

    </div>
    <!-- item_box -->

    <div class="space20"></div>

    <div v-if="currRechargeInfo">
      <p class="info them_color_gray font12" v-html="$t('feature.recharge.text_p',{coinName:currRechargeInfo.coin.coinName,minRecharge:currRechargeInfo.coin.minRecharge})">
        <!-- <span>*请勿向上述地址充值非{{currRechargeInfo.coin.coinName}}资产，网络节点确认后到账</span>
        <span>*最小充值数量{{currRechargeInfo.coin.minRecharge}}，小于最小数量将不会上账且无法退回</span>
        <span>*请务必确认电脑及浏览器安全，防止信息被篡改或泄露</span> -->
        </p>
    </div>

     <div class="space20"></div>

  </div>
  <!-- index -->
</template>

<script>
  import {
    checkTbAddress
  } from '../../data/wallet';
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import QRCode from 'qrcodejs2'
  import Clipboard from 'clipboard';
  import chooseCoins from '../../components/wallet/chooseCoins'

  export default {
    data() {
      return {
        currRechargeInfo: null,//当前币种信息
        copyText:null,
        addressInfo:{}
      }
    },
    components:{
      chooseCoins
    },
    methods: {
      chooseCoin(item){//当前币种选择
        // console.log(item)
        // this.qrcode(item.rechargeAddress.address);
        this.currRechargeInfo = item;
        // this.copyText = item.rechargeAddress.address;
        
      },//chooseCoin
      async qrcode(address) { //生成二维码
        this.$refs.qrCodeUrl.innerHTML="";//先移除
        var qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: address,
          colorDark : "#2b3b4b",
          width: 200,
          height: 200,
          correctLevel: QRCode.CorrectLevel.H
        })
      }, //qrcode
      copy() { //复制
        var clipboard = new Clipboard('.copycode')
        clipboard.on('success', e => {
          Toast(this.$t('wallet.common.toast_copy_ok'))
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          Toast(this.$t('wallet.common.toast_copy_fail'))
          clipboard.destroy()
        })
      }//copy
    },
    computed: {
      ...mapState(['userInfo'])
    },
    created () {
      checkTbAddress({
        userId:this.userInfo.user.id
      }).then(v=>{
        this.addressInfo = v.data
        this.copyText = this.addressInfo.address;
      })
    },
    mounted() {
      /*if(this.$route.query.coinName=='GSHT'){
        Dialog.confirm({
          title: this.$t('wallet.common.Dialog'),
          message: this.$t('wallet.common.text_none_coin'),
          showCancelButton:false,
          closeOnClickOverlay:false
        }).then(() => {
          this.goback();
        })
        return;
      }
      setTimeout(() => {
        this.qrcode();
      }, 50);*/
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
 @import "../../styles/walletVal";
#funds {
    .item_box {
        .code_box {
          background: $them_color_bgGray;
          padding: 20px;
          border-radius: 2px;
          .qrcode{
            width: 180px;
            margin: 10px auto;
            background: white;
            padding: 10px;
            height: 180px;
            overflow: hidden;
          }
          .copy {
              display: inline-block;
              margin: 20px auto;
              padding: 5px 10px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 2px;
          }
          p {
              font-size: 12px;
              line-height: 1.8em;
              text-align: center;
          }
        }
    }
}
.info{
  >>> span{
    display: block;
    margin-bottom:5px;
  }
}
.addr{
  word-break: break-all;
  line-height: 1.6em;
}
</style>
