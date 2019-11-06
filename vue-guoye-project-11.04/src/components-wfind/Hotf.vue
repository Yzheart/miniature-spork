<template>
    <div class="nedda">
        <img src="../assets/Find/1.png" alt="">
        <p class="pf1">微博热搜</p>
        <p class="pf2">全部</p>
        <img src="../assets/Video/8.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "Hotf"
    }
</script>

<style scoped>
    .nedda{
        background: rgb(250, 250, 250);
        border-top: 1px solid rgb(205, 205, 205);
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    .pf1{
        font-size: 0.15rem;
        margin-top: 0.08rem;
        margin-left: 0.13rem;
        color: #868686
    }
    .pf2{
        font-size: 0.12rem;
        color: silver;
        margin-top: 0.08rem;
        margin-left: 2.07rem;
        margin-right: 0.35rem;
    }
    .nedda img{

        height: 17px;
        margin-top: 8px
    }
</style>