<template>
  <div class="sharebg full-height">

    <div class="navBox opacity">
      <van-nav-bar :title="$t('wallet.share.nav_title')"  left-arrow @click-left="goback()" />
    </div>

    <div class="codeBox">

      <div class="padding20">
        <div class="codeTitle flex align center">
          <i></i><span>{{$t('feature.bankShare.text_code')}}</span><i></i>
        </div>

        <div class="space20"></div>

        <!-- <van-tabs @click="changeType"  type="card">
          <van-tab :title="`${$t('feature.register.text_left')}`" name="left"></van-tab>
          <van-tab :title="`${$t('feature.register.text_right')}`" name="right"></van-tab>
        </van-tabs> -->

        <h2 v-if="area=='left'">{{userInfo.user.userInvitation}}</h2>
        <h2 v-else>{{userInfo.user.userInvitationRight}}</h2>
        
        <div class="codeimg">
          <div class="qr_box">
            <div class="qrcode" ref="qrCodeUrl"></div>
          </div>
        </div>

        <div class="them_btn copycode" :data-clipboard-text="code_text" @click="copy">{{$t('feature.bankShare.text_copy')}}</div>
      </div>
      <!-- padding20 -->

      <div class="info border-top font13 them_color_gray">{{$t('feature.bankShare.text_info')}}</div>

    </div>
    <!-- codeBox -->

  </div>
  <!-- index -->
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'

  import QRCode from 'qrcodejs2'
  import Clipboard from 'clipboard';

  export default {
    data() {
      return {
        code_text: null,
        chilData: null, //邀请数据
        area:'left'//默认区域
      }
    },
    methods: {
      ...mapMutations(['setUserInfo']),
      changeType(name, title){//修改类型
        this.area = name;
        this.qrcode();
      },//changeType
      qrcode() { //生成二维码
        this.$refs.qrCodeUrl.innerHTML="";//先移除
        // this.code_text = `${window.location.protocol}//${window.location.host}/#/register?invitation=${this.area=='left' ? this.userInfo.user.userInvitation : this.userInfo.user.userInvitationRight}`;
        this.code_text = `http://tb.njmall.store/#/register?invitation=${this.area=='left' ? this.userInfo.user.userInvitation : this.userInfo.user.userInvitationRight}`;
        console.log(this.code_text);
        var qrcode = new QRCode(this.$refs.qrCodeUrl, {
          text: this.code_text,
          colorDark: "#2b3b4b",
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
      }, //copy
    },
    computed: {
      ...mapState(['userInfo'])
    },
    mounted() {
      this.qrcode();
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../styles/walletVal";

  .sharebg {
    background: white url('../../assets/business/sharebg.jpg') no-repeat;
    background-size: 100% 100%;
  }

  .codeBox {
    border-radius: 8px;
    background: white;
    margin: 0 20px;
    margin-top: 40%;
    text-align: center;

    .them_btn {
      margin-top: 20px;
    }

    .codeimg {
      border: 1px solid $them_color;
      width: 150px;
      height: 150px;
      margin: 10px auto;
      padding: 5px;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .codeTitle {
    span {
      font-size: 16px;
    }

    i {
      height: 1px;
      margin: 0 10px;
      width: 30px;
      background: $gray_text;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
  }
  .info{
      padding: 20px;
  }

</style>
