<template>
  <div id="app-home" class="vueBlog-content-area">
    <PromoPostsContainer v-if="promoPosts.length > 0" :promoPosts="promoPosts" />
    <h3 class="vueBlog-section-header text-left">Populars</h3>
    <PostListContainer v-if="postList.length > 0" :postList="postList"/>
  </div>
</template>

<script>
import PromoPostsContainer from "./subComponents/PromoPostsContainer";
import PostListContainer from "./subComponents/PostListContainer";
import appData from "../tools/appData";

// Notices:
// 1. Why don't marge this dataFetcher's methods into our component?
// Because we want to fetch data on the beforeCreate event, which is even
// our component gets created, we need another object to do that.
//
// 2. Across pages, we fetches many similar data so a question may raise:
// why not abstract this dataFetcher pattern? The answer is Yes and No both.
// This is really a matter of taste. Here we chose No because there is a `param`
// arg to get data which implies different expectations might exist with the same
// key but with different params; that adds complexity onto the abstraction.
// Plus pages may have their own plan to handle data, in the early stage, maybe
// we shouldn't do optimization to lose the flexibilty and adding complexity.
const dataFetcher = {
  fetchData(type) {
    if (!this._fetchPromises) {
      this._fetchPromises = {};
    }
    // If there are promises, already fetching,
    // so proceed when there aren't.
    if ((type === "postList" && !this._fetchPromises.postList) ||
        (type === "promoPosts" && !this._fetchPromises.promoPosts)) {
      this._fetchPromises[type] = new Promise(async resolve => {
        let data = await appData.get(type);
        if (!data) {
          resolve([]);
        } else {
          resolve(data);
        }
      });
    }
  },

  getData(type) {
    if ((type === "postList" || type === "promoPosts") &&
        this._fetchPromises && this._fetchPromises[type]) {
      return this._fetchPromises[type];
    }
    return Promise.resolve(null);
  },
};

export default {
  name: "Home",

  data() {
    return {
      promoPosts: [],
      postList: [],
    };
  },

  components: {
    PromoPostsContainer,
    PostListContainer
  },

  methods: {
    _updateData(type) {
      window.requestAnimationFrame(async () => {
        this[type] = await dataFetcher.getData(type);
      });
    },
  },

  // Life cyle listeners

  beforeCreate() {
    // Make sure a right start position
    window.scrollTo(0, 0);
    // We go fetching data as early as possible,
    // but don't update the fected data right away so
    // we don't block the Vue component's lifecycle or
    // cause unexpected props error.
    dataFetcher.fetchData("postList");
    dataFetcher.fetchData("promoPosts");
  },

  mounted() {
    // We try to update the fected data when our component is ready.
    this._updateData("postList");
    this._updateData("promoPosts");
  },

  // Life cyle listeners end
}
</script>

<style scoped lang="scss">
</style>
