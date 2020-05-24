<template>
  <div id="home" class="full-height">

    <div class="navBox">
      <van-nav-bar
        :title="`${$t('feature.home.nav_title_home')}`"
        fixed=""
      />
    </div>

    <home_banner/>

    <home_quote/>

    <myFooter :footerNavActive="activeType"></myFooter>

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
    userInfo
  } from '../../data/wallet';
  import myFooter from "../../components/wallet/footer.vue";
  import home_banner from "../../components/business/home/home_banner.vue";
  // import home_menu from "../../components/business/home/home_menu.vue";
  import home_quote from "../../components/business/home/home_quote.vue";
  

  export default {
    data() {
      return {
        activeType: "home",
        showForm:false
      }
    },
    components: {
      myFooter,home_banner,home_quote
    },
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      ...mapMutations(['setUserInfo']),
      ...mapActions(['actionUserInfo'])
    },
    mounted() {
      this.actionUserInfo();
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../styles/walletVal";
</style>
