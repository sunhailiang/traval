<template>
  <div class="header">
    <router-link to="/">
      <div class="header-abs">
        <span class="iconfont">&#xe71b;</span>
      </div>
    </router-link>
    <div class="header-fixed"
         v-show="showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <div class="header-left">
          <span class="iconfont icon-back">&#xe71b;</span>
        </div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      var top = document.documentElement.scrollTop
      if (top > 60) {
        // 根据距离顶部高度，判断透明度，动态绑定给元素
        let opacity = top / 140
        console.log(opacity)

        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = true
      } else {
        this.showAbs = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  line-height 0.8rem
  border-radius 0.4rem
  text-align center
  background rgba(0, 0, 0, 0.8)
  color white
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height 0.86rem
  line-height 0.86rem
  text-align center
  color #fff
  background $commonBgc
  font-size 0.4rem
  .header-left
    width 0.64rem
    float left
    .icon-back
      color white
      display inline-block
      width 100%
      height 100%
      text-align center
      font-size 0.35rem
</style>
