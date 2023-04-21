<template>
  <button
    @click="handleClick"
    class="jj-button"
    :class="[
      type ? 'jj-button--' + type : '',
      size ? 'jj-button--' + size : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
  >
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default" class="jj-button-span">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'jj-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    size: String,
  },
  data() {
    return {}
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>
<style lang="scss" scoped>
@import '../../theme-chalk/src/button.scss';

.jj-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: $--button-default-background-color;
  border: $--border-base;
  border-color: $--button-default-border-color;
  color: $--button-default-font-color;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: $--button-font-weight;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  & + & {
    margin-left: 10px;
  }

  &:hover,
  &:focus {
    color: $--color-primary;
    border-color: $--color-primary-light-7;
    background-color: $--color-primary-light-9;
  }
  &:active {
    border-color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
  }
  i + .jj-button-span {
    margin-left: 5px;
  }
  &.jj-button--primary {
    @include button-variant($--button-primary-font-color, $--button-primary-background-color, $--button-primary-border-color);
  }
  &.jj-button--success {
    @include button-variant($--button-success-font-color, $--button-success-background-color, $--button-success-border-color);
  }
  &.jj-button--info {
    @include button-variant($--button-info-font-color, $--button-info-background-color, $--button-info-border-color);
  }
  &.jj-button--warning {
    @include button-variant($--button-warning-font-color, $--button-warning-background-color, $--button-warning-border-color);
  }
  &.jj-button--danger {
    @include button-variant($--button-danger-font-color, $--button-danger-background-color, $--button-danger-border-color);
  }
  &.jj-button--text {
    border-color: transparent;
    color: $--color-primary;
    background: transparent;
    padding-left: 0;
    padding-right: 0;

    &:hover,
    &:focus {
      color: mix($--color-white, $--color-primary, $--button-hover-tint-percent);
      border-color: transparent;
      background-color: transparent;
    }
    &:active {
      color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
      border-color: transparent;
      background-color: transparent;
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:focus {
      border-color: transparent;
    }
  }

  &.is-plain {
    &:hover,
    &:focus {
      background: $--color-white;
      border-color: $--color-primary;
      color: $--color-primary;
    }
    &:active {
      background: $--color-white;
      border-color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
      color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
      outline: none;
    }
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  // 有属性 is-disabled 时的样式，同时包含 jj-button-- 系列的is-disabled样式写在 @button-variant 中
  &.is-disabled {
    &,
    &:hover,
    &:focus {
      color: $--button-disabled-font-color;
      cursor: not-allowed;
      background-image: none;
      background-color: $--button-disabled-background-color;
      border-color: $--button-disabled-border-color;
    }

    // &.el-button--text {
    //   background-color: transparent;
    // }

    &.is-plain {
      &,
      &:hover,
      &:focus {
        background-color: $--color-white;
        border-color: $--button-disabled-border-color;
        color: $--button-disabled-font-color;
      }
    }
  }

  // 默认尺寸
  @include button-size($--button-padding-vertical, $--button-padding-horizontal, $--button-font-size, $--button-border-radius);
  // 中等按钮
  &.jj-button--medium {
    @include button-size($--button-medium-padding-vertical, $--button-medium-padding-horizontal, $--button-medium-font-size, $--button-medium-border-radius);
  }
  // 小型按钮
  &.jj-button--small {
    @include button-size($--button-small-padding-vertical, $--button-small-padding-horizontal, $--button-small-font-size, $--button-small-border-radius);
  }
  // 超小按钮
  &.jj-button--mini {
    @include button-size($--button-mini-padding-vertical, $--button-mini-padding-horizontal, $--button-mini-font-size, $--button-mini-border-radius);
  }
}
</style>
