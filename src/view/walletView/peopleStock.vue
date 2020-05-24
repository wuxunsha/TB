<template>
    <div class="people-stock">
        <div class="navBox">
            <van-nav-bar :title="`全民来持股`"
                         fixed
                         left-arrow
                         @click-left="goback()" />
        </div>
        <div class="people-header">
            <img src="../../assets/wallet/people/p-header.png">
            <div class="tip">
                <div @click="$router.push('/myProperty')"><img src="../../assets/wallet/people/changye.png"></div>
                <div><img src="../../assets/wallet/people/rule.png"></div>
            </div>
        </div>
        <div class="main"
             @click="goDetail()">
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
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
        goDetail() {
            this.$router.push('/peopleDetail')
        }
    }
}

</script>
<style lang='scss' scoped>
.people-stock {
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
    .tip {
        position: absolute;
        top: 15px;
        right: 15px;
        img {
            display: block;
            width: 30px;
            height: 30px;
            margin-bottom: 10px;
        }
    }
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
</style>