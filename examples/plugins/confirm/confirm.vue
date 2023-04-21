<template>
  <transition name="fade">
    <div class="confirm_box_wrapper" v-if="visible">
      <div class="confirm">
        <div class="header">
          <span class="title">{{ title }}</span>
          <i class="el-icon-close icon" @click="handleAction('cancel')"></i>
        </div>
        <div class="body">
          <div class="tips">
            {{ content }}
          </div>
          <div class="btn_group" v-if="type !== 'save'">
            <button
              v-if="type !== 'warning'"
              @keydown.enter.stop.prevent="handleEnter"
              class="base-button confirm_btn_concel"
              @click="handleAction('cancel')"
            >
              {{ cancelBtnText }}
            </button>
            <button @keydown.enter.stop.prevent="handleEnter" class="base-button confirm_btn_confirm" @click="handleAction('confirm')">
              {{ confirmBtnText }}
            </button>
          </div>
          <div class="btn_group" v-else>
            <button @keydown.enter.stop.prevent="handleEnter" class="base-button confirm_btn_confirm save" @click="handleSave('0')">
              {{ saveBtnList[0] }}
            </button>
            <button @keydown.enter.stop.prevent="handleEnter" class="base-button confirm_btn_confirm save" @click="handleSave('1')">
              {{ saveBtnList[1] }}
            </button>
            <button @keydown.enter.stop.prevent="handleEnter" class="base-button confirm_btn_concel save" @click="handleSave('2')">
              {{ saveBtnList[2] }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * 基础选择组件，点击后从下方弹出
 * @property {String} title 标题
 * @property {String} content 内容
 * @property {String} confirmBtnText 确认按钮文字，默认‘确定’
 * @property {String} cancelBtnText 取消按钮文字，默认‘取消’
 * @property {String} type warning/save，默认 '', 默认左侧取消，右侧确认， warning: 只有一个确认按钮，save：三个按钮，分别为保存更改，放弃更改，继续编辑
 */
export default {
  data() {
    return {
      visible: false,
      title: '提示',
      content: '您确定要删除吗',
      confirmBtnText: '确定',
      cancelBtnText: '取消',
      type: '',
      promiseStatus: null, // 没有传confirm 的时候返回promise

      confirm: null, // 传了confirm 函数过来时会覆盖它

      saveBtnList: ['保存更改', '放弃更改', '继续编辑'],
    }
  },
  methods: {
    // 三个按钮用法
    handleSave(type) {
      this.handleClose()
      this.confirm(type)
    },

    // 普通用法
    handleAction(active) {
      // 点击确定
      if (active === 'confirm') {
        this.handleClose()
        // 传了回调函数，非 promise 模式点击确定时
        if (this.confirm) {
          this.confirm('confirm')
          // promise 模式点击确定时
        } else {
          this.promiseStatus && this.promiseStatus.resolve('confirm')
        }
        // 点击取消
      } else {
        this.handleClose()
        // 传了回调函数，非 promise 模式点击确取消时
        if (this.confirm) {
          this.confirm('cancel')
          // promise 模式点击确定时
        } else {
          this.promiseStatus && this.promiseStatus.reject('cancel')
        }
      }
    },
    handleEnter() {
      return false
    },
    handleClose() {
      this.visible = false
      window.isShowConfirm = false
      this.removeMask()
    },

    removeMask() {
      let mask = document.querySelector('.mask_layer_confirm')
      if (mask) {
        mask.style.transition = 'opacity .3s'
        mask.style.opacity = 0

        // 结束过渡再删除元素
        mask.addEventListener('webkitTransitionEnd', () => {
          mask.remove()
        })
        mask.addEventListener('transitionend', () => {
          mask.remove()
        })
      }
    },

    createMask() {
      let div = document.createElement('div')
      div.classList.add('mask_layer_confirm')
      document.body.appendChild(div)

      setTimeout(() => {
        div.style.transition = 'opacity .3s'
        div.style.opacity = 0.5
      }, 20)
    },

    showConfirm() {
      // const ele = document.querySelector('.confirm_box_wrapper')
      // if (ele) {
      //     return
      // }

      this.visible = true
      this.createMask()
      if (!this.confirm) {
        return new Promise((resolve, reject) => {
          this.promiseStatus = { resolve, reject }
        })
      }
    },

    keyupMethod(e) {
      if (e.code === 'Space') {
        e.preventDefault()
        return false
      }
    },
  },
  created() {
    // console.log(window);
    document.addEventListener('keyup', this.keyupMethod)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.keyupMethod)
  },
}
</script>

<style lang="scss">
.confirm_box_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 9999;
  user-select: none;
  .confirm {
    border: 1px solid #ccc;
    width: 400px;
    height: 220px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 5px;
    background-color: #fff;
    .header {
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: 0 23px;
      .title {
        font-size: 18px;
        color: #333;
      }
      .icon {
        color: #ccc;
        font-size: 24px;
        cursor: pointer;
      }
    }

    .body {
      height: 167px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .tips {
        color: #333;
        width: 100%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        padding: 0 23px;
      }
      .btn_group {
        flex: 0 0 64px;
        height: 64px;
        width: 100%;
        display: flex;
        justify-content: center;
        .confirm_btn_concel {
          font-size: 16px;
          width: 80px;
          height: 32px;
          margin-right: 26px;
          color: #333333;
          border: 1px solid #ccc;
          &.save {
            margin: 0;
            width: auto;
            padding: 0 15px;
          }
        }
        .confirm_btn_confirm {
          color: #fff;
          font-size: 16px;
          width: 80px;
          height: 32px;
          &.save {
            margin-right: 10px;
            width: auto;
            padding: 0 15px;
          }
        }
      }
    }
  }
}

// [data-theme='light'] {
//     .confirm_btn_confirm {
//         background-color: $base_color;
//         &:hover {
//             background-color: $button_primary_hover !important;
//         }
//     }
// }
// [data-theme='dark'] {
//     .confirm_btn_confirm {
//         background-color: $base_color_dark;
//         &:hover {
//             background-color: $button_primary_dark_hover !important;
//         }
//     }
// }

//   自定义弹框淡入淡出效果
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, -20px, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

// $myconfirm 遮罩层 样式
.mask_layer_confirm {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0;
  z-index: 9998;
}
</style>
