<template>
  <div class="section bg-footer mt-5">
    <div class="container-fluid">
      <div class="row justify-content-center d-flex">
        <div class="col-12 my-4">
          <div class="row justify-content-center d-flex">
            <a
              target="_blank"
              href="https://www.github.com/appditto/nanopaperwallet"
              class="grow m-3"
            >
              <img class="icon-3 mx-2" src="../assets/img/social/github-icon.svg" />
              <span>Source Code</span>
            </a>
            <a target="_blank" href="https://www.reddit.com/r/nanocurrency" class="grow m-3">
              <img class="icon-3 mx-2" src="../assets/img/social/reddit-icon.svg" />
              <span>Nano Reddit</span>
            </a>
            <a target="_blank" href="https://twitter.com/nano" class="grow m-3">
              <img class="icon-3 mx-2" src="../assets/img/social/twitter-icon.svg" />
              <span>Nano Twitter</span>
            </a>
            <a target="_blank" href="https://chat.nano.org/" class="grow m-3">
              <img class="icon-3 mx-2" src="../assets/img/social/discord-icon.svg" />
              <span>Nano Discord</span>
            </a>
          </div>
        </div>
        <div class="col-12">
          <p class="text-light text-center w300 mb-0">
            © 2020. For
            <a target="_blank" href="https://reddit.com/u/rockmsockmjesus">
              <span class="w700">u/Rockmsockmjesus</span>.
            </a>
          </p>
        </div>
        <div class="col-12 my-4">
          <div class="row justify-content-center align-items-center d-flex pb-3">
            <span class="text-light text-center w300">Made by</span>
            <a class="grow mx-2" target="_blank" href="https://appditto.com">
              <img class="logo-2" src="../assets/img/appditto-logo.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>