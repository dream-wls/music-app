<template>
  <div class="Singers page">
    <div class="singerMenu">
      <menu-list
        title="分类（默认热门）"
        :data="menu_2"
        v-model="select_type"
      />
      <menu-list title="首字母" :data="menu_1" v-model="select_letter" />
    </div>

    <infinite-scroll class="content" ref="scroll" @pull-down ="handlePullDown">

      <div class="item" v-for="item in singersList" :key="item.id">
        <img class="img" v-lazy="item.img" alt="" />
        <div class="name">{{ item.name }}</div>
      </div>
    </infinite-scroll>
  </div>
</template>

<script>
import MenuList from "../components/singers/menu-list";
import { mapState } from "vuex";
export default {
  data() {
    return {
      menu_1: [], //字母
      menu_2: [],
      select_type: -1,
      select_letter: -1,
    };
  },
  components: {
    MenuList,
  },
  computed: {
    ...mapState({
      singersList: (state) => {
        return state.singers.singersList;
      },
      loading: (state) => state.singers.loading,
    }),
  },
  watch: {
    //监听当点击后请求数据
    select_type() {
      this.requestSingers();
    },
    select_letter() {
      this.requestSingers();
    },
    loading() {
    }
  },

  methods: {
    //写一个请求数据的方法
    requestSingers() {
      //给它设置初始值
      let type = -1;
      let area = -1;
      let initial = -1;
      if (this.select_type >= 0) {
        type = this.menu_2[this.select_type].typeId;
        area = this.menu_2[this.select_type].areaId;
      }
      if (this.select_letter >= 0) {
        initial = this.menu_1[this.select_letter].id;
      }
      this.$store.dispatch("singers/requestSingersList", {
        type,
        area,
        initial,
      });
    },
    handlePullDown() {
      //再一次请求数据
      console.log('handlePullDown父组件中请求了数据。。。');
      this.requestSingers();

      //监听是否加载完成
      this.$watch('loading',(newVal,oldVal)=> {
        if( !newVal ) {
          //加载部分要收回去
          this.$refs.scroll.loadingEnd();
          // this.$toast.success('加载成功');
        }
      })
    }
  },
  created() {
    //构建字母
    let result = new Array(26).fill(65).map((item, index) => {
      return {
        label: String.fromCharCode(item + index),
        id: String.fromCharCode(97 + index),
      };
    });

    this.menu_1 = result;
    //构建第二个数据
    let types = [
      { label: "男", id: 1 },
      { label: "女", id: 2 },
      { label: "组合", id: 3 },
    ];
    let areas = [
      { label: "华语", id: 7 },
      { label: "欧美", id: 96 },
      { label: "日本", id: 8 },
      { label: "韩国", id: 16 },
      { label: "其他", id: 0 },
    ];
    let newtype = [];
    areas.forEach((area) => {
      newtype = [
        ...newtype,
        ...types.map((type) => ({
          label: area.label + type.label,
          id: area.id.toString() + type.id.toString(),
          typeId: type.id.toString(),
          areaId: area.id.toString(),
        })),
      ];
    });
    this.menu_2 = newtype;
    this.requestSingers();
  },
};
</script>

<style scoped lang='scss'>
@import "../assets/global-style.scss";
.Singers {
  width: 100%;
}
.content {
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 0;
  width: 100%;

}
.singerMenu {
  padding: 5px;
}
.item {
  margin: 0 5px;
  padding: 5px 0;
  //这个地方加了宽度100%
  height: 64px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  .img {
    width: 50px;
    height: 50px;
    border-radius: 10%;
    margin-right: 20px;
  }
  .name {
    color: $font-color-desc;
    display: inline;
    font-size: 14px;
  }
}
</style>