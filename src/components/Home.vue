<template>
  <v-container fluid>
    <div id="scene" class="scene">
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
      let scene = document.getElementById('scene');
      let pInstance = new Parallax(scene, {
        relativeInput: true,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
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

.scene {
  position: relative;
}

.cloudOne {
  position: absolute;
  top: 150px;
  left: 400px;
}

.cloudTwo {
  position: absolute;
  top: 200px;
  left: 300px;
}

.cloudThree {
  position: absolute;
  top: -50px;
  left: 800px;
}

.mText {
  position: absolute;
  left: 775px;
  top: 175px;
}
</style>
