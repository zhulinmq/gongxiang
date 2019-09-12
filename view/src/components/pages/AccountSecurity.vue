<template>
    <div class="accountSecurity" id="accountSecurity">
        <Head :title="title"></Head>
        <div class="accountSecurityView">
            <div class="line"></div>
            <div class="list">
                <div class="list_item">
                    <div class="item display_csb">
                        <div class="name">微信号</div>
                        <div class="right display_ce">
                            <div class="red">去绑定</div>
                            <img src="../../common/images/index/back.png" class="back">
                        </div>
                    </div>
                </div>
                <div class="list_item">
                    <div class="item display_csb">
                        <div class="name">手机号</div>
                        <div class="right display_ce">
                            <div class="grey">18652161945</div>
                        </div>
                    </div>
                </div>
                <div class="list_item">
                    <div class="item display_csb" @click="goEditPassword">
                        <div class="name">修改密码</div>
                        <div class="right display_ce">
                            <img src="../../common/images/index/back.png" class="back">
                        </div>
                    </div>
                </div>
                <div class="list_item noBorder">
                    <div class="item display_csb" @click="goAddingBankCards">
                        <div class="name">银行卡</div>
                        <div class="right display_ce">
                            <img src="../../common/images/index/back.png" class="back">
                        </div>
                    </div>
                </div>
            </div>
            <div class="display_cc">
                <div class="btn display_cc">退出登录</div>
            </div>
           
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: "账户安全"
            }
        },
        methods:{
            goAddingBankCards(){
                this.$router.push({name:"bankCards"})
            },
            goEditPassword(){
                this.$router.push({name:"editPassword"})
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("accountSecurity")) {
                    document.getElementById("accountSecurity").style.height =
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
            
            if (document.getElementById("accountSecurity")) {
                document.getElementById("accountSecurity").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.accountSecurity{
    background-color: #f5f5f5;
    .accountSecurityView{
        padding-top: pxTorem(45px);
        .line{
            height: pxTorem(20px);
        }
        .list{
            background-color: #fff;
            .list_item{
                margin: 0 pxTorem(37px);
                padding: pxTorem(17px) 0;
                border-bottom: solid 1px #e6e6e6;
                .name{
                    font-size: pxTorem(16px);
                    color: #666666;
                }
                .right{
                    .red{
                        font-size: pxTorem(13px);
                        color: #ff0000;
                    }
                    .grey{
                         font-size: pxTorem(13px);
                        color: #999999;
                    }
                    .back{
                        width: pxTorem(10px);
                        height: pxTorem(20px);
                        padding-left: pxTorem(7px);
                    }
                }
            }
            .noBorder{
                border:0
            }
        }
        .btn{
            margin-top: pxTorem(55px);
            width:pxTorem(295px) ;
            
            background-color: #2ca7fa;
            border-radius:pxTorem(4px);
            font-size: pxTorem(16px);
            font-weight: normal;
            font-stretch: normal;
            padding: pxTorem(11px) 0;
            color: #ffffff;
        }
    }

}
</style>