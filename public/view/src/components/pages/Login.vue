<template>
    <div class="login" ref="login" id="login">
        <Head :title="title"></Head>
        <div class="loginView">
            <div class="logo display_cc">
                <!-- <img src="../../common/images/index/logo.png" alt=""> -->
            </div>
            <div class="inputMobile display_csb">
                <div class="display_cfs">
                    <div class="name ">手机号</div>
                    <input type="text" v-model="mobile" placeholder="请输入手机号" class="inpuClass">
                </div>
                <img src="../../common/images/index/delete.png" class="delete" @click="deleteMobile">
            </div>
            <div class="inputMobile display_cfs">
                <div class="name">密码</div>
                <input type="password" v-model="password" placeholder="请输入密码" class="inpuClass">
            </div>
            <div class="btnLogin display_cc" @click="login">登录</div>
            <div class="bottomBar display_csb">
                <div class="bar" @click="goRegister">手机快速注册</div>
                <div class="bar" @click="goEditPassword">忘记密码</div>
            </div>
            <div class="wchat display_ccfc">
                <img src="../../common/images/index/wchat.png" class="wchatImg">
                <div class="wchattext">微信登录</div>
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
                title:"登录",
                mobile:"",//手机号
                password:"",//密码
            }
        },
        methods: {
            deleteMobile(){
                this.mobile=""
            },
            login(){
                let data={
                    account:this.mobile,
                    password:this.password
                }
                let phone=this.mobile;
                let isMobile=commmon.checkMobile(phone)
                if(!phone){
                    this.$toast({
                        message: "手机号码格式不正确！",
                        position:"bottom"
                    })
                    return
                }
                if(!this.password){
                    this.$toast({
                        message: "密码不能为空！",
                        position:"bottom"
                    })
                    return
                }
                apiAddress.login(data).then((result)=>{
                    if(result.code==1){
                        
                        this.$toast({
                            message: "登录成功",
                            position:"bottom"
                        })
                        
                        this.$store.state.loginInfo=result.data.userinfo;

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
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                if (document.getElementById("login")) {
                    document.getElementById("login").style.height =
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
            goRegister() {
                this.$router.push({name:"register"})
            },
            goEditPassword(){
                this.$router.push({name:"editPassword"})
            }
        },
        mounted() {
            this.init();
            document.getElementsByTagName("html")[0].style.height =
            window.innerHeight + "px";
            
            if (document.getElementById("login")) {
                document.getElementById("login").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.login{
    background-color: #fff;
    .loginView{
        padding-top: pxTorem(45px);
        margin: 0 pxTorem(40px);
        .logo{
            height: pxTorem(131px);
            border-bottom: solid 1px #e6e6e6;
        }
        .inputMobile{
            padding: pxTorem(14px) 0;
            border-bottom: solid 1px #e6e6e6;
            .inpuClass{
                border: 0;
                outline: 0;
                width: pxTorem(174px);
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
                width: pxTorem(18px);
                height: pxTorem(18px);
                padding-right: pxTorem(10px);
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
        .btnLogin{
            margin-top: pxTorem(54px);
            background-color: #2ca7fa;
            border-radius: pxTorem(2px);
            font-size: pxTorem(16px);
            color: #fff;
            padding: pxTorem(10px) 0;
            padding-bottom: pxTorem(11px);
        }
        .bottomBar{
            margin-top: pxTorem(16px);
            font-size: pxTorem(12px);
            color: #2ca7fa;
        }
        .wchat{
            margin-top: pxTorem(122px);
            font-size:pxTorem(12px);
            color: #333333;
            .wchatImg{
                width: pxTorem(34px);
                height: pxTorem(26px);
                margin-bottom: pxTorem(28px);
            }
        }
    }
}
</style>