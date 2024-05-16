<template>
  <div class="welcome">Hello, I'm <span class="gradientText">祥太</span></div>
  <div class="description">👦 <span class="purpleText"> CoFan</span> 首席执行官</div>
  <div class="description">
    📝 醉后不知
    <span class="purpleText textBackground">天在水</span>
    满船清梦
    <span class="purpleText textBackground">压星河</span> .
  </div>
  <div class="description">📱 <span class="purpleText"> 手机用户 </span>右滑音乐栏有更多惊喜</div>
</template>

<style scoped>
.gradientText {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  background-position: 0%;
  animation: backgroundSizeAnimation 5s ease-in-out infinite;
  background-image: linear-gradient(
    120deg,
    var(--gradient-start, #bd34fe),
    var(--gradient-middle, #e0321b) 30%,
    var(--gradient-end, #41d1ff) 60%
  );
}

.welcome {
  font-size: 55px;
  font-weight: 800;
  margin: 30px 0;
}

.description {
  font-size: 20px;
  margin-top: 7px;
}

.purpleText {
  color: var(--purple-text-color, #747bff);
  font-weight: 800;
}

.textBackground {
  font-weight: 800;
  background: var(--text-bg-color, #f4f4f4);
  border-radius: 5px;
  font-size: 15px;
  padding: 3px 5px;
}

@media (max-width: 800px) {
  .welcome {
    font-size: 48px;
  }

  .description {
    font-size: 16px;
  }
}
</style>
