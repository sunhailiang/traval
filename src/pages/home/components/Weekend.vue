<template>
  <div>
    <div class="weekend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom"
          :key="item.id"
          v-for="item of weekendList">
        <div class="item-wraper-img">
          <img class="item-img"
               :src='item.imgUrl'
               alt="">
        </div>
        <div class="item-wraper-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="stylus" scoped>
.weekend-title
  clear both
  text-align left
  background-color #eeeeee
  line-height 0.8rem
  text-indent 0.2rem
.item-wraper-img
  padding 0.25rem
.item-wraper-info
  padding 0.3rem
.item-img
  width 100%
  height 2rem
.item-title
  font-size 0.35rem
.item-desc
  font-size 0.3rem
  color gray
  margin-top 0.15rem
</style>
