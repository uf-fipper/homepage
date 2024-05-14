<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style>
@import url(@/assets/root.css);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  transition: background-color 0.2s ease;
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
  width: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--main_text_color, #000000);
  border-radius: 8px;
  height: 20%;
}

::-webkit-scrollbar-track {
  background-color: var(--main_bg_color, linear-gradient(50deg, #a2d0ff, #ffffff));
}

html[data-theme='Dark'] {
  --main_bg_color: rgb(0, 0, 0);
  --main_text_color: #fff;
  --gradient: linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
  --purple_text_color: #747bff;
  --text_bg_color: rgb(26, 4, 48);
  --item_bg_color: rgb(19, 20, 24);
  --item_hover_color: rgb(19, 23, 27);
  --item_left_title_color: rgb(255, 255, 255);
  --item_left_text_color: rgb(142, 142, 142);
  --footer_text_color: #646464;
  --left_tag_item: linear-gradient(50deg, #1f2327, #000000);
  --card_filter: 0px;
  --back_filter: 0px;
  --back_filter_color: #00000000;
  --fill: #ffffff;
}

body {
  background: var(--main_bg_color);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

#app {
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  position: relative;
  font-family: 'b', 'a', sans-serif;
  transition: color 0.1s ease;
  justify-content: center;
  color: var(--main_text_color);
}

@keyframes zoom {
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
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
</style>
