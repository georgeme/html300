<script>
import ImgBorder from '@/components/ImgBorder.vue';

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

<template>
<div>

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

<style>
.post {
  padding: 2rem;
}

.moviesHeader {
  padding: 1rem;
}
</style>
