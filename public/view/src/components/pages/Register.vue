<template>
    <div class="register" id="register">
        <Head :title="title"></Head>
        <div class="registerView">
            <div class="inputMobile display_csb">
                <div class="display_cfs">
                    <div class="name">手机号</div>
                    <input type="text" v-model="phone" placeholder="请输入手机号" class="inpuClass">
                </div>
            </div>
            <div class="inputMobile display_csb">
                <div class="display_cfs">
                    <div class="name">验证码</div>
                    <input type="text" v-model="code" placeholder="请输入验证码" class="inpuClass">
                </div>
                <div class="code" @click="getCode">{{codeMsg}}</div>
            </div>
            <div class="inputMobile display_csb">
                <div class="display_cfs">
                    <div class="name">密码</div>
                    <input type="text" v-model="password" placeholder="请输入密码" class="inpuClass">
                </div>
                <img src="../../common/images/index/eye.png" class="delete">
            </div>
            <div class="loginText">登陆密码为字母或数字</div>
            <div class="btnLogin display_cc" @click="register">注册</div>
        </div>
    </div>
</template>

<script>
    import {apiAddress} from "@/utils/apiAddress"
    import commmon from "@/common/js/common"
    export default {
        data() {
            return {
                title:"注册",
                codeMsg:"获取验证码",
                phone:"",//手机号码
                code:"",//验证码
                sending: true, //是否发送验证码
                disabled: false, //是否禁发验证码
                second: 60, //倒计时间
                result: null,
                password:""
            }
        },
        created(){
            clearInterval(this.result);
        },
        methods:{
            //注册
            register(){
                let data={
                    code:this.code,
                    mobile:this.phone,
                    password:this.password
                }
               
                let phone=this.phone;
                let isMobile=commmon.checkMobile(phone)
                if(!isMobile){
                    this.$toast({
                        message: "手机号码格式不正确！",
                        position:"bottom"
                    })
                    return
                }
                let code=this.code;
                
                if(!code){
                    this.$toast({
                        message: "验证码不能为空",
                        position:"bottom"
                    })
                    return
                }
                let password=this.password
                if(!password){
                    this.$toast({
                        message: "密码不能为空",
                        position:"bottom"
                    })
                    return
                }
                console.log(data)
                apiAddress.register(data).then((result)=>{
                    if(result.code==1){
                        this.$store.state.loginInfo=result.data.userinfo;
                        this.$toast({
                            message: "注册成功",
                            position:"bottom"
                        })
                        localStorage.setItem("loginInfo",JSON.stringify(result.data.userinfo))
                        this.$router.push({
                            name:"main"
                        })
                    }else{
                        this.$toast({
                            message: result.msg,
                            position:"bottom"
                        })
                    }
                })
            },
            //获取验证码
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
                
                if (document.getElementById("register")) {
                    document.getElementById("register").style.height =
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
            
            if (document.getElementById("register")) {
                document.getElementById("register").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.register{
    background-color: #fff;
    .registerView{
        padding-top: pxTorem(63px);
        margin: 0 pxTorem(40px);
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
                width: pxTorem(17px);
                height: pxTorem(12px);
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
        .loginText{
            font-size:pxTorem(13px);
            font-weight: normal;
            font-stretch: normal;
            color: #999999;
            padding: pxTorem(32px) 0 pxTorem(38px) 0;
        }
        .btnLogin{
            margin-top: pxTorem(54px);
            background-color: #2ca7fa;
            border-radius: pxTorem(2px);
            font-size: pxTorem(16px);
            color: #fff;
            padding: pxTorem(10px) 0;
            padding-bottom: pxTorem(11px);
        }
    }
}
</style>