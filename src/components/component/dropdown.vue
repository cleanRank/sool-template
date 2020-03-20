<template>
<div class="godon-dropdown" :class="[dropclass]" @click.stop="toggleDropdown">
  <slot></slot>
  <slot name="menu"></slot>
</div>
</template>
<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'dropdown',
  data () {
    return {
      down: 0
    }
  },
  props: {
    dropclass: {
      type: String,
      default: 'short-dropdown'
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      bind: "getBindClick"
    })
  },
  mounted () {
    if (!this.bind) {
      document.addEventListener('click', function (e) {
        let $down = document.querySelector('.down')
        if ($down) {
          $down.classList.remove('down')
          return false
        }
      })
      this.updateClick(1)
    }
  },
  methods: {
    ...mapActions([
      'updateClick'
    ]),
    toggleDropdown (e) {
      let eTag = e.currentTarget.className
      let flag = eTag.split(/\s+/).includes('down')
      let drop = document.querySelectorAll('.godon-dropdown')
      drop.forEach(v => {
        if (v.innerText != e.innerText) {
          v.classList.remove("down")
        }
      })
      if (!flag) {
        e.currentTarget.classList.add('down')
      }
    },
    handleClose (e) {
    }
  }
}
</script>
<style lang="scss">
$color: #5584FF;
 .components-button .el-button{
  width: 100%;
  padding: 7px 0;
  font-size: 12px;
  background: $color;
  border-radius: 3px;
  margin:30px auto 26px;
}
</style>
