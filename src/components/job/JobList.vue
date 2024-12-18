<script setup lang="ts">
import Button from '../Button.vue';
import { cutText, formatSalary } from '@/functions';
import type { iJob } from '@/services.job';
import { RouterLink } from 'vue-router';
import MdiIcon from '../MdiIcon.vue';
import { mdiMapMarker } from '@mdi/js';

interface Props {
    job: iJob;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="w-full flex flex-col items-start justify-between gap-4 bg-white shadow-md p-5">
        <div class="flex flex-col gap-4">
            <header>
                <span class="text-[--clr-text-contrast]">
                    {{ props.job.type }}
                </span>
                <h3 class="text-xl font-semibold">
                    {{ props.job.title }}
                </h3>
            </header>
            <RouterLink :to="`/jobs/${job.slug}`">
                <p>{{ cutText(props.job.description, 85) }}</p>
            </RouterLink>
        </div>

        <div class="w-full flex flex-col gap-4">
            <span class="flex w-full pb-4 text-[--clr-secondary] border-b border-text-gray-600">{{
                formatSalary(props.job.salary) || props.job.salary
            }}</span>

            <div class="flex items-center justify-between gap-4 mm:flex-col mm:items-start">
                <span class="center gap-2 text-[--clr-accent]">
                    <MdiIcon :path="mdiMapMarker" class="text-xl" />
                    {{ props.job.location }}
                </span>

                <Button
                    text="Read More"
                    :path="`/jobs/${job.slug}`"
                    :style="'primary'"
                    classStyling="mm:w-full"
                />
            </div>
        </div>
    </div>
</template>
