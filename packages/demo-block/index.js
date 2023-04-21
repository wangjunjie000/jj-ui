// 导入单个组件，组件必须声明 name，注册时需要用到
import DemoBlock from './src/demo-block.vue'

DemoBlock.install = function (Vue) {
    Vue.component(DemoBlock.name, DemoBlock)
}

export default DemoBlock