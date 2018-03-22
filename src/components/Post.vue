<template>
  <div id="app-post">
    <section class="app-post-article app-content-area">
      <Article v-if="!!post === true" :post="post"></Article>
      <div v-else>No Article</div>
    </section>
    <footer class="app-post-footer">
      <div class="app-content-area">
        <PostListContainer :postList="postList"/>
      </div>
    </footer>
  </div>
</template>

<script>
import Article from "./subComponents/Article";
import PostListContainer from "./subComponents/PostListContainer";
import appData from "../tools/appData";
import postBodyParser from "../tools/postBodyParser";

export default {
  name: 'Post',

  props: {
    id: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      post: null,

      postList: [
        // {
        //   id
        //   author
        //   time
        //   thumbnail
        //   title
        //   img
        // }
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
      ],
    };
  },

  components: {
    Article,
    PostListContainer
  },

  methods: {
    _fetchPost(id) {
      if (this._fetchPostPromise) {
        return; // Already fectching
      }
      this._fetchPostPromise = new Promise(async resolve => {
        let postData = await appData.get("post", { id : this.id });
        if (!postData) {
          resolve(null);
        } else {
          resolve(postData);
        }
      });
    },
  },

  // Life cyle listeners
  
  created() {
    this._fetchPost(this.id);
  },

  mounted() {
    if (this._fetchPostPromise) {
      window.requestAnimationFrame(async () => {
        let postData = await this._fetchPostPromise;
        if (postData) {
          let article = await postBodyParser.parse(postData.body);
          if (article) {
            this.post = Object.assign({ article }, postData);
          }
        }
        this._fetchPostPromise = null;
      });
    }
  },

  // Life cyle listeners end
}
</script>

<style scoped lang="scss">

.app-post-footer {
  background: #f9f9f9;
}

</style>
