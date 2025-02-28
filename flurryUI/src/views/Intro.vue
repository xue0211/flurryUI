<template>
    <div class="wrapper">
        <h1>开始</h1>
        <div class="color">欢迎使用 flurryUI</div>
        <hr>
        <h2>#介绍</h2>
        <p>flurryUI 是一款基于 Vue 3 和 TypeScript 的前端 UI 组件库。组件库中包含 button、dialog、switch、tabs 等基础组件的配置和使用。你可以前往 <a
                href="https://github.com/xue0211/flurryUI"></a> 查看具体的提交信息或者在本官网中查看每个组件的源代码和示例。</p>
        <p>下一节：<a href="#/doc/install">安装</a></p>
    </div>


</template>

<style lang="scss" scoped>
$title: #e26b12;
$text:#5b8873;
.wrapper {
    margin: 30px 40px;

}
h1{
    padding-bottom: 30px;
    color:$title;
}
h2{
    padding: 20px 0;
    color:$title;
}
p{
    padding: 10px 0 80px;
    color:$text
}
a{
    color: $title;
}
.color{
   color: $text
}

</style>