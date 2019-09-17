<template>
    <div class="addingBankCards" id="addingBankCards">
        <Head :title="title"></Head>
        <div class="addingBankCardsView">
            <div v-for="(item,index) in bankcardList" :key="index">
                <div class="line"></div>
                <div class="item display_csb">
                    <div class="display_cfs">
                        <img :src="item.bank_icon" class="bank">
                        <div class="">
                            <div class="bankName">{{item.bank_full_name}}</div>
                            <div class="bankNum">
                                <span> <i class="cirle"></i><i class="cirle"></i><i class="cirle"></i> </span>
                                <span><i class="cirle"></i><i class="cirle"></i><i class="cirle"></i></span>
                                <span><i class="cirle"></i><i class="cirle"></i><i class="cirle"></i></span>
                                <span>{{item.bank_card_number.substr(item.bank_card_number.length-4)}}</span>
                            </div>
                        </div>
                    </div>
                    <img src="../../common/images/index/close.png" class="close">
                </div>
            </div>
           
            <!-- <div class="line"></div>
            <div class="item display_csb">
                <div class="display_cfs">
                    <img src="../../common/images/index/bank1.png" class="bank">
                    <div class="">
                        <div class="bankName">工商银行(尾号3499)</div>
                        <div class="bankNum">
                            <span> <i class="cirle"></i><i class="cirle"></i><i class="cirle"></i> </span>
                            <span><i class="cirle"></i><i class="cirle"></i><i class="cirle"></i></span>
                            <span><i class="cirle"></i><i class="cirle"></i><i class="cirle"></i></span>
                            <span>3456</span>
                        </div>
                    </div>
                </div>
                <img src="../../common/images/index/close.png" class="close">
            </div> -->
            <div class="btn display_cc">
                <div class="btn_add display_cc" @click="addBank">
                        <img src="../../common/images/index/add.png" class="add">
                        <div>添加银行卡</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {apiAddress} from "@/utils/apiAddress"
    export default {
        data() {
            return {
                title: "银行卡",
                bankcardList:[]
            }
        },
        created(){
            this.getbankcardList();
        },
        methods:{
            getbankcardList(){
                apiAddress.bankcardList({}).then((result)=>{
                    if(result.code==1){
                        this.bankcardList=result.data
                    }
                })
            },
            addBank(){
                this.$router.push({name:"addBankCards"})
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("addingBankCards")) {
                    document.getElementById("addingBankCards").style.height =
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
            if (document.getElementById("addingBankCards")) {
                document.getElementById("addingBankCards").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.addingBankCards{
    background-color: #f5f5f5;
    .addingBankCardsView{
        padding-top: pxTorem(45px);
        .line{
            height: pxTorem(10px);
        }
        .item{
            background-color: #fff;
            padding: pxTorem(12px) 0;
            .bank{
                width: pxTorem(43px);
                height: pxTorem(43px);
                padding-left: pxTorem(10px);
                padding-right: pxTorem(10px);
            }
            .bankName{
                font-size:pxTorem(16px);
                font-weight: normal;
                font-stretch: normal;
                color: #333333;
            }
            .bankNum{
                 font-size:pxTorem(13px);
                font-weight: normal;
                font-stretch: normal;
                color: #999999;
                span{
                    margin-right: pxTorem(20px)
                }
                .cirle{
                    width: pxTorem(5px);
                    height: pxTorem(5px);
                    border-radius: 50%;
                    background-color: #999999;
                    display: inline-block;
                    margin-right: pxTorem(10px);
                }
            }
            .close{
                width: pxTorem(13px);
                height: pxTorem(13px);
                padding-right: pxTorem(15px);
            }
        }
        .btn{
            margin-top: pxTorem(37px);
            .btn_add{
                width:pxTorem(295px);
                background-color: #2ca7fa;
                border-radius:pxTorem(4px);
                font-size:pxTorem(16px);
                font-weight: normal;
                font-stretch: normal;
                color: #ffffff;
                padding: pxTorem(10px) 0;
                .add{
                    width: pxTorem(14px);
                    height: pxTorem(14px);
                    padding-right: pxTorem(12px);
                }
            }
        }
    }
}
</style>