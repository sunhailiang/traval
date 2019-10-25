<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe71b;</span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-search">&#xe6a2;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont  icon-arrow">&#xe615;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['double'])
  },
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.header
  display flex
  line-height 0.86 rem
  background-color #00bcd4
  color #fff
  .header-left
    width 0.64rem
    float left
    .icon-back
      display inline-block
      width 100%
      height 100%
      text-align center
      font-size 0.35rem
  .header-input
    flex 1
    background #fff
    border-radius 0.1rem
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    color #ccc
    .icon-search
      display inline-block
      margin-left 0.15rem
      margin-top 0.05rem
  .header-right
    color white
    text-align center
    min-width 1.24rem
    padding-left 0.1rem
    padding-right 0.1rem
    float right
    .icon-arrow
      font-size 0.24rem
</style>
