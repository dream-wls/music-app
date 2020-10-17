<template>
  <div class="recommendlist page chilrenPage">
    <list-top title="歌单" :changeHeader="changeHeader" :singTitle="datalist.name"/>
    <app-scroll class="content" :headerChange="headerChange">
      <!-- 当滚动了45px的时候 -->
      <recommend-list-header :data="datalist" />
      <recommend-list-content :data="datalist" />
    </app-scroll>
    <play-songs/>
  </div>
</template>

<script>
import ListTop from "../components/comment/list-top";
import PlaySongs from "../components/comment/playSongs";
import RecommendListContent from "../components/recommendDetail/recommed-list-content";
import RecommendListHeader from "../components/recommendDetail/recommed-list-header";
import { mapState } from "vuex";

export default {
  data() {
    return {
      changeHeader: false,
    }
  },
  components: {
    ListTop,
    RecommendListContent,
    RecommendListHeader,
    PlaySongs
    
    
  },
  computed: {
    ...mapState({
      datalist: (state) => {
        //在这里state.recommendList.recommendList是没有值的
        //后来又拿到了值又传过去了一次
        return state.recommendList.reconmmendList;
      },
    }),
  },
  methods: {
      headerChange(data) {
        // 我们把头部重新设置颜色
        this.changeHeader = data;
      }
  },
  created() {
    this.$store.dispatch("recommendList/requestRecommendList", {
      id: this.$route.params.id,
    });
  },
};
</script>

<style>
@import "../assets/global-style.scss";

.recommendlist {
  background-color: #f2f3f4;
}
.content {
  height: 100%;
}
</style>