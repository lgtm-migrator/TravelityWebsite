<template>
  <NavBar />
  <BToT />
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
import NavBar from './NavBar.vue';
import BToT from './BToT.vue';
import { createClouds } from '../assets/js/clouds';
export default {
  components: { Home, About, Why, Team, FooterVue, NavBar, BToT },
  data: () => ({}),
  mounted() {
    createClouds('#sky', '#sky-under');
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
/*
Misc.
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
Misc.
*/

/*
Sections
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
Sections
*/

/*
Klouds
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
Klouds
*/
</style>
