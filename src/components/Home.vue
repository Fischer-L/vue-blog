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

    _fetchData(type) {
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

    _updateData(type) {
      if (!this._fetchPromises) {
        return;
      }

      if ((type === "postList" && this._fetchPromises.postList) ||
          (type === "promoPosts" && this._fetchPromises.promoPosts)) {
        window.requestAnimationFrame(async () => {
          this[type] = await this._fetchPromises[type];
          this._fetchPromises[type] = null;
        });
      }
    },
  },

  // Life cyle listeners

  beforeCreate() {
    // Make sure a right start position
    window.scrollTo(0, 0);
  },
  
  created() {
    // We go fetching data once our component is created,
    // but don't update the fected data right away so
    // we don't block the Vue component's lifecycle or
    // cause unexpected props error.
    this._fetchData("postList");
    this._fetchData("promoPosts");
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
