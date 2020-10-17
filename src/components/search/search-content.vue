<template>
    <div class="search-content">
  <app-scroll class="content">
      <div class="content-box">
        <div class="SearchTip" v-if="!Searching">
          <h1>热门搜索</h1>
          <ul class="myul">
            <li
              @click="clickSuggestList(item.first)"
              class="myli"
              v-for="(item, index) in hotList"
              :key="index"
            >
              {{ item.first }}
            </li>
          </ul>
        </div>

        <ul class="SearchList" v-else>
          <li v-for="(item, index) in SearchList" :key="index">
            <span class="listName">{{ item.name }}</span>
            <p>
              <span
                class="listArtists"
                v-for="aritem in item.artists"
                :key="aritem.id"
                >{{ aritem[index] }}</span
              >
              <span class="listAlbumName">--{{ item.albumName }}</span>
            </p>
          </li>
        </ul>
      </div>
  </app-scroll>

    </div>
</template>

<script>
import bus from '../../assets/eventBus'
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapState({ hotList: (state) => state.search.hotList }),
    ...mapState({ SearchList: (state) => state.search.SearchList }),
    ...mapState({ Searching: (state) => state.search.Searching }),
  },
  watch: {
    Searching() {
      console.log("正在搜索", this.Searching);
    },
  },
  methods: {
    clickSuggestList(val) {
      //当我们点击对应的li时进行搜索  用ID进行搜索
      console.log('=====',val);
      bus.$emit('getClickSuggestList',val);

    },
  },
  mounted() {
    this.$store.dispatch("search/requestHotSearchList");
  },
};
</script>

<style lang='scss' scoped>
.search-content {
  position: absolute;
  top: 45px;
  bottom: 0px;
//   height: 100%;
.content{
    height: 100%;
}
  .SearchTip {
    h1 {
      margin: 35px 0px 20px;
      color: rgb(187, 168, 168);
      font-size: 14px;
      padding-left: 40px;
    }
    .myul {
      padding: 0px 20px 20px;
      li {
        display: inline-block;
        padding: 5px 10px;
        background: #fff;
        margin: 0px 20px 10px 0px;
        border-radius: 6px;
        color: rgb(46, 48, 48);
        font-size: 14px;
      }
    }
  }
  .SearchList {
    width: 100%;
    padding-left: 20px;
    li {
      height: 60px;
      width: 100%;
      .listName {
        font-size: 16px;
        color: rgb(46, 48, 48);
      }
      p {
        font-size: 12px;
        color: rgb(187, 168, 168);
      }
    }
  }
}
</style>