<template>
  <div id="funds">

     <van-nav-bar title="提币" left-arrow fixed @click-left="goback()"/>
    
     <!-- <walletNav :title="$t('wallet.withdraw.nav_title')" left-arrow @clickLeft="goback()"/> -->
      <!-- <div class="rightText" @click="gopage(`/wallet/book?type=withdraw`)"><van-icon name="todo-list-o" size="20px"/>{{$t('wallet.withdraw.nav_title_list')}}</div>
    </walletNav> -->

    <div class="item_box">

      <div class="remind-box">
        <p class="remind">您的提币操作完成后对应的资产所有权将转移，请谨慎操作！</p>
      </div>

      <div class="currency-select" @click="popup = true" v-if="currCoin">
        <div class="currency-select-left">
          <img src="../../assets/wallet/asstes/USDT@2x.png" alt="">
          <span>
            {{currCoin.coin.coinName}}
          </span>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>

      <div class="content-box">

        <!-- 可用数量 -->
        <div class="available-quantity" v-if="currCoin">
          <p>
            <span>可用数量</span>
            <span>0000 {{currCoin.coin.coinName}}</span>
          </p>
        </div>

        <div class="withdraw_form">

          <div class="input_group">
            <input type="text" placeholder="请输入提币地址" v-model="withrawInfo.address" @blur="blur_event()">
          </div>

          <div class="input_group">
            <input type="text" placeholder="请输入提币数量" v-model="withrawInfo.amount" @blur="blur_event()">
          </div>

          <div class="extract-state" v-if="currCoin">
            <div>
              <span>手续费：*** {{currCoin.coin.coinName}}</span>
            </div>
            <div>提取全部</div>
          </div>

          <ul class="withdraw-detail" v-if="currCoin">
            <li>手续费:    2%/笔</li>
            <li>实际到账：--{{currCoin.coin.coinName}}</li>
          </ul>

          <!-- 温馨提示 -->
          <div class="warm-prompt">
            <p>温馨提示</p>
            <ul>
              <li>每日17:00前提现的用户，预计在当天提现到账。</li>
              <li>每日17:00后提现的用户，预计最晚于次日提现到账。</li>
              <li>请务必确认电脑及浏览器安全，防止信息被篡改或泄露。</li>
            </ul>
          </div>

          <!-- <div class="input_group" v-if="currCoinInfo">
            <div class="lable font12 text_color_dark">{{$t('feature.withdraw.text_num')}}</div>
            <div class="input flex align">
              <input type="number" :placeholder="`${$t('feature.withdraw.text_min')}${currCoinInfo.coin.minWithdraw}`" v-model="withrawInfo.amount"  @blur="blur_event()">
              <div class="unit font-bold them_color_gray font15">{{currCoinInfo.coin.coinName}}</div>
              <div class="do font-bold text_color_dark textRight" @click="withrawInfo.amount = currCoinInfo.balance.amount">{{$t('wallet.withdraw.text_allin')}}</div>
              <hr>
            </div>

            <div class="lable font12 text_color_dark"><span class="them_color_gray"> {{$t('wallet.withdraw.text_able')}} {{currCoinInfo.balance.amount}} {{currCoinInfo.coin.coinName}}</span></div>

          </div>

          <div class="input_group" v-if="currCoinInfo">
            <div class="lable font12 text_color_dark">{{$t('feature.withdraw.text_fee')}}</div>
            <div class="input flex align">
              <input type="number" v-model="currCoinInfo.coin.withdrawFree" disabled  @blur="blur_event()">
              <div class="unit font-bold them_color_gray font15">{{currCoinInfo.coin.coinName}}</div>
              <hr>
            </div>
          </div> -->

          <div class="submit-box">
            <van-button class="submit" @click="next()">确认</van-button>
          </div>

        </div>
      </div>

    </div>

    <!-- <div>
      <p class="info them_color_gray font12 bg_color_gray padding20 radius2" v-html="$t('feature.withdraw.text_p')">
      </p>
    </div>

    <van-popup v-model="show_popup" closeable position="bottom">
      <div class="main">
        <div class="popup_title">{{$t('feature.cpopupCode.text_title')}}</div>

        <div class="them_form" style="padding:10px 20px;">
          <div class="input_gorup">
            <input type="number" :placeholder="$t('feature.cpopupCode.text_input')" v-model="withrawInfo.code" @blur="blur_event" style="padding-right:100px;">
            <getCode :codeData="{type:'withdraw',phone:userInfo.user.id}"/>
          </div>
          <div class="input_gorup">
            <input type="number" style="-webkit-text-security:disc" :placeholder="`${$t('feature.transfer.input_pass')}`" v-model="withrawInfo.transactionPwd" @blur="blur_event">
          </div>
          <div class="space20"></div>
          <van-button class="submit" type="info" @click="submitWithdraw()">{{$t('feature.cpopupCode.text_btn')}}</van-button>
          <div class="space20"></div>
        </div>

      </div>
    </van-popup> -->

    <!-- 币种选择弹窗 -->
    <van-popup v-model="popup" position="bottom" :style="{ height: '30%' }">
      <van-picker :columns="coins" show-toolbar @change="currencyChange" @cancel="popup=false" @confirm="onChange" :title=" `${$t('feature.transfer.text_pickerTitle')}`" :confirm-button-text="`${$t('feature.bankBuy.text_ok')}`" :cancel-button-text="`${$t('feature.bankBuy.text_cancel')}`"/>
    </van-popup>

  </div>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {
    withdraw
  } from '../../data/wallet';
  import chooseCoins from '../../components/wallet/chooseCoins'
  import getCode from '../../components/wallet/getCode'
import { Toast } from 'vant'
  export default {
    data() {
      return {
        currCoinInfo: null, //当前币种信息
        currCoin: null, // 当前币种
        inputCode:false, //显示验证码
        withrawInfo:{
          address: null,
          amount: null,
          code: null,
          coinId: null,
          transactionPwd:null //支付密码
        },
        popup: false, // 币种选择弹窗
        show_popup:false //显示弹窗
      }
    },
    components:{
      chooseCoins,getCode
    },
    computed: {
      ...mapState(['userInfo']),
      //设置周期
      coins(){
        let res = this.userInfo.balanceModels.map(v=>{
            v.text = `${v.coin.coinName}(${this.$t('feature.transfer.text_balance')}${v.amount})`
            return v;
        }).filter(v=>v.coin.transfer=='Y');
        this.currCoin = res[0];
        return res;
      }
    },
    methods:{
      ...mapMutations(['setUserInfo']),
      chooseCoin(item){//当前币种选择
        // console.log(item)
        this.currCoinInfo = item;
      },//chooseCoin
      // 币种改变
      currencyChange () {
        this.currCoinInfo = null
      },
      onChange (value, index) {
        console.log(value)
        console.log(index)
        this.currCoin = value;
        this.popup = false;
      },
      next(){//下一步
        if(!this.withrawInfo.address){
          Toast(this.$t('wallet.withdraw.Toast_address'));
          return;
        }
        if(!this.withrawInfo.amount){
          Toast(this.$t('wallet.withdraw.Toast_amount'));
          return;
        }
        this.withrawInfo.code = null; 
        this.withrawInfo.transactionPwd = null;       
        this.show_popup = true;
      },
      submitWithdraw(){//申请提现 

        if(!this.withrawInfo.code){
          Toast(this.$t('feature.cpopupCode.text_input'));
          return;
        }
        if(!this.withrawInfo.transactionPwd){
          Toast(this.$t('feature.transfer.input_pass'));
          return;
        }
        
        this.withrawInfo.coinId = this.currCoinInfo.coin.id;
        withdraw(this.withrawInfo).then(v=>{
          // console.log(v);
          Toast(v.message);

          this.currCoinInfo.balance.amount -= this.withrawInfo.amount;

          this.show_popup = false;

          this.withrawInfo = {
            address: null,
            amount: null,
            code:null
          }

        })
      }//submitWithdraw
    },
    mounted() {
      // setTimeout(this.currCoinInfo = this.userInfo.balances.find(x=>x.coins.coinName=='GSHT'), 50);
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../styles/walletVal";

  #funds {
    .item_box {
      margin-top: 46px;
      .remind-box {
        background: #FEF6F4;
        .remind {
          width: 100%;
          height: 28px;
          line-height: 28px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(222,77,73,1);
          padding: 0 20px;
        }
      }

      .currency-select {
        display: flex;
        width: 100%;
        height: 48px;
        line-height: 48px;
        background: #F7F6FB;
        padding: 0 20px;
        justify-content: space-between;
        .currency-select-left {
          img {
            width: 24px;
            vertical-align: sub;
          }
          span {
            font-size: 16px;
            font-weight:bold;
            color:rgba(53,53,53,1);
            margin-left: 6px;
          }
        }
      }

      .content-box {

        .available-quantity {
          width: 100%;
          height: 40px;
          line-height: 40px;
          border-bottom: 1px solid #EBEBEB;
          p {
            padding: 0 20px;
            font-size: 12px;
            font-weight: 500;
            > span:nth-child(1) {
              color: rgba(175,175,175,1);
            }
            > span:nth-child(2) {
              margin-left: 18px;
              color: #DE4D49;
            }
          }
        }
        .token_choose {
          margin-bottom: 20px;

          &>div {
            background: $them_color_bgGray;
            padding: 10px 10px;
            border-radius: 2px;
            -webkit-border-radius: 2px;
            color: $text_color_dark;
            font-size: 14px;
            font-weight: bold;
          }

          .token_name {
            flex: 1;
            margin-left: 15px;

            small {
              .van-icon {
                margin-top: -2px;
                display: inline-block;
                vertical-align: middle;
              }
            }
          }
        }

        .code_box {
          background: $them_color_bgGray;
          padding: 20px;
          border-radius: 2px;

          .qrcode {
            width: 180px;
            margin: 10px auto;
            background: white;
            padding: 10px;
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
  }

  .withdraw_form {
    .input_group {
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #EBEBEB;
      input {
        flex: 1;
        outline: none;
        border-radius: 0;
        background: none;
        border: none;
        padding: 15px 0 15px 20px;
        font-size: 15px;
        padding-right: 10px;
        font-weight: bold;
        color: $text_color_dark;
        &:focus~hr {
            border: none;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: $them_color;
        }
        &::-webkit-input-placeholder{
          font-weight: normal;
          font-size: 12px;
          color: #AFAFAF;
        }
        &:disabled{
          opacity: 1;
          color:black;
        }
      }
    }

    .extract-state {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      margin-top: 16px;
      > div {
        font-size: 12px;
        font-weight: 500;
        color: rgba(175,175,175,1);
      }
      > div:nth-child(2) {
        color: #DE4D49;
      }
    }

    .withdraw-detail {
      padding: 0 20px;
      margin-top: 26px;
      > li {
        line-height: 28px;
        font-size: 12px;
        font-weight: 500;
        color: rgba(52,59,58,1);
      }
      li::before {
        content:"●";
        margin-right: 10px;
      }
    }

    .warm-prompt {
      padding: 0 20px;
      margin-top: 26px;
      > p {
        font-size: 14px;
        font-weight: bold;
        color: rgba(52,59,58,1);
      }
      > ul {
        margin-top: 10px;
        li {
          font-size: 12px;
          font-weight: 500;
          color: rgba(175,175,175,1);
        }
        li::before {
          content:"●";
          margin-right: 10px;
          color: #AFAFAF;
        }
      }
    }

    .submit-box {
      padding: 0 20px;
      margin-top: 40px;
      .submit {
        display: block;
        margin: 20px auto;
        width: 100%;
        background: #DE4D49;
        font-size: 14px;
        font-weight: bold;
        color: rgba(255,255,255,1);
      }
    }

  }
.info{
  >>> span{
    display: block;
    margin-bottom:5px;
  }
}


.van-popup {
    .popup_title {
        text-align: center;
        font-size: 16x;
        font-weight: bold;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 15px;
        position: relative;
        .close {
            position: absolute;
            right: 0;
            height: 100%;
            top: 0;
            line-height: 40px;
            padding: 0 20px;
            font-size: 19px;
            opacity: 0.6;
        }
    }
    .them_form {
        padding: 20px;
        input{
          border: 1px solid red;
        }
    }
}

</style>
