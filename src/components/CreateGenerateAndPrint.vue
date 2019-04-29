<template>
  <div>
    <div class="section mt-4">
      <div class="container-flex bg-footer py-5">
        <div class="container-my mx-auto">
          <div class="row d-flex justify-content-center align-items-center">
            <span class="h3 text-light">Design:</span>
            <select class="ml-2 mr-4 dropdown-header mb-2" id="design" v-model="design">
              <option value="A" selected="selected">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <span class="h3 text-light">Add</span>
            <select class="mx-2 dropdown-header mb-2" id="amount" v-model="numPaperWallets">
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
                @click="generateWallets"
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
                @click="printWallets"
              >Print Everything Below</button>
            </div>
          </div>
          <div class="col-11 paper mt-4 px-4 py-2 px-lg-5 py-lg-4 mb-5" id="printableContent">
            <div v-for="wallet in wallets" :key="wallet.address">
              <PaperWalletA v-if="wallet.design == 'A'" :address="wallet.address" :seed="wallet.seed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import PaperWalletA from "./PaperWalletA.vue"
import WalletGen from "../util/wallet_gen.ts"

export default Vue.extend({
  name: "CreateGenerateBanner",
  data() {
    return {
      numPaperWallets: 1,
      design: 'A',
      wallets: []
    }
  },
  methods: {
    generateWallets() {
      for (let i = 0; i < this.numPaperWallets; i++) {
        WalletGen.genWallet().then(wallet => {
          this.wallets.push(
            {
              address: wallet.address,
              seed: wallet.seed.toUpperCase(),
              design: this.design
            }
          )
        })
      }
    },
    printWallets() {
      this.$htmlToPaper('printableContent');
    }
  },
  components: {
    PaperWalletA
  }
});
</script>