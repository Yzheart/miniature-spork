<template>
    <div>
    <div class="threeMS" style="margin-bottom: 63px;">
        <img class="threeMsimg1" src="../assets/xiaoxi/9.png" alt="">
        <div class="threeMs-2">
            <p>订阅消息</p><br>
            <p style="font-size: 0.13rem;color: #a5a4a4;margin-top: 0.4rem;margin-left: -0.79rem;">realme华强:realme你妈炸了博</p>
            <p style="font-size: 0.13rem;color: #a5a4a4;margin-left: 0.54rem;">9-18</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "FootMessage"
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