<template>
  <div>
    <Accordion />
    <Radio />
  </div>
</template>

<!-- Importing both the accordion and the radio components for the trivia page -->
<script>
import Accordion from "@/components/Accordion.vue";
import Radio from "@/components/Radio.vue";

export default {
  name: "trivia",
  components: {
    Accordion,
    Radio
  }
}
</script>
