<template>
  <v-container fluid>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="12" sm="8" md="6" lg="7" align="center">
        <TeamBoxes />
      </v-col>
      <v-col class="height" cols="12" sm="8" md="5" lg="5" align="center">
        <div class="d-none d-sm-flex">
          <Contact />
        </div>
        <div class="d-flex d-sm-none height justify-center align-center">
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
};
</script>
<style lang="scss" scoped>
.height {
  height: 37vh;
}
.v-row {
  margin: 0;
}
@media only screen and (max-width:1280px){
  .height{
    height: 52vh;
  }
}
@media only screen and (max-width:960px){
  .height{
    height: 40vh;
  }
}
</style>
