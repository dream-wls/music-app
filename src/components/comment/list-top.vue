<template>
    <div class="list-top" :class="{ change : changeBool}">
        <i class="iconfont icon-fanhui" @click="back()"></i>
        
        <p v-if="!changeHeader">{{title}}</p>
        <marquee behavior="" direction="" v-else>{{singTitle}}</marquee>
    </div>
</template>

<script>
export default {
    data() {
        return{
            changeBool:false,
        }
    },
    props: {
        title: String,
        changeHeader: Boolean,
        singTitle: String,
    },
    watch: {
        changeHeader(newVal) {
            console.log('改变changeBool');
            this.changeBool = newVal;
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang='scss' scoped>
.list-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 10px 5px;
    color: rgb(241, 241, 241);
    z-index: 99;
    i {
        position: absolute;
        font-size: 20px;
        margin-right: 5px;
    }
    p {
        font-size: 16px;
        display: inline-block;
        font-weight: 700;
        margin-left: 25px;

    }
    &.change {
        transition: 800ms;
        background-color: rgb(212, 68, 57);
    }
    marquee {
        margin-left: 25px;
        display: inline-block;
        width: 350px;
        font-size: 16px;
    }
}
</style>