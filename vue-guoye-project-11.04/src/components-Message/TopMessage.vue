<template>
    <div class="twoMessage">
        <a href="#">发现群</a>
        <a href="#" style="margin-left: 59px;color: #b8b6b6;">通知</a>
        <a href="#" style="border-bottom: 3px solid #f5445f;">消息</a>
        <img class="twoMessageimg1" src="../assets/xiaoxi/1.png" alt="">
        <img class="twoMessageimg2" src="../assets/xiaoxi/2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopMessage"
    }
</script>

<style scoped>
    .twoMessage {
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #f5f5f5;
    }

    .twoMessage a {
        font-size: 0.15rem;
        color: black;
        padding-top: 0.05rem;
    }
    .twoMessageimg1 {
        width: 30px;
        height: 30px;
    }

    .twoMessageimg2 {
        width: 30px;
        height: 30px;
    }

</style>