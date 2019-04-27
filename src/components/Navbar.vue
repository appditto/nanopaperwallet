<template>
      <div class="container-my mx-auto">
        <div class="row d-flex justify-content-between align-items-center p-3">
          <a href="./">
            <img class="logo" src="../assets/img/logo.svg">
          </a>
          <button v-if = showButton
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-3 px-lg-5"
          >Download</button>
        </div>
      </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
      showButton: null,
    },
});
</script>