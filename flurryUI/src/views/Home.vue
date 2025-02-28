<template>
  <div class="wrapper">
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>flurryUI</h1>
        <h2>一个现代、简洁的Vue 3.0 UI组件库，旨在帮助开发者快速构建高性能的Web界面。</h2>
        <p class="actions">
          <router-link to="/doc">开始</router-link>
          <a href="https://github.com/xue0211/flurryUI">GitHub</a>
        </p>
      </div>
    </div>
      <div class="features">
        <ul>
          <li>
            <svg>
              <use xlink:href="#icon-vue"></use>
            </svg>
            <h3>基于 Vue 3</h3>
            <p>灵活运用 Vue 3 Composition API</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-ts"></use>
            </svg>
            <h3>基于 TypeScript</h3>
            <p>源代码采用 TypeScript 书写</p>
          </li>
          <li>
            <svg>
              <use xlink:href="#icon-light"></use>
            </svg>
            <h3>代码易读</h3>
            <p>组件代码经过优化，简洁易读</p>
          </li>
        </ul>
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

.wrapper{
  background:  #00613b;
  height: 100vh;
}
.topnavAndBanner {
  background: #f4f2ec;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 64px auto;
  width: 400px;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
      >ul {
        >li{
          width: 50%;
        }
      }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    >ul {
        >li{
          width: 33.3333%;
        }
      }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
        color: #bde2d2
      }

      >p {
        grid-area: text;
        color: #caedb9
      }
    }
  }
}

.banner {
  padding: 85px 0;
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