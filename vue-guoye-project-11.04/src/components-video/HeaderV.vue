<template>
    <div class="two">
        <p class="twop1">精选</p>
        <p class="twop2">故事</p>
        <p class="twop2">美食</p>

        <p class="twop2">时装美妆</p>

        <p class="twop2">游戏</p>

    </div>
</template>

<script>
    export default {
        name: "HeaderV"
    }
</script>

<style scoped>
    .two{
        width: 100%;
        display: flex;
        /* justify-content: space-between; */
        justify-content: space-around;
        background: rgb(245, 245, 245);
        height: 0.35rem;

    }
    .twop1{
        font-size: 0.25rem;
        font-weight: 600;
        position: relative;
        bottom: 5px;
        color:  rgb(255, 149, 39);
        left: 5px;
    }
    .twop2{
        font-size: 0.18rem;
        color:rgb(147, 147, 147)
    }
</style>