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
          <h6 class="display-6 post__imgTitle">{{ post.imgTitle | myFilter }}</h6>
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
}

.moviesHeader {
  padding: 1rem;
}
</style>
