<template>

  <div class="mylist">
      <div class="listTitle">{{$t('feature.assets.text_list')}}</div>

       <div class="list_type1 flex align between animated fadeIn" v-for="(item,index) in userInfo.balanceModels" :key="index" @click="gopage(`/assetsDetail_v2?id=${item.coin.id}`)">

         <div class="item flex align">
           <i class="coin_icon">
             <img :src="setImgUrl(item.coin.coinImg)" alt="" srcset="">
           </i>
           <span>{{item.coin.coinName}}</span>
         </div>
         <!-- item -->

         <div class="amout">{{item.amount}}</div>
          <!-- amout -->

       </div>
       <!-- list_type1 -->

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
    padding: 10px;
    .list_type1{
      padding:15px;
      >div{
        margin-bottom: 0;
      }
    }
  }
</style>
