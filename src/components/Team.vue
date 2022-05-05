<template>
  <v-container fluid>
    <div class="space"></div>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="7" lg="7" align="center">
        <TeamBoxes />
      </v-col>
      <v-col class="height" cols="12" sm="8" md="5" lg="5" align="center">
        <div class="d-none d-md-flex">
          <Contact />
        </div>
        <div class="d-md-none justify-center align-center">
          <MobileContact />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamBoxes from "./TeamBoxes.vue";
import MobileContact from "./MobileContact.vue";
import Contact from "./ContactForm.vue";
export default {
  components: { Contact, TeamBoxes, MobileContact },
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.height {
  height: 37vh;
}
.v-row {
  margin: 0;
}
@media only screen and (max-width: 1280px) {
  .height {
    height: 42vh;
  }
}
@media only screen and (max-width: 1040px) {
  .height {
    height: 27vh;
  }
}
@media only screen and (max-width: 960px) {
  .height {
    height: 10vh;
  }
  .space {
    margin-top: 28em;
  }
}
</style>
