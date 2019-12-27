<template>
  <div class="section pt-5 py-lg-5 pl-hero">
    <div class="container-fluid mx-auto">
      <div class="row d-flex justify-content-center justify-content-lg-between align-middle px-0">
        <div class="col-12 col-lg-4 align-self-center d-none d-lg-block">
          <h1 class="w700 text-center text-lg-left mx-2 hmy1">
            Create
            <span class="text-primary">paper wallets</span>
            <br />for NANO with ease
          </h1>
          <router-link
            to="/create"
            tag="button"
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-5 my-3 mx-auto mx-lg-2"
          >Start Creating</router-link>
        </div>
        <div class="col-12 col-lg-8 pl-4 pl-md-5 pr-0">
          <img class="w-100 h-100" src="../assets/img/bg-hero.svg" />
        </div>
        <div class="col-12 col-lg-4 align-self-center mt-4 d-block d-lg-none">
          <div class="ml-herotext px-0">
            <h1 class="w700 text-center text-lg-left">
              Create
              <span class="text-primary">paper wallets</span>
              <br />for NANO with ease
            </h1>
            <div class="row d-flex justify-content-center">
              <router-link
                to="/create"
                tag="button"
                class="btn btn-lg btn-my btn-my-shadow text-light w600 px-5 mt-2"
              >Start Creating</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Hero"
});
</script>