<script setup lang="ts">
import { type Component } from 'vue';
import LocationSvg from '@/components/svg/LocationSvg.vue';
import NameSvg from '@/components/svg/NameSvg.vue';
import UserLogo from './UserLogo.vue';

defineProps<{ leftOpen: boolean; popLeft: () => any }>();

interface LeftDesItem {
  svg: Component;
  text: string;
}

interface LineItem {
  text1: string;
  text2: string;
}

let leftDesItems: LeftDesItem[] = [
  {
    svg: LocationSvg,
    text: '日本-东京',
  },
  {
    svg: NameSvg,
    text: '学生',
  },
];

// 时间线
let lineItems: LineItem[] = [
  { text1: '2024-4-04', text2: '个人网站正式发布' },
  { text1: '2024-1-1', text2: '跨年期间X遭封禁' },
  { text1: '2023-6-15', text2: '决定注册的第N个X' },
  { text1: '2023-6-10', text2: '遭到封禁后洗心革面' },
  { text1: '...', text2: '...' },
  { text1: '2022-7', text2: '祥太决定创建第一个X' },
  { text1: '2022-6', text2: 'Hello World！' },
];

// 标签
let tags: string[] = ['少年', '初三', '喜涩涩', '0.5', '可攻可受', 'ISFP-T', '米粉', '宅男'];
</script>

<template>
  <div @click="popLeft()" class="left" :class="{ 'left-open': leftOpen }">
    <div class="left-main" :class="{ 'left-main-open': leftOpen }">
      <UserLogo></UserLogo>
      <div class="left-div left-des">
        <div v-for="(item, i) in leftDesItems" :key="`left-des-item-${i}`" class="left-des-item">
          <div class="left-div-item">
            <Component :is="item.svg"></Component>
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="left-div left-tag">
        <span class="left-tag-item" v-for="(tag, i) in tags" :key="'tag-' + i">
          {{ tag }}
        </span>
      </div>
      <div class="left-div left-time">
        <ul id="line">
          <li v-for="(item, i) in lineItems" :key="'line-item-' + i">
            <div class="focus"></div>
            <div>{{ item.text1 }}</div>
            <div>{{ item.text2 }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left {
  width: 250px;
  height: 100vh;
  display: flex;
  padding: 0 15px;
  position: fixed;
  align-items: center;
  flex-direction: column;
}

.left-main {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;

  align-items: center;
  flex-direction: column;
}

.left-main::-webkit-scrollbar {
  display: none;
}

.left-div {
  flex-shrink: 0;
  width: 100%;
  border-radius: 13px;
  margin-top: 15px;
  padding: 20px;
  background: var(--project-item-bg-color, rgba(249, 250, 251, 0.6));
}

.left-div-item {
  display: flex;
  align-items: center;
  line-height: 20px;
  font-size: 15px;
  gap: 8px;
  overflow: hidden;
}

.left-des {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.left-tag {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px;
}

.left-tag-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 10px;
  font-size: 13px;
  border-radius: 10px;
  background: var(--main-bg-color, linear-gradient(50deg, #a2d1ff, #ffffff));
}

#line {
  width: 100%;
  height: 200px;
  font-size: 13px;
  padding-left: 10px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

#line li {
  list-style: none;
  position: relative;
  padding: 15px 0px 0px 15px;
  border-left: 2px solid #adbeff;
  border-radius: 0;
  scroll-snap-align: end;
  color: #82888a;
}

#line li:first-child .focus:first-child {
  background-color: #2ecc71;
  animation: focus 1.8s ease infinite;
}

#line::-webkit-scrollbar {
  display: none;
}

.focus {
  width: 15px;
  height: 15px;
  border-radius: 22px;
  background-color: #8da1ff;
  border: 2px solid #fff;
  position: absolute;
  left: -9px;
  top: 50%;
}

@media (max-width: 800px) {
  .left {
    position: fixed;
    z-index: 9999;
    padding: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: none;
    transition: all 0.3s linear;
  }

  .left-main {
    position: absolute;
    float: left;
    width: 60vw;
    /*侧边栏+按钮宽度*/
    left: -60vw;
    /*侧边栏隐藏在屏外宽度*/
    padding: 15px;
    box-sizing: border-box;
    background: var(--main-bg-color, linear-gradient(50deg, #a2d1ff, #ffffff));
    transition: all 0.25s ease-out;
  }

  .left-open {
    pointer-events: auto;
    background: rgba(100, 100, 100, 0.5);
  }

  .left-main-open {
    left: 0;
  }
}
</style>
