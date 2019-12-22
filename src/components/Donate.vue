<template>
  <div class="section pr-donate pt-lg-5 mt-lg-5">
    <simple-modal v-model="isShow">
      <template slot="body">
        <div class="row d-flex justify-content-center align-items-center pt-4 pb-5">
          <div class="col-10">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-12">
                <h4 class="text-center w700">
                  Scan to donate or
                  <br />tap on the QR to send directly
                </h4>
              </div>
              <div class="col-11 col-lg-5">
                <a
                  href="xrb:xrb_3k6yicqkp5i9hc97nt3gbytuyih8smp7wxgqjxdgmgdh8g3gt4fg7x9qwg3r?amount=1000000000000000000000000000000"
                >
                  <img class="w-100 grow mt-3" src="../assets/img/donate-qr.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="footer">
        <button>OK</button>
      </template>
    </simple-modal>
    <div class="py-5 mt-5 mt-lg-0">
      <div class="container-fluid mx-auto bg-donate py-5 my-5 pl-donate">
        <div class="row d-flex justify-content-center align-middle pl-hero mt-4">
          <div class="col-12 col-lg-3">
            <img class="cup-svg position-absolute margin-cup" src="../assets/img/cup.svg" />
          </div>
          <div class="col-12 col-lg-8 align-self-center px-0 px-lg-5 mt-5 mt-lg-0">
            <h3
              class="text-light w700 text-center text-lg-left mt-5 mt-lg-0"
            >You like what we're doing?</h3>
            <h5 class="text-light text-center text-lg-left">Buy us a cup of coffee with NANO :)</h5>
            <div class="row d-flex justify-content-center justify-content-lg-start">
              <button
                @click="isShow = !isShow"
                class="btn btn-lg btn-light btn-light-shadow text-primary w700 px-5 my-3 mx-3"
              >Donate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import SimpleModal from "simple-modal-vue";

export default Vue.extend({
  name: "Donate",
  components: { SimpleModal },
  data() {
    return { isShow: false };
  }
});
</script>