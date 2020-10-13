<template>
    <div class="list-top">
        <i class="iconfont icon-fanhui" @click="back()"></i>
        <p>{{title}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String
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
    background-color: blueviolet;
    padding: 0 10px 5px;
    color: rgb(241, 241, 241);
    font-weight: 700;
    i {
        font-size: 20px;
        margin-right: 5px;
        
        
    }
    p {
        font-size: 16px;
        display: inline-block;
    }
}
</style>