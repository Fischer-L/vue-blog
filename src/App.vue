<template>
  <div id="app" class="h-100">
    <NavBar />
    <router-view :key="routerKey" />
  </div>
</template>

<script>
import "bootstrap/scss/bootstrap.scss";
import NavBar from "./components/subComponents/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  },

  computed: {
    routerKey() {
      let name = this.$route.name;
      let id = this.$route.params.id || "";
      return name + id;
    }
  },

  // Life cyle listeners
  mounted() {
    // Make sure a right start position
    window.scrollTo(0, 0);
  },
  // Life cyle listeners end
};

</script>

<style lang="scss">
@import "assets/css/AppEnv";

@font-face{
  font-family: Playfair-B;
  src: url(assets/fonts/PlayfairDisplay-Black.ttf) format("truetype");
}

html, body {
  height: 100%;
  font-size: 16px;
}

#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-color;
}

.vueBlog-font-logo {
  font-family: Playfair-B;
}

.vueBlog-content-area {
  width: get-var("app-width");
  max-width: get-var("app-max-width");
  padding-bottom: 10em;
  margin: 0 auto;
  margin-top: $app-nav-bar-height;
}

.vueBlog-app-link,
.vueBlog-app-link:hover,
.vueBlog-app-link:active {
  color: unset;
  text-decoration: none;
}

.vueBlog-section-header {
  padding: 0.6em 0 0.5em 1em;
  margin: 0;
  border-bottom: 1px solid $app-border-color;
}

@media screen and (min-width: $app-big-screen-width) {
  .vueBlog-content-area {
    width: get-var("app-width", "big");
    max-width: get-var("app-max-width", "big");
  }

  .vueBlog-section-header {
    padding: 1em 0;
  }
}

</style>
