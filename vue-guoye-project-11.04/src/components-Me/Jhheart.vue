<template>
    <div class="inph">
    <Heart></Heart>
    <Hearts></Hearts>
    </div>
</template>

<script>
    import Heart from "./Heart";
    import Hearts from "./Hearts";
    export default {
        name: "Jhheart",
        components: {Hearts, Heart}
    }
</script>

<style scoped>
    .inph {
        height: 1.35rem;
        display: flex;
        border-bottom: 11px solid rgb(230, 228, 228);
        border-top: 11px solid rgb(230, 228, 228);
        flex-wrap: wrap;
    }
</style>