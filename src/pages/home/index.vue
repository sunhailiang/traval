<template>
  <div>
    <HomeHeader/>
    <HomeSwiper :swiperList='swiperList' />
    <HomeIcons :iconList='iconList' />
    <HomeRecommend :recommendList='recommendList' />
    <HomeWeekend :weekendList='weekendList' />
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  mounted () {
    this.lastCity = this.city // 在返回组件时mounted不会执行，所以lastCity存储得上一个城市
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()// 重新请求信息
    }
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.lastCity).then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      if (res.data.ret && res.data.data) {
        var resData = res.data.data
        this.swiperList = resData.swiperList
        this.iconList = resData.iconList
        this.recommendList = resData.recommendList
        this.weekendList = resData.weekendList
      }
    }
  }
}
</script>
