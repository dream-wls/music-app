import {SINGERS_RANK} from '../../api/url'
import http from '../../api/http'

export default {
    namespaced: true,
    state: {
        ranksList: []
    },
    getters: {

    },
    mutations: {
        setRanksList(state,payload) {
            state.ranksList = payload;

        }
    },
    actions: {
        async requestRanksList(context) {
            let {data: {list}} = await http.get(SINGERS_RANK);
            console.log(list);
            let data = list.map((item) => ({
                id: item.id,
                //图片
                img: item.coverImgUrl,
                //更新日期
                updateFrequency: item.updateFrequency,
                //排行榜前几名
                tracks: item.tracks,
            }))
            console.log(data);
            context.commit('setRanksList',data);
        }

    }
}