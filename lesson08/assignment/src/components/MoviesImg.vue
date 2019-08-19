<script>
import Images from '@/components/Images.vue';

export default {
  name: 'MoviesImg',
  components: {
    Images
  },

  data () {
    return {
      posts: [
        { id: 1,
          image: require("@/assets/007.jpg"),
          alt: 'Image of Daniel Craig as James Bond',
          imgTitle: 'Daniel Craig as James Bond'
        },
        { id: 2,
          image: require("@/assets/ironman.png"),
          alt: "Robert Downey Jr. as Iron Man",
          imgTitle: 'Robert Downey Jr. as Iron Man'
        },
        { id: 3,
          image: require("@/assets/thor.jpg"),
          alt: "Image of Chris Hemsworth as Thor",
          imgTitle: 'Chris Hemsworth as Thor'
        },
        {
          id: 4,
          image: require("@/assets/hanks.jpg"),
          alt: "Image of Tom Hanks",
          imgTitle: 'Tom Hanks'
        },
        {
          id: 5,
          image: require("@/assets/bogart-bacall.jpg"),
          alt: "Image of Humphrey Bogart and Lauren Bacall",
          imgTitle: 'Humphrey Bogart and Lauren Bacall'
        },
        {
          id: 6,
          image: require("@/assets/j-law.jpg"),
          alt: "Image of Jennifer Lawrence",
          imgTitle: 'Jennifer Lawrence'
        }
      ]
    }
  }
}


</script>

<template>
  <div>
    <div>
      <div class="moviesHeader">
        <h3 class="display-3">find your next favorite movie!</h3>
        <h5 class="display-5">There are some movies we all know... with some stars we all love...</h5>
      </div>
    </div>
    <section class="d-flex flex-row" v-if="posts">

       <Images
        v-for="post in posts"
        v-bind:post="post"
        v-bind:key="post.id"
      >
    </Images>
    </section>
  </div>
</template>
