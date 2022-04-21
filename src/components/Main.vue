<template>
  <v-row>
    <v-container
      id="home"
      class="d-flex align-center justify-center c-height welcome"
      fluid
      tag="section"
    >
      <v-row align="end" justify="center">
        <Home />
        <div class="sky-container-above">
          <canvas id="sky"></canvas>
        </div>
      </v-row>
    </v-container>
    <v-container fluid id="about" class="c-height about" tag="section">
      <About />
      <v-row justify="center">
        <div class="sky-container-under">
          <canvas id="sky-under"></canvas>
        </div>
      </v-row>
    </v-container>
    <v-container fluid id="whyus" class="c-height whyus" tag="section">
      <Why />
    </v-container>
    <v-container fluid id="team" class="c-height team d-flex align-center" tag="section">
      <Team />
    </v-container>
    <v-footer>
      <FooterVue />
    </v-footer>
  </v-row>
</template>
<script>
import Team from './Team.vue';
import Why from './Why.vue';
import About from './About.vue';
import Home from './Home.vue';
import FooterVue from './Footer.vue';
import * as klouds from 'klouds';
export default {
  components: { Home, About, Why, Team, FooterVue },
  mounted() {
    this.createClouds();
  },
  methods: {
    /* Create a new Klouds object,
    passing in the selector for the sky and the speed of the clouds. Then create a
    second Klouds object, this time passing in the selector for the sky-under
    element and the speed of the clouds. */
    createClouds: function () {
      klouds.create({
        selector: '#sky',
        speed: 1,
        layerCount: 7,
        cloudColor1: '#a8c2fe',
        cloudColor2: '#fff2f1',
        bgColor: '#a2bdfe',
      });
      klouds.create({
        selector: '#sky-under',
        speed: -1,
        layerCount: 7,
        cloudColor1: '#a8c2fe',
        cloudColor2: '#fff2f1',
        bgColor: '#aec6fe',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
/*
Misc. start
*/
.c-height {
  height: 100%;
}

.v-row {
  height: 100%;
  width: 100%;
  margin: 0;
}

.v-container {
  padding: 0;
}

.v-footer {
  background-color: #0099ff;
}
/*
Misc. end
*/

/*
Sections start
*/
.welcome {
  background-color: #92b2fd;
  background: linear-gradient(
    180deg,
    rgba(146, 178, 253, 1) 0%,
    rgba(168, 194, 254, 1) 100%
  );
}

.about {
  background-color: #a8c2fe;
  background: linear-gradient(
    180deg,
    rgba(168, 194, 254, 1) 0%,
    rgba(190, 210, 254, 1) 100%
  );
}

.whyus {
  background-color: #bed2fe;
  background: linear-gradient(
    180deg,
    rgba(190, 210, 254, 1) 0%,
    rgba(212, 226, 255, 1) 100%
  );
}

.team {
  background: url('../assets/waves.svg') no-repeat center bottom;
  background-size: 100%;
  height: 100%;
  width: 100%;
  background-color: #d4e2ff;
}
/*
Sections end
*/

/*
Klouds start
*/
.sky-container-above {
  width: 100%;
  height: 260px;
}

.sky-container-under {
  width: 100%;
  height: 260px;
  transform: rotate(-180deg);
}
/*
Klouds end
*/
</style>
