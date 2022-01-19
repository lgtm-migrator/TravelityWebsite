<template>
  <v-row>
    <v-container
      id="home"
      class="d-flex align-center justify-center c-height welcome"
      fluid
    >
      <!-- <Welcome /> -->
    </v-container>
    <v-container fluid id="about" class="c-height about">
      <!-- <About /> -->
    </v-container>
    <v-container fluid id="whyus" class="c-height whyus">
      <!-- <Why /> -->
    </v-container>
    <v-container fluid id="team" class="c-height team">
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
export default { components: { Welcome, About, Why, Team, FooterVue } };
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
</style>
