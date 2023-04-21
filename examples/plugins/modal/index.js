import Vue from 'vue'
import modal from './modal.vue'

const ModalConstructor = Vue.extend(modal)

let instance
/**
 * 调用 this.$modal({ show: true, zIndex: this.zIndex - 1 }) 显示遮罩，遮罩存在时再次调用 this.$modal() 会移除遮罩
 * @param {Object} options 可选
 * @returns 
 */
const modalFunc = (options = {}) => {
  // console.log(instance);
  if (!instance) {
    instance = new ModalConstructor({
      data: options,
    }).$mount()
    // 如果 $mount() 没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素 (可以理解为未挂载状态的vue实例对象) ，并且你必须使用原生 DOM API 把它插入文档中
    document.body.appendChild(instance.$el)
    return instance
  } else {
    // console.log(instance.$el.parentNode);
    if (instance.$el && instance.$el.parentNode) {
      instance.$el.parentNode.removeChild(instance.$el)
    }
    instance = null
    return instance
  }
}

export default modalFunc
