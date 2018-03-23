<template>
  <div id="app-home" class="vueBlog-content-area">
    <PromoPostsContainer :promoPosts="promoPosts" />
    <PostListContainer :postList="postList"/>
  </div>
</template>

<script>
import PromoPostsContainer from "./subComponents/PromoPostsContainer";
import PostListContainer from "./subComponents/PostListContainer";
import appData from "../tools/appData";

export default {
  name: "Home",

  data() {
    
    return {
      promoPosts: [
        {
          id: "1",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg"
        },
        {
          id: "2",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg"
        }
      ],

      postList: [
        {
          id: "1",
          author: "Ami Carey",
          time: 1521428435336,
          thumbnail: "../../static/author_0.png",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg",
        },
        {
          id: "2",
          author: "Joel Searby",
          time: 1521428435336,
          thumbnail: "../../static/author_1.jpg",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg",
        },
        {
          id: "3",
          author: "Ami Carey",
          time: 1521428435336,
          thumbnail: "../../static/author_0.png",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg",
        }
      ],
    };
  },

  components: {
    PromoPostsContainer,
    PostListContainer
  },

  // Life cyle listeners
  
  created() {
    console.log("CRRRRR");
  },

  // Life cyle listeners end
}
</script>

<style scoped lang="scss">
</style>
