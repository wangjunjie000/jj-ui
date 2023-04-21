<template>
  <div class="base-modal" :style="{ zIndex: zIndex }" v-if="show"></div>
</template>

<script>
export default {
  data() {
    return {
      zIndex: 10,
      show: false,
    }
  },

  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },
}
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
</style>
