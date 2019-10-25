<template>
  <div class="list"
       ref='wrapper'>
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id">
            <div class="button"
                 @click='handleHotCityClick(item.name)'>{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for='(item,key) of cities'
           :key='key'
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="city in item"
             :key="city.id"
             @click='handleCityClick(city.name)'>
          <div class="item border-bottom">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array,
    alpha: String
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {

    handleHotCityClick (city) { // 选择热门城市
      this.changeCity(city)
      this.$router.push({ path: '/' })
    },
    handleCityClick (city) { // 选择城市
      this.changeCity(city)
      this.$router.push({ path: '/' })
    },
    ...mapMutations(['changeCity']) // 直接处理
  },
  watch: {
    alpha () {
      if (this.alpha) {
        console.log(this.alpha)

        // 取出我们要得dom
        var el = this.$refs[this.alpha][0]
        // 跳转到我们想要得位置
        this.scroll.scrollToElement(el)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
.list
  overflow hidden
  position absolute
  top 1.68rem
  left 0
  bottom 0
  right 0
.title
  line-height 0.46rem
  background #eee
  padding-left 0.2rem
  color #666
  font-size 0.26rem
.border-topbottom
  &:before
    background-color #666666
  &:after
    background-color #666666
.border-bottom
  &:before
    background-color #666666
.button-list
  overflow hidden
  padding 0.1rem 0.6rem 0.1rem 0.1rem
.button-wrapper
  width 33.33%
  float left
.button
  text-align center
  margin 0.1rem
  border 0.02rem solid #666
  border-radius 0.06rem
  padding 0.05rem
.item
  line-height 0.78rem
  padding-left 0.2rem
</style>
