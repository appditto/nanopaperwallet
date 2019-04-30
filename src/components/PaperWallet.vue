<template>
    <div class="wallet-container">
        <!-- QR Code for SEED -->
        <div class="wallet-qr" v-html="qrSeed" />
        <img svg-inline v-if="design == 'A'" class="address-logo" src="../assets/img/QRlogoA.svg" />
        <img svg-inline v-else-if="design == 'B'" class="address-logo" src="../assets/img/QRlogoB.svg" />
        <img svg-inline v-else-if="design == 'C'" class="address-logo" src="../assets/img/QRlogoC.svg" />
        <img svg-inline v-else class="address-logo" src="../assets/img/QRlogoD.svg" />

        <!-- QR Code for ADDRESS -->
        <div class="address-qr" v-html="qrAddress" />
        <img svg-inline v-if="design == 'A'" class="address-logo-right" src="../assets/img/QRlogoA.svg" />
        <img svg-inline v-else-if="design == 'B'" class="address-logo-right" src="../assets/img/QRlogoB.svg" />
        <img svg-inline v-else-if="design == 'C'" class="address-logo-right" src="../assets/img/QRlogoC.svg" />
        <img svg-inline v-else class="address-logo-right" src="../assets/img/QRlogoD.svg" />

        <!-- Paper Wallet Design -->
        <img svg-inline v-if="design == 'A'" src="../assets/img/paperwalletemptyA.svg" />
        <img svg-inline v-else-if="design == 'B'" src="../assets/img/paperwalletemptyB.svg" />
        <img svg-inline v-else-if="design == 'C'" src="../assets/img/paperwalletemptyC.svg" />
        <img svg-inline v-else src="../assets/img/paperwalletemptyD.svg" />

        <!-- Address -->
        <div class="addressText" v-html="twoLineAddress()" />
    </div>
</template>

<script>
import Vue from "vue";
import QRCode from "qrcode-svg";

export default Vue.extend({
    name: "PaperWallet",
    data() {
        return {
            qrSeed: '',
            qrAddress: ''
        }
    },
    props: {
      seed: String,
      address: String,
      design: String
    },
    methods: {
      twoLineAddress() {
          return `
            <span class="addressTextColored${this.design}">${this.address.substring(0, 14)}</span>${this.address.substring(14, 33)}<br/>${this.address.substring(33, 58)}<span class="addressTextColored${this.design}">${this.address.substring(58)}</span>
          `
      }  
    },
    mounted: function () {
        this.qrSeed = new QRCode({
            content: this.seed,
            width: 108.95,
            height: 108.95,
            padding: 1
        }).svg();
        this.qrAddress = new QRCode({
            content: this.address,
            width: 108.95,
            height: 108.95,
            padding: 1
        }).svg();        
    }
});
</script>

<style>
.addressText {
    position: absolute;
    font-family: 'Overpass Mono', monospace;
    font-size: 6.3px;
    right: 0.12in;
    bottom: 0.7in;
    text-align: center;
}

.addressTextColoredA {
    color: blue;
}

.addressTextColoredB {
    color: red;
}

.addressTextColoredC {
    color: orange;
}

.addressTextColoredD {
    color: green;
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
    top: 0.68in;
    left: 0.28in;
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
    top: 1.08in;
    left: 0.65in
}
.address-logo-right {
    width: 0.3986in;
    height: 0.3986in;
    position: absolute;
    top: 1.08in;
    right: 0.58in
}
</style>