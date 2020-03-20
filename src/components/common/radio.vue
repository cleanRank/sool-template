<template>
<label for="" class="godon-radio">
    <span class="godon-radio-input"></span>
    <span class="godon-radio-label"><slot></slot></span>
  </label>
</template>
<script>
export default {
  name: 'WButton',
  props: {
    value: {
      default: '确认'
    }
  },
  methods: {
  }
}
</script>
