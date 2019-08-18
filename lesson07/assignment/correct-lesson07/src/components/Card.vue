<template>
<div class="container-fluid">

<!-- Creating the header for the Stars page cards -->
  <div>
    <div class="starsHeader my-auto">
      <h3 class="display-3">stars: they're just like us!</h3>
      <p class="lead">Find a movie to watch based on your favorite stars.</p>
      <img src="@/assets/his-girl-friday-grant-russell.jpg" class="img-fluid rounded-circle" alt="Image of His Girl Friday stars">
    </div>
  </div>

<!-- Cards for each star -->
  <div class="starsCards">
    <b-card class="mt-2" v-for="card in cards" :key="card.id" :header="card.name">

      <b-card-body>
        <b-card-title>Movies</b-card-title>
        <b-card-text>
          {{card.movies}}
        </b-card-text>
      </b-card-body>

      <b-card-body>
        <b-card-title>Short Bio</b-card-title>
        <b-card-text class="bio">
          {{card.bio}}
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</div>
</template>

<!-- Script to pull the data into the cards from an array - note: not all stars data has been ported over yet as it's a lot of data to do -->
<script>
export default {
  name: "Card",
  data() {
    return {
      cards: [{
          name: 'Kevin Bacon',
          movies: "The Big Picture, She's Having A Baby, Tremors",
          bio: "Kevin Norwood Bacon was born on July 8, 1958 in Philadelphia, Pennsylvania, to Ruth Hilda (Holmes), an elementary school teacher, and Edmund Norwood Bacon, a prominent architect who was on the cover of Time Magazine in November 1964. Kevin's early training as an actor came from The Manning Street. His debut as the strict Chip Diller in National Lampoon's Animal House (1978) almost seems like an inside joke, but he managed to escape almost unnoticed from that role. Diner (1982) became the turning point after a couple of television series and a number of less-than-memorable movie roles. In a cast of soon-to-be stars, he more than held his end up, and we saw a glimpse of the real lunatic image of The Bacon. He also starred in Footloose (1984), She's Having a Baby (1988), Tremors (1990) with Fred Ward, Flatliners (1990), and Apollo 13 (1995).",
          id: 0
        },
        {
          name: 'Cary Grant',
          movies: "The Bachelor and the Bobby-Soxer, The Bishop's Wife, His Girl Friday",
          bio: "Kevin Norwood Bacon was born on July 8, 1958 in Philadelphia, Pennsylvania, to Ruth Hilda (Holmes), an elementary school teacher, and Edmund Norwood Bacon, a prominent architect who was on the cover of Time Magazine in November 1964. Kevin's early training as an actor came from The Manning Street. His debut as the strict Chip Diller in National Lampoon's Animal House (1978) almost seems like an inside joke, but he managed to escape almost unnoticed from that role. Diner (1982) became the turning point after a couple of television series and a number of less-than-memorable movie roles. In a cast of soon-to-be stars, he more than held his end up, and we saw a glimpse of the real lunatic image of The Bacon. He also starred in Footloose (1984), She's Having a Baby (1988), Tremors (1990) with Fred Ward, Flatliners (1990), and Apollo 13 (1995).",
          id: 1
        },
        {

          name: 'Doris Day',
          movies: "Lover Come Back, Pillow Talk, Send Me No Flowers",
          bio: "Kevin Norwood Bacon was born on July 8, 1958 in Philadelphia, Pennsylvania, to Ruth Hilda (Holmes), an elementary school teacher, and Edmund Norwood Bacon, a prominent architect who was on the cover of Time Magazine in November 1964. Kevin's early training as an actor came from The Manning Street. His debut as the strict Chip Diller in National Lampoon's Animal House (1978) almost seems like an inside joke, but he managed to escape almost unnoticed from that role. Diner (1982) became the turning point after a couple of television series and a number of less-than-memorable movie roles. In a cast of soon-to-be stars, he more than held his end up, and we saw a glimpse of the real lunatic image of The Bacon. He also starred in Footloose (1984), She's Having a Baby (1988), Tremors (1990) with Fred Ward, Flatliners (1990), and Apollo 13 (1995).",
          id: 2
        }
      ]
    };
  }
};
</script>

<!-- Miscellaneous styling for the cards -->
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
