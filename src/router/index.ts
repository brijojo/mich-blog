import { createRouter, createWebHashHistory } from "vue-router";
import PageRouter from "./page/index"
import ViewRouter from "./view/index"

const base_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL : ""
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL), // web模式
    history: createWebHashHistory(), // 哈希模式
    routes: [...PageRouter, ...ViewRouter],
});


export default router