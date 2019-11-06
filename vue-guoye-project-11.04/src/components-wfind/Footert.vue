<template>
    <div class="footerf3">
        <a :href="'#/Video'"><img src="../assets/Find/未标题-1.png" alt=""><br>
            找人</a>
        <a href="#"><img src="../assets/Find/未标题-2.png" alt=""><br>
            同城</a>
        <a href="#"><img src="../assets/Find/未标题-3.png" alt=""><br>
            游戏</a>

        <a href="#"><img src="../assets/Find/未标题-4.png" alt=""><br>
            直播</a>

        <a href="#"><img class="endimg" src="../assets/Find/未标题-5.png" alt=""><br>
            电影</a>
        <a href="#"><img class="endimg" src="../assets/Find/未标题-6.png" alt=""><br>
            更多</a>



    </div>
</template>

<script>
    export default {
        name: "Footert"
    }
</script>

<style scoped>
    .footerf3{
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 0.1rem;
        margin-bottom: 0.1rem
    }
    .footerf3 a{
        width: 7%;
        font-size: 0.11rem;
        margin-top: -1px;
        color: black;
        text-align: center;

    }
    a:hover{
        color: lightpink;
    }
    .footerf3 img{
        width: 167%;
        padding-top: 0.05rem;
        margin-left: -7px;
    }
    .endimg{
        margin-left: 0.03rem;
    }
</style>