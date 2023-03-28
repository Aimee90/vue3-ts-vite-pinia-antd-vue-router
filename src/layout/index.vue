<template>
  <div class="index">{{message}}</div>
</template>
<script setup lang = "ts">
  import { ref } from 'vue'
  const message = ref('layout')
</script>
<style style lang="less" scoped>
  .index {
  }
</style>
