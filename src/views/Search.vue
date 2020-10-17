<template>
  <div class="search">
      <search-header/>
      <search-content/>
  </div>
</template>

<script>
import SearchHeader from '../components/search/search-header'
import SearchContent from '../components/search/search-content'

export default {
    components: {
        SearchHeader,
        SearchContent
    }

}
</script>

<style lang='scss' scoped>
@import "../assets/global-style.scss";
.search {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: $background-color;
}

</style>