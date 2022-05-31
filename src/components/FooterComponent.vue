<template>
  <v-row class="d-flex align-center justify-center">
    <v-col cols="12" sm="6" md="4" lg="6">
      <span class="footer-text"
        >&copy; 2022 - {{ new Date().getFullYear() }} - Travelity |
        <router-link class="footer-terms" to="/terms">Terms and Conditions</router-link>
      </span>
    </v-col>
    <v-col cols="12" sm="6" md="4" lg="6" align="right">
      <div>
        <a href="https://twitter.com/_Travelity" alt="twitter" class="footer-link">
          <v-icon icon="mdi-twitter" />
        </a>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
/*
Footer
*/
.footer-text {
  font-family: "Karla", sans-serif;
  font-size: 12px;
  color: white;
  text-align: center;
  padding: 5px;
  letter-spacing: 2px;
  .footer-terms {
    text-decoration: none;
    transition: color 0.1s ease-in;
    color: white;
  }
  .footer-terms:hover {
    color: black;
  }
  .footer-terms:active {
    color: black;
  }
}

.footer-link {
  text-decoration: none;
  color: white;
  transition: 0.1s ease-in;
}

.footer-link:hover {
  color: black;
}
@media only screen and (max-height: 1280px) {
  .space {
    padding-top: 10em;
  }
}
@media only screen and (max-height: 960px) {
  .space {
    padding-top: 10em;
  }
}
.footer-link:active {
  color: black;
}
</style>
