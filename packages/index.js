import Drawer from './drawer'
import Button from './button'
import MessageBox from './message-box'
import Modal from './modal'

import DemoBlock from './demo-block'
import DemoTable from './demo-table'
// 所有组件列表
const components = [
  Drawer,
  Button,
  DemoBlock,
  DemoTable,
]

// console.log(MessageBox);

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, options = {}) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // console.log(components);
  // 遍历注册所有组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
  // 下面这个写法也可以
  // components.forEach(component => {Vue.use(component)} )

  Vue.prototype.$JJUI = {
    zIndex: options.zIndex || 100
  }

  // 挂载函数式组件
  Vue.prototype.$modal = Modal;
  Vue.prototype.$msgbox = MessageBox;
  
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()

  // 单个组件也导出，方便按需引入
  Drawer,
  Button,
  MessageBox,
}
