<template>
  <v-container fluid>
    <h1>Travelity</h1>
  </v-container>
</template>
<script>
import * as klouds from "klouds";
export default {
  data() {
    return {
      //
    };
  },

  mounted() {
    //
    this.createClouds();
  },

  methods: {
    createClouds: function () {
      klouds.create({
        selector: "#sky",
        layerCount: 5,
        speed: 1,
        cloudColor1: "#fff",
        cloudColor2: "#fff",
        bgColor: "#92b2fd",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 2em;
  font-family: "Karla", sans-serif;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin: 0;
}
</style>
