<template>
  <el-pagination class="godon-pagination"
    :layout="layout"
    :background="background"
    :current-page.sync="currentPage"
    :page-size.sync="size"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>
<script>
export default {
  name: 'panel',
  props: {
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    background: {
      type: Boolean,
      default: true
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next'
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    size: {
      get () {
        return this.limit
      },
      set (val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange (val) {
    },
    handleCurrentChange (val) {
      this.$emit('changeCurrentPage', val)
    }
  }
}
</script>
<style lang="scss">
</style>
