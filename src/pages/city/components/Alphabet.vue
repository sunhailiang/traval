<template>
  <div class="list">
    <div class="item"
         v-for="(item,key) of alphas"
         :key="key"
         :ref="item"
         @click='handleToAlpha'
         @touchstart='handleTouchStart'
         @touchmove='handleTouchMove'
         @touchend='handleTouchEnd'>{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // 数据更新
    this.startY = this.$refs['A'][0].offsetTop // 获取距离上一个元素的距离
  },
  methods: {
    handleToAlpha (e) {
      // 将数据传给组件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    },
    handleTouchMove (e) {
      // 只有在按下得时候移动有效
      if (this.touchStatus) {
        // 计算滑动得高度
        // 通过判断滑动距离来确认当前滑动得字母实现页面滚动
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          var touchY = e.touches[0].clientY - 74 // 获取距离屏幕顶部距离，减去上面所有的元素的距离
          var index = Math.floor((touchY - this.startY) / 24.8)

          if (index >= 0 && index <= this.alphas.length) {
            this.$emit('change', this.alphas[index])
          }
        }, 20) // 为什么要用定时器？减少无效的事件执行次数
      }
    }

  },
  computed: {
    alphas () {
      const alphas = []
      for (var i in this.cities) {
        alphas.push(i)
      }
      return alphas
    }
  },
  mounted () {
  }

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
