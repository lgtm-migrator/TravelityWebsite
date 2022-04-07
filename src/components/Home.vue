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
    this.HomePara();
  },

  methods: {
    HomePara: function () {
      let pInstance;
      let scene = document.getElementById('scene');
      pInstance = new Parallax(scene, {
        relativeInput: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import 'vuetify/lib/styles/settings/_variables.scss';
h1 {
  font-size: 2em;
  font-family: 'Karla', sans-serif;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin: 0;
}

#scene {
  display: flex;
  justify-content: center;
  align-items: center;
}

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
