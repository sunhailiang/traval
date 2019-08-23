<template>
  <div class="wraper">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: { el: '.swiper-pagination' },
        loop: true
      },
      swiperList: [
        { id: '01', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/01549e224da474a72681614810d07860.jpg_750x200_47325a53.jpg' },
        { id: '02', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/0645bd625b46216a55e3835d0f677ce2.jpg_750x200_1e9a0cbf.jpg' },
        { id: '03', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/17f03cb7c7d8c1de2d87a2a6afaa5e45.jpg_750x200_4a689034.jpg' },
        { id: '04', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/5e904edf76a0e8c9750d033c04b54b63.jpg_750x200_5c5c222e.jpg' },
        { id: '05', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/62f6d661d9b51502bb46d90fc9c2d626.jpg_750x200_d04ab2c2.jpg' }
      ]
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
