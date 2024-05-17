<script setup lang="ts">
import { ref } from 'vue';
import ZyyoLoading from '@/components/ZyyoLoading.vue';
import ZyyoMain from '@/components/ZyyoMain.vue';
import TxcIconSvg from '../components/svg/TxcIconSvg.vue';
import TxcChangeLog from 'txc-change-log';

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

const txcChangeLog = new TxcChangeLog({ id: 648905 });

document.title = '祥太の个人主页';
let link = document.querySelector('link[rel*="icon"]') as HTMLLinkElement;
link.href = new URL('@/assets/img/nev.ico', import.meta.url).href;

let tcMainElementSrc = ref('');
let tcMainActive = ref(false);
let tcActive = ref(false);

function pop(imageURL?: string) {
  console.log('pop', imageURL);
  if (imageURL) {
    tcMainElementSrc.value = imageURL;
  }
  tcMainActive.value = !tcMainActive.value;
  tcActive.value = !tcActive.value;
}

if (localStorage.getItem('txcShowed') == null) {
  setTimeout(() => {
    txcChangeLog.showModal();
  }, 300);
  localStorage.setItem('txcShowed', '1');
}
</script>

<template>
  <ZyyoLoading></ZyyoLoading>
  <ZyyoMain :pop="pop"></ZyyoMain>
  <div class="tc" :class="{ active: tcActive }">
    <div
      class="tc-main"
      @click="(event) => event.stopPropagation()"
      v-bind:class="{ active: tcMainActive }"
    >
      <img class="tc-img" :src="tcMainElementSrc" alt="" srcset="" />
    </div>
    <div @click="() => pop()" class="tc-close">
      <svg
        t="1700047644371"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="950"
        width="19px"
        height="19px"
      >
        <path
          d="M610.616405 512.423878l391.647127 391.939565a68.722849 68.722849 0 0 1 0 98.332161 72.012772 72.012772 0 0 1-100.306115 0l-390.404267-391.354689-392.012675 391.28158a69.74638 69.74638 0 0 1-98.551489-98.551489l391.793346-391.720237L20.988986 119.533891A69.74638 69.74638 0 0 1 119.540475 20.982402l392.158893 392.451331L901.957417 23.248793a72.012772 72.012772 0 0 1 100.306115 0 68.722849 68.722849 0 0 1 0 98.332161L610.616405 512.423878z"
          p-id="951"
          fill="#000000"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.tc {
  position: fixed;
  display: flex;
  visibility: hidden;
  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0);
  z-index: 99999;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.tc-main {
  z-index: 100000;
  width: 80%;
  max-width: 300px;
  /* 根据需要调整最大宽度 */
  min-height: 200px;
  background-color: #ffffff;
  border-radius: 12px;
  opacity: 0;
  display: flex;
  transition: all 0.15s linear;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: translateY(20%);
}

.tc-img {
  width: 100%;
  height: 100%;
}

.tc.active {
  visibility: visible;
}

.tc-main.active {
  opacity: 1;
  transform: translateY(0);
}

.tc-close {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  background-color: var(--project-item-bg-color, rgba(249, 250, 251, 0.6));
  margin-top: 30px;
  border-radius: 50%;
}
</style>
