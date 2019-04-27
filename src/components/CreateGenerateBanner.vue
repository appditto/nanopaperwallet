<template>
  <div class="section mt-4">
    <div class="container-flex bg-footer py-5">
      <div class="container-my mx-auto">
        <div class="row d-flex justify-content-center align-items-center">
        <span class="h3 text-light">Design:</span>
        <select class="ml-2 mr-4 dropdown-header mb-2" id="design">
          <option value="a" selected="selected">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
        <span class="h3 text-light">Add</span>
        <select class="mx-2 dropdown-header mb-2" id="amount">
          <option value="1" selected="selected">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <span class="h3 text-light">more paper wallets</span>
      </div>
      <div class="row d-flex justify-content-center align-items-center mt-3">
        <div class="col-8 col-md-7 col-lg-6 d-flex justify-content-center">
          <button class="btn btn-lg btn-light btn-light-shadow text-primary w600 px-4 w-100">Generate</button>
        </div>
      </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center align-items-center mt-2">
      <img class="icon-2" src="../assets/img/arrow.svg">
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CreateGenerateBanner"
});
</script>