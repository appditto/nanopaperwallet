<template>
  <div class="section">
    <div class="container-my mx-auto py-5">
      <div class="row d-flex justify-content-center justify-content-lg-start align-middle">
        <div class="col-12">
          <h2 class="w700 text-center text-primary mt-5">What is a paper wallet?</h2>
          <div class="faq-card pt-4 pb-3 mt-3">
            <p
              class="w400 text-center text-light col-12 col-lg-11 mx-auto"
            >They are wallets that you can print and store your cryptocurrencies in, or gift to your friends & family (or a stranger 🙂). They hold a seed, which is like a password to access the funds, and an address that people can send funds to.</p>
          </div>
          <h2 class="w700 text-center text-primary mt-5">Why should I use them?</h2>
          <div class="faq-card pt-4 pb-3 mt-3">
            <p
              class="w400 text-center text-light col-12 col-lg-11 mx-auto"
            >It is a simple & convenient way of storing and gifting NANO, especially if you are trying to introduce NANO to people that have never used a cryptocurrency before.</p>
          </div>
          <h2 class="w700 text-center text-primary mt-5">Is this safe?</h2>
          <div class="faq-card pt-4 pb-3 mt-3">
            <p
              class="w400 text-center text-light col-12 col-lg-11 mx-auto break-word"
            >Yes it is. The seeds are created on your device locally and never transmitted to our servers. We still recommend you to download the generator and run it without an internet connection for additional security. If you want to use them to store your funds long term, we recommend installing a fresh copy of Linux, and using a “dumb” printer for maximum security. Also, it is open-source. So, you can check the code for yourself on: <a target="_blank" href="https://github.com/appditto/nanopaperwallet"><span class="w700">github.com/appditto/nanopaperwallet</span></a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Questions"
});
</script>