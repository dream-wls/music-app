<template>
  <div class="list-header">
    <div class="headerContent">
      <img :src="data.backgroundUrl" alt="" srcset="" />
      <div class="right">
        <div class="title">{{ data.name }}</div>
        <div class="creator">
            <img class="creatorImg" :src="data.creator && data.creator.avatarUrl" alt="" />
          <p class="creatorName">{{ data.creator && data.creator.nickname }}</p>  
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //这个地方是因为里面又有对象又有数组嘛？
    data: [Object, Array],
  },
  created() {
  },
};
</script>

<style lang='scss' scoped>
.list-header {
  width: 100%;
  height: 220px;
  padding: 5px 20px 50px 20px;
  box-sizing: border-box;
  background-color: blue;
  .headerContent {
    margin-top: 45px;
    width: 100%;
    background-color: red;
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
            .creatorImg {
                height: 20px;
                width: 20px;
                border-radius: 50%;
            }
        }
    }
  }
}
</style>