<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-tree"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <transition name="fade">
      <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
        <use xlink:href="#icon-menu"></use>
      </svg>
    </transition>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>
      ('asideVisible') //get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleMenu }
  }
}
</script>
<style lang="scss" scoped>
$lightbgc: #e8cbc0;
$deepbgc: #44295b;
$text: #6f2e6a;

.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f4f2ec;
  border-bottom: 1px solid #f4f2ec;
  box-shadow: 0 5px 5px rgba(#333, 0.1);
  display: flex;
  padding: 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;

  >.logo {
    max-width: 6em;
    margin-right: auto;

    >a {
      text-decoration: none;
      &:hover {
          color: #be3765;
          border-bottom: none;
        }
    }

    >svg {
      width: 42px;
      height: 34px;
    }
  }

  >.menu {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    flex-wrap: nowrap;
    border: 5px solid #e26b12;
    background: #e26b12;
    border-radius: 20px;

    >li {
       margin: 0 1em;
       color: white;
       padding: 0 4px;
    }
  }

  >.toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  @media (max-width:500px) {
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block
    }
  }
}
</style>