<script setup lang="ts">
import Button, { type tButtonStyle } from './Button.vue';
interface iProps {
    title: string;
    text: string;
    btn: {
        text: string;
        style: tButtonStyle;
    };
    path: string;
}

const props = defineProps<iProps>();
</script>

<template>
    <div class="w-full flex flex-col gap-4 shadow-md p-5">
        <h2 class="text-2xl font-semibold">{{ props.title }}</h2>
        <p>{{ props.text }}</p>
        <Button :text="btn.text" :style="btn.style" :path="props.path" classStyling="mm:w-full mt-auto" />
    </div>
</template>
