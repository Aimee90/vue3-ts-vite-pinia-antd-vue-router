<template>
  <div class="index">{{message}}</div>
</template>
<script setup lang = "ts">
  import { ref } from 'vue'
  const message = ref('home-layout')
</script>
<style style scoped>
  .index {
  }
</style>
