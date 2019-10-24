<template>
  <div class="list"
       ref='wrapper'>
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
          <div class="item border-bottom">呼伦贝尔</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'List',
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
