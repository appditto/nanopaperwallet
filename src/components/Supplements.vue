<template>
  <div class="section py-5">
    <div class="container-my mx-auto py-4">
      <div class="row d-flex justify-content-center justify-content-lg-start align-middle">
        <div class="col-12">
          <h2 class="w700 text-center text-primary">Paper Wallet Supplements</h2>
          <h5
            class="w400 text-center text-dark col-12 col-md-10 col-lg-8 mx-auto"
          >We provide some supplements to make the process easier and more secure for you.</h5>
          <div class="row d-flex justify-content-between align-middle">
            <div class="col-12 col-md-6 mt-5 px-4">
              <div class="card-header pt-3 pb-2">
                <h3 class="text-center text-light w600">Stickers</h3>
              </div>
              <div class="card-body px-4 py-4">
                <p>You can use these stickers to seal your paper wallets. So that people can see if they are tampered.</p>
                <img class="w-100 px-4" src="../assets/img/stickers.png">
                <button class="btn btn-lg btn-my btn-my-shadow text-light w600 w-100 mt-4">I Want One</button>
              </div>
            </div>
            <div class="col-12 col-md-6 mt-5 px-4">
              <div class="card-header pt-3 pb-2">
                <h3 class="text-center text-light w600">Linux USB</h3>
              </div>
              <div class="card-body px-4 py-4">
                <p>These usb sticks have a pre-installed, fresh copy of Linux. You can use them for maximum security, without the hassle of creating one yourself.</p>
                <img class="w-100 my-4 px-3" src="../assets/img/usb.svg">
                <button class="btn btn-lg btn-my btn-my-shadow text-light w600 w-100 mt-4">I Want One</button>
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
  name: "Supplements"
});
</script>