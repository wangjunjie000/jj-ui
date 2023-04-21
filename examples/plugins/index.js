// main.js 中引入此文件后，执行 Vue.use(plugins) 时会执行下方的 install 方法 
import modal from '@/plugins/modal'
import baseConfirm from '@/plugins/confirm'
export default {
  install(Vue) {
    Vue.prototype.$modal = modal

    Vue.prototype.$baseConfirm = baseConfirm
  }
}