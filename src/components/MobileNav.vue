<template>
  <div class="main">
    <div class="bars" />
  </div>
  <div class="menu">
    <div class="navBefore" />
    <div class="nav">
      <ul></ul>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
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
};
</script>
<style lang="scss">
.nav {
  position: relative;
  margin-left: 100%;
  width: 20%;
  height: 100%;
  background: #a7a5a5;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navBefore {
  position: absolute;
  margin-left: 100%;
  width: 20%;
  height: 100%;
  background: #fff;
}
</style>
