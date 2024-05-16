<script setup lang="ts">
import { ref } from 'vue';
import ZyyoLoading from '@/components/ZyyoLoading.vue';
import ZyyoMain from '@/components/ZyyoMain.vue';

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

let tcMainElementSrc = ref('');
let tcMainActive = ref(false);
let tcActive = ref(false);

function pop(imageURL?: string) {
  if (imageURL) {
    tcMainElementSrc.value = imageURL;
  }
  tcMainActive.value = !tcMainActive.value;
  tcActive.value = !tcActive.value;
}
</script>

<template>
  <ZyyoLoading></ZyyoLoading>
  <ZyyoMain :pop="pop"></ZyyoMain>
  <footer>
    Zyyo © 2024 |
    <a href="https://beian.miit.gov.cn/"> 豫ICP备2023015852号-1 </a>
  </footer>
  <div @click="() => pop()" class="tc" v-bind:class="{ active: tcActive }">
    <div
      class="tc-main"
      @click="(event) => event.stopPropagation()"
      v-bind:class="{ active: tcMainActive }"
    >
      <img class="tc-img" :src="tcMainElementSrc" alt="" srcset="" />
    </div>
  </div>
</template>

<style scoped>
.zyyo-filter {
  position: fixed;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(var(--back_filter));
  -webkit-backdrop-filter: blur(var(--back-filter));
  z-index: -99999999;
  background: var(--back_filter_color);
}

.tc {
  position: fixed;
  display: flex;
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  background: rgba(20, 20, 20, 0.5);
  z-index: 99999;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.tc-main {
  z-index: 100000;
  width: 80%;
  max-width: 300px;
  min-height: 200px;
  background-color: #ffffff;
  border-radius: 15px;

  display: flex;
  transition: transform 0.2s linear;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: translateY(50%) scale(0.7);
}

.tc-img {
  width: 100%;
  height: 100%;
}

.tc.active {
  visibility: visible;
}

.tc-main.active {
  transform: translateY(0) scale(1);
}

footer {
  position: absolute;
  padding: 10px;
  text-align: center;
  width: 100%;
  backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);
  color: var(--footer_text_color);
  font-size: 13px;
  bottom: 0;
}

@font-face {
  font-family: 'a';
  /*中文字体*/
  src: url();
  font-display: swap;
}

@font-face {
  font-family: 'b';

  src: url(@/assets/fonts/Ubuntu-Regular.ttf);
  font-display: swap;
}

@font-face {
  font-family: 'title';
  /*英文字体*/
  src: url(@/assets/fonts/Pacifico-Regular.ttf);
  font-display: swap;
}
</style>
