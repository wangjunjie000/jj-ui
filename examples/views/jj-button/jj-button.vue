<template>
  <div class="content-wrapper">
    <h2>Button 按钮</h2>
    <p>常用的操作按钮。</p>

    <!-- 使用方法DEMO -->
    <demo-block title="基础用法" :code-height="860" introduction="基础的按钮用法。">
      <template v-slot:code-des>
        <p>使用 <code>type</code> 、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 <code>Button</code> 的样式。</p>
      </template>
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button>默认按钮</jj-button>
          <jj-button type="primary">主要按钮</jj-button>
          <jj-button type="success">成功按钮</jj-button>
          <jj-button type="info">信息按钮</jj-button>
          <jj-button type="warning">警告按钮</jj-button>
          <jj-button type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button plain>朴素按钮</jj-button>
          <jj-button plain type="primary">主要按钮</jj-button>
          <jj-button plain type="success">成功按钮</jj-button>
          <jj-button plain type="info">信息按钮</jj-button>
          <jj-button plain type="warning">警告按钮</jj-button>
          <jj-button plain type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button round>圆角按钮</jj-button>
          <jj-button round type="primary">主要按钮</jj-button>
          <jj-button round type="success">成功按钮</jj-button>
          <jj-button round type="info">信息按钮</jj-button>
          <jj-button round type="warning">警告按钮</jj-button>
          <jj-button round type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button circle icon="jj-search"></jj-button>
          <jj-button circle icon="jj-pencil-square" type="primary"></jj-button>
          <jj-button circle icon="jj-check2" type="success"></jj-button>
          <jj-button circle icon="jj-envelope" type="info"></jj-button>
          <jj-button circle icon="jj-star" type="warning"></jj-button>
          <jj-button circle icon="jj-x-lg" type="danger"></jj-button>
        </div>
      </template>

      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode) }}</code>
      </template>
    </demo-block>

    <!-- 禁用状态 -->
    <demo-block title="禁用状态" :code-height="500" introduction="按钮不可用状态。">
      <template v-slot:code-des>
        <p>你可以使用<code>disabled</code>属性来定义按钮是否可用，它接受一个<code>Boolean</code>值。</p>
      </template>
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button disabled>默认按钮</jj-button>
          <jj-button disabled type="primary">主要按钮</jj-button>
          <jj-button disabled type="success">成功按钮</jj-button>
          <jj-button disabled type="info">信息按钮</jj-button>
          <jj-button disabled type="warning">警告按钮</jj-button>
          <jj-button disabled type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button disabled plain>朴素按钮</jj-button>
          <jj-button disabled plain type="primary">主要按钮</jj-button>
          <jj-button disabled plain type="success">成功按钮</jj-button>
          <jj-button disabled plain type="info">信息按钮</jj-button>
          <jj-button disabled plain type="warning">警告按钮</jj-button>
          <jj-button disabled plain type="danger">危险按钮</jj-button>
        </div>
      </template>

      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode2) }}</code>
      </template>
    </demo-block>

    <!-- 文字按钮 -->
    <demo-block title="文字按钮" :code-height="140" introduction="没有边框和背景色的按钮。">
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button type="text">文字按钮</jj-button>
          <jj-button disabled type="text">文字按钮</jj-button>
        </div>
      </template>

      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode3) }}</code>
      </template>
    </demo-block>

    <!-- 图标按钮 -->
    <demo-block title="图标按钮" :code-height="280" introduction="带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。">
      <template v-slot:code-des>
        <p>
          设置<code>icon</code>属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon
          ，只要使用<code>i</code>标签即可，可以使用自定义图标。
        </p>
      </template>
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button type="primary" icon="jj-pencil-square"></jj-button>
          <jj-button type="primary" icon="jj-trash"></jj-button>
          <jj-button type="primary" icon="jj-share-fill"></jj-button>
          <jj-button type="primary" icon="jj-search">搜索</jj-button>
          <jj-button type="primary" icon="jj-upload">上传</jj-button>
        </div>
      </template>

      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode4) }}</code>
      </template>
    </demo-block>

    <!-- 不同尺寸 -->
    <demo-block
      title="不同尺寸"
      :code-height="420"
      introduction="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
    >
      <template v-slot:code-des>
        <p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
      </template>
      <template v-slot:demo>
        <div class="demo-row">
          <jj-button>默认按钮</jj-button>
          <jj-button size="medium">中等按钮</jj-button>
          <jj-button size="small">小型按钮</jj-button>
          <jj-button size="mini">超小按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button round>默认按钮</jj-button>
          <jj-button round size="medium">中等按钮</jj-button>
          <jj-button round size="small">小型按钮</jj-button>
          <jj-button round size="mini">超小按钮</jj-button>
        </div>
      </template>

      <template v-slot:code>
        <code class="html">{{ $tools.formatCode(htmlCode5) }}</code>
      </template>
    </demo-block>

    <h3>Props</h3>
    <demo-table :data="propsDescription"></demo-table>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      propsDescription: [
        {
          parameter: 'type',
          description: '按钮类型',
          dataTypes: 'String',
          optional: 'primary / success / info  / warning / danger / text',
          default: '',
        },
        {
          parameter: 'icon',
          description: '图标类名',
          dataTypes: 'String',
          optional: '',
          default: '',
        },
        {
          parameter: 'plain',
          description: '是否朴素按钮',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false',
        },
        {
          parameter: 'round',
          description: '是否圆角按钮',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false',
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false',
        },
        {
          parameter: 'disabled',
          description: '是否禁用状态',
          dataTypes: 'Boolean',
          optional: '',
          default: 'false',
        },
        {
          parameter: 'size',
          description: '按钮尺寸',
          dataTypes: 'String',
          optional: 'medium / small / mini',
          default: '',
        },
      ],
      htmlCode: `
         <div class="demo-row">
          <jj-button>默认按钮</jj-button>
          <jj-button type="primary">主要按钮</jj-button>
          <jj-button type="success">成功按钮</jj-button>
          <jj-button type="info">信息按钮</jj-button>
          <jj-button type="warning">警告按钮</jj-button>
          <jj-button type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button plain>朴素按钮</jj-button>
          <jj-button plain type="primary">主要按钮</jj-button>
          <jj-button plain type="success">成功按钮</jj-button>
          <jj-button plain type="info">信息按钮</jj-button>
          <jj-button plain type="warning">警告按钮</jj-button>
          <jj-button plain type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button round>圆角按钮</jj-button>
          <jj-button round type="primary">主要按钮</jj-button>
          <jj-button round type="success">成功按钮</jj-button>
          <jj-button round type="info">信息按钮</jj-button>
          <jj-button round type="warning">警告按钮</jj-button>
          <jj-button round type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button circle icon="jj-search"></jj-button>
          <jj-button circle icon="jj-pencil-square" type="primary"></jj-button>
          <jj-button circle icon="jj-check2" type="success"></jj-button>
          <jj-button circle icon="jj-envelope"  type="info"></jj-button>
          <jj-button circle icon="jj-star" type="warning"></jj-button>
          <jj-button circle icon="jj-x-lg" type="danger"></jj-button>
        </div>
      `,
      htmlCode2: `
          <div class="demo-row">
          <jj-button disabled>默认按钮</jj-button>
          <jj-button disabled type="primary">主要按钮</jj-button>
          <jj-button disabled type="success">成功按钮</jj-button>
          <jj-button disabled type="info">信息按钮</jj-button>
          <jj-button disabled type="warning">警告按钮</jj-button>
          <jj-button disabled type="danger">危险按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button disabled plain>朴素按钮</jj-button>
          <jj-button disabled plain type="primary">主要按钮</jj-button>
          <jj-button disabled plain type="success">成功按钮</jj-button>
          <jj-button disabled plain type="info">信息按钮</jj-button>
          <jj-button disabled plain type="warning">警告按钮</jj-button>
          <jj-button disabled plain type="danger">危险按钮</jj-button>
        </div>

      `,
      htmlCode3: `
        <div class="demo-row">
          <jj-button type="text">文字按钮</jj-button>
          <jj-button disabled type="text">文字按钮</jj-button>
        </div>
      `,
      htmlCode4: `
         <jj-button type="primary" icon="jj-pencil-square"></jj-button>
          <jj-button type="primary" icon="jj-trash"></jj-button>
          <jj-button type="primary" icon="jj-share-fill"></jj-button>
          <jj-button type="primary" icon="jj-search">搜索</jj-button>
          <jj-button type="primary" icon="jj-upload">上传</jj-button>
      `,
      htmlCode5: `
         <div class="demo-row">
          <jj-button>默认按钮</jj-button>
          <jj-button size="medium">中等按钮</jj-button>
          <jj-button size="small">小型按钮</jj-button>
          <jj-button size="mini">超小按钮</jj-button>
        </div>

        <div class="demo-row">
          <jj-button round >默认按钮</jj-button>
          <jj-button round size="medium">中等按钮</jj-button>
          <jj-button round size="small">小型按钮</jj-button>
          <jj-button round size="mini">超小按钮</jj-button>
        </div>
      `,
    }
  },
  watch: {},
  methods: {},
  mounted() {},
  props: {},
  destroyed() {},
}
</script>

<style lang="scss" scoped></style>
