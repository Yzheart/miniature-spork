<template>
    <div>
    <div class="footer">
        <img src="../assets/Video/6.png" alt="">

        <img src="../assets/Video/7.png" alt="">

        <img src="../assets/Video/13.png" alt="">

        <img src="../assets/Video/14.png" alt="">
        <img src="../assets/Video/15.png" alt="">


    </div>
    <div class="footer2">
        <a @click="runh">微博</a>
        <a href="#">视频</a>
        <a @click="runf">发现</a>

        <a href="#">消息</a>

        <a href="#">我</a>



    </div>
    </div>
</template>

<script>
    export default {
        name: "FootVideo",
        methods:{
            runh(){
                this.$router.push({path:'/'})
            },
            runf(){
                this.$router.push({path:'/Wfind'})

            }
        }
    }
</script>

<style scoped>
    .footer{
        display: flex;
        width: 100%;
        justify-content: space-around;
        position: fixed;
        bottom: 14px;
    }
    .footer img{
        width: 7%;
        padding-top: -34px;
        margin-top: -24px;
    }
    .footer2{
        display: flex;
        width: 100%;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
    }
    .footer2 a{
        width: 7%;
        font-size: 0.11rem;
        padding-top: -34px;
        margin-top: -1px;
        margin-left: 8px;
        color: black;

    }
</style>