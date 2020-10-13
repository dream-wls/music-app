<template>
<app-scroll :scrollX="true" :scrollY="false" :width="wrapwidth">
    <div class="wrap" ref="wrap">
        <span class="title">{{title}}</span>
        <i>:</i>
        <!-- 设置点击事件 -->
        <span :class="{active: value==index }" @click="addActive(index)" class="item" v-for="(item,index) in data" :key="item.id">
            {{item.label}}
        </span>
    </div>
</app-scroll>
  
</template>

<script>
export default {
    props:  {
        data: Array,
        title: String,
        // 因为是v-model我们要使用value
        value: {
            type: Number,
            default: -1,
        }

    },
    data() {
        return {
            wrapwidth: 0,
            isShow: -1,
        }
    },
    methods: {
        addActive(index) {
            // this.isShow= index;
            //触发emit 实现组件的双向绑定
            this.$emit('input',index);
        }
    },
    mounted() {
        //这个地方获取容器的宽度
        this.wrapwidth = this.$refs.wrap.offsetWidth;
    }
}
</script>

<style lang = 'scss' scoped>
@import "../../assets/global-style.scss";
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    /* ** */
    width: max-content;
    /* word-wrap: wrap; */
    span {
        flex: 0 0 auto;
        font-size: 14px;
        &.active {
            border: 1px solid $theme-color;
            border-radius: 8px;
            color: $theme-color;
        }
    }
    i {
        flex: 0 0 auto;

    }
    .title {
        font-size: 14px;
        color: $font-color-desc-v2;
        padding: 5px 0;
    }
    .item {
        padding: 5px;
    }
}


</style>