<template>
    <div class="companyProfile" id="companyProfile">
       <Head :title="title"></Head>
       <div class="note">
            <div class="context">
                <div class="title">{{info.post_title}}</div>
                <div class="text">
                    {{info.post_content}}
                </div>
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:"公司简介",
                info:{}
            }
        },
        created(){
            this.info=JSON.parse(this.$route.query.info) 
        },
        methods: {
            onClickLeft() {
                
            },
            resizepage() {
                document.getElementsByTagName("html")[0].style.height =
                    window.innerHeight + "px";
                
                if (document.getElementById("companyProfile")) {
                    document.getElementById("companyProfile").style.height =
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
            
            if (document.getElementById("companyProfile")) {
                document.getElementById("companyProfile").style.height =window.innerHeight+"px";
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../common/css/mixin.scss";
.companyProfile{
    background-color: #f5f5f5;
    .note{
        padding-top: pxTorem(60px);
        .context{
            margin: 0 pxTorem(15px);
            background-color: #fff;
            border-radius: pxTorem(5px);
            padding: pxTorem(17px) pxTorem(30px);
            .title{
                color: #333;
                font-size: pxTorem(16px);
                font-weight: bold;
            }
            .text{
                text-indent: pxTorem(13px);
                color: #999;
                font-size: pxTorem(14px);
                margin-top: pxTorem(15px);
                letter-spacing: pxTorem(2px);
            }
        }
    }
}
</style>