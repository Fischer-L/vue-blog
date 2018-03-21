<template>
    <div class="promo-posts-container swiper-container">
      <div class="swiper-wrapper">
        <PromoPost v-for="(post, index) in this.promoPosts" :img="post.img" :title="post.title" :key="post.id"></PromoPost>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";

import Swiper from "swiper";
import PromoPost from "./PromoPost"

export default {
  name: "PromoPosts",

  props: [
    "promoPosts"
  ],

  components: {
    PromoPost
  },

  mounted() {
    let swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      autoHeight: true
    });
  }
}
</script>

<style scoped lang="scss"></style>
