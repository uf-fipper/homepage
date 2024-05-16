<script setup lang="ts">
import ZyyoLeft from './ZyyoLeft.vue';
import ZyyoRight from './ZyyoRight.vue';

interface Props {
  pop: (url?: string) => any;
}

defineProps<Props>();
</script>

<template>
  <div class="main">
    <ZyyoLeft></ZyyoLeft>
    <ZyyoRight :pop="pop"></ZyyoRight>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  max-width: 1200px;
  position: relative;
  flex-direction: row;
}
</style>
