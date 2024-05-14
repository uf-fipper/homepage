<script setup lang="ts">
import { type Component } from 'vue';
import LocationSvg from '@/components/svg/LocationSvg.vue';
import NameSvg from '@/components/svg/NameSvg.vue';

interface LeftDesItem {
  svg: Component;
  text: string;
}

interface LineItem {
  text: string;
  time: string;
}

let leftDesItems: LeftDesItem[] = [
  {
    svg: LocationSvg,
    text: 'China-Henan',
  },
  {
    svg: NameSvg,
    text: 'Sias',
  },
];

// 时间线
let lineItems: LineItem[] = [
  { text: '敬请期待', time: '2024.1' },
  { text: 'ICP备案成功', time: '2023.8' },
  { text: '注册域名zyyo.net', time: '2023.3' },
  { text: '出来后洗心革面', time: '2021.2' },
  { text: '...', time: '...' },
];

// 标签
let tags: string[] = ['网瘾', '小学生', '大一', '网页', 'linux', '跑者', '前端', '骑行'];
</script>

<template>
  <div class="zyyo-left">
    <div class="logo zyyo-left-logo">
      <img
        style="position: absolute; top: -15%; left: -10%; width: 120%; aspect-ratio: 1/1"
        src="@/assets/img/logokuang.png"
      />
    </div>
    <div class="left-div left-des">
      <div v-for="(item, i) in leftDesItems" :key="`left-des-item-${i}`" class="left-des-item">
        <Component :is="item.svg"></Component>
        {{ item.text }}
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
          <div>{{ item.text }}</div>
          <div>{{ item.time }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.logo {
  flex-shrink: 0;
  width: 90%;
  position: relative;
  aspect-ratio: 1/1;
  margin-top: 50px;
  background-size: cover;
  border-radius: 50%;
}

.zyyo-left-logo {
  background-image: url(@/assets/img/logo.png);
}

.zyyo-left {
  overflow-y: scroll;
  width: 230px;
  height: 100vh;
  display: flex;
  padding: 0 15px;
  position: fixed;
  align-items: center;
  flex-direction: column;
}

.zyyo-left::-webkit-scrollbar {
  display: none;
}

.left-div {
  flex-shrink: 0;
  width: 100%;
  border-radius: 13px;
  margin-top: 15px;
  padding: 20px;
  backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);
}

.left-des {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-des-item {
  display: flex;
  align-items: center;
  line-height: 20px;
  font-size: 15px;
  margin-bottom: 5px;
  overflow: hidden;
}

.left-des-item i,
.left-des-item svg {
  width: 16px;
  height: 16px;
  fill: var(--fill);
  font-size: 18px;
  margin-right: 10px;
}

.left-tag {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 14px;
}

.left-tag-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  margin: 0px 5px 5px 0;
  padding: 10px;
  font-size: 13px;
  border-radius: 10px;
  background: var(--left_tag_item);
}

#line {
  width: 100%;
  height: 200px;
  font-size: 13px;
  padding-left: 8px;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

#line li {
  list-style: none;
  position: relative;
  padding: 15px 0px 0px 15px;
  border-left: 2px solid #d5d5d5;
  border-radius: 0;
  scroll-snap-align: end;
  color: var(--main_text_color);
}

#line li:first-child .focus:first-child {
  background-color: #aaffcd;
  animation: focus 1.8s ease infinite;
}

#line::-webkit-scrollbar {
  display: none;
}

.focus {
  width: 8px;
  height: 8px;
  border-radius: 22px;
  background-color: rgb(255 255 255);
  border: 2px solid #fff;
  position: absolute;
  left: -5px;
  top: 50%;
}

@media (max-width: 800px) {
  .zyyo-left {
    display: none;
  }
}
</style>
