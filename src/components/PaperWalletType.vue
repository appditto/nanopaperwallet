<template>
  <div
    class="col-12 mt-5"
    v-bind:class="type != 'Custom'?'col-md-6 px-4':'make-your-own-section py-4'"
  >
    <div v-if="type == 'Custom'" class="row d-flex justify-content-center align-items-center mb-4">
      <h4 class="w600 text-center mx-1">Or make a custom design:</h4>
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
        class="btn btn-my btn-my-shadow text-light w600 px-3 mx-1"
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
                v-bind:class="{  'align-to-top':this.$store.state.alignToTop, 'align-to-bottom': this.$store.state.alignToBottom,  'align-to-center-vertical':this.$store.state.alignToCenterVertical, 'fit-to-width':this.$store.state.fitToWidth, 'fit-to-height':this.$store.state.fitToHeight, 'align-to-left':this.$store.state.alignToLeft, 'align-to-right': this.$store.state.alignToRight,  'align-to-center-horizontal':this.$store.state.alignToCenterHorizontal}"
              />
              <img
                :src="require('../assets/img/custom-paperwallet/paperwalletemptyFg' + this.$store.state.fgColor + '.svg')"
                alt="Custom Paperwallet Foreground"
                class="w-100"
              />
            </div>
            <div class="row d-flex justify-content-center align-items-center">
              <!-- Color -->
              <div>
                <div class="col px-0 mt-4">
                  <h5 class="text-center w600">Color</h5>
                  <div class="rounded-1 mx-3">
                    <button
                      v-on:click="fgColorFunction('Black')"
                      class="btn color-button c-black p-1 rounded-1-left"
                      v-bind:class="this.$store.state.fgColor=='Black'?['border-1-primary']:''"
                    >
                      <div class="icon-small m-2">
                        <img
                          v-if="this.$store.state.fgColor=='Black'"
                          src="../assets/img/custom-paperwallet/icon-tick.svg"
                          alt="Tick"
                          class="w-100 mb-2"
                        />
                      </div>
                    </button>
                    <button
                      v-on:click="fgColorFunction('Blue')"
                      class="btn color-button c-blue p-1 rounded-0"
                      v-bind:class=" this.$store.state.fgColor=='Blue'?['border-1-primary']:''"
                    >
                      <div class="icon-small m-2">
                        <img
                          v-if="this.$store.state.fgColor=='Blue'"
                          src="../assets/img/custom-paperwallet/icon-tick.svg"
                          alt="Tick"
                          class="w-100 mb-2"
                        />
                      </div>
                    </button>
                    <button
                      v-on:click="fgColorFunction('Green')"
                      class="btn color-button c-green p-1 rounded-0"
                      v-bind:class="this.$store.state.fgColor=='Green'?['border-1-primary']:''"
                    >
                      <div class="icon-small m-2">
                        <img
                          v-if="this.$store.state.fgColor=='Green'"
                          src="../assets/img/custom-paperwallet/icon-tick.svg"
                          alt="Tick"
                          class="w-100 mb-2"
                        />
                      </div>
                    </button>
                    <button
                      v-on:click="fgColorFunction('Purple')"
                      class="btn color-button c-purple p-1 rounded-0"
                      v-bind:class="this.$store.state.fgColor=='Purple'?['border-1-primary']:''"
                    >
                      <div class="icon-small m-2">
                        <img
                          v-if="this.$store.state.fgColor=='Purple'"
                          src="../assets/img/custom-paperwallet/icon-tick.svg"
                          alt="Tick"
                          class="w-100 mb-2"
                        />
                      </div>
                    </button>
                    <button
                      v-on:click="fgColorFunction('Orange')"
                      class="btn color-button c-orange p-1 rounded-1-right"
                      v-bind:class="this.$store.state.fgColor=='Orange'?['border-1-primary']:''"
                    >
                      <div class="icon-small m-2">
                        <img
                          v-if="this.$store.state.fgColor=='Orange'"
                          src="../assets/img/custom-paperwallet/icon-tick.svg"
                          alt="Tick"
                          class="w-100 mb-2"
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Fit to Width or Height -->
              <div>
                <div class="col px-0 mt-4">
                  <h5 class="text-center w600">Fit</h5>
                  <div class="gradient-my-50 rounded-1 mx-3">
                    <button
                      v-on:click="fitToWidthFunction()"
                      class="btn p-1 rounded-1-left"
                      v-bind:class="this.$store.state.fitToWidth?['btn-my border-1-primary']:''"
                    >
                      <img
                        src="../assets/img/custom-paperwallet/icon-fit-to-width.svg"
                        alt="Fit to Width"
                        class="icon-small m-2"
                      />
                    </button>
                    <button
                      v-on:click="fitToHeightFunction()"
                      class="btn p-1 rounded-1-right"
                      v-bind:class="this.$store.state.fitToHeight?['btn-my border-1-primary']:''"
                    >
                      <img
                        src="../assets/img/custom-paperwallet/icon-fit-to-height.svg"
                        alt="Fit to Height"
                        class="icon-small m-2"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <!-- Align to Top, Bottom, V-Center or Left, Right, H-Center -->
              <div>
                <div class="col px-0 mt-4">
                  <h5 class="w600 text-center">Alignment</h5>
                  <div class="gradient-my-50 rounded-1 mx-3">
                    <button
                      v-on:click="$store.state.fitToWidth?alignToTopFunction():alignToLeftFunction()"
                      class="btn p-1 rounded-1-left"
                      v-bind:class="this.$store.state.fitToWidth&&this.$store.state.alignToTop||this.$store.state.fitToHeight&&this.$store.state.alignToLeft?['btn-my border-1-primary']:''"
                    >
                      <img
                        :src="require('../assets/img/custom-paperwallet/icon-' + (this.$store.state.fitToWidth ? 'align-to-top.svg':'align-to-left.svg'))"
                        alt="Align to Top"
                        class="icon-small m-2"
                      />
                    </button>
                    <button
                      v-on:click="$store.state.fitToWidth?alignToCenterVerticalFunction():alignToCenterHorizontalFunction()"
                      class="btn p-1 rounded-0"
                      v-bind:class="this.$store.state.fitToWidth&&this.$store.state.alignToCenterVertical||this.$store.state.fitToHeight&&this.$store.state.alignToCenterHorizontal?['btn-my border-1-primary']:''"
                    >
                      <img
                        :src="require('../assets/img/custom-paperwallet/icon-' + (this.$store.state.fitToWidth ? 'align-to-center-horizontal.svg':'align-to-center-vertical.svg'))"
                        alt="Align to Center Horizontal"
                        class="icon-small m-2"
                      />
                    </button>
                    <button
                      v-on:click="$store.state.fitToWidth?alignToBottomFunction():alignToRightFunction()"
                      class="btn p-1 rounded-1-right"
                      v-bind:class="this.$store.state.fitToWidth&&this.$store.state.alignToBottom||this.$store.state.fitToHeight&&this.$store.state.alignToRight?['btn-my border-1-primary']:''"
                    >
                      <img
                        :src="require('../assets/img/custom-paperwallet/icon-' + (this.$store.state.fitToWidth ? 'align-to-bottom.svg':'align-to-right.svg'))"
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
    },
    fitToWidthFunction() {
      this.$store.state.fitToHeight = false;
      this.$store.state.fitToWidth = true;
      this.alignToCenterVerticalFunction();
    },
    fitToHeightFunction() {
      this.$store.state.fitToWidth = false;
      this.$store.state.fitToHeight = true;
      this.alignToCenterHorizontalFunction();
    },
    alignToTopFunction() {
      this.$store.state.alignToBottom = false;
      this.$store.state.alignToCenterVertical = false;
      this.$store.state.alignToTop = true;
    },
    alignToBottomFunction() {
      this.$store.state.alignToTop = false;
      this.$store.state.alignToCenterVertical = false;
      this.$store.state.alignToBottom = true;
    },
    alignToCenterVerticalFunction() {
      this.$store.state.alignToBottom = false;
      this.$store.state.alignToTop = false;
      this.$store.state.alignToCenterVertical = true;
    },
    alignToLeftFunction() {
      this.$store.state.alignToRight = false;
      this.$store.state.alignToCenterHorizontal = false;
      this.$store.state.alignToLeft = true;
    },
    alignToRightFunction() {
      this.$store.state.alignToLeft = false;
      this.$store.state.alignToCenterHorizontal = false;
      this.$store.state.alignToRight = true;
    },
    alignToCenterHorizontalFunction() {
      this.$store.state.alignToLeft = false;
      this.$store.state.alignToRight = false;
      this.$store.state.alignToCenterHorizontal = true;
    },
    fgColorFunction(color) {
      this.$store.state.fgColor = color;
    }
  }
});
</script>