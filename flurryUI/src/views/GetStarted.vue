<template>
  <div class="wrapper">
    <h1>#下载与使用</h1>
        <h2>#引入 flurryUI </h2>
        <h3>完整引入</h3>
        <pre><code>
      import 'flurry-ui/dist/lib/flurry.css'
      import { createApp } from 'vue' 
      import App from './App.vue' 

        createApp(App)
          .use(flurryUI)
          .mount('#app')       
        </code></pre>
        <p>以上代码便完成了 flurry-ui 的引入。需要注意的是，样式文件需要单独引入。</p>
        <h3>按需引入</h3>
        <p>如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容</p>
        <pre><code>
      import 'flurry-ui/dist/lib/flurry.css
      import {createApp }from 'vue'
      import { Button }from 'flurry-ui'
      import App from './App.vue'

      createApp(App).use(Button).mount('#app')
        </code></pre>
        <p>完整组件列表和引入方式</p>
        <pre><code>
      import App from './App.vue'
      import { createApp } from 'vue'
      import {
         Button,
         Switch,
         Dialog,
         Tabs,
       } from 'flurry-ui'

     createApp(App)
      .component('Button',Button)
      .component('switch',switch)
      .component('Dialog',Dialog)
      .component('Tabs',Tabs)
        </code></pre>
  </div>
</template>

<style lang="scss" scoped>
$title: #e26b12;
$text:#5b8873;
.wrapper{
    margin:30px;
}
h2,h3{
  padding: 10px 0;
  color:#01603d;
}
pre{
  padding: 4px;
  background: #dadada;
  color: $title;
  font-weight: bold;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
h1,P{
  padding: 10px 0;
  color: $text
}
</style>