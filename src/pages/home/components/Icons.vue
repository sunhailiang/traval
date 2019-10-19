<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="item of pages"
                    :key="item.id">
        <div class="icon"
             v-for="icon of item"
             :key="icon.id">
          <img :src="icon.iconUrl"
               alt="">
          <span>{{icon.des}}</span>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>
<script>

export default {
  name: 'HomeIcons',
  data () {
    return {
      icons: [
        { id: '0', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', 'des': '景点门票' },
        { id: '1', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png', 'des': '水上乐园' },
        { id: '2', iconUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3ef092d0a89ffddb7f781cda30c8ae49.png', 'des': '暑期大促' },
        { id: '3', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/f5/c4c9d9830404e602.png', 'des': '室内娱乐' },
        { id: '4', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', 'des': '一日游' },
        { id: '5', iconUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/0f18f305d448365942f04b085d8f58bb.png', 'des': ' 上海玛雅水公园' },
        { id: '6', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png', 'des': '上海野生' },
        { id: '7', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png', 'des': '上海迪士尼上海迪士尼海迪士尼' },
        { id: '8', iconUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png', 'des': '上海野生' }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((el, index) => {
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
