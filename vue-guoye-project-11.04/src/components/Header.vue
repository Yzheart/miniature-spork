<template>
    <div class="two">
    <img @click="sheetVisible = true" class="twoimg2" src="../assets/2.png" alt="">
    <p @click="flag = !flag" class="twop1">关注</p>
        <!--<p @click="fun" class="twop1">关注</p>-->

        <img @click="flag = !flag" class="twoimg3" src="../assets/3.png" alt="">

    <p class="twop2">热门</p>
    <img class="twoimg5" src="../assets/5.png" alt="">

    <img @click="sheetVisible = true" class="twoimg4" src="../assets/4.png" alt="">
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
         <transition><Selecttrans v-if="flag"></Selecttrans></transition>
    </div>
</template>

<script>
import Selecttrans from "./Selecttrans";
export default {
  name: 'Header',
    components: {Selecttrans},
    data(){
        return {
            flag:false,
            popupVisible:false,
            sheetVisible:false,
            actions:[
                {name:'相机'},
                {name:'从相册中选择'}

            ]
        }


    }
}
</script>
<style scoped>
    .v-enter{
        opacity: 0;
        transform: translate3d(0,-200px,0)
    }
    .v-enter-to{
        opacity: 1;
        transform:translate3d(0,0,0)

    }
    .v-enter-active{
        transition: all 2s ease;
    }
    .v-leave{
        opacity: 1;

    }
    .v-leave-to{
        opacity: 0;

    }
    .v-leave-active{
        transition: all 2s ease;

    }
    .xxxxx{
        position: absolute;
        top: .3rem;
        z-index: 999;
    }
</style>