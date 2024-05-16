<script setup lang="ts">
let logo2 = new URL('@/assets/img/logo2.png', import.meta.url);
</script>

<template>
  <div class="logo">
    <img
      style="position: absolute; top: -15%; left: -10%; width: 120%; aspect-ratio: 1/1"
      :src="logo2.href"
      alt="头像框"
      title="博主 1月17日 在线"
    />
  </div>
</template>

<style scoped>
.logo {
  flex-shrink: 0;
  width: 90%;
  position: relative;
  aspect-ratio: 1/1;
  margin-top: 50px;
  background-size: cover;
  border-radius: 50%;
  background-image: url(@/assets/img/nev.ico);
}
</style>
