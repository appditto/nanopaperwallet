<template>
      <div class="container-my mx-auto">
        <div class="row d-flex justify-content-between align-items-center p-3">
          <a href="./">
            <img src="../assets/img/logo.svg">
          </a>
          <div v-if = showButton
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-4 px-lg-5"
          >Download</div>
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