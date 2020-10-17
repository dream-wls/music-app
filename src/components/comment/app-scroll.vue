<template>
  <div class="scroll-view" ref="scroll">
      <div class="scroll-wrap" :style="{width: wrapwidth}">
          <slot/>
      </div>
  </div>
</template>

<script>
export default {
    props : {
        //这个变量是否进行改变 传入了这个函数则进行改变否则就不
        change: Function,
        scrollX: {
            type: Boolean,
            default: false
        },
        //默认是纵向滚动
        scrollY: {
            type: Boolean,
            default: true
        },
        width: {
            type: [Number,String],
            default: '100%',
        },
        headerChange:Function,
        //详情页的头部改变
    },

    computed: {
        wrapwidth() {
            if(typeof this.width == "String") {
                return this.width;
            } else {
                return this.width + 'px';
            }
        }
    },
    mounted() { 
        //创建滚动的对象
        const scroll = new IScroll(this.$refs.scroll, {
            tap: true,
            click: true,
            probeType: 3,
            scrollX: this.scrollX,
            scrollY: this.scrollY
        });
        //进行监听
        scroll.on('beforeScrollStart', ()=> {
            scroll.refresh();
        });
        //监听滚动的事件
        this.change && scroll.on('scroll', ()=> {
            // scroll.bounce = false
            if(scroll.y >= 0) {
            //这个地方设置传入的参数
                this.change(true);
            }else {
                this.change(false);
            }
            //这个地方是把当前的位置传递给外部的组件
            // this.change({x: scroll.x, y: scroll.y});

        })
        this.headerChange && scroll.on('scroll', ()=> {
            if(scroll.y <= -80) {
                //当y轴滑过过一个头部
                this.headerChange(true);
            }else {
                this.headerChange(false);
            }
        })
    }
}
</script>

<style>
.scroll-view {
    overflow: hidden;
}

</style>