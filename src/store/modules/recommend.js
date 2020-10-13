 import {BANNER_API,RECOMMEND_LIST_API,MUSIC_LIST_API} from '../../api/url'
 import http from '../../api/http'
 
 export default {
     namespaced: true,
     state: {
         bannerList: [],
         recommendList: [],
         bannerListLoading: false,
         recommendListLoading: false,
     },     
     getters: {
         //这里有四个参数我们只用到一个
         loading(state) {
             //两个同时加载完毕为真
             return state.bannerListLoading && state.recommendListLoading;
         }
     },
     //我们进行state的设置
     mutations: {
         setBannerList(state,payload) {
            state.bannerList = payload; 
        },
        setRecommendList(state,payload) {
            state.recommendList = payload;
        },
        setBannerListLoading(state,payload) {
            state.bannerListLoading = payload;
        },
        setRecommendListLoading(state,payload) {
            state.recommendListLoading = payload;
        }
     },
     actions: {
         //请求banner
         //context 是这个实例对象  就是recommend 这个？
         async requestBannerList(context){
            context.commit('setBannerListLoading',false);
             //解析出banners  这个地方的http请求拿到数据
            const {data: {banners}} = await http.get(BANNER_API);
            //调用map 过滤出图片
            const newData = banners.map((item) => item.imageUrl);
            //设置state  把新的数据设置过去 
            context.commit('setBannerList',  newData);
            context.commit('setBannerListLoading',true);

         },
         //请求歌曲列表
         async requestRecommendList(context) {
            context.commit('setRecommendListLoading',false);
            const {data:{result}} = await http.get(RECOMMEND_LIST_API);
            //数据过滤
            const newData = result.map(({name,id,picUrl,playCount})=>({name,id,picUrl,playCount}));
            //设置数据
            context.commit("setRecommendList",newData);
            context.commit('setRecommendListLoading',true);
         },
   
     }
 }