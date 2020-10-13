<template>
    <div class="list-content">
        <div>
            <div v-for="(item,index) in data.track" :key="index">
                <span class="number">{{index+1}} </span>
                <div class="item">
                    {{item.name}}
                    <div class="ar" v-for="(arItem,index) in item.ar" :key="index">
                        {{arItem}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: [Object,Array],
    },
    created() {
    }
    

}
</script>

<style scoped>
.number {
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 60px;
}
.item {
    display: inline-block;
}
</style>