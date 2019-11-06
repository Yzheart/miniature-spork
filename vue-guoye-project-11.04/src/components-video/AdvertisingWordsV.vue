<template>

        <div class="six">
            <div class="six-1">
                <img class="six-1-img1" src="../assets/7.png" alt="">
                <p class="six-1-txt11">XUEJOKER717

                </p>
                <img class="water" src="../assets/Video/9.png" alt="">
                <button class="btn"><span>＋关注</span></button>
                <p class="txt2">共45个视频·薛之谦超话粉丝大咖</p>
                <a class="txt3" href="#">我的故事</a>
                <a class="txt4" href="#">我的美食...</a>
                <a class="txt5" href="#">韩火火</a>
                <a class="txt6" href="#">火箭少女1...</a>


            </div>

        </div>

</template>

<script>
    export default {
        name: "AdvertisingWordsV"
    }
</script>

<style scoped>
    .six{
        display: flex;
    }
    .six-1{
        display: flex;
    }
    .six-1-img1{
        width: 15%;
        margin: 0.1rem;
        height: 49px;}
    .six-1-txt11{
        font-size: 0.15rem;
        height: 0.2rem;
        position: relative;
        top: 14px;
    }
    .water{
        height: 20px;
        width: 20px;
        margin-left: 170px;
        margin-top: 0.1rem;
    }
    .txt2{
        font-size: 0.12rem;
        color: rgb(147, 147, 147);
        /* width: 173px; */
        height: 20px;
        position: absolute;
        top: 2.51rem;
        left: 0.76rem;
        letter-spacing: 0.01rem;
    }
    .txt3{
        font-size: 0.11rem;
        color: rgb(15, 14, 14);
        /* width: 173px; */
        height: 20px;
        position: absolute;
        top: 185px;
        left: 15px;
    }
    .txt4{
        font-size: 0.11rem;
        color: rgb(15, 14, 14);
        /* width: 173px; */
        height: 20px;
        position: absolute;
        top: 185px;
        left: 85px;
    }
    .txt5{
        font-size: 0.11rem;
        color: rgb(15, 14, 14);
        /* width: 173px; */
        height: 20px;
        position: absolute;
        top: 185px;
        left: 165px;
    }
    .txt6{
        font-size: 0.11rem;
        color: rgb(15, 14, 14);
        /* width: 173px; */
        height: 20px;
        position: absolute;
        top: 185px;
        left: 230px;
    }
    .btn{
        border-radius: 15px;
        border: 0;
        border: 1px solid rgb(255, 149, 39);
        background-color: white;
        width: 70px;
        height: 28px;
        margin-left: -84px;
        margin-top: 17px;
    }
    .btn span{
        color: rgb(255, 149, 39);
    }
</style>