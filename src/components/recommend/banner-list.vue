<template>
  <div class="bannerList">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <img :src="item" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.css";
export default {
  props: {
    data: Array,
  },
  watch: {
    data() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          pagination: {
            el: ".swiper-pagination",
          },
          autoplay:  {
              delay: 3000
          },
          loop: true
        });
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "../../assets/global-style.scss";
.bannerList {
  width: 100%;
  height: 160px;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 60%;
    background-color: $theme-color;
  }
  .swiper-container {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5%;
    overflow: hidden;
    .swiper-slide {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>