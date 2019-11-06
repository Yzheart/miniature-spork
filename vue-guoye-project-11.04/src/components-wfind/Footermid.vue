<template>
    <div class="fsix-1">
        <img class="fsix-1-img1" src="../assets/7.png" alt="">
        <p class="fsix-1-txt1">扒圈皇叔

        </p><img class="fsix-1-img2" src="../assets/Find/7.png" alt="">
        <img class="fwater" src="../assets/Video/9.png" alt="">
        <button @click="popupVisible = true" class="fbtn"><span>＋关注</span></button>
        <p class="ftxt2">36分钟前 来自iPhoneX</p>

        <mt-popup
                style="width: 100%;
    height: 36px;
    background-color: rgb(41, 39, 39);
    z-index: 2013;
    opacity: 0.8;"
                v-model="popupVisible"
                position="top">
           <span class="gz">关注成功</span>
        </mt-popup>
    </div>
</template>

<script>
    export default {
        name: "Footermid",
        data(){
            return {
                popupVisible:false,



            }
        }
    }
</script>

<style scoped>
    .gz{
        font-size: 15px;
        position: fixed;
        left: 1.54rem;
        top: 6px;
        color: white;
    }
    .fbtn{
        border-radius: 0.15rem;
        border: 0;
        border: 1px solid rgb(255, 149, 39);
        background-color: white;
        width: 0.7rem;
        height: 0.28rem;
        margin-left: -110px;
        margin-top: 12px;
    }
    .fbtn span{
        color: rgb(255, 149, 39);
    }
    .fsix-1{
        display: flex;
    }
    .fsix-1-img1{
        width: 14%;
        height: 0.46rem;
        margin: 0.1rem;}
    .fsix-1-img2{
        height: 20px;
        width: 0.64rem;
        margin-left: -0.17rem;
        position: relative;
        bottom: -0.15rem;
        left: 0.2rem;}
    .fsix-1-txt1{
        font-size: 0.15rem;
        color:  rgba(235, 131, 19, 0.87);
        height: 0.2rem;
        position: relative;
        top: 0.14rem;
    }
    .fwater{
        height: 0.2rem;
        width: 0.2rem;
        margin-left: 1.7rem;
        margin-top: 0.1rem;
    }
    .ftxt2{
        font-size: 0.12rem;
        color: rgb(147, 147, 147);
        height: 0.2rem;
        margin-left: -257px;
        margin-top: 39px;
    }
</style>