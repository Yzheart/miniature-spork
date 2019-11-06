<template>
    <div style="display: flex;">
        <div class="threef">
            <a href="#">亲爱的客栈3合影</a><img src="../assets/Find/2.png" alt="">
            <a href="#">幸福实验室探秘</a><img src="../assets/Find/3.png" alt="">
            <a href="#">B站CP排行榜</a><img src="../assets/Find/2.png" alt="">

            <a href="#">五环之歌终审不侵权</a><img src="../assets/Find/2.png" alt="">


        </div>
        <div class="threef2">
            <a href="#">川航一国际航班...</a><img src="../assets/Find/2.png" alt="">
            <a href="#">周杰伦当五月天...</a><img src="../assets/Find/2.png" alt="">
            <a href="#">马云捐一亿元保护...</a><img src="../assets/Find/2.png" alt="">

            <a href="#" style="    color: rgb(239, 134, 25);
                    margin-right: 0.77rem;">更多热搜</a><img src="../assets/Find/2.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cloudf"
    }
</script>

<style scoped>
    .threef{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
        justify-content: space-around;
        background: rgb(250, 250, 250);
        height: 1rem;
        border-bottom: 8px solid rgb(241, 241, 241);
        border-right: 1px solid rgb(213, 211, 211);
        padding-left: 0.1rem;
        justify-content: flex-start;   }
    .threef2{
        width: 50%;
        flex-wrap: wrap;
        padding-left: 0.1rem;
        display: flex;
        justify-content: flex-start;
        justify-content: space-around;
        background: rgb(250, 250, 250);
        height: 1rem;
        border-bottom: 8px solid rgb(241, 241, 241);   }
    .threef a{
        color: black;
        font-size: 0.17rem;
    }
    .threef img{
        width: 0.22rem;
        height: 0.2rem;
    }
    .threef2 a{
        color: black;
        font-size: 0.17rem;
    }
    .threef2 img{
        width: 0.2rem;
        height: 0.2rem;
    }
</style>