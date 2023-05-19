<template>
  <transition name="fade">
    <div
      class="message_box_wrapper"
      :class="`message_box_wrapper${_uid}`"
      v-if="visible"
      :style="{ zIndex: $JJUI.zIndex }"
      @click.self="handleWrapperClick"
    >
      <div class="message_box">
        <div class="header">
          <span class="title">{{ title }}</span>
          <i
            class="jj-x icon"
            @click="handleAction('cancel')"
            v-if="showClose"
          ></i>
        </div>

        <div class="body">
          <i
            class="box_status"
            :class="[boxStatusClass]"
            v-if="boxStatusClass"
            :style="iconStyle"
          ></i>
          <div class="content">
            {{ content }}
          </div>
        </div>

        <div class="btn_group">
          <jj-button
            size="small"
            @click="handleAction('cancel')"
            v-if="!alert"
            >{{ cancelBtnText }}</jj-button
          >
          <jj-button
            ref="confirmBtn"
            size="small"
            type="primary"
            @click="handleAction('confirm')"
            >{{ confirmBtnText }}</jj-button
          >
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
 * @property {String} type success / info / warning / error
 * @property {String} iconClass 自定义图标的类名，会覆盖 type
 * @property {Function} callback 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调
 * @property {Boolean} showClose MessageBox 是否显示右上角关闭按钮
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
      iconClass: '',
      showClose: true,

      promiseStatus: null, // 没有传 callback 的时候返回promise
      callback: null, // 传了 callback 函数时给它赋值
      alert: false, // 是否为alert提示框，为true时没有取消按钮，且不能点击遮罩层关闭
    }
  },
  computed: {
    boxStatusClass() {
      // 传了 iconClass 时覆盖掉 type
      if (this.iconClass) {
        return this.iconClass
      }
      const classList = {
        warning: 'jj-exclamation-circle-fill',
        success: 'jj-check-circle-fill',
        info: 'jj-info-circle-fill',
        error: 'jj-x-circle-fill',
      }
      if (classList[this.type]) {
        return classList[this.type]
      }
      return ''
    },

    iconStyle() {
      const colorList = {
        warning: '#e6a23c',
        success: '#67c23a',
        error: '#F56C6C',
        info: '#909399',
      }
      const color = colorList[this.type]
      if (color && !this.iconClass) {
        return {
          color,
        }
      }
      return null
    },
  },
  methods: {
    // 普通用法
    handleAction(active) {
      // 点击确定
      if (active === 'confirm') {
        // 传了回调函数，非 promise 模式点击确定时
        if (this.callback) {
          this.callback()
          // promise 模式点击确定时
        } else {
          this.promiseStatus && this.promiseStatus.resolve()
        }
        this.handleClose()

        // 点击取消
      } else {
        // 传了回调函数，非 promise 模式点击确取消时
        if (this.callback) {
          this.callback()
          // promise 模式点击确定时
        } else {
          this.promiseStatus && this.promiseStatus.reject()
        }
        this.handleClose()
      }
    },

    handleClose() {
      this.visible = false
      this.$modal({ show: false })
    },

    showConfirm() {
      this.visible = true
      this.$modal({ show: true, zIndex: this.$JJUI.zIndex - 1 })
      this.$nextTick(() => {
        this.$refs.confirmBtn.$el.focus()
      })

      if (!this.callback) {
        return new Promise((resolve, reject) => {
          this.promiseStatus = { resolve, reject }
        })
      }
    },

    handleWrapperClick() {
      if (this.alert) {
        return
      }

      this.handleClose()
    },
  },
}
</script>

<style lang="scss">
.message_box_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 2001;
  user-select: none;
  .message_box {
    color: #555;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 5px;
    background-color: #fff;
    padding-bottom: 10px;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 15px 10px;
      .title {
        font-size: 18px;
      }
      .icon {
        font-size: 24px;
        cursor: pointer;
      }
    }

    .body {
      padding: 10px 15px;
      font-size: 14px;
      display: flex;
      align-items: center;
      .box_status {
        font-size: 24px;
        margin-right: 12px;
      }
    }

    .btn_group {
      padding: 5px 15px 0;
      text-align: right;
    }
  }
}

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
</style>
