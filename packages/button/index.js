// 导入单个组件，组件必须声明 name，注册时需要用到
import Button from './src/button.vue'

Button.install = function (Vue) {
    Vue.component(Button.name, Button)
}

export default Button