<template>
      <div class="container-my mx-auto">
        <div class="row d-flex justify-content-between align-items-center p-3">
          
          <router-link to="/">
            <img class="logo grow" src="../assets/img/logo.svg">
          </router-link>
          <button v-if = "showDownloadButton"
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-3 px-lg-5"
          >Download</button>
          <router-link v-if="showRedeemButton" to="/redeem" tag="button"
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-3 px-lg-5"
          >Redeem</router-link>
          <router-link v-if="showGoBackButton" to="/" tag="button"
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-3 px-lg-5"
          >Go Back</router-link>
        </div>
      </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
      showDownloadButton: null,
      showRedeemButton: null,
      showGoBackButton: null,
    },
});
</script>