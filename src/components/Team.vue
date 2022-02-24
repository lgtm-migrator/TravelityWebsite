<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="4" lg="6" align="center">
        <TeamCarousel />
        <!-- <TeamGsap /> -->
      </v-col>
      <v-col cols="12" sm="8" md="4" lg="6" align="center">
        <Contact />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamGsap from './TeamGsap.vue';
import TeamCarousel from './TeamCarousel.vue';
import Contact from './ContactForm.vue';
export default {
  components: { TeamCarousel, Contact, TeamGsap },
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
<style scoped></style>
