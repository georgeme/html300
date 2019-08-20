<script>
import Images from '@/components/Images.vue';
import SlotsHeader from '@/components/SlotsHeader.vue';

export default {
  name: 'MoviesImg',
  components: {
    Images,
    SlotsHeader
  },

// Prop validation for id and alt text
  Images: {
    id: {
      type: Number,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },

// Image data
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
<!-- Header for the page -->
    <div>
      <div class="moviesHeader">
      <slots-header>
        <h3 class="display-3" slot="header">find your next favorite movie!</h3>
        <h5 class="display-5" slot="subHeader">There are some movies we all know... with some stars we all love...</h5>
      </slots-header>
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
