<template>
  <div class="recommendlist page chilrenPage">
      <list-top title="歌单"/>
      <recommend-list-header :data="datalist"/>
      <recommend-list-content :data="datalist"/>
  </div>
</template>

<script>
import ListTop from '../components/comment/list-top';
import RecommendListContent from '../components/recommendDetail/recommed-list-content';
import RecommendListHeader from '../components/recommendDetail/recommed-list-header';
import {mapState} from 'vuex'

export default {
  components: {
    ListTop,
    RecommendListContent,
    RecommendListHeader
  },
  computed: {
    ...mapState({
      datalist: (state) => {
        //在这里state.recommendList.recommendList是没有值的
        //后来又拿到了值又传过去了一次
        return state.recommendList.reconmmendList;
      } 
      })
  },
  created() {
    this.$store.dispatch('recommendList/requestRecommendList', { id: this.$route.params.id} );
  }

}
</script>

<style>
@import "../assets/global-style.scss";

.recommendlist {
    
    background-color: #f2f3f4;
}

</style>