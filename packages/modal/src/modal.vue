<template>
  <div class="base-modal" :style="{ zIndex: zIndex }" v-if="show"></div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      zIndex: this.$JJUI.zIndex - 1,
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
