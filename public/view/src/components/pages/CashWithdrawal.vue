<template>
    <div class="cashWithdrawal" id="cashWithdrawal">
        <Head :title="titile"></Head>
        <div class="cashWithdrawalView">
            <div class="line"></div>
            <div class="item display_csb" @click="selectBank">
                <div class="display_cfs">
                    <img :src="data.bank_icon" class="bank">
                    <div class="">
                        <div class="bankName">{{data.bank_info}}</div>
                        <div class="bankNum">
                            <span>最多可以提现{{data.max_out}}</span>
                        </div>
                    </div>
                </div>
                <img src="../../common/images/index/back.png" class="close">
            </div>
            <div class="line"></div>
            <div class="item display_csb pt10">
                <div class="display_cfs">
                    <div class="fh">¥</div>
                    <div class="">
                        <input type="text" v-model="money" placeholder="请输入转出金额" class="inputClass">
                    </div>
                </div>
                <div class="allText">全部转出</div>
            </div>
            <div class="btn display_cc">
                <div class="btn_btn display_cc" @click="dowithdraw">确认转出</div>
            </div>

            <div class="becareful">
                <div class="display_cfs"> <div class="dian"></div><div>收益转出服务,必须由管理人员审核</div> </div>
                <div class="display_cfs"> <div class="dian"></div><div>通过审核后,1-3个工作日将入账到银行卡账户</div> </div>
            </div>
        </div>
        <van-popup
            v-model="show"
            position="bottom"
            
        >
            <div class="listName">
                <div class="bankSelect display_cc">请选择银行卡</div>
                <div class="bankList">
                    <div class="item display_csb borderDash" @click="selectItem()">
                        <div class="display_cfs">
                            <img src="../../common/images/index/bank1.png" class="bank">
                            <div class="">
                                <div class="bankName">工商银行(尾号3499)</div>
                                <div class="bankNum">
                                    <span>最多可以提现88.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="display_cfs">
                            <img src="../../common/images/index/bank1.png" class="bank">
                            <div class="">
                                <div class="bankName">工商银行(尾号3499)</div>
                                <div class="bankNum">
                                    <span>最多可以提现88.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import {apiAddress} from "@/utils/apiAddress"
import commmon from "@/common/js/common"
    export default {
        data() {
            return {
                titile: "提现",
                show:false,
                data:{},
                money:0
            }
        },
        created(){
            this.towithdraw()
        },
        methods:{
            dowithdraw(){
                let data={
                    money:this.money,
                    bank_id:this.data.bank_id
                }
                apiAddress.dowithdraw(data).then((result)=>{
                    if(result.code==1){
                        this.$toast({
                            message:"提现成功",
                            position:"bottom"
                        })
                    }
                })
            },
            towithdraw(){
                apiAddress.towithdraw({}).then((result)=>{
                    if(result.code==1){
                        
                        this.data=result.data
                    }
                })
            },
            selectItem(){
                this.show=false
            },
            selectBank(){
                this.show=true;
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("cashWithdrawal")) {
                    document.getElementById("cashWithdrawal").style.height =
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
        mounted(){
             this.init();
            document.getElementsByTagName("html")[0].style.height =
            window.innerHeight + "px";
            if (document.getElementById("cashWithdrawal")) {
                document.getElementById("cashWithdrawal").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.cashWithdrawal{
    background-color: #F0F0F0;
    .cashWithdrawalView{
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
                    padding-right: pxTorem(25px)
                }
            }
            .close{
                width: pxTorem(11px);
                height: pxTorem(22px);
                padding-right: pxTorem(15px);
            }
            .inputClass{
                outline: 0;
                border: 0;
                font-size: pxTorem(20px);
                padding-left: pxTorem(20px);
            }
            .allText{
                font-size: pxTorem(13px);
                color: #2ca7fa;
                padding-right: pxTorem(20px);
            }
            .fh{
                font-size: pxTorem(20px);
                color: #333333;
                padding-left: pxTorem(26px);
            }
        }
        .pt10{
            padding: pxTorem(20px) 0;
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
        .becareful{
            padding-left: pxTorem(30px);
            padding-top: pxTorem(36px);
            color: #999999;
            font-size: pxTorem(14px);
            font-weight: bold;
            .dian{
                width: pxTorem(6px);
                height: pxTorem(6px);
                border-radius: 50%;
                background-color: #999999;
                margin-right: pxTorem(5px)
            }
        }
    }
    .listName{
        background-color: #f5f5f5;
        padding-bottom: pxTorem(30px);
        .bankSelect{
            padding: pxTorem(20px) 0;
            color: #000;
            font-size: pxTorem(16px);
            font-weight: 500
        }
        .bankList{
            .item{
                background-color: #fff;
                padding: pxTorem(12px) 0;
                .bank{
                    width: pxTorem(43px);
                    height: pxTorem(43px);
                    padding-left: pxTorem(20px);
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
                        padding-right: pxTorem(25px)
                    }
                }
                .close{
                    width: pxTorem(11px);
                    height: pxTorem(22px);
                    padding-right: pxTorem(15px);
                }
                .inputClass{
                    outline: 0;
                    border: 0;
                    font-size: pxTorem(20px);
                    padding-left: pxTorem(20px);
                }
                .allText{
                    font-size: pxTorem(13px);
                    color: #2ca7fa;
                    padding-right: pxTorem(20px);
                }
                .fh{
                    font-size: pxTorem(20px);
                    color: #333333;
                    padding-left: pxTorem(26px);
                }
            }
            .borderDash{
                border-bottom: dashed 1px #eeeeee;
            }
        }
    }
}
</style>