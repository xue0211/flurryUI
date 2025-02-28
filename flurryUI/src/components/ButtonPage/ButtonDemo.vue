<template>
    <div>
        <h1 class="first-title">Button 示例</h1>
        <section class="second-title">
            <h2>基础用法</h2>
            <p>
                使用<span>level</span>属性改变<span>Button</span>组件的颜色，以此突显<span>Button</span>组件的重要等级
            </p>
        </section>
        <Demo :component="ButtonDemo1" />
        <section class="second-title">
            <h2>支持 size</h2>
            <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
        </section>
        <Demo :component="ButtonDemo2" />
        <section class="second-title">
            <h2>支持 round</h2>
            <p>使用<span>round</span>属性改变<span>Button</span>组件的形状</p>
        </section>
        <Demo :component="ButtonDemo3" />
        <section class="second-title">
            <h2>支持 disabled</h2>
            <p>
                使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此<span>禁止点击Button</span>组件
            </p>
        </section>
        <Demo :component="ButtonDemo4" />
        <section class="second-title">
            <h2>支持 loading</h2>
            <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载</p>
        </section>
        <Demo :component="ButtonDemo5" />
    </div>
</template>
<script lang="ts">
import Demo from "../Demo.vue";
import ButtonDemo1 from "./ButtonDemo/ButtonDemo1.vue";
import ButtonDemo2 from "./ButtonDemo/ButtonDemo2.vue";
import ButtonDemo3 from "./ButtonDemo/ButtonDemo3.vue";
import ButtonDemo4 from "./ButtonDemo/ButtonDemo4.vue";
import ButtonDemo5 from "./ButtonDemo/ButtonDemo5.vue";
export default {
    components: { Demo },
    setup() {
        return {
            ButtonDemo1,
            ButtonDemo2,
            ButtonDemo3,
            ButtonDemo4,
            ButtonDemo5
        };
    },
};
</script>
