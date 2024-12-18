import { ref, onMounted, computed } from 'vue';
import { useJobsStore } from '@/stores/jobsStore';

type tJobsType = 'Full-Time' | 'Part-Time' | 'Remote' | 'Internship';
type tJobsSalary =
    | '<50'
    | '50,60'
    | '60,70'
    | '70,80'
    | '80,90'
    | '90,100'
    | '100,125'
    | '125,150'
    | '150,175'
    | '175,200'
    | '>200';

export interface iJob {
    title: string;
    type: tJobsType;
    description: string;
    location: string;
    salary: tJobsSalary;
    companyName: string;
    companyDescription: string;
    companyContactEmail: string;
    companyContactPhone: string;
    id: string;
    slug: string;
}

export function useFetchJobs() {
    const jobsStore = useJobsStore();
    const loading = ref<boolean>(true);

    onMounted(async () => {
        // setTimeout(async () => {
        await jobsStore.fetchJobs();
        loading.value = false;
        // }, 1000);
    });

    const jobs = computed(() => jobsStore.jobs);

    return {
        jobs: jobs,
        loading,
    };
}

export async function useAddJob(job: iJob): Promise<iJob> {
    const jobsStore = useJobsStore();

    try {
        const data: iJob = await jobsStore.addJob(job);
        return data;
    } catch (e) {
        console.error(e);
        throw new Error(`Something went wrong while adding the job: ${e}`);
    }
}

export async function useDeleteJob(jobId: string): Promise<iJob> {
    const jobsStore = useJobsStore();

    try {
        const data: iJob = await jobsStore.deleteJob(jobId);

        return data;
    } catch (e) {
        console.error(e);
        throw new Error(`Something went wrong while deleting the job: ${e}`);
    }
}

export async function useUpdateJob(job: iJob): Promise<iJob> {
    const jobsStore = useJobsStore();

    try {
        const data: iJob = await jobsStore.updateJob(job);

        return data;
    } catch (e) {
        console.error(e);
        throw new Error(`Something went wrong while deleting the job: ${e}`);
    }
}
