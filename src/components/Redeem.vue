<template>
  <div class="overflow-x-hidden mh-100" id="create-section">
    <Navbar :showGoBackButton="true"></Navbar>
    <div class="section">
      <div class="container-my mx-auto py-5">
        <div class="row d-flex justify-content-center align-middle">
          <div class="col-12">
            <h2 class="w700 text-center text-primary">Instructions</h2>
            <h5
              class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
            >This guide will walk you through the process of redeeming your NANO from a paper wallet securely. Start by picking your device.</h5>
            <div class="row d-flex justify-content-center align-content-middle">
              <div v-if="iphone" class="col-6 col-md-6 mt-5 px-4">
                <h3 class="w700 text-center text-primary">iPhone</h3>
                <div class="row d-flex justify-content-center">
                  <img class="icon-phone" src="../assets/img/iphone.svg">
                </div>
                <div class="row d-flex justify-content-center mt-4">
                  <button
                    v-bind:class="[iphoneIsOpen ? ['btn-my-outline', 'text-primary'] : ['btn-my', 'text-light']]"
                    @click="openIphone()"
                    class="btn btn-lg btn-my-shadow w600 px-3 px-4 px-lg-5"
                  >{{ iphoneButtonText }}</button>
                </div>
              </div>
              <div v-if="android" class="col-6 col-md-6 mt-5 px-4">
                <h3 class="w700 text-center text-primary">Android</h3>
                <div class="row d-flex justify-content-center">
                  <img class="icon-phone" src="../assets/img/android.svg">
                </div>
                <div class="row d-flex justify-content-center mt-4">
                  <button
                    v-bind:class="[androidIsOpen ? ['btn-my-outline', 'text-primary'] : ['btn-my', 'text-light']]"
                    @click="openAndroid()"
                    class="btn btn-lg btn-my-shadow w600 px-3 px-4 px-lg-5"
                  >{{ androidButtonText }}</button>
                </div>
              </div>
              <transition name="fade">
                <div v-if="iphoneIsOpen" id="iphoneInstructions">
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">STEP 1</h3>
                    <h5
                      class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                    >Download Natrium Wallet from AppStore.</h5>
                    <div class="row d-flex justify-content-center mt-3">
                      <a target="_blank" href="https://itunes.apple.com/us/app/natrium/id1451425707?ls=1&mt=8"><button class="btn btn-lg btn-my btn-my-shadow text-light w600 px-5">Download</button></a>
                    </div>
                  </div>
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">STEP 2</h3>
                    <h5 class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3">
                      Open up Natrium and create a wallet.<br>
                      Be sure to backup your seed!
                    </h5>
                    <div class="row d-flex justify-content-center"><div class="col-7 col-md-4 col-lg-3 mt-4"><img class="w-100" src="../assets/img/natrium-1.png"></div></div>
                  </div>
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">STEP 3</h3>
                    <h5
                      class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                    >On the main screen, tap the settings icon on the top left. Scroll down, then tap "Load from Paper Wallet". Follow the instructions in the menu and scan the QR code on your paper wallet.</h5>
                    <div class="row d-flex justify-content-center">
                      <div class="col-7 col-md-4 col-lg-3 mt-4">
                        <img class="w-100" src="../assets/img/natrium-2.png">
                      </div>
                      <div class="col-7 col-md-4 col-lg-3 mt-4">
                        <img class="w-100" src="../assets/img/natrium-3.png">
                      </div>
                      <div class="col-7 col-md-4 col-lg-3 mt-4">
                        <img class="w-100" src="../assets/img/natrium-4.png">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">DONE!</h3>
                    <h5
                      class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                    >The NANO that was in the paper wallet is now transferred to your Natrium Wallet.</h5>
                  </div>
                </div>
              </transition>
              <transition name="fade">
                <div v-if="androidIsOpen" id="androidInstructions">
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">STEP 1</h3>
                    <h5
                      class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                    >Download Natrium Wallet from Play Store.</h5>
                    <div class="row d-flex justify-content-center mt-3">
                      <a target="_blank" href="https://play.google.com/store/apps/details?id=co.banano.natriumwallet"><button class="btn btn-lg btn-my btn-my-shadow text-light w600 px-5">Download</button></a>
                    </div>
                  </div>
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">STEP 2</h3>
                    <h5 class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3">
                      Open up Natrium and create a wallet.
                      Be sure to backup your seed!
                    </h5>
                    <div class="row d-flex justify-content-center"><div class="col-7 col-md-4 col-lg-3 mt-4"><img class="w-100" src="../assets/img/natrium-1.png"></div></div>
                  </div>
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">STEP 3</h3>
                    <h5
                      class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                    >On the main screen, tap the settings icon on the top left. Scroll down, then tap "Load from Paper Wallet". Follow the instructions in the menu and scan the QR code on your paper wallet.</h5>
                    <div class="row d-flex justify-content-center">
                      <div class="col-7 col-md-4 col-lg-3 mt-4">
                        <img class="w-100" src="../assets/img/natrium-2.png">
                      </div>
                      <div class="col-7 col-md-4 col-lg-3 mt-4">
                        <img class="w-100" src="../assets/img/natrium-3.png">
                      </div>
                      <div class="col-7 col-md-4 col-lg-3 mt-4">
                        <img class="w-100" src="../assets/img/natrium-4.png">
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mt-5 px-4">
                    <h3 class="w700 text-center text-primary">DONE!</h3>
                    <h5
                      class="w400 text-center text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3"
                    >The NANO that was in the paper wallet is now transferred to your Natrium Wallet.</h5>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CreateGenerateAndPrint/>
    <Footer v-if="androidIsOpen || iphoneIsOpen" class="mt-5"></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Redeem",
  data() {
    return {
      iphoneIsOpen: false,
      androidIsOpen: false,
      android: true,
      iphone: true,
      androidButtonText: "Show Me",
      iphoneButtonText: "Show Me"
    };
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    openIphone() {
      this.iphoneIsOpen = !this.iphoneIsOpen;
      this.android = !this.android;
      if (this.iphoneIsOpen == true) {
        this.iphoneButtonText = "Close";
      } else this.iphoneButtonText = "Show Me";
    },
    openAndroid() {
      this.androidIsOpen = !this.androidIsOpen;
      this.iphone = !this.iphone;
      if (this.androidIsOpen == true) {
        this.androidButtonText = "Close";
      } else this.androidButtonText = "Show Me";
    }
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>