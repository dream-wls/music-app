<template>
  <div class="recommendList">
    <h2>推荐歌单</h2>
    <div class="recommendContent">
        <div class="myitem" v-for="item in data" :key="item.id" @click="goListPage(item)">
          <!-- 实现懒加载 -->
          <img v-lazy="item.picUrl" />
          <span class="overflow">{{ item.name }}</span>
          <div class="cover">
            <div class="playCount">
              <div class="iconfont icon-headset"></div>
              {{ item.playCount | formatCount(1) }}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  //局部过滤器
  filters: {
    //我们需要传参进行控制
    formatCount(value, num) {
      if (value < 10000) {
        return value;
      }
      //   在万和亿之间
      if (value < 100000000) {
        const number = Math.floor((value / 10000) * Math.pow(10, num));
        return number / Math.pow(10, num) + "万";
      }
    },
  },
  methods: {
    goListPage(item) {
       console.log(item);
       this.$router.push({name:'recommendList', params:{id: item.id}});
    }
  },
  mounted() {},
};
</script>
<style lang='scss'>
// 这个地方加scoped有问题？
@import "../../assets/global-style.scss";
.recommendList {
  h2 {
    font-size: 14px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    margin: 0 0 0 6px;
    display: block;
    font-weight: 700;
  }
  .recommendContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .myitem {
      width: 120px;
      position: relative;
      img {
        width: 120px;
        height: 120px;
        border-radius: 5%;
      }
      span {
        display: block;
        height: 50px;
        padding: 0px 2px;
        font-size: 12px;
        text-align: left;
      }
      .cover {
        width: 100%;
        height: 30%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
          rgba(110, 110, 110, 0.4),
          rgba(255, 255, 255, 0)
        );
      }
      .playCount {
        z-index: 99;
        position: absolute;
        top: 3px;
        right: 3px;
        color: $font-color-light;
        div {
          display: inline-block;
        }
      }
    }
  }
}
</style>