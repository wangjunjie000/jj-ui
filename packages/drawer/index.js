// 导入单个组件，组件必须声明 name，注册时需要用到
import Drawer from './src/drawer.vue'

Drawer.install = function (Vue) {
    Vue.component(Drawer.name, Drawer)
}

export default Drawer