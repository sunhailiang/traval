<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom"
          :key="item.id"
          v-for="item of recommendList">
        <div class="item-wraper-img">
          <img class="item-img"
               :src='item.imgUrl'
               alt="">
        </div>
        <div class="item-wraper-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecomment',
  data () {
    return {
      recommendList: [{
        id: '01',
        imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫得海洋主题乐园'
      }, {
        id: '02',
        imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫得海洋主题乐园'
      }, {
        id: '03',
        imgUrl: 'https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_216x190_1d9c854f.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫得海洋主题乐园'
      }]
    }
  }

}
</script>
<style lang="stylus" scoped>
.recommend-title
  background-color #eeeeee
  line-height 0.8rem
  text-indent 0.2rem
// .item
// border-bottom solid 1px gray
.item-wraper-img
  clear both
  padding 0.25rem
  width 20%
  float left
  height 1.5rem
.item-wraper-info
  padding 0.3rem
.item-img
  width 1.7rem
  height 1.5rem
.item-title
  font-size 0.35rem
.item-desc
  font-size 0.3rem
  color gray
  margin-top 0.15rem
.item-button
  margin-top 0.2rem
</style>
