<template>
    <div class="wallet-container">
        <!-- QR Code for SEED -->
        <div class="wallet-qr" v-html="qrSeed" />
        <img v-if="design == 'A'" class="address-logo" src="../assets/img/QRlogoA.svg" />
        <img v-else-if="design == 'B'" class="address-logo" src="../assets/img/QRlogoB.svg" />
        <img v-else-if="design == 'C'" class="address-logo" src="../assets/img/QRlogoC.svg" />
        <img v-else class="address-logo" src="../assets/img/QRlogoD.svg" />

        <!-- QR Code for ADDRESS -->
        <div class="address-qr" v-html="qrAddress" />
        <img v-if="design == 'A'" class="address-logo-right" src="../assets/img/QRlogoA.svg" />
        <img v-else-if="design == 'B'" class="address-logo-right" src="../assets/img/QRlogoB.svg" />
        <img v-else-if="design == 'C'" class="address-logo-right" src="../assets/img/QRlogoC.svg" />
        <img v-else class="address-logo-right" src="../assets/img/QRlogoD.svg" />

        <!-- Paper Wallet Design -->
        <img v-if="design == 'A'" src="../assets/img/paperwalletemptyA.svg" />
        <img v-else-if="design == 'B'" src="../assets/img/paperwalletemptyB.svg" />
        <img v-else-if="design == 'C'" src="../assets/img/paperwalletemptyC.svg" />
        <img v-else src="../assets/img/paperwalletemptyD.svg" />
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
.wallet-container {
    width: 9.25in;
    height: 2.8in;
    position: relative;
}

.wallet-qr {
    position: absolute;
    width: 1.135in;
    height: 1.135in;
    background-color: red;
    top: 0.68in;
    left: 0.28in;
}

.address-qr {
    position: absolute;
    width: 1.135in;
    height: 1.135in;
    background-color: red;
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