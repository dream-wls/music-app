<template>
  <!-- <div class="list-header"> -->
      <div class="list-header" >
      <div class="bgImag" :style="{ backgroundImage:`url(${data.backgroundUrl})`}"></div>
        <!-- <div class="cover" :style="{backgroundImage: `url(${detail.coverImgUrl})`}"></div> -->
      <!-- <div class="list-header" style="background:red"> -->
        <div class="headerContent">
          <div class="right">
            <div class="creator">
              <!-- 这个地方我们用 && 如果 data.creator 为空的话我们就返回false -->
              <img :src="data.backgroundUrl" alt="" srcset="" />
              <div class="creatorName">
                <div class="title">{{ data.name }}</div>
                <div>
                  <img
                    class="creatorImg"
                    :src="data.creator && data.creator.avatarUrl"
                    alt=""
                  />
                  {{ data.creator && data.creator.nickname }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="handle">
          <span class="iconfont icon-pinglun">评论</span>
          <span class="iconfont icon-xihuan1">点赞</span>
          <span class="iconfont icon-tianjia">收藏</span>
          <span class="iconfont icon-youcecaidan">更多</span>
        </div>
 
      </div>
</template>

<script>
export default {
  props: {
    //这个地方是因为里面又有对象又有数组嘛？
    data: [Object, Array],
  },
  created() {},
};
</script>

<style lang='scss' scoped>
.content {
  height: 100%;
}
.list-header {
  width: 100%;
  height: 220px;
  padding: 5px 20px 50px 20px;
  box-sizing: border-box;
  // background-color: blue;
  position: relative;
  // background-image: this.data.backgroundUrl;
  z-index: 44;

   .bgImag {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-size: 100% ;
    filter: blur(20px);
    background-position: center;
    z-index: -3;

   }

  .headerContent {
    margin-top: 45px;
    width: 100%;
    img {
      width: 120px;
      height: 120px;
    }
    .right {
      display: inline-block;
      .title {
        font-size: 16px;
        color: rgb(241, 241, 241);
        font-weight: 700;
      }
      .creator {
        display: flex;
        justify-content: center;
        .creatorImg {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          float: left;
          margin-right: 5px;
        }
        .creatorName {
          display: inline-block;
          width: 215px;
          height: 120px;
          float: right;
          // display: flex  ;
          padding: 0 10px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          // align-items: ;
        }
      }
    }
  }
}
</style>