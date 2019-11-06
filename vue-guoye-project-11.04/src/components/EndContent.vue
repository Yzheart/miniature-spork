<template>
    <div>
    <div class="footer">
        <img src="../assets/11.png" alt="">

        <img src="../assets/12.png" alt="">

        <img src="../assets/13.png" alt="">

        <img src="../assets/14.png" alt="">
        <img src="../assets/15.png" alt="">


    </div>
    <div class="footer2">
        <a href="#">微博</a>
        <a @click="run">视频</a>

        <a  @click="runf">发现</a>

        <a href="#">消息</a>

        <a href="#">我</a>



    </div>
    </div>
</template>

<script>
    export default {
        name: "EndContent",
        methods:{
            run(){
                this.$router.push({path:'/Video'})
            },
            runf(){
                this.$router.push({path:'/Wfind'})

            }
        }
    }
</script>

<style scoped>
</style>