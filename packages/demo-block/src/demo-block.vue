<template>
  <div class="demo-block">
    <h3 class="demo-block-title" v-if="title">{{ title }}</h3>
    <p class="demo-block-introduction" v-if="introduction">{{ introduction }}</p>
    <div
      @mouseout="arrowAnimation ? (hover_animation = false) : null"
      @mouseover="arrowAnimation ? (hover_animation = true) : null"
      class="content"
    >
      <div class="source">
        <slot name="demo" />
      </div>
      <div :style="{ height: code_height + 'px' }" class="code-wrapper">
        <div class="code_description" v-if="$slots['code-des']">
          <slot name="code-des"></slot>
        </div>

        <pre v-highlightjs>
          <slot name="code" />
        </pre>
      </div>
      <div @click="showCode()" class="demo-block-control">
        <i
          :class="{
            hovering_i: hover_animation || !arrowAnimation,
            'jj-caret-down-fill': code_height === 0,
            'jj-caret-up-fill': code_height !== 0,
          }"
          class="shni"
        ></i>
        <span :class="{ hovering_span: hover_animation || !arrowAnimation }">
          {{ code_height === 0 ? '显示代码' : '隐藏代码' }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'demo-block',
  props: {
    title: {
      type: String,
      default: '',
    },
    introduction: {
      type: String,
      default: '',
    },
    codeHeight: {
      type: Number,
      default: 500,
    },
    arrowAnimation: {
      type: Boolean,
      default: true,
    },
  },
  created() {
  },
  data() {
    return {
      data: '',
      hover_animation: false,
      code_height: 0,
    }
  },
  methods: {
    showCode() {
      if (this.code_height === 0) {
        this.code_height = this.codeHeight
      } else {
        this.code_height = 0
      }
    },
  },
}

</script>
<style lang="scss" scoped>
.demo-block {
  .demo-block-title {
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
  }
  .demo-block-introduction {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0;
  }
  .content {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .source {
      position: relative;
      padding: 24px;
    }
    .code_description {
      padding: 20px;
      box-sizing: border-box;
      // border: 1px solid #ebebeb;
      border: 1px solid rgba(255,255,255, .2);
      
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      // background-color: #fff;
      background-color: #282c34;;
      
      p {
        margin: 0;
        color: #fff;
      }
      code {
        color: #ff502c;
        background-color: #fff5f5;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }
    .code-wrapper {
      height: 0;
      background: #282c34;
      border-top: 1px solid #eaeefb;
      transition: height 0.2s;
      overflow: hidden;
    }
    .demo-block-control {
      cursor: pointer;
      position: relative;
      margin-top: -1px;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      color: #d3dce6;
      &:hover {
        // color: #409eff;
        color: $--color-primary;
        background-color: #f9fafc;
      }
      i {
        display: inline-block;
        position: relative;
        font-size: 16px;
        line-height: 44px;
        transition: 0.3s;
      }
      span {
        display: inline-block;
        position: absolute;
        transform: translateX(10px);
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
        opacity: 0;
      }
      .hovering_i {
        transform: translateX(-40px);
      }
      .hovering_span {
        transform: translateX(-30px);
        opacity: 1;
      }
    }
  }
}
</style>
