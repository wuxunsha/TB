<template>
    <div class="people-detail">
        <div class="navBox">
            <van-nav-bar :title="`详情`"
                         fixed
                         left-arrow
                         @click-left="goback()" />
        </div>
        <div class="main">
            <div class="people-main">
                <div class="left-main">
                    <img src="../../assets/wallet/people/left-main.png">
                </div>
                <div class="right-main">
                    <h3>农业</h3>
                    <p>
                        <span>产业价值(USDT)</span>
                        <span>50-10</span>
                    </p>
                    <p>
                        <span>持股时间</span>
                        <span>14:00</span>
                    </p>
                    <p>
                        <span>产业收益</span>
                        <span>1天/5%</span>
                    </p>
                    <p>
                        <span>产业数量</span>
                        <span>0</span>
                    </p>
                    <div class="btn">
                        股权交接中
                    </div>
                </div>
            </div>
            <div class="line"></div>
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
                <div class="order">
                    <h3>农业</h3>
                    <div class="order-walth">
                        <p>
                            <span>产业价值:</span>
                            <span>50-10</span>
                        </p>
                        <p>
                            <span>状态:</span>
                            <span class="status">预约中</span>
                        </p>
                    </div>
                    <p>
                        <span>产业收益:</span>
                        <span>1天/5%</span>
                    </p>
                    <div class="order-walth">
                        <p>
                            <span>持股时间:</span>
                            <span>14:00</span>
                        </p>
                        <p>
                            <span>2020/04/09</span>
                        </p>
                    </div>

                </div>
            </div>
            <div class="content-line">
                <div class="order">
                    <h3>农业</h3>
                    <div class="order-walth">
                        <p>
                            <span>产业价值:</span>
                            <span>50-10</span>
                        </p>
                        <p>
                            <span>状态:</span>
                            <span class="status">预约中</span>
                        </p>
                    </div>
                    <p>
                        <span>产业收益:</span>
                        <span>1天/5%</span>
                    </p>
                    <div class="order-walth">
                        <p>
                            <span>持股时间:</span>
                            <span>14:00</span>
                        </p>
                        <p>
                            <span>2020/04/09</span>
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div v-if="tabNum== 1">
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
                    </div>
                    <div class="go-buy">
                        预约成功,去付款
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
                    <div class="go-buy">
                        收益增值,众筹
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
                    <div class="go-buy">
                        收益增值,众筹
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
                    <div class="go-buy">
                        收益增值,众筹
                    </div>
                </div>
            </div>
        </div>
        <div v-if="tabNum== 4">
            <div class="content-line">
                <div class="order"
                     style="margin:10px 0 0 0">
                    <h3>
                        <img src="../../assets/wallet/people/time-lv.png">
                        <span>已转出</span>
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
                        <img src="../../assets/wallet/people/time-lv.png">
                        <span>已转出</span>
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
                        <span>转让中</span>
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
export default {
    data() {
        return {
            tab: ["预约", "交接中", "量产中", "众筹", "转让"],
            tabNum: 0
        }
    },

    methods: {
        demoClick: function (index) {
            this.tabNum = index;
        }
    }
}

</script>
<style lang='scss' scoped>
.people-detail {
    width: 100%;
    height: 100%;
}
.people-main {
    display: flex;
    align-items: flex-end;
    padding: 15px;
    .left-main {
        width: 159px;
        height: 159px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .right-main {
        width: 50%;
        margin-left: 18px;
        p {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin: 0 0 8px 0;
            span:nth-child(1) {
                // float: left;
                color: #c8cdd3;
            }
            span:nth-child(2) {
                // float: right;
                color: #353535;
            }
        }
        .btn {
            float: right;
            font-size: 12px;
            display: inline;
            padding: 4px 22px;
            color: #fff;
            background-color: #de4d49;
        }
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
</style>