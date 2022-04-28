<template>
  <v-container fluid>
    <div class="d-none d-sm-block">
      <div id="scene">
        <div style="" data-depth="0.4">
          <div class="cloudOne">CLOUDS</div>
        </div>
        <div data-depth="0.4">
          <div class="cloudTwo">CLOUDS</div>
        </div>
        <div data-depth="0.4">
          <div class="cloudThree">CLOUDS</div>
        </div>
        <div data-depth="0.4">
          <div class="mText">SMTH</div>
        </div>
      </div>
    </div>
    <div class="d-flex d-sm-none">
      <div>HEJ</div>
    </div>
  </v-container>
</template>
<script>
import Parallax from 'parallax-js';
export default {
  mounted() {
    this.HomePara(); // Calls HomePara method
  },

  methods: {
    // Start a instance of Parallax
    HomePara: function () {
      let scene = document.getElementById('scene');
      let pInstance = new Parallax(scene, {
        relativeInput: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// Imports
@import 'vuetify/lib/styles/settings/_variables.scss';

/*
Parallax scene
*/
#scene {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*
Parallax scene
*/

/*
Clouds
*/
.cloudOne {
  position: absolute;
  top: 150px;
  left: 400px;
  background-image: url('');
}

@media #{map-get($display-breakpoints, 'sm')} {
  .cloudOne {
    position: absolute;
    top: 80px;
    left: 180px;
    background-image: url('');
  }
}

.cloudTwo {
  position: absolute;
  top: 200px;
  left: 300px;
  background-image: url('');
}

@media #{map-get($display-breakpoints, 'sm')} {
  .cloudTwo {
    position: absolute;
    top: 200px;
    left: 150px;
    background-image: url('');
  }
}

.cloudThree {
  position: absolute;
  top: -50px;
  left: 800px;
  background-image: url('');
}

@media #{map-get($display-breakpoints, 'sm')} {
  .cloudThree {
    position: absolute;
    top: -50px;
    left: 340px;
    background-image: url('');
  }
}
/*
Clouds
*/

.mText {
  position: absolute;
  left: 775px;
  top: 175px;
}

@media #{map-get($display-breakpoints, 'sm')} {
  .mText {
    position: absolute;
    left: 375px;
    top: 175px;
  }
}
</style>
