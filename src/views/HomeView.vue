<script setup lang="ts">
import JobsLists from '@/components/job/JobsLists.vue';
import Cta from '@/components/Cta.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <main class="center flex-col">
        <section class="w-full text-[--clr-text] center py-20 bg-[--clr-main]">
            <div class="container center gap-5 flex-col sm:items-start">
                <h1 class="text-6xl font-extrabold sx:text-5xl">Become a Vue Dev</h1>
                <p class="text-xl">Find the Vue job that fits your skills and needs</p>
            </div>
        </section>

        <section class="w-full center py-20">
            <div class="container grid grid-cols-2 gap-[--gap] md:grid-cols-1">
                <Cta
                    title="For Developers"
                    text="Browse our Vue jobs and start your career today"
                    :btn="{ text: 'Browse Jobs', style: 'primary' }"
                    path="/jobs"
                />
                <Cta
                    title="For Employers"
                    text="List your job to find the perfect developer for the role"
                    :btn="{ text: 'Add Job', style: 'secondary' }"
                    path="/jobs/add"
                />
            </div>
        </section>
        <section class="w-full center py-20 bg-[--clr-bg-contrast]">
            <div class="container center gap-5 flex-col">
                <JobsLists :limit="3" />

                <Button text="View All Jobs" path="/jobs" :style="'secondary'" classStyling="w-full max-w-[400px] mt-[--gap]" />
            </div>
        </section>
    </main>
</template>
