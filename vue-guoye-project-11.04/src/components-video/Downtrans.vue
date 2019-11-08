<template>




    <div style='width: 65%;background-color: rgb(238,238,238);position: absolute;top: .3rem; z-index: 999;height: 90%' >
        <div style="text-align: center;height: 50px;margin-top: -76px;">
            <a :href="'#Video'" style="color: #939393; font-size: 0.12rem;margin-top: 20px ">离线缓存</a>
        </div>
<img style="     margin-left: 64px;
    margin-top: 200px;
    width: 50%;" src="../assets/Video/down.png">
        <p style="color: #939393; font-size: 0.12rem;    margin-left: .5rem;">缓存的视频会显示在这里</p>
<div style="   margin-top: 1.5rem;background-color: #e6e5e5;">
    <p style=" font-size: 0.09rem;color: rgb(90, 90, 90);margin-left: .8rem;">可用空间:11.16G</p></div>
    </div>





</template>

<script>
    export default {
        name: "Downtrans",
        data(){
            return {


                flag:false

            }
        },
        methods:{
            show(){

            }
        },
        comments:{

        }

    }
</script>

<style scoped>

    .v-enter{
        opacity: 0;
        transform: translate3d(-200px,0,0)
    }
    .v-enter-to{
        opacity: 1;
        transform:translate3d(0,0,0)

    }
    .v-enter-active{
        transition: all 1.5s ease;
    }
    .v-leave{
        opacity: 1;

    }
    .v-leave-to{
        opacity: 0;
        transform:translate3d(-200px,0,0)

    }
    .v-leave-active{
        transition: all 1.5s ease;

    }

</style>