<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="4" lg="7" align="center">
        <TeamBoxes />
      </v-col>
      <v-col class="height-100" cols="12" sm="8" md="4" lg="5" align="center">
        <div class="d-none d-sm-flex">
          <Contact />
        </div>
        <div class="d-flex d-sm-none height-100 justify-center align-center">
          <MobileContact />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TeamBoxes from './TeamBoxes.vue';
import MobileContact from './MobileContact.vue';
import Contact from './ContactForm.vue';
export default {
  components: { Contact, TeamBoxes, MobileContact },
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
<style lang="scss" scoped>
.height-100 {
  height: 100%;
  overflow: hidden;
}

.width-100 {
  width: 100%;
}
</style>
