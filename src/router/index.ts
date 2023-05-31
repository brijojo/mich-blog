import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "",
        redirect: "homepage",
    },
    {
        path: "/homepage",
        name: "homepage",
        component: () => import("../views/HomePage.vue"),
    }
]

const base_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL : ""
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL), // web模式
    history: createWebHashHistory(), // 哈希模式
    routes,
});


export default router