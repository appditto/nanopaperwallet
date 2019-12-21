<template>
  <div>
    <Hero />
    <Questions />
    <Designs />
    <Tips />
    <StartCreating />
    <Donate />
  </div>
</template>

<script>
import Vue from "vue";
import Hero from "./Hero.vue";
import Questions from "./Questions.vue";
import Designs from "./Designs.vue";
import Supplements from "./Supplements.vue";
import Tips from "./Tips.vue";
import StartCreating from "./StartCreating.vue";
import Donate from "./Donate.vue";

export default Vue.extend({
  name: "BodySection",
  components: {
    Hero,
    Questions,
    Designs,
    Supplements,
    Tips,
    StartCreating,
    Donate
  }
});
</script>