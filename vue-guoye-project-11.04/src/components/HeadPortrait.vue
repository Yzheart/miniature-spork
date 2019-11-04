<template>
    <div class="six">
    <div class="six-1">
    <img class="six-1-img1" src="../assets/7.png" alt="">
    <p class="six-1-txt1">薛之谦<img style="    width: 24%;
    position: relative;
    top: 2px" src="../assets/8.png" alt=""></p>
        <SmallPortrait></SmallPortrait>


    </div>
    </div>
</template>

<script>
    import SmallPortrait from '../components/SmallPortrait.vue'
    // import SmallPortrait from "./SmallPortrait";

    export default {
        name: "HeadPortrait",
        components: {SmallPortrait},
        comments:{
            SmallPortrait

        }
    }
</script>

<style scoped>

</style>