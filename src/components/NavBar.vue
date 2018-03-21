<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item nav-item-main">
        <router-link to="/" class="app-link">VueBlog</router-link>
      </li>
      <li class="nav-item nav-item-posts">
        <router-link to="/posts" class="app-link align-middle">Posts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "NavBar",
}

</script>

<style scoped lang="scss">
@import "../assets/css/AppEnv";

.navbar {
  height: $app-nav-bar-height;
  background: $app-color;
}

.navbar-nav {
  width: get-var("app-width");
  margin: 0 auto;
  position: relative;
}

.nav-item {
  color: #fff;
}

.nav-item-main {
  width: 6em;
  margin: 0 auto;
  font-family: Playfair-B;
}

.nav-item-posts {
  width: 4em;
  padding: 0px 10px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  color: #e5e5e5;
  font-family: PlexMono-L;
  font-size: 0.9em;
  position: absolute;
  right: 1em;
  // Need a bit visual compensation to make it
  // look like center aligned with .nav-item-main
  top: 0.1em;
}

@media screen and (min-width: $app-big-screen-width) {
  .navbar-nav {
    width: get-var("app-width", "big");
  }
}
</style>