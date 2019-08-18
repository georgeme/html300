<template>
  <div>
    <ImagesMovies />
    <Footer />
  </div>
</template>

<!-- Importing the imagesmovies and footer components for the movies page -->
<script>
import ImagesMovies from "@/components/ImagesMovies.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "movies",
  components: {
    ImagesMovies,
    Footer
  }
}
</script>
