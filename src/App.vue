<template>
  <div id="app">
    <NavBar />
    <div id="app-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import "bootstrap/scss/bootstrap.scss";
import NavBar from "./components/NavBar";

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
  src: url(assets/fonts/PlayfairDisplay-Black.ttf);
}

@font-face{
  font-family: PlexMono-L;
  src: url(assets/fonts/IBMPlexMono-Light.woff2),
       url(assets/fonts/IBMPlexMono-Light.woff);
}

@font-face{
  font-family: PlexMono-M;
  src: url(assets/fonts/IBMPlexMono-Medium.woff2),
       url(assets/fonts/IBMPlexMono-Medium.woff);
}

html {
  font-size: 16px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-color;
}

#app-body {
  width: get-var("app-width");
  max-width: get-var("app-width");
  margin: 0 auto;
  margin-top: $app-nav-bar-height;
}

.app-link,
.app-link:hover,
.app-link:active {
  color: unset;
  text-decoration: none;
}

.app-font-PlexMono-M {
  font-family: PlexMono-M;
}

@media screen and (min-width: $app-big-screen-width) {
  #app-body {
    width: get-var("app-width", "big");
  }
}

</style>
