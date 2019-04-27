<template>
  <div>
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
              <button
                class="btn btn-lg btn-light btn-light-shadow text-primary w600 px-4 w-100"
              >Generate</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center mt-2">
        <img class="icon-2" src="../assets/img/arrow.svg">
      </div>
    </div>
    <div class="section">
      <div class="container-my mx-auto py-3">
        <div class="row d-flex justify-content-center align-middle">
          <div class="col-12">
            <h2 class="w700 text-center text-primary">List of Generated Wallets</h2>
          </div>
          <div class="col-12">
            <textarea class="w-100 text-primary h5 text-area" id="generatedwallets"></textarea>
          </div>
          <div class="col-12">
            <div class="row d-flex justify-content-center">
              <button
                class="btn btn-lg btn-my btn-my-shadow text-light w600 px-4 px-lg-5 mt-3"
              >Print Everything Below</button>
            </div>
          </div>
          <div class="col-11 paper mt-4 px-4 py-2 px-lg-5 py-lg-4 mb-5">
            <img class="w-100 my-4" src="../assets/img/paperwallet2.svg">
            <img class="w-100 my-4" src="../assets/img/paperwallet1.svg">
            <img class="w-100 my-4" src="../assets/img/paperwallet2.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CreateGenerateBanner"
});
</script>