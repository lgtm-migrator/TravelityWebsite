<template>
  <nav class="nav-wrapper">
    <div class="navbar">
      <p v-for="t in titleArr" :key="t" class="navbar-title">{{ t }}</p>
    </div>
    <div class="navbar-links">
      <a href="#home" class="link-item" v-smooth-scroll>Home</a>
      <a href="#about" class="link-item" v-smooth-scroll>About</a>
      <a href="#whyus" class="link-item" v-smooth-scroll>Why Us</a>
      <a href="#team" class="link-item" v-smooth-scroll>The Team</a>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      titleArr: ["T", "r", "a", "v", "e", "l", "i", "t", "y"],
    };
  },

  methods: {},

  mounted() {
    function onScroll(event) {
      const scrollPos = window.scrollY;
      const navbar = document.querySelector(".navbar");
      const navbarTitle = document.querySelectorAll(".navbar-title");
      const navwrap = document.querySelector(".nav-wrapper");
      const navbarLinks = document.querySelector(".navbar-links");
      const navbarLinkItems = document.querySelectorAll(".link-item");
      const navbarLinksArrayLength = navbarLinkItems.length;

      if (scrollPos > 800) {
        navbar.classList.add("navbar-scrolled");
        navbarLinks.classList.add("navbar-links-scrolled");
        navbarTitle.forEach((item) => {
          item.classList.add("navbar-title-scrolled");
        });
        for (let i = 0; i < navbarLinksArrayLength; i++) {
          navbarLinkItems[i].classList.add("navbar-links-scrolled");
        }
        navwrap.classList.add("nav-wrapper-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
        navbarLinks.classList.remove("navbar-links-scrolled");
        navbarTitle.forEach((item) => {
          item.classList.remove("navbar-title-scrolled");
        });
        for (let i = 0; i < navbarLinksArrayLength; i++) {
          navbarLinkItems[i].classList.remove("navbar-links-scrolled");
        }
        navwrap.classList.remove("nav-wrapper-scrolled");
      }
      onHash();
    }

    function onHash() {
      var current = "";
      const navLinks = document.querySelectorAll(".link-item");
      document.querySelectorAll("div").forEach((div) => {
        const divTop = div.offsetTop;
        if (scrollY >= divTop - 65) {
          current = div.getAttribute("id");
        }
      });

      navLinks.forEach((item) => {
        item.classList.remove("navbar-link-active");
        if (item.attributes.getNamedItem("href").value === "#" + current) {
          item.classList.add("navbar-link-active");
        }
      });
    }

    window.addEventListener("DOMContentLoaded", function () {
      onHash();
      document.addEventListener("scroll", onScroll);
    });
  }, // auyaud
};
</script>
<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: fixed;
  z-index: 9999999;
  width: 100%;
  top: 0;
  overflow: hidden;
  transition: 0.1s;
}

.link-item {
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  line-height: 15px;
  padding: 25px;
  letter-spacing: 2px;
  transition: 0.4s;
}

.navbar p {
  font-size: 25px;
  font-weight: 700;
  font-family: "Exo 2", sans-serif;
  transition: 0.2s all ease-in;
  letter-spacing: 1.5px;
  color: white;
}

.navbar {
  display: flex;
}

.link-item:hover {
  color: black;
}

.navbar-scrolled {
  color: black;
}

.nav-wrapper-scrolled {
  background-color: transparent;
}

.navbar-links-scrolled {
  color: white;
}

.navbar-title-scrolled {
  transform: (rotate(-20deg));
}

.navbar-link-active {
  color: black;
}
</style>
