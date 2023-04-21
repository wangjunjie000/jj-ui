<template>
  <section class="content-wrapper">
    <h2>Icon 图标</h2>
    <p>提供了一套常用的图标集合。</p>

    <div class="demo-tip">
      <p>该项目图标来源于 Bootstrap Icons, 感谢！</p>
      <p>
        <a href="https://icons.getbootstrap.com/" target="_blank">https://icons.getbootstrap.com/</a>
      </p>
    </div>

    <!-- <h3>使用方法</h3> -->
    <!-- <p>直接通过设置类名为 jj-iconName 来使用即可。例如：</p> -->

    <!-- 使用方法DEMO -->
    <demo-block title="使用方法" :code-height="180" introduction="直接通过设置类名为 jj-iconName 来使用即可。例如：">
      <template v-slot:demo>
        <i class="jj-chevron-right"></i>
        <i class="jj-chevron-down"></i>
        <i class="jj-search"></i>
        <i class="jj-android2"></i>
        <i class="jj-alipay"></i>
      </template>
      <template v-slot:code>
        <!-- $tools.formatCode(htmlCode) -->
        <code class="html">{{ $tools.formatCode(htmlCode) }}</code>
      </template>
    </demo-block>

    <h3>图标集合</h3>
    <ul class="icon_list">
      <li class="icon_list_item" v-for="iconClass in iconList" :key="iconClass">
        <i class="icon" :class="iconClass"></i>
        <span class="icon_name">{{ iconClass }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import iconList from './iconList'
export default {
  name: 'jjIconPage',
  data() {
    return {
      htmlCode: `
        <i class=" jj-chevron-right" ></i>
        <i class=" jj-chevron-down" ></i>
        <i class=" jj-search" ></i>
        <i class=" jj-android2" ></i>
        <i class=" jj-alipay" ></i>
      `,
      iconList,
    }
  },
  methods: {},
  mounted() {
    // this.$tools.formatCode(this.htmlCode)
  },
}
</script>

<style lang="scss" scoped>
.demo-block {
  font-size: 24px;
}
[class*='jj-'] {
  margin: 0 20px;
}
.icon_list {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  .icon_list_item {
    width: 148px;
    height: 120px;
    flex: 0 0 148px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      .icon,
      .icon_name {
        color: $--color-primary;
      }
    }
    .icon {
      transition: color 0.15s linear;
      font-size: 32px;
      color: #606266;
    }
    .icon_name {
      transition: color 0.15s linear;
      margin-top: 10px;
      color: #99a9bf;
      text-align: center;
      padding: 0 3px;
      font-size: 14px;
    }
  }
}
</style>
