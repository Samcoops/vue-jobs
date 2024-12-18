<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png';
import { pagesList } from '@/config';
import { ref } from 'vue';
import { watch } from 'vue';

const isHamburgerChecked = ref<boolean>(false);
const router = useRoute();

const handleHamburgerChange = () => {
    isHamburgerChecked.value = !isHamburgerChecked.value;
};

const closeNav = () => {
    isHamburgerChecked.value = false;
};

watch(router, () => {
    closeNav();
});
</script>

<template>
    <header
        class="z-[999] fixed w-full h-[--navbar-height] center bg-[--clr-main] text-white border-b border-b-[#22c55e]"
    >
        <div class="container flex items-center justify-between gap-[--gap]">
            <RouterLink to="/" class="center gap-0">
                <img :src="logo" alt="Vue.js Logo" class="w-[40px] min-w-[40px] h-auto" />
                <span class="text-xl font-bold sx:text-base">ue Jobs</span>
            </RouterLink>

            <nav
                :class="[
                    'md:fixed md:top-[--navbar-height] md:left-0 md:w-full md:transition-transform md:bg-[--clr-main] md:h-[calc(100vh_-_var(--navbar-height))] md:overflow-auto',
                    isHamburgerChecked === true ? 'md:translate-x-0' : 'md:translate-x-full',
                ]"
            >
                <ul
                    class="flex gap-4 md:flex-col md:min-h-full md:pt-[--gap] md:pb-[calc(var(--gap)_*_4)]"
                >
                    <li v-for="(page, i) in pagesList" :key="i" class="center">
                        <RouterLink
                            :to="page.path"
                            class="px-3 py-2 rounded-md pc:hover:bg-[--clr-main-hover] transition-[background-color] md:w-full md:text-lg md:py-3.5 md:px-[--gap] md:rounded-none"
                            :active-class="'bg-[--clr-main-hover]'"
                        >
                            {{ page.name }}
                        </RouterLink>
                    </li>
                </ul>
            </nav>

            <label id="hamburger" for="hamburger-check">
                <div id="hamburger-block">
                    <input
                        ref="hamburger"
                        :checked="isHamburgerChecked"
                        @change="handleHamburgerChange"
                        type="checkbox"
                        id="hamburger-check"
                    />
                    <span class="spans"></span>
                    <span class="spans"></span>
                    <span class="spans"></span>
                </div>
            </label>
        </div>
    </header>
</template>

<style scoped>
#hamburger {
    -webkit-tap-highlight-color: transparent;
    display: none;
    max-width: calc(var(--hamburger-property) * 50);
    min-width: calc(var(--hamburger-property) * 50);
    cursor: pointer;
    justify-content: center;
    align-items: center;
}

#hamburger-block {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.spans {
    position: relative;
    background: var(--clr-text);
    border-radius: 10px;
    width: 100%;
    height: calc(var(--hamburger-property) * 5);
    margin: calc(var(--hamburger-property) * 4.5) 0;
    transition: 0.15s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.spans:nth-of-type(1) {
    width: 50%;
}

.spans:nth-of-type(2) {
    width: 100%;
}

.spans:nth-of-type(3) {
    width: 75%;
}

#hamburger-check[type='checkbox'] {
    display: none;
}

#hamburger-check[type='checkbox']:checked ~ .spans:nth-of-type(1) {
    transform-origin: center;
    transform: rotateZ(45deg)
        translate(calc(var(--hamburger-property) * 6.2), calc(var(--hamburger-property) * 1.05));
}

#hamburger-check[type='checkbox']:checked ~ .spans:nth-of-type(2) {
    transform-origin: center;
    transform: rotateZ(-45deg);
}

#hamburger-check[type='checkbox']:checked ~ .spans:nth-of-type(3) {
    transform-origin: top;
    width: 50%;
    transform: rotateZ(45deg)
        translate(calc(var(--hamburger-property) * 13.5), calc(var(--hamburger-property) * -19.6));
}

@media screen and (max-width: 767px) {
    #hamburger {
        display: flex;
    }
}
</style>
