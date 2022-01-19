<template>
  <v-row>
    <v-container
      id="home"
      class="d-flex align-center justify-center c-height c-width welcome"
      fluid
    >
      <!-- <Welcome /> -->
    </v-container>
    <v-container fluid id="about" class="c-height c-width about">
      <!-- <About /> -->
    </v-container>
    <v-container fluid id="whyus" class="c-height c-width whyus">
      <!-- <Why /> -->
    </v-container>
    <v-container fluid id="team" class="c-height c-width team">
      <!-- <Team /> -->
    </v-container>
    <v-footer><FooterVue /></v-footer>
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

.c-width {
  width: 100%;
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
  background-color: #f7f7f7;
}

.whyus {
  background-color: #f7f7f7;
}

.team {
  background-color: #f7f7f7;
}
</style>
