<template>
  <div>
    <Accordion />
    <Radio />
  </div>
</template>

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
