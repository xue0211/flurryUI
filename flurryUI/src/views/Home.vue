<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>FlurryUI</h1>
        <h2>一个现代、简洁的Vue 3.0 UI组件库，旨在帮助开发者快速构建高性能的Web界面。</h2>
        <p class="actions">
          <router-link to="/doc">开始</router-link>
          <a href="https://github.com/xue0211/flurryUI">GitHub</a>
        </p>
      </div>
    </div>
    <div class="features"> <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
  components: { Topnav }
}
</script>
<style lang="scss" scoped>
$green: #aade97;
$font: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

.topnavAndBanner {
  background: #f4f2ec
}

.features{
  > svg{
    width: 64px;
    height: 64px;
  }
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: #01613d;
      $h: 80px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 8px 25px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      font-weight: 500;
    }
  }
}

h1 {
  color: #1e1c1a;
  font-size: 45px;
  font-family: "Trebuchet MS";
  font-weight: bold;
}

h2 {
  color: #848480;
  font-size: 18px;
  font-family: $font;
}
</style>