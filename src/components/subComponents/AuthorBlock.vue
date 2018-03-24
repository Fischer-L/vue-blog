<template>
  <div class="vueBlog-author-block text-left  d-flex justify-content-start align-items-center">
    <img class="vueBlog-author-block-thumbnail rounded-circle"
         v-bind:src="thumbnailLink"/>
    <div class="vueBlog-author-block-info text-secondary">
      <div class="vueBlog-author-block-info-text w-100">{{author}}</div>
      <div class="vueBlog-author-block-info-text w-100">{{postTime}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AuthorBlock",

  props: {
    author: {
      type: String,
      required: true,
    },
    thumbnail:  {
      type: String,
      required: true,
    },
    time:  {
      type: Number,
      required: true,
    },
  },

  data() {
    let postTime = new Date(this.time);
    postTime = new Date(
      postTime.getTime() - postTime.getTimezoneOffset() * 60 * 1000);
    postTime = postTime.toLocaleDateString({
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Encode URI for safety.
    let thumbnailLink = encodeURI(this.thumbnail);

    return {
      postTime,
      thumbnailLink,
    }
  },
}

</script>

<style scoped lang="scss">

.vueBlog-author-block {
  flex: 1;
}

.vueBlog-author-block-thumbnail {
  width: 4em;
  min-height: 4em;
  margin-right: 1em;
}

.vueBlog-author-block-info {
  flex: 1;
  font-size: 0.9em;
}

.vueBlog-author-block-info-text {
  height: 1.2em;
  overflow: hidden;
}
</style>
