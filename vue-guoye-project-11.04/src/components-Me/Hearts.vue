<template>
    <div class="fours">
        <a href="#"><h3 style="color: black;margin-left: 0.04rem;">73</h3><br>微博</a>
        <a href="#"><h3 style="color: black;margin-left: 0.08rem;">8</h3><br>关注</a>

        <a href="#"><h3 style="color: black;margin-left: 0.08rem;">6</h3><br>粉丝</a>

    </div>
</template>

<script>
    export default {
        name: "Hearts"
    }
</script>

<style scoped>
    .fours{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .fours h3{
        font-size: 0.16rem;

    }
    .fours a{
        width: 30%;
        font-size: 0.15rem;
        color: #a5a4a4;
        line-height: 0.1rem;
        margin-left: 0.5rem;
    }
</style>