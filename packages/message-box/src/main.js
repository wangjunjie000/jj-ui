import Vue from 'vue'
import msgBoxVue from './message-box.vue'
const MessageBoxConstructor = Vue.extend(msgBoxVue)

/**
 * @param {String} content 必传。确认弹窗的提示文本
 * @param {Object} options 可选。传递的组件选项对象，和 MessageBoxConstructor 组件类中的选项对象合并规则：1：options.data 中新增属性，原来的属性不会受影响。2：options定义了与 组件类相同的属性名时，以 options.data 中的为准，会覆盖组件本身的属性值。
 * @returns
 */
const MessageBox = (content = '', options) => {
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

  const instance = new MessageBoxConstructor({
    data: options,
  }).$mount()

  document.body.appendChild(instance.$el)
  return instance.showConfirm()
}

export default MessageBox
