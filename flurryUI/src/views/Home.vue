<template>
    <div>
        <Topnav/>
        <div class="banner">
            <h1>flurryUI</h1>
            <h2>一个基于Vue3.0的UI框架</h2>
            <p class="actions">
                <a href="">开始</a>
                <a href="">GitHub</a>
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
</style>