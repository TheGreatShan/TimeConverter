import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppVue
        }
    ],
    history: createWebHistory()
})

