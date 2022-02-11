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
};
</script>
<style>
html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>
