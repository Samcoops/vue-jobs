<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        :class="className"
        role="img"
    >
        <path :d="path" />
    </svg>
</template>

<script setup lang="ts">
defineProps({
    path: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: '1em',
    },
    className: {
        type: String,
        default: '',
    },
});
</script>

<style scoped>
svg {
    fill: currentColor;
    vertical-align: middle;
}
</style>
