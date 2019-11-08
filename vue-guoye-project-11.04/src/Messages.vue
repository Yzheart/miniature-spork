<template>
    <div>
        <TopMessage></TopMessage>
        <TopsMessage></TopsMessage>
        <EndFind></EndFind>
        <MidMessages></MidMessages>
        <MidsMessages></MidsMessages>
        <FootMessage></FootMessage>
    </div>

</template>

<script>
    import TopMessage from "./components-Message/TopMessage";
    import EndFind from "./components-wfind/EndFind";
    import TopsMessage from "./components-Message/TopsMessage";
    import MidMessages from "./components-Message/MidMessages";
    import MidsMessages from "./components-Message/MidsMessages";
    import FootMessage from "./components-Message/FootMessage";
    export default {
        name: "Messages",
        components: {FootMessage, MidsMessages, MidMessages, TopsMessage, EndFind, TopMessage}
    }
</script>

<style scoped>

</style>