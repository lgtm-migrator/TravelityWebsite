<template>
  <v-app>
    <v-main>
      <NavBar />
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";

export default {
  components: {
    NavBar,
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
