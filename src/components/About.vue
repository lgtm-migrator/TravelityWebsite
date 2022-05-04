<template>
  <v-container class="height-100">
    <v-row class="align-left">
      <v-cols cols="12">
        <AboutInfo />
      </v-cols>
    </v-row>
  </v-container>
</template>
<script>
import AboutInfo from "./AboutInfo.vue";
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  mounted() {
    //
  },
  components: { AboutInfo },
};
</script>
<style lang="scss" scoped>
.height-100 {
  height: 100%;
  width: 100%;
}

.v-row {
  margin: 0px;
}
</style>
