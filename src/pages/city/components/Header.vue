<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont icon-back">&#xe71b;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.header
  overflow hidden
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
