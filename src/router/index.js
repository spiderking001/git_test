import {createRouter, createWebHistory} from "vue-router";
import Child from "@/views/Child.vue";


const routes = [
    {
        path: "/Child",
        name: "Child",
        component: Child,
    }
]
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})


