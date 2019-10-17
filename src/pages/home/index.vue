<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
    <HomeRecomment/>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecomment }
}
</script>
