<template>
  <div class="full-height">

    <div class="navBox">
      <van-nav-bar
        :title="`${$t('feature.transfer.text_title')}`"
        fixed
        left-arrow @click-left="goback()"
      />
    </div>

    <div class="actionForm">

        <div class="formGroup currency" v-if="currCoin">
        <div class="title">{{$t('feature.transfer.text_coin')}}</div>
        <div class="inputItem currency-bg">
            <div class="selecteBox" @click="show=true"></div>
            <input type="text" :placeholder="`${$t('feature.transfer.input_chooseCoin')}`"  v-model="currCoin.coin.coinName" @blur="blur_event()">
        </div>
      </div>
      <!-- formGroup -->

      <div class="formGroup">
        <div class="title">{{$t('feature.transfer.text_id')}}</div>
        <div class="inputItem inputItemButton">
          <input type="text" :placeholder="`${$t('feature.transfer.input_id')}`" v-model="reqParams.toId" @blur="blur_event()" @change="getName()">
        </div>
        <div class="info" :class="idName==='UIDNULL'?'color-red':''" v-if="idName" style="margin-top:10px;">{{$t('feature.transfer.text_nameTitle')}}：
          <span v-if="idName==='UIDNULL'">{{$t('feature.transfer.text_noName')}}</span>
          <span v-else>{{idName}}</span>
        </div>
        <!-- info -->
      </div>
      <!-- formGroup -->

      <div class="formGroup">
        <!-- <div class="title">{{$t('feature.transfer.text_number')}} <small v-if="currCoin">( {{$t('feature.transfer.text_able')}}{{currCoin.amount}} {{currCoin.coin.coinName}} )</small></div> -->
        <div class="title">{{$t('feature.transfer.text_number')}}</div>
        <div class="inputItem inputItemButton transfer-amount">
          <input type="number" :placeholder="`${$t('feature.transfer.input_number')}`" v-model="reqParams.number" @blur="blur_event()" @change="getFee()">
          <span class="money-type" v-if="currCoin">{{currCoin.coin.coinName}}</span>
          <span>|</span>
          <span @click="allSum">全部</span>
        </div>
        <div class="balance">
          <span>可用余额：</span>
          <span v-if="currCoin">{{currCoin.amount}}&nbsp;{{currCoin.coin.coinName}}</span>
        </div>
        <div class="info" v-if="fee" style="margin-top:10px;">手续费：{{fee}} {{currCoin.coin.coinName}}</div>
      </div>
      <!-- formGroup -->

      <div class="formGroup">
        <div class="title">{{$t('feature.transfer.text_code')}}</div>
        <div class="inputItem flex align inputItemButton">
            <input type="number" :placeholder="`${$t('feature.transfer.input_code')}`" v-model="reqParams.code" @blur="blur_event()">
            <div class="getCode"> <getCode :codeData="{type:'transfer',phone:userInfo.user.id}"/></div>
        </div>
      </div>
      <!-- formGroup -->

      <div class="formGroup">
        <div class="title">{{$t('feature.transfer.text_pass')}}</div>
        <div class="inputItem inputItemButton">
          <input type="number" style="-webkit-text-security:disc" :placeholder="`${$t('feature.transfer.input_pass')}`" v-model="reqParams.transactionPwd" @blur="blur_event()">
        </div>
      </div>
      <!-- formGroup -->

      <div class="space20"></div>

      <div class="submit_btn red" @click="checkParams()" disabled>{{$t('feature.transfer.text_btn')}}</div>
      {{this.reqParams.coin}}

  </div>
  <!-- actionForm -->

<van-popup position="bottom" v-model="show">
    <van-picker :columns="coins"
    show-toolbar @change="currencyChange"
    @cancel="show=false"
    @confirm="onChange"
    :title=" `${$t('feature.transfer.text_pickerTitle')}`"
    :confirm-button-text="`${$t('feature.bankBuy.text_ok')}`"
    :cancel-button-text="`${$t('feature.bankBuy.text_cancel')}`"
    />
</van-popup>

   

  </div>
  <!-- index -->
</template>

<script>
  import {
    mapMutations,
    mapState,
    mapActions
  } from 'vuex'
  import {
    transfer,idGetName,transferFee
  } from '../../data/business';
  import getCode from '../../components/wallet/getCode'
import { Toast } from 'vant';
import { log } from '../../data/wallet';

  export default {
    data() {
      return {
        show:false,
        reqParams:{
            number:null,
            toId:null,
            code:null,//验证码
            transactionPwd:null,//支付密码
            coinId:null
        },
        currCoin:null,//当前币种
        idName:null,//帐号名称
        fee:null,//手续费
        scale:null,//手续费比例
        submitFlag: false
      }
    },
    components:{getCode},
    computed: {
      ...mapState(['userInfo']),
      coins(){//设置周期
        let res = this.userInfo.balanceModels.map(v=>{
            v.text = `${v.coin.coinName}(${this.$t('feature.transfer.text_balance')}${v.amount})`
            return v;
        }).filter(v=>v.coin.transfer=='Y');
        this.currCoin = res[0];
        return res;
      }//cycles
    },
    methods: {
        getFee(){//获取手续费
          if(this.reqParams.number)
            this.fee = this.scale<1 ? this.toFixed_4(this.reqParams.number * this.scale) : this.scale;
          else
            this.fee = null;
        },//getFee
        getScale(){//获取比例
          transferFee().then(v=>{
            this.scale = v.data;
          })
        },//getScale
        // 币种改变
        currencyChange() {
          this.reqParams.number = null
        },
        // 全部金额
        allSum () {
          this.reqParams.number = this.currCoin.amount
        },
        checkParams(){//确认转账
            if(!this.reqParams.toId){
                Toast(this.$t('feature.transfer.text_id'))
                return;
            }
            if(!this.reqParams.number){
                Toast(this.$t('feature.transfer.input_number'));
                return;
            }
            if(!this.reqParams.code){
                Toast(this.$t('feature.transfer.input_code'));
                return;
            }
            if(!this.reqParams.transactionPwd){
                Toast(this.$t('feature.transfer.input_pass'));
                return;
            }
            this.reqParams.coinId = this.currCoin.coin.id;
            this.transfer();
        },//transfer
        transfer(){
            transfer(this.reqParams).then(v=>{
                console.log(v);
                Toast.success(v.message);
                setTimeout(() => {
                    this.goback();
                }, 1000);
            })//transfer
        },
        getName(){//获取id名称
          if(!this.reqParams.toId){
            this.idName = null;
            return;
          }
          idGetName({id:this.reqParams.toId}).then(v=>{
            if(v.data)
              this.idName  = v.data;
            else
              this.idName  = 'UIDNULL';
          })
        },//getName
        onChange(value, index){//选择币种
            console.log(value,index);
            this.currCoin = value;
            this.show = false;
        },//onChange
    },
    mounted() {
      this.getScale();
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../styles/walletVal";
  .formGroup{
      margin-top: 20px;
  }
  >>>.getCode{
      white-space: nowrap;
      padding: 10px 5px;
      border-radius: 4px;
      color:#DE4D49;
      margin-left: 10px;
  }
</style>
