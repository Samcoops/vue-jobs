<script setup lang="ts">
import { RouterLink } from 'vue-router';

export type tButtonStyle = 'primary' | 'secondary' | 'danger';

type ButtonProps = {
    text: string;
    path?: string;
    style: tButtonStyle;
    classStyling?: string;
    funcOnClick?: () => void;
};

const props = defineProps<ButtonProps>();

const btnClass = `
    center w-fit text-white px-5 py-2 rounded-md transition-[background-color]
    ${
        props.style === 'primary'
            ? 'bg-[--clr-secondary] pc:hover:bg-[--clr-secondary-hover]'
            : props.style === 'secondary'
              ? 'bg-[--clr-dark] pc:hover:bg-[--clr-dark-hover]'
              : 'bg-[--clr-danger] pc:hover:bg-[--clr-danger-hover]'
    }
    ${props.classStyling} 
`;
</script>

<template>
    <RouterLink v-if="props.path" :to="props.path" :class="btnClass">{{ props.text }}</RouterLink>
    <button v-else :class="btnClass" @click="funcOnClick">{{ props.text }}</button>
</template>
