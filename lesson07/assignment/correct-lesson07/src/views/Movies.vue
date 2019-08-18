<template>
  <div>
    <ImagesMovies />
  </div>
</template>

<!-- Importing the imagesmovies component for the movies page -->
<script>
import ImagesMovies from "@/components/ImagesMovies.vue";

export default {
  name: "movies",
  components: {
    ImagesMovies
  }
}
</script>
