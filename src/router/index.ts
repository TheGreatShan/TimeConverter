import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import BananaView from "../BananaView.vue";
import Navbar from "../components/Navbar.vue";


export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppVue
        },
        {
            path: '/banana',
            name: 'banana',
            component: BananaView
        }
    ]
})

