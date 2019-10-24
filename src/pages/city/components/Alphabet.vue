<template>
  <div class="list">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</template>
<script>
export default {
  name: 'Alphabet'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.68rem
  right 0
  bottom 0
  width 0.4rem
  .item
    text-align center
    line-height 0.5rem
    color $commonBgc
</style>
