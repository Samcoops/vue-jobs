import { textToSlug } from '@/functions';
import type { iJob } from '@/services.job';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const API_URL = import.meta.env.VITE_MOCKAPI_ENDPOINT;

export const useJobsStore = defineStore('jobs', () => {
    const jobs = ref<iJob[]>([]);

    const fetchJobs = async (): Promise<void> => {
        if (jobs.value.length > 0) {
            console.log('Jobs already fetched. Skipping...');
            return;
        }

        try {
            const res = await fetch(`${API_URL}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`);
            }

            jobs.value = await res.json();
        } catch (e) {
            console.error(`Error during initial job fetch: ${e}`);
            throw new Error(`Something went wrong while fetching jobs. Please try again later.`);
        }
    };

    const addJob = async (job: iJob): Promise<iJob> => {
        job.slug = textToSlug(job.title);

        try {
            const res = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(job),
            });

            if (!res.ok) {
                throw new Error(`Failed to add job: ${res.status} ${res.statusText}`);
            }

            const data: iJob = await res.json();
            jobs.value.push(data);
            return data;
        } catch (e) {
            console.error(e);
            throw new Error(`Something went wrong while adding the job: ${e}`);
        }
    };

    const deleteJob = async (jobId: string): Promise<iJob> => {
        try {
            const res = await fetch(`${API_URL}/${jobId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!res.ok) {
                throw new Error(`Failed to delete job: ${res.status} ${res.statusText}`);
            }

            const data: iJob = await res.json();
            jobs.value = jobs.value.filter((job) => job.id !== data.id);
            return data;
        } catch (e) {
            console.error(e);
            throw new Error(`Something went wrong while deleting the job: ${e}`);
        }
    };

    const updateJob = async (job: iJob): Promise<iJob> => {
        try {
            const res = await fetch(`${API_URL}/${job.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(job),
            });

            if (!res.ok) {
                throw new Error(`Failed to update job: ${res.status} ${res.statusText}`);
            }

            const data: iJob = await res.json();

            jobs.value = jobs.value.map((item) => (item.id === data.id ? data : item));

            return data;
        } catch (e) {
            console.error(e);
            throw new Error(`Something went wrong while deleting the job: ${e}`);
        }
    };

    return {
        jobs,
        fetchJobs,
        addJob,
        deleteJob,
        updateJob,
    };
});
