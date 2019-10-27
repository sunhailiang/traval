<template>
  <div class="detail">
    <DetailBanner/>
    <Header/>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/DetailBanner'
import Header from './components/Header'
export default {
  name: 'Detail',
  components: { DetailBanner, Header }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.commonStyles'
.content
  height 50rem
</style>
