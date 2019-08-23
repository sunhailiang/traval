<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <div>测试</div>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper }
}
</script>
