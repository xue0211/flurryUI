<template>
    <div class="layout">
        <Topnav toggleMenuButtonVisible class="nav" />
        <div class="content">
            <Aside />
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { inject, Ref, onMounted } from 'vue';
import Topnav from '../components/Topnav.vue';
import Aside from './Aside.vue';
import { useRouter } from 'vue-router';
export default {
    components: { Topnav, Aside },
    setup() {
        const router = useRouter();
        onMounted(() => {
            // 监听路由变化，在每次路由跳转完成后滚动到顶部
            const main = document.querySelector("main");
            if (main) {
                router.afterEach(() => {
                    main.scrollTop = 0;
                });
            }
        });

        return {};
    }

}
</script>


<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f4f2ec;

    >.nav {
        flex-shrink: 0; //高度变化时不收缩
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    >.content {
        display: flex;
        padding-top: 60px;
        padding-left: 285px;

        main {
            overflow: auto;
            flex-grow: 1;
            padding: 60px;
            background-color: #f4f2ec;
        }

        @media (max-width: 500px) {
            padding-left: 0;

            main {
                height: 80vh;
                overflow: auto;
                flex-grow: 1; //高度变化时,占据剩余空间
                padding: 32px;
            }
        }


    }
}
</style>