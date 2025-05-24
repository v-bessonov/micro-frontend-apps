<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">Remote Vue App1 count is {{ count }}</button>
</template>

<style scoped>
button {
  background-color: #535bf2;
  color: white;
  width: 250px;
}
</style>