<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
    <HomeRecomment/>
    <HomeWeekend/>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecomment, HomeWeekend }
}
</script>
