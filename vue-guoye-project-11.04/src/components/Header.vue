<template>
    <div class="two">
    <img @click="sheetVisible = true" class="twoimg2" src="../assets/2.png" alt="">
    <p class="twop1">关注</p>
    <img class="twoimg3" src="../assets/3.png" alt="">

    <p class="twop2">热门</p>
    <img class="twoimg5" src="../assets/5.png" alt="">

    <img @click="popupVisible = true" class="twoimg4" src="../assets/4.png" alt="">
        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>

    </div>
</template>

<script>
export default {
  name: 'Header',
    data(){
        return {
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

