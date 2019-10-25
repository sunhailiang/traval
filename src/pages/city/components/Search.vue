<template>
  <div>
    <div class="search">
      <input type="text"
             v-model="keyWord"
             class="search-input"
             placeholder="输入城市名或者拼音">
    </div>
    <div class="search-content"
         ref="search"
         v-show="keyWord">
      <ul>
        <li class="serach-item border-bottom"
            v-for="item in list"
            :key="item.id"
            @click="handleChangeCity(item.name)">{{item.name}}</li>
        <li class="serach-item border-bottom nodata"
            v-show="hasNoDate">没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      timer: null,
      list: []
    }
  },
  computed: {
    hasNoDate () {
      return !this.list.length
    }
  },
  methods: {
    handleChangeCity (city) { // 选择城市
      this.changeCity(city)
      this.$router.push({ path: '/' })
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        var result = []
        for (let i in this.cities) {
          this.cities[i].forEach(v => {
            if (v.spell.indexOf(this.keyWord) > -1 || v.name.indexOf(this.keyWord) > -1) {
              result.push(v)
            }
          })
        }
        this.list = result
        return this.list
      }, 100)
    }
  }
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
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.7rem
  left 0
  right 0
  bottom 0
  background-color #eee
  .serach-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background #fff
  .nodata
    text-align center
</style>
