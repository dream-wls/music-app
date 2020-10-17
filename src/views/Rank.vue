<template>
  <div class="rank page">
    <app-scroll class="content">
      <h1 class="title">官方榜</h1>
      <div class="rank-official" v-for="item in officialList" :key="item.id">
        <img class="official-img" :src="item.img" alt="" srcset="" />
        <div class="data">{{item.updateFrequency}}</div>
        <div class="official-content">
          <ul class="myul">
            <li v-for="(subitem, index) in item.tracks" :key="index">
              {{ index + 1 }}. {{ subitem.first }}-
              {{ subitem.second }}
            </li>
          </ul>
        </div>
      </div>
      <h1 class="title">全球榜</h1>
      <div class="rank-globle">
        <div class="rank-item" v-for="item in globleList" :key="item.id">
          <img class="globle-img" :src="item.img" alt="" srcset="" />
          <div class="date">
            <span>{{item.updateFrequency}}</span>
          </div>
        </div>
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({ list: (state) => state.rank.ranksList }),
    officialList: function () {
      return this.list.slice(0, 4);
    },
    globleList: function () {
      return this.list.slice(4);
    },
  },
  created() {
    this.$store.dispatch("rank/requestRanksList");
  },
};
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 14px;
  color: rgb(46, 48, 48);
  font-weight: 700;
  margin: 15px 5px 10px;
}
.rank-official {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0px 5px;
  padding: 3px 0px;
  border-bottom: 1px solid #ccc;
  position: relative;
  .official-img {
    width: 101px;
    height: 101px;
    border-radius: 5%;
  }
  .data {
    width: 101px;
    // height: 35px;
    position: absolute;
    padding-bottom: 6px;
    padding-left: 4px;
    box-sizing: border-box;
    bottom: 5px;
    left: 0px;
    z-index: 99;
    color: rgb(241, 241, 241);
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(110, 110, 110, 0.4));
    border-radius: 5%;
    // text-align: bottom;
  }
  .official-content {
    padding: 10px;
    width: 264px;
    height: 87px;
    .myul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: right;
      li {
        font-size: 12px;
        color: grey;
      }
    }
  }
}
.rank-globle {
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  .rank-item {
    padding: 3px 0;
    border-bottom: 1px solid #ccc;
  }
  .globle-img {
    width: 120px;
    height: 120px;
    display: inline-block;
  }
}
</style>