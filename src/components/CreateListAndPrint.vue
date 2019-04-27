<template>
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
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CreateListAndPrint"
});
</script>