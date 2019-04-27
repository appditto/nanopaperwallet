<template>
  <div class="section pt-5">
    <div class="container-my mx-auto py-4">
      <div class="row d-flex justify-content-center justify-content-lg-start align-middle">
        <div class="col-12">
          <h2 class="w700 text-center text-primary">Before You Start...</h2>
          <h5
            class="w400 text-center text-dark col-12 col-md-10 col-lg-8 mx-auto"
          >You might already be familiar with the process, but if you are not, it’s better to check the suggestions below before you start.</h5>
          <div class="row d-flex justify-content-between align-middle">
            <div class="divider my-4 mx-auto"></div>
            <div class="col-12 col-md-6 my-4 px-4 px-md-5">
              <div class="row d-flex justify-content-center justify-content-md-start px-3">
                <img class="icon" src="../assets/img/wifi.svg">
              </div>
              <h3 class="w700 text-center text-md-left text-primary mt-2">Go Offline</h3>
              <p
                class="text-center text-md-left"
              >Although our website is SSL-encrypted, it's still better if you download the wallet generator and run it on your computer locally, without any internet connection.</p>
            </div>
            <div class="col-12 col-md-6 my-4 px-4 px-md-5">
              <div class="row d-flex justify-content-center justify-content-md-end px-3">
                <img class="icon" src="../assets/img/printer.svg">
              </div>
              <h3 class="w700 text-center text-md-right text-primary mt-2">Use a Dumb Printer</h3>
              <p
                class="text-center text-md-right"
              >"Smart" printers are connected to the internet. This is not good because it makes it easier for hackers to access your printer. This issue does not exist with “dumb” printers.</p>
            </div>
            <div class="col-12 col-md-6 my-4 px-4 px-md-5">
              <div class="row d-flex justify-content-center justify-content-md-start px-3">
                <img class="icon" src="../assets/img/wallet.svg">
              </div>
              <h3 class="w700 text-center text-md-left text-primary mt-2">Withdrawing the Funds</h3>
              <p
                class="text-center text-md-left"
              >If you are gifting the paper wallets, the person that is receiving the gift should NEVER use it to store funds. Suggest them to sweep the funds as soon as possible.</p>
            </div>
            <div class="col-12 col-md-6 my-4 px-4 px-md-5">
              <div class="row d-flex justify-content-center justify-content-md-end px-3">
                <img class="icon" src="../assets/img/linux.svg">
              </div>
              <h3 class="w700 text-center text-md-right text-primary mt-2">Use a Clean OS</h3>
              <p
                class="text-center text-md-right"
              >If you feel like your computer is not secure enough, consider installing a fresh copy of Linux before you start. This is not a requirement but it is recommended.</p>
            </div>
            <div class="divider mt-4 mb-2 mx-auto"></div>
            <div class="col-12">
              <div class="row d-flex justify-content-center">
                <img class="icon-2" src="../assets/img/arrow.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Tips"
});
</script>