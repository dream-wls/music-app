import {SINGERS_LIST_API} from '../../api/url'
import http from '../../api/http'

export default {
    namespaced: true,
    state: {
        singersList: [],
        loading: false,
    },
    getters: {

    },
    mutations: {
        setSingersList(state, payload) {
            state.singersList = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        }

    },
    actions: {
        //这边commit
        async requestSingersList(context,payload) {
            context.commit('setLoading' , true);
            // 请求数据    
            let {data: {artists}} = await http.get(SINGERS_LIST_API,payload);
            //过滤数据
            // context.commit('setLoading' , true);

            let result = artists.map(item => ({
                id: item.id,
                img: item.picUrl+"?param=200*200",//这个地方设置图片请求大小
                name: item.name
            }))
            //进行设置
            context.commit('setSingersList', result);
            context.commit('setLoading' , false);
            //当这里的loading 变为true的时候，表示加载完毕

            
        }
    }
}