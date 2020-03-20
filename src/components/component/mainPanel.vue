<template>
  <div class="godon-main-panel">
    <slot></slot>
    <span class="panel-oprator">
      <i class="el-icon-close" @click="closeMainPanel"></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'panel',
  props: {
  },
  methods: {
    closeMainPanel () {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>
<style lang="scss">
</style>
