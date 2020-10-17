import {SEARCH_HOT_API,SEARCH_API,SEARCH_SUGGEST_API} from '../../api/url'
import http from '../../api/http'

export default {
    namespaced: true,
    state: {
        hotList: [],
        SearchList: [],
        SearchSuggestList:[],//歌曲
        SearchList:[],
        Searching: false,//是否正在搜索值  输入框中是否有值
    },
    getters: {
      
    },
    mutations: {
        sethotList(state, payload) {
            state.hotList = payload;
        },
        setSearchList(state, payload) {
            state.SearchList = payload;
        },
        setSearchSuggestList(state, payload) {
            state.SearchSuggestList = payload;
        },
        setSearchList(state, payload) {
            state.SearchList = payload;
        },
        setSearching(state, payload) {
            state.Searching = payload;
        }

    },
    actions: {
        async requestHotSearchList(context) {
            const {data: {result:{hots}}} = await http.get(SEARCH_HOT_API);
            context.commit('sethotList',hots);
            console.log(hots);
        },
        //这里是请求搜索列表  
        async requestSearchSuggestList(context,payload) {
            // const {data: {result}}= await http.get(SEARCH_SUGGEST_API, payload);
            // console.log(result);
            // let artists= result.artists;
            // if(artists) {
            //     artists= [];
            // }
            // //导出相关歌手
            // const artistsdata = [
            //       artists.map((item)=> ([
            //         item.name,//歌手名字
            //         item.picUrl//歌手图片
            //     ]))
            // ]
            // context.commit('setSearchSuggestList',artistsdata);
        },

        async requestSearchList(context,payload) {
            const {data: {result:{songs}}}= await http.get(SEARCH_API, payload);
            // console.log(songs);
            const newdata = songs.map((item)=> ({
                name: item.name,
                id: item.id,
                albumName:item.album.name,
                artists: item.artists.map((aitem)=> ([
                    aitem.name,
                ])),
            }))
            context.commit('setSearchList',newdata);
        }
        
    }
}