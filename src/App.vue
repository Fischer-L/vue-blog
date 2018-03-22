<template>
  <div id="app" class="h-100">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import "bootstrap/scss/bootstrap.scss";
import NavBar from "./components/subComponents/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};

</script>

<style lang="scss">
@import "assets/css/AppEnv";

@font-face{
  font-family: Playfair-B;
  src: url(assets/fonts/PlayfairDisplay-Black.ttf) format("truetype");
}

@font-face{
  font-family: PlexMono-L;
  src: url(assets/fonts/IBMPlexMono-Light.woff2) format("woff2"),
       url(assets/fonts/IBMPlexMono-Light.woff) format("woff");
}

@font-face{
  // font-family: PlexMono-M;
  // src: url(assets/fonts/IBMPlexMono-Medium.woff2) format("woff2"),
  //      url(assets/fonts/IBMPlexMono-Medium.woff) format("woff");
}

@font-face{
  font-family: PlexMono-R;
  src: url(assets/fonts/IBMPlexMono-Regular.woff2) format("woff2"),
       url(assets/fonts/IBMPlexMono-Regular.woff) format("woff");
}

html, body {
  height: 100%;
  font-size: 16px;
}

#app {
  font-family: PlexMono-R;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-color;
}

.app-content-area {
  width: get-var("app-width");
  max-width: get-var("app-max-width");
  padding-bottom: 10em;
  margin: 0 auto;
  margin-top: $app-nav-bar-height;
}

.app-link,
.app-link:hover,
.app-link:active {
  color: unset;
  text-decoration: none;
}

@media screen and (min-width: $app-big-screen-width) {
  .app-content-area {
    width: get-var("app-width", "big");
    max-width: get-var("app-max-width", "big");
  }
}

</style>
