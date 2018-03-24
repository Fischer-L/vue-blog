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
      name: "Home",
      component: Home,
      props: true,
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts,
      props: true,
    },
    {
      path: "/posts/:id",
      name: "Post",
      component: Post,
      props: true,
    }
  ]
});
