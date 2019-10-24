<template>
  <div>
    <Header/>
    <Search/>
    <List/>
    <Alphabet/>
  </div>
</template>
<script>
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
import Alphabet from './components/Alphabet'
export default {
  name: 'City',
  components: { Header, Search, List, Alphabet }
}
</script>
<style lang="stylus" scoped>
</style>
