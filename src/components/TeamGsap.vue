<template>
  <div class="tile-container">
    <div class="tile hero-1"></div>
    <div class="tile hero-2"></div>
    <div class="tile hero-3"></div>
    <div class="tile hero-4"></div>
  </div>
  <div class="page-container">
    <div class="page hero-1"></div>
    <div class="page hero-2"></div>
    <div class="page hero-3"></div>
    <div class="page hero-4"></div>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  created() {},
  data() {
    return {};
  },

  mounted() {},
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.tile-container {
  text-align: center;
  user-select: none;
}

.tile {
  width: 200px;
  height: 200px;
  margin: 4px;
  cursor: pointer;
  display: inline-block;
}

.page-container {
  visibility: hidden;
}

.page {
  cursor: pointer;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10000000000;
}

.hero-1 {
  background: #f4db33;
}

.hero-2 {
  background: #972ff8;
}

.hero-3 {
  background: #7dd6fe;
}

.hero-4 {
  background: #dc3c84;
}
</style>
