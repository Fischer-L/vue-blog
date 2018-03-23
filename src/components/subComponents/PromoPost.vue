<template>
  <div class="swiper-slide">
    <router-link class="vueBlog-app-link" v-bind:to="postLink">
      <div class="vueBlog-promo-post d-flex align-items-end"
           v-bind:style="styleObject">
        <h2 class="vueBlog-promo-post-title
             font-weight-bold w-100 align-middle d-flex align-items-end justify-content-center">
               {{title}}
        </h2>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "PromoPost",

  props: {
    id: String,
    title: String,
    mainImg: String
  },

  data() {
    return {
      styleObject: {
        backgroundImage: `url(${this.mainImg})`
      },
      postLink: `/posts/${this.id}`,
    }
  }
}

</script>

<style scoped lang="scss">

.vueBlog-promo-post {
  height: 300px;
  background: center/cover no-repeat;
}

.vueBlog-promo-post-title {
  height: 60%;
  padding: 20% 8px 36px 8px;
  margin: 0;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  color: #f3f3f3;
}

</style>
