<template>
    <div class="footerF">
        <a @click="runh"><img src="../assets/Video/6.png" alt=""><br>
            微博</a>
        <a @click="run" ><img src="../assets/Find/12.png" alt=""><br>
            视频</a>
        <a :href="'#/Wfind'"><img src="../assets/13.png" alt=""><br>
            发现</a>

        <a :href="'#/Messages'"><img src="../assets/14.png" alt=""><br>
            消息</a>

        <a :href="'#/MeMe'"><img class="endimg" src="../assets/15.png" alt=""><br>
            我</a>




    </div>
</template>

<script>
    export default {
        name: "EndFind",
        methods:{
            runh(){
                this.$router.push({path:'/'})
            },
            run(){
                this.$router.push({path:'/Video'})

            }
        }
    }
</script>

<style scoped>
    .footerF{
        display: flex;
        width: 100%;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        background-color: rgb(245, 245, 245);
    }
    .footerF a{
        width: 7%;
        font-size: 0.11rem;
        margin-top: -1px;
        color: black;
        text-align: center;

    }
    .footerF img{
        width: 100%;
        padding-top: 5px;;
    }
    .endimg{
        margin-left: 0.03rem;
    }
</style>