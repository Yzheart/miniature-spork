<template>
    <div>
    <TopMe></TopMe>
    <Jhheart></Jhheart>
        <MidMe></MidMe>
        <EdcM></EdcM>
        <along></along>
        <EndFind></EndFind>
    </div>
</template>

<script>
    import TopMe from "./components-Me/TopMe";
    import Jhheart from "./components-Me/Jhheart";
    import MidMe from "./components-Me/MidMe";
    import EdcM from "./components-Me/EdcM";
    import EndFind from "./components-wfind/EndFind";
    import Along from "./components-Me/along";
    export default {
        name: "MeMe",
        components: {Along, EndFind, EdcM, MidMe, Jhheart, TopMe}
    }
</script>

<style scoped>

</style>