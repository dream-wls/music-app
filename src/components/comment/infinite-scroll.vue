<template>
  <div class="scroll-view" ref="scroll">
    <div class="scroll-wrap">
      <!-- 实现下拉刷新 -->
      <div class="loading" :style="{ height: height + 'px'}">
        <span class="isloading" v-if="isPullDown">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span class="iconfont icon-fanhui" :class=" {pull: !canPullDown} " v-else></span>
        <div class="loadingText">{{ pullDownText }}</div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          //是否还可以往下拉
          canPullDown: true,
          //是否正在刷新中
          isPullDown: false,
          pullDownText: '下拉可以刷新...',
          loading: '正在刷新中...',
          height: window.devicePixelRatio * 45,
      }
  },
  mounted() {
    const scroll = new IScroll(this.$refs.scroll, {
      tap: true,
      click: true,
      probeType: 3,
    });
    scroll.on("beforeScrollStart", () => {
      scroll.refresh();
    });

    console.log(this.height);

    //监听滚动事件  下拉加载更多
    scroll.on("scroll", () => {
      if(scroll.y < 0 && scroll.y > -this.height) {
        this.canPullDown = true;
        this.pullDownText = '下拉可以刷新....';
        //如果没有达到下拉刷新的条件返回原始位置隐藏

      } else if( scroll.y >= 0) {
        this.canPullDown = false;
        this.pullDownText = '松开立即刷新...';
      }
    })
    //滚动结束
    scroll.on('scrollEnd', () => {
        if(scroll.y < 0 && scroll.y > -this.height) {
          //没有达到刷新条件
        scroll.scrollTo(0, (-1) * this.height  ,300);
      } else if( scroll.y >= 0) {
          //达到了刷新条件
        this.pullDownText = '正在加载中...';
          //转化为正在加载状态
          this.isPullDown = true;
        
        //加载完毕后收回去 
        this.$emit('pull-down');
        
        
        
      }
    })
    scroll.scrollTo(0, (-1) *this.height  ,0);
    
  },
};
</script>

<style lang='scss' scoped>
.scroll-view {
  overflow: hidden;
}

.loading {
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  .isloading {
    i {
      //这个地方是块与文字对齐
      vertical-align: middle;
      display: inline-block;
      width: 3px;
      height: 13px;
      background-color: blue;
      margin-right: 2px;
      animation: dong 1s  infinite alternate;
    &:nth-child(1) {
      animation-delay: -.25s;
    }
    &:nth-child(2) {
      animation-delay: -.5s;
    }
    &:nth-child(3) {
      animation-delay: -.75s;
    }
    }
  }
  .iconfont {
      transform: rotate(-90deg);
      transition: 300ms;
      &.pull {
        transform: rotate(-270deg);
      }
  }
  .loadingText {
    font-size: 14px;
  }
}

//我们设置动画
@keyframes dong {
  //我们也可以用scaleY 或者像素
  0%, 100%{
    transform: scaleY(1);
    transform-origin:bottom;
  }
   50% {
    transform: scaleY(0.25);
    transform-origin:bottom;

  }
  //  0%, 100%{
  //   height: 4px;
  // }
  // 50%{
  //   height: 16px;
  // }
}
</style>