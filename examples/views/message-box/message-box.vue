<template>
  <section class="content-wrapper">
    <h2>messageBox</h2>
    <p>
      模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息等。
    </p>

    <div class="demo-tip">
      <p>
        MessageBox
        的作用是美化系统自带的提示框，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用
        Dialog。
      </p>
    </div>

    <demo-block
      title="消息提示"
      :code-height="600"
      introduction="当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。"
    >
      <template v-slot:code-des>
        <p>
          调用 <code>this.$msgbox()</code> 方法时将<code>alert</code> 参数传
          true 即可打开消息提示，它模拟了系统的<code>alert</code>
          ，无法通过点击遮罩层关闭。它默认会返回一个<code>Promise</code>对象便于进行后续操作的处理。
        </p>
      </template>
      <template v-slot:demo>
        <jj-button type="text" @click="handleClick"
          >点击打开 Message Box</jj-button
        >
      </template>
      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(vueCode) }}</code>
      </template>
    </demo-block>

    <demo-block
      title="确认消息"
      :code-height="900"
      introduction="提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。"
    >
      <template v-slot:code-des>
        <p>
          模拟了系统的 <code>confirm</code> 。Message Box
          组件也拥有极高的定制性，我们可以传入<code>options</code>作为第三个参数，它是一个选项对象。<code>type</code>字段表明消息类型，可以为<code>success</code>，<code>error</code>，<code>info</code>和<code>warning</code>，无效的设置将会被忽略。
        </p>
      </template>
      <template v-slot:demo>
        <jj-button type="text" @click="handleClickWarning"
          >点击打开 type 为 warning 的 Message Box</jj-button
        >

        <jj-button type="text" @click="handleClickSuccess"
          >点击打开 type 为success 的 Message Box</jj-button
        >
      </template>
      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(vueCode2) }}</code>
      </template>
    </demo-block>

    <h3>全局方法</h3>
    <p>通过 this.$msgbox(options) 来调用</p>

    <h3>单独引用</h3>
    <div class="demo-code-block">
      <p>import { MessageBox } from 'element-ui'</p>
      <p>MessageBox(options)</p>
    </div>

    <h3>Options</h3>
    <demo-table :data="optionsDescription"></demo-table>
  </section>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      optionsDescription: [
        {
          parameter: 'title',
          description: 'MessageBox 标题',
          dataTypes: 'String',
          optional: '',
          default: '',
        },
        {
          parameter: 'content',
          description: 'MessageBox 消息正文内容',
          dataTypes: 'String',
          optional: '',
          default: '',
        },
        {
          parameter: 'confirmBtnText',
          description: '确定按钮的文本内容',
          dataTypes: 'String',
          optional: '',
          default: '确定',
        },
        {
          parameter: 'cancelBtnText',
          description: '取消按钮的文本内容',
          dataTypes: 'String',
          optional: '',
          default: '取消',
        },

        {
          parameter: 'type',
          description: '消息类型，用于显示图标',
          dataTypes: 'String',
          optional: 'success / info / warning / error',
          default: '',
        },
        {
          parameter: 'iconClass',
          description: '自定义图标的类名，会覆盖 type',
          dataTypes: 'String',
          optional: '',
          default: '',
        },
        {
          parameter: 'callback',
          description:
            '若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调',
          dataTypes: 'Function',
          optional: '',
          default: '',
        },

        {
          parameter: 'showClose',
          description: 'MessageBox 是否显示右上角关闭按钮',
          dataTypes: 'Boolean',
          optional: '',
          default: 'true',
        },
      ],
      vueCode: `
          <template>
            <jj-button type="text" @click="handleClick">点击打开 Message Box</jj-button>
          </template>

          <script>
            export default {
              methods: {
                handleClick() {
                    this.$msgbox('我是 alert 中的提示', {
                      alert: true,
                    })
                    .then(() => {
                      console.log('点击确定了')
                    })
                    .catch(() => {
                      console.log('点击关闭了')
                    })
                }
              }
            }
          <\/script>
      `,

      vueCode2: `
          <template>
            <jj-button type="text" @click="handleClickSuccess">点击打开 type 为success 的 Message Box</jj-button>

            <jj-button type="text" @click="handleClickWarning">点击打开 type 为 warning 的 Message Box</jj-button>
          </template>

          <script>
            export default {
              methods: {
                  handleClickWarning() {
                    this.$msgbox('我是 warning 中的提示', {
                      type: 'warning',
                    })
                      .then(() => {
                        console.log('点击确定了')
                      })
                      .catch(() => {
                        console.log('点击关闭了')
                      })
                  },

                  handleClickSuccess() {
                    this.$msgbox('我是 success 中的提示', {
                      type: 'success',
                    })
                      .then(() => {
                        console.log('点击确定了')
                      })
                      .catch(() => {
                        console.log('点击关闭了')
                      })
                  },
              }
            }
          <\/script>
      `,
    }
  },
  methods: {
    handleClick() {
      this.$msgbox('我是 alert 中的提示', {
        alert: true,
      })
        .then(() => {
          console.log('点击确定了')
        })
        .catch(() => {
          console.log('点击关闭了')
        })
    },

    handleClickWarning() {
      this.$msgbox('我是 warning 中的提示', {
        type: 'warning',
      })
        .then(() => {
          console.log('点击确定了')
        })
        .catch(() => {
          console.log('点击关闭了')
        })
    },

    handleClickSuccess() {
      this.$msgbox('我是 success 中的提示', {
        type: 'success',
        // iconClass: 'jj-alipay',
        // showClose: false,
      })
        .then(() => {
          console.log('点击确定了')
        })
        .catch(() => {
          console.log('点击关闭了')
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
