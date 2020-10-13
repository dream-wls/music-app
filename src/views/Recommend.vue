<template>
  <div>
    <div class="recommend page" :class="{ active: showColor }">
      <!-- 这个地方我传入的是一个属性 -->
      <app-scroll class="content" :change="ScrollChange">
        <!-- 我们再在内部把背景颜色改回来 -->
        <div class="wrap">
          {{ loading }}
          
          <banner-list :data="banner" />
          <recommend-list :data="recommend" />
        </div>
      </app-scroll>
      <div class="loading"></div>
    </div>
    <transition enter-active-class="fly-in" leave-active-class="fly-out">
      <router-view></router-view>
    </transition>
  </div>
</template> 

<script>
import { mapState, mapGetters } from "vuex";
import BannerList from "../components/recommend/banner-list";
import RecommendList from "../components/recommend/recommend-list";
export default {
  components: {
    BannerList,
    RecommendList,
  },
  data() {
    return {
      showColor: true,
    };
  },
  //一旦发生变化取得仓库中的数据
  computed: {
    ...mapState({
      banner: (state) => state.recommend.bannerList,
      recommend: (state) => state.recommend.recommendList,
    }),
    //获得是否正在加载的变量
    ...mapGetters({
      loading: "recommend/loading",
    }),
  },
  watch: {
    //我们在这个地方进行监听loading变量  newval这个是进行变换的值
    loading(newVal) {
      console.log(newVal);
      if (newVal) {
        console.log("不进行显示");
      } else {
        console.log("显示loading效果");
      }
    },
  },
  methods: {
    ScrollChange(show) {
      this.showColor = show;
    },
  },
  created() {
    this.$store.dispatch("recommend/requestBannerList");
    this.$store.dispatch("recommend/requestRecommendList");
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/global-style.scss";

.recommend {
  background-color: $background-color;
  &.active {
    background-color: $theme-color;
  }
  .content {
    width: 100%;
    height: 100%;
    .wrap {
      background-color: $background-color;
    }
  }
}
</style>