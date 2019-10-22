<template>
  <div class="wraper">
    <swiper :options="swiperOption"
            v-if="swiperList.length>0">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList'
                    :key='item.id'><img class="swiper-img"
             :src="item.imgUrl"
             alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: { el: '.swiper-pagination' },
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wraper>>>.swiper-pagination-bullet-active
  background-color white
.swiper-img
  width 100%
</style>
