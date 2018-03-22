<template>
  <div class="post-item d-flex">
    <router-link class="app-link w-100 h-100 d-flex flex-wrap flex-column"
                 v-bind:to="postLink">
      <img class="post-item-img w-100 d-block" 
           v-bind:style="styleObject" />
      <div class="post-item-body text-left d-flex flex-wrap flex-column">
        <h6 class="post-item-title text-truncate">{{item.title}}</h6>
        <div class="post-item-sub-body d-flex justify-content-start align-items-center">
          <img class="post-item-thumbnail rounded-circle"
               v-bind:src="thumbnailLink"/>
          <div class="post-item-info text-secondary">
            <div class="post-item-info-text w-100">{{item.author}}</div>
            <div class="post-item-info-text w-100">{{postTime}}</div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "PostItem",

  props: ["item"],

  data() {
    let postTime = new Date(this.item.time);
    postTime = new Date(
      postTime.getTime() - postTime.getTimezoneOffset() * 60 * 1000);
    postTime = postTime.toLocaleDateString({
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Encode URI for safety.
    let imgLink = encodeURI(this.item.img);
    let thumbnailLink = encodeURI(this.item.thumbnail);

    return {
      styleObject: {
        backgroundImage: `url(${imgLink})`
      },
      postLink: `/posts/${this.item.id}`,
      postTime,
      thumbnailLink,
    }
  },
}

</script>

<style scoped lang="scss">
@import "../../assets/css/AppEnv";

.post-item {
  width: 100%;
  height: 20em;
  border: 1px solid $app-border-color;
  margin-top: 3em;
  background: #fff;
}

.post-item-img {
  height: 55%;
  border-radius: 0;
  background: center/cover no-repeat;
}

.post-item-body {
  flex: 1;
  padding: 0.8em 1.2em 0.3em 1.2em;
}

.post-item-title {
  height: 2.2em;
  font-size: 1.1em;
  white-space: unset;
}

.post-item-sub-body {
  flex: 1;
}

.post-item-thumbnail {
  width: 4em;
  margin-right: 1em;
}

.post-item-info {
  flex: 1;
  font-size: 0.9em;
}

.post-item-info-text {
  height: 1.2em;
  overflow: hidden;
}

@media screen and (min-width: $app-big-screen-width) {
  .post-item {
    width: 45%;
    border-radius: 2px;
  }

  .post-item-body {
    padding: 0.8em 0.8em 0.3em 0.8em;
  }

  .post-item-img {
    border-radius: 2px 2px 0 0;
  }
}
</style>
