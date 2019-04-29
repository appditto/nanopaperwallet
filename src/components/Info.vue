<template>
  <div class="overflow-x-hidden mh-100" id="create-section">
    <Navbar :showButton="true"></Navbar>
    <div class="section">
      <div class="container-my mx-auto py-5">
        <div class="row d-flex justify-content-center align-middle">
          <div class="col-12">
            <h2 class="w700 text-center text-primary">Instructions</h2>
            <h5
              class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
            >This guide will walk you through the process of redeeming your NANO from a paper wallet securely. Start by picking your device.</h5>
            <div class="row d-flex justify-content-center align-content-middle">
              <div class="col-12 col-md-6 mt-5 px-4">
                <h3 class="w700 text-center text-primary">iPhone</h3>
                <div class="row d-flex justify-content-center">
                  <img class="icon-phone" src="../assets/img/iphone.svg">
                </div>
                <div class="row d-flex justify-content-center mt-4">
                  <button class="btn btn-lg btn-my btn-my-shadow text-light w600 px-3 px-5">Show Me</button>
                </div>
              </div>
              <div class="col-12 col-md-6 mt-5 px-4">
                <h3 class="w700 text-center text-primary">Android</h3>
                <div class="row d-flex justify-content-center">
                  <img class="icon-phone" src="../assets/img/android.svg">
                </div>
                <div class="row d-flex justify-content-center mt-4">
                  <button class="btn btn-lg btn-my btn-my-shadow text-light w600 px-3 px-5">Show Me</button>
                </div>
              </div>
              <div id="iphoneInstructions">
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">STEP 1</h3>
                  <h5
                    class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                  >Download Natrium Wallet from AppStore.</h5>
                </div>
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">STEP 2</h3>
                  <h5 class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3">
                    Open up Natrium Wallet and create a wallet.
                    Be sure to backup your seed!
                  </h5>
                </div>
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">STEP 3</h3>
                  <h5
                    class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                  >On the main screen, tap the settings icon on the top left. Scroll down, then tap "Load from Paper Wallet". Follow the instructions in the menu and scan the QR code on your paper wallet.</h5>
                </div>
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">DONE!</h3>
                  <h5
                    class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                  >The NANO that was in the paper wallet is now transferred to your Natrium Wallet.</h5>
                </div>
              </div>
              <div id="androidInstructions">
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">STEP 1</h3>
                  <h5
                    class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                  >Download Natrium Wallet from Play Store.</h5>
                </div>
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">STEP 2</h3>
                  <h5 class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3">
                    Open up Natrium Wallet and create a wallet.
                    Be sure to backup your seed!
                  </h5>
                </div>
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">STEP 3</h3>
                  <h5
                    class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                  >On the main screen, tap the settings icon on the top left. Scroll down, then tap "Load from Paper Wallet". Follow the instructions in the menu and scan the QR code on your paper wallet.</h5>
                </div>
                <div class="col-12 mt-5 px-4">
                  <h3 class="w700 text-center text-primary">DONE!</h3>
                  <h5
                    class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                  >The NANO that was in the paper wallet is now transferred to your Natrium Wallet.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateGenerateAndPrint/>
    <Footer class="mt-5"></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Info",
  data() {
    return {
      iphoneIsOpen,
      androidIsOpen,
      iphone: true,
      android: true,
    };
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    openIphone(){
      iphoneIsOpen=true;
      android=false;
    },
    openAndroid(){
      adroidIsOpen=true;
      iphone=false;
    },
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>