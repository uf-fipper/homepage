<script setup lang="ts">
import type { Component } from 'vue';
import type { ProjectItemInnerProps } from './ProjectItemInner.vue';
import ProjectItemInner from './ProjectItemInner.vue';
import TitleBase from './TitleBase.vue';

export interface ProjectItemProps {
  titleSvg: Component;
  title: string;
  items: ProjectItemInnerProps[];
}

defineProps<ProjectItemProps>();
</script>

<template>
  <TitleBase :comp="titleSvg" :text="title"></TitleBase>
  <div class="projectList">
    <ProjectItemInner v-for="(item, i) in items" :key="`project-item-inner-${i}`" :item="item">
    </ProjectItemInner>
  </div>
</template>

<style scoped>
.projectList {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 5px;
}

@media (max-width: 800px) {
  .projectList {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
