<template>
  <div id="user" class="full-screen">

    <div class="navBox opacity">
      <van-nav-bar
        :title="`${$t('feature.bankShareList.nav_title')}`"
        left-arrow @click-left="goback()"
      />
    </div>

    <div class="user_info flex align between animated fadeIn" v-if="topInfo" style="padding-top:60px;">
        <div class="item">
          <div class=" font18">{{team.myYeJi || '--'}}</div>
          <div class=" font12">{{$t('feature.bankShareList.text_amount')}}</div>
        </div>
        <div class="item">
          <div class=" font18">{{team.total || '--'}}</div>
          <div class=" font12">{{$t('feature.bankShareList.text_number')}}</div>
        </div>

        <!-- <div class="item">
          <div class="data">
            <div class=" font18">{{topInfo.left.totalNumber}}</div>
            <div class=" font12">{{$t('feature.bankShareList.text_left_amout')}}</div>
          </div>
          <div class="data">
            <div class=" font18">{{topInfo.left.totalUser}}</div>
            <div class=" font12">{{$t('feature.bankShareList.text_left_number')}}</div>
        </div>

        </div> -->
        <!-- item -->
        <!-- <div class="item">
          <div class="data">
            <div class=" font18">{{topInfo.right.totalNumber}}</div>
            <div class=" font12">{{$t('feature.bankShareList.text_right_amout')}}</div>
          </div>
          <div class="data">
            <div class=" font18">{{topInfo.right.totalUser}}</div>
            <div class=" font12">{{$t('feature.bankShareList.text_right_number')}}</div>
          </div>
        </div> -->
        <!-- item -->

    </div>
    <!-- user_info -->

    <div class="shareList" v-if="teamList.length">

        <div class=" flex align border-bottom animated fadeIn" v-for="(item,index) in teamList" :key="index">

          <div class="icon">
            <img src="../../assets/business/nav_user.png" alt="">
          </div>
          <!-- icon -->

          <div class="info">
            <div class=" font12" style="margin-bottom:5px;">{{item.userName}}
              <!-- <van-tag :type="item.area=='L'?'primary':'success'">
                {{item.area=='L'?$t('feature.register.text_left'):$t('feature.register.text_right')}}
              </van-tag> -->
            </div>
            <div class=" font12 color-gray2">{{item.addTime}}</div>
          </div>
          <!-- info -->

          <div class="amout font12">{{$t('feature.bankShareList.text_amount')}}：{{item.userYeji}}</div>
          <!-- amout -->

        </div>
        <!-- flex -->

    </div>
    <!-- shareList -->

    <load_statueController 
      :dataLength="teamList.length" 
      :pageSize="query.pageSize"
      v-on:loadData="loadmore" 
      :pageNum="currentPage"
      ref="load_statueController"
      class="loadController"
    />


  </div>
  <!-- index -->
</template>
<script>
import load_statueController from "../../components/common/load_statueController.vue";
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import {
    childList,
    childInfo,
    getTeamInfo
  } from '../../data/business';

  export default {
    computed: {
      ...mapState(['userInfo'])
    },
    data() {
      return {
        child:[],
        topInfo:null,
        query:{
          pageSize:20,
          pageNum:1,
        },
        team:{},
        teamList:[],
        currentPage:1
      }
    },
    components: {
      load_statueController
    },
    methods: {
      getChild(){//获取列表
        childList(this.query).then(v=>{
          v.data.list.forEach((v, k) => {
            this.child.push(v);
          });
          setTimeout(() => {
            this.$refs.load_statueController.listen()
          }, 10);
        })
      },//getChild
      getTeam (page) {
        getTeamInfo({
          pageSize:20,
          pageNum:page,
          userId: this.userInfo.user.id
        }).then(v=>{
          this.team = v.data
          this.teamList = v.data.list
        })
      },
      getChildInfo(){//获取头部数据
        childInfo().then(v=>{
          this.topInfo = v.data;
        })
      },//getChildInfo
      loadmore() { //加载更多
        // ++this.query.pageNum;
        // this.getChild();
        this.currentPage++
        this.getTeam(this.currentPage)
      }, //loadmore
    },
    created () {
      this.getTeam(1)
    },
    mounted() {
      this.getChild();
      this.getChildInfo();
    } //mounted
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../styles/walletVal";

  #user {
    box-sizing: border-box;
  }

  .user_info {
    margin-top: 0;
    padding: 20px 10px;
    position: relative;
    background: $them_color_dark;
    padding-bottom: 60px;

    * {
      color: white;
    }
    >div{
      width: 50%;
      text-align: center;
      .data{
        margin-bottom: 10px;
      }
    }
  }
  .shareList{
    padding: 20px;
    position: relative;
    margin-top: -50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: white;
    >.flex{
      padding: 15px 0;
    }
    .icon{
      width: 45px;
      height: 45px;
      border-radius: 100px;
      margin-right: 10px;
      overflow: hidden;
      background: rgba(0,0,0,0.1);
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .info{
      flex: 1;
    }
  }
</style>
