<template>
  <v-container class="height-100" fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="4" lg="7" align="center">
        <!-- <TeamBoxes /> -->
        <TeamBoxesV2 />
      </v-col>
      <v-col class="height-100" cols="12" sm="8" md="4" lg="5" align="center">
        <div class="d-none d-sm-flex">
          <Contact />
        </div>
        <div class="d-flex d-sm-none justify-center align-center">
          <MobileContact />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MobileContact from './MobileContact.vue';
import TeamBoxesV2 from './TeamBoxesV2.vue';
import TeamBoxes from './TeamBoxes.vue';
import Contact from './ContactForm.vue';
export default {
  components: { Contact, TeamBoxes, TeamBoxesV2, MobileContact },
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
