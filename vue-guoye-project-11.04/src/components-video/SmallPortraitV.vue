<template>
    <div class="inp">
        <input type="text" placeholder="搜你想看的视频">
        <img class="inpimg" src="../assets/Video/1.png" alt="">
        <img class="inpimg" src="../assets/Video/2.png" alt="">

        <img class="inpimg" src="../assets/Video/3.png" alt="">



    </div>
</template>

<script>
    export default {
        name: "SmallPortraitV"
    }
</script>

<style scoped>
    .inp{
        height: 40px;
        display: flex;

        background: rgb(245, 245, 245);}
    .inp input{
        width: 225px;
        height: 27px;
        border-radius: 9px;
        border: 0;
        margin-left: 20px;
        text-align: center;
    }

    .inpimg{
        margin-left: 6px;
        width: 37px;
        height: 30px;
    }
    .b{
        width: 4%;
        height: 14px;
        /* margin-right: 163px; */
        position: fixed;
        margin-left: 68px;
        margin-top: 6px
    }
</style>