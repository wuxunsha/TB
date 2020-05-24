<template>
    <div class="myProperty">
        <div class="navBox">
            <van-nav-bar :title="`我的产业`"
                         fixed
                         left-arrow
                         @click-left="goback()" />
        </div>
        <div class="people-header">
            <img src="../../assets/wallet/people/p-header.png">

        </div>
        <div class="content">
            <div class="detail-tab">
                <div class="tab-bar"
                     v-for="(t,index) in tab"
                     :key="index"
                     :class="{'avtive':index == tabNum}"
                     @click="demoClick(index)">{{t}}</div>
            </div>
        </div>
        <!-- <div class="line"></div> -->

        <div v-if="tabNum == 0">
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/time-lv.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/error.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/seccess.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div v-if="tabNum== 1">
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/time-lv.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/error.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/seccess.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="tabNum== 2">
            <div class="content-line">
                <div class="order">
                    <h3>
                        <img src="../../assets/wallet/people/time.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>
                    <div class="go-buy">
                        收益增值,众筹
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tabNum == 3">
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/time-lv.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/error.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/seccess.png">
                        <span>付款倒计时56:30</span>
                    </h3>
                    <div class="order-center">
                        <p>
                            <span>股权编号:</span>
                            <span>202000132456</span>
                        </p>
                        <p>
                            <span>周期:</span>
                            <span>1天</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业价值:</span>
                            <span>50-100U</span>
                        </p>
                        <p>
                            <span>股份金额:</span>
                            <span>50U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>产业收益:</span>
                            <span>1天/5%</span>
                        </p>
                        <p>
                            <span>到期收益:</span>
                            <span>55U</span>
                        </p>
                    </div>
                    <div class="order-center">
                        <p>
                            <span>TGB:</span>
                            <span>5*1.1%=0.055</span>
                        </p>
                        <p>
                            <span>到期时间:</span>
                            <span>2020/04/12</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { Popup } from 'vant';
import { log } from '../../data/wallet';
export default {
    data() {
        return {
            tab: ["农业", "水产业", "建筑业", "运输业"],
            tabNum: 0,

        }
    },

    mounted() {

    },
    methods: {
        demoClick: function (index) {
            this.tabNum = index;
        },

    },
    watch: {

    }
}

</script>
<style lang='scss' scoped>
.people-detail {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.people-header {
    width: 100%;
    height: 200px;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
}
.line {
    width: 100%;
    height: 5px;
    background-color: #f7f6fb;
}
.content {
    padding: 0 15px;
    border-bottom: 1px solid #ebebeb;
}
.detail-tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    width: 100%;
}
.tab-bar {
    margin-right: 20px;
    font-size: 14px;
    color: #a5acae;
}
.avtive {
    color: #353535;
}
.content-line {
    padding: 0 15px;
    border-bottom: 1px solid #ebebeb;
    .order {
        width: 100%;
        h3 {
            margin: 10px 0 6px;
            display: flex;
            align-items: center;
            img {
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }
            span {
                color: #de4d49;
                font-size: 12px;
            }
        }
        .order-walth {
            width: 100%;
            display: flex;
            justify-content: space-between;
            span:nth-child(1) {
                color: #c8cdd3;
            }
            .status {
                background: rgba(246, 246, 246, 1);
                border-radius: 2px;
                color: #de4d49;
                padding: 2px 16px;
            }
        }
        .order-center {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            p:nth-child(1) {
                width: 60%;
            }
            span:nth-child(1),
            span:nth-child(2) {
                width: 60px;
                color: #c8cdd3;
            }
            span:nth-child(2) {
                color: #353535;
            }
        }
        p {
            display: flex;
            justify-content: flex-start;
            margin: 0 0 8px 0;
            span:nth-child(1) {
                color: #c8cdd3;
            }
            span:nth-child(2) {
                margin-left: 10px;
                color: #353535;
            }
        }
        .go-buy {
            text-align: center;
            background-color: #de4d49;
            color: #fff;
            font-size: 12px;
            height: 32px;
            line-height: 32px;
            margin-bottom: 15px;
            border-radius: 2px;
        }
    }
}
.popPop {
    height: 37%;
    width: 90%;
    border-radius: 10px;
}
.pop-main {
    h3 {
        text-align: center;
        color: #343b3a;
        padding: 8px 0;
        border-bottom: 1px solid #ebebeb;
    }
    .pop-content {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        .pop-left {
            p {
                margin-bottom: 10px;
                span {
                    color: #de4d49;
                }
            }
        }
        .pop-right {
            margin: -8px 0 0 0;
            display: flex;
            align-items: center;
            img {
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }
            p {
                color: #de4d49;
            }
        }
    }
    .input-focus {
        margin: -33px 0 0 0;
        input {
            opacity: 0;
        }
    }
    .box {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        .pop-box {
            width: 32px;
            height: 32px;
            display: flex;
            border: 1px solid #afafaf;
            border-radius: 2px;
        }
        .dot {
            margin: 10px auto 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #000;
        }
    }
    .config {
        margin-top: 35px;
        display: flex;
        justify-content: center;
        text-align: center;
        line-height: 33px;
        .config-on {
            width: 120px;
            height: 33px;
            background-color: #de4d49;
            color: #fff;
            border-radius: 2px;
            margin: 0 8px;
        }
        .cancel {
            width: 120px;
            height: 33px;
            background: #f7f6fb;
            color: #343b3a;
            border-radius: 2px;
            margin: 0 8px;
        }
    }
}
</style>