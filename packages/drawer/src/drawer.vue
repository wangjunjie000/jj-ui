<template>
  <div
    @click.self="handleWrapperClick"
    class="base-drawer_wrapper"
    :style="{ zIndex: $JJUI.zIndex }"
    v-show="isShowBaseDrawer"
  >
    <div :class="`base-drawer base-drawer-${_uid}`" :style="drawerStyle">
      <header class="drawer_header" v-if="showTitle">
        <slot name="title">
          <span :title="title" class="title">{{ title }}</span>
        </slot>
      </header>
      <section class="drawer_body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
/**
 * @property {String} direction 弹出方向，btt：bottom to top。
 * @property {String, Number}  size 窗体大小, 不是传数字时必须传百分比
 * @property {Boolean} visible 是否显示drawer，默认false不显示
 * @property {String} title Drawer 的标题，也可通过具名 slot （见下方slot）传入,
 * @property {Boolean} append-to-body Drawer 自身是否插入至 body 元素上。默认false
 * @property {Boolean} show-title 控制是否显示 title 部分, 默认为 true, 当此项为 false 时, title 属性和插槽 均不生效
 * @event {Function} open 打开时的回调
 * @event {Function} close 关闭时的回调
 * @event {Function} opened 打开动画结束后的回调
 * @event {Function} closed 关闭动画结束后的回调
 * @slot {element} title 标题部分的插槽
 */

export default {
  name: 'jj-drawer',
  props: {
    direction: {
      type: String,
      default: 'btt',
      validator(val) {
        return ['ltr', 'rtl', 'ttb', 'btt'].includes(val)
      },
    },

    size: {
      type: [String, Number],
      default: '30%',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    drawerStyle() {
      let obj = {}
      switch (this.direction) {
        case 'btt':
          obj.transform = 'translate3d(0, 100%, 0)'
          obj.bottom = 0
          break
        case 'ttb':
          obj.transform = 'translate3d(0, -100%, 0)'
          obj.top = 0
          break
        case 'ltr':
          obj.transform = 'translate3d(-100%, 0, 0)'
          obj.left = 0
          obj.width = this.computedSize
          break
        case 'rtl':
          obj.transform = 'translate3d(100%, 0, 0)'
          obj.right = 0
          break
        default:
          break
      }
      if (this.direction === 'btt' || this.direction === 'ttb') {
        obj.left = 0
        obj.height = this.computedSize
        obj.width = '100%'
      }
      if (this.direction === 'ltr' || this.direction === 'rtl') {
        obj.top = 0
        obj.width = this.computedSize
        obj.height = '100%'
      }
      return {
        ...obj,
      }
    },

    computedSize() {
      if (typeof this.size === 'number') {
        return this.size + 'px'
      } else {
        return this.size
      }
    },
  },
  data() {
    return {
      isShowBaseDrawer: false,

      drawerEle: null,
    }
  },

  watch: {
    visible: {
      handler(val) {
        // console.log(val, oldVal);
        // val 为true时展开，此时isShowBaseDrawer如果也为true就触发不了展开动画，所以要重置为false
        if (val && this.isShowBaseDrawer) {
          this.isShowBaseDrawer = false
        }

        // console.log(this.$el);
        if (val && this.appendToBody) {
          document.body.appendChild(this.$el)
        }

        this.handleToogleShow(val)
      },
    },
  },

  mounted() {
    this.drawerEle = document.querySelector(`.base-drawer-${this._uid}`)
    this.handleTransitionend = this.handleTransitionend.bind(this)

    if (this.drawerEle) {
      this.drawerEle.addEventListener('transitionend', this.handleTransitionend)

      // 写这个是为了在mounted时默认展开
      if (this.visible) {
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
        this.handleToogleShow()
      }
    }
  },

  methods: {
    handleTransitionend(e) {
      e.stopPropagation()
      if (e.target.classList.contains('base-drawer')) {
        // console.log(this.visible)
        // 展开动画结束后
        if (this.visible) {
          this.$emit('opened')
        } else {
          this.isShowBaseDrawer = false
          this.$emit('closed')
        }
      }
    },

    handleWrapperClick() {
      this.$emit('update:visible', false)
      // 当前处于展示状态时才做隐藏操作
      if (this.visible && this.isShowBaseDrawer) {
        // console.log(this.visible, this.isShowBaseDrawer);
        this.handleToogleShow()
      }
    },

    handleToogleShow() {
      if (!this.drawerEle) {
        this.drawerEle = document.querySelector(`.base-drawer-${this._uid}`)
      }

      // 打开
      if (this.visible && !this.isShowBaseDrawer) {
        this.isShowBaseDrawer = true
        // 使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重绘之前执行，而不是立即要求页面重绘。
        window.requestAnimationFrame(() => {
          this.$emit('open')
          // 打开遮罩层
          this.$modal({ show: true, zIndex: this.$JJUI.zIndex - 1 })
          // 强制触发浏览器重绘，不写这句浏览器会合并绘制，不能触发动画
          this.drawerEle.offsetWidth

          this.drawerEle.classList.remove(`fade_leave_${this.direction}`)
          this.drawerEle.classList.add(`fade_enter_${this.direction}`)
        })
      }

      // 关闭
      if (!this.visible && this.isShowBaseDrawer) {
        // 关闭遮罩层
        this.$modal({ show: false })
        this.drawerEle.classList.remove(`fade_enter_${this.direction}`)
        this.drawerEle.classList.add(`fade_leave_${this.direction}`)

        this.$emit('close')
      }
    },
  },

  destroyed() {
    // 如果DOM是插入到body的，组件销毁时移除body中的元素
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    if (this.drawerEle) {
      this.drawerEle.removeEventListener(
        'transitionend',
        this.handleTransitionend
      )
    }
  },
}
</script>

<style lang="scss" scoped>
.base-drawer_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  margin: 0;
  .base-drawer {
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    position: fixed;
    background-color: #fff;

    transition: transform 0.3s;
    display: flex;
    flex-direction: column;

    .drawer_header {
      padding: 20px 20px 0;
      margin-bottom: 30px;
      text-align: center;

      .title {
      }
    }
    .drawer_body {
      padding: 20px;
      flex: 1;
      overflow: auto;
    }

    &.fade_enter_btt {
      transform: translate3d(0, 0, 0) !important;
    }
    &.fade_leave_btt {
      transform: translate3d(0, 100%, 0) !important;
    }
    &.fade_enter_ttb {
      transform: translate3d(0, 0, 0) !important;
    }
    &.fade_leave_ttb {
      transform: translate3d(0, -100%, 0) !important;
    }
    &.fade_enter_ltr {
      transform: translate3d(0, 0, 0) !important;
    }
    &.fade_leave_ltr {
      transform: translate3d(-100%, 0, 0) !important;
    }
    &.fade_enter_rtl {
      transform: translate3d(0, 0, 0) !important;
    }
    &.fade_leave_rtl {
      transform: translate3d(100%, 0, 0) !important;
    }
  }
}
</style>
