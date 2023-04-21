<template>
  <div class="content-wrapper">
    <h2>Drawer 抽屉</h2>
    <p>屏幕边缘滑出的面板组件。</p>

    <demo-block title="基本用法" :code-height="1350" introduction="呼出一个临时的侧边栏, 可以从多个方向呼出">
      <template v-slot:code-des>
        <p>
          需要设置 <code>visible</code> 属性，它的类型是 <code>boolean</code>,当为 true 时显示 Drawer。Drawer 分为两个部分：<code
            >title</code
          >
          和 <code>body</code>，<code>title</code> 需要具名为 title 的 <code>slot</code>, 也可以通过
          <code>title</code> 属性来定义，默认值为空。需要注意的是, Drawer 默认是从下往上打开, 当然可以设置对应的 <code>direction</code>,
          详细请参考 <code>direction</code> 用法
        </p>
      </template>
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button type="primary" @click="showDrawer('Btt')">从下往上</jj-button>
          <jj-button type="primary" @click="showDrawer('Rtl')">从右往左</jj-button>
          <jj-button type="primary" @click="showDrawer('Ltr')">从左往右</jj-button>
          <jj-button type="primary" @click="showDrawer('Ttb')">从上往下</jj-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode) }}</code>
      </template>
    </demo-block>

    <demo-block title="不添加 Title" :code-height="500" introduction="当你不需要标题到时候, 你还可以去掉标题">
      <template v-slot:code-des>
        <p>
          当遇到不需要 title 的场景时, 可以通过 <code>showTitle</code> 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户,
          为了用户的可访问性, 请务必设定 <code>title</code> 的值
        </p>
      </template>
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button type="primary" @click="isShowdrawer = true">点我打开</jj-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode2) }}</code>
      </template>
    </demo-block>

    <jj-drawer title="我是标题" :visible.sync="drawerVisibleBtt" direction="btt">
      <template v-slot:title>
        <div>我是传入的标题</div>
      </template>
      <div>我从下往上展开了</div>
    </jj-drawer>

    <jj-drawer title="我是标题" :visible.sync="drawerVisibleRtl" direction="rtl">
      <template v-slot:title>
        <div>我是传入的标题</div>
      </template>
      我从右往左展开了
    </jj-drawer>

    <jj-drawer title="我是标题" :visible.sync="drawerVisibleLtr" direction="ltr">
      <template v-slot:title>
        <div>我是传入的标题</div>
      </template>
      我从左往右展开了
    </jj-drawer>

    <jj-drawer title="我是标题" :visible.sync="drawerVisibleTtb" direction="ttb">
      <template v-slot:title>
        <div>我是传入的标题</div>
      </template>
      我从上往下展开了
    </jj-drawer>

    <jj-drawer :show-title="false" title="我是标题" :visible.sync="isShowdrawer"> 我从上往下展开了 </jj-drawer>

    <h3>Drawer Props</h3>
    <demo-table :data="propsDescription"></demo-table>
    <h3>Drawer Slot</h3>
    <demo-table :data="slotDescription"></demo-table>
    <h3>Drawer Events</h3>
    <demo-table :data="eventsDescription" type="events"></demo-table>
  </div>
</template>

<script>
export default {
  name: 'jjDrawerPage',
  data() {
    return {
      eventsDescription: [
        {
          parameter: 'open',
          description: 'Drawer 打开的回调',
          cbAttr: '',
        },
        {
          parameter: 'opened',
          description: 'Drawer 打开动画结束时的回调',
          cbAttr: '',
        },
        {
          parameter: 'close',
          description: 'Drawer 关闭的回调',
          cbAttr: '',
        },
        {
          parameter: 'closed',
          description: 'Drawer 关闭动画结束时的回调',
          cbAttr: '',
        },
      ],
      slotDescription: [
        {
          parameter: '',
          description: 'Drawer 的内容',
          dataTypes: '',
          optional: '',
          default: '',
        },
        {
          parameter: 'title',
          description: 'Drawer 标题区的内容',
          dataTypes: '',
          optional: '',
          default: '',
        },
      ],
      propsDescription: [
        {
          parameter: 'append-to-body',
          description: 'Drawer 自身是否插入至 body 元素上。',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false',
        },
        {
          parameter: 'direction',
          description: 'Drawer 打开的方向',
          dataTypes: 'String',
          optional: 'rtl / ltr / ttb / btt',
          default: 'btt',
        },
        {
          parameter: 'size',
          description:
            "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
          dataTypes: 'Number / String',
          optional: '',
          default: '30%',
        },
        {
          parameter: 'visible',
          description: '是否显示 Drawer，支持 .sync 修饰符',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false',
        },
        {
          parameter: 'title',
          description: 'Drawer 的标题，也可通过具名 slot （见下表）传入',
          dataTypes: 'String',
          optional: '',
          default: '',
        },
        {
          parameter: 'show-title',
          description: '控制是否显示 title 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
          dataTypes: 'Boolean',
          optional: '',
          default: 'true',
        },
      ],
      isShowdrawer: false,
      drawerVisibleRtl: false,
      drawerVisibleBtt: false,
      drawerVisibleLtr: false,
      drawerVisibleTtb: false,
      htmlCode: `
        <div class="demo-row">
          <jj-button type="primary" @click="showDrawer('Btt')">从下往上</jj-button>
          <jj-button type="primary" @click="showDrawer('Rtl')">从右往左</jj-button>
          <jj-button type="primary" @click="showDrawer('Ltr')">从左往右</jj-button>
          <jj-button type="primary" @click="showDrawer('Ttb')">从上往下</jj-button>
        </div>

        <jj-drawer title="我是标题" :visible.sync="drawerVisibleBtt" direction="btt">
          <template v-slot:title>
            <div>我是传入的标题</div>
          </template>
          我从下往上展开了
        </jj-drawer>

        <jj-drawer title="我是标题" :visible.sync="drawerVisibleRtl" direction="rtl">
          <template v-slot:title>
            <div>我是传入的标题</div>
          </template>
          我从右往左展开了
        </jj-drawer>

        <jj-drawer title="我是标题" :visible.sync="drawerVisibleLtr" direction="ltr">
          <template v-slot:title>
            <div>我是传入的标题</div>
          </template>
          我从左往右展开了
        </jj-drawer>

        <jj-drawer title="我是标题" :visible.sync="drawerVisibleTtb" direction="ttb">
          <template v-slot:title>
            <div>我是传入的标题</div>
          </template>
          我从上往下展开了
        </jj-drawer>

        <script>
          export default {
            data() {
              return {
                drawerVisibleRtl: false,
                drawerVisibleBtt: false,
                drawerVisibleLtr: false,
                drawerVisibleTtb: false,
              }
            },
            methods: {
              showDrawer(dir) {
                if (!this[\`drawerVisible\${dir}\`]) {
                  this[\`drawerVisible\${dir}\`] = true
                } 
              },
            },
          }
        <\/script>
      `,

      htmlCode2: `
        <div class="demo-row">
          <jj-button type="primary" @click="isShowdrawer = true">点我打开</jj-button>
        </div>

        <jj-drawer :show-title="false" title="我是标题" :visible.sync="isShowdrawer"> 我从上往下展开了 </jj-drawer>

        <script>
          export default {
            data() {
              return {
                isShowdrawer: false,
              }
            },
          }
        <\/script>
      `,
    }
  },
  methods: {
    showDrawer(dir) {
      if (!this[`drawerVisible${dir}`]) {
        this[`drawerVisible${dir}`] = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.btn_box {
}
</style>
