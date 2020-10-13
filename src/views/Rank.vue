<template>
  <div class="rank page">
    <app-scroll class="content">
    <h1>官方榜</h1>
    <div class="rank-official" v-for="item in officialList" :key='item.id'>
        <img class="official-img" :src="item.img" alt="" srcset="">
        <div class="official-content">
          <ul>
            <li v-for="(subitem,index) in item.tracks" :key="index" >
              {{index}}.
              {{subitem.first}}-
              {{subitem.second}}
               </li>
          </ul>
        </div>
    </div>
    <h1>全球榜</h1>
    <div class="rank-globle">
      <div class="rank-item" v-for="item in globleList" :key="item.id">
        <img class="globle-img" :src="item.img" alt="" srcset="" />
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
      return this.list.slice(0,4);
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
.rank-official {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: nowrap;
}
.official-img {
  width: 82px;
  height: 82px;
}
.official-content {

}
.rank-globle {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 5px;
  .globle-img {
    width: 102px;
    height: 102px;
    display: inline-block;
  }
}
</style>