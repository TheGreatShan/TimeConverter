import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import BananaView from "../view/BananaView.vue";
import InOutHoursVue from "../components/InOutHours.vue";

interface RoutesInterface {
    path: string;
    name: string;
    component: any;
}

const routes : RoutesInterface[] = [
    {
        path: '/',
        name: 'home',
        component: InOutHoursVue,
    },
    {
        path: '/banana',
        name: 'banana',
        component: BananaView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;