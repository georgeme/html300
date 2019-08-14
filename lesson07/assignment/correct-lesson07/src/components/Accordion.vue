<template>
<div role="tablist">

  <div class="container d-flex align-items-center justify-content-center">
    <div class="triviaHeader my-auto">
      <h3 class="display-3">test your movie knowledge!</h3>
      <p class="lead">How much do you know about older or lesser known movies? Click each question below when you're ready to see the answer.</p>
      <img src="@/assets/fun-movie-stuff.png" class="img-fluid rounded-circle" alt="Image of film, 3D glasses, and movie snacks">
    </div>
  </div>

  <b-card no-body class="mb-1" v-for="item in accordionItems" :key="item.id">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button
      block href="#"
      v-b-toggle="item.id"
      variant="primary"> {{ item.button }}
      </b-button>
    </b-card-header>
    <b-collapse id="item.id" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ item.text }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>

  <div class="triviaHeader">
    <h3 class="display-3">how well did you do?</h3>
    <p class="lead">If you didn't do very well, you'd better watch the movies <a href="movies.html">HERE</a> and stat!</p>
  </div>

</div>
</template>

<script>
export default {
  name: "Accordion",
  data() {
    return {
      accordionItems: [
      {
        id: 'accordion-1',
        button: `Who played Burt and Heather Gummer in Tremors?`,
        text: `Answer: Burt: Michael Gross, Heather: Reba McEntire`
      }
    ],
  }
}
}
</script>

<style>
@media screen and (max-width: 1025px) {
  h3.display-3 {
    font-size: 1.5em;
    font-weight: 600;
  }
}
</style>
