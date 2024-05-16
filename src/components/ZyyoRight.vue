<script setup lang="ts">
import { ref, type Component, type Ref } from 'vue';
import ProjectItem from './ProjectItem.vue';
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
import TxcIconSvg from './svg/TxcIconSvg.vue';
import type { ProjectItemProps } from './ProjectItem.vue';

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
    href: 'https://github.com/xiangtai520',
    svg: GithubSvg,
    name: 'Github',
  },
  {
    href: 'mailto:cofan365@qq.com',
    svg: MailSvg,
    name: 'Mail',
  },
  {
    onclick: () => props.pop(new URL('@/assets/img/wxzsm.png', import.meta.url).href),
    svg: SponsorSvg,
    name: '赞助',
  },
  {
    onclick: () => props.pop(new URL('@/assets/img/wx.png', import.meta.url).href),
    svg: WxSvg,
    name: '微信',
  },
  {
    onclick: () => txcChangeLog.showModal(),
    svg: TxcIconSvg,
    name: '日志',
  },
];

let projectItems: ProjectItemProps[] = [
  {
    title: 'WebSite——网站',
    titleSvg: SiteTitleSvg,
    items: [
      {
        title: '官方社区',
        value: '问题建议反馈，更新日志等一站式社区',
        href: 'https://support.qq.com/embed/phone/648905',
        image: new URL('@/assets/img/i1.png', import.meta.url).href,
      },
      {
        title: '祥太の收藏屋',
        value: '由祥太亲自精选并整理在云盘的小说漫画视频等',
        href: 'http://117.72.66.202:5212/s/jRfM',
        image: new URL('@/assets/img/i2.png', import.meta.url).href,
      },
      {
        title: 'WiKi百科全书',
        value: '最实用的生活指南，涨知识啦',
        href: 'https://zh.wikihow.com/',
        image: new URL('@/assets/img/i3.png', import.meta.url).href,
      },
      {
        title: 'Kimi.AI',
        value: '帮你看更大的世界',
        href: 'https://kimi.moonshot.cn',
        image: new URL('@/assets/img/i4.png', import.meta.url).href,
      },
    ],
  },
  {
    title: 'About——关于我',
    titleSvg: ProjectTitleSvg,
    items: [
      {
        title: '祥太の专属𝕏',
        value: '不知道封了多少次的推特',
        href: 'https://x.com/xiang_tai365',
        image: new URL('@/assets/img/i1.png', import.meta.url).href,
      },
      {
        title: '祥太の私人Mastodon',
        value: '需要关注才能查看私人嘟文哦，福利专属',
        href: 'https://accl.mastoland.site/@shota',
        image: new URL('@/assets/img/i2.png', import.meta.url).href,
      },
    ],
  },
];
console.log(projectItems);

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

const svgItems = document.getElementsByTagName('svg');

function changeSvg(color: string) {
  for (var i = 0; i < svgItems.length; i++) {
    var paths = svgItems[i].getElementsByTagName('path');
    for (var j = 0; j < paths.length; j++) {
      paths[j].setAttribute('fill', color);
    }
  }
}

function changeTheme() {
  const theme = themeState.value;
  const url = theme == 'Dark' ? tanChiSheDarkUrl : tanChiSheLightUrl;
  if (theme == 'Dark') {
    changeSvg('#ffffff');
  } else {
    changeSvg('#000000');
  }
  tanChiSheSrc.value = url.href;
  html.dataset.theme = theme;
  setCookie('themeState', theme, 365);
}
changeTheme();
</script>

<template>
  <div class="right">
    <header>
      <ZyyoDescripton></ZyyoDescripton>
      <div class="iconContainer">
        <iframe
          frameborder="no"
          marginwidth="0"
          marginheight="0"
          width="280"
          height="52"
          src="//music.163.com/outchain/player?type=0&id=9684005621&auto=1&height=32"
        ></iframe>
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
        <a class="iconItem switch">
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
      <ProjectItem
        v-for="(item, i) in projectItems"
        :key="`project-item-${i}`"
        :title="item.title"
        :title-svg="item.titleSvg"
        :items="item.items"
      ></ProjectItem>
      <TitleBase :comp="SkillsTitleSvg" text="skills"></TitleBase>
      <div class="skill">
        <img id="skillPc" src="@/assets/svg/skillPc.svg" alt="" srcset="" />
        <img id="skillWap" src="@/assets/svg/skillWap.svg" alt="" srcset="" />
      </div>
    </content>
    <footer>
      CoFan Inc. © 2024 V1.02 |
      <a href="https://beian.miit.gov.cn/">豫ICP备2024045852号-1</a>
    </footer>
  </div>
</template>

<style scoped>
footer {
  padding: 5px;
  color: var(--footer-text-color);
  font-size: 13px;
  margin-top: 20px;
}

.right {
  width: calc(100% - 250px);
  display: flex;
  padding: 25px;
  position: relative;
  float: right;
  flex-direction: column;
}

.iconContainer {
  width: 100%;
  gap: 8px;
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
  width: 47px;
  height: 40px;
  box-sizing: border-box;
  background: var(--icon-bg-color, rgba(249, 250, 251, 0.6));
  border-radius: 7px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.iconItem:nth-child(1):hover {
  width: 95px;
  transform: translateY(-2px);
  background: var(--icon-1-hover-color, rgb(137, 172, 255));
}

.iconItem:nth-child(2):hover {
  width: 80px;
  transform: translateY(-2px);
  background: var(--icon-2-hover-color, rgb(251, 173, 255));
}

.iconItem:nth-child(3):hover {
  width: 80px;
  transform: translateY(-2px);
  background: var(--icon-3-hover-color, rgb(169, 255, 248));
}

.iconItem:nth-child(4):hover {
  width: 80px;
  transform: translateY(-2px);
  background: var(--icon-4-hover-color, rgb(255, 167, 161));
}

.iconItem:nth-child(5):hover {
  width: 80px;
  transform: translateY(-2px);
  background: var(--icon-5-hover-color, rgb(255, 183, 156));
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
}

.switch:hover {
  width: 55px;

  transform: translateY(-2px);
  background: var(--icon-5-hover-color, rgb(255, 183, 156));
}

.onoffswitch {
  position: relative;
  width: 38px;
  height: 20px;
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
  background-color: #e4e4e4;
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
  transition: all 0.2s ease-in 0s;
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
  .right {
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
