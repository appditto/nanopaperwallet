<template>
  <div>
    <div class="section">
      <div class="container-my mx-auto py-5">
        <div class="row d-flex justify-content-center align-middle">
          <div class="col-12">
            <h2 class="w700 text-center text-primary">Paper Wallet Generator</h2>
            <h5
              class="w400 text-left text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
            >Choose a design below and click “Generate”. Print the page, and load the account with funds. The recipient can securely sweep the wallet.</h5>
            <h5
              class="w700 text-left text-primary col-12 col-md-10 col-lg-9 mx-auto"
            >CAUTION: The paper wallets are not encrypted, so make sure to keep them safe and away from strangers.</h5>
            <div
              class="row d-flex justify-content-center justify-content-lg-between align-content-middle"
            >
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 text-primary w700">A)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwallet1.svg">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 text-primary w700">B)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwallet2.svg">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 text-primary w700">C)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwallet1.svg">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <div class="row d-flex justify-content-lg-between align-items-center">
                  <div class="col-1 mx-1">
                    <span class="h3 text-primary w700">D)</span>
                  </div>
                  <div class="col">
                    <img class="w-100" src="../assets/img/paperwallet2.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section mt-4">
      <div class="container-flex bg-footer py-5">
        <div class="row d-flex justify-content-center align-items-center">
          <span class="h2 text-light">Design:</span>
          <select class="ml-2 mr-4 dropdown-header" id="design">
            <option value="a" selected="selected">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
          </select>
          <span class="h2 text-light">Add</span>
          <select class="mx-2 dropdown-header" id="amount">
            <option value="1" selected="selected">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
          <span class="h2 text-light">more paper wallets</span>
          <div class="btn btn-lg btn-light btn-light-shadow text-primary w600 px-4 ml-4">Generate</div>
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
            <div class="row d-flex justify-content-center"><div
            class="btn btn-lg btn-my btn-my-shadow text-light w600 px-4 px-lg-5 mt-3"
          >Print Everything Below</div></div>
          </div>
          <div class="col-11 paper mt-4 px-5 py-4 mb-5">
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
  name: "CreateHero"
});
</script>