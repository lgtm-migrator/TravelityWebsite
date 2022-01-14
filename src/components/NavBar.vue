<template>
  <nav class="nav-wrapper">
    <div id="navbar">
      <p>Travelity</p>
    </div>
    <div id="navbar-links">
      <a href="#home" class="link-item">Home</a>
      <a href="#about" class="link-item">About</a>
      <a href="#whyus" class="link-item">Why Us</a>
      <a href="#team" class="link-item">The Team</a>
    </div>
  </nav>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      //
    };
  },

  methods: {},

  mounted() {
    function onScroll(event) {
      const scrollPos = window.scrollY;
      const navbar = document.querySelector("#navbar");
      const navwrap = document.querySelector(".nav-wrapper");
      const navbarLinks = document.querySelector("#navbar-links");
      const navbarLinkItems = document.querySelectorAll(".link-item");
      const navbarLinksArrayLength = navbarLinkItems.length;

      if (scrollPos > 800) {
        navbar.classList.add("navbar-scrolled");
        navbarLinks.classList.add("navbar-links-scrolled");
        navwrap.classList.add("nav-wrapper-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
        navbarLinks.classList.remove("navbar-links-scrolled");
        navwrap.classList.remove("nav-wrapper-scrolled");
      }

      for (let i = 0; i < navbarLinksArrayLength; i++) {
        const currentLink = navbarLinkItems[i];
        const currentLinkHref = currentLink.getAttribute("href");
        const currentLinkOffsetTop = document.querySelector(currentLinkHref);
        const currentLinkOffsetHeight = document.querySelector(currentLinkHref)
          .offsetHeight;

        if (
          scrollPos >= currentLinkOffsetTop &&
          scrollPos < currentLinkOffsetTop + currentLinkOffsetHeight
        ) {
          currentLink.classList.add("navbar-link-active");
        } else {
          currentLink.classList.remove("navbar-link-active");
        }
      }
    }
    window.addEventListener("DOMContentLoaded", function () {
      document.addEventListener("scroll", onScroll);
    });
  },
};
</script>
<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #92b2fd;
  padding: 1.5rem;
  position: fixed;
  z-index: 9999999;
  width: 100%;
  top: 0;
  overflow: hidden;
  transition: 0.4s;
}

#navbar-links a {
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 15px;
  padding: 10px;
  font-weight: bold;
}

#navbar p {
  font-size: 25px;
  font-weight: bold;
  transition: 0.4s;
}

#navbar-links a:hover {
  color: white;
}

.navbar-scrolled {
  color: white;
}

.nav-wrapper-scrolled {
  background-color: transparent;
}

.navbar-links-scrolled {
  color: white;
  font-weight: normal;
}

.navbar-link-active {
  color: black;
}
</style>
