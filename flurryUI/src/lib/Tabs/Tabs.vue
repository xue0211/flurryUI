<template>
    <div class="flurry-tabs">
        <div class="flurry-tabs-nav" ref="container">
            <div 
              class="flurry-tabs-nav-item" 
              v-for="(CNode, index) in CNodes" 
              :ref="
                (el) => {
                  if (CNode.props.title === selected) selectedItem = el;
            } " 
               @click="select(CNode)"
               :class="
                  [CNode.props.title === selected ? 'selected' : ''] +
                  [CNode.props.disabled === '' ? 'disabled' : '']
                    " 
                    :key="index"
                >
                {{ CNode.props.title }}
            </div>
            <div class="flurry-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="flurry-tabs-content">
            <component 
              class="flurry-tabs-content-item" 
              :key="current.props.title" 
              :is="current" 
            />
        </div>
    </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import { computed, ref, onMounted, watchEffect,onUpdated } from "vue";
export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        const selectedItem = ref<HTMLDivElement>(null);
        const indicator = ref<HTMLDivElement>(null);
        const container = ref<HTMLDivElement>(null);

        onMounted(() => {
            watchEffect(
                () => {
                    const { width } = selectedItem.value.getBoundingClientRect();
                    console.log(selectedItem.value);
                    indicator.value.style.width = width + "px";
                    const { left: NavLeft } = container.value.getBoundingClientRect();
                    const {
                        left: SelectedLeft,
                    } = selectedItem.value.getBoundingClientRect();
                    const left = SelectedLeft - NavLeft;
                    console.log(left);
                    indicator.value.style.left = left + "px";
                },
                // 解决异步
                {
                    flush: "sync", //效果更新需要缓冲时间
                }

            );
        });
        const CNodes = context.slots.default();
        // onMounted(x);
        // onUpdated(x);

        CNodes.forEach((CNode) => {
            // @ts-ignore
            if (CNode.type.name !== Tab.name) {
                throw new Error('Tabs 子标签必须是 Tab')
            }
        });
     // 返回当前选中结点
        const current = computed(() => {
            return CNodes.find((CNode) => CNode.props.title === props.selected);
        });
        const select = (CNode) => {
            if (CNode.props.disabled === "") {
                return;
            }
            context.emit("update:selected", CNode.props.title);
        };
        return {
            current,
            CNodes,
            select,
            selectedItem,
            indicator,
            container,
        }
    }

}
</script>

<style lang="scss">
$blue: #e26b12;
$color: #333;
$border-color: #d9d9d9;

.flurry-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px;
            margin: 0 8px;
            cursor: pointer;

            &.disabled {
                color: #ccc;
                cursor: not-allowed;
            }

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            transition: all 0.25s cubic-bezier(1, 1.67, 0.21, 0.84);
        }
    }

    &-content {
        padding: 20px 8px;
    }
}
</style>