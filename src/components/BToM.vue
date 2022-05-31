<template>
  ><router-link id="back" :to="{ name: 'Home' }"
    ><v-icon>mdi-arrow-left-thick</v-icon></router-link
  >
</template>

<script>
export default {
  data: () => ({}),

  mounted() {
    // Adds scroll listener
    window.addEventListener("scroll", this.backToTop);
  },

  beforeUnmount() {
    // Removes listener
    window.removeEventListener("scroll", this.backToTop);
  },
  methods: {
    // A function that will be called when the user clicks the button.
    backToTop() {
      // Variables
      const btn = document.querySelector("#back");
      const scrollPos = window.scrollY;

      // Checks scrollPos
      if (scrollPos > 10) {
        btn.classList.add("btn-show");
      } else {
        btn.classList.remove("btn-show");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/*
Back button
*/
#back {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  position: fixed;
  bottom: 50px;
  right: 35px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

#back.btn-show {
  opacity: 1;
  visibility: visible;
}

#back:active {
  cursor: pointer;
  background-color: #d1dffd;
  color: white;
}

#back:hover {
  cursor: pointer;
  background-color: #d1dffd;
  color: white;
}
/*
Back button
*/
</style>
