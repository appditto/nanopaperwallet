<template>
  <div class="overflow-x-hidden" id="create-section">
      <Navbar :showButton=true></Navbar>
      <CreateHero/>
      <CreateGenerateBanner/>
      <CreateListAndPrint/>
      <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import CreateHero from "./CreateHero.vue";
import CreateGenerateBanner from "./CreateGenerateBanner.vue";
import CreateListAndPrint from "./CreateListAndPrint.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Create",
  components: {
    Navbar,
    CreateHero,
    CreateGenerateBanner,
    CreateListAndPrint,
    Footer
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>