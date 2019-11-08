<template>
    <div class="Minpp">
        <div class="footmer3">
            <a><img src="../assets/Me/5.png" alt=""><br>
                我的相册</a>
            <a><img src="../assets/Me/6.png" alt=""><br>
                我的故事</a>
            <a><img src="../assets/Me/7.png" alt=""><br>
                我的赞</a>

            <a><img src="../assets/Me/8.png" alt=""><br>
                粉丝服务</a>


        </div>
        <div class="footmer4">
            <a><img src="../assets/Me/9.png" alt=""><br>
                微博钱包</a>
            <a><img src="../assets/Me/10.png" alt=""><br>
                微博优选</a>
            <a><img src="../assets/Me/16.png" alt=""><br>
                粉丝头条</a>

            <a><img src="../assets/Me/17.png" alt=""><br>
                客服中心</a>


        </div>

    </div>
</template>

<script>
    export default {
        name: "MidMe"
    }
</script>

<style scoped>
    .Minpp{
        height: 1.75rem;
        display: flex;
        border-bottom: 11px solid rgb(230, 228, 228);
        flex-wrap: wrap;
    }
    .footmer3{
        display: flex;
        width: 100%;
        justify-content: space-around;

        bottom: 3.8rem;
    }
    .footmer3 a{
        width: 12%;
        font-size: 0.11rem;
        margin-top: -1px;
        color: black;
        text-align: center;

    }
    .footmer3 img{
        width: 100%;
        padding-top: 0.05rem;
        margin-left: 1px;
    }
    .footmer4{
        display: flex;
        width: 100%;
        justify-content: space-around;


    }
    .footmer4 a{
        width: 12%;
        font-size: 0.11rem;
        margin-top: -1px;
        color: black;
        text-align: center;

    }
    .footmer4 img{
        width: 100%;
        padding-top: 0.05rem;
        margin-left: 1px;
    }
</style>