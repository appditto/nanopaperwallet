<template>
  <div class="wallet-container" v-if="design != 'G'">
    <!-- QR Code for SEED -->
    <div class="wallet-qr z-1000" v-html="qrSeed" />
    <img
      svg-inline
      v-if="design == 'A'"
      class="address-logo z-1000"
      src="../assets/img/QRlogoA.svg"
    />
    <img
      svg-inline
      v-else-if="design == 'B'"
      class="address-logo z-1000"
      src="../assets/img/QRlogoB.svg"
    />
    <img
      svg-inline
      v-else-if="design == 'C'"
      class="address-logo z-1000"
      src="../assets/img/QRlogoC.svg"
    />
    <img
      svg-inline
      v-else-if="design == 'D'"
      class="address-logo z-1000"
      src="../assets/img/QRlogoA.svg"
    />
    <img
      svg-inline
      v-else-if="design =='Custom'"
      class="address-logo z-1000"
      :src="require('../assets/img/custom-paperwallet/QRlogo' + this.$store.state.fgColor +  '.svg')"
    />
    <img svg-inline v-else class="address-logo z-1000" src="../assets/img/QRlogoA.svg" />

    <!-- QR Code for ADDRESS -->
    <div class="address-qr z-1000" v-html="qrAddress" />
    <img
      svg-inline
      v-if="design == 'A'"
      class="address-logo-right z-1000"
      src="../assets/img/QRlogoA.svg"
    />
    <img
      svg-inline
      v-else-if="design == 'B'"
      class="address-logo-right z-1000"
      src="../assets/img/QRlogoB.svg"
    />
    <img
      svg-inline
      v-else-if="design == 'C'"
      class="address-logo-right z-1000"
      src="../assets/img/QRlogoC.svg"
    />
    <img
      svg-inline
      v-else-if="design == 'D'"
      class="address-logo-right z-1000"
      src="../assets/img/QRlogoA.svg"
    />
    <img
      svg-inline
      v-else-if="design =='Custom'"
      class="address-logo-right z-1000"
      :src="require('../assets/img/custom-paperwallet/QRlogo' + this.$store.state.fgColor +  '.svg')"
    />
    <img svg-inline v-else class="address-logo-right z-1000" src="../assets/img/QRlogoA.svg" />

    <!-- Paper Wallet Design -->
    <div v-if="design == 'A'" class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletemptyA.svg" />
    </div>
    <div v-else-if="design == 'B'" class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletemptyB.svg" />
    </div>
    <div v-else-if="design == 'C'" class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletemptyC.svg" />
    </div>
    <div v-else-if="design == 'D'" class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletemptyD.svg" />
    </div>
    <div v-else-if="design == 'E'" class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletemptyE.svg" />
    </div>
    <div v-else-if="design == 'F'" class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletemptyF.svg" />
    </div>

    <div v-else-if="design == 'Custom'" class="w-100 custom-image-container">
      <img
        v-if="this.$store.state.customImage"
        :src="this.$store.state.customImage"
        alt="Custom Image"
        class="custom-image"
        v-bind:class="{  'align-to-top':this.$store.state.alignToTop, 'align-to-bottom': this.$store.state.alignToBottom,  'align-to-center-vertical':this.$store.state.alignToCenterVertical, 'fit-to-width':this.$store.state.fitToWidth, 'fit-to-height':this.$store.state.fitToHeight, 'align-to-left':this.$store.state.alignToLeft, 'align-to-right': this.$store.state.alignToRight,  'align-to-center-horizontal':this.$store.state.alignToCenterHorizontal}"
      />
      <img
        alt="Custom Paperwallet Foreground"
        class="w-100"
        :src="require('../assets/img/custom-paperwallet/paperwalletemptyFg' + this.$store.state.fgColor + '.svg')"
        svg-inline
      />
    </div>

    <!-- Address -->
    <div
      v-bind:class="this.$store.state.isSafari?'safariAddressText':'addressText'"
      class="z-1000"
      v-html="twoLineAddress()"
    />
    <div
      v-bind:class="this.$store.state.isSafari?'safariSeedText':'seedText'"
      class="z-1000"
      v-html="seedTextStyled()"
    />
  </div>
  <div class="wallet-container" v-else>
    <div class="w-100 image-container">
      <img class="w-100" svg-inline src="../assets/img/paperwalletinstructions.svg" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import QRCode from "qrcode-svg";

export default Vue.extend({
  name: "PaperWallet",
  data() {
    return {
      qrSeed: "",
      qrAddress: ""
    };
  },
  props: {
    seed: String,
    address: String,
    design: String
  },
  methods: {
    twoLineAddress() {
      if (this.design == "Custom") {
        return `
            <span class="cbg${
              this.$store.state.fgColor
            }">${this.address.substring(0, 33)}</span><br/>
            <span class="cbg${
              this.$store.state.fgColor
            }">${this.address.substring(33)}</span>
          `;
      } else {
        return `
            <span class="addressTextColored${
              this.design
            }">${this.address.substring(0, 14)}</span>${this.address.substring(
          14,
          33
        )}<br/>${this.address.substring(
          33,
          58
        )}<span class="addressTextColored${
          this.design
        }">${this.address.substring(58)}</span>
          `;
      }
    },
    seedTextStyled() {
      let retLineOne = "";
      let retLineTwo = "";
      if (this.design == "Custom") {
        retLineOne = `<span class="cbg${
          this.$store.state.fgColor
        }">${this.seed.substring(0, 32)}</span>`;
        retLineTwo = `<span class="cbg${
          this.$store.state.fgColor
        }">${this.seed.substring(32)}</span>`;
      } else {
        for (let i = 0; i < this.seed.length; i++) {
          if (!isNaN(parseInt(this.seed[i], 10))) {
            if (i > 31) {
              retLineTwo = retLineTwo + this.seed[i];
            } else {
              retLineOne = retLineOne + this.seed[i];
            }
          } else {
            if (i > 31) {
              retLineTwo =
                retLineTwo +
                `<span class="addressTextColored${this.design}">${this.seed[i]}</span>`;
            } else {
              retLineOne =
                retLineOne +
                `<span class="addressTextColored${this.design}">${this.seed[i]}</span>`;
            }
          }
        }
      }
      return `${retLineOne}<br />${retLineTwo}`;
    }
  },
  mounted: function() {
    if (this.design != "G") {
      this.qrSeed = new QRCode({
        content: this.seed,
        width: 108.95,
        height: 108.95,
        padding: 1,
        ecl: "Q"
      }).svg();
      this.qrAddress = new QRCode({
        content: this.address,
        width: 108.95,
        height: 108.95,
        padding: 1,
        ecl: "Q"
      }).svg();
    }
  }
});
</script>

<style>
.addressText {
  position: absolute;
  font-family: "Overpass Mono", monospace;
  font-size: 5.5px;
  right: 0.22in;
  bottom: 0.72in;
  text-align: center;
  font-weight: 700;
}

.seedText {
  position: absolute;
  font-family: "Overpass Mono", monospace;
  font-size: 5.5px;
  left: 1in;
  bottom: 1.485in;
  text-align: center;
  transform: rotate(90deg);
  font-weight: 700;
}

.safariAddressText {
  position: absolute;
  font-family: "Overpass Mono", monospace;
  font-size: 5.4px;
  right: 0.27in;
  bottom: 0.75in;
  text-align: center;
  font-weight: 700;
}

.safariSeedText {
  position: absolute;
  font-family: "Overpass Mono", monospace;
  font-size: 5.4px;
  left: 1.05in;
  bottom: 1.49in;
  text-align: center;
  transform: rotate(90deg);
  font-weight: 700;
}

.addressTextColoredA {
  color: #2677ff;
}

.addressTextColoredB {
  color: #ff6c08;
}

.addressTextColoredC {
  color: #02b799;
}

.addressTextColoredD {
  color: #2677ff;
}

.addressTextColoredE {
  color: #2677ff;
}
.addressTextColoredF {
  color: #2677ff;
}

.cbgBlue {
  color: #ffffff;
}

.cbgBlack {
  color: #ffffff;
}

.cbgGreen {
  color: #ffffff;
}

.cbgPurple {
  color: #ffffff;
}

.cbgOrange {
  color: #ffffff;
}

.wallet-container {
  width: 9.25in;
  height: 2.8in;
  position: relative;
}

.wallet-qr {
  position: absolute;
  width: 1.135in;
  height: 1.135in;
  background-color: white;
  top: 0.67in;
  left: 0.27in;
}

.address-qr {
  position: absolute;
  width: 1.135in;
  height: 1.135in;
  background-color: white;
  top: 0.68in;
  right: 0.24in;
}

.address-logo {
  width: 0.3986in;
  height: 0.3986in;
  position: absolute;
  top: 1.05in;
  left: 0.65in;
}
.address-logo-right {
  width: 0.3986in;
  height: 0.3986in;
  position: absolute;
  top: 1.05in;
  right: 0.58in;
}
</style>