import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
    autoClose: 100000,
    multiple: true,
    teleport: 'body',
    pauseOnHover: true,
    clearOnUrlChange: false,
    position: 'top-right',
    newestOnTop: true,
} as ToastContainerOptions);

app.mount('#app');
