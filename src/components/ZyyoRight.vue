<script setup lang="ts">
import { ref, type Component, type Ref } from 'vue';
import ProjectItem, { type ProjectItemProps } from '@/components/ProjectItem.vue';
import GithubSvg from '@/components/svg/GithubSvg.vue';
import MailSvg from '@/components/svg/MailSvg.vue';
import SponsorSvg from '@/components/svg/SponsorSvg.vue';
import WxSvg from '@/components/svg/WxSvg.vue';
import TitleBase from '@/components/TitleBase.vue';
import SiteTitleSvg from '@/components/svg/SiteTitleSvg.vue';
import ProjectTitleSvg from '@/components/svg/ProjectTitleSvg.vue';
import SkillsTitleSvg from '@/components/svg/SkillsTitleSvg.vue';
import ZyyoDescripton from './ZyyoDescripton.vue';
import TxcChangeLog from 'txc-change-log';

interface Props {
  pop: (url?: string) => any;
}

const props = defineProps<Props>();

const txcChangeLog = new TxcChangeLog({ id: 648905 });

interface IconItem {
  onclick?: (e: MouseEvent) => void;
  href?: string;
  svg: Component;
  name: string;
}

// icon 列表
let iconItems: IconItem[] = [
  {
    href: 'https://www.baidu.com',
    svg: GithubSvg,
    name: 'Github',
  },
  {
    href: 'mailto:i@zyyo.net',
    svg: MailSvg,
    name: 'Mail',
  },
  {
    onclick: () => props.pop(new URL('@/assets/img/wxzsm.jpg', import.meta.url).href),
    svg: SponsorSvg,
    name: '赞助',
  },
  {
    onclick: () => props.pop(new URL('@/assets/img/wx.jpg', import.meta.url).href),
    svg: WxSvg,
    name: '微信',
  },
];

// site 列表
let siteProjectItems: ProjectItemProps[] = [
  {
    title: '博客',
    value: '记录摆烂日常',
    href: 'https://blog.zyyo.net',
    image: new URL('@/assets/img/i1.png', import.meta.url).href,
    extClass: 'a',
  },
  {
    title: '云盘',
    value: '存储收集文件',
    href: 'https://i.zyyo.cc',
    image: new URL('@/assets/img/i2.png', import.meta.url).href,
    extClass: 'a',
  },
  {
    title: '实验室',
    value: '收集有趣html作品',
    href: 'https://zyyo.cc',
    image: new URL('@/assets/img/i3.png', import.meta.url).href,
    extClass: 'a',
  },
  {
    title: '日志',
    value: '查看日志',
    image: new URL('@/assets/img/i3.png', import.meta.url).href,
    extClass: 'a',
    onclick: () => {
      txcChangeLog.showModal();
    },
  },
];

// project 列表
let projectProjectItems: ProjectItemProps[] = [
  {
    title: 'ZYYO主页',
    value: '本站同款',
    href: 'https://github.com/ZYYO666/homepage',
    image: new URL('@/assets/img/i5.png', import.meta.url).href,
    extClass: 'b',
  },
  {
    title: 'ZYYO主题',
    value: '一款ty主题',
    href: 'https://github.com/ZYYO666/ZYYO',
    image: new URL('@/assets/img/i6.png', import.meta.url).href,
    extClass: 'b',
  },
];

function setCookie(name: string, value: string, days: number) {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(name: string) {
  let nameEQ = name + '=';
  let cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

let html = document.querySelector('html') as unknown as HTMLDivElement;
let themeState: Ref<'Light' | 'Dark'> = ref(getCookie('themeState') == 'Dark' ? 'Dark' : 'Light');
let tanChiSheSrc = ref('');

const tanChiSheDarkUrl = new URL(`@/assets/svg/snake-Dark.svg`, import.meta.url);
const tanChiSheLightUrl = new URL(`@/assets/svg/snake-Light.svg`, import.meta.url);

function changeTheme() {
  const theme = themeState.value;
  const url = theme == 'Dark' ? tanChiSheDarkUrl : tanChiSheLightUrl;
  tanChiSheSrc.value = url.href;
  html.dataset.theme = theme;
  setCookie('themeState', theme, 365);
}
changeTheme();
</script>

<template>
  <div class="zyyo-right">
    <header>
      <ZyyoDescripton></ZyyoDescripton>

      <div class="iconContainer">
        <a
          v-for="(item, i) in iconItems"
          class="iconItem"
          target="_blank"
          :href="item.href"
          :key="'icon-item-' + i"
          @click="(e: MouseEvent) => item.onclick && item.onclick(e)"
        >
          <Component :is="item.svg"></Component>
          <div class="iconTip">{{ item.name }}</div>
        </a>
        <a class="switch">
          <div class="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              class="onoffswitch-checkbox"
              id="myonoffswitch"
              @change="
                () => {
                  themeState = themeState == 'Dark' ? 'Light' : 'Dark';
                  changeTheme();
                }
              "
              :checked="themeState == 'Light'"
            />
            <label class="onoffswitch-label" for="myonoffswitch">
              <span class="onoffswitch-inner"></span>
              <span class="onoffswitch-switch"></span>
            </label>
          </div>
        </a>
      </div>

      <div class="tanChiShe">
        <img id="tanChiShe" :src="tanChiSheSrc" alt="" />
      </div>
    </header>

    <content>
      <TitleBase :comp="SiteTitleSvg" text="site"></TitleBase>
      <div class="projectList">
        <ProjectItem v-for="(item, i) in siteProjectItems" :key="item.title + i" :item="item">
        </ProjectItem>
      </div>
      <TitleBase :comp="ProjectTitleSvg" text="project"></TitleBase>
      <div class="projectList">
        <ProjectItem v-for="(item, i) in projectProjectItems" :key="item.title + i" :item="item">
        </ProjectItem>
      </div>
      <TitleBase :comp="SkillsTitleSvg" text="skills"></TitleBase>
      <div class="skill">
        <img id="skillPc" src="@/assets/svg/skillPc.svg" alt="" srcset="" />
        <img id="skillWap" src="@/assets/svg/skillWap.svg" alt="" srcset="" />
      </div>
    </content>
  </div>
</template>

<style scoped>
.zyyo-right {
  width: calc(100% - 230px);
  display: flex;
  padding: 24px;
  position: relative;
  float: right;
  padding-bottom: 50px;
  flex-direction: column;
}

.iconContainer {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin-top: 20px;
}

.iconContainer::-webkit-scrollbar {
  display: none;
}

.iconItem {
  width: 49px;
  height: 43px;
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  margin-left: 10px;

  backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);
  align-items: center;
  justify-content: center;
  transition:
    width 0.3s ease,
    opacity 0.3s ease,
    transform 0.3s ease;
  flex-shrink: 0;
}

.iconItem i,
.iconItem svg {
  width: 22px;
  height: 22px;
  fill: var(--fill);
  font-size: 22px;
  margin-right: 3px;
}

.iconItem:hover {
  width: 95px;
  transform: translateY(-2px);
  background: var(--item_hover_color);
}

.iconItem:hover .iconTip {
  display: block;
}

.iconTip {
  white-space: nowrap;
  display: none;
}

.switch {
  width: 55px;
  height: 43px;
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;
  margin-left: 10px;
  backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);

  align-items: center;
  justify-content: center;
  transition:
    width 1s ease,
    opacity 1s ease,
    transform 1s ease;
  flex-shrink: 0;
}

.switch:hover {
  width: 55px;
  /* transform: translateY(-2px); */
  background: var(--item_hover_color);
}

.onoffswitch {
  position: relative;
  width: 38px;
  height: 20px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.onoffswitch-checkbox {
  display: none;
}

.onoffswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  border-radius: 50px;
}

.onoffswitch-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200%;
  height: 100%;
  margin-left: -100%;
  transition: margin 0.2s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 50%;
  height: 100%;
  padding: 0;
  font-size: 12px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.onoffswitch-inner:before {
  content: '';
  background-color: rgb(110 110 110 / 50%);
  color: #ffffff;
  text-align: left;
}

.onoffswitch-inner:after {
  content: '';
  background-color: #272727;
  color: #fafafa;
  text-align: right;
}

.onoffswitch-switch {
  display: block;
  height: 70%;
  aspect-ratio: 1/1;
  background: #ffffff;
  position: absolute;
  top: 12.5%;
  bottom: 12.5%;
  right: 5px;

  border-radius: 20px;
  transition: right 0.2s ease-in 0s;
}

.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
  margin-left: 0;
}

.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
  right: 50%;
}

.tanChiShe {
  width: 85%;
}

.tanChiShe img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projectList {
  display: flex;
  flex-wrap: wrap;
}

.skill {
  padding: 25px;
  width: 100%;
}

.skill img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.skill #skillWap {
  display: none;
}

@media (max-width: 800px) {
  .zyyo-right {
    width: 100%;
  }

  .tanChiShe {
    width: 100%;
  }

  .skill #skillWap {
    display: block;
  }

  .skill #skillPc {
    display: none;
  }
}
</style>
