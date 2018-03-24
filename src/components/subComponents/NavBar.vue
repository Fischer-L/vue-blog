<template>
  <nav class="vueBlog-navbar navbar navbar-expand-md fixed-top">
    <ul class="vueBlog-navbar-nav navbar-nav mr-auto">
      <li class="vueBlog-nav-item vueBlog-nav-item-main nav-item nav-item-main">
        <router-link to="/" class="vueBlog-app-link">VueBlog</router-link>
      </li>
      <router-link to="/posts" class="vueBlog-app-link">
        <li class="vueBlog-nav-item vueBlog-nav-item-posts nav-item nav-item-posts align-middle">
          Posts
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
}

</script>

<style scoped lang="scss">
@import "../../assets/css/AppEnv";

.vueBlog-navbar {
  height: $app-nav-bar-height;
  padding: 0;
  background: $app-color;
}

.vueBlog-navbar-nav {
  width: get-var("app-width");
  margin: 0 auto;
  position: relative;
}

.vueBlog-nav-item {
  color: #fff;
}

.vueBlog-nav-item-main {
  width: 6em;
  height: $app-nav-bar-height * 0.7;
  line-height: $app-nav-bar-height * 0.7;
  margin: 0 auto;
  font-size: 1.1em;
  font-family: Playfair-B;
}

.vueBlog-nav-item-posts {
  width: 4em;
  height: $app-nav-bar-height * 0.55;
  line-height: $app-nav-bar-height * 0.55;
  padding: 0px 10px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  color: #e5e5e5;
  font-family: PlexMono-L;
  font-size: 0.9em;
  position: absolute;
  right: 1em;
  top: 50%;
  // Need a bit visual compensation to make it
  // look like center aligned with .nav-item-main
  transform: translateY(-43%);
}

@media screen and (min-width: $app-big-screen-width) {
  .vueBlog-navbar-nav {
    width: get-var("app-width", "big");
  }
}
</style>