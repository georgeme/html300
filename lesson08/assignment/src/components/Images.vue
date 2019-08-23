<template>
<div>
<!-- Creating the article for the images, changing the text for the image title to uppercase, adding border on click to images -->
  <!-- <b-container fluid> -->
  <article class="post">
    <!-- <b-row align-h="around">
        <b-col> -->
    <h6 class="display-6 post__imgTitle">{{ post.imgTitle | uppercase }}</h6>
    <span v-b-tooltip.hover :title="post.imgTitle">
      <b-img id="imageBorder" :src="post.image" @click="clicked(this)" fluid rounded="circle" :alt="post.alt"></b-img>
    </span>
    <!-- </b-col>
      </b-row> -->
  </article>
  <!-- </b-container> -->

</div>
</template>

<script>
import ImgBorder from '@/components/mixins/ImgBorder.vue';

export default {
  name: 'Images',
  props: ['post'],
  mixins: [ImgBorder],

  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },


}
</script>

<style>
.post {
  padding: 2rem;
}

.moviesHeader {
  padding: 1rem;
}
</style>
