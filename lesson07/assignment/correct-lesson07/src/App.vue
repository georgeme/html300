<template>
<div id="app">

  <!-- Header start (carousel) -->
  <!-- <div> -->
    <!-- <v-carousel>
      <v-carousel-item v-for="item in items">
        <v-img contain :src="item"></v-img>
      </v-carousel-item>
    </v-carousel> -->

    <!-- <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel> -->

    <!-- <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item"
      >
      </v-carousel-item>
    </v-carousel>
  </div> -->

  <div class="carousel">
  <b-carousel>
    <b-carousel-slide img-src="src/assets/film.jpg" alt="Image of red movie film">
      <h1>Movie Fun!</h1>
    </b-carousel-slide>
    <b-carousel-slide img-src="src/assets/movie-theater.jpg" alt="Image of darkened movie theater">
      <h1>Movie Fun!</h1>
    </b-carousel-slide>
    <b-carousel-slide img-src="src/assets/film-reel.jpg" alt="Image of blue cinema film and reel">
      <h1>Movie Fun!</h1>
    </b-carousel-slide>
    <b-carousel-slide img-src="src/assets/clapperboard.png" alt="Image of darkened movie set clapperboard">
      <h1>Movie Fun!</h1>
    </b-carousel-slide>
  </b-carousel>
</div>
  <!-- End header -->

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
          <!-- <router-link class="navItem" to="/">Home</router-link>
          <router-link class="navItem" to="/movies">Movies</router-link>
          <router-link class="navItem" to="/stars">Stars</router-link>
          <router-link class="navItem" to="/trivia">Trivia</router-link> -->
          <!-- <b-nav-item href="/home">Home</b-nav-item>
          <b-nav-item href="/movies">Movies</b-nav-item>
          <b-nav-item href="/stars">Stars</b-nav-item>
          <b-nav-item href="/trivia">Trivia</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  <router-view />
</div>
</template>

// <script>
//   let file1 = require('assets/film.jpg')
//   let file2 = require('assets/movie-theater.jpg')
//   let file3 = require('assets/film-reel.jpg')
//   let file4 = require('assets/clapperboard.png')
//
// export default {
// data() {
//   items [
//     file1,
//     file2,
//     file3,
//     file4
//   ]
//   // items: [
//   //     {
//   //       src: require('/assets/film.jpg')
//   //     },
//   //     {
//   //       src: require('/assets/movie-theater.jpg')
//   //     },
//   //     {
//   //       src: require('/assets/film-reel.jpg')
//   //     },
//   //     {
//   //       src: require('/assets/clapperboard.png')
//   //     }
//   //   ]
//   }
// }
//
// // export default {
// //   data() {
// //     return {
// //       slide: 0,
// //       sliding: null
// //     }
// //   },
// //   methods: {
// //     onSlideStart(slide) {
// //       this.sliding = true
// //     },
// //     onSlideEnd(slide) {
// //       this.sliding = false
// //     }
// //   }
// // }
// </script>



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
