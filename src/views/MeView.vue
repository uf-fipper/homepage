<script setup lang="ts">
import '@/assets/styles.css';
import '@/assets/root.css';
import { ref, type Component, type Ref } from 'vue';
import ProjectItem, { type ProjectItemProps } from '@/components/ProjectItem.vue';
import GithubSvg from '@/components/svg/GithubSvg.vue';
import MailSvg from '@/components/svg/MailSvg.vue';
import SponsorSvg from '@/components/svg/SponsorSvg.vue';
import WxSvg from '@/components/svg/WxSvg.vue';
import LocationSvg from '@/components/svg/LocationSvg.vue';
import NameSvg from '@/components/svg/NameSvg.vue';
import TitleBase from '@/components/TitleBase.vue';
import SiteTitleSvg from '@/components/svg/SiteTitleSvg.vue';
import ProjectTitleSvg from '@/components/svg/ProjectTitleSvg.vue';
import SkillsTitleSvg from '@/components/svg/SkillsTitleSvg.vue';

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

interface LeftDesItem {
  svg: Component;
  text: string;
}

interface LineItem {
  text: string;
  time: string;
}

interface IconItem {
  onclick?: (e: MouseEvent) => void;
  href?: string;
  svg: Component;
  name: string;
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
    onclick: () => pop(new URL('@/assets/img/wxzsm.jpg', import.meta.url).href),
    svg: SponsorSvg,
    name: '赞助',
  },
  {
    onclick: () => pop(new URL('@/assets/img/wx.jpg', import.meta.url).href),
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

let tcMainElementSrc = ref('');
let tcMainActive = ref(false);
let tcActive = ref(false);

function pop(imageURL?: string) {
  if (imageURL) {
    tcMainElementSrc.value = imageURL;
  }
  tcMainActive.value = !tcMainActive.value;
  tcActive.value = !tcActive.value;
}

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
console.log(tanChiSheDarkUrl, tanChiSheLightUrl);

function changeTheme() {
  const theme = themeState.value;
  const url = theme == 'Dark' ? tanChiSheDarkUrl : tanChiSheLightUrl;
  tanChiSheSrc.value = url.href;
  html.dataset.theme = theme;
  setCookie('themeState', theme, 365);
}
changeTheme();

let showLoadingOpacity = ref(100);
setTimeout(() => {
  showLoadingOpacity.value = 0;
}, 1000);
</script>

<template>
  <div id="zyyo-loading" v-bind:style="{ opacity: showLoadingOpacity }">
    <div id="zyyo-loading-center"></div>
  </div>
  <div class="zyyo-filter"></div>
  <div class="zyyo-main">
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
    <div class="zyyo-right">
      <header>
        <div class="index-logo zyyo-right-logo">
          <img
            style="position: absolute; top: -15%; left: -10%; width: 120%; aspect-ratio: 1/1"
            src="@/assets/img/logokuang.png"
          />
        </div>
        <div class="welcome">Hello I' m <span class="gradientText"> Zyyo </span></div>
        <div class="description">👦 <span class="purpleText">Full Stack</span> Developer</div>
        <div class="description">
          📝 The only way to do <span class="purpleText textBackground">great</span> is to
          <span class="purpleText textBackground">love</span> what you do.
        </div>

        <div class="iconContainer">
          <a
            v-for="(item, i) in iconItems"
            class="iconItem"
            target="_blank"
            :href="item.href"
            :key="'icon-item-' + i"
            @click="(e) => item.onclick && item.onclick(e)"
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
  </div>
  <footer>
    Zyyo © 2024 |
    <a href="https://beian.miit.gov.cn/"> 豫ICP备2023015852号-1 </a>
  </footer>
  <div @click="() => pop()" class="tc" v-bind:class="{ active: tcActive }">
    <div
      class="tc-main"
      @click="(event) => event.stopPropagation()"
      v-bind:class="{ active: tcMainActive }"
    >
      <img class="tc-img" :src="tcMainElementSrc" alt="" srcset="" />
    </div>
  </div>
</template>

<style scoped>
.zyyo-left-logo {
  background-image: url(@/assets/img/logo.png);
}

.zyyo-right-logo {
  background-image: url(@/assets/img/logo.png);
}

@font-face {
  font-family: 'a';
  /*中文字体*/
  src: url();
  font-display: swap;
}

@font-face {
  font-family: 'b';

  src: url(@/assets/fonts/Ubuntu-Regular.ttf);
  font-display: swap;
}

@font-face {
  font-family: 'title';
  /*英文字体*/
  src: url(@/assets/fonts/Pacifico-Regular.ttf);
  font-display: swap;
}
</style>
