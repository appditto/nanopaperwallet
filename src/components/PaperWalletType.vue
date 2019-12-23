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
                v-bind:class="{  'align-to-top':alignToTop, 'align-to-bottom': alignToBottom,  'align-to-center-vertical':alignToCenterVertical, 'fit-to-width':fitToWidth, 'fit-to-height':fitToHeight, 'align-to-left':alignToLeft, 'align-to-right': alignToRight,  'align-to-center-horizontal':alignToCenterHorizontal,}"
              />
              <img src="../assets/img/paperwalletemptyFg.svg" alt="Foreground" class="w-100" />
            </div>
            <div class="row d-flex justify-content-center align-items center mt-4">
              <!-- Fit to Width or Height -->
              <div class="gradient-my-50 rounded-1 mx-2">
                <button
                  v-on:click="fitToWidthFunction"
                  class="btn p-1 rounded-1-left"
                  v-bind:class="fitToWidth?['btn-my']:''"
                >
                  <img
                    src="../assets/img/custom-paperwallet/icon-fit-to-width.svg"
                    alt="Fit to Width"
                    class="icon-small m-2"
                  />
                </button>
                <button
                  v-on:click="fitToHeightFunction"
                  class="btn p-1 rounded-1-right"
                  v-bind:class="fitToHeight?['btn-my']:''"
                >
                  <img
                    src="../assets/img/custom-paperwallet/icon-fit-to-height.svg"
                    alt="Fit to Height"
                    class="icon-small m-2"
                  />
                </button>
              </div>
              <!-- Align to Top, Bottom, V-Center or Left, Right, H-Center -->
              <div class="gradient-my-50 rounded-1 mx-2">
                <button
                  v-on:click="fitToWidth?alignToTopFunction():alignToLeftFunction()"
                  class="btn p-1 rounded-1-left"
                  v-bind:class="fitToWidth&&alignToTop||fitToHeight&&alignToLeft?['btn-my']:''"
                >
                  <img
                    :src="require('../assets/img/custom-paperwallet/icon-' + (fitToWidth ? 'align-to-top.svg':'align-to-left.svg'))"
                    alt="Align to Top"
                    class="icon-small m-2"
                  />
                </button>
                <button
                  v-on:click="fitToWidth?alignToCenterVerticalFunction():alignToCenterHorizontalFunction()"
                  class="btn p-1 rounded-0"
                  v-bind:class="fitToWidth&&alignToCenterVertical||fitToHeight&&alignToCenterHorizontal?['btn-my']:''"
                >
                  <img
                    :src="require('../assets/img/custom-paperwallet/icon-' + (fitToWidth ? 'align-to-center-horizontal.svg':'align-to-center-vertical.svg'))"
                    alt="Align to Center Horizontal"
                    class="icon-small m-2"
                  />
                </button>
                <button
                  v-on:click="fitToWidth?alignToBottomFunction():alignToRightFunction()"
                  class="btn p-1 rounded-1-right"
                  v-bind:class="fitToWidth&&alignToBottom||fitToHeight&&alignToRight?['btn-my']:''"
                >
                  <img
                    :src="require('../assets/img/custom-paperwallet/icon-' + (fitToWidth ? 'align-to-bottom.svg':'align-to-right.svg'))"
                    alt="Align to Bottom"
                    class="icon-small m-2"
                  />
                </button>
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
  name: "PaperWalletType",
  props: {
    type: String
  },
  data() {
    return {
      fitToWidth: true,
      fitToHeight: false,
      alignToTop: false,
      alignToBottom: false,
      alignToCenterVertical: true,
      alignToLeft: false,
      alignToRight: false,
      alignToCenterHorizontal: true
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
    fitToWidthFunction() {
      this.fitToHeight = false;
      this.fitToWidth = true;
      this.alignToCenterVerticalFunction();
    },
    fitToHeightFunction() {
      this.fitToWidth = false;
      this.fitToHeight = true;
      this.alignToCenterHorizontalFunction();
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
    },
    alignToLeftFunction() {
      this.alignToRight = false;
      this.alignToCenterHorizontal = false;
      this.alignToLeft = true;
    },
    alignToRightFunction() {
      this.alignToLeft = false;
      this.alignToCenterHorizontal = false;
      this.alignToRight = true;
    },
    alignToCenterHorizontalFunction() {
      this.alignToLeft = false;
      this.alignToRight = false;
      this.alignToCenterHorizontal = true;
    }
  }
});
</script>