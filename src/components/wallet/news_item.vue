<template>
  <div>
      <div class="newsList flex align" @click="gopage(`/newsDetail?id=${item.id}`)">
          <div class="img" v-if="item.imgUrl">
            <img :src="item.imgUrl" alt="" srcset="">
          </div>
          <div class="text ellipse">
              <div class="title ellipse">{{item.title}}</div>
              <div class="sub_title ellipse">{{item.subtitle}}</div>
              <div class="info flex align">
                  <!-- <div><van-icon name="manager-o" />user</div> -->
                  <div><van-icon name="underway-o" />{{item.addTime}}</div>
              </div>
          </div>
      </div>
        <!-- newsList -->
  </div>
</template>

<script>
  export default {
    props: ['item'],
    data() {
      return {}
    },
    methods: {},
    mounted() {},
    watch: {

    } //watch
  };

</script>
<style rel="stylesheet/scss" scoped lang="scss">
  @import "../../styles/walletVal";
  .newsList{
      background: white;
        padding: 10px;
        margin-top: 10px;
        .img{
            min-width: 120px;
            width: 120px;
            height: 90px;
            background: rgba(0,0,0,0.1);
            border-radius: 4px;
            overflow: hidden;
            margin-right: 10px;
            img{
              width: 100%;
              height: 100%;
            }
        }
        &:active{
          .img{
            opacity: 0.5;
          }
        }
        .text{
            >div{
                margin-bottom: 5px;
                &.title{
                    font-size: 16px;
                }
                &.sub_title{
                    font-size: 12px;
                    opacity: .7;
                    margin: 10px 0;
                }
                &.info{
                    >div{
                        margin-right: 20px;
                        font-weight: normal;
                        font-size: 11px;
                        opacity: .5;
                    }
                    i{
                        display: inline-block;
                        margin-right: 5px;
                        position: relative;
                        top: 2px;
                    }
                }
            }
        }
    }
</style>
