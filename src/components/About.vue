<template>
  <v-container class="height-100">
    <v-row class="align-left">
      <v-cols cols="12">
        <div class="d-none d-md-flex">
          <div class="header_styling">
            <h3>About us</h3>
          </div>
        </div>
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

.header_styling {
  margin-top: 30vh;
  border-color: black;
  border-bottom-style: solid;
  border-width: 1px;
  margin-left: 6.5vw;
  width: 82.8vw;
  margin-bottom: -30vh;
}

@media only screen and (max-width: 1280px) {
  .header_styling {
    margin-top: 32vh;
    border-color: black;
    border-bottom-style: solid;
    border-width: 1px;
    margin-left: 6.5vw;
    margin-bottom: -10vh;
  }
}
@media only screen and (max-width: 1200px) {
  .header_styling {
    margin-top: 31vh;
    border-color: black;
    border-bottom-style: solid;
    border-width: 1px;
    margin-left: -6.5vw;
    width: 90vw;
    margin-bottom: -10vh;
  }
}
@media only screen and (max-width: 960px) {
  .header_styling {
    margin-top: 23vh;
    border-color: black;
    border-bottom-style: solid;
    border-width: 1px;
    margin-left: 6.5vw;
    width: 90vw;
    margin-bottom: -10vh;
  }
}
@media only screen and (max-width: 800px) {
  .header_styling {
    margin-top: 30vh;
    border-color: black;
    border-bottom-style: solid;
    border-width: 1px;
    margin-left: 6.5vw;
    width: 90vw;
    margin-bottom: -30vh;
  }
}

@media only screen and (max-width: 1040px) and (max-height: 1380px) {
  .header_styling {
    margin-top: 20vh;
    border-color: black;
    border-bottom-style: solid;
    border-width: 1px;
    margin-left: -3vw;
    width: 96vw;
    margin-bottom: -10vh;
  }
}
@media only screen and (max-width: 1100px) and (max-height: 820px) {
  .header_styling {
    margin-top: 35vh;
    border-color: black;
    border-bottom-style: solid;
    border-width: 1px;
    margin-left: -3vw;
    width: 90vw;
    margin-bottom: -10vh;
  }
}
</style>
