<template>
    <div class="container-my mx-auto">
        seed: <qriously :value="seed" :size="1024" level="L" id="seedQr"/>
        address: {{ address }}
        <qriously :value="address" :size="1024" level="L" id="addressQr" />
        <button>Testint css</button>
    </div>
</template>

<script>
import Vue from "vue";
import VueQriously from "vue-qriously";

Vue.use(VueQriously);

export default Vue.extend({
    name: "PaperWalletA",
    props: {
      seed: String,
      address: String
    },
});
</script>