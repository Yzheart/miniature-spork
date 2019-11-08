<template>
    <div class="twom">
        <img class="twoimg1" src="../assets/Me/1.png" alt="">
        <a href="#" style="margin-left: 59px;">我</a>
        <img class="twoimg3" src="../assets/Me/2.png" alt="">
        <img class="twoimg2" src="../assets/xiaoxi/2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopMe"
    }
</script>

<style scoped>
    .twom {
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #f5f5f5;
    }
    .twom a {
        font-size: 0.15rem;
        color: black;
        padding-top: 0.05rem;
    }
    .twoimg1 {
        width: 0.39rem;
        height: 0.3rem;
    }
    .twoimg3 {
        width: 0.39rem;
        height: 0.3rem;

        position: relative;
        top: 0.04rem;
        left: 0.43rem;
    }

    .twoimg2 {
        width: 30px;
        height: 30px;
    }

</style>