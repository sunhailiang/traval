<template>
  <div>
    <Header/>
    <Search/>
    <List :cities='cities'
          :hotCities='hotCities'
          :alpha='alpha'
          @change='handleAlphaMoveChange' />
    <Alphabet :cities='cities'
              @change="handleAlphaChange" />
  </div>
</template>
<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      alpha: ''
    }
  },
  components: { Header, Search, List, Alphabet },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    handleAlphaChange (alpha) {
      // 监听点击字母
      this.alpha = alpha
    },
    handleAlphaMoveChange (alpha) {
      // 监听手指滑动
      this.alpha = alpha
    },
    getCityInfo () {
      axios.get('/api/city.json').then(
        this.getCity
      )
    },
    getCity (res) {
      var data = res.data
      if (data.ret && data.data) {
        var cityData = data.data

        this.cities = cityData.cities
        this.hotCities = cityData.hotCities
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
