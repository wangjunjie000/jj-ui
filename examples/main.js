import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tools from './utils/tools'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)

// import plugins from '@/plugins'
// Vue.use(plugins)

import JjUI from '../packages'
Vue.use(JjUI)

// import JjUI from '../lib/jj-vue-ui.umd'
// console.log(JjUI);
// Vue.use(JjUI)

Vue.prototype.$tools = tools
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
