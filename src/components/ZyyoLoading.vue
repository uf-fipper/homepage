<script setup lang="ts">
import { ref } from 'vue';

let showLoadingOpacity = ref(100);
setTimeout(() => {
  showLoadingOpacity.value = 0;
}, 1000);
</script>

<template>
  <div id="zyyo-loading" v-bind:style="{ opacity: showLoadingOpacity }">
    <div id="zyyo-loading-center"></div>
  </div>
</template>

<style scoped>
#zyyo-loading {
  background: radial-gradient(white, #d8eaff);
  background-size: 100%;
  background-position: center;

  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999999;
  margin-top: 0px;
  top: 0px;
  pointer-events: none;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#zyyo-loading-center {
  height: 150px;
  width: 150px;
  position: relative;
  border-radius: 50%;
  background: #472eff;

  animation: zoom 1s linear infinite;
}
</style>
