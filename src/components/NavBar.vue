<template>
  <nav class="nav-wrapper">
    <div class="navbar justify-center align-center">
      <p v-for="t in titleArr" :key="t" class="navbar-title">{{ t }}</p>
    </div>
    <div class="navbar-links d-none d-sm-flex">
      <a href="#home" class="link-item" v-smooth-scroll="{ updateHistory: false }"
        >Home</a
      >
      <a href="#about" class="link-item" v-smooth-scroll="{ updateHistory: false }"
        >About</a
      >
      <a href="#whyus" class="link-item" v-smooth-scroll="{ updateHistory: false }"
        >Why Us</a
      >
      <a href="#team" class="link-item" v-smooth-scroll="{ updateHistory: false }"
        >The Team</a
      >
    </div>
    <div class="d-flex d-sm-none">
      <MobileNav />
    </div>
  </nav>
</template>
<script>
import MobileNav from './MobileNav.vue';
export default {
  components: {
    MobileNav,
  },
  data() {
    return {
      titleArr: ['T', 'r', 'a', 'v', 'e', 'l', 'i', 't', 'y'],
    };
  },

  methods: {
    // When the user scrolls down, the navbar and navbar links will be scrolled.
    onScroll: function (event) {
      // Variables
      const scrollPos = window.scrollY;
      const navbar = document.querySelector('.navbar');
      const navbarTitle = document.querySelectorAll('.navbar-title');
      const navwrap = document.querySelector('.nav-wrapper');
      const navbarLinks = document.querySelector('.navbar-links');
      const navbarLinkItems = document.querySelectorAll('.link-item');
      const navbarLinksArrayLength = navbarLinkItems.length;

      // Checks scrollPos value and runs if true
      if (scrollPos > 5) {
        navbar.classList.add('navbar-scrolled');
        navbarLinks.classList.add('navbar-links-scrolled');
        navbarTitle.forEach((item) => {
          item.classList.add('navbar-title-scrolled');
        });

        for (let i = 0; i < navbarLinksArrayLength; i++) {
          navbarLinkItems[i].classList.add('navbar-links-scrolled');
        }

        navwrap.classList.add('nav-wrapper-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
        navbarLinks.classList.remove('navbar-links-scrolled');
        navbarTitle.forEach((item) => {
          item.classList.remove('navbar-title-scrolled');
        });

        for (let i = 0; i < navbarLinksArrayLength; i++) {
          navbarLinkItems[i].classList.remove('navbar-links-scrolled');
        }

        navwrap.classList.remove('nav-wrapper-scrolled');
      }
      this.onHash(); // calls onHash method
    },

    /* When the user scrolls the page, the onHash function is called. The onHash function iterates through
    all the sections on the page and checks if the user's current scroll position is greater than the
    section's offsetTop. If it is, the section's id is set as the current section. Then, the navLinks
    are iterated through and the navbar-link-active class is removed from all the links. Finally, the
    navbar-link-active class is added to the link that has an href attribute equal to the current
    section. */
    onHash: function () {
      // Variables
      let current = '';
      const navLinks = document.querySelectorAll('.link-item');

      // Find the current id you are scrolled over
      document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
          current = section.getAttribute('id');
        }
      });

      // Sets the currect class to the right section when scrolled over it
      navLinks.forEach((item) => {
        item.classList.remove('navbar-link-active');
        if (item.attributes.getNamedItem('href').value === '#' + current) {
          item.classList.add('navbar-link-active');
        }
      });
    },
  },

  mounted() {
    // Calls onHash method and the adds a listener to scroll
    this.onHash();
    window.addEventListener('scroll', this.onScroll);
  },

  beforeUnmount() {
    // removes the listener
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>
<style lang="scss" scoped>
// Imports
@import 'vuetify/lib/styles/settings/_variables.scss';

/*
Nav bar
*/
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
  font-family: 'Exo 2', sans-serif;
  font-weight: 600;
  line-height: 15px;
  padding: 25px;
  letter-spacing: 2px;
  transition: 0.4s;
}

@media #{map-get($display-breakpoints, 'xs')} {
  .link-item {
    font-size: 20px;
    padding: 1px;
  }
}

.navbar p {
  font-size: 25px;
  font-weight: 700;
  font-family: 'Exo 2', sans-serif;
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
  background-color: rgba(146, 178, 253, 0.1);
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
/*
Nav bar
*/
</style>
