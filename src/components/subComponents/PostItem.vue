<template>
  <div class="vueBlog-post-item d-flex">
    <router-link class="vueBlog-app-link w-100 h-100 d-flex flex-wrap flex-column"
                 v-bind:to="postLink">
      <img class="vueBlog-post-item-img w-100 d-block" 
           v-bind:style="styleObject" />
      <div class="vueBlog-post-item-body text-left d-flex flex-wrap flex-column">
        <h6 class="vueBlog-post-item-title text-truncate">{{item.title}}</h6>
        <AuthorBlock :author="item.author" :thumbnail="item.thumbnail" :time="item.time" />
      </div>
    </router-link>
  </div>
</template>

<script>
import AuthorBlock from "./AuthorBlock";
import { getBestFitMainImg } from "../../tools/utils";

export default {
  name: "PostItem",

  props: {
    item: {
      type: Object,
      required: true,
    }
  },

  data() {
    let url = getBestFitMainImg(window, this.item.mainImg);
    return {
      styleObject: {
        backgroundImage: `url(${encodeURI(url)})`
      },
      postLink: `/posts/${this.item.id}`,
    }
  },

  components: {
    AuthorBlock
  }
}

</script>

<style scoped lang="scss">
@import "../../assets/css/AppEnv";

.vueBlog-post-item {
  width: 100%;
  height: 20em;
  border: 1px solid $app-border-color;
  margin-top: 3em;
  background: #fff;
}

.vueBlog-post-item-img {
  height: 55%;
  border-radius: 0;
  background: center/cover no-repeat;
}

.vueBlog-post-item-body {
  flex: 1;
  padding: 0.8em 1.2em 0.3em 1.2em;
}

.vueBlog-post-item-title {
  height: 2.2em;
  font-size: 1.1em;
  white-space: unset;
}

@media screen and (min-width: $app-big-screen-width) {
  .vueBlog-post-item {
    width: 45%;
    border-radius: 2px;
  }

  .vueBlog-post-item-body {
    padding: 0.8em 0.8em 0.3em 0.8em;
  }

  .vueBlog-post-item-img {
    border-radius: 2px 2px 0 0;
  }
}
</style>
