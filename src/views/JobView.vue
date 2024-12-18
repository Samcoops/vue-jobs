<script setup lang="ts">
import { useFetchJobs, type iJob, useDeleteJob } from '@/services.job';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { watchEffect } from 'vue';
import { mdiMapMarker } from '@mdi/js';
import MdiIcon from '@/components/MdiIcon.vue';
import { formatSalary } from '@/functions';
import NotFoundView from './NotFoundView.vue';
import Button from '@/components/Button.vue';
import { toast } from 'vue3-toastify';
import GetBackLink from '@/components/GetBackLink.vue';
import JobSkeleton from '@/components/job/JobSkeleton.vue';

const route = useRoute();
const router = useRouter();

const slug = route.params.slug;
const { jobs, loading } = useFetchJobs();
const job = ref<iJob | undefined>(undefined);

watchEffect(() => {
    job.value = jobs.value.find((item) => item.slug === slug);
});

const handleDeleteJob = async (): Promise<void> => {
    const decision = confirm(`This job will be deleted forever, continue?`);
    if (decision) {
        const toastId = toast.loading('Deleting job... Please wait ⏳', {
            position: toast.POSITION.TOP_RIGHT,
        });

        try {
            await useDeleteJob(job.value!.id);

            toast.remove(toastId);

            toast.success('Job deleted successfully! 🎉', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });

            router.push('/jobs');
        } catch (e) {
            toast.remove(toastId);

            toast.error('Something went wrong 🤕', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
            });
        }
    }
};
</script>

<template>
    <div class="center flex-col">
        <div class="container">
            <GetBackLink path="/jobs" text="Back to Job Listings" />
        </div>
        <main class="w-full center py-[--gap] pb-20 bg-[--clr-bg-contrast]">
            <div class="container center gap-5 flex-col">
                <JobSkeleton v-if="loading" />

                <div v-else-if="!job"><NotFoundView /></div>

                <div
                    v-else
                    class="w-full grid grid-cols-[0.65fr_0.35fr] grid-rows-[repeat(2,_auto)] gap-[--gap] lg:grid-cols-1"
                >
                    <section class="flex flex-col gap-[--gap]">
                        <header
                            class="shadow-md bg-[--clr-text] p-5 flex flex-col items-start gap-4"
                        >
                            <span class="text-[--clr-text-contrast]">{{ job.type }}</span>
                            <h1 class="text-2xl font-semibold">{{ job.title }}</h1>
                            <span class="center gap-2 text-[--clr-accent]">
                                <MdiIcon :path="mdiMapMarker" class="text-xl" />
                                {{ job.location }}
                            </span>
                        </header>

                        <div class="shadow-md bg-[--clr-text] p-5 flex flex-col items-start gap-4">
                            <div class="flex flex-col gap-2">
                                <h2 class="text-xl font-medium text-[--clr-secondary]">
                                    Job Description
                                </h2>
                                <p>
                                    {{ job.description }}
                                </p>
                            </div>
                            <div class="flex flex-col gap-2">
                                <h2 class="text-xl font-medium text-[--clr-secondary]">Salary</h2>
                                <span>{{ formatSalary(job.salary) }}</span>
                            </div>
                        </div>
                    </section>

                    <aside
                        class="flex flex-col items-start gap-[--gap] lg:col-start-1 lg:row-span-1"
                    >
                        <div class="w-full shadow-md bg-[--clr-text] p-5 flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <h2 class="text-xl font-medium text-[--clr-secondary]">
                                    Company Info
                                </h2>
                                <h3 class="text-2xl">{{ job.companyName }}</h3>
                                <p>
                                    {{ job.companyDescription }}
                                </p>
                            </div>

                            <div class="flex flex-col gap-2 border-t pt-4">
                                <div class="flex flex-col">
                                    <span class="text-[--clr-text-contrast]">Email:</span>
                                    <a
                                        :href="`mailto:${job.companyContactEmail}`"
                                        class="bg-[--clr-bg-contrast] p-2 font-medium"
                                        >{{ job.companyContactEmail }}</a
                                    >
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[--clr-text-contrast]">Phone:</span>
                                    <a
                                        :href="`tel:${job.companyContactPhone}`"
                                        class="bg-[--clr-bg-contrast] p-2 font-medium"
                                        >{{ job.companyContactPhone }}</a
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="w-full shadow-md bg-[--clr-text] p-5 flex flex-col gap-2">
                            <h2 class="text-xl font-medium text-[--clr-secondary]">Manage Job</h2>

                            <div class="flex flex-col gap-4">
                                <Button
                                    :path="`/jobs/edit/${job.slug}`"
                                    text="Edit Job"
                                    :style="'primary'"
                                    classStyling="w-full"
                                />
                                <Button
                                    :funcOnClick="handleDeleteJob"
                                    text="Delete Job"
                                    :style="'danger'"
                                    classStyling="w-full bg-[--clr-danger]"
                                />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    </div>
</template>
