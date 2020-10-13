import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/iconfont.css'
import Plugin from './plugin'

Vue.config.productionTip = false

Vue.use(Plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
