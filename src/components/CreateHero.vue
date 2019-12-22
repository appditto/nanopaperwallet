<template>
  <div>
    <div class="section">
      <div class="container-my mx-auto py-5">
        <div class="row d-flex justify-content-center align-middle">
          <div class="col-12">
            <h2 class="w700 text-center text-primary">Paper Wallet Generator</h2>
            <h5 class="w400 text-left text-dark col-12 col-md-10 col-lg-9 mx-auto mt-3">
              Choose a design below and click “Generate”. Print the page, and
              load the account with funds. The recipient can securely sweep the
              wallet.
            </h5>
            <h5 class="w700 text-left text-primary col-12 col-md-10 col-lg-9 mx-auto">
              CAUTION: The paper wallets are not encrypted, so make sure to keep
              them safe and away from strangers.
            </h5>
            <div class="row d-flex justify-content-center align-content-middle">
              <PaperWalletType type="A" />
              <PaperWalletType type="B" />
              <PaperWalletType type="C" />
              <PaperWalletType type="D" />
              <PaperWalletType type="E" />
              <PaperWalletType type="F" />
              <PaperWalletType type="G" />
              <PaperWalletType type="Custom" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PaperWalletType from "./PaperWalletType.vue";
export default Vue.extend({
  name: "CreateHero",
  components: {
    PaperWalletType
  }
});
</script>