<template>
  <div class="col-12 mt-5 px-4" v-bind:class="{'col-md-6':type != 'Custom'} ">
    <div v-if="type == 'Custom'" class="row d-flex justify-content-center align-items-center mb-2">
      <h4 class="w600 text-center mr-2">Make Your Own:</h4>
      <input
        accept="image/png, image/jpeg, .svg"
        name="file"
        type="file"
        id="file"
        class="inputfile"
        @change="onFileSelected"
      />
      <label
        id="filelabel"
        for="file"
        class="btn btn-my btn-my-shadow text-light w600 px-3"
      >Choose a File</label>
    </div>
    <div class="row d-flex justify-content-lg-between align-items-center">
      <h4 v-if="type != 'Custom'" class="w600 ml-2">{{ type }})</h4>
      <div class="col">
        <img
          v-if="type != 'G' && type != 'Custom'"
          class="w-100"
          :src="require('../assets/img/paperwalletempty' + type + '.svg')"
          :alt="'Type ' + type"
        />
        <img
          v-else-if="type == 'G'"
          src="../assets/img/paperwalletinstructions.svg"
          alt="Instructions"
        />
        <div v-else-if="type == 'Custom'" class="w-100 custom-image-container">
          <img src="../assets/img/paperwalletinstructions.svg" alt="Custom Template" />
          <img
            v-if="this.$store.state.customImage"
            :src="this.$store.state.customImage"
            alt="Custom Image"
            class="custom-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PaperWalletType",
  props: {
    type: String
  },
  methods: {
    onFileSelected(event) {
      this.$store.state.customImage = URL.createObjectURL(
        event.target.files[0]
      );
      document.getElementById("filelabel").innerText = event.target.value
        .split("\\")
        .pop();
    }
  }
});
</script>