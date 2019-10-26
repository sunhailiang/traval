<template>
  <div class="container"
       @click="handleCloseGallary">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs"
                      :key="index">
          <img class="gallary-img"
               :src="item"
               alt="">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          // 默认图片

        ]
      }
    }
  },
  methods: {
    handleCloseGallary () {
      this.$emit('close')
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: { el: '.swiper-pagination', type: 'fraction' },
        loop: true,
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  z-index 9
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background #000
  .wrapper
    color white
    height 0
    width 100%
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      bottom -1rem
</style>
