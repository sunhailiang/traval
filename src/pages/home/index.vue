<template>
  <div>
    <HomeHeader :city='city' />
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
export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  mounted () {
    this.getHomeInfo()
    this.getCityInfo()
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      if (res.data.ret && res.data.data) {
        var resData = res.data.data
        this.swiperList = resData.swiperList
        this.iconList = resData.iconList
        console.log(this.iconList)

        this.recommendList = resData.recommendList
        this.weekendList = resData.weekendList
      }
    },
    getCityInfo () {
      axios.get('/api/city.json').then(
        this.getCity
      )
    },
    getCity (res) {
      var data = res.data
      console.log(data)
      if (data.ret && data.data) {
        var cityData = data.data
        this.city = cityData.hotCities[0].name
      }
    }
  }
}
</script>
