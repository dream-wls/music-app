import { SINGERS_DETAIL_LIST_API,SONG_URL_API  } from '../../api/url'
import http from '../../api/http'

export default {
    namespaced: true,
    state: {
        reconmmendList: [],
        playingSong: []
        
    },
    getters: {

    },
    mutations: {
        setReconmmendList(state, payload) {
            state.reconmmendList = payload;
        },
        setPlayingSong(state, payload) {
            state.PlayingSong = payload;
        },
      
    },
    actions: {
        async requestRecommendList(context, payload) {
            //请求数据
            let { data: { playlist } } = await http.get(SINGERS_DETAIL_LIST_API, payload);
            console.log(playlist);

            //歌单详情头部数据
            let listDetail = {
                //歌单名字
                name: playlist.name,
                //创作者信息
                creator: {
                    nickname: playlist.creator.nickname,
                    avatarUrl: playlist.creator.avatarUrl,
                },
                //封面图片
                backgroundUrl: playlist.coverImgUrl,
                //播放量
                playCount: playlist.creator.playCount,

                //歌单歌曲列表
                track: playlist.tracks.map((item) => ({
                    id: item.id,//歌单歌曲id
                    name: item.name,//歌单名字
                    author: item.ar.map((arItem) => arItem.name),
                    al: {//歌曲
                        //图片
                        picUrl: item.al.picUrl
                    },
                }))
            }
            //设置歌单详情页
            context.commit("setReconmmendList", listDetail);

        },
        //或者我们用.then 的方法
        // requestRecommendList(context, payload) {
        //     //请求数据
        //     http.get(SINGERS_DETAIL_LIST_API ,payload).then(
        //         (result)=>{
        //             console.log(result);
        //         }
        //     );
        // }
        async requestPlayingSong(context,payload) {
            let {data:{data}} = await http.get(SONG_URL_API, payload);
            console.log(data[0]);
        }

    }
}