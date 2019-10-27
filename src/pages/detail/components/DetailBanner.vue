<template>
  <div>
    <div class="banner"
         @click="handleShowGallary">
      <img class="banner-img"
           :src="bannerImg"
           alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe609;</span>{{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimate>
      <Gallary :imgs='gallaryImgs'
               v-show="showGallary"
               @close='handleCloseGallary' />
    </FadeAnimate>
  </div>
</template>
<script>
import Gallary from 'common/components/gallary/Gallary'
import FadeAnimate from 'common/components/fade/FadeAnimate'
export default {
  name: 'DetailBanner',
  components: { Gallary, FadeAnimate },
  props: {
    bannerImg: {
      type: String,
      default () {
        return ''
      }
    },
    sightName: String,
    gallaryImgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  },
  data () {
    return {
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/9e1f64a4-27e6-4cc1-bdf0-22a6832b82eb.jpg_r_1280x840x90_d8f72487.jpg',
        'https://img1.qunarzz.com/vs_ceph_vs_tts/dcb82629-3704-4335-a0c8-cd924b02ed00.jpg_r_1280x840x90_b9bf6acb.jpg']
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.banner
  overflow hidden
  height 0
  padding-bottom 55%
  position relative
  .banner-img
    width 100%
  .banner-info
    color #fff
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  .banner-title
    flex 1
    padding 0 0.2rem
    font-size 0.32rem
  .banner-number
    padding 0 0.4rem
    height 0.32rem
    line-height 0.32rem
    border-radius 0.2rem
    background rgba(0, 0, 0, 0.8)
    font-size 0.24rem
    margin 0.15rem 0.2rem 0 0
  .banner-icon
    font-size 0.24rem
    margin 0.05 0.07rem
</style>
