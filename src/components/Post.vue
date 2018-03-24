<template>
  <div id="app-post">
    <section v-bind:class="{ found404: found404 }" class="vueBlog-article vueBlog-content-area">
      <Article v-if="!!post === true && !found404" :post="post"></Article>
      <div class="vueBlog-no-article">
        <img class="vueBlog-no-article-coffe d-flex" src="../assets/img/coffe.svg" />
        <h4 class="vueBlog-no-article-msg-main vueBlog-font-logo font-italic">The article dose not exist or was removed</h4>
        <h4>More articles out there</h4>
      </div>
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
      found404: false,
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
          return;
        }
      }
      this.found404 = true;
    });
  },

  // Life cyle listeners end
}
</script>

<style scoped lang="scss">
.vueBlog-article.found404 {
  // We want our "More articles out there" message
  // not far away from the post list below
  padding-bottom: 0;
}

.vueBlog-article.found404 > .vueBlog-no-article {
  display: block
}

.vueBlog-no-article {
  padding-top: 2em;
  display: none;
}

.vueBlog-no-article-coffe {
  width: 20%;
  margin: 0 auto;
}

.vueBlog-no-article-msg-main {
  margin-bottom: 2em;
}

.vueBlog-post-footer {
  background: #f9f9f9;
}

</style>
