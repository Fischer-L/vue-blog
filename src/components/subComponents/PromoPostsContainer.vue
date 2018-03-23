<template>
    <div class="vueBlog-promo-posts-container swiper-container">
      <div class="swiper-wrapper">
        <PromoPost v-for="(post, index) in this.promoPosts" 
                     :id="post.id" :title="post.title" :mainImg="post.mainImg" :key="index"
        ></PromoPost>
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
  name: "PromoPostsContainer",

  props: {
    promoPosts: {
      type: Array,
      required: true
    }
  },

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
