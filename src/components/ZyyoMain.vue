<script setup lang="ts">
import ZyyoLeft from './ZyyoLeft.vue';
import ZyyoRight from './ZyyoRight.vue';

interface Props {
  pop: (url?: string) => any;
}

defineProps<Props>();
</script>

<template>
  <div class="zyyo-main">
    <ZyyoLeft></ZyyoLeft>
    <ZyyoRight :pop="pop"></ZyyoRight>
  </div>
</template>

<style scoped>
.zyyo-main {
  width: 100%;
  transition: transform 0.5s ease;
  max-width: 1150px;
  position: relative;
  flex-direction: row;
}
</style>
