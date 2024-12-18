<script setup lang="ts">
import { mdiKeyboardBackspace } from '@mdi/js';
import MdiIcon from '@/components/MdiIcon.vue';

defineProps<{
    path: string;
    text: string;
}>();
</script>

<template>
    <RouterLink :to="path" class="w-fit center my-[25px] gap-2 text-[--clr-secondary]">
        <MdiIcon :path="mdiKeyboardBackspace" class="text-2xl" />
        {{ text }}
    </RouterLink>
</template>
