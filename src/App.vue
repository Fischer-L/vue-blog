<template>
  <div id="app">
    <NavBar />
    <div id="app-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
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
@import "../node_modules/bootstrap/scss/bootstrap.scss";

@font-face{
  font-family: Playfair-B;
  src: url(assets/fonts/PlayfairDisplay-Black.ttf);
}

@font-face{
  font-family: PlexMono-L;
  src: url(assets/fonts/IBMPlexMono-Light.woff);
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
  margin-top: 60px;
}

#app-body {
  width: get-var("app-width");
  margin: 0 auto;
}

.app-link {
  color: unset;
  text-decoration: none;
}

.app-link:hover,
.app-link:active {
  color: unset;
  text-decoration: none;
}

@media screen and (min-width: $app-big-screen-width) {
  #app-body {
    width: get-var("app-width", "big");
  }
}

</style>
