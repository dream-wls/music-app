<template>
  <div class="home">
    <header class="header">
      <span class="iconfont icon-caidan"></span>
      <h2>网易云音乐</h2>
      <router-link class="search" to="/search">
        <span class="iconfont icon-41"></span>
      </router-link>
    </header>
    <nav class="header-menu">
      <router-link to="/recommend">
        <div class="recommend">
          <span>推荐</span>
        </div>
      </router-link>
      <router-link to="/singers">
        <div class="singers">
          <span>歌手</span>
        </div>
      </router-link>
      <router-link to="/rank">
        <div class="rank">
          <span>排行榜</span>
        </div>
      </router-link>
    </nav>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "../assets/global-style.scss";
.overflow {
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}


.header {
  display: block;
  line-height: 40px;
  background-color: $theme-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  padding: 5px 10px;
  color: $font-color-light;
  .search {
    color: $font-color-light-v2;
  }
  h2 {
    font-size: 20px;
  }
  span {
    font-size: 25px;
  }
}
.header-menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $theme-color;
  font-size: 14px;
  height: 40px;
  a {
    color: $font-color-light-v2;
    padding: 3px;
  }
  .router-link-active {
    font-weight: 700;
    border-bottom: 2px solid $font-color-light;
  }
}
</style>