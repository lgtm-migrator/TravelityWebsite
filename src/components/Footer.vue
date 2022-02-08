<template>
  <div class="d-flex align-center justify-space-between footer-div">
    <span class="footer-text"
      >&copy; 2022 - {{ new Date().getFullYear() }} - Travelity</span
    >
    <div class="d-flex justify-center align-center">
      <a href="#" class="footer-link" target="_blank"><v-icon icon="mdi-twitter" /></a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-text {
  font-family: "Karla", sans-serif;
  font-size: 12px;
  color: white;
  text-align: center;
  padding: 5px;
  letter-spacing: 2px;
}

.footer-div {
  width: 100%;
}

.footer-link {
  text-decoration: none;
  color: white;
}
</style>
