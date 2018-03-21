<template>
  <div class="swiper-slide">
    <div class="app-promo-post d-flex align-items-end"
         v-bind:style="styleObject">
      <h2 class="app-promo-post-title app-font-PlexMono-M
           font-weight-bold w-100 align-middle d-flex align-items-center justify-content-center">
             {{title}}
      </h2>
    </div>
  </div>
</template>

<script>

export default {
  name: "PromoPost",

  props: [
    "img", "title"
  ],

  data() {
    return {
      styleObject: {
        backgroundImage: `url(${this.img})`
      }
    }
  }
}

</script>

<style scoped lang="scss">

.app-promo-post {
  height: 300px;
  background: center/cover no-repeat;
}

.app-promo-post-title {
  height: 60%;
  padding: 20% 0 20px 0;
  margin: 0;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  color: #f3f3f3;
}

</style>
