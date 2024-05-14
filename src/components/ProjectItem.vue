<script setup lang="ts">
export interface ProjectItemProps {
  title: string;
  value: string;
  href: string;
  image: string;
  extClass: 'a' | 'b';
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

<style scoped>
.projectItem {
  margin: 7px;
  display: flex;
  background-color: var(--item_bg_color);
  border-radius: 8px;
  padding: 15px;
  height: 95px;
  width: calc(25% - 15px);
  backdrop-filter: blur(var(--card_filter));
  transition:
    opacity 0.3s ease,
    background-color 0.3s ease,
    border 0.3s ease,
    transform 0.2s ease;
}

.projectItem {
  display: flex;
  background-color: var(--item_bg_color);
  border-radius: 8px;
  padding: 15px;
  height: 100px;
  width: calc(25% - 15px);
  backdrop-filter: blur(var(--card_filter));
  transition:
    opacity 0.5s ease,
    background-color 0.2s ease,
    border 0.2s ease,
    transform 0.3s ease;
}

.projectItem:hover {
  box-shadow: 0 8px 16px -4px #2c2d300c;
  transform: translateY(-2px);
}

.projectItem.pressed {
  transform: scale(0.9);
  /* 缩小到原来的0.9倍 */
  background-color: var(--item_hover_color);
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
  font-size: 12px;
  margin-top: 15px;
  color: var(--item_left_text_color);
}

.projectItemLeft h1 {
  font-weight: normal;
  font-size: 16px;
  margin: 0px;

  transition: font-size 0.4s ease;
  color: var(--item_left_title_color);
}

.projectItemLeft {
  transition: width 0.4s ease;
  height: 100%;
  width: 80%;
}

.projectItemRight {
  overflow: hidden;
  transition: width 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
}

.projectItemRight img {
  height: 39px;
  width: 39px;
}

@media (max-width: 1150px) {
  .a {
    width: calc(50% - 20px);
  }
  .projectItem {
    margin: 10px;
  }
  .b {
    width: calc(50% - 20px);
  }
}

@media (max-width: 800px) {
  .a .projectItemRight {
    display: none;
  }

  .a .projectItemRight img {
    display: none;
  }

  .a .projectItemLeft {
    width: 100%;
  }

  .a {
    width: calc(50% - 18px);
    margin: 9px;
  }

  .b {
    height: 110px;
    margin: 8px 15px;
    width: calc(100% - 30px);
  }

  .projectItemLeft p {
    font-size: 13px;
  }

  .projectItemLeft h1 {
    font-size: 18px;
  }

  .projectItem:hover h1 {
    font-size: 20px;
  }
}
</style>
