<template>
    <div>
        <HelloWorld></HelloWorld>
        <HeaderGY></HeaderGY>
        <UpperMiddle></UpperMiddle>
        <HeadPortrait></HeadPortrait>
        <AdvertisingWords></AdvertisingWords>
        <AdvertisingImages></AdvertisingImages>
        <EndContent></EndContent>

    </div>




</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderGY from './components/Header.vue'
import UpperMiddle from './components/Mid.vue'
import HeadPortrait from './components/HeadPortrait.vue'
import AdvertisingWords from './components/AdvertisingWords.vue'
import AdvertisingImages from './components/AdvertisingImages.vue'
import EndContent from './components/EndContent.vue'






export default {
  name: 'HomePage',
  components: {
    HelloWorld,
     HeaderGY,
      UpperMiddle,
      HeadPortrait,
      AdvertisingWords,
      AdvertisingImages,
      EndContent
  }
}
</script>

<style scoped>
@import "components/hi.css";
</style>
