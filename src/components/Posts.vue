<template>
  <div id="app-posts" class="vueBlog-content-area">
    <h2 class="vueBlog-section-header text-left">Articles</h2>
    <PostListContainer v-if="postList.length > 0" :postList="postList"/>
  </div>
</template>

<script>
import PostListContainer from "./subComponents/PostListContainer";
import appData from "../tools/appData";

// See the Home component for why a dataFetcher object.
const dataFetcher = {
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

  async getPostList() {
    let list = null;
    if (this.postListPromise) {
      list = await this.postListPromise;
      this.postListPromise = null;
    }
    return list;
  }
};

export default {
  name: 'Posts',
  data() {
    return {
      postList: []
    };
  },

  components: {
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

  mounted() {
    // We try to update the fected data when our component is ready.
    window.requestAnimationFrame(async () => {
      this.postList = await dataFetcher.getPostList();
    });
  },

  // Life cyle listeners end
}
</script>

<style scoped lang="scss"></style>
