import Vue from 'vue'
import Vuex from 'vuex'
import recommend from './modules/recommend'
import singers from './modules/singers'
import recommendList from './modules/recommendList'
import rank from './modules/rank'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    recommend,
    singers,
    recommendList,
    rank,
    search
  }
})
