<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons }
}
</script>
