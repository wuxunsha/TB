<template>
  <div id="new_detail" class="padding10">

    <div class="navBox">
      <van-nav-bar :title="content.title" fixed left-arrow @click-left="goback()" />
    </div>

    <div v-if="content.contentText">

    <div class="header" v-if="false">
      <div class="title">{{content.title}}</div>
      <div class="info flex align border-bottom">
        <!-- <div><van-icon name="manager-o" />user</div> -->
        <div><van-icon name="underway-o" />{{content.addTime}}</div>
      </div>
    </div>
    <!-- header -->

    <div class="html_content" v-html="content.contentText"></div>

    <div class="space20"></div>

    </div>
    <!-- content -->

    <div v-else>
      <div class="space40"></div>
      <van-skeleton title  :row="3" />
    </div>


  </div>
  <!-- index -->
</template>

<script>
  import {
    noticeDetail
  } from '../../data/wallet';
  export default {
    data() {
      return {
        content: {
          title:this.$t('wallet.news.nav_title_detial')
        }
      }
    },
    methods: {
      get_data() { //获取详情
        noticeDetail({
          id: this.$route.query.id
        }).then(v => {
          this.content = v.data;
        })
      } //get_data
    },
    mounted() {
      this.get_data();
    } //mounted
  };

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    padding: 20px 0;
      .title{
        font-size: 20px;
        font-weight: bold;
        padding: 0px 10px;
      }
    .info {
      padding: 10px;
      >div {
        margin-right: 20px;
        font-weight: normal;
        font-size: 11px;
        opacity: .5;
      }

      i {
        display: inline-block;
        margin-right: 5px;
        position: relative;
        top: 2px;
      }
    }
  }

  .html_content {
    padding:0 10px;
    word-break: break-all;
    *{
      word-break: break-all;
    }
    p {
      line-height: 2em;
      font-size: 12px;
      display: block;
      margin-bottom: 10px;
    }

    img {
      max-width: 100%;
    }
  }

</style>
