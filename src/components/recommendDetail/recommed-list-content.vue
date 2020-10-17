<template>
  <div class="list-content">
    <div>
      <div class="playall">
        <i></i>
        <span>播放全部<span>共10首歌</span></span>
        <div class="add_list">+收藏( )</div>
      </div>
      <div class="Songcontent">
          <!-- 当我点击li的时候播放音乐了 -->
        <div class="list" @click="playSong(item.id)" v-for="(item, index) in data.track" :key="index">
          <span class="number">{{ index + 1 }} </span>
          <div class="item">
            {{ item.name }}
            <div class="ar" v-for="(arItem, index) in item.ar" :key="index">
              {{ arItem }}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          playing: false,
      }
  },
  props: {
    data: [Object, Array],
  },
  methods: {
    playSong(myid) {
        console.log('播放音乐',myid);
        this.playing = true;
        //我们再依据id去请求数据
        this.$store.dispatch('recommendList/requestPlayingSong',{id: myid})
    }
  },
  created() {},
};
</script>

<style scoped lang='scss'>
.list-content {
  /* z-index: 999; */
  position: relative;
}
.playall {
  z-index: 999;
  position: absolute;
  top: -45px;
  width: 100%;
  background-color: ivory;
  padding: 10px 10px;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  font-size: 16px;
    height: 46px;
  .add_list {
    position: absolute;
    top: 0;
    right: 0;
    float: right;
    width: 130px;
    background-color: rgb(212, 68, 57);
    border-radius: 5%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
    color: rgb(241, 241, 241);
  }
}
.Songcontent {
  margin-top: 60px;
}
.list {
  // background-color: red;
  width: 100%;
  height: 60px;
  display: flex;
  .number {
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
  }
  .item {
    display: inline-block;
    height: 60px;
    // width: 100%;
    flex: 1;
    border-bottom: 1px solid red;
    font-size: 16px;
  }
}
</style>