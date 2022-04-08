<template>
  <v-row class="d-flex align-center justify-center">
    <v-col cols="12" sm="6" md="4" lg="6">
      <span class="footer-text"
        >&copy; 2022 - {{ new Date().getFullYear() }} - Travelity | Terms and Conditions
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
export default {};
</script>
<style lang="scss" scoped>
.footer-text {
  font-family: 'Karla', sans-serif;
  font-size: 12px;
  color: white;
  text-align: center;
  padding: 5px;
  letter-spacing: 2px;
}

.footer-link {
  text-decoration: none;
  color: white;
  transition: 0.1s ease-in;
}

.footer-link:hover {
  color: black;
}
</style>
