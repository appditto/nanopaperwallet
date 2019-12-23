<template>
  <div class="col-12 mt-5 px-4" v-bind:class="{'col-md-6':type != 'Custom'} ">
    <div v-if="type == 'Custom'" class="row d-flex justify-content-center align-items-center mb-3">
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
        <div v-else-if="type == 'Custom'">
          <div class="col">
            <div class="w-100 custom-image-container">
              <img
                v-if="this.$store.state.customImage"
                :src="this.$store.state.customImage"
                alt="Custom Image"
                class="custom-image"
                v-bind:class="{  'align-to-top':alignToTop, 'align-to-bottom': alignToBottom,  'align-to-center-vertical':alignToCenterVertical}"
              />
              <img src="../assets/img/paperwalletemptyFg.svg" alt="Foreground" class="w-100" />
            </div>
            <div class="row d-flex justify-content-center align-items center mt-4">
              <button class="btn btn-my p-1 m-1" v-bind:class="{'op-50':!alignToTop} ">
                <img
                  src="../assets/img/custom-paperwallet/icon-align-to-top.svg"
                  alt="Align to Top"
                  class="icon-small m-2"
                  @click="alignToTopFunction()"
                />
              </button>
              <button class="btn btn-my p-1 m-1" v-bind:class="{'op-50':!alignToCenterVertical}">
                <img
                  src="../assets/img/custom-paperwallet/icon-align-to-center-horizontal.svg"
                  alt="Align to Center Horizontal"
                  class="icon-small m-2"
                  @click="alignToCenterVerticalFunction()"
                />
              </button>
              <button class="btn btn-my p-1 m-1" v-bind:class="{'op-50':!alignToBottom}">
                <img
                  src="../assets/img/custom-paperwallet/icon-align-to-bottom.svg"
                  alt="Align to Bottom"
                  class="icon-small m-2"
                  @click="alignToBottomFunction()"
                />
              </button>
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
  name: "PaperWalletType",
  props: {
    type: String
  },
  data() {
    return {
      alignToTop: false,
      alignToBottom: false,
      alignToCenterVertical: true
    };
  },
  methods: {
    onFileSelected(event) {
      this.$store.state.customImage = URL.createObjectURL(
        event.target.files[0]
      );
      document.getElementById("filelabel").innerText = event.target.value
        .split("\\")
        .pop();
    },
    alignToTopFunction() {
      this.alignToBottom = false;
      this.alignToCenterVertical = false;
      this.alignToTop = true;
    },
    alignToBottomFunction() {
      this.alignToTop = false;
      this.alignToCenterVertical = false;
      this.alignToBottom = true;
    },
    alignToCenterVerticalFunction() {
      this.alignToBottom = false;
      this.alignToTop = false;
      this.alignToCenterVertical = true;
    }
  }
});
</script>