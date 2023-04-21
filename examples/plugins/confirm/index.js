import Vue from 'vue'
import confirm from './confirm.vue'

const confirmBox = Vue.extend(confirm)

// 这里传参参考了 element-ui 格式
/**
 * 通过 this.$myConfirm(content, options) 调用该确认弹窗组件
 * @param {String} content 必传。确认弹窗的提示文本
 * @param {Object} options 可选。不传时为标准形式，有确认和取消按钮。也可传一个对象，可以覆盖confirm.vue 组件中的data值
 * @returns 
 */
confirm.install = (content = '', options) => {
  // title 为空时表示只传了 content 参数
  if (!options) {
    options = {
      content: content,
    }

  } else if (typeof options === 'object') {
    options = Object.assign(
      {
        content: content,
      },
      options
    )
  }

  // console.log(options)`

  let instance = new confirmBox({
    data: options,
  }).$mount()

  // 如果 $mount() 没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素 (可以理解为未挂载状态的vue实例对象) ，并且你必须使用原生 DOM API 把它插入文档中
  document.body.appendChild(instance.$el)

  return instance.showConfirm()
}

export default confirm.install
