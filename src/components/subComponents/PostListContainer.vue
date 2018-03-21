<template>
  <div id="post-list-container" class="w-100 d-flex justify-content-sm-between align-items-start flex-wrap">
    <PostItem v-for="(item, index) in this.postList" 
                :item="item" :key="index"
    ></PostItem>
  </div>
</template>

<script>
import PostItem from "./PostItem";


export default {
  name: 'PostListContainer',

  props: ["postList"],

  components: {
    PostItem
  }
}

</script>

<style scoped lang="scss">
</style>
