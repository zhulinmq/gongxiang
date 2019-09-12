<template>
    <div class="editPassword" id="editPassword">
        <Head :title="title"></Head>
        <div class="editPaawordView">
            <div class="view">
                <div class="codeView">
                    <div class="inputMobile display_csb mt20">
                        <div class="display_cfs">
                            <div class="name">手机号</div>
                            <input type="text" v-model="mobile" placeholder="请输入手机号" class="inpuClass">
                        </div>
                    </div>
                    <div class="inputMobile display_csb">
                        <div class="display_cfs">
                            <div class="name">验证码</div>
                            <input type="text" v-model="code" placeholder="请输入验证码" class="inpuClass">
                        </div>
                        <div class="code" @click="getCode">{{codeMsg}}</div>
                    </div>
                </div>
            </div>
            <div class="btnLogin display_cc" @click="nextStep">下一步</div>
        </div>
    </div>
</template>

<script>
    import {apiAddress} from "@/utils/apiAddress"
    import commmon from "@/common/js/common"
    export default {
        data() {
            return {
                title: "修改密码",
                mobile:"",
                code:"",
                codeMsg:"获取验证码",
                sending: true, //是否发送验证码
                disabled: false, //是否禁发验证码
                second: 60, //倒计时间
                result: null,
            }
        },
        methods:{
            getCode(){
                let phone=this.phone;
                let isMobile=commmon.checkMobile(phone)
                if(!isMobile){
                    this.$toast({
                        message: "手机号码格式不正确！",
                        position:"bottom"
                    })
                    return
                }
                let data={
                    mobile:phone,
                    event:"changepwd"
                }
                this.sending = false;
                this.disabled = true;
                this.timeDown();
                
                apiAddress.sendsms(data).then((result)=>{  
                    if(result.code="success"){
                        this.$toast({
                            message:"发送成功",
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
            nextStep(){
                this.$router.push({name:"password"})
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("editPassword")) {
                    document.getElementById("editPassword").style.height =
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
            
            if (document.getElementById("editPassword")) {
                document.getElementById("editPassword").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.editPassword{
    background-color: #f5f5f5;
    .editPaawordView{
        padding-top: pxTorem(63px);
        
        .view{
            background-color: #ffffff;
             padding-top: pxTorem(20px);
             padding-bottom: pxTorem(40px);
            .codeView{
                margin: 0 pxTorem(40px);
                .mt20{
                    padding-top: pxTorem(20px)
                }
                .inputMobile{
                    padding: pxTorem(14px) 0;
                    border-bottom: solid 1px #e6e6e6;
                    .code{
                        font-size:pxTorem(13px);
                        font-weight: normal;
                        font-stretch: normal;
                    
                        color: #ff0000;
                    }
                    .inpuClass{
                        border: 0;
                        outline: 0;
                        width: pxTorem(144px);
                       color: #333333;
                        font-size:  pxTorem(16px);
                        // padding-top: pxTorem(2px);
                    }
                    .name{
                        // font-family: PingFang-SC-Medium;
                        font-size:pxTorem(16px) ;
                        font-weight: normal;
                        font-stretch: normal; 
                        color: #333333;
                        width: pxTorem(61px);
                        padding-left: pxTorem(5px);
                    }
                    .delete{
                        width: pxTorem(18px);
                        height: pxTorem(18px);
                        // padding-right: pxTorem(10px);
                    }
                    input::input-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                
                    input::-webkit-input-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                
                    input:-ms-input-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                
                    input:-moz-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                    
                    input::-moz-placeholder {
                        color: #cccccc;
                        font-size:  pxTorem(16px);
                    }
                }
            }  
        }
        .btnLogin{
            margin-top: pxTorem(60px);
            background-color: #2ca7fa;
            border-radius: pxTorem(2px);
            font-size: pxTorem(16px);
            color: #fff;
            padding: pxTorem(10px) 0;
            // padding-bottom: pxTorem(11px);
            margin-left: pxTorem(35px);
            margin-right: pxTorem(35px);
            // letter-spacing: 1px;
        }
    }
}
</style>