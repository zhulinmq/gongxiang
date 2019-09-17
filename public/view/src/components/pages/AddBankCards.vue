<template>
    <div class="addBankCards" id="addBankCards">
        <Head :title="title"></Head>
        <div class="addBankCardsView">
            <div class="cardView">
                <div class="card">
                    <div class="item display_csb">
                        <div class="name">持卡人</div>
                        <div class="rightName">
                            <input type="text" v-model="cardholder" placeholder="请输入持卡人姓名" class="inputName">
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="name">身份证号</div>
                        <div class="rightName">
                            <input type="text" v-model="idcard" placeholder="请填写银身份证号" class="inputName">
                        </div>
                    </div>
                    <div class="item display_csb">
                        <div class="name">银行卡号</div>
                        <div class="rightName">
                            <input type="text" v-model="bank_card_number" placeholder="请填写银行卡号" class="inputName">
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
                            <input type="text" v-model="reserved_mobile" placeholder="请填写预留手机号码" class="inputName">
                        </div>
                    </div>
                    <!-- <div class="item display_csb">
                        <div class="name">验证码</div>
                        <div class="rightName testgetCode">
                            <input type="text" v-model="bank_code" placeholder="请填写" class="inputName">
                            <div class="line"></div>
                            <div class="getCode" @click="getCode">{{codeMsg}}</div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="btn display_cc">
                <div class="btn_btn display_cc" @click="submitBank">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
import {apiAddress} from "@/utils/apiAddress"
import commmon from "@/common/js/common"
    export default {
        data() {
            return {
                title: "添加银行卡",
                sending: true, //是否发送验证码
                disabled: false, //是否禁发验证码
                second: 60, //倒计时间
                result: null,
                bank_code:"",//验证码
                reserved_mobile:"",//预留手机号
                bank_card_number:"",//银行卡号
                idcard:"",//身份证号
                cardholder:"",//持卡人姓名
                codeMsg:"获取验证码",
            }
        },
        created(){
            clearInterval(this.result);
        },
        methods:{
            submitBank(){
                //添加银行卡
                let data={
                    cardholder:this.cardholder,	
                    idcard:this.idcard,
                    bank_card_number:this.bank_card_number,		
                    bank_name:"农业银行",
                    reserved_mobile	:this.reserved_mobile	,	
                    bank_code:this.bank_code,
                }
                if(!this.cardholder){
                    this.$toast({
                        message:"持卡人姓名不能为空！",
                        position:"bottom"
                    })
                    return
                }
                if(!commmon.isCardNo(this.idcard)){
                    this.$toast({
                        message:"请输入正确的身份证号！",
                        position:"bottom"
                    })
                    return
                }
                // if(!commmon.bankCardValidate(this.bank_card_number)){
                //     this.$toast({
                //         message:"请输入正确的银行卡号！",
                //         position:"bottom"
                //     })
                //     return
                // }
                if(!commmon.checkMobile(this.reserved_mobile)){
                    this.$toast({
                        message:"请输入正确的手机号！",
                        position:"bottom"
                    })
                    return
                }
                // if(!this.bank_code){
                //     this.$toast({
                //         message:"请输入验证码！",
                //         position:"bottom"
                //     })
                //     return
                // }
                apiAddress.bindBankcard(data).then((result)=>{
                    if(result.code==1){
                        this.$toast({
                            message:"添加成功",
                            position:"bottom"
                        })
                        this.$router.go(-1)
                    }else{
                         this.$toast({
                            message:result.msg,
                            position:"bottom"
                        })
                    }
                })
            },
            //获取验证码
            getCode(){
                let phone=this.reserved_mobile;
                let isMobile=commmon.checkMobile(phone);
                if(!isMobile){
                    this.$toast({
                        message: "手机号码格式不正确！",
                        position:"bottom"
                    })
                    return
                }
                let data={
                    mobile:phone,
                    event:"register"
                }
                this.sending = false;
                this.disabled = true;
                this.timeDown();
                apiAddress.sendsms(data).then((result)=>{ 
                    if(result.code==1){
                        this.$toast({
                            message:"发送成功",
                            position:"bottom"
                        })
                    }else{
                       this.$toast({
                            message:result.msg,
                            position:"bottom"
                        }) 
                    }
                })
            },
            timeDown() {
                this.result = setInterval(() => {
                    --this.second;
                    this.codeMsg = this.second + "s";
                    if (this.second < 0) {
                    clearInterval(this.result);
                    this.sending = true;
                    this.disabled = false;
                    this.second = 60;
                    this.codeMsg = "获取验证码";
                    }
                }, 1000);
            },
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