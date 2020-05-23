<template>
  <div id="login" class="login_form padding20 full-screen">

    
    <div class="space30"></div>

    <div class="title flex align between">
      <div class="h2">{{$t('wallet.login.title')}}</div>

      <div class="change_lang" @click="show = true" v-if="$i18n.locale=='en'">English<van-icon name="arrow-down" /></div>
      <div class="change_lang" @click="show = true" v-if="$i18n.locale=='zh_hk'">繁體中文<van-icon name="arrow-down" /></div>
      <div class="change_lang" @click="show = true" v-if="$i18n.locale=='zh_cn'">简体中文<van-icon name="arrow-down" /></div>
    </div>

    <div class="space60"></div>

    <div class="them_form">

      <div class="input_gorup">
        <input type="text"  :placeholder="$t('wallet.login.form_mail')" v-model="phone" @blur="blur_event">
      </div>

      <div class="input_gorup">
        <input type="password" :placeholder="$t('wallet.login.form_pass')" v-model="password" @blur="blur_event">
      </div>


      <div class="space30"></div>
        <van-button  type="info" @click="submitLogin()" :disabled="disabled">{{$t('wallet.login.form_btn_login')}}</van-button>
      
      <div class="space40"></div>

      <div class="info flex align between">
        <span class=" font_link font14" @click="gopage('forgetPass')">{{$t('wallet.login.form_btn_forget')}}</span>
        <div>
          <span class="font14 them_color_gray">{{$t('wallet.login.none_user')}}</span>&nbsp;
          <a @click="gopage('register')" class="font14 font_link">{{$t('wallet.login.btn_register')}}</a>
        </div>
      </div>

      <div class="space20"></div>

    </div>
    <!-- them_form -->

    <van-action-sheet v-model="show" :title="$t('wallet.common.exchange_lang')" :actions="lang_actions" @select="onSelect"/>

  </div>
  <!-- index -->
</template>

<script>
  import {
    login
  } from '../../data/wallet';
  import {
    validatePhoneNum
  } from '../../util';
  import {
    mapMutations,
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
        phone: '',//24
        password: '',//12345678a
        disabled: false,
        show: false
      }
    },
    components: {},
    methods: {
      ...mapMutations(['setToken']),
      ...mapActions(['actionUserInfo']),
      verifyLoginInfo() { //登陆验证
        if (!this.phone) {
          Toast(this.$t('wallet.login.toast_mail'))
          return false;
        }
        if (!this.password) {
          Toast(this.$t('wallet.login.toast_pass'))
          return false;
        }
        return true;
      }, //verifyLoginInfo
      async submitLogin () { //开始登陆
        if (!this.verifyLoginInfo()) {
          return;
        }
        let params = {
          uid: this.phone,
          password: this.password
        }
        this.disabled = true;
        login(params).then(res => {
          let {message,data} = res;
          this.setToken(data);

          if(data.is_active === 'N'){
            Dialog.confirm({
              message: this.$t('wallet.login.text_active'),
              confirmButtonText:this.$t('lang.common.text_confirmButtonText'),
              cancelButtonText:this.$t('lang.common.text_cancelButtonText')
            })
            return;
          }

          Toast(message); 

          this.actionUserInfo().then(v=>{
            setTimeout(() => this.$router.replace({path: "/home"}),1000);
          })

        }).catch(e => {
          console.error(e);
          this.disabled = false;
          //Toast(e.message);
        })
      }, //submitLogin
      onSelect(item) {
        this.set_lang(item.type);
        this.show = false;
      }
    },
    mounted() {
      if(this.$route.query.userID){
        this.phone = this.$route.query.userID;
      }
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  .van-button {
    display: block;
    width: 100%;
  }
  .logo_text{
    display: block;
    text-align: center;
    font-size: 13px;
    opacity: 0.7;
    margin-top: 30px;
  }

</style>
