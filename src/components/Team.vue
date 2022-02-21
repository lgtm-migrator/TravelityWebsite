<template>
  <v-container fluid class="team-bg">
    <!-- <slider ref="slider" :options="options"> </slider> -->
  </v-container>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
import gsap from "gsap";
export default {
  components: {
    slider,
    slideritem,
  },
  data() {
    return {
      //
      options: {
        currentPage: 0,
      },
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
<style scoped>
.team-bg {
  background: url("../assets/waves.svg") no-repeat center bottom;
  background-size: 100%;
  height: 100%;
  width: 100%;
}
</style>
