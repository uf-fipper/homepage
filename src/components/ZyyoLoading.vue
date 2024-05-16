<script setup lang="ts">
import { ref } from 'vue';

let pageLoadingStyles = ref({
  opacity: '1',
  'background-size': '100%',
});
let pageLoadingCenterStyles = ref({
  height: '200px',
  width: '200px',
  opacity: '1',
});
setTimeout(() => {
  pageLoadingStyles.value = {
    opacity: '0',
    'background-size': '200%',
  };
  pageLoadingCenterStyles.value = {
    height: '500px',
    width: '500px',
    opacity: '0',
  };
}, 300);
</script>

<template>
  <div id="PageLoading" :style="pageLoadingStyles">
    <div id="PageLoading-zyyo">
      <div id="PageLoading-zyyo-center" :style="pageLoadingCenterStyles">
        <div class="object" id="object_four"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_one"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#PageLoading {
  background: radial-gradient(white, #d8eaff);
  background-size: 100%;
  background-position: center;
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 999999;
  margin-top: 0px;
  top: 0px;
  pointer-events: none;
  opacity: 1;
  transition: all 0.5s ease;
}

#PageLoading-zyyo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#PageLoading-zyyo-center {
  height: 200px;
  width: 200px;
  position: relative;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.object {
  -moz-border-radius: 50% 50% 50% 50%;
  -webkit-border-radius: 50% 50% 50% 50%;
  border-radius: 50% 50% 50% 50%;
  position: absolute;
  border-left: 5px solid #8887fa;
  border-right: 5px solid #ffc0cb;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  -webkit-animation: animate 2.5s infinite;
  animation: animate 2.5s infinite;
}

#object_one {
  width: 20%;
  height: 20%;
}

#object_two {
  width: 35%;
  height: 35%;
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}

#object_three {
  width: 45%;
  height: 45%;
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}

#object_four {
  width: 55%;
  height: 55%;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

@-webkit-keyframes animate {
  50% {
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  100% {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes animate {
  50% {
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  100% {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
