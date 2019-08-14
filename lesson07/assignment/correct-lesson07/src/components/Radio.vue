<template>
<div>

  <b-form-group label="How well did you do?">
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
      Choose one
    </div>
  </b-form-group>

  <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'choose',
      options: [{
          text: 'Choose One',
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

</style>
