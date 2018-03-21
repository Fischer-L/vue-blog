<template>
  <div id="app-home">
    <PromoPosts :promoPosts="promoPosts" />
  </div>
</template>

<script>
import PromoPosts from "./PromoPosts"

export default {
  name: "Home",
  data() {
    return {
      promoPosts : [
        {
          id: "1",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg"
        },
        {
          id: "2",
          title: "My Bathroom Mirror Is Smarter Than Yours",
          img: "../../static/post_1_main.jpg"
        }
      ]
    }
  },

  components: {
    PromoPosts
  },

}
</script>

<style scoped lang="scss">
</style>
