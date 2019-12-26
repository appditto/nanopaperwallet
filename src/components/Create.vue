<template>
  <div class="overflow-x-hidden" id="create-section">
    <Navbar :showDownloadButton="true"></Navbar>
    <CreateHero />
    <CreateGenerateAndPrint />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import CreateHero from "./CreateHero.vue";
import CreateGenerateAndPrint from "./CreateGenerateAndPrint.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "Create",
  components: {
    Navbar,
    CreateHero,
    CreateGenerateAndPrint,
    Footer
  },
  mounted: function() {
    // Opera 8.0+
    var isOpera =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== "undefined";

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(
        !window["safari"] ||
          (typeof safari !== "undefined" && safari.pushNotification)
      );

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome;
    this.$store.state.isSafari = isSafari;
  }
});
</script>

<style lang="scss">
@import "../assets/css/main.scss";
</style>