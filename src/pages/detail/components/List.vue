<template>
  <div class="list">
    <div class="item"
         v-for="(item,index) in list"
         :key='index'>
      <div class="item-title border-bottom">
        <span class="iconfont">
          <span class="iconticket">&#xe60a;</span> {{item.title}}
        </span>
      </div>
      <div class="item-children"
           v-if="item.children">
        <List :list='item.children' />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default () { return [] }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.item-title
  line-height 0.8rem
  font-size 0.32rem
  padding 0.2rem
.iconticket
  color skyblue
.item-children
  padding-left 0.3rem
</style>
