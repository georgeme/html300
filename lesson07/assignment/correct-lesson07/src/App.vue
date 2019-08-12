<template>
<div id="app">

  <!-- Header start (carousel) -->
  <div class="carousel">
    <b-carousel
      id="carousel-slider"
      style="text-shadow: 0px 0px 2px #000"
      v-model="slide"
      img-width="100%"
      img-height="30rem"
    >
      <b-carousel-slide
        caption="Movie Fun!"
        img-src="@/assets/film.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Movie Fun!"
        img-src="@/assets/movie-theater.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Movie Fun!"
        img-src="@/assets/film-reel.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Movie Fun!"
        img-src="@/assets/clapperboard.png"
      ></b-carousel-slide>
    </b-carousel>
  </div>
  <!-- End header -->

  <!-- Navigation using routers DO NOT TOUCH THIS -IT'S THE ONLY THING THAT'S WORKING CORRECTLY -->
  <div class="navbar">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="/home">
        <img src="@/assets/hollywood.jpg" width="150" height="60" alt="Image of Hollywood sign">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-link class="navItem" to="home">Home</b-link>
          <b-link class="navItem" to="movies">Movies</b-link>
          <b-link class="navItem" to="stars">Stars</b-link>
          <b-link class="navItem" to="trivia">Trivia</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <!-- End navigation -->

  <router-view />
</div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navbar {
  background-color: #000080;
}

.navItem {
  font-size: 2em;
  padding: 1rem;
  border-right: 1px solid #ffffff;
}

.navItem:last-of-type {
  border-right: none;
}

@media screen and (max-width: 1024px) {
  .navItem {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 769px) {
  .navItem {
    border: none;
  }
}
</style>
