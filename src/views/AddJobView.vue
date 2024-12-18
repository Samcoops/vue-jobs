<script setup lang="ts">
import Button from '@/components/Button.vue';
import type { iJob } from '@/services.job';
import { reactive, ref } from 'vue';
import { useFetchJobs, useAddJob } from '@/services.job';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';
import GetBackLink from '@/components/GetBackLink.vue';

const form: iJob = reactive({
    title: '',
    type: 'Full-Time',
    description: '',
    location: '',
    salary: '<50',
    companyName: '',
    companyDescription: '',
    companyContactEmail: '',
    companyContactPhone: '',
    id: '',
    slug: '',
});

const router = useRouter();
const { jobs, loading: loadingJob } = useFetchJobs();
const loadingAddJob = ref<boolean>(false);

const handleValidation = (): boolean => {
    const isTitleUnique = (): boolean => {
        const detectedJob = jobs.value.find((item) => item.title === form.title);

        if (detectedJob) return false;
        return true;
    };

    if (!isTitleUnique()) {
        toast.error(`Job name is not unique: ${form.title}.`);

        return false;
    }

    return true;
};

const handleSubmit = async (): Promise<void> => {
    if (!handleValidation()) {
        return;
    }

    const toastId = toast.loading('Adding job... Please wait ⏳', {
        position: toast.POSITION.TOP_RIGHT,
    });

    loadingAddJob.value = true;

    try {
        const newJob = await useAddJob(form);

        toast.remove(toastId);

        toast.success('Job added successfully! 🎉', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        });

        router.push(`/jobs/${newJob.slug}`);
    } catch (e) {
        toast.remove(toastId);

        toast.error(e || 'Something went wrong 🤕', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
        });
        console.error(e);
    } finally {
        loadingAddJob.value = false;
    }
};
</script>

<template>
    <div class="center flex-col">
        <div class="container">
            <GetBackLink :path="`/jobs`" :text="'Go to Job Listings'" />
        </div>

        <main class="w-full bg-[--clr-bg-contrast] center py-[--gap] pb-20">
            <div class="container center">
                <form
                    :class="[
                        `max-w-[600px] w-full bg-white p-5 shadow-md flex flex-col gap-4`,
                        loadingJob ? 'disabled' : loadingAddJob ? 'disabled' : '',
                    ]"
                    @submit.prevent="handleSubmit"
                >
                    <h2 class="text-3xl text-center font-semibold text-[--clr-secondary]">
                        Add Job
                    </h2>

                    <div>
                        <label for="type" class="block text-gray-700 font-bold">Job Type</label>
                        <select
                            v-model="form.type"
                            id="type"
                            name="type"
                            class="border rounded-md w-full py-2 px-3"
                            required
                        >
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Remote">Remote</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>

                    <div>
                        <label for="name" class="block text-gray-700 font-bold"
                            >Job Listing Name</label
                        >
                        <input
                            v-model="form.title"
                            type="text"
                            id="name"
                            name="name"
                            class="border rounded-md w-full py-2 px-3"
                            placeholder="eg. Beautiful Apartment In Miami"
                            required
                        />
                    </div>
                    <div>
                        <label for="description" class="block text-gray-700 font-bold"
                            >Description</label
                        >
                        <textarea
                            v-model="form.description"
                            id="description"
                            name="description"
                            class="border rounded-md w-full py-2 px-3"
                            rows="4"
                            placeholder="Add any job duties, expectations, requirements, etc"
                            required
                        />
                    </div>

                    <div>
                        <label for="salary" class="block text-gray-700 font-bold">Salary</label>
                        <select
                            v-model="form.salary"
                            id="salary"
                            name="salary"
                            class="border rounded-md w-full py-2 px-3"
                            required
                        >
                            <option value="<50">under $50K</option>
                            <option value="50,60">$50 - $60K</option>
                            <option value="60,70">$60 - $70K</option>
                            <option value="70,80">$70 - $80K</option>
                            <option value="80,90">$80 - $90K</option>
                            <option value="90,100">$90 - $100K</option>
                            <option value="100,125">$100 - $125K</option>
                            <option value="125,150">$125 - $150K</option>
                            <option value="150,175">$150 - $175K</option>
                            <option value="175,200">$175 - $200K</option>
                            <option value=">200">Over $200K</option>
                        </select>
                    </div>

                    <div>
                        <label for="location" class="block text-gray-700 font-bold">Location</label>
                        <input
                            v-model="form.location"
                            type="text"
                            id="location"
                            name="location"
                            class="border rounded-md w-full py-2 px-3"
                            placeholder="Company Location"
                            required
                        />
                    </div>

                    <div>
                        <label for="company" class="block text-gray-700 font-bold"
                            >Company Name</label
                        >
                        <input
                            v-model="form.companyName"
                            type="text"
                            id="company"
                            name="company"
                            class="border rounded-md w-full py-2 px-3"
                            placeholder="Company Name"
                            required
                        />
                    </div>

                    <div>
                        <label for="company_description" class="block text-gray-700 font-bold"
                            >Company Description</label
                        >
                        <textarea
                            v-model="form.companyDescription"
                            id="company_description"
                            name="company_description"
                            class="border rounded-md w-full py-2 px-3"
                            rows="4"
                            placeholder="What does your company do?"
                            required
                        />
                    </div>

                    <div>
                        <label for="contact_email" class="block text-gray-700 font-bold"
                            >Contact Email</label
                        >
                        <input
                            v-model="form.companyContactEmail"
                            type="email"
                            id="contact_email"
                            name="contact_email"
                            class="border rounded-md w-full py-2 px-3"
                            placeholder="Email address for applicants"
                            required
                        />
                    </div>
                    <div>
                        <label for="contact_phone" class="block text-gray-700 font-bold"
                            >Contact Phone</label
                        >
                        <input
                            v-model="form.companyContactPhone"
                            type="tel"
                            id="contact_phone"
                            name="contact_phone"
                            class="border rounded-md w-full py-2 px-3"
                            placeholder="Optional phone for applicants"
                            required
                        />
                    </div>

                    <div>
                        <Button
                            type="submit"
                            :style="'primary'"
                            :text="'Add Job'"
                            :classStyling="`w-full`"
                        />
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>
