<template>
  <v-row>
    <v-container
      id="home"
      class="d-flex align-center justify-center c-height welcome"
      fluid
      tag="section"
    >
      <v-row align="end" justify="center">
        <Welcome />
        <div class="skyContainer">
          <canvas id="sky"></canvas>
        </div>
      </v-row>
    </v-container>
    <v-container fluid id="about" class="c-height about" tag="section">
      <!-- <About /> -->
    </v-container>
    <v-container fluid id="whyus" class="c-height whyus" tag="section">
      <!-- <Why /> -->
    </v-container>
    <v-container fluid id="team" class="c-height team" tag="section">
      <!-- <Team /> -->
    </v-container>
    <v-footer>
      <FooterVue />
    </v-footer>
  </v-row>
</template>
<script>
import Team from "./Team.vue";
import Why from "./Why.vue";
import About from "./About.vue";
import Welcome from "./Welcome.vue";
import FooterVue from "./Footer.vue";
import * as klouds from "klouds";
export default {
  components: { Welcome, About, Why, Team, FooterVue },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
    this.createClouds();
  },
  methods: {
    createClouds: function () {
      klouds.create({
        selector: "#sky",
        speed: 1,
        layerCount: 7,
        cloudColor1: "#a8c2fe",
        cloudColor2: "#fff2f1",
        bgColor: "#92b2fd",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
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

.welcome {
  background-color: #92b2fd;
}

.about {
  background-color: #a8c2fe;
}

.whyus {
  background-color: #bed2fe;
}

.team {
  background-color: #d4e2ff;
}

.skyContainer {
  width: 100%;
  height: 260px;
}
</style>
