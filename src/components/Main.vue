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
    <v-container fluid id="about" class="spaceing_for_about c-height about" tag="section">
      <v-row justify="center">
        <div class="sky-container-under">
          <canvas id="sky-under"></canvas>
        </div>
        <About />
      </v-row>
    </v-container>
    <v-container fluid id="whyus" class="spaceing_for_info c-height whyus" tag="section">
      <Why />
    </v-container>
    <v-container
      fluid
      id="team"
      class="spaceing_for_team c-height team d-flex align-center"
      tag="section"
    >
      <Team />
    </v-container>
    <v-footer class="spaceing_for_footer">
      <FooterVue />
    </v-footer>
  </v-row>
</template>
<script>
import Team from "./Team.vue";
import Why from "./Why.vue";
import About from "./About.vue";
import Home from "./Home.vue";
import FooterVue from "./Footer.vue";
import NavBar from "./NavBar.vue";
import BToT from "./BToT.vue";
import { createClouds } from "../assets/js/clouds";
export default {
  components: { Home, About, Why, Team, FooterVue, NavBar, BToT },
  data: () => ({}),
  mounted() {
    createClouds("#sky", "#sky-under");
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
  background: url("../assets/waves.svg") no-repeat center bottom;
  background-size: 101vw;
  height: 100%;
  background-color: #d4e2ff;
}
/*
Sections
*/

/*
Klouds
*/
.sky-container-above {
  width: 100vw;
  height: 260px;
}

.sky-container-under {
  width: 100vw;
  height: 260px;
  transform: rotate(-180deg);
  margin-bottom: -21em;
}
/*
Klouds
*/

@media screen and (max-width: 800px) {
  .spaceing_for_info {
    height: 150vh;
  }
  .spaceing_for_about {
    height: 100vh;
  }
  .spaceing_for_team {
    height: 100vh;
  }
}

@media screen and (max-width: 420px) {
  .spaceing_for_info {
    height: 150vh;
  }
  .spaceing_for_about {
    height: 100vh;
  }
  .spaceing_for_team {
    height: 100vh;
  }
}

@media only screen and (max-width: 900px) and (max-height: 420px) {
  .spaceing_for_info {
    height: 150vh;
  }
  .spaceing_for_about {
    height: 100vh;
  }
  .spaceing_for_team {
    height: 350vh;
  }
}
@media only screen and (max-width: 940px) and (max-height: 440px) {
  .spaceing_for_info {
    height: 150vh;
  }
  .spaceing_for_about {
    height: 100vh;
  }
  .spaceing_for_team {
    height: 350vh;
  }
}
@media only screen and (max-width: 840px) and (max-height: 1200px) {
  .spaceing_for_team {
    margin-top: -50vh;
  }
}
@media only screen and (max-width: 1040px) and (max-height: 1380px) {
  .spaceing_for_team {
    margin-top: -50vh;
  }
}
</style>
