<template>
    <div>

        <HeaderGY></HeaderGY>
        <UpperMiddle></UpperMiddle>
        <HeadPortrait></HeadPortrait>
        <AdvertisingWords></AdvertisingWords>
        <AdvertisingImages></AdvertisingImages>
        <EndFind></EndFind>

    </div>




</template>

<script>
import HeaderGY from './components/Header.vue'
import UpperMiddle from './components/Mid.vue'
import HeadPortrait from './components/HeadPortrait.vue'
import AdvertisingWords from './components/AdvertisingWords.vue'
import AdvertisingImages from './components/AdvertisingImages.vue'
import EndFind from "./components-wfind/EndFind";






export default {
  name: 'HomePage',
  components: {
      EndFind,
     HeaderGY,
      UpperMiddle,
      HeadPortrait,
      AdvertisingWords,
      AdvertisingImages,
  }
}
</script>

<style scoped>
@import "components/hi.css";
</style>
