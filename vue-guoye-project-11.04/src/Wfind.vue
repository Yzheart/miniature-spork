<template>
    <div>

        <Cool></Cool>
        <Hotf></Hotf>
        <Cloudf></Cloudf>
        <Footert></Footert>
        <Midfzj></Midfzj>
        <Middum></Middum>
        <Footermid></Footermid>
        <EndFind></EndFind>
    </div>

</template>

<script>
    import EndFind from "./components-wfind/EndFind";
    import Cool from "./components-wfind/Cool";
    import Hotf from "./components-wfind/Hotf";
    import Cloudf from "./components-wfind/Cloudf";
    import Footert from "./components-wfind/Footert";
    import Midfzj from "./components-wfind/Midfzj";
    import Middum from "./components-wfind/Middum";
    import Footermid from "./components-wfind/Footermid";


    export default {
        name: "Wfind",
        components: {Footermid, Middum, Midfzj, Footert, Cloudf, Hotf, Cool, EndFind, }
    }
</script>

<style scoped>

</style>