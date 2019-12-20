<template>
  <div class="col-12 col-md-6 mt-5 px-4">
    <div class="row d-flex justify-content-lg-between align-items-center">
      <h4 class="w600 ml-2">{{ type }})</h4>
      <div class="col">
        <img
          v-if="type != 'G' && type != 'H'"
          class="w-100"
          :src="require('../assets/img/paperwalletempty' + type + '.svg')"
          :alt="'Type ' + type"
        />
        <img
          v-else-if="type == 'G'"
          src="../assets/img/paperwalletinstructions.svg"
          alt="Instructions"
        />
        <img
          v-else-if="type == 'H'"
          src="../assets/img/paperwalletinstructions.svg"
          alt="Custom"
        />
      </div>
    </div></div
></template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PaperWalletType",
  props: {
    type: String
  }
});
</script>