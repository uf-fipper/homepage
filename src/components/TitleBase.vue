<script setup lang="ts">
import { type Component } from 'vue';

interface Props {
  comp: Component;
  text: string;
}

defineProps<Props>();
</script>

<template>
  <div class="title">
    <Component :is="comp"></Component>
    {{ text }}
  </div>
</template>

<style scoped>
.title {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 26px;
  font-weight: 800;
  margin: 20px 0;
  transition: all 0.4s ease;
}

.title:hover {
  transform: translateY(-5px);
}
</style>
