<template>
  <div>
    <notifications width="60%" position="top center" group="foo" />
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
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="Custom">Yours</option>
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
        <img class="icon-2" src="../assets/img/arrow.svg" />
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
          <div v-if="wallets.length>0" class="col-12">
            <div class="row d-flex justify-content-center">
              <button
                class="btn btn-lg btn-my btn-my-shadow text-light w600 px-4 px-lg-5 mt-3"
                @click="printWallets"
              >Print Everything Below</button>
            </div>
          </div>
          <div
            v-if="wallets.length>0"
            class="col-12 paper my-4 px-4 py-2 px-lg-5 py-lg-4"
            id="printableContent"
            ref="printableContent"
          >
            <div v-for="wallet in wallets" :key="wallet.address">
              <PaperWallet :design="wallet.design" :address="wallet.address" :seed="wallet.seed" />
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
import Notifications from "vue-notification";

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
  components: {
    PaperWallet
  },
  methods: {
    generateWallets() {
      for (let i = 0; i < this.numPaperWallets; i++) {
        if (this.design != "G") {
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
        } else {
          // Special instructions design
          this.wallets.push({
            address: null,
            seed: null,
            design: this.design
          });
        }
      }
      let title = this.numPaperWallets;
      if (this.numPaperWallets > 1 && this.design != "G") {
        title += " paper wallets have been generated!";
      } else if (this.design != "G") {
        title += " paper wallet has been generated!";
      } else if (this.numPaperWallets > 1) {
        title += " instruction cards have been generated!";
      } else {
        title += " instruction card has been generated!";
      }
      this.$notify({
        group: "foo",
        title: title
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
@media print {
    body { 
        -webkit-print-color-adjust: exact; 
      }
}
@page  
{ 
    /* this affects the margin in the printer settings */ 
    margin: 0.35in auto 0 auto;
}

.addressText {
    position: absolute;
    font-family: 'Overpass Mono', monospace;
    font-size: 5.5px;
    right: 0.22in;
    bottom: 0.525in;
    text-align: center;
    z-index: 3000;
}

.seedText {
    position: absolute;
    font-family: 'Overpass Mono', monospace;
    font-size: 5.5px;
    left: 1in;
    bottom: 1.275in;
    text-align: center;
    transform: rotate(90deg);
    z-index: 3000;
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
    color: #2677FF;
}
.addressTextColoredE {
    color: #2677FF;
}
.addressTextColoredF {
    color: #2677FF;
}
.addressTextColoredCustom {
    color: #FFFFFF;
}
.textWhite {
    color: #FFFFFF;
}

.wallet-container {
    width: 9.25in;
    height: 2.6in;
    position: relative;
    overflow: hidden;
}

.wallet-qr {
    position: absolute;
    width: 1.135in;
    height: 1.135in;
    background-color: white;
    top: 0.68in;
    left: 0.28in;
    z-index: 1000;
}

.address-qr {
    position: absolute;
    width: 1.135in;
    height: 1.135in;
    background-color: white;
    top: 0.68in;
    right: 0.24in;
    z-index: 1000;
}
.address-logo {
    width: 0.3986in;
    height: 0.3986in;
    position: absolute;
    top: 1.05in;
    left: 0.65in;
    z-index: 2000;
}
.address-logo-right {
    width: 0.3986in;
    height: 0.3986in;
    position: absolute;
    top: 1.05in;
    right: 0.58in;
    z-index: 2000;
}
.custom-image-container {
      position: relative;
      overflow: hidden;
      width: 9.25in;
      height: 2.5in;
}
.custom-image {
      position: absolute;
      z-index: -1000;
}

.align-to-top{
      top: 0;
      bottom: auto;
      margin-top: 0;
      margin-bottom: auto;
}

.align-to-bottom{
      bottom: 0;
      top: auto;
      margin-bottom: 0;
      margin-top: auto;
}

.align-to-center-vertical{
      bottom: 0;
      top: 0;
      margin-bottom: auto;
      margin-top: auto;
}

.align-to-left{
      left: 0;
      right: auto;
      margin-left: 0;
      margin-right: auto;
}

.align-to-right{
      right: 0;
      left: auto;
      margin-right: 0;
      margin-left: auto;
}

.align-to-center-horizontal{
      right: 0;
      left: 0;
      margin-right: auto;
      margin-left: auto;
}

.fit-to-width{
      width: 99.75%;
      height: auto;
}

.fit-to-height{
      height: 99.75%;
      width: auto;
}  
        `
      ]);
    }
  }
});
</script>