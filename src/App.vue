<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/global-style.scss";
* {
  padding: 0;
  margin: 0;
}
html,body {
  background-color: $background-color;
}
.page {
  width: 100%;
  position: absolute;
  top: 90px;
  bottom: 0;
}
.chilrenPage {
  top: 0;
}

//飞入飞出的动画
@keyframes fly-in {
  0% {
    transform: rotate(30deg) translateX(100%);
  }
  100% {
    transform: rotate(0deg) translateX(0);
  }
}
.fly-in {
  transform-origin: right bottom;
  animation: fly-in 1000ms linear;
  //这个是线型渐变
}
@keyframes fly-out {
  0% {
    transform: rotate(0deg) translateX(0%);
  }
  100% {
    transform: rotate(30deg) translateX(100%);
  }
}
.fly-out {
  transform-origin: right bottom;
  animation: fly-out 500ms linear;
  //这个是线型渐变
}
</style>
