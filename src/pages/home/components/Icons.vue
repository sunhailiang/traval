<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="item of pages"
                    :key="item.id">
        <div class="icon"
             v-for="icon of item"
             :key="icon.id">
          <img :src="icon.imgUrl"
               alt="">
          <span>{{icon.desc}}</span>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>
<script>

export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((el, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(el)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.icons
  overflow hidde
  .icon
    position relative
    float left
    width 24.95vw
    height 25vw
    text-align center
    line-height 25vw
    img
      width 13vw
      height 13vw
      position absolute
      left 6vw
      top 2vw
    span
      width 18vw
      display inline-block
      line-height 10vw
      margin-top 13.5vw
      ellipsis()
</style>
