<template>
    <div class="twof">
        <div style="    display: flex;
            width: 63%;
            justify-content: space-around;"><p class="twopf1">热点</p>

            <p class="twopf2">话题</p>
            <p class="twopf2">榜单</p>
            <p class="twopf2">超话</p></div>



    </div>
</template>

<script>
    export default {
        name: "Middum"
    }
</script>

<style scoped>
    .twof{

        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        justify-content: space-around;
        background: rgb(245, 245, 245);
        height: 0.5rem;
        line-height: 0.55rem;
        margin-top: -0.31rem;
        border-bottom: 1px solid #e6e2e2;
        border-top: 0.11rem solid #e9e8e8;

    }
    .twopf1{
        font-size: 0.2rem;
        position: relative;
        border-bottom: 4px solid rgb(255, 149, 39);
    }
    .twopf2{
        font-size: 0.18rem;
        color:rgb(147, 147, 147)
    }
</style>