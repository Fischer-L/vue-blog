import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Post from "@/components/Post";
import Posts from "@/components/Posts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      props: true,
    },
    {
      path: "/posts",
      component: Posts,
      props: true,
    },
    {
      path: "/posts/:id",
      component: Post,
      props: true,
    }
  ]
});
