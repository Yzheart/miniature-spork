<template>
    <div>
    <div class="threeMS">
        <img class="threeMsimg1" src="../assets/xiaoxi/3.png" alt="">
        <div class="threeMs-2">
            <p>@我的</p>
            <img src="../assets/Video/8.png" alt="">
        </div>
    </div>
    <div class="threeMS">
        <img class="threeMsimg1" src="../assets/xiaoxi/4.png" alt="">
        <div class="threeMs-2">
            <p>评论</p>
            <img style="margin-left: 213px;" src="../assets/Video/8.png" alt="">
        </div>
    </div>
    <div class="threeMS">
        <img class="threeMsimg1" src="../assets/xiaoxi/5.png" alt="">
        <div class="threeMs-2">
            <p>赞</p>
            <img style="margin-left: 226px;" src="../assets/Video/8.png" alt="">
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "MidMessages"
    }
</script>

<style scoped>
    .threeMS{
        display: flex;
        height: 63px;
    }
    .threeMs-2{
        width: 100%;
        display: flex;
        border-bottom: 1px solid gainsboro;
    }
    .threeMsimg1{
        width: 12%;
        margin: 0.1rem;
    }
    .threeMs-2 p{
        font-size: 0.16rem;
        margin: 0.15rem;
    }
    .threeMs-2 img{
        width: 9%;
        height: 0.2rem;
        margin-top: 0.15rem;
        margin-left: 1.99rem;

    }
</style>