<template>
  <div class="main">
    <div class="bars" />
  </div>
  <div class="menu">
    <div class="navBefore" />
    <div class="nav">
      <ul class="navigation">
        <li class="nav-item">
          <a class="link-item" href="#home" v-smooth-scroll="{ updateHistory: false }"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="link-item" href="#about" v-smooth-scroll="{ updateHistory: false }"
            >About</a
          >
        </li>
        <li class="nav-item">
          <a class="link-item" href="#whyus" v-smooth-scroll="{ updateHistory: false }"
            >Why Us</a
          >
        </li>
        <li class="nav-item">
          <a class="link-item" href="#team" v-smooth-scroll="{ updateHistory: false }"
            >The Team</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';
export default {
  methods: {
    NaviAnim: function () {
      const bars = document.querySelector('.bars');
      const navItem = document.querySelectorAll('.nav-item');

      bars.addEventListener('click', function (e) {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
          gsap.to('.menu', {
            duration: 0.1,
            display: 'flex',
            ease: 'expo.in',
          });
          gsap.to('.navBefore', {
            duration: 0.4,
            marginLeft: '0',
            ease: 'ease.in',
            clipPath: 'circle(100% at 100% 50%)',
          });
          gsap.to('.nav', {
            duration: 0.6,
            marginLeft: '0',
            delay: 0.1,
            ease: 'ease.in',
            clipPath: 'circle(100% at 100% 50%)',
          });
          gsap.to('.navigation', {
            duration: 0.7,
            opacity: '1',
            delay: 0.6,
            ease: 'expo.in',
          });
        } else {
          gsap.to('.navigation', {
            duration: 0.2,
            opacity: '0',
            ease: 'expo.in',
          });
          gsap.to('.nav', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.3,
            ease: 'ease.out',
            clipPath: 'circle(0% at 100% 50%)',
          });
          gsap.to('.navBefore', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.5,
            ease: 'ease.out',
            clipPath: 'circle(0% at 100% 50%)',
          });
          gsap.to('.menu', {
            duration: 1,
            display: 'none',
            delay: 1,
            ease: 'expo.in',
          });
        }
      });

      navItem.forEach((item) => {
        item.addEventListener('click', function (e) {
          bars.classList.remove('active');
          gsap.to('.navigation', {
            duration: 0.2,
            opacity: '0',
            ease: 'expo.in',
          });
          gsap.to('.nav', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.3,
            ease: 'ease.out',
            clipPath: 'circle(0% at 100% 50%)',
          });
          gsap.to('.navBefore', {
            duration: 1,
            marginLeft: '100%',
            delay: 0.5,
            ease: 'ease.out',
            clipPath: 'circle(0% at 100% 50%)',
          });
          gsap.to('.menu', {
            duration: 1,
            display: 'none',
            delay: 1,
            ease: 'expo.in',
          });
        });
      });
    },
  },
  mounted() {
    this.NaviAnim();
  },
};
</script>
<style lang="scss">
.main {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.main .bars {
  position: fixed;
  height: 30px;
  width: 50px;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999999999;
}
.main .bars::before {
  position: absolute;
  content: '';
  height: 2px;
  width: 90%;
  background: #fff;
  transition: 0.3s linear;
}
.main .bars.active::before {
  transform: rotate(45deg);
  width: 50%;
  top: 5%;
  background: #000;
}
.main .bars::after {
  position: absolute;
  content: '';
  height: 2px;
  width: 90%;
  background: #fff;
  top: 35%;
  transition: 0.3s linear;
}
.main .bars.active::after {
  transform: rotate(-45deg);
  width: 50%;
  top: 5%;
  background: #000;
}
.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 999999999;
  overflow: hidden;
  display: none;
}
.menu .navBefore {
  position: absolute;
  margin-left: 100%;
  width: 100%;
  height: 100%;
  background: #fff;
  clip-path: circle(0% at 100% 50%);
}
.menu .nav {
  position: absolute;
  margin-left: 100%;
  width: 100%;
  height: 100%;
  background: #92b2fd;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle(0% at 100% 50%);
}
.menu .nav ul {
  opacity: 0;
}
.menu .nav ul li {
  list-style: none;
  margin: 5px;
}
.menu .nav ul li a {
  position: relative;
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
  text-align: center;
  color: #fff;
  transition: 0.2s linear;
}
</style>
