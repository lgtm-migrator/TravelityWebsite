<template>
  <v-app>
    <v-main>
      <div class="loading-wrapper d-flex">
        <div id="loading-animation"></div>
      </div>
      <div class="main-page">
        <NavBar />
        <BToT />
        <Main />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import BToT from "./components/BToT.vue";
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
import lottie from "lottie-web";

export default {
  components: {
    NavBar,
    Main,
    BToT,
  },

  data() {
    return {
      loading: true,
    };
  },

  mounted() {
    this.startLoading();
    setTimeout(() => {
      this.stopLoading();
    }, 3000);
  },

  methods: {
    // It's loading animation.
    startLoading: function () {
      const animEl = document.getElementById("loading-animation");
      lottie.loadAnimation({
        container: animEl,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path:
          "https://gist.githubusercontent.com/Slash1y/31fe2f5d058ebd47bbe9bc70315597f6/raw/652e1f5799275c7e249ab2091632d9c6db27799f/loading.json",
      });
    },

    // It's hiding the loading animation.
    stopLoading: function () {
      const loadWrap = document.querySelector(".loading-wrapper");
      loadWrap.classList.add("loading-wrapper-hidden");
      lottie.destroy();
    },
  },
};
</script>
<style>
/*
Misc. start
*/
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

.main-page {
  height: 100vh;
  width: 100vw;
}
/*
Misc. end
*/

/*
Loading screen start
*/
.loading-wrapper {
  z-index: 7;
  opacity: 1;
  width: 100vw;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease-in;
}

.loading-wrapper-hidden {
  opacity: 0;
  display: none;
  z-index: -10;
}

#loading-animation {
  color: black;
  height: 25%;
}
/*
Loading screen end
*/
</style>
