import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: () => import('../views/JobsView.vue'),
        },
        {
            path: '/jobs/:slug',
            name: 'job',
            component: () => import('../views/JobView.vue'),
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: () => import('../views/AddJobView.vue'),
        },
        {
            path: '/jobs/edit/:slug',
            name: 'edit-job',
            component: () => import('../views/EditJobView.vue'),
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('../views/NotFoundView.vue'),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (savedPosition) {
                    resolve(savedPosition);
                } else {
                    resolve({ top: 0, behavior: 'smooth' });
                }
            }, 0);
        });
    },
});

export default router;
