<template>
  <div class="overflow-x-hidden" id="create-section">
    <Navbar :showButton="true"></Navbar>
    <div class="section">
      <div class="container-my mx-auto py-5">
        <div class="row d-flex justify-content-center align-middle">
          <div class="col-12">
            <h2 class="w700 text-center text-primary">Instructions</h2>
            <h5
              class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
            >This guide will walk you through the process of redeeming your NANO from a paper wallet securely. Start by picking your device.</h5>
            <div
              class="row d-flex justify-content-center justify-content-lg-between align-content-middle"
            >
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 w600">A)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwalletA.svg">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 w600">B)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwalletB.svg">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 w600">C)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwalletC.svg">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 w600">D)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwalletD.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateGenerateAndPrint/>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Create",
  components: {
    Navbar,
    Footer
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>