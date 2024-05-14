<template>
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
</template>

<style scoped>
.index-logo {
  display: none;
}

.index-logo {
  flex-shrink: 0;
  width: 45%;
  margin-top: 30px;
  position: relative;
  aspect-ratio: 1/1;
  background-size: cover;
  border-radius: 50%;
}

.gradientText {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200%;
  background-position: 0%;
  font-family: 'title';
  animation: backgroundSizeAnimation 10s ease-in-out infinite;
  background-image: var(--gradient);
}

.zyyo-right-logo {
  background-image: url(@/assets/img/logo.png);
}

.welcome {
  font-size: 55px;
  font-weight: 800;
  margin: 20px 0;
}

.description {
  font-size: 20px;
  margin-top: 7px;
}

.purpleText {
  color: var(--purple_text_color);
  font-weight: 800;
}

.textBackground {
  font-weight: 800;
  background: var(--text_bg_color);
  border-radius: 5px;
  font-size: 17px;
  padding: 2px 4px;
}

@media (min-width: 800px) {
  .index-logo {
    display: none;
  }
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
