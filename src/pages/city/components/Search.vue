<template>
  <div class="search">
    <input type="text"
           class="search-input"
           placeholder="输入城市名或者拼音">
  </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.search
  height 0.72rem
  padding 0.1rem
  background $commonBgc
.search-input
  width 100%
  height 0.62rem
  line-height 0.62rem
  text-align center
  border-radius 0.1rem
  color #666
</style>
