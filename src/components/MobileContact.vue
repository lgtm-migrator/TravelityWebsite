<template>
  <div>
    <p>
      Contact us on
      <a class="slide-center-out" href="mailto:travelityDomain@gmail.com"
        >travelityDomain@gmail.com</a
      >
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
/*
Misc.
*/
div {
  font-family: 'Karla', sans-serif;
  height: 100%;
}
/*
Misc.
*/

/*
Underline hover
*/
.slide-center-out {
  text-decoration: none;
  display: inline-block;
  color: #779ffc;
}

.slide-center-out:after {
  content: '';
  display: block;
  height: 3px;
  width: 0;
  background: transparent;
  transition: width 0.5s ease, background-color 0.5s ease;
  -webkit-transition: width 0.5s ease, background-color 0.5s ease;
  -moz-transition: width 0.5s ease, background-color 0.5s ease;
  margin: auto;
}

.slide-center-out:active:after {
  width: 100%;
  background: #779ffc;
}
/*
Underline hover
*/
</style>
