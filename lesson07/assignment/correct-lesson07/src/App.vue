<template>
<div id="app">

<!-- Header start (carousel) -->
  <div class="carousel">
    <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="item in carouselItems"
       :key="item.id"
       :caption="item.text"
       :img-src="item.image"
       class="img-fluid"
       :alt="item.alt"
    >
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
export default {
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          image: require('@/assets/film.jpg'),
          alt: 'Image of red movie film',
          text: 'Movie Fun!'
        },
        {
          id: 2,
          image: require('@/assets/movie-theater.jpg'),
          alt: 'Image of darkened movie theater',
          text: 'Movie Fun!'
        },
        {
          id: 3,
          image: require('@/assets/film-reel.jpg'),
          alt: 'Image of blue cinema film and reel',
          text: 'Movie Fun!'
        },
        {
          id: 4,
          image: require('@/assets/clapperboard.png'),
          alt: 'Image ofmovie set clapperboard',
          text: 'Movie Fun!'
        }
      ],
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
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

html body {
    background-color: #c2d1f0;
  }

.carousel img {
  width: 100%;
  height: 30rem;
}

@media screen and (max-width: 769px) {
  .carousel img {
    height: 15rem;
  }
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
