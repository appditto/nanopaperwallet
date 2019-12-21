<template>
  <div class="overflow-x-hidden" id="home-section">
    <Navbar :showRedeemButton="true" />
    <BodySection />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import BodySection from "./BodySection.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    BodySection,
    Navbar,
    Footer
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>