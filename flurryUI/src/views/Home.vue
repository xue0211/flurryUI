<template>
    <div>
        <Topnav/>
        <div class="banner">
            <h1>flurryUI</h1>
            <h2>一个基于Vue3.0的UI框架</h2>
            <p class="actions">
                <router-link to="/doc">开始</router-link>
                <a href="https://github.com/xue0211/flurryUI">GitHub</a>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default{
    components: {Topnav}
}
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 5px 8px;
    }
  }
}
</style>