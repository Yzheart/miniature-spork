<template>
    <div class="inpMessage">
        <input type="text" placeholder="搜索">
        <img class="bM" src="../assets/Video/13.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopsMessage"
    }
</script>

<style scoped>
    .inpMessage {
        height: 0.6rem;
        display: flex;
        background: rgb(227, 227, 227);
    }

    .inpMessage input {
        width: 341px;
        height: 32px;
        border-radius: 9px;
        border: 0;
        margin-left: 20px;
        text-align: center;
        margin-right: 5;
        margin-top: 16px;
    }

    .bM {
        width: 4%;
        height: 0.14rem;
        margin-left: -2.7rem;
        margin-top: 0.25rem;
    }
</style>