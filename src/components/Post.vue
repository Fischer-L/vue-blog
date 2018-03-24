<template>
  <div id="app-post">
    <section class="vueBlog-article vueBlog-content-area">
      <Article v-if="!!post === true" :post="post"></Article>
      <div v-else>No Article</div>
    </section>
    <footer class="vueBlog-post-footer">
      <div class="vueBlog-content-area">
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

// See the Home component for why a dataFetcher object.
const dataFetcher = {
  postListPromise: null,

  fetchPostList() {
    if (!this.postListPromise) {
      this.postListPromise = new Promise(async resolve => {
        let data = await appData.get("postList");
        if (!data) {
          resolve([]);
        } else {
          resolve(data);
        }
      });
    }
    return this.postListPromise;
  },

  postPromise: {},

  fetchPost(id) {
    if (!this.postPromise[id]) {
      this.postPromise[id] = new Promise(async resolve => {
        let data = await appData.get("post", { id });
        if (!data) {
          resolve(null);
        } else {
          resolve(data);
        }
      });
    }
    return this.postPromise[id];
  },
};

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
      postList: [],
    };
  },

  components: {
    Article,
    PostListContainer
  },

  // Life cyle listeners

  beforeCreate() {
    // Make sure a right start position
    window.scrollTo(0, 0);
    // We go fetching data as early as possible,
    // but don't update the fected data right away so
    // we don't block the Vue component's lifecycle or
    // cause unexpected props error.
    dataFetcher.fetchPostList();
  },

  created() {
    // Must wait until the created event
    // because we need the id prop so know which post to fetch.
    dataFetcher.fetchPost(this.id);
  },

  mounted() {
    // We try to update the fected data when our component is ready.
    window.requestAnimationFrame(async () => {
      this.postList = await dataFetcher.postListPromise;
    });
    window.requestAnimationFrame(async () => {
      let postData = await dataFetcher.postPromise[this.id];
      if (postData) {
        let article = await postBodyParser.parse(postData.body);
        if (article) {
          this.post = Object.assign({ article }, postData);
        }
      }
    });
  },

  // Life cyle listeners end
}
</script>

<style scoped lang="scss">

.vueBlog-post-footer {
  background: #f9f9f9;
}

</style>
