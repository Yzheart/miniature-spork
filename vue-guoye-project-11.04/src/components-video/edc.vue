<template>
   <div>
       <div class="newaddv">
           <p class="p1">我在追的专辑</p>
           <p class="p2">全部</p>
           <img src="../assets/Video/8.png" alt="">
       </div>
       <div class="threev">
           <img class="threevimg6" src="../assets/Video/4.png" alt="">

       </div>
   </div>
</template>

<script>
    export default {
        name: "edc"
    }
</script>

<style scoped>
    .newaddv{
        background: rgb(250, 250, 250);
        border-top: 1px solid rgb(205, 205, 205);
        width: 100%;
        display: flex;
        justify-content: space-between;

    }
    .p1{
        font-size: 0.15rem;
        margin-top: 8px;
        margin-left: 0.13rem;
    }
    .p2{
        font-size: 0.12rem;
        color: silver;
        margin-top: 8px;
        margin-left: 207px;
    }
    .newaddv img{
        width: 5%;
        height: 17px;
        margin-top: 8px
    }
    .threevimg6{
        width: 100%;
        height: 75px;
        margin-top: 0.09rem;
        position: relative;
        right: 3px;
    }
    .threev{
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        justify-content: space-around;
        background: rgb(250, 250, 250);
        height: 1rem;
        border-bottom: 8px solid rgb(241, 241, 241);   }
</style>