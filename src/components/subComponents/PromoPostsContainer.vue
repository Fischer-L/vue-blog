<template>
    <div class="vueBlog-promo-posts-container swiper-container">
      <div class="swiper-wrapper">
        <PromoPost v-for="(post, index) in this.promoPosts" 
                     :id="post.id" :title="post.title" :mainImg="post.mainImg" :key="index"
        ></PromoPost>
      </div>
      <div class="swiper-pagination"></div>
      <div v-on:mouseup="onClickSwiper" class="swiper-button-next"></div>
      <div v-on:mouseup="onClickSwiper" class="swiper-button-prev"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";

import Swiper from "swiper";
import PromoPost from "./PromoPost"

const MS_SLIDE_SPEED = 1400;
const MS_NEXT_SLIDE_SCHEDULE = 8000;

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

  methods: {
    _scheduleNextSlide() {
      if (this._nextSlideTimer) {
        return;
      }
      this._nextSlideTimer = window.setTimeout(() => {
        if (this._swiper.isEnd) {
          this._swiper.slideTo(0, MS_SLIDE_SPEED);
        } else {
          this._swiper.slideNext(MS_SLIDE_SPEED); 
        }
        this._nextSlideTimer = null;
        this._scheduleNextSlide();
      }, 8000);
    },

    _unscheduleNextSlide() {
      if (this._nextSlideTimer) {
        window.clearTimeout(this._nextSlideTimer);
        this._nextSlideTimer = null;
      }
    },

    onClickSwiper() {
      // When users explicitly click the next/previous promo post,
      // in order not to bother users, we unschedule right away and
      // wait for at least 10s to schedule next one.
      this._unscheduleNextSlide();
      window.setTimeout(() => this._scheduleNextSlide(),
        MS_NEXT_SLIDE_SCHEDULE + 10000);
    },
  },

  mounted() {
    this._swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      autoHeight: true,
      speed: MS_SLIDE_SPEED,
    });
    this._scheduleNextSlide();
  }
}
</script>

<style scoped lang="scss"></style>
