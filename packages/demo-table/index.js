// 导入组件，组件必须声明 name
import demoTable from './src/demo-table.vue'

demoTable.install = function (Vue) {
    Vue.component(demoTable.name, demoTable)
}

export default demoTable