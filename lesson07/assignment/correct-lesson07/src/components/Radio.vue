<template>
<div>
  <div class="triviaHeader">
    <h3 class="display-3">how well did you do?</h3>
    <p class="lead">These weren't easy so don't worry if you didn't do very well.</p>
  </div>

  <b-form-group class="howWell" >
    <b-form-radio-group v-model="selected" :options="options" name="radios-success" stacked></b-form-radio-group>
    <div v-if="selected === 'nailed'">
      Sweet! But you should rewatch the movies <a href="Movies.vue">HERE</a> to be sure you really, really know them!
    </div>
    <div v-else-if="selected === 'meh'">
      Watch the movies <a href="Movies.vue">HERE</a> to learn what you don't know!
    </div>
    <div v-else-if="selected === 'ugh'">
      Sounds like you'd better watch the movies <a href="Movies.vue">HERE</a> and stat!
    </div>
    <div v-else>
      Make your selection!
    </div>
  </b-form-group>

</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'choose',
      options: [
        {
          text: 'Choose the option that best describes how well you did!',
          value: 'choose'
        },
        {
          text: 'Nailed it!',
          value: 'nailed'
        },
        {
          text: 'Meh',
          value: 'meh'
        },
        {
          text: 'Ugh',
          value: 'ugh'
        }
      ]
    }
  }
}
</script>

<style>
  .howWell {
    padding: 1rem;
  }
</style>
