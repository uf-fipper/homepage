<script setup lang="ts">
import '@/assets/styles.css';
import '@/assets/root.css';
import { ref, type Component, type Ref } from 'vue';
import ProjectItem, { type ProjectItemProps } from '@/components/ProjectItem.vue';
import GithubSvg from '@/components/svg/GithubSvg.vue';
import MailSvg from '@/components/svg/MailSvg.vue';
import SponsorSvg from '@/components/svg/SponsorSvg.vue';
import WxSvg from '@/components/svg/WxSvg.vue';

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

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
    onclick: () => pop('src/assets/img/wxzsm.jpg'),
    href: 'javascript:void(0)',
    svg: SponsorSvg,
    name: '赞助',
  },
  {
    onclick: () => pop('src/assets/img/wx.jpg'),
    href: 'javascript:void(0)',
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
    image: 'src/assets/img/i1.png',
    extClass: 'a',
  },
  {
    title: '云盘',
    value: '存储收集文件',
    href: 'https://i.zyyo.cc',
    image: 'src/assets/img/i2.png',
    extClass: 'a',
  },
  {
    title: '实验室',
    value: '收集有趣html作品',
    href: 'https://zyyo.cc',
    image: 'src/assets/img/i3.png',
    extClass: 'a',
  },
];

// project 列表
let projectProjectItems: ProjectItemProps[] = [
  {
    title: 'ZYYO主页',
    value: '本站同款',
    href: 'https://github.com/ZYYO666/homepage',
    image: 'src/assets/img/i5.png',
    extClass: 'b',
  },
  {
    title: 'ZYYO主题',
    value: '一款ty主题',
    href: 'https://github.com/ZYYO666/ZYYO',
    image: 'src/assets/img/i6.png',
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

function changeTheme(theme: 'Light' | 'Dark') {
  tanChiSheSrc.value = 'src/assets/svg/snake-' + theme + '.svg';
  html.dataset.theme = theme;
  setCookie('themeState', theme, 365);
  themeState.value = theme;
}
changeTheme(themeState.value);

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
        <div class="left-des-item">
          <svg
            t="1705773709627"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1478"
          >
            <path
              d="M512 249.976471c-99.388235 0-180.705882 81.317647-180.705882 180.705882s81.317647 180.705882 180.705882 180.705882 180.705882-81.317647 180.705882-180.705882-81.317647-180.705882-180.705882-180.705882z m0 301.17647c-66.258824 0-120.470588-54.211765-120.470588-120.470588s54.211765-120.470588 120.470588-120.470588 120.470588 54.211765 120.470588 120.470588-54.211765 120.470588-120.470588 120.470588z"
              p-id="1479"
            ></path>
            <path
              d="M512 39.152941c-216.847059 0-391.529412 174.682353-391.529412 391.529412 0 349.364706 391.529412 572.235294 391.529412 572.235294s391.529412-222.870588 391.529412-572.235294c0-216.847059-174.682353-391.529412-391.529412-391.529412z m0 891.482353C424.658824 873.411765 180.705882 686.682353 180.705882 430.682353c0-183.717647 147.576471-331.294118 331.294118-331.294118s331.294118 147.576471 331.294118 331.294118c0 256-243.952941 442.729412-331.294118 499.952941z"
              p-id="1480"
            ></path>
          </svg>
          China-Henan
        </div>
        <div class="left-des-item">
          <svg
            t="1705773906032"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2474"
          >
            <path
              d="M729.6 234.666667H294.4V157.866667a51.2 51.2 0 0 1 51.2-51.2h332.8a51.2 51.2 0 0 1 51.2 51.2v76.8z m179.2 51.2a51.2 51.2 0 0 1 51.2 51.2v512a51.2 51.2 0 0 1-51.2 51.2H115.2a51.2 51.2 0 0 1-51.2-51.2v-512a51.2 51.2 0 0 1 51.2-51.2h793.557333z m-768 172.032c0 16.384 13.312 29.696 29.696 29.696h683.008a29.696 29.696 0 1 0 0-59.392H170.410667a29.696 29.696 0 0 0-29.696 29.696z m252.416 118.784c0 16.384 13.312 29.696 29.696 29.696h178.176a29.696 29.696 0 1 0 0-59.392H422.912a29.738667 29.738667 0 0 0-29.696 29.696z"
              p-id="2475"
            ></path>
          </svg>
          Sias
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
            :href="item.href"
            :key="'icon-item-' + i"
            @click="(e) => item.onclick && item.onclick(e)"
          >
            <Component :is="item.svg"></Component>
            <div class="iconTip">{{ item.name }}</div>
          </a>
          <a class="switch" href="javascript:void(0)">
            <div class="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                class="onoffswitch-checkbox"
                id="myonoffswitch"
                @change="
                  () => {
                    if (themeState == 'Dark') {
                      changeTheme('Light');
                    } else if (themeState == 'Light') {
                      changeTheme('Dark');
                    } else {
                      changeTheme('Dark');
                    }
                  }
                "
                :checked="themeState == 'Light' ? true : false"
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
        <div class="title">
          <svg
            t="1705257422086"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1891"
          >
            <path
              d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
              p-id="1892"
            ></path>
          </svg>
          site
        </div>
        <div class="projectList">
          <ProjectItem v-for="(item, i) in siteProjectItems" :key="item.title + i" :item="item">
          </ProjectItem>
        </div>
        <div class="title">
          <svg
            t="1705257422086"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1891"
          >
            <path
              d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
              p-id="1892"
            ></path>
          </svg>
          project
        </div>
        <div class="projectList">
          <ProjectItem v-for="(item, i) in projectProjectItems" :key="item.title + i" :item="item">
          </ProjectItem>
        </div>
        <div class="title">
          <svg
            t="1705257823317"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7833"
          >
            <path
              d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z"
              p-id="7834"
            ></path>
          </svg>
          skills
        </div>
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
</style>
