<template>
  <v-container class="height-100">
    <v-row class="align-left">
      <v-cols cols="12">
        <WhyInfo />
      </v-cols>
    </v-row>
  </v-container>
</template>
<script>
import WhyInfo from "./WhyInfo.vue";
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
  components: { WhyInfo },
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
