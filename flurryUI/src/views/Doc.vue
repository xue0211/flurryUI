<template>
    <div>
        <div class="layout">
            <Topnav class="nav" />
            <div class="content">
                <aside v-if="asideVisible">
                    <h2>组件列表</h2>
                    <ol>
                        <li><router-link to="/doc/switch">Switch 组件</router-link></li>
                        <li><router-link to="/doc/button">Button 组件</router-link></li>
                        <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
                        <li><router-link to="/doc/tabs">Tabs 组件</router-link></li>
                    </ol>
                </aside>
                <main>
                    <router-view />
                </main>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
import Topnav from '../components/Topnav.vue';
export default {
    components: { Topnav },
    setup() {
        const asideVisible = inject<Ref<boolean>>
            ('asideVisible') //get
        return { asideVisible }
    }
}
</script>
<style lang="scss">
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0; //高度变化时不收缩
    }

    >.content {
        flex-grow: 1; //高度变化时占据剩余空间
        padding-top: 52px;
        padding-left: 150px;

        @media (max-width: 500px) {
            padding-top: 50px;
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0; //宽度变化时不收缩
    }

    >main {
        flex-grow: 1; //宽度变化时占据剩余空间
        padding: 16px;
        background-color: #fff;
    }
}

aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 75px;
    height: 100%;
    z-index: 1;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }


    main {
        overflow: auto;
    }
}
</style>