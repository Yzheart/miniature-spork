<template>
    <div>
        <HelloWorld></HelloWorld>
        <HeaderV></HeaderV>
<SmallPortraitV></SmallPortraitV>
        <edc></edc>
        <AdvertisingWordsV></AdvertisingWordsV>
    </div>

</template>

<script>
    import HelloWorld from "./components/HelloWorld";
    import HeaderV from "./components-video/HeaderV";
    import SmallPortraitV from "./components-video/SmallPortraitV";
    import Edc from "./components-video/edc";
    import AdvertisingWordsV from "./components-video/AdvertisingWordsV";



    export default {
        name: "Video",
        components:{
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