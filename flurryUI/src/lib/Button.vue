<template>
    <button class="flurry-button" :class="classes" :disabled="loading ? true : disabled">
        <span v-if="loading" class="flurry-loadingIndicator"></span>
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
    props: {
        size: {
            type: String,
            default: "normal",
        },
        level: {
            type: String,
            default: "normal",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const { round, size, level } = props;
        const classes = computed(() => {
            return {
                [`flurry-size-${size}`]: size,
                [`flurry-level-${level}`]: level,
                [`flurry-${round ? "round" : "normal"}`]: round,
            };
        });
        return { classes };
    }
}
</script>
<style lang="scss" scoped>
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #d9d9d9;
// 默认字体颜色
$color: #333;
// 颜色参数
$blue: #e26b12;
// 角度参数
$radius: 4px;
$roundRadius: 32px;
$red: #f56c6c;
$grey: #909399;

.flurry-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    //   文本不换行显示
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 0.25s;
    margin: 0 10px 8px 0;

    @media (min-width: 500px) {
        &:hover {
            animation: button-hover 0.5s linear forwards;

            &[disabled] {
                animation: none;
            }
        }
    }

    &:focus {
        color: $blue;
        border-color: $blue;
        box-shadow: 0px 0px 10px #ccc;
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.flurry-round {
        border-radius: $roundRadius;
    }

    &[disabled] {
        cursor: not-allowed;
        color: #fff;
        background-color: #ddd;
        border: none;
    }

    &.flurry-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.flurry-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.flurry-level-primary {
        color: #fff;
        border: none;
        background-color: #1976d2;
    }

    &.flurry-level-success {
        color: #fff;
        border: none;
        background-color: #ffa500;
    }

    &.flurry-level-warning {
        color: #fff;
        border: none;
        background-color: #e26b12;
    }

    &.flurry-level-error {
        color: #fff;
        border: none;
        background-color: #ff6347;
    }

    &.flurry-level-primary {
        color: #fff;
        border: none;
        background-color: #007a97;
    }


    >.flurry-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: lighten(#5b8873, 20%) lighten(#5b8873, 10%) #5b8873 transparent;
        border-style: solid;
        border-width: 2px;
        animation: flurry-spin 1s infinite linear;
    }

}
</style>