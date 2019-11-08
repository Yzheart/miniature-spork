<template>
    <div class="inp">
        <input type="text" placeholder="搜你想看的视频">
        <img @click="flag = !flag"  class="inpimg" src="../assets/Video/1.png" alt="">
        <img class="inpimg" src="../assets/Video/2.png" alt="">

        <img class="inpimg" src="../assets/Video/3.png" alt="">

        <transition><Downtrans v-if="flag"></Downtrans></transition>

    </div>
</template>


<script>
    import Downtrans from "./Downtrans";
    export default {
        name: "SmallPortraitV",
        components: {Downtrans},
        data(){
            return {
                flag:false,


            }


        }
    }
</script>

<style scoped>
    /*.v-enter{*/
        /*opacity: 0;*/
        /*transform: translate3d(-200px,0,0)*/
    /*}*/
    /*.v-enter-to{*/
        /*opacity: 1;*/
        /*transform:translate3d(0,0,0)*/

    /*}*/
    /*.v-enter-active{*/
        /*transition: all 1s ease;*/
    /*}*/
    /*.v-leave{*/
        /*opacity: 1;*/

    /*}*/
    /*.v-leave-to{*/
        /*opacity: 0;*/

    /*}*/
    /*.v-leave-active{*/
        /*transition: all 1s ease;*/

    /*}*/
    .xxxxx{
        position: absolute;
        top: .3rem;
        z-index: 999;
    }
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