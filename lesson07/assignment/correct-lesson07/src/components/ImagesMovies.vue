<template>
<div class="container-fluid">

  <div>
    <!-- Start Bootstrap grid for images-->
    <div class="moviesHeader">
      <h3 class="display-3">find your next favorite movie!</h3>
      <h5 class="display-5">There are some movies we all know...</h5>
    </div>
    <!-- Movies we know images -->
    <div>
    <b-container>
      <b-row>
        <b-col>1 of 3
        <b-img v-for="item in knowItems"
        fluid
        :key="item.id"
        :src="item.image"
        :alt="item.alt"
        >
        </b-img>
        </b-col>
      <b-row>
        </b-container>
      </div>
    </div>
    </div>
    <div class="moviesHeader">
      <h5 class="display-5">With some stars we all love...</h5>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-sm-6 col-12 p-3">
          <span class="d-inline-block" data-toggle="tooltip" data-placement="right" title="Tom Hanks">
            <img src="@/assets/hanks.jpg" class="img-fluid rounded-circle" alt="Image of Tom Hanks">
          </span>
        </div>
        <div class="col-xl-4 col-lg-4 col-sm-6 col-12 p-3">
          <span class="d-inline-block" data-toggle="tooltip" data-placement="right" title="Humphrey Bogart and Lauren Bacall">
            <img src="@/assets/bogart-bacall.jpg" class="img-fluid rounded-circle" alt="Image of Humphrey Bogart and Lauren Bacall">
          </span>
        </div>
        <div class="col-xl-4 col-lg-4 col-sm-6 col-12 p-3">
          <span class="d-inline-block" data-toggle="tooltip" data-placement="right" title="Jennifer Lawrence">
            <img src="@/assets/j-law.jpg" class="img-fluid rounded-circle" alt="Image of Jennifer Lawrence">
          </span>
        </div>
      </div>
    </div>
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
</div>
</template>

<script>
export default {
  data() {
    return {
      knowItems: [
        {
          id: 1,
          image: require('@/assets/007.jpg'),
          alt: 'Image of Daniel Craig as James Bond',
        },
        {
          id: 2,
          image: require('@/assets/ironman.png'),
          alt: 'Robert Downey Jr. as Iron Man',
        },
        {
          id: 3,
          image: require('@/assets/thor.jpg'),
          alt: 'Image of Thor',
        }
      ],
    }
  }
}
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
