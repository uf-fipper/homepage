<script setup lang="ts">
export interface ProjectItemProps {
  title: string;
  value: string;
  href: string;
  image: string;
  extClass: string;
  imageAlt?: string;
}
defineProps<{ item: ProjectItemProps }>();

function handlePress(event: Event) {
  let target = event.target as HTMLAnchorElement;
  target.classList.add('pressed');
}

function handleRelease(event: Event) {
  let target = event.target as HTMLAnchorElement;
  target.classList.remove('pressed');
}

function handleCancel(event: Event) {
  let target = event.target as HTMLAnchorElement;
  target.classList.remove('pressed');
}
</script>

<template>
  <a
    :class="`projectItem ${item.extClass}`"
    target="_blank"
    :href="item.href"
    @mousedown="handlePress"
    @mouseup="handleRelease"
    @mouseleave="handleCancel"
    @touchstart="handlePress"
    @touchend="handleRelease"
    @touchcancel="handleCancel"
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
