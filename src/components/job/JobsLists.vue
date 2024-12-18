<script setup lang="ts">
import JobListSkeleton from './JobListSkeleton.vue';
import JobList from './JobList.vue';
import { useFetchJobs } from '@/services.job';

const props = defineProps<{
    title?: string;
    limit?: number;
}>();

const { jobs, loading } = useFetchJobs();
</script>

<template>
    <h2 class="text-[--clr-secondary] text-3xl font-semibold">
        {{ title || 'Browse Jobs' }}
    </h2>

    <div class="w-full grid grid-cols-3 gap-[--gap] lg:grid-cols-2 md:grid-cols-1">
        <JobListSkeleton v-if="loading" v-for="n in 3" :key="n" />

        <JobList
            v-else
            v-for="job in jobs.slice(0, props.limit || jobs.length).reverse()"
            :key="job.id"
            :job="job"
        />
    </div>
</template>
