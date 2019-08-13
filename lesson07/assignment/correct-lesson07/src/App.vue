<template>
<div id="app">

  <!-- Header start (carousel) -->
  <div class="carousel">
    <b-carousel>
      <b-carousel-slide img-src="@/assets/film.jpg" alt="Image of red movie film">
        <h1>Movie Fun!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="@/assets/movie-theater.jpg" alt="Image of darkened movie theater">
        <h1>Movie Fun!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="@/assets/film-reel.jpg" alt="Image of blue cinema film and reel">
        <h1>Movie Fun!</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="@/assets/clapperboard.png" alt="Image of darkened movie set clapperboard">
        <h1>Movie Fun!</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
  <!-- End header -->

  <!-- Navigation start (using router nav items) -->
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
  <!-- Navigation end -->

  <router-view />
</div>
</template>

<script>

</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.carousel img {
  width: 100%;
  height: 30rem;
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
