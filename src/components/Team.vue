<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="4" lg="7" align="center">
        <!-- <TeamCarousel /> -->
        <TeamBoxes />
      </v-col>
      <v-col cols="12" sm="8" md="4" lg="5" align="center">
        <Contact />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamBoxes from './TeamBoxes.vue';
import TeamCarousel from './TeamCarousel.vue';
import Contact from './ContactForm.vue';
export default {
  components: { TeamCarousel, Contact, TeamBoxes },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  methods: {
    //
  },
};
</script>
<style lang="scss" scoped></style>
