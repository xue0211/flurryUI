<template>
    <button @click="toggle" :class="{ checked:value}"><span></span></button>
    <div>{{ value }}</div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('input', !props.value)
        }
        return { toggle }
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    position: relative;
    display: inline-block;
    width: $h * 2;
    height: $h;
    line-height: $h;
    vertical-align: middle;
    border: none;
    background: #B4BEBF;
    ;
    border-radius: $h/2;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border: none;
    border-radius: $h/2;
    background-color: #fff;
    transition: left 250ms;
}

button.checked {
    background: #5F83B2
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px)
}

button:focus {
    outline: none;
}
</style>