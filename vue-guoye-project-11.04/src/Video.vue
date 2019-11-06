<template>
    <div>
        <HeaderV></HeaderV>
        <SmallPortraitV></SmallPortraitV>
        <edc></edc>
        <AdvertisingWordsV></AdvertisingWordsV>
<Endimgv></Endimgv>
        <EndSunrise></EndSunrise>
        <EndFind></EndFind>
    </div>

</template>

<script>
    import HeaderV from "./components-video/HeaderV";
    import SmallPortraitV from "./components-video/SmallPortraitV";
    import Edc from "./components-video/edc";
    import AdvertisingWordsV from "./components-video/AdvertisingWordsV";
    import Endimgv from "./components-video/Endimgv";
    import EndSunrise from "./components-video/EndSunrise";
    import EndFind from "./components-wfind/EndFind";




    export default {
        name: "Video",
        components:{
            EndFind,
            EndSunrise,
            Endimgv,
            AdvertisingWordsV,
            Edc,
            SmallPortraitV,
            HeaderV,


        }
    }

</script>

<style scoped>
    @import "components-video/video.css";

</style>