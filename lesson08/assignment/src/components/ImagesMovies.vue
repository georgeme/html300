<template>
  <div class="container-fluid">
    <!-- <div>
Start Bootstrap grid for images
      <div class="moviesHeader">
        <h3 class="display-3">find your next favorite movie!</h3>
        <h5 class="display-5">There are some movies we all know...</h5>
      </div>
Movies we know images
      <div>
        <b-container>
          <b-row align-h="around">
            <b-col v-for="(item, index) in knowItems">
              <span v-b-tooltip.hover :title="item.alt">
                <b-img :key="item.id" :src="item.image" fluid rounded="circle" :alt="item.alt"></b-img>
              </span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="moviesHeader">
        <h5 class="display-5">With some stars we all love...</h5>
      </div>

Stars we love images
      <div>
        <b-container>
          <b-row align-h="around">
            <b-col v-for="(item, index) in loveItems">
              <span v-b-tooltip.hover :title="item.alt">
                <b-img :key="item.id" :src="item.image" fluid rounded="circle" :alt="item.alt"></b-img>
              </span>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div> -->

<!-- Lists of movies using array -->
    <div class="moviesHeader">
      <h5 class="display-5">And then there are movies we don't remember, never knew, or forgot...</h5>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Comedy</h5>
            <b-list-group>
              <b-list-group-item class="movieList" v-for="(item, index) in comedy">{{ item.movie }}</b-list-group-item>
            </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Romance</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in romance">{{ item.movie }}</b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Musical</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in musical">{{ item.movie }}</b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Drama or Thriller</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in dramaThriller">{{ item.movie }}</b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Script to display the images from two different arrays -->
<script>
export default {
  name: "ImagesMovies",
  data() {
    return {
      // knowItems: [
      //   {
      //     id: 1,
      //     image: require("@/assets/007.jpg"),
      //     alt: "Image of Daniel Craig as James Bond"
      //   },
      //   {
      //     id: 2,
      //     image: require("@/assets/ironman.png"),
      //     alt: "Robert Downey Jr. as Iron Man"
      //   },
      //   {
      //     id: 3,
      //     image: require("@/assets/thor.jpg"),
      //     alt: "Image of Thor"
      //   }
      // ],
      // loveItems: [
      //   {
      //     id: 4,
      //     image: require("@/assets/hanks.jpg"),
      //     alt: "Image of Tom Hanks"
      //   },
      //   {
      //     id: 5,
      //     image: require("@/assets/bogart-bacall.jpg"),
      //     alt: "Image of Humphrey Bogart and Lauren Bacall"
      //   },
      //   {
      //     id: 6,
      //     image: require("@/assets/j-law.jpg"),
      //     alt: "Image of Jennifer Lawrence"
      //   }
      // ],
      comedy: [
        {
          id: 7,
          movie: "The Bachelor and the Bobby Soxer"
        },
        {
          id: 8,
          movie: "The Big Picture"
        },
        {
          id: 9,
          movie: "Joe Versus the Volcano"
        },
        {
          id: 10,
          movie: "Lover Come Back"
        },
        {
          id: 11,
          movie: "My Favorite Wife"
        },
        {
          id: 12,
          movie: "Pillow Talk"
        },
        {
          id: 13,
          movie: "Send Me No Flowers"
        }
      ],
      romance: [
        {
          id: 14,
          movie: "The Bishop's Wife"
        },
        {
          id: 15,
          movie: "She's Having A Baby"
        }
      ],
      musical: [
        {
          id: 16,
          movie: "Strictly Ballroom"
        }
      ],
      dramaThriller: [
        {
          id: 17,
          movie: "His Girl Friday"
        },
        {
          id: 18,
          movie: "Shadow of a Doubt"
        },
        {
          id: 19,
          movie: "Tremors"
        }
      ],
    };
  }
};
</script>

<!-- Some simple styling to add color to card header and some padding -->
<style>
.display-5 {
  font-weight: 700;
}

.moviesHeader {
  padding: 1rem;
}

.movieList {
  color: #007bff;
  font-size: 1.5em;
}

@media screen and (max-width: 1025px) {
  .movieList {
    font-size: 1em;
  }
}
</style>
<!-- test -->
