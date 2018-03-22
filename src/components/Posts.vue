<template>
  <div id="app-posts" class="app-content-area">
    <h1 class="app-posts-header text-left">Articles</h1>
    <PostListContainer :postList="postList"/>
  </div>
</template>

<script>
import PostListContainer from "./subComponents/PostListContainer";

export default {
  name: 'Posts',
  data() {
    return {
      postList: [
        {
          id: "1",
          author: "Ami Carey",
          time: 1521428435336,
          thumbnail: "../../static/author_0.png",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg",
          summary: `Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies. There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a two-way mirror, a display panel and controller board, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result.`
        },
        {
          id: "2",
          author: "Joel Searby",
          time: 1521428435336,
          thumbnail: "../../static/author_1.jpg",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg",
          summary: `Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies. There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a two-way mirror, a display panel and controller board, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result.`
        },
        {
          id: "3",
          author: "Ami Carey",
          time: 1521428435336,
          thumbnail: "../../static/author_0.png",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg",
          summary: `Sometime late last year I realized that I wanted my ordinary bathroom mirror to be more like the future we were promised in the movies. There doesn’t seem to be anyone selling the product I was looking for. The individual parts, however, were fairly easy to get. A number of people have done similar custom builds recently, but I had something different in mind. So I ordered myself a two-way mirror, a display panel and controller board, plus a bunch of components and arts & crafts supplies. In reality there was quite a bit of experimentation and some dead ends before I got to this set of parts, but let’s have a look at the finished — yet by no means final—result.`
        }
      ],
    };
  },

  components: {
    PostListContainer
  },
}
</script>

<style scoped lang="scss">
@import "../assets/css/AppEnv";

.app-posts-header {
  padding: 0.6em 0 0.5em 1em;
  margin: 0;
  border-bottom: 1px solid $app-border-color;
}

@media screen and (min-width: $app-big-screen-width) {
  .app-posts-header {
    padding: 1em 0;
  }
}
</style>
