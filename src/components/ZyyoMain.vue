<script setup lang="ts">
import { ref } from 'vue';
import ZyyoLeft from './ZyyoLeft.vue';
import ZyyoRight from './ZyyoRight.vue';

interface Props {
  pop: (url?: string) => any;
}

defineProps<Props>();

let leftOpen = ref(false);

function left() {
  leftOpen.value = !leftOpen.value;
}
</script>

<template>
  <div class="main">
    <ZyyoLeft :pop-left="left" :left-open="leftOpen"></ZyyoLeft>
    <ZyyoRight :pop="pop" :pop-left="left"></ZyyoRight>
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
