<template>
  <div>
    <notifications width='60%' position="top center" group="foo"/>
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
            <textarea
              v-model="generatedWalletList"
              class="w-100 text-dark h6 text-area p-3 font-secondary w600"
              id="generatedwallets"
              readonly
            ></textarea>
          </div>
          <div class="col-12">
            <div class="row d-flex justify-content-center">
              <button
                class="btn btn-lg btn-my btn-my-shadow text-light w600 px-4 px-lg-5 mt-3"
                @click="printWallets"
              >Print Everything Below</button>
            </div>
          </div>
          <div
            class="col-12 paper mt-4 px-4 py-2 px-lg-5 py-lg-4 mb-5"
            id="printableContent"
            ref="printableContent"
          >
            <div v-for="wallet in wallets" :key="wallet.address">
              <PaperWallet :design="wallet.design" :address="wallet.address" :seed="wallet.seed"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PaperWallet from "./PaperWallet.vue";
import WalletGen from "../util/wallet_gen.ts";
import { Printd } from "printd";
import Notifications from 'vue-notification'

var printer = new Printd();
Vue.use(Notifications);
export default Vue.extend({
  name: "CreateGenerateBanner",
  data() {
    return {
      numPaperWallets: 1,
      design: "A",
      wallets: [],
      generatedWalletList: ""
    };
  },
  methods: {
    generateWallets() {
      for (let i = 0; i < this.numPaperWallets; i++) {
        WalletGen.genWallet().then(wallet => {
          this.wallets.push({
            address: wallet.address,
            seed: wallet.seed.toUpperCase(),
            design: this.design
          });
          if (this.generatedWalletList.length > 0) {
            this.generatedWalletList += "\n";
          }
          this.generatedWalletList += wallet.address;
        });
      }
      this.$notify({
        group: "foo",
        title: this.numPaperWallets + " paper wallets have been generated!",
      });
    },
    printWallets() {
      let nativeElement = document.getElementById("nanopaperwallet-data");
      let overpassMonoPath = nativeElement.getAttribute("data-overpass-mono");
      printer.print(this.$refs.printableContent, [
        `
@font-face {
  font-family: "Overpass Mono";
  src: url("${overpassMonoPath}") format("truetype"); /* Safari, Android, iOS */
  font-weight: 700;
  font-style: normal;
}

@media print{@page {size: landscape}}

@page  
{ 
    size: auto;   /* auto is the initial value */ 

    /* this affects the margin in the printer settings */ 
    margin: 0.35in auto 0 auto;
}

@media print {
    .footer,
    #non-printable {
        display: none !important;
    }
    #printable {
        display: block;
    }
}

.addressText {
    position: absolute;
    font-family: 'Overpass Mono', monospace;
    font-size: 5.7px;
    right: 0.205in;
    bottom: 0.5in;
    text-align: center;
}

.seedText {
    position: absolute;
    font-family: 'Overpass Mono', monospace;
    font-size: 5.7px;
    left: 1.02in;
    bottom: 1.25in;
    text-align: center;
    transform: rotate(90deg);
}

.addressTextColoredA {
    color: #2677FF;
}

.addressTextColoredB {
    color: #FF6C08;
}

.addressTextColoredC {
    color: #02B799;
}

.addressTextColoredD {
    color: #000000;
}

.wallet-container {
    width: 9.25in;
    height: 2.6in;
    position: relative;
}

.wallet-qr {
    position: absolute;
    width: 1.135in;
    height: 1.135in;
    background-color: red;
    top: 0.68in;
    left: 0.28in;
}

.address-qr {
    position: absolute;
    width: 1.135in;
    height: 1.135in;
    background-color: red;
    top: 0.68in;
    right: 0.24in;
}
.address-logo {
    width: 0.3986in;
    height: 0.3986in;
    position: absolute;
    top: 1.05in;
    left: 0.65in
}
.address-logo-right {
    width: 0.3986in;
    height: 0.3986in;
    position: absolute;
    top: 1.05in;
    right: 0.58in
}        
        `
      ]);
    }
  },
  components: {
    PaperWallet
  }
});
</script>