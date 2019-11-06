<template>
    <div>
        <HelloWorld></HelloWorld>
        <HeaderV></HeaderV>
        <SmallPortraitV></SmallPortraitV>
        <edc></edc>
        <AdvertisingWordsV></AdvertisingWordsV>
<Endimgv></Endimgv>
        <EndSunrise></EndSunrise>
        <FootVideo></FootVideo>
    </div>

</template>

<script>
    import HelloWorld from "./components/HelloWorld";
    import HeaderV from "./components-video/HeaderV";
    import SmallPortraitV from "./components-video/SmallPortraitV";
    import Edc from "./components-video/edc";
    import AdvertisingWordsV from "./components-video/AdvertisingWordsV";
    import Endimgv from "./components-video/Endimgv";
    import EndSunrise from "./components-video/EndSunrise";
    import FootVideo from "./components-video/FootVideo";




    export default {
        name: "Video",
        components:{
            FootVideo,
            EndSunrise,
            Endimgv,
            AdvertisingWordsV,
            Edc,
            SmallPortraitV,
            HeaderV,
            HelloWorld


        }
    }

</script>

<style scoped>
    @import "components-video/video.css";

</style>