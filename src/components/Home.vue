<template>
  <div class="overflow-x-hidden" id="home-section">
      <Navbar/>
      <BodySection/>
  </div>
</template>

<script>
import Vue from "vue";
import BodySection from "./BodySection.vue";
import Navbar from "./Navbar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    BodySection,
    Navbar,
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>