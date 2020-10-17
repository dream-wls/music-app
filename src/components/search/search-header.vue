<template>
 
  <div class="search-header">
      <div class="header-top">
          <i class="iconfont icon-fanhui" @click="backAction"></i>
          <input ref='input' class="search box" @input="searchChange" v-model="searchData"  type="text" placeholder="搜索歌曲、歌手、专辑">
          <i class="iconfont icon-message-close" @click = "changeSearching"></i>
      </div>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import bus from '../../assets/eventBus'
export default {
    data() {
        return {
            searchData: '',
        }
    },
    watch: {
        searchData: {
            handler: function(newVal,oldVal) {
            console.log(newVal,oldVal);
        },
             deep: true,
        },
        searchData() {
            console.log('改变了');
        }
    },
    methods: {
        changeSearching() {
            //改变正在搜索的状态
            this.$store.commit('search/setSearching',false);

        },
        searchChange(ev){
            console.log('----');
              
            // console.log(ev.target.value);
            //每一次进行输入都进行数据请求
            //当查询的数据不为空的时候
            if(!ev.target.value) {
                this.$store.commit('search/setSearching',false);
                return ;
            }
            this.$store.dispatch('search/requestSearchSuggestList', { keywords: ev.target.value });
            this.$store.dispatch('search/requestSearchList', { keywords: ev.target.value });
            //一旦改变了值就进行设置正在搜索中
            this.$store.commit('search/setSearching',true);
        },
       backAction() {
           this.$router.back();
       } 
    },
    mounted() {
        bus.$on('getClickSuggestList',(val)=> {
                console.log('****');
                console.log(val);
                this.$refs.input.value = val;
                // this.searchChange(this.$refs.input);
                this.searchData = val;
            });
        }
}
</script>

<style lang ='scss' scoped>
@import "../../assets/global-style.scss";
.search-header {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    background: $theme-color;
    padding: 0px 0px 0px 5px;
    display: flex;
    align-items: center;
    justify-content: left;
    color:rgb(255, 255, 255);
    position: relative;
    i {
        font-size: 24px;
        align-items: center;
        vertical-align: center;
        /* //这个地方没有对齐 */
    }
    .box {
        vertical-align: center;
        border: none;
        border-bottom: 1px solid rgb(228, 228, 228);
        background: $theme-color;
        color: rgb(255, 255, 255);
        margin: 0px 5px;
        line-height: 18px;
        width: 315px;
        font-size: 14px;
        padding: 0px 3px 2px;
        &::placeholder {
            color: #fff;
        }
    }
    .icon-message-close {
        display: inline-block;
        width: 16px;
        height: 16px;
        font-size: 17px;
        position: absolute;
        right: 18px;
        top: 12px;
        z-index: 99;
    }
}

</style>