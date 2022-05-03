<template>
  <v-app>
    <v-main>
      <div class="loading-wrapper d-flex">
        <div id="loading-animation"></div>
      </div>
      <div class="main-page">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import lottie from 'lottie-web';

export default {
  data: () => ({
    loading: true,
  }),

  mounted() {
    this.startLoading(); // Calls start loading method

    // Sets timeout for 3s
    setTimeout(() => {
      this.stopLoading(); // Calls stop loading method
    }, 3000);
  },

  methods: {
    // Loading animation.
    startLoading: function () {
      const animEl = document.getElementById('loading-animation');
      lottie.loadAnimation({
        container: animEl,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path:
          'https://gist.githubusercontent.com/Slash1y/31fe2f5d058ebd47bbe9bc70315597f6/raw/652e1f5799275c7e249ab2091632d9c6db27799f/loading.json',
      });
    },

    // Hides the loading animation.
    stopLoading: function () {
      const loadWrap = document.querySelector('.loading-wrapper');
      loadWrap.classList.add('loading-wrapper-hidden');
      lottie.destroy(); // Destroys the animation to decrease memory usage
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
}
/*
Misc. end
*/

/*
Loading screen start
*/
.loading-wrapper {
  z-index: 9999999999999999999999;
  opacity: 1;
  width: 100%;
  height: 100vh;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease-in;
}

.loading-wrapper-hidden {
  opacity: 0;
  display: none;
  z-index: -9999999999999999999999999999;
}

#loading-animation {
  color: black;
  height: 25%;
}
/*
Loading screen end
*/
</style>
