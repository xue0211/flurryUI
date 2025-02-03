<template>
    <div class="topnav">
           <div class="logo">LOGO</div>
           <ul>
               <li>菜单</li>
           </ul>
           <div class="menu"></div>
       </div>
</template>
<style lang="scss" scoped>
.topnav {
    background-color: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
  }
</style> 