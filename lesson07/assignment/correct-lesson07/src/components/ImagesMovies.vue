<template>
  <div class="container-fluid">
    <div>
      <!-- Start Bootstrap grid for images -->
      <div class="moviesHeader">
        <h3 class="display-3">find your next favorite movie!</h3>
        <h5 class="display-5">There are some movies we all know...</h5>
      </div>
      <!-- Movies we know images -->
      <div>
        <b-container>
          <b-row align-h="around">
            <b-col v-for="(item, index) in knowItems">
              {{index + 1}} of 3
              <b-img fluid :rounded="circle" :key="item.id" :src="item.image" :alt="item.alt"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="moviesHeader">
        <h5 class="display-5">With some stars we all love...</h5>
      </div>
      <!-- Stars we love images -->
      <div>
        <b-container>
          <b-row align-h="around">
            <b-col v-for="(item, index) in loveItems">
              {{index + 1}} of 3
              <b-img fluid :key="item.id" :src="item.image" :alt="item.alt"></b-img>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <!-- List of movies - hardcoded because it's not going to change -->
    <div class="moviesHeader">
      <h5 class="display-5">And then there are movies we don't remember, never knew, or forgot...</h5>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Comedy</h5>
          <p class="lead">The Bachelor and the Bobby-Soxer</p>
          <p class="lead">The Big Picture</p>
          <p class="lead">Joe Versus the Volcano</p>
          <p class="lead">Lover Come Back</p>
          <p class="lead">My Favorite Wife</p>
          <p class="lead">Pillow Talk</p>
          <p class="lead">Send Me No Flowers</p>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Romance</h5>
          <p class="lead">The Bishop's Wife</p>
          <p class="lead">She's Having A Baby</p>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Musical</h5>
          <p class="lead">Strictly Ballroom</p>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Drama or Thriller</h5>
          <p class="lead">His Girl Friday</p>
          <p class="lead">Shadow of a Doubt</p>
          <p class="lead">Tremors</p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script to display the images from two arrays -->
<script>
export default {
  name: "ImagesMovies",
  data() {
    return {
      knowItems: [
        {
          id: 1,
          image: require("@/assets/007.jpg"),
          alt: "Image of Daniel Craig as James Bond"
        },
        {
          id: 2,
          image: require("@/assets/ironman.png"),
          alt: "Robert Downey Jr. as Iron Man"
        },
        {
          id: 3,
          image: require("@/assets/thor.jpg"),
          alt: "Image of Thor"
        }
      ],
      loveItems: [
        {
          id: 4,
          image: require("@/assets/hanks.jpg"),
          alt: "Image of Tom Hanks"
        },
        {
          id: 5,
          image: require("@/assets/bogart-bacall.jpg"),
          alt: "Image of Humphrey Bogart and Lauren Bacall"
        },
        {
          id: 6,
          image: require("@/assets/j-law.jpg"),
          alt: "Image of Jennifer Lawrence"
        }
      ]
    };
  }
};
</script>

<style>
.starsHeader {
  padding: 1rem;
}

.starsCards {
  text-align: left;
  padding: 1rem;
}

.card-header {
  font-size: 2rem;
  color: #007bff;
}
</style>
