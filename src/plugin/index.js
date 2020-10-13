import VueLazyload from 'vue-lazyload'
import Appscroll from '../components/comment/app-scroll.vue'
import InfiniteScroll from '../components/comment/infinite-scroll'
import { Button,Toast} from 'vant'


export default {
    install(Vue) {
        //懒加载
        Vue.use(VueLazyload, {
            preLoad: 1.3,
            error: 'img/music.png',
            loading: 'img/music.png',
            attempt: 1
        })

        Vue.use(Button);
        Vue.use(Toast);

        //滚动组件
        Vue.component('app-scroll', Appscroll);
        //向下拉刷新的滚动组件
        Vue.component('infinite-scroll', InfiniteScroll);

    }
}

