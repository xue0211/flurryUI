<template>
    <div class="wrapper">
        <h1>安装</h1>
        <p>打开终端运行下列命令：</p>
        <pre><code>npm install kaite-ui</code></pre>
        <p>或</p>
        <pre><code>yarn add kaite-ui</code></pre>
        <br>
        <p>下一节：<a href="#/doc/get-started">开始使用</a></p>
    </div>
</template>

<style lang="scss" scoped>
$title: #e26b12;
$text:#5b8873;
.wrapper{
    margin: 30px 40px;
}
p{
    padding: 20px 0;
}
pre{
    padding: 10px;
    background-color: #dadada;
    color:$title;
    font-weight: bold;
}
h1, p{
    color: $text
}
a{
    color:$title;
}
</style>