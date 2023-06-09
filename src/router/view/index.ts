import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/wel",
    component: () => import("@/page/index/index.vue"),
    redirect: "/wel/index",
    children: [
      {
        path: "index",
        name: "首页",
        component: () => import("@/views/wel/index.vue"),
      },
      {
        path: 'articles',
        name: '文章',
        component: () => import("@/views/articles/index.vue")
      }
    ],
  },
];

export default routes
