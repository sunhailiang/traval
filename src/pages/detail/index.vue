<template>
  <div class="detail">
    <DetailBanner :sightName='sightName'
                  :bannerImg='bannerImg'
                  :gallaryImgs='gallaryImgs' />
    <Header/>
    <List :list="categoryList" />
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import Header from './components/Header'
import List from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSuccess)
    },
    handleGetDataSuccess (data) {
      var resData = data.data
      console.log(resData)

      if (resData.ret && resData.data) {
        this.bannerImg = resData.data.bannerImg
        this.categoryList = resData.data.categoryList
        this.gallaryImgs = resData.data.gallaryImgs
        this.sightName = resData.data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  components: { DetailBanner, Header, List }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.content
  height 50rem
</style>
