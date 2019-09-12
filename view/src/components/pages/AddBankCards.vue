<template>
    <div class="addBankCards" id="addBankCards">
        <Head :title="title"></Head>
        <div class="addBankCardsView">
            <div class="cardView">
                <div class="card">
                    <div class="item display_csb">
                        <div class="name">持卡人</div>
                        <div class="rightName">
                            <input type="text" placeholder="请输入持卡人姓名" class="inputName">
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="name">银行卡号</div>
                        <div class="rightName">
                            <input type="text" placeholder="请填写银行卡号" class="inputName">
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="name">开户银行</div>
                        <div class="rightName display_cc">
                            <div class="select">请选择</div>
                            <img src="../../common/images/index/back.png" alt="" class="rightselect">
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="name">手机号码</div>
                        <div class="rightName">
                            <input type="text" placeholder="请填写预留手机号码" class="inputName">
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="name">手机号码</div>
                        <div class="rightName testgetCode">
                            <input type="text" placeholder="请填写" class="inputName">
                            <div class="line"></div>
                            <div class="getCode">获取验证码</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn display_cc">
                <div class="btn_btn display_cc">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "添加银行卡"
            }
        },
        methods:{
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("addBankCards")) {
                    document.getElementById("addBankCards").style.height =
                    window.innerHeight+"px";
                }
            },
            init(){
                var self = this; //因为箭头函数会改变this指向，指向windows。所以先把this保存
                window.addEventListener("load", function() {
                    //执行
                    self.resizepage();
                });
                window.addEventListener("resize", function() {
                    //执行
                    self.resizepage();
                });
                setTimeout(() => {
                    window.addEventListener("load", function() {
                    //执行
                    self.resizepage();
                    });
                    window.addEventListener("resize", function() {
                    //执行
                    self.resizepage();
                    });
                }, 200);
            },
        },
        mounted() {
            this.init();
            document.getElementsByTagName("html")[0].style.height =
            window.innerHeight + "px";
            if (document.getElementById("addBankCards")) {
                document.getElementById("addBankCards").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.addBankCards{
    background-color: #f5f5f5;
    .addBankCardsView{
        padding-top: pxTorem(45px);
        .cardView{
            margin-top: pxTorem(21px);
            background-color: #fff;
            .card{
                margin: 0 pxTorem(39px);
                .item{
                    padding: pxTorem(15px) 0;
                    border-bottom: solid 1px #e6e6e6;
                    .name{
                        font-size: pxTorem(16px);
                        color: #666666;
                        font-weight: 500
                    }
                    .rightName{
                        .inputName{
                            outline: 0;
                            border: 0;
                            font-size: pxTorem(16px);
                            color: #999999;
                        }
                        .select{
                            font-size: pxTorem(16px);
                            color: #999999;
                            padding-right: pxTorem(5px);
                        }
                        .rightselect{
                            width: pxTorem(10px);
                            height: pxTorem(20px);
                        }
                        
                    }
                    .testgetCode{
                        display: flex;
                        display: -webkit-flex;
                        .inputName{
                            width: pxTorem(50px);
                        }
                        .line{
                            border-left: solid 1px #cccccc;
                            margin: 0 pxTorem(5px);
                        }
                        .getCode{
                            font-size: pxTorem(16px);
                            color: #333333;
                        }
                    }
                }
            }
        }

        .btn{
            .btn_btn{
                font-size: pxTorem(16px);
                color: #fff;
                width: pxTorem(295px);
                background-color: #2ca7fa;
                border-radius: pxTorem(5px);
                padding: pxTorem(10px) 0;
                margin-top: pxTorem(40px)
            }
        }
    }
}
</style>