import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Porch from "../views/Porch.vue";
import Todolist from "../views/Todos.vue";
import Post from "../views/Posts.vue";
import AlbumDetail from "../views/AlbumDetail.vue";
import AlbumView from "../views/AlbumView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: Porch,
        },
        {
          path: "/todos",
          component: Todolist,
        },
        {
          path: "/posts",
          component: Post,
        },
        {
          path: "/albums",
          component: AlbumView,
        },
        {
          path: "/albums/:id",
          component: AlbumDetail,
          props: true, 
        },
      ],
    },
  ],
});

export default router;
