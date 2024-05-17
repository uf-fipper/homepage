<script setup lang="ts">
import { ref } from 'vue';

export interface ProjectItemInnerProps {
  title: string;
  value: string;
  href?: string;
  image: string;
  imageAlt?: string;
  onclick?: (e: MouseEvent) => any;
}
defineProps<{ item: ProjectItemInnerProps }>();

let fadeInVisible = ref(false);

function checkProjectItem(e: Event) {
  const elem = e.target as HTMLAnchorElement;
  const projectItemTop = elem.getBoundingClientRect().top;
  if (projectItemTop < window.innerHeight * 1.2) {
    fadeInVisible.value = true;
  }
}

setTimeout(() => {
  fadeInVisible.value = true;
}, 300);
</script>

<template>
  <a
    class="projectItem"
    :class="{ 'fade-in-visible': fadeInVisible }"
    target="_blank"
    :href="item.href"
    @click="(e) => item.onclick && item.onclick(e)"
    @scroll="checkProjectItem"
    @resize="checkProjectItem"
  >
    <div class="projectItemLeft">
      <h1>{{ item.title }}</h1>
      <p>{{ item.value }}</p>
    </div>
    <div class="projectItemRight">
      <img :src="item.image" :alt="item.imageAlt || ''" />
    </div>
  </a>
</template>

<style scoped>
.projectItem {
  opacity: 0;
  transition-delay: 0.4s;
  transform: translateY(110px);
  /*淡入动画*/
  display: flex;
  background-color: var(--project-item-bg-color, rgba(249, 250, 251, 0.6));
  border-radius: 8px;
  padding: 18px;
  height: 105px;
  width: calc(50% - 60px);
  transition: all 0.5s ease;
}

.projectItem.fade-in-visible {
  opacity: 1;
  transform: translateY(0);
}

.projectItem:hover {
  border: 0.8px solid #747bff;
  box-shadow: 0 8px 16px -4px #2c2d300c;
  background-color: var(--project-item-hover-color, rgba(244, 245, 246, 0.8));
}

.projectItem:hover .projectItemLeft {
  width: 100%;
}

.projectItem:hover .projectItemRight {
  width: 0%;
}

.projectItem:hover .projectItemRight img {
  transform: rotate(40deg);
}

.projectItem:hover h1 {
  font-size: 18px;
}

.projectItemLeft p {
  font-size: 13px;
  margin-top: 5px;
  color: var(--project-item-left-text-color, #7e7e7e);
}

.projectItemLeft h1 {
  font-weight: normal;
  font-size: 18px;
  margin: 0px;

  transition: all 0.4s ease;
  color: var(--project-item-left-title-color, #000000);
}

.projectItemLeft {
  transition: all 0.4s ease;
  height: 100%;
  width: 80%;
}

.projectItemRight {
  overflow: hidden;
  transition: all 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
}

.projectItemRight img {
  transition: all 0.1s ease;
  height: 44px;
  width: 44px;
}

@media (max-width: 1000px) {
  .projectItem {
    width: calc(100% - 25px);
  }
}

@media (max-width: 800px) {
  .projectItemLeft p {
    font-size: 14px;
  }

  .projectItemLeft h1 {
    font-size: 15px;
  }

  .projectItem:hover h1 {
    font-size: 20px;
  }
}
</style>
