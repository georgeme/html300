<script>
export default {
  name: 'Images',
  props: ['post'],
}
</script>

<template>

<div>

  <!-- <b-container fluid> -->
    <article class="post">

      <!-- <b-row align-h="around">
        <b-col> -->
          <h6 class="display-6 post__imgTitle">{{ post.imgTitle }}</h6>
          <b-img :src="post.image" fluid rounded="circle" :alt="post.alt"></b-img>
        <!-- </b-col>
      </b-row> -->

    </article>
  <!-- </b-container> -->

</div>
</template>

<style>
.post {

  padding: 2rem;
  /* margin: 1.5rem auto;
  max-width: 900px;
  border: 1px solid #2c3e50; */
}

.moviesHeader {
  padding: 1rem;
}
</style>
