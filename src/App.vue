<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style>
html[data-theme='Dark'] {
  --main-bg-color: rgb(0, 0, 0);
  --main-text-color: #fff;
  --gradient-start: rgb(133, 62, 255);
  --gradient-middle: #f76cc6;
  --gradient-end: rgb(255, 255, 255);
  --purple-text-color: #747bff;
  --text-bg-color: rgb(26, 4, 48);
  --icon-bg-color: rgb(19, 20, 24);
  --icon-1-hover-color: rgb(68, 120, 241);
  --icon-2-hover-color: rgb(232, 68, 241);
  --icon-3-hover-color: rgb(179, 206, 0);
  --icon-4-hover-color: rgb(201, 13, 0);
  --icon-5-hover-color: rgb(111, 44, 20);
  --project-item-bg-color: rgb(19, 20, 24);
  --project-item-hover-color: rgb(19, 23, 27);
  --project-item-left-title-color: rgb(255, 255, 255);
  --project-item-left-text-color: rgb(142, 142, 142);
  --footer-text-color: #646464;
}

* {
  font-family: 'b', 'a', sans-serif;
}

* {
  cursor: url('/static/sb.cur'), auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  transition: all 0.1s ease;
}

a:hover,
a:link,
a:visited,
a:active,
a:focus {
  text-decoration: none;
  outline: none;
  border: none;
  color: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* 设置滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--main-text-color, #000000);
  border-radius: 8px;
  height: 20%;
}

::-webkit-scrollbar-track {
  background-color: var(--main-bg-color, linear-gradient(50deg, #a2d0ff, #ffffff));
}

body {
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: var(--main-bg-color, linear-gradient(50deg, #a2d1ff, #ffffff));
  overflow-x: hidden;
  justify-content: center;
  color: var(--main-text-color, #000000);
}

#app {
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  justify-content: center;
  color: var(--main-text-color, #000000);
}

@keyframes backgroundSizeAnimation {
  0% {
    background-position: 100%;
  }

  25% {
    background-position: 50%;
  }

  50% {
    background-position: 0%;
  }

  75% {
    background-position: 50%;
  }

  100% {
    background-position: 100%;
  }
}

@font-face {
  font-family: 'a';
  /*中文字体*/
  src: url(https://i.zyyo.net/upload/%E5%AD%97%E4%BD%93/%E5%85%B6%E4%BB%96%E5%AD%97%E4%BD%93/Hubot/Hubot%20Sans/Hubot-Sans.woff2);
  font-display: swap;
}

@font-face {
  font-family: 'b';
  /*英文字体*/
  src: url();
  font-display: swap;
}
</style>
